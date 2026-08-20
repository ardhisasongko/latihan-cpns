import Link from "next/link";
import { notFound } from "next/navigation";
import { Flag, Calculator, User } from "lucide-react";
import { getKategori, getTopik } from "@/lib/materi";

const kategoriIcons: Record<string, typeof Flag> = {
  TWK: Flag,
  TIU: Calculator,
  TKP: User,
};

export default async function MateriTopikPage({
  params,
}: {
  params: Promise<{ kategori: string; slug: string }>;
}) {
  const { kategori: rawKategori, slug } = await params;
  const kategori = rawKategori.toUpperCase();

  const kategoriData = getKategori(kategori);
  const topik = getTopik(kategori, slug);
  const KategoriIcon = kategoriData ? kategoriIcons[kategoriData.kode] : Flag;

  if (!kategoriData || !topik) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link
          href="/materi"
          className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block"
        >
          ← Semua Materi
        </Link>
        <p className="text-sm font-medium text-primary flex items-center gap-1.5">
          <KategoriIcon className="w-4 h-4" aria-hidden="true" />
          {kategoriData.nama}
        </p>
        <h1 className="text-2xl font-bold mt-1">{topik.nama}</h1>
        <p className="text-muted-foreground">{topik.ringkas}</p>
      </div>

      <div className="space-y-6">
        {topik.sections.map((section) => (
          <section
            key={section.judul}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h2 className="font-bold mb-3">{section.judul}</h2>
            <ul className="space-y-2">
              {section.poin.map((poin, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-primary shrink-0">•</span>
                  <span>{poin}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 bg-card border border-border rounded-2xl p-5 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Sudah paham materinya? Langsung uji dengan latihan soal.
        </p>
        <Link
          href={`/latihan/${kategoriData.kode}`}
          className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Mulai Latihan {kategoriData.kode} →
        </Link>
      </div>
    </div>
  );
}