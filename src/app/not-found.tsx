import Link from "next/link";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <TriangleAlert className="w-12 h-12 mx-auto mb-4 text-warning" aria-hidden="true" />
        <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
        <p className="text-muted-foreground mb-6">Halaman tidak ditemukan</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
