import Link from "next/link";
import { KATEGORI_MATERI } from "@/lib/materi";

export default function MateriPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">📖 Materi Belajar</h1>
        <p className="text-muted-foreground">
          Pelajari materi setiap jenis soal sebelum mulai latihan
        </p>
      </div>

      <div className="space-y-8">
        {KATEGORI_MATERI.map((kategori) => (
          <section key={kategori.kode}>
            <div className="mb-3">
              <h2 className="text-xl font-bold">
                {kategori.emoji} {kategori.nama}
              </h2>
              <p className="text-sm text-muted-foreground">
                {kategori.deskripsi}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {kategori.topik.map((topik) => (
                <Link
                  key={topik.slug}
                  href={`/materi/${kategori.kode}/${topik.slug}`}
                  className="bg-card border border-border rounded-2xl p-4 hover:border-primary hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold">{topik.nama}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {topik.ringkas}
                  </p>
                  <span className="inline-block mt-3 text-sm font-medium text-primary">
                    Baca materi →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}