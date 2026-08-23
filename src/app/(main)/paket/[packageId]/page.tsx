import { db } from "@/lib/db";
import { requireSession } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Timer } from "lucide-react";

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageId: string }>;
}) {
  const { packageId } = await params;
  const pkg = await db.package.findUnique({
    where: { id: packageId },
  });

  if (!pkg) {
    notFound();
  }

  const currentPkg = pkg;

  async function createExam(formData: FormData) {
    "use server";

    const session = await requireSession();

    const mode = formData.get("mode") as string;
    if (mode !== "belajar" && mode !== "ujian") {
      return;
    }
    // 60 detik per soal, sesuai proporsi ujian SKD asli (100 soal / 100 menit)
    const timeLimit = mode === "ujian" ? currentPkg.totalQuestions * 60 : 0;

    const exam = await db.exam.create({
      data: {
        userId: session.user.id,
        packageId: currentPkg.id,
        mode,
        timeLimit,
      },
    });

    redirect(`/kerjakan/${exam.id}`);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href={`/latihan/${currentPkg.category}`}
        className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
      >
        ← Kembali
      </Link>

      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{currentPkg.name}</h1>
            <p className="text-muted-foreground">{currentPkg.subcategory}</p>
          </div>
          <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {currentPkg.difficulty}
          </span>
        </div>

        {currentPkg.description && (
          <p className="text-muted-foreground mb-6">{currentPkg.description}</p>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">
              {currentPkg.totalQuestions}
            </div>
            <div className="text-sm text-muted-foreground">Total Soal</div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">
              {currentPkg.category}
            </div>
            <div className="text-sm text-muted-foreground">Kategori</div>
          </div>
        </div>

        <form action={createExam} className="space-y-3">
          <button
            type="submit"
            name="mode"
            value="belajar"
            className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
            Mode Belajar
          </button>
          <button
            type="submit"
            name="mode"
            value="ujian"
            className="w-full py-3 px-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            <Timer className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
            Mode Ujian ({currentPkg.totalQuestions} menit)
          </button>
        </form>
      </div>
    </div>
  );
}
