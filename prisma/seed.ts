import { PrismaClient } from "../src/generated/prisma/client";
import { twkQuestions } from "./seed-twk";
import { tiuQuestions } from "./seed-tiu";
import { tkpQuestions } from "./seed-tkp";

process.loadEnvFile();

const prisma = new PrismaClient();

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createPackages(
  questions: Array<{ subcategory: string; difficulty: string }>,
  category: string,
  subcategories: string[]
) {
  const packages: Array<{
    name: string;
    category: string;
    subcategory: string;
    difficulty: string;
    isMixed: boolean;
    totalQuestions: number;
    description: string;
    questionIndices: number[];
  }> = [];

  for (const sub of subcategories) {
    const subQuestions = questions.filter((q) => q.subcategory === sub);
    const difficulties = ["mudah", "sedang", "sulit"];

    for (const diff of difficulties) {
      const filtered = subQuestions.filter((q) => q.difficulty === diff);
      if (filtered.length >= 10) {
        packages.push({
          name: `${sub} - ${diff.charAt(0).toUpperCase() + diff.slice(1)}`,
          category,
          subcategory: sub,
          difficulty: diff,
          isMixed: false,
          totalQuestions: Math.min(25, filtered.length),
          description: `Paket latihan ${sub} tingkat ${diff} - ${Math.min(25, filtered.length)} soal`,
          questionIndices: [],
        });
      }
    }

    // Mixed difficulty package
    if (subQuestions.length >= 15) {
      packages.push({
        name: `${sub} - Campuran`,
        category,
        subcategory: sub,
        difficulty: "campuran",
        isMixed: false,
        totalQuestions: Math.min(25, subQuestions.length),
        description: `Paket latihan ${sub} semua tingkat kesulitan - ${Math.min(25, subQuestions.length)} soal`,
        questionIndices: [],
      });
    }
  }

  // Mixed subcategory package
  const mixedQuestions = shuffle(questions);
  packages.push({
    name: `${category} - Campuran Semua Topik`,
    category,
    subcategory: "Campuran",
    difficulty: "campuran",
    isMixed: true,
    totalQuestions: Math.min(30, questions.length),
    description: `Paket campuran ${category} dari semua topik - ${Math.min(30, questions.length)} soal`,
    questionIndices: [],
  });

  return packages;
}

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.examAnswer.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.packageQuestion.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.package.deleteMany();
  await prisma.question.deleteMany();

  // Seed questions
  console.log("Seeding TWK questions...");
  const twkCreated = await prisma.question.createMany({
    data: twkQuestions,
  });
  console.log(`  Created ${twkCreated.count} TWK questions`);

  console.log("Seeding TIU questions...");
  const tiuCreated = await prisma.question.createMany({
    data: tiuQuestions,
  });
  console.log(`  Created ${tiuCreated.count} TIU questions`);

  console.log("Seeding TKP questions...");
  const tkpCreated = await prisma.question.createMany({
    data: tkpQuestions,
  });
  console.log(`  Created ${tkpCreated.count} TKP questions`);

  // Get all questions by category
  const allTwk = await prisma.question.findMany({
    where: { category: "TWK" },
    orderBy: { id: "asc" },
  });
  const allTiu = await prisma.question.findMany({
    where: { category: "TIU" },
    orderBy: { id: "asc" },
  });
  const allTkp = await prisma.question.findMany({
    where: { category: "TKP" },
    orderBy: { id: "asc" },
  });

  // Create packages
  console.log("Creating packages...");

  const twkSubs = [
    "Pancasila",
    "UUD 1945",
    "NKRI & Bhinneka Tunggal Ika",
    "Kewarganegaraan",
    "Pilar Negara",
    "Bahasa Indonesia",
  ];
  const tiuSubs = [
    "Verbal - Analogi",
    "Verbal - Silogisme",
    "Verbal - Analitis",
    "Numerik - Aritmetika",
    "Numerik - Deret Angka",
    "Numerik - Perbandingan",
    "Figural - Analogi",
    "Figural - Ketidaksamaan",
    "Figural - Serial",
  ];
  const tkpSubs = [
    "Pelayanan Publik",
    "Sosial Budaya",
    "Jejaring Kerja",
    "Teknologi Informasi",
    "Profesionalisme",
    "Anti-Radikalisme",
  ];

  const twkPackages = createPackages([...twkQuestions], "TWK", twkSubs);
  const tiuPackages = createPackages([...tiuQuestions], "TIU", tiuSubs);
  const tkpPackages = createPackages([...tkpQuestions], "TKP", tkpSubs);

  const allPackages = [...twkPackages, ...tiuPackages, ...tkpPackages];

  for (const pkg of allPackages) {
    // Get questions for this package
    let sourceQuestions: typeof allTwk;
    if (pkg.category === "TWK") sourceQuestions = allTwk;
    else if (pkg.category === "TIU") sourceQuestions = allTiu;
    else sourceQuestions = allTkp;

    let filteredQuestions = sourceQuestions;
    if (pkg.subcategory !== "Campuran") {
      filteredQuestions = sourceQuestions.filter(
        (q) => q.subcategory === pkg.subcategory
      );
    }
    if (pkg.difficulty !== "campuran") {
      filteredQuestions = filteredQuestions.filter(
        (q) => q.difficulty === pkg.difficulty
      );
    }

    const shuffled = shuffle(filteredQuestions).slice(0, pkg.totalQuestions);

    const created = await prisma.package.create({
      data: {
        name: pkg.name,
        category: pkg.category,
        subcategory: pkg.subcategory,
        difficulty: pkg.difficulty,
        isMixed: pkg.isMixed,
        totalQuestions: shuffled.length,
        description: pkg.description,
      },
    });

    // Add questions to package
    for (let i = 0; i < shuffled.length; i++) {
      await prisma.packageQuestion.create({
        data: {
          packageId: created.id,
          questionId: shuffled[i].id,
          order: i + 1,
        },
      });
    }

    console.log(
      `  Package "${pkg.name}" created with ${shuffled.length} questions`
    );
  }

  console.log("Seeding complete!");
  console.log(
    `Total: ${twkCreated.count + tiuCreated.count + tkpCreated.count} questions, ${allPackages.length} packages`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
