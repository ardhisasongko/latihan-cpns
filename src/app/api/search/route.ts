import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const questions = await db.question.findMany({
    where: {
      question: { contains: q },
    },
    include: {
      packageQuestions: {
        include: { package: true },
        take: 1,
      },
    },
    take: 50,
  });

  const results = questions.map((question: (typeof questions)[number]) => ({
    id: question.id,
    question: question.question,
    category: question.category,
    subcategory: question.subcategory,
    difficulty: question.difficulty,
    packageId: question.packageQuestions[0]?.packageId || null,
  }));

  return NextResponse.json({ results });
}
