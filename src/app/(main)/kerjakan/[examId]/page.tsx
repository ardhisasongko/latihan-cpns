import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ExamInterface } from "./ExamInterface";
import { pointsFor } from "@/lib/scoring";
import { parseOptions } from "@/lib/questions";

export default async function ExamPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const { examId } = await params;

  const exam = await db.exam.findUnique({
    where: {
      id: examId,
      userId: session.user.id,
    },
    include: {
      package: true,
      answers: true,
    },
  });

  if (!exam) {
    redirect("/");
  }

  if (exam.completedAt) {
    redirect(`/hasil/${exam.id}`);
  }

  const packageQuestions = await db.packageQuestion.findMany({
    where: { packageId: exam.packageId },
    include: { question: true },
    orderBy: { order: "asc" },
  });

  const isBelajar = exam.mode === "belajar";
  const questions = packageQuestions.map((pq: (typeof packageQuestions)[number]) => ({
    id: pq.question.id,
    question: pq.question.question,
    options: parseOptions(pq.question.options),
    // Kunci jawaban & pembahasan hanya dikirim di mode belajar.
    // Di mode ujian dicegah agar tidak bisa diintip lewat devtools sebelum submit.
    correctAnswer: isBelajar ? pq.question.correctAnswer : undefined,
    explanation: isBelajar ? pq.question.explanation : undefined,
    explanationSource: isBelajar ? pq.question.explanationSource : undefined,
  }));

  const existingAnswers: Record<
    string,
    { selectedAnswer: string | null; isCorrect: boolean | null }
  > = {};
  for (const answer of exam.answers) {
    existingAnswers[answer.questionId] = {
      selectedAnswer: answer.selectedAnswer,
      isCorrect: answer.isCorrect,
    };
  }

  const bookmarks = await db.bookmark.findMany({
    where: {
      userId: session.user.id,
      questionId: { in: questions.map((q: { id: string }) => q.id) },
    },
  });

  const bookmarkedIds = bookmarks.map((b: { questionId: string }) => b.questionId);

  async function saveAnswer(examId: string, questionId: string, answer: string) {
    "use server";

    const session = await auth();
    if (!session?.user?.id) return;

    const exam = await db.exam.findUnique({
      where: { id: examId, userId: session.user.id },
      select: { completedAt: true, package: { select: { category: true } } },
    });
    if (!exam || exam.completedAt) return;

    const question = await db.question.findUnique({
      where: { id: questionId },
      select: { correctAnswer: true, category: true },
    });
    if (!question) return;

    const isCorrect = answer === question.correctAnswer;

    await db.examAnswer.upsert({
      where: { examId_questionId: { examId, questionId } },
      update: {
        selectedAnswer: answer,
        isCorrect,
        score: isCorrect ? pointsFor(question.category) : 0,
        answeredAt: new Date(),
      },
      create: {
        examId,
        questionId,
        selectedAnswer: answer,
        isCorrect,
        score: isCorrect ? pointsFor(question.category) : 0,
      },
    });
  }

  async function submitAnswers(examId: string, formData: FormData) {
    "use server";

    const session = await auth();
    if (!session?.user?.id) return;

    const answersStr = formData.get("answers") as string;
    const answers: Record<string, string> = answersStr
      ? JSON.parse(answersStr)
      : {};

    const fullExam = await db.exam.findUnique({
      where: { id: examId, userId: session.user.id },
      include: {
        package: {
          include: {
            questions: { include: { question: true } },
          },
        },
      },
    });

    if (!fullExam || fullExam.completedAt) {
      return;
    }

    let totalCorrect = 0;
    let totalWrong = 0;
    let totalSkipped = 0;

    const examAnswers = fullExam.package.questions.map(
      (pq: (typeof fullExam.package.questions)[number]) => {
        const selectedAnswer = answers[pq.question.id] || null;
        const isCorrect = selectedAnswer === pq.question.correctAnswer;
        const score = isCorrect ? pointsFor(pq.question.category) : 0;

        if (selectedAnswer === null) {
          totalSkipped++;
        } else if (isCorrect) {
          totalCorrect++;
        } else {
          totalWrong++;
        }

        return {
          examId,
          questionId: pq.question.id,
          selectedAnswer,
          isCorrect,
          score,
        };
      }
    );

    const totalQuestions = fullExam.package.questions.length;
    const score = totalQuestions > 0
      ? Math.round((totalCorrect / totalQuestions) * 100)
      : 0;

    // Atomic: kunci exam dulu, lalu timpa jawaban dengan state client terakhir
    const locked = await db.exam.updateMany({
      where: { id: examId, userId: session.user.id, completedAt: null },
      data: {
        completedAt: new Date(),
        score,
        totalCorrect,
        totalWrong,
        totalSkipped,
      },
    });

    if (locked.count === 1) {
      // Interactive transaction: proxy db.ts menghasilkan native Promise,
      // bukan PrismaPromise -> array-form $transaction menolak. Callback
      // menerima tx client asli sehingga aman.
      await db.$transaction(async (tx) => {
        await tx.examAnswer.deleteMany({ where: { examId } });
        await tx.examAnswer.createMany({ data: examAnswers });
      });
    }

    redirect(`/hasil/${examId}`);
  }

  async function toggleBookmark(questionId: string) {
    "use server";

    const serverSession = await auth();
    if (!serverSession?.user?.id) return;
    const userId = serverSession.user.id;

    const existing = await db.bookmark.findUnique({
      where: {
        userId_questionId: { userId, questionId },
      },
    });

    if (existing) {
      await db.bookmark.delete({ where: { id: existing.id } });
    } else {
      await db.bookmark.create({
        data: { userId, questionId },
      });
    }
  }

  const submitWithExamId = submitAnswers.bind(null, exam.id);
  const saveAnswerWithExamId = saveAnswer.bind(null, exam.id);
  const toggleBookmarkWithUser = toggleBookmark;

  return (
    <ExamInterface
      mode={exam.mode}
      timeLimit={exam.timeLimit}
      startedAt={exam.startedAt.toISOString()}
      questions={questions}
      initialAnswers={existingAnswers}
      initialBookmarks={bookmarkedIds}
      packageName={exam.package.name}
      onSubmit={submitWithExamId}
      onSaveAnswer={saveAnswerWithExamId}
      onToggleBookmark={toggleBookmarkWithUser}
    />
  );
}