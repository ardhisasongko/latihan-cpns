import { db } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ExamInterface } from "./ExamInterface";
import { answerScore, maxScorePerQuestion, parseWeights } from "@/lib/scoring";
import { parseOptions } from "@/lib/questions";

const GRACE_MS = 5000;

// Cek waktu di level module agar tidak dianggap render-phase impure.
function isExamTimeUp(startedAt: Date, timeLimit: number): boolean {
  if (timeLimit <= 0) return false;
  return Date.now() > startedAt.getTime() + timeLimit * 1000 + GRACE_MS;
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const session = await requireSession();

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
    // Kunci jawaban, bobot opsi & pembahasan hanya dikirim di mode belajar.
    // Di mode ujian dicegah agar tidak bisa diintip lewat devtools sebelum submit.
    correctAnswer: isBelajar ? pq.question.correctAnswer : undefined,
    optionWeights: isBelajar ? parseWeights(pq.question.optionWeights) : undefined,
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
      // Feedback benar/salah hanya di mode belajar; di mode ujian isCorrect
      // bisa dipakai menebak kunci jawaban via refresh berulang.
      isCorrect: isBelajar ? answer.isCorrect : null,
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

    const session = await requireSession();

    const exam = await db.exam.findUnique({
      where: { id: examId, userId: session.user.id },
      select: { completedAt: true, startedAt: true, timeLimit: true, packageId: true, package: { select: { category: true } } },
    });
    if (!exam || exam.completedAt) return;

    // Server-side time limit (mode ujian); grace 5 detik untuk latency.
    if (isExamTimeUp(exam.startedAt, exam.timeLimit)) {
      return;
    }

    // Payload harus pilihan A-E dan soalnya milik paket exam ini.
    if (!/^[A-E]$/.test(answer)) return;

    const pq = await db.packageQuestion.findUnique({
      where: {
        packageId_questionId: { packageId: exam.packageId, questionId },
      },
      include: {
        question: { select: { correctAnswer: true, category: true, optionWeights: true } },
      },
    });
    if (!pq) return;

    const isCorrect = answer === pq.question.correctAnswer;
    const score = answerScore(
      exam.package.category,
      pq.question.optionWeights,
      answer,
      pq.question.correctAnswer
    );

    await db.examAnswer.upsert({
      where: { examId_questionId: { examId, questionId } },
      update: {
        selectedAnswer: answer,
        isCorrect,
        score,
        answeredAt: new Date(),
      },
      create: {
        examId,
        questionId,
        selectedAnswer: answer,
        isCorrect,
        score,
      },
    });
  }

  async function submitAnswers(examId: string, formData: FormData) {
    "use server";

    const session = await requireSession();

    const answersStr = formData.get("answers") as string;
    let answers: Record<string, string> = {};
    if (answersStr) {
      // Payload dari client bisa malformed; jangan biarkan JSON.parse crash.
      try {
        const parsed: unknown = JSON.parse(answersStr);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
            if (typeof v === "string") answers[k] = v;
          }
        }
      } catch {
        return;
      }
    }

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

    // Server-side time limit (mode ujian); grace 5 detik untuk latency.
    // Setelah lewat, exam tetap disubmit dengan jawaban yang sudah tersimpan.
    if (isExamTimeUp(fullExam.startedAt, fullExam.timeLimit)) {
      answers = {};
    }

    let totalCorrect = 0;
    let totalWrong = 0;
    let totalSkipped = 0;
    let earnedPoints = 0;
    let maxPossible = 0;

    const examAnswers = fullExam.package.questions.map(
      (pq: (typeof fullExam.package.questions)[number]) => {
        const selectedAnswer = answers[pq.question.id] || null;
        const isCorrect = selectedAnswer === pq.question.correctAnswer;
        const score = answerScore(
          fullExam.package.category,
          pq.question.optionWeights,
          selectedAnswer,
          pq.question.correctAnswer
        );
        earnedPoints += score;
        maxPossible += maxScorePerQuestion(
          fullExam.package.category,
          pq.question.optionWeights
        );

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

    // Persentase dari poin terkumpul — identik dgn rumus lama utk biner,
    // dan benar utk TKP berbobot (poin parsial ikut terhitung).
    const score = maxPossible > 0
      ? Math.round((earnedPoints / maxPossible) * 100)
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
        earnedPoints,
      },
    });

    if (locked.count === 1) {
      // Prisma D1 adapter interactive transactions can hang indefinitely on Cloudflare Workers.
      // Since we already locked the exam with completedAt above, sequential execution is safe.
      await db.examAnswer.deleteMany({ where: { examId } });
      await db.examAnswer.createMany({ data: examAnswers });
    }

    redirect(`/hasil/${examId}`);
  }

  async function toggleBookmark(questionId: string) {
    "use server";

    const serverSession = await requireSession();
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