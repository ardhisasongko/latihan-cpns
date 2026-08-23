# PRD — Latihan CPNS

> Platform latihan soal CPNS (SKD) dengan mode belajar & ujian, dibangun dengan Next.js 16 + Cloudflare Workers/D1.
> Dokumen ini mengonsolidasikan temuan audit codebase (Agu 2026) menjadi backlog tugas terstruktur.

---

## 1. Konteks Produk

| Aspek | Keterangan |
|---|---|
| Nama | Latihan CPNS |
| Domain | https://latihan-cpns.ardhisasongko69.workers.dev |
| Stack | Next.js 16 (App Router) · React 19 · Tailwind v4 · Prisma + D1 (SQLite) · NextAuth v5 credentials · OpenNext Cloudflare |
| Pengguna target | Peserta seleksi CPNS yang berlatih soal SKD (TWK/TIU/TKP) |
| Fitur inti (sudah jalan) | Register/login, kategori & paket soal, mode belajar (feedback instan), mode ujian (timer + auto-submit), hasil & pembahasan, riwayat + statistik, bookmark, cari soal, materi, dark mode |

### Kondisi saat ini
Fondasi sehat: auth guard terpusat (`requireSession`), rate limit login/register, CSP nonce via `proxy.ts`, server-side time limit, schema DB dengan unique constraint & index lengkap, test unit + e2e ada, aksesibilitas dasar terpenuhi.

Audit menemukan **17 item perbaikan** yang dikelompokkan menjadi 6 epik di bawah.

---

## 2. Epik & Task

Prioritas: **P0** = kerjakan sekarang (keamanan/korektness) · **P1** = sprint ini · **P2** = menyusul · **P3** = nice-to-have.

---

### EPIC 1 — Keamanan Backend (P0)

#### T1.1 Tutup akses publik ke API pencarian
- **Masalah:** `/api/search` tidak memeriksa session. Semua halaman di balik login, tapi bank soal bisa di-scrape publik lewat endpoint ini.
- **File:** `src/app/api/search/route.ts`
- **Task:**
  - [ ] Panggil `auth()` di awal handler; return `401` jika tidak ada session.
  - [ ] Update `src/app/(main)/cari/page.tsx` untuk menangani status 401.
- **Acceptance:** Request tanpa cookie session → HTTP 401, body `{ error }`. Dengan session → perilaku sama seperti sebelumnya.

#### T1.2 Cegah clickjacking (frame-ancestors)
- **Masalah:** CSP punya `frame-src 'self'` (membatasi apa yang kita embed), tapi tidak ada `frame-ancestors` — situs lain bisa embed aplikasi ini dalam iframe.
- **File:** `src/proxy.ts` (array `csp`)
- **Task:**
  - [ ] Tambah direktif `frame-ancestors 'self'`.
- **Acceptance:** Response header produksi memuat `Content-Security-Policy: ...frame-ancestors 'self'`; iframe dari domain lain diblokir browser.

---

### EPIC 2 — Korektness Frontend (P1)

#### T2.1 Hilangkan race condition simpan jawaban
- **Masalah:** Pilih opsi A lalu cepat-cepat B → dua request `onSaveAnswer` paralel; response bisa tiba acak sehingga nilai stale (A) menimpa B di database, sementara UI menampilkan B.
- **File:** `src/app/(main)/kerjakan/[examId]/ExamInterface.tsx`
- **Task:**
  - [ ] Simpan jawaban secara *serialized* per-question (guard urutan) atau debounce ~500 ms sebelum kirim.
  - [ ] Pastikan nilai terakhir yang diklik user adalah nilai yang tersimpan.
- **Acceptance:** Test manual: klik dua opsi berbeda <200 ms, refresh halaman → jawaban tersimpan = klik terakhir.

#### T2.2 Aksesibilitas modal konfirmasi submit & overlay sidebar
- **Masalah:** Modal submit tanpa `role="dialog"`/`aria-modal`, tanpa focus trap, Esc tidak menutup, scroll background tidak terkunci. Berlaku juga untuk overlay sidebar mobile.
- **File:** `ExamInterface.tsx`, `Sidebar.tsx`
- **Task:**
  - [ ] Modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, fokus pindah ke modal saat terbuka, Tab tertahan di dalam modal, Esc = batal, kembalikan fokus ke tombol pemicu.
  - [ ] Lock scroll body saat modal/sidebar terbuka.
