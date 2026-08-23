"use client";

import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="id">
      <body className="min-h-full flex flex-col">
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-md">
            <TriangleAlert className="w-12 h-12 mx-auto mb-4 text-danger" aria-hidden="true" />
            <h1 className="text-2xl font-bold mb-2">Terjadi kesalahan</h1>
            <p className="text-muted-foreground mb-6">
              Maaf, terjadi kesalahan saat memuat aplikasi.
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Coba lagi
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
