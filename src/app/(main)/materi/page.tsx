import Link from "next/link";
import { Flag, Calculator, User, BookOpen } from "lucide-react";
import { KATEGORI_MATERI } from "@/lib/materi";

const kategoriIcons: Record<string, typeof Flag> = {
  TWK: Flag,
  TIU: Calculator,
  TKP: User,
};

export default function MateriPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" />
          Materi Belajar
        </h1>
        <p className="text-muted-foreground">
          Pelajari materi setiap jenis soal sebelum mulai latihan
        </p>
      </div>

      <div className="space-y-8">
        {KATEGORI_MATERI.map((kategori) => {
          const KategoriIcon = kategoriIcons[kategori.kode];
          return (
            <section key={kategori.kode}>
              <div className="mb-3 flex items-center gap-2">
                <KategoriIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold">{kategori.nama}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {kategori.deskripsi}
              </p>
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
          );
        })}
      </div>
    </div>
  );
}