export type MateriSection = { judul: string; poin: string[] };
export type TopikMateri = {
  slug: string;
  nama: string;
  ringkas: string;
  sections: MateriSection[];
};
export type KategoriMateri = {
  kode: string;
  nama: string;
  emoji: string;
  deskripsi: string;
  topik: TopikMateri[];
};

export const KATEGORI_MATERI: KategoriMateri[] = [
  {
    kode: "TWK",
    nama: "Tes Wawasan Kebangsaan",
    emoji: "🇮🇩",
    deskripsi:
      "Menguji penguasaan nasionalisme, Pancasila, UUD 1945, NKRI, dan wawasan kebangsaan. Benar +5, salah/kosong 0.",
    topik: [
      {
        slug: "pancasila",
        nama: "Pancasila",
        ringkas: "Dasar negara, fungsi, butir-butir sila, dan tafsir ketatanegaraan.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Pancasila adalah dasar negara dan ideologi nasional Indonesia, sumber dari segala sumber hukum (Ketetapan MPR No. V/MPR/2000).",
              "5 sila: Ketuhanan Yang Maha Esa; Kemanusiaan yang adil dan beradab; Persatuan Indonesia; Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan; Keadilan sosial bagi seluruh rakyat Indonesia.",
              "Pancasila sebagai ideologi bersifat terbuka: dinamis mengikuti perkembangan zaman tanpa mengubah nilai dasarnya.",
              "Pancasila adalah perjanjian luhur bangsa dan jiwa kepribadian bangsa Indonesia.",
            ],
          },
          {
            judul: "Poin Penting yang Sering Diujikan",
            poin: [
              "Perbedaan sila pertama Piagam Jakarta ('dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya') dengan Pembukaan UUD 1945 — penghapusan 7 kata pada 18 Agustus 1945.",
              "Sila keempat menegaskan sistem demokrasi Pancasila: musyawarah untuk mufakat, bukan voting semata.",
              "Sila kelima: keadilan distributif (pemerataan), komutatif (antarindividu), dan legal/prosedural.",
              "Nilai Pancasila: nilai dasar (sila), nilai instrumental (UUD, UU), nilai praksis (pelaksanaan nyata).",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Soal sering berbentuk 'implementasi sila X dalam kehidupan...' — kaitkan dengan contoh konkret, bukan sekadar hafalan.",
              "Jawab dari sisi norma/semangat kebangsaan, bukan sisi praktis sempit.",
              "Hati-hati soal 'pernyataan yang TIDAK sesuai' — baca semua opsi dulu.",
            ],
          },
        ],
      },
      {
        slug: "uud-1945",
        nama: "UUD 1945",
        ringkas: "Konstitusi negara: batang tubuh, amandemen, lembaga negara, dan HAM.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "UUD 1945 disahkan 18 Agustus 1945 oleh PPKI; berlaku sebagai hukum tertinggi (supremasi konstitusi).",
              "Pembukaan UUD 1945: 4 alinea; alinea keempat memuat 4 asas: Ketuhanan, Kemanusiaan, Persatuan, Musyawarah/Keadilan.",
              "UUD diamandemen 4 kali (1999-2002) — Pembukaan TIDAK diubah; pasal yang diubah ±20 pasal.",
              "Hasil amandemen: presiden maksimal 2 periode, MPR = DPR + DPD, MK dibentuk, DPA dihapus.",
            ],
          },
          {
            judul: "Lembaga Negara & Kewenangan",
            poin: [
              "MPR: mengubah & menetapkan UUD, melantik presiden/wakil presiden (Pasal 3).",
              "Presiden: kepala negara & kepala pemerintahan, memegang kekuasaan pemerintahan (Pasal 4).",
              "DPR: membentuk UU bersama presiden, fungsi legislasi/anggaran/pengawasan (Pasal 20).",
              "MK: menguji UU terhadap UUD, memutus sengketa kewenangan lembaga negara, membubarkan parpol, PHPU (Pasal 24C).",
              "MA: kekuasaan kehakiman tertinggi, menguji peraturan di bawah UU (Pasal 24A).",
            ],
          },
          {
            judul: "HAM & Kewajiban (Pasal 27-34)",
            poin: [
              "Pasal 27: persamaan kedudukan di hukum, hak atas pekerjaan dan penghidupan layak.",
              "Pasal 28: kebebasan berserikat, berkumpul, mengeluarkan pendapat.",
              "Pasal 29: negara menjamin kemerdekaan tiap penduduk memeluk agama.",
              "Pasal 31: hak mendapat pendidikan; Pasal 34: fakir miskin dipelihara negara.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Hafalkan pasal-pasal populer (1, 2, 3, 4, 20, 24, 27-34) — sebagian besar soal TWK UUD berasal dari sana.",
              "Perhatikan kata kunci soal: 'setelah amandemen' vs 'sebelum amandemen' mengubah jawaban (mis. MPR).",
              "Untuk soal lembaga: cari kesesuaian kewenangan — MK uji UU, MA uji peraturan di bawah UU.",
            ],
          },
        ],
      },
      {
        slug: "nkri-bhinneka-tunggal-ika",
        nama: "NKRI & Bhinneka Tunggal Ika",
        ringkas: "Konsep negara kesatuan, wawasan nusantara, dan semboyan persatuan.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "NKRI: negara kesatuan (unitaris) — kekuasaan tertinggi di pemerintah pusat, daerah menjalankan otonomi (Pasal 18).",
              "Pasal 1 Ayat (1): Indonesia adalah negara kesatuan yang berbentuk republik.",
              "Wawasan Nusantara: cara pandang bangsa atas wilayah darat, laut, udara sebagai satu kesatuan politik, ekonomi, sosial budaya, dan pertahanan keamanan.",
              "Bhinneka Tunggal Ika ('berbeda-beda tetapi tetap satu') berasal dari Kitab Sutasoma karya Mpu Tantular; semboyan resmi dalam lambang negara Garuda Pancasila.",
            ],
          },
          {
            judul: "Poin Penting",
            poin: [
              "Indonesia negara kepulauan terbesar; konsep negara kepulauan (archipelagic state) diakui UNCLOS 1982.",
              "Otonomi daerah: daerah diberi kewenangan seluas-luasnya, kecuali urusan luar negeri, pertahanan, keamanan, yustisi, moneter/fiskal nasional, agama (Pasal 18A-18B).",
              "NKRI adalah final dan tidak dapat diganggu gugat — tidak ada daerah boleh memisahkan diri.",
              "Faktor pemersatu: Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika (4 pilar).",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Soal sering mencampur makna semboyan dan wawasan nusantara — bedakan keduanya.",
              "Istilah 'serikat/federasi' pasti salah untuk Indonesia.",
              "Kata kunci 'satu kesatuan' selalu merujuk wawasan nusantara.",
            ],
          },
        ],
      },
      {
        slug: "pilar-negara",
        nama: "Pilar Negara",
        ringkas: "Empat pilar kebangsaan: Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Empat Pilar Kebangsaan (Sosialisasi MPR): Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika.",
              "Pancasila = pilar pertama (dasar negara & ideologi).",
              "UUD 1945 = pilar kedua (konstitusi & hukum dasar).",
              "NKRI = pilar ketiga (bentuk negara kesatuan).",
              "Bhinneka Tunggal Ika = pilar keempat (semboyan persatuan dalam keragaman).",
            ],
          },
          {
            judul: "Hubungan Antar Pilar",
            poin: [
              "Keempat pilar saling terkait dan mencerminkan jati diri bangsa Indonesia.",
              "Pancasila menjiwai UUD 1945; UUD 1945 menjadi dasar hukum NKRI; Bhinneka Tunggal Ika memperkuat persatuan dalam keragaman.",
              "Pilar-pilar ini menjadi fondasi ketahanan nasional dan wawasan kebangsaan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Soal biasanya langsung: 'sebutkan empat pilar...' — jawabannya selalu keempat hal di atas.",
              "Jangan tertukar: Pancasila pilar PERTAMA, Bhinneka Tunggal Ika pilar KEEMPAT.",
              "Frasa 'sumber dari segala sumber hukum' = Pancasila, bukan UUD 1945.",
            ],
          },
        ],
      },
      {
        slug: "kewarganegaraan",
        nama: "Kewarganegaraan",
        ringkas: "Asas, cara memperoleh, dan kehilangan kewarganegaraan (UU 12/2006).",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Diatur UU No. 12 Tahun 2006 — asas: ius sanguinis (keturunan), ius soli terbatas (wilayah), kewarganegaraan tunggal & ganda terbatas.",
              "Kewarganegaraan Indonesia bersifat inklusif: terbuka bagi semua yang memenuhi syarat.",
              "Perolehan: kelahiran, pengangkatan, permohonan (naturalisasi), perkawinan, pewarganegaraan.",
              "Naturalisasi: permohonan ke Presiden melalui Menteri Hukum & HAM, syarat: 18 tahun/ sudah kawin, tinggal 5 tahun berturut atau 10 tahun tidak berturut, sehat, berkelakuan baik, dll.",
            ],
          },
          {
            judul: "Kewarganegaraan Ganda Terbatas",
            poin: [
              "Anak hasil perkawinan WNI-WNA dapat kewarganegaraan ganda sampai usia 18 tahun atau sudah kawin (Pasal 6).",
              "Wajib memilih salah satu kewarganegaraan — tidak memilih = tetap WNI bagi anak WNI asli (Pasal 7).",
              "Anak yang lahir di luar negeri dari ibu WNI atau ayah WNI tanpa kewarganegaraan lain = WNI.",
            ],
          },
          {
            judul: "Kehilangan Kewarganegaraan",
            poin: [
              "Memperoleh kewarganegaraan lain atas kemauan sendiri.",
              "Tidak memenuhi kewajiban menjadi WNI, atau ikut dinas militer asing.",
              "Hanya dapat kehilangan dengan alasan yang diatur UU — tidak bisa kehilangan kewarganegaraan secara sewenang-wenang.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Pahami beda ius soli vs ius sanguinis — Indonesia memakai ius sanguinis dominan.",
              "Ingat angka: ganda terbatas sampai 18 tahun/ kawin; naturalisasi 5/10 tahun.",
              "Soal 'yang TIDAK termasuk syarat naturalisasi' sering muncul — cek tiap opsi terhadap daftar syarat.",
            ],
          },
        ],
      },
      {
        slug: "bahasa-indonesia",
        nama: "Bahasa Indonesia",
        ringkas: "Kedudukan bahasa negara, EYD/PUEBI, dan penggunaan bahasa baku.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Bahasa Indonesia diakui sebagai bahasa negara berdasarkan UUD 1945 Pasal 36.",
              "Sebelumnya diikrarkan sebagai bahasa persatuan dalam Sumpah Pemuda 1928.",
              "Diatur UU No. 24 Tahun 2009: bahasa negara, bahasa pengantar pendidikan, bahasa komunikasi resmi, dan pengembangan kebudayaan nasional.",
              "Kaidah ejaan diatur PUEBI (Pedoman Umum Ejaan Bahasa Indonesia), sebelumnya EYD.",
            ],
          },
          {
            judul: "Penggunaan yang Benar",
            poin: [
              "Bahasa Indonesia yang baik dan benar: sesuai situasi (baik) dan sesuai kaidah (benar).",
              "Fungsi: lambang kebanggaan, identitas nasional, alat pemersatu, alat komunikasi, pengembangan ilmu.",
              "Laporan/pidato resmi, surat dinas, dan perundang-undangan wajib berbahasa Indonesia.",
              "Tujuan penggunaan bahasa Indonesia yang baik dan benar: menjaga keutuhan bahasa dan menunjukkan kecerdasan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Soal sering menanyakan dasar hukum: Pasal 36 UUD 1945 atau UU 24/2009.",
              "Bedakan 'bahasa persatuan' (Sumpah Pemuda) vs 'bahasa negara' (UUD Pasal 36).",
              "Pilih jawaban yang menekankan fungsi pemersatu dan identitas bangsa.",
            ],
          },
        ],
      },
    ],
  },
  {
    kode: "TIU",
    nama: "Tes Intelegensia Umum",
    emoji: "🧮",
    deskripsi:
      "Menguji kemampuan verbal, numerik, dan figural. Benar +5, salah 0, kosong 0 — kecepatan dan ketelitian kunci.",
    topik: [
      {
        slug: "verbal-analitis",
        nama: "Verbal - Analitis",
        ringkas: "Analisis informasi, kesimpulan logis, dan penalaran dari pernyataan.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Soal analitis menguji kemampuan menarik kesimpulan dari sekumpulan informasi/fakta.",
              "Bentuk umum: urutan (ranking), jadwal, hubungan antar orang, atau kombinasi kondisi.",
              "Bacalah premis dengan teliti; buat pemetaan (tabel/urutan) bila perlu.",
              "Kesimpulan harus DERIVED dari informasi yang diberikan — tidak boleh menambah asumsi.",
            ],
          },
          {
            judul: "Strategi Pengerjaan",
            poin: [
              "Identifikasi variabel (nama, posisi, urutan) lalu buat skema visual sederhana.",
              "Kerjakan pernyataan 'pasti benar/salah' dengan eliminasi.",
              "Pernyataan 'mungkin' benar jika tidak bertentangan dengan semua premis.",
              "Perhatikan kata kunci: 'semua', 'tidak ada', 'hanya', 'kecuali'.",
            ],
          },
          {
            judul: "Contoh Pola",
            poin: [
              "Urutan: A lebih tinggi dari B, C lebih pendek dari B → siapa tertinggi? (A).",
              "Kondisi: jika X maka Y; Y tidak terjadi → X tidak terjadi (modus tollens).",
              "Pernyataan bersyarat: baca arah implikasi, jangan membalik secara keliru.",
            ],
          },
        ],
      },
      {
        slug: "verbal-analogi",
        nama: "Verbal - Analogi",
        ringkas: "Padanan hubungan kata: sinonim, antonim, sebab-akibat, bagian-keseluruhan.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Analogi = mencari pasangan kata dengan HUBUNGAN yang sama dengan pasangan pertama.",
              "Relasi umum: sinonim, antonim, fungsi, sebab-akibat, bagian-utuh, alat-pelaku, dll.",
              "Tentukan relasi pasangan kunci DULU, baru cari opsi yang relasinya identik.",
              "Relasi bisa dua arah: 'kaki : sepatu' ≠ 'tangan : sarung tangan'? Sama — keduanya alat pemakaian bagian tubuh.",
            ],
          },
          {
            judul: "Jenis Relasi yang Sering Muncul",
            poin: [
              "Sinonim: bahagia : gembira. Antonim: gelap : terang.",
              "Fungsi: pisau : memotong. Bahan: kayu : meja.",
              "Bagian-utuh: roda : mobil. Umum-khusus: bunga : mawar.",
              "Sejumlah relasi bernuansa: 'sepatu : kaki' analog 'kacamata : mata'.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Jangan terkecoh opsi yang mirip makna tapi relasinya beda.",
              "Periksa relasi KEDUA ARAH — beberapa soal memakai urutan terbalik.",
              "Kalau ragu, uji tiap opsi: 'X berelasi dengan Y sebagaimana...?'",
            ],
          },
        ],
      },
      {
        slug: "verbal-silogisme",
        nama: "Verbal - Silogisme",
        ringkas: "Penarikan kesimpulan dari premis-premis logis (semua/sebagian/tidak ada).",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Silogisme: 2 premis → 1 kesimpulan logis.",
              "Premis universal: 'Semua A adalah B' — 'Semua B adalah C' → 'Semua A adalah C'.",
              "Premis partikular: 'Sebagian A adalah B' — hati-hati, tidak bisa disimpulkan 'semua'.",
              "'Tidak ada A yang B' = semua A bukan B.",
            ],
          },
          {
            judul: "Pola yang Harus Dihafal",
            poin: [
              "Semua A = B; Semua B = C → Semua A = C (valid).",
              "Semua A = B; Sebagian C = A → Sebagian C = B (valid).",
              "Semua A = B; Semua C = B → TIDAK bisa disimpulkan (A dan C bisa saling lepas).",
              "Sebagian A = B; Sebagian C = B → TIDAK bisa disimpulkan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Gambar lingkaran Venn di kepala/kertas untuk memastikan kesimpulan valid.",
              "Kesimpulan 'semua' hanya valid bila kedua premis universal.",
              "Pilih opsi yang merupakan konsekuensi logis — bukan fakta umum di luar premis.",
              "Soal sering memakai istilah logika: premis mayor, premis minor, konklusi.",
            ],
          },
        ],
      },
      {
        slug: "numerik-aritmetika",
        nama: "Numerik - Aritmetika",
        ringkas: "Operasi hitung, pecahan, persen, rata-rata, dan soal cerita matematika.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Meliputi: penjumlahan/pengurangan/perkalian/pembagian, pecahan, desimal, persen, perbandingan, rata-rata.",
              "Rata-rata = jumlah data ÷ banyak data.",
              "Persentase: bagian = persen × total; perubahan = (baru - lama) ÷ lama × 100%.",
              "Prioritas operasi: kurung → pangkat → kali/bagi → tambah/kurang.",
            ],
          },
          {
            judul: "Pola Soal",
            poin: [
              "Soal cerita: belanja, tabungan, kecepatan, jarak, waktu.",
              "Kecepatan = jarak ÷ waktu; jarak = kecepatan × waktu.",
              "Deret hitung sederhana dan campuran bisa masuk kategori ini.",
              "Operasi cepat dengan angka bulat vs pecahan campuran.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Latih hitung cepat: kuadrat, persen dari angka umum (10%, 25%, 50%).",
              "Kerjakan soal mudah dulu untuk mengamankan poin.",
              "Cek satuan: jangan tertukar jam/menit, km/m, liter/ml.",
              "Jawaban sering 'mendekati' — hitung estimasi bila perlu, lalu pastikan dengan perhitungan teliti.",
            ],
          },
        ],
      },
      {
        slug: "numerik-deret-angka",
        nama: "Numerik - Deret Angka",
        ringkas: "Menebak pola barisan angka: beda tetap, loncat, kuadrat, campuran.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Deret: barisan angka dengan pola tertentu — temukan polanya, lalu lanjutkan.",
              "Pola dasar: beda tetap (aritmetika: 2,4,6,8), rasio tetap (geometri: 2,4,8,16).",
              "Pola bertingkat: beda antar suku membentuk deret sendiri (1,4,9,16 → +3,+5,+7).",
              "Pola campuran: gabungan operasi (×2+1, ×3−2, dst.) atau pola pada suku ganjil/genap terpisah.",
            ],
          },
          {
            judul: "Pola yang Sering Muncul",
            poin: [
              "Fibonacci: 1,1,2,3,5,8 (jumlah dua suku sebelumnya).",
              "Pola kuadrat/kubus: 1,4,9,16 atau 1,8,27,64.",
              "Dua deret diselingi: 1,10,2,20,3,30...",
              "Loncat: beda naik (2,4,6...) atau turun.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Selisih antar suku dulu → kalau tidak tetap, cek rasio → lalu selisih dari selisih.",
              "Periksa pola pada posisi ganjil dan genap secara terpisah.",
              "Soal bisa 'deret acak' (urutan angka tidak berurutan tapi pola tetap) — jangan bingung.",
              "Jangan menghabiskan waktu: deret yang tidak ketemu polanya dalam ±40 detik, lewati.",
            ],
          },
        ],
      },
      {
        slug: "numerik-perbandingan",
        nama: "Numerik - Perbandingan",
        ringkas: "Perbandingan senilai, berbalik nilai, skala, dan proporsi.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Perbandingan senilai: satu naik → yang lain naik (mis. 3 apel = 6000, 6 apel = 12000).",
              "Perbandingan berbalik nilai: satu naik → yang lain turun (mis. kecepatan vs waktu).",
              "Skala = jarak peta ÷ jarak sebenarnya.",
              "Perbandingan campuran a:b:c dengan jumlah/umur diketahui → cari faktor pengali.",
            ],
          },
          {
            judul: "Pola Soal",
            poin: [
              "Jumlah umur A:B = 3:5, total 40 → A = 3/8 × 40.",
              "Pekerja & hari: 6 orang 10 hari → 12 orang 5 hari (berbalik nilai).",
              "Skala peta 1:100.000 → 1 cm = 1 km.",
              "Campuran: perbandingan uang, campuran larutan/kandungan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Tentukan dulu jenisnya: senilai atau berbalik nilai.",
              "Gunakan tabel silang: a/b = c/d → ad = bc.",
              "Perhatikan satuan jarak (skala) — cm vs km sering menjebak.",
              "Kerjakan dengan perhitungan cepat dan bulatkan bila perlu.",
            ],
          },
        ],
      },
      {
        slug: "figural-analogi",
        nama: "Figural - Analogi",
        ringkas: "Mencari gambar yang setara dengan pasangan gambar pembanding.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Diberikan sepasang gambar dengan transformasi tertentu (putar, geser, tambah elemen, warna) — cari gambar yang menerapkan transformasi sama.",
              "Perhatikan: jumlah elemen, posisi, orientasi/rotasi, ukuran, warna/arsiran.",
              "Transformasi bisa kombinasi (mis. putar 90° + tambah satu elemen).",
            ],
          },
          {
            judul: "Strategi",
            poin: [
              "Bandingkan gambar pertama → kedua: tulis transformasinya (apa yang berubah?).",
              "Terapkan transformasi itu ke gambar ketiga, cocokkan dengan opsi.",
              "Periksa SEMUA elemen: orang terkecoh elemen kecil yang berubah.",
              "Jika opsi mirip, bandingkan perbedaan halus (orientasi, posisi elemen).",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Kerjakan cepat — soal figural relatif mudah poin.",
              "Rotasi: tentukan arah (searah/berlawanan jarum jam) dan besar sudut.",
              "Warna/arsiran: perhatikan apakah ikut berubah atau tetap.",
              "Analogi figural tidak memerlukan pengetahuan khusus — murni ketelitian visual.",
            ],
          },
        ],
      },
      {
        slug: "figural-ketidaksamaan",
        nama: "Figural - Ketidaksamaan",
        ringkas: "Menemukan gambar yang TIDAK sama dengan yang lain.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Diberikan 4-5 gambar, satu di antaranya berbeda (bisa rotasi cermin, jumlah elemen, posisi).",
              "Biasanya ada satu 'ganjil' — cari atribut yang membedakan.",
              "Perhatikan: pencerminan (bayangan), rotasi, penambahan/pengurangan elemen, ukuran relatif.",
            ],
          },
          {
            judul: "Strategi",
            poin: [
              "Identifikasi kesamaan umum dulu: apa yang sama di mayoritas gambar?",
              "Gambar yang TIDAK mengikuti pola mayoritas = jawaban.",
              "Cek orientasi: gambar yang merupakan hasil rotasi dari yang lain dianggap SAMA.",
              "Pencerminan sering menjadi pembeda — gambar cermin tidak sama dengan rotasi.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Jangan terburu-buru: periksa semua atribut satu per satu.",
              "Kalau 4 gambar sama setelah rotasi dan satu tidak → itu jawabannya.",
              "Biasanya paling cepat dikerjakan — prioritaskan bila waktu menipis.",
            ],
          },
        ],
      },
      {
        slug: "figural-serial",
        nama: "Figural - Serial",
        ringkas: "Melanjutkan urutan gambar yang berpola.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Urutan gambar dengan pola: pergerakan elemen, rotasi bertahap, perubahan jumlah/warna.",
              "Pola bisa: bertambah 1 elemen tiap langkah, berputar 45° tiap langkah, atau kombinasi.",
              "Bisa juga pola 2 baris/kotak yang saling terkait (baris 1 menentukan baris 2).",
            ],
          },
          {
            judul: "Strategi",
            poin: [
              "Tentukan pola antar gambar berurutan: +elemen, rotasi, atau pergeseran posisi.",
              "Periksa pola arah gerakan: searah jarum jam, zig-zag, kanan-kiri.",
              "Untuk kotak 2×2: kolom kanan sering merupakan operasi dari kolom kiri (gabungan/selisih elemen).",
              "Terapkan pola ke langkah terakhir → cocokkan dengan opsi.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Jangan hanya melihat gambar terakhir — telusuri 2-3 langkah awal untuk memastikan pola.",
              "Elemen kecil yang bergerak mengelilingi gambar adalah pola umum.",
              "Kalau dua opsi mirip, cek posisi elemen terkecil.",
            ],
          },
        ],
      },
    ],
  },
  {
    kode: "TKP",
    nama: "Tes Karakteristik Pribadi",
    emoji: "👤",
    deskripsi:
      "Menguji sikap dan perilaku kerja. Penilaian bertingkat: sangat tepat +5, tepat +4, agak tepat +3, kurang tepat +2, tidak tepat +1.",
    topik: [
      {
        slug: "pelayanan-publik",
        nama: "Pelayanan Publik",
        ringkas: "Sikap melayani masyarakat: cepat, ramah, tanpa diskriminasi.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Pelayanan publik: kegiatan melayani kebutuhan masyarakat dengan standar yang jelas.",
              "Prinsip: cepat, tepat, mudah, murah, ramah, dan tidak diskriminatif.",
              "ASN wajib melayani dengan integritas, profesional, dan netral.",
              "Keluhan/komplain adalah umpan balik untuk perbaikan, bukan musuh.",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Prioritaskan kepentingan masyarakat di atas kepentingan pribadi.",
              "Jika pelayanan terhambat, cari solusi alternatif dan komunikasikan dengan jelas.",
              "Sikap ramah dan sabar meskipun menghadapi masyarakat yang marah/kesulitan.",
              "Selesaikan masalah sampai tuntas — jangan melempar tanggung jawab.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Pilih opsi yang: menyelesaikan masalah + melayani masyarakat + menjaga aturan.",
              "Hindari opsi: marah, menyalahkan masyarakat, mengabaikan, atau lari dari tanggung jawab.",
              "Skor tertinggi = tindakan proaktif yang menyeimbangkan aturan dan kebutuhan masyarakat.",
            ],
          },
        ],
      },
      {
        slug: "profesionalisme",
        nama: "Profesionalisme",
        ringkas: "Kompetensi, etika kerja, tanggung jawab, dan komitmen mutu.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Profesionalisme: bekerja sesuai kompetensi, kode etik, dan standar profesi.",
              "Termasuk: tanggung jawab atas hasil kerja, menjaga kualitas, disiplin, dan pengembangan diri.",
              "ASN profesional: tidak tebang pilih, tidak menyalahgunakan wewenang.",
              "Komitmen mutu: selalu berusaha memperbaiki hasil kerja (continuous improvement).",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Menyelesaikan tugas tepat waktu dengan kualitas terbaik.",
              "Bersedia belajar hal baru dan memperbarui kompetensi.",
              "Menerima kritik sebagai bahan perbaikan, bukan serangan pribadi.",
              "Menjaga integritas: tidak menerima imbalan di luar ketentuan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Opsi terbaik biasanya yang menekankan kompetensi + etika + hasil.",
              "Tolak opsi: menunda pekerjaan, asal selesai, atau mencari jalan pintas.",
              "Belajar terus-menerus selalu dinilai positif.",
            ],
          },
        ],
      },
      {
        slug: "jejaring-kerja",
        nama: "Jejaring Kerja",
        ringkas: "Kerja sama, kolaborasi lintas unit, dan membangun relasi kerja.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Jejaring kerja: kemampuan membangun dan memelihara hubungan kerja sama.",
              "Kolaborasi lintas unit/instansi mempercepat penyelesaian tugas.",
              "Komunikasi yang baik dengan rekan kerja, atasan, dan pihak lain.",
              "Saling membantu tanpa kehilangan tanggung jawab masing-masing.",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Proaktif berkoordinasi dengan unit terkait sebelum tugas dimulai.",
              "Berbagi informasi dan sumber daya untuk kepentingan bersama.",
              "Menghargai kontribusi orang lain dan bersedia membantu yang kesulitan.",
              "Menyelesaikan konflik antar rekan dengan komunikasi terbuka.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Pilih opsi yang melibatkan koordinasi/komunikasi, bukan bekerja sendiri.",
              "Hindari opsi: mengerjakan semua sendiri, mengabaikan rekan, atau menarik diri.",
              "'Saya koordinasi dulu' hampir selalu lebih baik daripada 'saya kerjakan sendiri'.",
            ],
          },
        ],
      },
      {
        slug: "sosial-budaya",
        nama: "Sosial Budaya",
        ringkas: "Kepekaan sosial, toleransi, adaptasi budaya, dan gotong royong.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Kemampuan berinteraksi dengan masyarakat yang beragam budaya, agama, dan latar belakang.",
              "Menghargai perbedaan dan menghindari diskriminasi.",
              "Adaptasi terhadap budaya kerja dan masyarakat setempat.",
              "Gotong royong dan kepedulian sosial sebagai nilai budaya bangsa.",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Menghormati tradisi dan kebiasaan masyarakat tempat bertugas.",
              "Toleran terhadap perbedaan tanpa mengorbankan prinsip.",
              "Ikut serta dalam kegiatan sosial kemasyarakatan.",
              "Belajar bahasa/adat setempat untuk memperlancar pelayanan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Nilai utama: toleransi + adaptasi + kepedulian.",
              "Hindari opsi: memaksakan kebiasaan sendiri, menghindari interaksi, atau merendahkan budaya lain.",
              "Opsi 'menghargai dan menyesuaikan diri' hampir selalu tepat.",
            ],
          },
        ],
      },
      {
        slug: "teknologi-informasi",
        nama: "Teknologi Informasi",
        ringkas: "Pemanfaatan TIK untuk efisiensi, keamanan data, dan adaptasi digital.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Memanfaatkan TIK untuk mempercepat dan mempermudah pekerjaan.",
              "Keamanan data dan kerahasiaan informasi adalah prioritas.",
              "ASN dituntut adaptif terhadap perkembangan teknologi (digitalisasi layanan).",
              "Menggunakan teknologi secara bijak dan sesuai aturan.",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Menggunakan aplikasi/sistem untuk efisiensi kerja dan belajar menggunakannya.",
              "Menjaga kerahasiaan data dengan tidak membagikan informasi sensitif.",
              "Proaktif mengikuti pelatihan teknologi baru.",
              "Memanfaatkan teknologi untuk peningkatan kualitas pelayanan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Pilih opsi yang menggabungkan efisiensi + keamanan data.",
              "Hindari opsi: menolak teknologi baru, menyebarkan data, atau asal menggunakannya.",
              "Literasi digital dan keamanan siber selalu dinilai penting.",
            ],
          },
        ],
      },
      {
        slug: "anti-radikalisme",
        nama: "Anti-Radikalisme",
        ringkas: "Sikap menolak kekerasan, intoleransi, dan paham ekstremis.",
        sections: [
          {
            judul: "Konsep Inti",
            poin: [
              "Radikalisme: paham yang menghendaki perubahan dengan cara kekerasan dan tidak menghargai perbedaan.",
              "ASN wajib netral, toleran, dan menjaga persatuan NKRI.",
              "Menolak segala bentuk intoleransi, kekerasan, dan ujaran kebencian.",
              "Bersikap waspada terhadap konten/paham yang memecah belah.",
            ],
          },
          {
            judul: "Sikap yang Dianggap TEPAT",
            poin: [
              "Menolak dengan tegas ajakan kekerasan atas nama agama/ideologi.",
              "Melaporkan indikasi radikalisme kepada pihak berwenang.",
              "Mengedukasi masyarakat tentang bahaya intoleransi dan pentingnya persatuan.",
              "Tetap toleran terhadap perbedaan agama tanpa kompromi pada kekerasan.",
            ],
          },
          {
            judul: "Tips Mengerjakan",
            poin: [
              "Opsi terbaik: menolak kekerasan + melaporkan/edukasi + menjaga persatuan.",
              "Hindari opsi: membiarkan, mendukung, atau mempertimbangkan ajakan radikal.",
              "Netralitas ASN dan wawasan kebangsaan adalah fondasi jawaban.",
            ],
          },
        ],
      },
    ],
  },
];

export function getKategori(kode: string): KategoriMateri | undefined {
  return KATEGORI_MATERI.find((k) => k.kode === kode);
}

export function getTopik(kode: string, slug: string): TopikMateri | undefined {
  return getKategori(kode)?.topik.find((t) => t.slug === slug);
}

export function toSlug(nama: string): string {
  return nama
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}