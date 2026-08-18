import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function BookmarkPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const bookmarks = await db.bookmark.findMany({
    where: { userId: session.user.id },
    include: {
      question: {
        include: {
          packageQuestions: {
            include: { package: true },
            take: 1,
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  async function removeBookmark(formData: FormData) {
    "use server";
    const session = await auth();
    if (!session) redirect("/login");

    const bookmarkId = formData.get("bookmarkId") as string;
    await db.bookmark.deleteMany({
      where: { id: bookmarkId, userId: session.user.id },
    });
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Bookmark</h1>
      <p className="text-muted-foreground mb-8">
        Soal-soal yang telah kamu simpan
      </p>

      {bookmarks.length === 0 ? (
        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <div className="text-4xl mb-4">🔖</div>
          <p className="text-muted-foreground mb-4">Belum ada bookmark</p>
          <Link
            href="/latihan"
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90"
          >
            Mulai Latihan
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarks.map((bookmark: (typeof bookmarks)[number]) => {
            const pkg = bookmark.question.packageQuestions[0]?.package;
            return (
              <div
                key={bookmark.id}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {bookmark.question.category}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      {bookmark.question.subcategory}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        bookmark.question.difficulty === "mudah"
                          ? "bg-green-100 text-green-700"
                          : bookmark.question.difficulty === "sulit"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {bookmark.question.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-sm mb-4 line-clamp-3">
                  {bookmark.question.question}
                </p>

                <div className="flex items-center gap-3">
                  {pkg && (
                    <Link
                      href={`/paket/${pkg.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      Lihat Paket
                    </Link>
                  )}
                  <form action={removeBookmark}>
                    <input
                      type="hidden"
                      name="bookmarkId"
                      value={bookmark.id}
                    />
                    <button
                      type="submit"
                      className="text-sm text-red-500 hover:underline"
                    >
                      Hapus
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
