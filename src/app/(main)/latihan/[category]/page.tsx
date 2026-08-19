import { db } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";

const validCategories = ["TWK", "TIU", "TKP"];

const categoryNames: Record<string, string> = {
  TWK: "Tes Wawasan Kebangsaan",
  TIU: "Tes Intelegensia Umum",
  TKP: "Tes Karakteristik Pribadi",
};

const difficultyColors: Record<string, string> = {
  mudah: "bg-success/10 text-success",
  sedang: "bg-warning/10 text-warning",
  sulit: "bg-danger/10 text-danger",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: raw } = await params;
  const category = raw.toUpperCase();

  if (!validCategories.includes(category)) {
    notFound();
  }

  const packages = await db.package.findMany({
    where: { category },
    orderBy: [{ subcategory: "asc" }, { name: "asc" }],
  });

  const grouped: Record<string, typeof packages> = {};
  for (const pkg of packages) {
    if (!grouped[pkg.subcategory]) {
      grouped[pkg.subcategory] = [];
    }
    grouped[pkg.subcategory].push(pkg);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href="/latihan"
          className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block"
        >
          ← Kembali
        </Link>
        <h1 className="text-2xl font-bold">{categoryNames[category]}</h1>
        <p className="text-muted-foreground">
          {packages.length} paket soal tersedia
        </p>
      </div>

      {Object.keys(grouped).length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          Belum ada paket soal untuk kategori ini
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([subcategory, items]) => (
            <div key={subcategory}>
              <h2 className="text-lg font-semibold mb-4">{subcategory}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {items.map((pkg: (typeof packages)[number]) => (
                  <Link
                    key={pkg.id}
                    href={`/paket/${pkg.id}`}
                    className="block p-5 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium">{pkg.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          difficultyColors[pkg.difficulty] ||
                          "bg-muted text-muted-foreground"
                        }`}
                      >
                        {pkg.difficulty}
                      </span>
                    </div>
                    {pkg.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {pkg.description}
                      </p>
                    )}
                    <div className="text-sm text-muted-foreground">
                      {pkg.totalQuestions} soal
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
