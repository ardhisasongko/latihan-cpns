# Latihan CPNS

Website latihan soal SKD CPNS (TWK/TIU/TKP) dengan pembahasan, berdasarkan kisi-kisi resmi Kepmenpan RB 321/2024. Deployed di Cloudflare Workers + D1.

## Stack

- Next.js 16 (App Router) + React 19 + Tailwind CSS v4
- Prisma (engineType client, runtime workerd) + D1 adapter
- NextAuth v5 (credentials + JWT) + bcryptjs
- @opennextjs/cloudflare (deploy ke Workers)

## Development

```bash
npm install
npx prisma generate          # regenerate client ke src/generated/prisma
npm run dev                  # http://localhost:3000
```

`.env` dibutuhkan (lihat `.env.example`). Jalankan `wrangler dev` untuk menjalankan dengan binding D1 lokal.

## Seed

```bash
npx tsx prisma/seed.ts        # isi data soal dari prisma/seed-*.ts
```

## Migration Schema (D1)

Struktur `prisma/migrations` (folder + `migration.sql`) tidak bisa dibaca `wrangler d1 migrations apply` — wrangler butuh file `.sql` flat di folder `migrations/`. Alur setiap mengubah `prisma/schema.prisma`:

```bash
# 1. Buat migration Prisma (ter-commit di prisma/migrations/)
npx prisma migrate dev --name <deskripsi_singkat>

# 2. Salin SQL-nya ke migrations/ untuk wrangler
cp prisma/migrations/<timestamp>_<nama>/migration.sql migrations/<timestamp>_<nama>.sql

# 3. Apply ke D1 remote SEBELUM deploy
npx wrangler d1 migrations apply latihan-cpns --remote

# 4. Baru build & deploy
npx opennextjs-cloudflare build && npx wrangler deploy
```

Untuk D1 lokal (`wrangler dev`), langkah 3 tanpa `--remote`.
Catatan: jika DB prod pernah dibuat tanpa wrangler migrations, cek dulu `npx wrangler d1 migrations list latihan-cpns --remote` — baseline manual mungkin diperlukan agar init tidak dijalankan ulang.

## Deploy ke Cloudflare Workers

```bash
npx opennextjs-cloudflare build
npx wrangler deploy
```

Konfigurasi di `wrangler.jsonc` (binding D1, vars) dan `open-next.config.ts`. AUTH_SECRET di-set sebagai secret worker (`npx wrangler secret put AUTH_SECRET`).

## Struktur Penting

- `src/lib/db.ts` — lazy PrismaClient + PrismaD1 (worker context)
- `src/lib/scoring.ts` — poin & passing grade SKD
- `src/app/(main)/kerjakan/[examId]/` — halaman kerjakan soal (mode belajar/ujian)
- `prisma/seed-*.ts` — data soal TWK/TIU/TKP