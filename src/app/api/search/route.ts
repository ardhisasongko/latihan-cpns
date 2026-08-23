import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Rate limiting: 20 requests per minute per IP
  try {
    await rateLimit(request);
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes("Rate limit exceeded")) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan, coba lagi nanti." },
        { status: 429 }
      );
    }
    // re-throw unexpected errors
    throw err;
  }

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
