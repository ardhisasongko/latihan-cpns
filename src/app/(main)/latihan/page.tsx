import { db } from "@/lib/db";
import Link from "next/link";

const categories = [
  {
    id: "TWK",
    name: "Tes Wawasan Kebangsaan",
    description:
      "Pengetahuan umum tentang ideologi, sejarah, dan budaya bangsa Indonesia",
    icon: "🇮🇩",
  },
  {
    id: "TIU",
    name: "Tes Intelegensia Umum",
    description: "Kemampuan verbal, numerik, dan figuratif",
    icon: "🧮",
  },
  {
    id: "TKP",
    name: "Tes Karakteristik Pribadi",
    description: "Penilaian karakter, sikap, dan perilaku",
    icon: "👤",
  },
];

export default async function LatihanPage() {
  const packageCounts = await db.package.groupBy({
    by: ["category"],
    _count: { id: true },
  });

  const counts: Record<string, number> = {};
  for (const item of packageCounts) {
    counts[item.category] = item._count.id;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Pilih Kategori</h1>
      <p className="text-muted-foreground mb-8">
        Pilih kategori soal yang ingin kamu pelajari
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/latihan/${category.id}`}
            className="block p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {category.description}
            </p>
            <div className="text-sm text-primary font-medium">
              {counts[category.id] || 0} paket soal
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