- **Acceptance:** Navigasi keyboard-only bisa membuka-membatalkan modal; screen reader mengumumkan dialog.

#### T2.3 Ganti `alert()` dengan notifikasi inline
- **Masalah:** `alert("Gagal menyimpan jawaban...")` memblokir UI dan buruk untuk screen reader.
- **File:** `ExamInterface.tsx`
- **Task:**
  - [ ] State error inline (`role="alert"`) dekat header soal; auto-dismiss beberapa detik atau tombol tutup.
- **Acceptance:** Gagal simpan (simulasikan offline) menampilkan banner inline, tidak ada dialog native.

---

### EPIC 3 — Hardening Backend (P1)

#### T3.1 Rate limit terdistribusi untuk endpoint sensitif
- **Masalah:** `Map` in-memory hidup per-isolate Worker; isolate baru = counter reset. Limit "5×/5 mnt" efektif jadi jauh lebih longgar; brute-force login masih mungkin.
- **File:** `src/lib/rateLimit.ts`, `wrangler.jsonc`
- **Task:**
  - [ ] Pilih mekanisme native Cloudflare: **Rate Limiting binding** (paling sederhana) atau counter D1/KV dengan TTL.
  - [ ] Terapkan pada `rateLimitAuth` (login/register). Rate limit umum search boleh tetap in-memory (dampak rendah).
  - [ ] Hapus fallback Map untuk path auth setelah binding aktif.
- **Acceptance:** 6 percobaan login salah dalam 5 menit dari IP sama → percobaan ke-6 ditolak meski lintas isolate/restart.

#### T3.2 Validasi payload `saveAnswer`
- **Masalah:** Action menerima `questionId` dan jawaban string apa pun tanpa validasi keanggotaan paket / pilihan A–E. Dampak kecil (submit membangun ulang dari paket), tapi data sampah bisa masuk tabel `ExamAnswer`.
- **File:** `src/app/(main)/kerjakan/[examId]/page.tsx` (`saveAnswer`)
- **Task:**
  - [ ] Validasi `answer` ∈ {A,B,C,D,E} (atau sesuai jumlah opsi).
  - [ ] Validasi `questionId` termasuk paket milik exam tersebut.
- **Acceptance:** Payload dengan questionId asing / jawaban "Z" diabaikan (return tanpa write).

#### T3.3 Cegah penumpukan exam draft
- **Masalah:** Setiap klik "Mode Belajar/Ujian" membuat exam baru; exam tak diselesaikan menumpuk selamanya.
- **File:** `src/app/(main)/paket/[packageId]/page.tsx` (`createExam`)
- **Task:**
  - [ ] Sebelum create: cari exam belum-selesai user utk paket sama → reuse (redirect ke sana); opsional hapus draft >7 hari via cron/cleanup saat create.
- **Acceptance:** Klik dua kali tombol mulai → hanya satu exam aktif per paket; redirect lanjut ke exam yang sama.

#### T3.4 Kurangi enumerasi email di register *(opsional)*
- **Masalah:** Respons "Email sudah terdaftar" memungkinkan probing akun.
- **Trade-off:** UX vs privasi — umum diterima di produk konsumen. Putuskan sadar.
- **Task:**
  - [ ] (Bila diputuskan) Ubah pesan generik + kirim email verifikasi (butuh provider email) **atau** pertahankan dengan alasan UX. Dokumentasikan keputusan.

---

### EPIC 4 — Akurasi Domain: Skor TKP Berbobot (P2)

#### T4.1 Implementasi bobot opsi 1–5 untuk TKP
- **Masalah:** Ujian TKP asli menilai tiap opsi berbobot 1–5 (tidak ada "salah"). Aplikasi memperlakukan TKP biner (+3 jika kunci cocok) → simulasi skor menyesatkan.
- **File:** `prisma/schema.prisma`, `prisma/migrations/*`, `src/lib/scoring.ts`, seed TKP, `ExamInterface.tsx`, halaman hasil/pembahasan
- **Task:**
  - [ ] Schema: tambah kolom `optionWeights String` (JSON `{A:3,B:5,...}`) di `Question` (nullable — TWK/TIU tak pakai).
  - [ ] Migration D1 + backfill data seed TKP dengan bobot wajar.
  - [ ] Scoring: agregasi `sum(weight[selected])`; `maxScore` = Σ max weight; passing grade proporsional.
  - [ ] Mode belajar: setelah pilih, tampilkan bobot opsi terpilih + opsi berbobot tertinggi sebagai "paling tepat".
  - [ ] Hasil/riwayat: skor TKP pakai total poin bobot, bukan jumlah benar.
