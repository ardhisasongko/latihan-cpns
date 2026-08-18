"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type SearchResult = {
  id: string;
  question: string;
  category: string;
  subcategory: string;
  difficulty: string;
  packageId: string | null;
};

export default function CariPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Cari Soal</h1>
      <p className="text-muted-foreground mb-6">
        Cari soal berdasarkan keyword atau topik
      </p>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Contoh: Pancasila, statistika, verbal..."
            className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {loading ? "Mencari..." : "Cari"}
          </button>
        </div>
      </form>

      {searched && !loading && results.length === 0 && (
        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-muted-foreground">
            Tidak ada soal yang cocok dengan pencarian &quot;{query}&quot;
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} soal ditemukan
          </p>
          <div className="space-y-3">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {result.category}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                    {result.subcategory}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      result.difficulty === "mudah"
                        ? "bg-green-100 text-green-700"
                        : result.difficulty === "sulit"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {result.difficulty}
                  </span>
                </div>
                <p className="text-sm mb-3 line-clamp-3">{result.question}</p>
                {result.packageId && (
                  <Link
                    href={`/paket/${result.packageId}`}
                    className="text-sm text-primary hover:underline"
                  >
                    Lihat Paket →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
