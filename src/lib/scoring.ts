export const pointsPerCorrect: Record<string, number> = {
  TWK: 5,
  TIU: 5,
  TKP: 3,
};

// Ambang kelulusan ujian SKD asli (30/35/45 soal → 150/175/225 poin)
export const passingGrades: Record<string, number> = {
  TWK: 65,
  TIU: 80,
  TKP: 166,
};

export const maxScores: Record<string, number> = {
  TWK: 150,
  TIU: 175,
  TKP: 225,
};

export function pointsFor(category: string): number {
  return pointsPerCorrect[category] ?? 5;
}

// Jumlah soal benar minimum agar lulus, diskalakan dari ujian asli ke ukuran paket
export function requiredCorrect(category: string, totalQuestions: number): number {
  const passing = passingGrades[category] ?? 0;
  const max = maxScores[category] ?? 100;
  return Math.max(1, Math.ceil((passing / max) * totalQuestions));
}

export function examResult(category: string, totalQuestions: number, totalCorrect: number) {
  const ppk = pointsFor(category);
  const rawScore = totalCorrect * ppk;
  const maxScore = totalQuestions * ppk;
  const passing = requiredCorrect(category, totalQuestions) * ppk;
  const percentageScore = maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;
  return { rawScore, maxScore, passing, percentageScore, isLulus: totalCorrect >= requiredCorrect(category, totalQuestions) };
}

// Skor satu jawaban untuk semua kategori:
// - TKP berbobot -> bobot opsi; TKP tanpa bobot / TWK / TIU -> biner.
export function answerScore(
  category: string,
  optionWeights: string | null | undefined,
  selected: string | null,
  correctAnswer: string
): number {
  if (!selected) return 0;
  if (category === "TKP") return tkpScore(optionWeights, selected, correctAnswer).score;
  return selected === correctAnswer ? pointsFor(category) : 0;
}

// Bobot maksimal satu soal utk penjumlahan skor maksimum paket.
export function maxScorePerQuestion(category: string, optionWeights: string | null | undefined): number {
  if (category === "TKP" && Object.keys(parseWeights(optionWeights)).length > 0) return 5;
  return pointsFor(category);
}

// ===== Skoring TKP berbobot (opsi bernilai 1-5, tidak ada jawaban "salah") =====

export function parseWeights(raw: string | null | undefined): Record<string, number> {
  if (!raw) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const out: Record<string, number> = {};
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (/^[A-E]$/.test(k) && typeof v === "number" && Number.isFinite(v)) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

// Bobot opsi terpilih; fallback biner (kunci = pointsFor TKP = 3) saat soal
// belum punya bobot — transisi aman untuk data lama.
export function tkpScore(
  optionWeights: string | null | undefined,
  selected: string | null,
  correctAnswer: string
): { score: number; hasWeights: boolean } {
  if (!selected) return { score: 0, hasWeights: false };
  const w = parseWeights(optionWeights);
  if (Object.keys(w).length === 0) {
    return { score: selected === correctAnswer ? pointsFor("TKP") : 0, hasWeights: false };
  }
  return { score: w[selected] ?? 0, hasWeights: true };
}

// Hasil paket TKP berbobot dari total poin terkumpul.
export function weightedExamResult(totalQuestions: number, earnedPoints: number) {
  const maxScore = totalQuestions * 5;
  // Ambang diskalakan per jumlah soal, konvensi sama dengan kategori biner.
  const passing = requiredCorrect("TKP", totalQuestions) * 5;
  const percentageScore = maxScore > 0 ? Math.round((earnedPoints / maxScore) * 100) : 0;
  return { rawScore: earnedPoints, maxScore, passing, percentageScore, isLulus: earnedPoints >= passing };
}