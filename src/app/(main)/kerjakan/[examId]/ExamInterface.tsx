"use client";

import { useState, useEffect, useRef } from "react";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer?: string;
  explanation?: string;
  explanationSource?: string;
};

type Answer = {
  selectedAnswer: string | null;
  isCorrect: boolean | null;
};

type ExamInterfaceProps = {
  mode: string;
  timeLimit: number;
  startedAt: string;
  questions: Question[];
  initialAnswers: Record<string, Answer>;
  initialBookmarks: string[];
  packageName: string;
  onSubmit: (formData: FormData) => Promise<void>;
  onSaveAnswer: (questionId: string, answer: string) => Promise<void>;
  onToggleBookmark: (questionId: string) => Promise<void>;
};

export function ExamInterface({
  mode,
  timeLimit,
  startedAt,
  questions,
  initialAnswers,
  initialBookmarks,
  packageName,
  onSubmit,
  onSaveAnswer,
  onToggleBookmark,
}: ExamInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const [qId, answer] of Object.entries(initialAnswers)) {
      if (answer.selectedAnswer) init[qId] = answer.selectedAnswer;
    }
    return init;
  });
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>(
    () => {
      const init: Record<string, boolean> = {};
      for (const [qId, answer] of Object.entries(initialAnswers)) {
        if (answer.isCorrect !== null) init[qId] = true;
      }
      return init;
    }
  );
  const [bookmarks, setBookmarks] = useState<Set<string>>(
    new Set(initialBookmarks)
  );
  const [timeLeft, setTimeLeft] = useState(() => {
    if (timeLimit <= 0) return 0;
    const elapsed = Math.floor(
      (Date.now() - new Date(startedAt).getTime()) / 1000
    );
    return Math.max(0, timeLimit - elapsed);
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (mode !== "ujian" || timeLimit <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, timeLimit]);

  const isTimeUp = mode === "ujian" && timeLimit > 0 && timeLeft === 0;

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("answers", JSON.stringify(answers));
      await onSubmit(formData);
    } catch {
      setIsSubmitting(false);
    }
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    if (mode === "belajar" && showFeedback[questionId]) return;

    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (mode === "belajar") {
      setShowFeedback((prev) => ({ ...prev, [questionId]: true }));
    }

    // Simpan ke server agar tidak hilang saat refresh
    onSaveAnswer(questionId, answer).catch(() => {});
  };

  const handleToggleBookmark = async (questionId: string) => {
    const isBookmarked = bookmarks.has(questionId);
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (isBookmarked) next.delete(questionId);
      else next.add(questionId);
      return next;
    });

    try {
      await onToggleBookmark(questionId);
    } catch {
      setBookmarks((prev) => {
        const next = new Set(prev);
        if (isBookmarked) next.add(questionId);
        else next.delete(questionId);
        return next;
      });
    }
  };

  const handleSubmitRef = useRef(handleSubmit);
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
  });

  useEffect(() => {
    // Waktu habis → submit otomatis; via ref agar effect tidak bergantung pada handleSubmit
    if (isTimeUp) handleSubmitRef.current();
  }, [isTimeUp]);

  const answeredCount = Object.keys(answers).filter((qId) => answers[qId])
    .length;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h1 className="font-semibold truncate">{packageName}</h1>
          {mode === "ujian" && (
            <div
              className={`text-lg font-mono font-bold ${
                timeLeft < 300 ? "text-danger" : ""
              }`}
              // waktu hitung mundur dihitung dari Date.now() saat render → beda tipis antara server & client
              suppressHydrationWarning
            >
              {formatTime(timeLeft)}
            </div>
          )}
        </div>

        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            Soal {currentIndex + 1} / {questions.length}
          </span>
          <span>
            Dijawab: {answeredCount} / {questions.length}
          </span>
        </div>
      </div>

      {/* Question navigation dots */}
      <div className="flex flex-wrap gap-2 mb-6">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(i)}
            className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
              i === currentIndex
                ? "bg-primary text-primary-foreground"
                : answers[q.id]
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            Soal {currentIndex + 1}
          </span>
          <button
            onClick={() => handleToggleBookmark(currentQuestion.id)}
            className={`text-xl ${
              bookmarks.has(currentQuestion.id)
                ? "text-warning"
                : "text-muted-foreground hover:text-warning"
            }`}
          >
            {bookmarks.has(currentQuestion.id) ? "★" : "☆"}
          </button>
        </div>

        <p className="mb-6 whitespace-pre-wrap">{currentQuestion.question}</p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => {
            const letter = String.fromCharCode(65 + i);
            const isSelected = answers[currentQuestion.id] === letter;
            const isCorrect = letter === currentQuestion.correctAnswer;
            const showResult =
              mode === "belajar" && showFeedback[currentQuestion.id];

            let optionClass = "border-border hover:bg-muted";
            if (isSelected && !showResult) {
              optionClass = "border-primary bg-primary/10";
            }
            if (showResult) {
              if (isCorrect) {
                optionClass = "border-success bg-success/10";
              } else if (isSelected && !isCorrect) {
                optionClass = "border-danger bg-danger/10";
              }
            }

            return (
              <label
                key={i}
                className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${optionClass} ${
                  showResult ? "cursor-default" : ""
                }`}
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={letter}
                  checked={isSelected}
                  onChange={() =>
                    handleSelectAnswer(currentQuestion.id, letter)
                  }
                  disabled={showResult}
                  className="mt-1"
                />
                <span>
                  <span className="font-medium">{letter}.</span> {option}
                </span>
              </label>
            );
          })}
        </div>

        {/* Feedback for belajar mode */}
        {mode === "belajar" && showFeedback[currentQuestion.id] && (
          <div className="mt-6 p-4 rounded-lg bg-muted">
            <div
              className={`font-medium mb-2 ${
                answers[currentQuestion.id] === currentQuestion.correctAnswer
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {answers[currentQuestion.id] === currentQuestion.correctAnswer
                ? "✓ Jawaban Benar!"
                : `✗ Jawaban Salah (Jawaban: ${currentQuestion.correctAnswer})`}
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-medium">Penjelasan:</p>
              <p className="whitespace-pre-wrap">
                {currentQuestion.explanation}
              </p>
              {currentQuestion.explanationSource && (
                <p className="mt-2 text-xs">
                  Sumber: {currentQuestion.explanationSource}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Sebelumnya
        </button>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90"
          >
            Selesai & Submit
          </button>
        ) : (
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(questions.length - 1, prev + 1)
              )
            }
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90"
          >
            Selanjutnya →
          </button>
        )}
      </div>

      {/* Submit confirmation modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card border border-border rounded-xl p-6 max-w-md mx-4">
            <h2 className="text-lg font-bold mb-2">Konfirmasi Submit</h2>
            <p className="text-muted-foreground mb-4">
              Kamu telah menjawab {answeredCount} dari {questions.length} soal.
              {answeredCount < questions.length &&
                ` Masih ada ${questions.length - answeredCount} soal yang belum dijawab.`}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:bg-muted"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "Mengirim..." : "Ya, Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
