import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { logout } from "@/actions/auth";

export default async function HomePage() {
  const session = await auth();
  const totalQuestions = await db.question.count();
  const totalPackages = await db.package.count();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Ke beranda">
            <h1 className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
              Latihan CPNS
            </h1>
          </Link>
          <nav className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Halo, {session.user.name || session.user.email}
                </span>
                <Link
                  href="/riwayat"
                  className="text-sm text-primary hover:underline"
                >
                  Riwayat
                </Link>
                <form action={logout}>
                  <button
                    type="submit"
                    className="text-sm text-danger hover:underline"
                  >
                    Keluar
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm text-primary hover:underline"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90"
                >
                  Daftar
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-8">
          <p className="text-sm text-muted-foreground">
            <strong className="text-warning">Catatan:</strong> Soal latihan ini
            dibuat berdasarkan kisi-kisi resmi Kepmenpan RB Nomor 321 Tahun
            2024. Bukan soal asli CPNS yang bersifat rahasia negara.
          </p>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Persiapan Ujian CPNS Lebih Mudah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latihan soal SKD CPNS dengan kisi-kisi resmi. Tersedia soal TWK,
            TIU, dan TKP lengkap dengan pembahasan berdasarkan peraturan
            perundangan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {totalQuestions}+
            </div>
            <div className="text-sm text-muted-foreground">Soal Latihan</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {totalPackages}+
            </div>
            <div className="text-sm text-muted-foreground">Paket Latihan</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">
              Kategori (TWK/TIU/TKP)
            </div>
          </div>
        </div>

        {/* Kategori */}
        <h3 className="text-xl font-bold mb-6">Pilih Kategori Latihan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/latihan/TWK" className="group">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🇮🇩</span>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                TWK
              </h4>
              <p className="text-sm text-muted-foreground">
                Tes Wawasan Kebangsaan — Pancasila, UUD 1945, NKRI, Bhinneka
                Tunggal Ika, Kewarganegaraan
              </p>
            </div>
          </Link>

          <Link href="/latihan/TIU" className="group">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                TIU
              </h4>
              <p className="text-sm text-muted-foreground">
                Tes Intelegensia Umum — Verbal, Numerik, Figural
              </p>
            </div>
          </Link>

          <Link href="/latihan/TKP" className="group">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                TKP
              </h4>
              <p className="text-sm text-muted-foreground">
                Tes Karakter Pribadi — Pelayanan Publik, Profesionalisme,
                Kolaborasi
              </p>
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="mt-12">
          <Link
            href="/cari"
            className="block bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors"
          >
            <span className="text-2xl mb-2 block">🔍</span>
            <span className="font-bold">Cari Soal</span>
            <p className="text-sm text-muted-foreground mt-1">
              Cari soal berdasarkan keyword atau topik
            </p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Berdasarkan Kisi-kisi Kepmenpan RB Nomor 321 Tahun 2024 &amp;
            Peraturan BKN Nomor 5 Tahun 2024
          </p>
          <p className="mt-1">© 2026 Latihan CPNS. Untuk edukasi.</p>
        </div>
      </footer>
    </div>
  );
}
