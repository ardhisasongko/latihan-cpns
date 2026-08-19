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