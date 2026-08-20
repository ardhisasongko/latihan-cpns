import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Latihan CPNS",
    default: "Latihan CPNS - Soal & Kunci Jawaban",
  },
  description: "Website latihan CPNS lengkap dengan soal, kunci jawaban, dan penjelasan berdasarkan kisi-kisi resmi Kepmenpan RB 321/2024",
  openGraph: {
    title: "Latihan CPNS - Soal & Kunci Jawaban",
    description: "Latihan soal CPNS dengan kisi-kisi resmi. Persiapan Ujian CPNS Lebih Mudah.",
    url: "https://latihan-cpns.ardhisasongko69.workers.dev",
    siteName: "Latihan CPNS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latihan CPNS - Soal & Kunci Jawaban",
    description: "Latihan soal CPNS dengan kisi-kisi resmi. Persiapan Ujian CPNS Lebih Mudah.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Terapkan tema gelap sebelum paint agar tidak ada flash (FOUC).
            Script eksternal agar sesuai CSP prod ('self', tanpa unsafe-inline) */}
        <script src="/theme-init.js" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus-not:hidden px-4 py-2 bg-primary text-primary-foreground rounded-md skip-link">
          Lewati ke konten utama
        </a>
        <main id="main-content" className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
