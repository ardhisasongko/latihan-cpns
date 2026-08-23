import { db } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { examResult, weightedExamResult, parseWeights } from "@/lib/scoring";import { parseOptions } from "@/lib/questions";

export default async function HasilPage({
  params,
}: {
  params: Promise<{ examId: string }>;
}) {
  const session = await requireSession();

  const { examId } = await params;

  const exam = await db.exam.findUnique({
    where: { id: examId, userId: session.user.id },
    include: {
      package: true,
      answers: { include: { question: true } },
    },
  });

  if (!exam || !exam.completedAt) notFound();

  const category = exam.package.category;
  const totalQuestions = exam.package.totalQuestions;
  // TKP berbobot: pakai total poin terkumpul; data lama / kategori lain: biner.
  const hasAnyWeights = exam.answers.some((a) => {
    const w = parseWeights(a.question.optionWeights);
    return Object.keys(w).length > 0;
  });
  const isWeighted =
    category === "TKP" && exam.earnedPoints != null && hasAnyWeights;
  const { rawScore, maxScore, passing, percentageScore, isLulus } = isWeighted
    ? weightedExamResult(totalQuestions, exam.earnedPoints!)
    : examResult(category, totalQuestions, exam.totalCorrect || 0);

  const questionAnswers = await db.packageQuestion.findMany({
    where: { packageId: exam.packageId },
    include: { question: true },
    orderBy: { order: "asc" },
  });

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/riwayat"
        className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
      >
        ← Kembali ke Riwayat
      </Link>

      {/* Score Card */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Hasil Ujian</h1>
          <p className="text-muted-foreground">{exam.package.name}</p>
        </div>

        <div
          className={`text-center p-6 rounded-xl mb-6 ${
            isLulus
              ? "bg-success/10 border border-success/30"
              : "bg-danger/10 border border-danger/30"
          }`}
        >
          <div
            className={`text-5xl font-bold mb-2 ${
              isLulus ? "text-success" : "text-danger"
            }`}
          >
            {percentageScore}
          </div>
          <div className="text-sm text-muted-foreground mb-3">
            Skor 0-100 (Poin Asli: {rawScore}/{maxScore})
          </div>
          <div
            className={`text-2xl font-bold ${
              isLulus ? "text-success" : "text-danger"
            }`}
          >
            {isLulus ? "LULUS" : "TIDAK LULUS"}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Nilai batas: {passing}/{maxScore}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-success/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-success">
              {exam.totalCorrect}
            </div>
            <div className="text-xs text-muted-foreground">Benar</div>
          </div>
          <div className="p-4 bg-danger/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-danger">
              {exam.totalWrong}
            </div>
            <div className="text-xs text-muted-foreground">Salah</div>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-warning">
              {exam.totalSkipped}
            </div>
            <div className="text-xs text-muted-foreground">Kosong</div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {exam.package.totalQuestions} soal · {exam.mode === "ujian" ? "Mode Ujian" : "Mode Belajar"} ·{" "}
          {new Date(exam.completedAt).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Question Review */}
      <h2 className="text-lg font-bold mb-4">Pembahasan Soal</h2>
      <div className="space-y-4">
        {questionAnswers.map((pq: (typeof questionAnswers)[number], index: number) => {
          const answer = exam.answers.find(
            (a: (typeof exam.answers)[number]) => a.questionId === pq.question.id
          );
          const userAnswer = answer?.selectedAnswer || null;
          const isCorrect = answer?.isCorrect ?? false;
          const options = parseOptions(pq.question.options);
          const weights = parseWeights(pq.question.optionWeights);
          const hasWeights = Object.keys(weights).length > 0;
          const bestLetter = hasWeights
            ? Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0]
            : pq.question.correctAnswer;
          const earnedThis = answer?.score ?? 0;

          return (
            <div
              key={pq.question.id}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Soal {index + 1}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    hasWeights
                      ? userAnswer
                        ? isCorrect
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                        : "bg-warning/10 text-warning"
                      : isCorrect
                        ? "bg-success/10 text-success"
                        : userAnswer
                          ? "bg-danger/10 text-danger"
                          : "bg-warning/10 text-warning"
                  }`}
                >
                  {hasWeights && userAnswer
                    ? `+${earnedThis} poin`
                    : isCorrect
                      ? "Benar"
                      : userAnswer
                        ? "Salah"
                        : "Kosong"}
                </span>
              </div>

              <p className="mb-4 whitespace-pre-wrap">{pq.question.question}</p>

              <div className="space-y-2 mb-4">
                {options.map((option, i) => {
                  const letter = String.fromCharCode(65 + i);
                  const isThisBest = letter === bestLetter;
                  const isThisUserAnswer = letter === userAnswer;

                  let optionClass = "border-border";
                  if (isThisBest) {
                    optionClass = "border-success/40 bg-success/10";
                  } else if (isThisUserAnswer) {
                    optionClass = hasWeights
                      ? "border-warning/40 bg-warning/10"
                      : "border-danger/40 bg-danger/10";
                  }

                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 border rounded-lg ${optionClass}`}
                    >
                      <span className="font-medium text-sm">{letter}.</span>
                      <span className="text-sm flex-1">{option}</span>
                      {hasWeights && (
                        <span className="text-xs text-muted-foreground shrink-0">
                          {weights[letter]} poin
                        </span>
                      )}
                      {isThisBest && (
                        <Check className="w-4 h-4 text-success shrink-0" aria-label="Opsi terbaik" />
                      )}
                      {isThisUserAnswer && !isThisBest && (
                        <X className="w-4 h-4 text-danger shrink-0" aria-label="Jawaban kamu" />
                      )}
                    </div>
                  );
                })}
              </div>

              {userAnswer && (
                <div className="text-sm mb-3">
                  <span className="text-muted-foreground">Jawaban kamu: </span>
                  <span
                    className={`font-medium ${
                      isCorrect ? "text-success" : hasWeights ? "text-warning" : "text-danger"
                    }`}
                  >
                    {userAnswer}
                    {hasWeights && ` (+${earnedThis} poin)`}
                  </span>
                  {!isCorrect && (
                    <>
                      <span className="text-muted-foreground"> · {hasWeights ? "Opsi terbaik" : "Kunci"}: </span>
                      <span className="font-medium text-success">
                        {bestLetter}
                      </span>
                    </>
                  )}
                </div>
              )}

              {!userAnswer && (
                <div className="text-sm mb-3">
                  <span className="text-muted-foreground">Jawaban: </span>
                  <span className="font-medium text-warning">Kosong</span>
                  <span className="text-muted-foreground"> · {hasWeights ? "Opsi terbaik" : "Kunci"}: </span>
                  <span className="font-medium text-success">
                    {bestLetter}
                  </span>
                </div>
              )}

              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">Penjelasan:</p>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {pq.question.explanation}
                </p>
                {pq.question.explanationSource && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Sumber: {pq.question.explanationSource}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/latihan"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Kembali ke Daftar Paket
        </Link>
      </div>
    </div>
  );
}
