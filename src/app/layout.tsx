import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latihan CPNS - Soal & Kunci Jawaban",
  description:
    "Website latihan CPNS lengkap dengan soal, kunci jawaban, dan penjelasan berdasarkan kisi-kisi resmi Kepmenpan RB 321/2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
