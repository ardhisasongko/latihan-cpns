import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { examResult } from "@/lib/scoring";

export default async function RiwayatPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const exams = await db.exam.findMany({
    where: { userId: session.user.id, completedAt: { not: null } },
    include: { package: true },
    orderBy: { completedAt: "desc" },
  });

  const totalExams = exams.length;

  const stats: Record<
    string,
    { total: number; lulus: number; totalScore: number }
  > = {};
  for (const exam of exams) {
    const cat = exam.package.category;
    if (!stats[cat]) stats[cat] = { total: 0, lulus: 0, totalScore: 0 };
    stats[cat].total++;
    const { isLulus } = examResult(cat, exam.package.totalQuestions, exam.totalCorrect || 0);
    if (isLulus) stats[cat].lulus++;
    stats[cat].totalScore += exam.score || 0;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Riwayat Ujian</h1>
      <p className="text-muted-foreground mb-8">
        Semua ujian yang telah kamu kerjakan
      </p>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <div className="text-2xl font-bold text-primary">{totalExams}</div>
          <div className="text-xs text-muted-foreground">Total Ujian</div>
        </div>
        {["TWK", "TIU", "TKP"].map((cat) => {
          const s = stats[cat];
          const avg = s ? Math.round(s.totalScore / s.total) : 0;
          return (
            <div
              key={cat}
              className="bg-card border border-border rounded-xl p-5 text-center"
            >
              <div className="text-2xl font-bold text-primary">{avg}%</div>
              <div className="text-xs text-muted-foreground">
                Rata-rata {cat}
              </div>
              {s && (
                <div className="text-xs text-muted-foreground mt-1">
                  {s.lulus}/{s.total} lulus
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Exam List */}
      {exams.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <div className="text-4xl mb-4">📊</div>
          <p className="text-muted-foreground mb-4">Belum ada riwayat ujian</p>
          <Link
            href="/latihan"
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90"
          >
            Mulai Latihan
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {exams.map((exam: (typeof exams)[number]) => {
            const cat = exam.package.category;
            const { rawScore, maxScore, isLulus } = examResult(
              cat,
              exam.package.totalQuestions,
              exam.totalCorrect || 0
            );

            return (
              <Link
                key={exam.id}
                href={`/hasil/${exam.id}`}
                className="block bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-medium">{exam.package.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {cat}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                        {exam.mode === "ujian" ? "Ujian" : "Belajar"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-xl font-bold ${
                        isLulus ? "text-success" : "text-danger"
                      }`}
                    >
                      {rawScore}/{maxScore}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        isLulus ? "text-success" : "text-danger"
                      }`}
                    >
                      {isLulus ? "LULUS" : "TIDAK LULUS"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {exam.totalCorrect} benar · {exam.totalWrong} salah ·{" "}
                    {exam.totalSkipped} kosong
                  </span>
                  <span>
                    {new Date(exam.completedAt!).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
