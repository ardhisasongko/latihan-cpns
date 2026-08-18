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
  return { rawScore, maxScore, passing, isLulus: totalCorrect >= requiredCorrect(category, totalQuestions) };
}