- **Acceptance:** Paket TKP 45 soal menghasilkan skor maksimum 225; jawaban "kedua terbaik" memberi poin parsial; TWK/TIU tidak berubah.
- **Catatan:** Epik terbesar — pecah jadi PR terpisah: (a) schema+migration+backfill, (b) scoring engine + test, (c) UI.

---

### EPIC 5 — Polish UI/UX (P2)

#### T5.1 Tahun branding dinamis
- **Masalah:** Sidebar hardcoded "Persiapan SKD 2025"; sekarang 2026.
- **File:** `src/components/Sidebar.tsx`
- **Task:**
  - [ ] Ganti jadi "Persiapan SKD" + tahun berjalan `new Date().getFullYear()` (render server-safe).

#### T5.2 OG image untuk social share
- **Masalah:** Metadata mendeklarasi `twitter: summary_large_image` tapi tidak ada gambar → preview share polos/rusak.
- **File:** `src/app/layout.tsx`, asset baru `public/og.png` (1200×630)
- **Task:**
  - [ ] Buat satu OG image statis (logo + tagline + palet Swiss Modernism biru).
  - [ ] Daftarkan di `openGraph.images` dan `twitter.images`.

#### T5.3 Label progres yang benar
- **Masalah:** Bar menunjukkan posisi soal (x/y), bukan progres terjawab — berpotensi menyesatkan.
- **File:** `ExamInterface.tsx`
- **Task:**
  - [ ] Bar mengikat ke `answeredCount/questions.length` ATAU label eksplisit "Posisi: x/y". Pilih satu konsisten.

#### T5.4 Navigasi keyboard antar soal *(nice-to-have)*
- **Task:**
  - [ ] Tombol ←/→ pindah soal saat fokus di luar input; dokumentasikan hint singkat di UI.

---

### EPIC 6 — Data & Search (P3)

#### T6.1 Full-text search FTS5 di D1
- **Masalah:** `contains` = `LIKE '%q%'` full table scan. OK untuk ribuan soal, melambat setelahnya.
- **Task:**
  - [ ] Buat virtual table `questions_fts` (FTS5) + trigger sync dari `Question`.
  - [ ] Route search pakai `MATCH` dengan fallback LIKE.
- **Trigger:** kerjakan saat bank soal > ~10k atau search terasa lambat.

#### T6.2 Pagination hasil pencarian
- **Masalah:** `take: 50` mentok — hasil ke-51 tak terjangkau.
- **Task:**
  - [ ] Offset-page sederhana (?page=) + tombol muat-selanjutnya di UI.

#### T6.3 Dokumentasi migration D1
- **Masalah:** `prisma/migrations` ada tapi alur apply ke D1 prod belum terdokumentasi → risiko drift schema.
- **File:** `README.md`
- **Task:**
  - [ ] Tulis alur: edit `schema.prisma` → `prisma migrate dev` → commit migration → `wrangler d1 migrations apply <db> --remote` sebelum deploy.

---

## 3. Urutan Eksekusi yang Disarankan

| Sprint | Isi |
|---|---|
| 1 | T1.1, T1.2, T6.3 — fix kecil dampak besar, langsung deploy |
| 2 | T2.1, T2.2, T2.3 — korektness & aksesibilitas exam flow |
| 3 | T3.1, T3.2, T3.3 — hardening infrastruktur auth |
| 4 | T4.1 (3 PR: schema → engine → UI) — refactor skor TKP |
| 5+ | Epic 5 polish, Epic 6 sesuai trigger pertumbuhan |

## 4. Di Luar Scope (Sadar Ditinggalkan)

- Email verification & reset password (butuh provider email — tambah saat ada permintaan nyata).
- Multi-device sync realtime jawaban (localStorage + server save sudah cukup).
- Leaderboard/gamifikasi (belum ada sinyal kebutuhan).
- Migrasi off SQLite/D1 (scale saat ini jauh di bawah batas).

## 5. Metrik Keberhasilan

- 0 temuan keamanan kritis pada audit ulang pasca-Epic 1 & 3.
- Race simpan jawaban tak reproducible (test manual T2.1).
- Preview share sosial tampil dengan OG image (validator Twitter/Facebook lolos).
- Simulasi skor TKP proporsional dengan rubrik resmi 1–5 (Epic 4).
