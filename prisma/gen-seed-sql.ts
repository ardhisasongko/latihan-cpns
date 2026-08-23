import { writeFileSync } from "node:fs";
import { twkQuestions } from "./seed-twk";
import { tiuQuestions } from "./seed-tiu";
import { tkpQuestions } from "./seed-tkp";

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(array: T[], rng: () => number): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const esc = (s: string | null | undefined) =>
  s == null ? "NULL" : `'${String(s).replace(/'/g, "''")}'`;

const rng = mulberry32(20260820);
const sql: string[] = [];
sql.push("DELETE FROM ExamAnswer;");
sql.push("DELETE FROM Exam;");
sql.push("DELETE FROM PackageQuestion;");
sql.push("DELETE FROM Bookmark;");
sql.push("DELETE FROM Package;");
sql.push("DELETE FROM Question;");

type Q = (typeof twkQuestions)[number];
const all: Q[] = [...twkQuestions, ...tiuQuestions, ...tkpQuestions];

all.forEach((q, i) => {
  const qw = (q as { optionWeights?: string }).optionWeights;
  sql.push(
    `INSERT INTO Question (id, category, subcategory, difficulty, cognitiveLevel, question, options, correctAnswer, optionWeights, explanation, explanationSource) VALUES (${esc(
      `q-${q.category}-${i}`
    )}, ${esc(q.category)}, ${esc(q.subcategory)}, ${esc(q.difficulty)}, ${esc(
      q.cognitiveLevel
    )}, ${esc(q.question)}, ${esc(q.options)}, ${esc(q.correctAnswer)}, ${esc(
      qw ?? null
    )}, ${esc(q.explanation)}, ${esc(q.explanationSource)});`
  );
});

const byCategory = { TWK: twkQuestions, TIU: tiuQuestions, TKP: tkpQuestions };
const subs: Record<string, string[]> = {
  TWK: ["Pancasila", "UUD 1945", "NKRI & Bhinneka Tunggal Ika", "Kewarganegaraan", "Pilar Negara", "Bahasa Indonesia"],
  TIU: ["Verbal - Analogi", "Verbal - Silogisme", "Verbal - Analitis", "Numerik - Aritmetika", "Numerik - Deret Angka", "Numerik - Perbandingan", "Figural - Analogi", "Figural - Ketidaksamaan", "Figural - Serial"],
  TKP: ["Pelayanan Publik", "Sosial Budaya", "Jejaring Kerja", "Teknologi Informasi", "Profesionalisme", "Anti-Radikalisme"],
};

type PackageSpec = {
  name: string;
  category: string;
  subcategory: string;
  difficulty: string;
  isMixed: boolean;
  totalQuestions: number;
  description: string;
};

const packages: PackageSpec[] = [];
for (const [cat, questions] of Object.entries(byCategory)) {
  for (const sub of subs[cat]) {
    const subQuestions = questions.filter((q) => q.subcategory === sub);
    for (const diff of ["mudah", "sedang", "sulit"]) {
      const filtered = subQuestions.filter((q) => q.difficulty === diff);
      if (filtered.length >= 10) {
        const n = Math.min(25, filtered.length);
        packages.push({
          name: `${sub} - ${diff[0].toUpperCase() + diff.slice(1)}`,
          category: cat,
          subcategory: sub,
          difficulty: diff,
          isMixed: false,
          totalQuestions: n,
          description: `Paket latihan ${sub} tingkat ${diff} - ${n} soal`,
        });
      }
    }
    if (subQuestions.length >= 15) {
      const n = Math.min(25, subQuestions.length);
      packages.push({
        name: `${sub} - Campuran`,
        category: cat,
        subcategory: sub,
        difficulty: "campuran",
        isMixed: false,
        totalQuestions: n,
        description: `Paket latihan ${sub} semua tingkat kesulitan - ${n} soal`,
      });
    }
  }
  const n = Math.min(30, questions.length);
  packages.push({
    name: `${cat} - Campuran Semua Topik`,
    category: cat,
    subcategory: "Campuran",
    difficulty: "campuran",
    isMixed: true,
    totalQuestions: n,
    description: `Paket campuran ${cat} dari semua topik - ${n} soal`,
  });
}

const ids = new Map<Q, string>();
all.forEach((q, i) => ids.set(q, `q-${q.category}-${i}`));
let pkgIdx = 0;
for (const pkg of packages) {
  const pkgId = `pkg-${pkgIdx++}`;
  sql.push(
    `INSERT INTO Package (id, name, category, subcategory, difficulty, isMixed, totalQuestions, description) VALUES (${esc(pkgId)}, ${esc(pkg.name)}, ${esc(pkg.category)}, ${esc(pkg.subcategory)}, ${esc(pkg.difficulty)}, ${pkg.isMixed ? 1 : 0}, ${pkg.totalQuestions}, ${esc(pkg.description)});`
  );

  const source = byCategory[pkg.category as keyof typeof byCategory];
  let filtered = pkg.subcategory === "Campuran" ? source : source.filter((q) => q.subcategory === pkg.subcategory);
  if (pkg.difficulty !== "campuran") filtered = filtered.filter((q) => q.difficulty === pkg.difficulty);
  const picked = shuffle(filtered, rng).slice(0, pkg.totalQuestions);

  picked.forEach((q, order) => {
    sql.push(`INSERT INTO PackageQuestion (id, packageId, questionId, "order") VALUES (${esc(`pq-${pkgIdx}-${order}`)}, ${esc(pkgId)}, ${esc(ids.get(q)!)}, ${order + 1});`);
  });
}

writeFileSync("/tmp/opencode/seed-d1.sql", sql.join("\n") + "\n");
console.log(`questions: ${all.length}, packages: ${packages.length}, rows: ${sql.length}`);
