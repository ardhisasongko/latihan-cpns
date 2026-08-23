const rawTkpQuestions = [
  // ============================================================
  // 1. PELAYANAN PUBLIK (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda melayani warga di loket pendaftaran. Warga tersebut marah karena antrean panjang dan menuntut dilayani lebih cepat. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menanggapi warga dengan tenang, meminta maaf atas ketidaknyamanan, dan menjelaskan situasi antrean",
      "B. Menyuruh warga tersebut duduk dan menunggu giliran tanpa penjelasan",
      "C. Meminta warga tersebut pulang dan datang keesokan hari",
      "D. Mengabaikan warga tersebut dan tetap melayani warga lain",
      "E. Menyerahkan kasus tersebut ke atasan tanpa berusaha menenangkan terlebih dahulu"
    ]),
    correctAnswer: "A",
    explanation: "Seorang ASN harus berorientasi pelayanan dan mampu merespons keluhan warga dengan profesional. Menanggapi dengan tenang, meminta maaf, dan memberikan penjelasan menunjukkan sikap empati dan profesionalisme.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Seorang lansia datang ke kantor Anda dan tampak kebingungan mengurus surat izin usaha. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memberikan panduan langkah demi langkah dengan sabar dan membantu mengisi formulir yang diperlukan",
      "B. Menunjukkan brosur panduan dan menyuruh warga tersebut membaca sendiri",
      "C. Menyuruh warga tersebut didampingi keluarga terlebih dahulu",
      "D. Memberitahu bahwa pengurusan surat izin usaha sulit dan menyarankan untuk tidak usah mengurus",
      "E. Melayani warga lain terlebih dahulu karena mengurus lansia memakan waktu lama"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus memberikan pelayanan yang inklusif dan manusiawi, terutama kepada kelompok rentan seperti lansia. Memberikan panduan sabar dan membantu mengisi formulir menunjukkan komitmen berorientasi pelayanan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mendapati formulir pelayanan di loket Anda sudah habis ketika ada warga yang membutuhkan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memberi tahu warga bahwa formulir sedang habis, meminta menunggu sebentar, dan segera mengambil formulir cadangan dari gudang",
      "B. Menyuruh warga datang lagi keesokan hari karena formulir habis",
      "C. Menyuruh warga mengambil formulir sendiri di gudang",
      "D. Memberikan formulir bekas yang masih kosong untuk digunakan",
      "E. Menyuruh warga mencetak formulir sendiri di internet"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dalam memberikan pelayanan. Ketika formulir habis, ASN harus berusaha mencari solusi dengan mengambil formulir cadangan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Warga membawa berkas pendaftaran yang belum lengkap. Ia sudah datang dari desa yang jauh dan sangat membutuhkan layanan tersebut hari itu juga. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Menjelaskan berkas yang kurang dengan detail, memberikan solusi alternatif (misalnya bisa dikirim email), dan mencatat kebutuhan warga",
      "B. Menolak berkas tersebut mentah-mentah karena tidak lengkap",
      "C. Meminta warga pulang melengkapi berkas dan datang lagi besok",
      "D. Menerima berkas tersebut meskipun tidak lengkap demi membantu warga",
      "E. Menyuruh warga menunggu di ruang tunggu tanpa penjelasan apa-apa"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dengan tetap menjaga prosedur. Menjelaskan berkas yang kurang, memberikan solusi alternatif, dan mencatat kebutuhan warga menunjukkan pendekatan yang profesional dan empatik.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa rekan kerja Anda memberikan pelayanan yang lambat sehingga banyak warga yang mengeluh. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Berdiskusi dengan rekan kerja secara privat untuk memahami kendala dan menawarkan bantuan",
      "B. Melaporkan rekan kerja tersebut ke atasan tanpa berdiskusi dengannya terlebih dahulu",
      "C. Mengabaikan karena itu bukan urusan Anda",
      "D. Memberi tahu warga bahwa rekan kerja Anda memang lamban",
      "E. Menyerahkan pekerjaan rekan kerja Anda kepada diri sendiri tanpa izin"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus menjalin hubungan kerja yang harmonis dan kolaboratif. Berdiskusi secara privat untuk memahami kendala menunjukkan sikap profesional dan saling mendukung.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Seorang pemuda datang ke kantor Anda dan meminta surat keterangan tidak pernah dihukum untuk keperluan melamar kerja. Namun, Anda mengetahui bahwa pemuda tersebut pernah memiliki catatan hukum. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menjelaskan bahwa Anda tidak dapat mengeluarkan surat keterangan tersebut karena fakta yang ada, tetapi memberikan informasi tentang proses penghapusan catatan kriminal jika memenuhi syarat",
      "B. Mengeluarkan surat keterangan tersebut karena kasihan dengan pemuda yang ingin bekerja",
      "C. Menolak dengan keras dan meminta pemuda tersebut segera keluar dari kantor",
      "D. Mengabaikan permintaan tersebut dan berpura-pura tidak mendengar",
      "E. Meminta pemuda tersebut memberikan uang agar Anda bisa membantu mengurus surat tersebut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan tidak boleh memberikan dokumen palsu. Menjelaskan ketidakmungkinan mengeluarkan surat tetapi memberikan informasi solusi alternatif menunjukkan sikap profesional dan akuntabel.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda melayani warga yang datang dengan membawa surat rekomendasi dari pejabat daerah. Namun, berkas yang dibawa tidak sesuai dengan persyaratan yang berlaku. Warga tersebut menekan Anda dengan mengatakan 'surat ini dari Bupati, pasti bisa dilayani'. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Menjelaskan dengan santun bahwa berkas tetap harus memenuhi persyaratan yang berlaku, meskipun ada surat rekomendasi, dan menawarkan bantuan untuk melengkapi berkas",
      "B. Menerima berkas tersebut karena ada surat rekomendasi dari pejabat",
      "C. Menolak berkas tersebut tanpa penjelasan dan menyuruh warga keluar",
      "D. Menerima berkas tersebut dengan syarat warga memberikan uang tambahan",
      "E. Meminta warga menunggu sambil Anda menghubungi pejabat yang memberikan rekomendasi tersebut untuk mengonfirmasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus tegas dalam menjaga integritas dan akuntabilitas, namun tetap profesional. Menjelaskan bahwa berkas harus sesuai persyaratan meskipun ada surat rekomendasi menunjukkan komitmen pada aturan.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Seorang ibu hamil datang ke kantor Anda dan meminta surat keterangan untuk mendapat bantuan sosial. Ia tampak sangat membutuhkan. Anda mengetahui bahwa program bantuan sosial tersebut sudah habis kuota untuk bulan ini. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Menjelaskan situasi dengan empati, mencatat data warga untuk program berikutnya, dan memberikan informasi program bantuan lain yang masih tersedia",
      "B. Menyuruh ibu tersebut datang lagi bulan depan tanpa memberikan informasi alternatif",
      "C. Mengeluarkan surat keterangan palsu agar warga bisa mendapat bantuan",
      "D. Membiarkan ibu tersebut pulang tanpa solusi apapun",
      "E. Memberikan uang pribadi kepada ibu tersebut sebagai ganti bantuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dengan tetap menjaga akuntabilitas. Memberikan penjelasan empatik, mencatat data untuk program berikutnya, dan menginformasikan program lain menunjukkan komitmen membantu warga tanpa melanggar aturan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Akuntabel, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Warga yang Anda layani mengucapkan terima kasih setelah proses pelayanan selesai. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Membalas dengan ramah dan mengucapkan bahwa itu adalah tugas Anda, serta menawarkan bantuan lain jika diperlukan",
      "B. Mengabaikan ucapan terima kasih tersebut",
      "C. Meminta warga tersebut untuk memberikan penilaian sempurna kepada atasan",
      "D. Menyuruh warga tersebut segera meninggalkan kantor",
      "E. Meminta warga tersebut memberikan uang tips sebagai ucapan terima kasih"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus memberikan pelayanan yang ramah dan profesional. Membalas dengan ramah dan menawarkan bantuan lain menunjukkan sikap berorientasi pelayanan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta oleh atasan untuk memberikan presentasi tentang prosedur pelayanan baru di hadapan seluruh staf. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyiapkan materi dengan matang, berlatih presentasi, dan menyampaikan dengan jelas serta terstruktur",
      "B. Menolak karena merasa tidak siap berbicara di depan umum",
      "C. Membacakan materi langsung dari dokumen tanpa persiapan",
      "D. Menyuruh rekan kerja lain untuk melakukan presentasi tersebut",
      "E. Presentasi tanpa persiapan karena merasa sudah memahami materi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional dalam menjalankan tugas. Menyiapkan materi dengan matang dan menyampaikan dengan jelas menunjukkan dedikasi dan kompetensi.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Seorang warga datang ke kantor Anda dengan membawa botol minuman keras dan meminta Anda untuk segera memproses permohonannya. Ia mengancam akan melapor ke media jika tidak dilayani. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Menolak dengan tegas namun santun, menjelaskan bahwa pelayanan tidak bisa dilakukan dalam pengaruh alkohol, dan menawarkan untuk dilayani di lain waktu",
      "B. Menerima permohonan tersebut agar warga tidak marah",
      "C. Memanggil petugas keamanan untuk mengusir warga tersebut",
      "D. Meminta warga tersebut meletakkan botol minuman keras di meja Anda",
      "E. Mengabaikan warga tersebut dan berpura-pura sedang sibuk"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus tegas dalam menjaga aturan tetapi tetap profesional. Menolak dengan santun dan memberikan penjelasan yang jelas menunjukkan sikap yang tegas namun tetap berorientasi pelayanan.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda sedang melayani warga di loket ketika telepon kantor berdering. Di saat bersamaan, ada warga lain yang datang dan menunggu di loket. Bagaimana Anda memprioritaskan?",
    options: JSON.stringify([
      "A. Menyelesaikan pelayanan warga di loket terlebih dahulu, kemudian mengangkat telepon dan meminta maaf atas keterlambatan",
      "B. Mengangkat telepon terlebih dahulu dan meminta warga menunggu",
      "C. Menyuruh warga di loket pergi dan datang lagi nanti",
      "D. Membiarkan telepon berdering sampai warga di loket selesai",
      "E. Menyuruh rekan kerja lain mengangkat telepon tanpa koordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu mengelola waktu dan prioritas dengan baik. Menyelesaikan pelayanan warga di loket terlebih dahulu menunjukkan komitmen pada pelayanan langsung.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang sengaja memperlambat proses pelayanan agar warga memberikan 'uang ketok'. Bagaimana Anda menyikapi hal ini?",
    options: JSON.stringify([
      "A. Mengingatkan rekan kerja tentang etika ASN dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut melakukan praktik serupa karena semua orang melakukannya",
      "C. Mengabaikan karena itu bukan urusan Anda",
      "D. Memberi tahu warga bahwa mereka bisa melaporkan rekan kerja tersebut",
      "E. Meminta bagian dari uang ketok tersebut sebagai imbalan atas keheningan Anda"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Mengingatkan rekan kerja dan melaporkan ke atasan jika tidak ada perubahan menunjukkan komitmen pada anti-korupsi dan akuntabilitas.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Seorang warga datang dengan membawa surat kuasa dari keluarganya yang sakit untuk mengurus surat keterangan tidak mampu. Namun, Anda ragu dengan keaslian surat kuasa tersebut. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memverifikasi keaslian surat kuasa dengan menghubungi pihak yang berwenang atau meminta dokumen pendukung lainnya",
      "B. Menerima surat kuasa tersebut tanpa verifikasi karena kasihan dengan kondisi keluarganya",
      "C. Menolak surat kuasa tersebut dan menyuruh warga membawa orang sakit langsung ke kantor",
      "D. Meminta warga tersebut membayar biaya verifikasi tambahan",
      "E. Mengabaikan surat kuasa tersebut dan tidak melayani warga sama sekali"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam memverifikasi dokumen. Memverifikasi keaslian surat kuasa dengan menghubungi pihak berwenang menunjukkan sikap profesional dan hati-hati.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Warga bertanya tentang prosedur pengurusan surat izin usaha yang belum Anda ketahui. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Jujur mengakui belum mengetahui, meminta warga menunggu sebentar, dan segera mengecek informasi dari sumber yang terpercaya",
      "B. Menjawab dengan informasi yang tidak pasti agar warga merasa puas",
      "C. Menyuruh warga bertanya ke loket lain",
      "D. Mengatakan bahwa informasi tersebut rahasia dan tidak bisa diberikan",
      "E. Menyuruh warga mencari informasi sendiri di internet"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus jujur dan kompeten. Jujur mengakui belum mengetahui dan berusaha mencari informasi dari sumber terpercaya menunjukkan integritas dan dedikasi.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mendapat instruksi dari atasan untuk mempercepat proses pelayanan dengan cara mengurangi tahapan verifikasi. Menurut Anda, tahapan verifikasi tersebut penting untuk mencegah kecurangan. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Menyampaikan kekhawatiran Anda kepada atasan dengan data dan argumen yang logis tentang pentingnya verifikasi",
      "B. Mengikuti instruksi atasan tanpa protes karena atasan selalu benar",
      "C. Menolak instruksi atasan secara terbuka di hadapan staf lain",
      "D. Melakukan verifikasi secara diam-diam meskipun sudah dikurangi",
      "E. Mengurangi verifikasi sesuai instruksi dan menyalahkan atasan jika ada masalah"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal tetapi juga akuntabel. Menyampaikan kekhawatiran dengan data dan argumen logis menunjukkan profesionalisme dan komitmen pada integritas.",
    explanationSource: "Core values ASN: Loyal, Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Seorang warga menuduh Anda memberikan pelayanan yang tidak adil karena warga lain dilayani lebih cepat. Padahal, warga tersebut datang belakangan. Bagaimana Anda menangani tuduhan ini?",
    options: JSON.stringify([
      "A. Menjelaskan urutan kedatangan dan alasan perbedaan waktu pelayanan dengan data yang jelas, serta meminta maaf atas kesalahpahaman",
      "B. Menjadi defensif dan menuduh warga tersebut berbohong",
      "C. Mengabaikan tuduhan tersebut",
      "D. Meminta maaf berulang kali tanpa memberikan penjelasan",
      "E. Menyuruh warga tersebut melapor ke atasan jika tidak puas"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjelaskan keputusan dengan transparan dan akuntabel. Menjelaskan dengan data yang jelas dan meminta maaf atas kesalahpahaman menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi petugas jaga di loket pelayanan pada hari libur nasional. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menerima tugas dengan profesional dan memastikan pelayanan tetap berjalan dengan baik",
      "B. Menolak tugas karena hari tersebut adalah hari libur nasional",
      "C. Menerima tugas tetapi tidak melakukan pelayanan dengan serius",
      "D. Meminta ganti rugi yang besar sebelum menerima tugas",
      "E. Meminta rekan kerja lain untuk menggantikan tanpa koordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan berorientasi pelayanan. Menerima tugas dengan profesional meskipun hari libur menunjukkan dedikasi dan tanggung jawab.",
    explanationSource: "Core values ASN: Loyal, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada oknum di instansi Anda yang menjual formulir pendaftaran secara online dengan harga mahal. Formulir tersebut seharusnya gratis. Bagaimana Anda menyikapi hal ini?",
    options: JSON.stringify([
      "A. Melaporkan praktik tersebut ke atasan atau pihak berwenang terkait dan memberikan informasi yang Anda miliki",
      "B. Mengabaikan karena Anda tidak ingin masalah",
      "C. Ikut menjual formulir tersebut untuk mendapatkan keuntungan",
      "D. Memberi tahu warga bahwa mereka bisa mendapatkan formulir gratis di kantor",
      "E. Menyimpan informasi tersebut untuk digunakan sebagai alat pemerasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Melaporkan praktik penjualan formulir gratis menunjukkan komitmen pada anti-korupsi dan perlindungan warga.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Warga memberikan feedback negatif tentang pelayanan di kantor Anda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menerima feedback dengan terbuka, mencatat masukan, dan menyampaikan ke atasan untuk perbaikan",
      "B. Menolak feedback tersebut dan membela diri",
      "C. Mengabaikan feedback tersebut",
      "D. Menyuruh warga memberikan feedback positif",
      "E. Meminta warga menghapus feedback tersebut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus terbuka terhadap masukan dan berorientasi pada perbaikan. Menerima feedback dengan terbuka menunjukkan profesionalisme dan komitmen pada peningkatan kualitas pelayanan.",
    explanationSource: "Core values ASN: Adaptif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda ditugaskan untuk memberikan pelayanan di daerah terpencil yang fasilitasnya terbatas. Bagaimana Anda mempersiapkan diri?",
    options: JSON.stringify([
      "A. Mempelajari kondisi daerah tersebut, menyiapkan perlengkapan yang diperlukan, dan berkoordinasi dengan pihak lokal",
      "B. Menolak penugasan karena fasilitas yang terbatas",
      "C. Datang tanpa persiapan karena merasa sudah berpengalaman",
      "D. Meminta fasilitas lengkap sebelum berangkat",
      "E. Meminta rekan kerja lain yang menggantikan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari kondisi daerah, menyiapkan perlengkapan, dan berkoordinasi dengan pihak lokal menunjukkan profesionalisme dan kemampuan beradaptasi.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Seorang warga datang dengan membawa surat pengaduan tentang pelayanan yang buruk di instansi lain. Warga meminta Anda untuk membantu menindaklanjuti pengaduan tersebut. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menerima pengaduan, mencatat dengan lengkap, dan meneruskan ke instansi terkait sesuai prosedur",
      "B. Menolak pengaduan karena bukan wewenang instansi Anda",
      "C. Mengabaikan pengaduan tersebut",
      "D. Menjanjikan akan menyelesaikan pengaduan tersebut meskipun bukan wewenang Anda",
      "E. Meminta warga membayar biaya administrasi untuk memproses pengaduan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan mampu mengarahkan warga ke instansi yang tepat. Menerima pengaduan, mencatat, dan meneruskan ke instansi terkait menunjukkan sikap profesional.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda sedang melayani warga yang sangat emosional karena permohonannya ditolak. Warga tersebut mulai berteriak dan menarik perhatian pengunjung lain. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Tetap tenang, meminta warga untuk berbicara di ruangan yang lebih privat, dan menjelaskan alasan penolakan dengan tenang",
      "B. Membalas teriakan warga tersebut dengan nada yang sama tinggi",
      "C. Memanggil petugas keamanan untuk mengusir warga tersebut",
      "D. Menerima permohonan warga tersebut agar situasi menjadi tenang",
      "E. Mengabaikan warga tersebut dan tetap melayani warga lain"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu mengelola situasi sulit dengan profesional. Tetap tenang, meminta privasi, dan menjelaskan dengan tenang menunjukkan kemampuan de-eskalasi dan profesionalisme.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memperbarui informasi di papan pengumuman kantor. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memastikan informasi yang ditulis akurat, jelas, dan mudah dipahami oleh warga",
      "B. Menulis informasi seadanya tanpa memperhatikan kejelasan",
      "C. Menulis informasi dengan bahasa yang sulit dipahami",
      "D. Membiarkan papan pengumuman kosong karena tidak ada yang membaca",
      "E. Menulis informasi yang berbeda dengan kebijakan kantor"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dalam setiap aspek pekerjaan. Memastikan informasi akurat, jelas, dan mudah dipahami menunjukkan komitmen pada transparansi.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Atasan Anda meminta Anda untuk merekomendasikan salah satu pelamar untuk posisi tertentu di instansi Anda. Anda mengetahui bahwa ada pelamar lain yang lebih kompeten tetapi tidak memiliki kenalan. Bagaimana Anda menyikapi permintaan atasan ini?",
    options: JSON.stringify([
      "A. Menyampaikan rekomendasi berdasarkan kompetensi pelamar, bukan kedekatan personal, dan menjelaskan alasan Anda",
      "B. Mengikuti permintaan atasan tanpa pertimbangan",
      "C. Menolak permintaan atasan secara terbuka",
      "D. Memberikan rekomendasi palsu agar semua pelamar merasa puas",
      "E. Meminta imbalan dari pelamar yang direkomendasikan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan profesional. Memberikan rekomendasi berdasarkan kompetensi menunjukkan integritas dan komitmen pada meritokrasi.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda menemukan kesalahan dalam dokumen yang sudah Anda tanda tangan dan kirim ke instansi lain. Kesalahan tersebut bersifat administratif tetapi dapat mempengaruhi proses pelayanan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Segera menghubungi instansi terkait untuk memperbaiki kesalahan dan memberikan dokumen yang benar",
      "B. Mengabaikan kesalahan karena bersifat administratif",
      "C. Menyalahkan rekan kerja yang membantu menyiapkan dokumen",
      "D. Menunggu sampai instansi lain menghubungi Anda tentang kesalahan tersebut",
      "E. Menyimpan kesalahan tersebut untuk diri sendiri"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan proaktif. Segera menghubungi instansi terkait untuk memperbaiki kesalahan menunjukkan integritas dan tanggung jawab.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda melihat ada warga yang tersesat mencari lokasi kantor pelayanan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memberikan arahan dengan jelas dan jika memungkinkan, menunjukkan jalan ke lokasi yang dituju",
      "B. Mengabaikan warga tersebut karena Anda sedang sibuk",
      "C. Menyuruh warga tersebut menggunakan aplikasi peta di ponselnya",
      "D. Memberikan arahan yang membingungkan",
      "E. Meminta warga tersebut membayar atas bantuan arahan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dalam situasi apapun. Memberikan arahan dengan jelas dan menunjukkan jalan menunjukkan sikap yang ramah dan membantu.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola database warga yang mengurus surat keterangan. Anda menemukan adanya duplikasi data yang dapat menyebabkan kesalahan pelayanan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Membersihkan data duplikasi, mengonsolidasikan informasi, dan melaporkan temuan ke atasan untuk perbaikan sistem",
      "B. Mengabaikan data duplikasi karena tidak mengganggu pelayanan saat ini",
      "C. Menghapus seluruh data tanpa verifikasi",
      "D. Menyalahkan tim IT atas adanya duplikasi data",
      "E. Menyimpan data duplikasi untuk cadangan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel dalam pengelolaan data. Membersihkan data duplikasi, mengonsolidasikan, dan melaporkan menunjukkan profesionalisme dan komitmen pada akurasi data.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Seorang pejabat daerah meminta Anda untuk memprioritaskan pengurusan surat izin anaknya. Padahal, ada puluhan warga yang sudah mendaftar lebih dulu. Bagaimana Anda menangani permintaan ini?",
    options: JSON.stringify([
      "A. Menjelaskan bahwa semua permohonan harus mengikuti prosedur antrian yang berlaku dan menawarkan untuk membantu mempercepat proses sesuai ketentuan",
      "B. Memrioritaskan permintaan pejabat tersebut karena pengaruhnya",
      "C. Menolak permintaan pejabat secara terbuka di hadapan staf lain",
      "D. Meminta pejabat tersebut membayar biaya tambahan untuk mempercepat proses",
      "E. Menyembunyikan fakta bahwa ada antrian dan melayani permintaan pejabat terlebih dahulu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan tidak boleh memberikan perlakuan khusus. Menjelaskan prosedur antrian dan menawarkan bantuan sesuai ketentuan menunjukkan integritas dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menulis laporan pelayanan bulanan. Apa yang sebaiknya Anda prioritaskan dalam laporan tersebut?",
    options: JSON.stringify([
      "A. Data yang akurat, pencapaian target, kendala yang dihadapi, dan rekomendasi perbaikan",
      "B. Data yang dibuat-buat agar terlihat bagus",
      "C. Hanya menulis pencapaian tanpa menyebutkan kendala",
      "D. Menyalahkan rekan kerja atas kendala yang terjadi",
      "E. Menulis laporan yang panjang tanpa substansi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam pelaporan. Menulis laporan dengan data akurat, pencapaian, kendala, dan rekomendasi menunjukkan profesionalisme dan transparansi.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mendapat keluhan dari warga bahwa pelayanan di instansi Anda sangat lambat. Setelah dicek, ternyata prosedur yang berlaku memang memakan waktu lama. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mencatat keluhan, menganalisis prosedur yang ada, dan mengusulkan perbaikan efisiensi ke atasan",
      "B. Mengabaikan keluhan karena prosedur memang sudah ditetapkan",
      "C. Menyalahkan warga karena tidak sabar menunggu",
      "D. Mengubah prosedur sepihak tanpa izin atasan",
      "E. Menjanjikan perbaikan kepada warga tanpa koordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan berorientasi pada perbaikan. Mencatat keluhan, menganalisis prosedur, dan mengusulkan perbaikan menunjukkan komitmen pada peningkatan kualitas pelayanan.",
    explanationSource: "Core values ASN: Adaptif, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang sengaja memberikan informasi yang salah kepada warga agar warga datang lagi keesokan hari (sehingga rekan kerja tersebut tidak perlu bekerja keras hari itu). Bagaimana Anda menyikapi hal ini?",
    options: JSON.stringify([
      "A. Mengingatkan rekan kerja tentang dampak buruk memberikan informasi yang salah dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut melakukan hal yang sama karena terlihat menguntungkan",
      "C. Mengabaikan karena itu bukan urusan Anda",
      "D. Memberi tahu warga yang terdampak tentang informasi yang benar",
      "E. Menyimpan informasi tersebut sebagai alat pemerasan terhadap rekan kerja"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Mengingatkan rekan kerja dan melaporkan ke atasan menunjukkan komitmen pada pelayanan publik yang jujur.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyambut rombongan tamu dari instansi lain di kantor. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyambut dengan ramah, memberikan informasi yang diperlukan, dan memastikan tamu merasa nyaman",
      "B. Mengabaikan tamu tersebut karena Anda bukan protokol",
      "C. Menyambut dengan sikap yang sombong",
      "D. Menyuruh tamu menunggu di lobi tanpa pelayanan",
      "E. Meminta identitas tamu secara berlebihan sebelum memberikan pelayanan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Menyambut dengan ramah dan memastikan tamu nyaman menunjukkan profesionalisme dan keramahan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri rapat koordinasi dengan instansi lain tentang program pelayanan publik bersama. Anda belum mempersiapkan materi. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Segera mempersiapkan materi dengan cepat, berkoordinasi dengan rekan kerja untuk mendapatkan data yang diperlukan",
      "B. Tidak datang ke rapat karena belum siap",
      "C. Datang ke rapat tanpa persiapan",
      "D. Meminta penundaan rapat tanpa alasan yang jelas",
      "E. Menyuruh rekan kerja lain yang menghadiri rapat tersebut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Segera mempersiapkan materi dan berkoordinasi menunjukkan profesionalisme dan kemampuan bekerja di bawah tekanan.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada kebijakan baru yang akan memberatkan warga miskin. Anda diminta untuk mensosialisasikan kebijakan tersebut. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mensosialisasikan kebijakan sesuai tugas, tetapi menyampaikan aspirasi masyarakat ke atasan tentang dampak kebijakan tersebut",
      "B. Menolak mensosialisasikan kebijakan tersebut",
      "C. Mensosialisasikan kebijakan tanpa penjelasan yang memadai",
      "D. Mensosialisasikan kebijakan dengan menambahkan informasi yang tidak sesuai",
      "E. Mengabaikan tugas mensosialisasi karena tidak setuju dengan kebijakan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal tetapi juga akuntabel. Mensosialisasikan kebijakan sesuai tugas tetapi menyampaikan aspirasi menunjukkan keseimbangan antara kepatuhan dan kepedulian.",
    explanationSource: "Core values ASN: Loyal, Akuntabel, Berorientasi Pelayanan"
  },

  // ============================================================
  // 2. SOSIAL BUDAYA (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda ditugaskan di daerah dengan budaya yang berbeda dari budaya asal Anda. Apa yang sebaiknya Anda lakukan untuk menyesuaikan diri?",
    options: JSON.stringify([
      "A. Mempelajari adat istiadat setempat, menghormati kebiasaan masyarakat, dan terbuka terhadap perbedaan",
      "B. Tetap menjalankan kebiasaan budaya asal Anda tanpa memperhatikan budaya setempat",
      "C. Mengabaikan budaya setempat karena dianggap kuno",
      "D. Memaksa masyarakat setempat mengikuti budaya Anda",
      "E. Mengeluh tentang perbedaan budaya kepada atasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan menghormati keberagaman. Mempelajari adat istiadat setempat dan menghormati kebiasaan menunjukkan kemampuan beradaptasi dan menghargai keberagaman.",
    explanationSource: "Core values ASN: Adaptif, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Dalam rapat koordinasi, ada perbedaan pendapat antara Anda dan rekan kerja dari latar belakang budaya yang berbeda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mendengarkan pendapat rekan kerja dengan terbuka dan mencari solusi yang menghargai kedua perspektif",
      "B. Bersikeras bahwa pendapat Anda adalah yang paling benar",
      "C. Mengabaikan pendapat rekan kerja karena dianggap tidak relevan",
      "D. Menyuruh rekan kerja tersebut mengikuti cara Anda",
      "E. Keluar dari rapat karena frustrasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kolaboratif. Mendengarkan dengan terbuka dan mencari solusi yang menghargai perspektif berbeda menunjukkan kemampuan bekerja dalam tim yang multikultural.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memimpin tim yang terdiri dari orang-orang dengan latar belakang suku, agama, dan budaya yang beragam. Bagaimana Anda memimpin tim tersebut?",
    options: JSON.stringify([
      "A. Membangun visi bersama, menghargai keberagaman, dan menciptakan lingkungan kerja yang inklusif bagi semua anggota",
      "B. Menerapkan satu budaya kerja yang harus diikuti semua anggota tanpa pengecualian",
      "C. Memberikan perlakuan khusus kepada anggota tim yang sebudaya dengan Anda",
      "D. Mengabaikan perbedaan budaya dan memperlakukan semua orang sama tanpa mempertimbangkan kebutuhan khusus",
      "E. Membiarkan anggota tim bekerja secara individual tanpa koordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu memimpin dalam lingkungan yang beragam. Membangun visi bersama dan menciptakan lingkungan inklusif menunjukkan kemampuan kepemimpinan yang menghargai keberagaman.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mendapat tugas untuk menyelenggarakan acara budaya di kantor. Anda mengetahui bahwa beberapa staf memiliki keyakinan agama yang berbeda dan mungkin tidak nyaman dengan beberapa unsur acara. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Merancang acara yang inklusif dengan mempertimbangkan sensitivitas semua keyakinan, dan berkoordinasi dengan perwakilan setiap kelompok",
      "B. Menyelenggarakan acara sesuai tradisi mayoritas tanpa mempertimbangkan minoritas",
      "C. Membatalkan acara karena dianggap terlalu ribet",
      "D. Memaksa semua staf untuk berpartisipasi tanpa mempertimbangkan keyakinan mereka",
      "E. Menyelenggarakan acara tanpa koordinasi dengan siapapun"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan menghargai keberagaman. Merancang acara inklusif dan berkoordinasi dengan semua pihak menunjukkan komitmen pada kerukunan dan penghormatan terhadap perbedaan.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik antara dua kelompok masyarakat di wilayah tugas Anda. Konflik tersebut dipicu oleh perbedaan adat istiadat. Bagaimana Anda sebagai ASN ikut menyelesaikan konflik tersebut?",
    options: JSON.stringify([
      "A. Berperan sebagai mediator netral, memahami akar masalah dari kedua belah pihak, dan mencari solusi yang menghargai kedua adat istiadat",
      "B. Memihak salah satu kelompok yang dianggap lebih benar",
      "C. Mengabaikan konflik karena dianggap urusan internal masyarakat",
      "D. Melarang kedua kelompok untuk melakukan aktivitas budaya",
      "E. Memisahkan kedua kelompok secara fisik tanpa menyelesaikan akar masalah"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi penengah yang adil dalam konflik sosial. Berperan sebagai mediator netral dan mencari solusi yang menghargai kedua belah pihak menunjukkan kemampuan resolusi konflik.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengimplementasikan program pemerintah yang bertentangan dengan adat istiadat masyarakat setempat. Bagaimana Anda menyikapi situasi ini?",
    options: JSON.stringify([
      "A. Berkoordinasi dengan tokoh adat dan masyarakat untuk mencari solusi yang dapat menjalankan program tanpa mengabaikan adat istiadat",
      "B. Mengabaikan adat istiadat dan menjalankan program sesuai instruksi",
      "C. Menolak menjalankan program karena bertentangan dengan adat",
      "D. Menjalankan program sepihak tanpa melibatkan masyarakat",
      "E. Melaporkan ke atasan bahwa program tersebut tidak dapat dijalankan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjembatani kebijakan pemerintah dengan kearifan lokal. Berkoordinasi dengan tokoh adat untuk mencari solusi menunjukkan kemampuan adaptif dan menghargai kearifan lokal.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda bertemu dengan warga yang menggunakan bahasa daerah yang tidak Anda pahami. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Meminta bantuan penerjemah atau mencoba berkomunikasi dengan bahasa Indonesia yang sederhana dan sopan",
      "B. Meminta warga tersebut menggunakan bahasa Inggris",
      "C. Mengabaikan warga tersebut karena tidak bisa berkomunikasi",
      "D. Menyuruh warga tersebut belajar bahasa Indonesia terlebih dahulu",
      "E. Berkomunikasi dengan isyarat tangan tanpa penjelasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan adaptif. Meminta bantuan penerjemah atau berkomunikasi dengan bahasa Indonesia sederhana menunjukkan usaha untuk memahami dan dilayani.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengidentifikasi kearifan lokal yang dapat mendukung program pemerintah di daerah tugas Anda. Apa langkah pertama yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Melakukan studi lapangan, berdialog dengan tokoh masyarakat, dan mendokumentasikan kearifan lokal yang relevan dengan program",
      "B. Langsung menulis laporan tentang kearifan lokal tanpa studi lapangan",
      "C. Meminta masyarakat untuk meninggalkan kearifan lokal mereka",
      "D. Mengabaikan kearifan lokal dan hanya fokus pada instruksi pusat",
      "E. Menyalin program dari daerah lain tanpa mempertimbangkan konteks lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Melakukan studi lapangan dan berdialog dengan masyarakat menunjukkan pendekatan yang partisipatif dan menghargai kearifan lokal.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada praktik tradisional di masyarakat yang dianggap dapat membahayakan kesehatan. Namun, praktik tersebut merupakan bagian dari adat istiadat yang dihormati. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdialog dengan tokoh adat dan masyarakat untuk memberikan pemahaman tentang kesehatan sambil menghormati nilai-nilai adat",
      "B. Melarang praktik tersebut secara sepihak tanpa dialog",
      "C. Mengabaikan karena dianggap urusan adat masyarakat",
      "D. Memaksa masyarakat meninggalkan praktik tersebut",
      "E. Melaporkan praktik tersebut sebagai aktivitas ilegal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjembatani pengetahuan modern dengan kearifan lokal. Berdialog dengan tokoh adat untuk memberikan pemahaman sambil menghormati nilai adat menunjukkan pendekatan yang sensitif budaya.",
    explanationSource: "Core values ASN: Harmonis, Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri upacara adat di desa tugas Anda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Hadir dengan sopan, mengenakan pakaian yang sesuai, dan menghormati prosesi upacara",
      "B. Tidak hadir karena dianggap tidak penting",
      "C. Hadir tetapi tidak mengikuti prosesi upacara",
      "D. Hadir dan mengkritik upacara tersebut",
      "E. Hadir hanya untuk foto dan pulang"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus menghormati keberagaman budaya. Hadir dengan sopan dan menghormati prosesi menunjukkan penghargaan terhadap adat istiadat setempat.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Seorang warga menolak program vaksinasi karena bertentangan dengan kepercayaan tradisionalnya. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Mendengarkan kepercayaan warga dengan empati, memberikan informasi ilmiah secara sensitif, dan melibatkan tokoh masyarakat untuk memberikan pemahaman",
      "B. Memaksa warga untuk divaksinasi tanpa penjelasan",
      "C. Mengabaikan penolakan warga",
      "D. Melarang warga tersebut mendapatkan pelayanan publik",
      "E. Menyuruh warga tersebut pindah ke daerah lain"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu berkomunikasi dengan sensitif budaya. Mendengarkan dengan empati, memberikan informasi, dan melibatkan tokoh masyarakat menunjukkan pendekatan yang menghargai kepercayaan lokal.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menulis kebijakan yang mempertimbangkan kearifan lokal. Anda tidak memiliki pengetahuan yang cukup tentang kearifan lokal di daerah tersebut. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Melakukan penelitian, berkonsultasi dengan ahli dan tokoh masyarakat, serta belajar dari pengalaman daerah lain yang berhasil mengintegrasikan kearifan lokal",
      "B. Menulis kebijakan berdasarkan asumsi tanpa penelitian",
      "C. Menolak tugas karena tidak memiliki pengetahuan yang cukup",
      "D. Menyalin kebijakan dari daerah lain tanpa adaptasi",
      "E. Menulis kebijakan tanpa mempertimbangkan kearifan lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Melakukan penelitian, berkonsultasi, dan belajar menunjukkan dedikasi untuk menghasilkan kebijakan yang berkualitas dan kontekstual.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mempromosikan wisata budaya daerah tugas Anda. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Berkoordinasi dengan komunitas lokal, mempromosikan keunikan budaya daerah, dan memastikan promosi menghargai nilai-nilai budaya",
      "B. Mempromosikan wisata budaya tanpa melibatkan masyarakat lokal",
      "C. Mempromosikan budaya daerah lain yang lebih terkenal",
      "D. Mengabaikan tugas karena dianggap bukan bidang Anda",
      "E. Mempromosikan wisata budaya dengan cara yang menyinggung masyarakat lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan berorientasi pelayanan. Berkoordinasi dengan komunitas lokal dan menghargai nilai budaya menunjukkan pendekatan yang partisipatif dan bertanggung jawab.",
    explanationSource: "Core values ASN: Kolaboratif, Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada pergeseran budaya di masyarakat akibat pengaruh globalisasi. Beberapa kearifan lokal mulai terlupakan. Bagaimana Anda sebagai ASN ikut melestarikan kearifan lokal?",
    options: JSON.stringify([
      "A. Mendokumentasikan kearifan lokal, mendukung program pelestarian, dan mengintegrasikan kearifan lokal dalam pelayanan publik",
      "B. Mengabaikan pergeseran budaya karena dianggap proses alami",
      "C. Memaksa masyarakat untuk kembali ke tradisi lama",
      "D. Melarang penggunaan teknologi modern di masyarakat",
      "E. Menyalahkan generasi muda atas hilangnya kearifan lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan berkontribusi pada pelestarian budaya. Mendokumentasikan, mendukung program pelestarian, dan mengintegrasikan kearifan lokal menunjukkan komitmen pada keberlanjutan budaya.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merelokasi pemukiman warga karena proyek pembangunan infrastruktur. Namun, pemukiman tersebut merupakan situs budaya yang dihormati. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Berdialog dengan masyarakat, mencari alternatif lokasi yang tidak mengganggu situs budaya, dan memastikan proses relokasi yang adil dan transparan",
      "B. Melaksanakan relokasi tanpa dialog dengan masyarakat",
      "C. Mengabaikan proyek pembangunan karena situs budaya",
      "D. Memaksa masyarakat untuk pindah tanpa ganti rugi",
      "E. Membiarkan proyek dan situs budaya konflik tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menyelesaikan konflik antara pembangunan dan pelestarian budaya. Berdialog, mencari alternatif, dan memastikan proses yang adil menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda bertemu dengan rekan kerja yang memiliki kebiasaan makan yang berbeda dari Anda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menghormati kebiasaan rekan kerja dan tidak mengomentari perbedaan tersebut",
      "B. Mengejek kebiasaan rekan kerja tersebut",
      "C. Meminta rekan kerja mengikuti kebiasaan makan Anda",
      "D. Menghindari makan bersama rekan kerja tersebut",
      "E. Melaporkan kebiasaan rekan kerja ke atasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan menghargai keberagaman. Menghormati kebiasaan rekan kerja tanpa mengomentari menunjukkan sikap yang toleran dan profesional.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi pembicara tentang pentingnya gotong royong dalam pelayanan publik. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan contoh nyata dari kearifan lokal, menghubungkan nilai gotong royong dengan prinsip kerja tim, dan mengajak peserta berdiskusi",
      "B. Membacakan materi tanpa contoh nyata",
      "C. Mengabaikan nilai gotong royong dan hanya membahas aspek teknis",
      "D. Menyuruh peserta menghafal materi tanpa diskusi",
      "E. Mengkritik masyarakat yang tidak menjalankan gotong royong"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan mampu berkomunikasi secara efektif. Menggunakan contoh nyata, menghubungkan dengan prinsip kerja, dan mengajak diskusi menunjukkan pendekatan yang inspiratif.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik horizontal antara dua kelompok etnis di daerah tugas Anda. Konflik tersebut sudah berlangsung lama dan sulit diselesaikan. Bagaimana Anda sebagai ASN berkontribusi menyelesaikan konflik?",
    options: JSON.stringify([
      "A. Membangun dialog antar kelompok, memfasilitasi pertemuan, dan mencari area kerja sama yang menguntungkan kedua belah pihak",
      "B. Memihak salah satu kelompok",
      "C. Mengabaikan konflik karena dianggap urusan internal",
      "D. Melarang interaksi antar kelompok",
      "E. Memindahkan salah satu kelompok ke daerah lain"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi agen perdamaian. Membangun dialog, memfasilitasi pertemuan, dan mencari area kerja sama menunjukkan kemampuan resolusi konflik.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengumpulkan data tentang potensi budaya di desa tugas Anda. Apa yang sebaiknya Anda prioritaskan?",
    options: JSON.stringify([
      "A. Mengidentifikasi potensi budaya unik, mendokumentasikan nilai-nilai yang masih dijalankan, dan mengidentifikasi potensi yang dapat dikembangkan",
      "B. Hanya mencatat budaya yang sudah terkenal",
      "C. Mengabaikan budaya yang dianggap tidak penting",
      "D. Membandingkan budaya desa dengan budaya kota",
      "E. Mengumpulkan data tanpa verifikasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Mengidentifikasi potensi budaya unik dan mendokumentasikan menunjukkan pendekatan yang komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mendapatkan tugas untuk membangun jembatan komunikasi antara pemerintah daerah dan komunitas adat. Bagaimana Anda menjalankan tugas ini?",
    options: JSON.stringify([
      "A. Memahami kebutuhan kedua belah pihak, memfasilitasi dialog, dan menciptakan mekanisme komunikasi yang berkelanjutan",
      "B. Menyampaikan instruksi pemerintah tanpa mempertimbangkan aspirasi komunitas adat",
      "C. Hanya fokus pada aspirasi komunitas adat tanpa mempertimbangkan kebijakan pemerintah",
      "D. Membiarkan kedua belah pihak berkomunikasi sendiri tanpa campur tangan",
      "E. Meminta kedua belah pihak menandatangani perjanjian tanpa dialog"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi jembatan antara pemerintah dan masyarakat. Memahami kebutuhan, memfasilitasi dialog, dan menciptakan mekanisme berkelanjutan menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada program pemerintah yang berpotensi menggerus kearifan lokal masyarakat. Anda diminta untuk menjadi fasilitator program tersebut. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berusaha memodifikasi program agar dapat berjalan berdampingan dengan kearifan lokal, dan menyampaikan masukan kepada pembuat kebijakan",
      "B. Menjalankan program tanpa mempertimbangkan dampak pada kearifan lokal",
      "C. Menolak menjadi fasilitator karena tidak setuju dengan program",
      "D. Menjalankan program dan secara diam-diam menghambat implementasinya",
      "E. Mengabaikan program dan hanya fokus pada kearifan lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan mampu menjembatani kebijakan dengan konteks lokal. Memodifikasi program dan menyampaikan masukan menunjukkan profesionalisme dan kepedulian terhadap kearifan lokal.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membantu mempersiapkan acara peringatan hari kemerdekaan di kantor. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Berkoordinasi dengan panitia, menyiapkan peralatan yang diperlukan, dan memastikan acara berjalan dengan khidmat",
      "B. Mengabaikan tugas karena dianggap tidak penting",
      "C. Menyiapkan acara tanpa koordinasi dengan panitia",
      "D. Meminta rekan kerja lain yang melaksanakan tugas",
      "E. Menyiapkan acara dengan cara yang tidak menghormati makna hari kemerdekaan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan kolaboratif. Berkoordinasi dan memastikan acara berjalan khidmat menunjukkan dedikasi dan penghormatan terhadap hari kemerdekaan.",
    explanationSource: "Core values ASN: Loyal, Kolaboratif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada perbedaan pendapat antara tokoh masyarakat tentang cara terbaik melestarikan budaya. Bagaimana Anda menyikapi perbedaan ini?",
    options: JSON.stringify([
      "A. Memfasilitasi diskusi antar tokoh masyarakat untuk mencari titik temu dan strategi pelestarian yang dapat diterima semua pihak",
      "B. Memilih salah satu pendapat dan mendukungnya secara penuh",
      "C. Mengabaikan perbedaan dan menentukan strategi sendiri",
      "D. Menyerahkan sepenuhnya keputusan kepada pemerintah pusat",
      "E. Membiarkan konflik berlangsung tanpa intervensi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan mampu memfasilitasi dialog. Memfasilitasi diskusi untuk mencari titik temu menunjukkan kemampuan mediasi dan komitmen pada partisipasi masyarakat.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola museum daerah yang artifact-nya mulai rusak. Anggaran terbatas dan Anda harus memprioritaskan pelestarian. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengidentifikasi artifact yang paling berharga, mencari sumber pendanaan alternatif, dan melibatkan masyarakat dalam upaya pelestarian",
      "B. Mengabaikan artifact yang rusak karena tidak ada anggaran",
      "C. Menjual artifact untuk mendapatkan dana",
      "D. Memindahkan seluruh artifact ke museum di kota besar",
      "E. Menutup museum tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif dalam pengelolaan sumber daya terbatas. Mengidentifikasi prioritas, mencari pendanaan alternatif, dan melibatkan masyarakat menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mendata UMKM yang berbasis kearifan lokal di daerah tugas Anda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Melakukan pendataan secara menyeluruh, memvalidasi informasi, dan mengidentifikasi potensi pengembangan UMKM berbasis kearifan lokal",
      "B. Hanya mendata UMKM yang sudah terkenal",
      "C. Mengabaikan UMKM yang belum terdaftar",
      "D. Meminta UMKM membayar biaya pendaftaran",
      "E. Mendata tanpa verifikasi ke lapangan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Melakukan pendataan menyeluruh dan mengidentifikasi potensi menunjukkan pendekatan yang sistematis dan proaktif.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada generasi muda di daerah tugas Anda yang mulai terpengaruh budaya asing dan meninggalkan budaya lokal. Bagaimana Anda sebagai ASN ikut melestarikan budaya lokal?",
    options: JSON.stringify([
      "A. Mengadakan kegiatan yang menghibur dan edukatif tentang budaya lokal, melibatkan generasi muda dalam kegiatan budaya, dan menggunakan media sosial untuk promosi",
      "B. Melarang generasi muda mengakses budaya asing",
      "C. Mengkritik generasi muda karena meninggalkan budaya lokal",
      "D. Mengabaikan karena dianggap hak pribadi",
      "E. Memaksa generasi muda mengikuti kegiatan budaya"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kreatif dalam melestarikan budaya. Mengadakan kegiatan edukatif, melibatkan generasi muda, dan menggunakan media sosial menunjukkan pendekatan yang modern dan inklusif.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merumuskan kebijakan yang mengakomodasi hak-hak masyarakat adat. Anda mengetahui bahwa hak-hak tersebut seringkali berbenturan dengan kebijakan pembangunan. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mempelajari praktik terbaik dari daerah lain, berdialog dengan masyarakat adat dan pemangku kebijakan, serta merumuskan kebijakan yang seimbang",
      "B. Mengabaikan hak masyarakat adat demi pembangunan",
      "C. Menolak merumuskan kebijakan karena dianggap terlalu kompleks",
      "D. Merumuskan kebijakan tanpa melibatkan masyarakat adat",
      "E. Membiarkan konflik berlangsung tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan mampu merumuskan kebijakan yang seimbang. Mempelajari praktik terbaik, berdialog, dan merumuskan kebijakan seimbang menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menulis artikel tentang potensi wisata budaya di daerah tugas Anda. Apa yang sebaiknya Anda tonjolkan?",
    options: JSON.stringify([
      "A. Keunikan budaya, nilai sejarah, keindahan alam, dan cerita menarik dari masyarakat lokal",
      "B. Hanya keindahan alam tanpa aspek budaya",
      "C. Membandingkan dengan wisata budaya di daerah lain",
      "D. Menulis tanpa riset lapangan",
      "E. Menulis artikel yang tidak sesuai fakta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Menonjolkan keunikan budaya, nilai sejarah, dan cerita masyarakat menunjukkan pendekatan yang komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada upaya komersialisasi berlebihan terhadap budaya lokal yang dapat mengurangi nilai sakral budaya tersebut. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan pelaku komersialisasi dan tokoh budaya untuk mencari keseimbangan antara pelestarian dan komersialisasi",
      "B. Melarang semua komersialisasi budaya",
      "C. Mengabaikan karena dianggap perkembangan ekonomi",
      "D. Mendukung komersialisasi tanpa batas",
      "E. Melaporkan pelaku komersialisasi sebagai penjahat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu mencari keseimbangan antara pelestarian dan pengembangan ekonomi. Berdiskusi dengan semua pihak untuk mencari keseimbangan menunjukkan kemampuan mediasi.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola program desa wisata yang melibatkan berbagai stakeholder dengan kepentingan yang berbeda. Bagaimana Anda mengelola program ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi kepentingan setiap stakeholder, membangun visi bersama, dan menciptakan mekanisme koordinasi yang efektif",
      "B. Mengabaikan kepentingan stakeholder yang dianggap tidak penting",
      "C. Membiarkan setiap stakeholder bekerja sendiri-sendiri",
      "D. Memaksakan kehendak Anda sebagai pengelola program",
      "E. Menyerahkan pengelolaan sepenuhnya kepada pihak swasta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten dalam mengelola program multi-stakeholder. Mengidentifikasi kepentingan, membangun visi bersama, dan menciptakan mekanisme koordinasi menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mendampingi rombongan tamu dari luar daerah yang ingin mengenal budaya lokal. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyiapkan kunjungan ke situs budaya, memfasilitasi pertemuan dengan tokoh masyarakat, dan memberikan penjelasan yang komprehensif",
      "B. Menyuruh tamu berkeliling sendiri tanpa pendampingan",
      "C. Hanya menunjukkan tempat wisata tanpa konteks budaya",
      "D. Mengabaikan tamu karena sibuk dengan pekerjaan lain",
      "E. Memberikan informasi yang tidak akurat tentang budaya lokal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan kompeten. Menyiapkan kunjungan, memfasilitasi pertemuan, dan memberikan penjelasan menunjukkan profesionalisme dan keramahan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada perbedaan pendapat antara pemerintah daerah dan masyarakat tentang pengelolaan sumber daya alam yang memiliki nilai budaya. Bagaimana Anda menangani situasi ini?",
    options: JSON.stringify([
      "A. Memfasilitasi dialog antara pemerintah daerah dan masyarakat untuk mencari solusi yang menghargai nilai budaya dan kepentingan pembangunan",
      "B. Memihak pemerintah daerah karena merupakan atasan",
      "C. Memihak masyarakat karena dianggap lebih benar",
      "D. Mengabaikan konflik karena dianggap bukan urusan Anda",
      "E. Memaksa salah satu pihak untuk mengalah"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi penengah yang adil. Memfasilitasi dialog untuk mencari solusi yang menghargai kedua belah pihak menunjukkan kemampuan mediasi.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang program pemberdayaan masyarakat berbasis kearifan lokal. Program ini harus sustainable dan dapat direplikasi di daerah lain. Bagaimana Anda merancang program ini?",
    options: JSON.stringify([
      "A. Melakukan analisis kebutuhan, melibatkan masyarakat dalam perancangan, menciptakan model yang adaptif, dan menyusun strategi pendanaan berkelanjutan",
      "B. Menyalin program dari daerah lain tanpa adaptasi",
      "C. Merancang program tanpa melibatkan masyarakat",
      "D. Merancang program yang terlalu idealis tanpa mempertimbangkan keterbatasan",
      "E. Merancang program tanpa strategi pendanaan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Melakukan analisis kebutuhan, melibatkan masyarakat, dan menyusun strategi berkelanjutan menunjukkan pendekatan yang profesional dan partisipatif.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri pertemuan dengan komunitas adat di daerah tugas Anda. Apa persiapan yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mempelajari adat istiadat komunitas, menyiapkan diri dengan pengetahuan yang memadai, dan membawa hadiah atau bingkisan yang sesuai",
      "B. Datang tanpa persiapan",
      "C. Datang dengan membawa barang mahal untuk menarik perhatian",
      "D. Datang dan langsung membahas urusan kerja tanpa basa-basi",
      "E. Mengirimkan wakil tanpa kehadiran langsung"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan berorientasi pelayanan. Mempelajari adat istiadat dan menyiapkan diri menunjukkan penghormatan dan profesionalisme.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada peluang untuk mengembangkan ekonomi kreatif berbasis kearifan lokal di daerah tugas Anda. Bagaimana Anda mengidentifikasi dan mengembangkan peluang tersebut?",
    options: JSON.stringify([
      "A. Melakukan pemetaan potensi, berkolaborasi dengan pelaku ekonomi kreatif lokal, dan menghubungkan dengan program pemerintah yang relevan",
      "B. Menunggu instruksi dari atasan tanpa inisiatif",
      "C. Mengembangkan tanpa melibatkan masyarakat lokal",
      "D. Mengabaikan peluang karena dianggap terlalu berisiko",
      "E. Menyalin model pengembangan dari daerah lain tanpa adaptasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Melakukan pemetaan, berkolaborasi, dan menghubungkan dengan program pemerintah menunjukkan profesionalisme dan kemampuan mengidentifikasi peluang.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyelesaikan sengketa tanah adat antara dua kampung yang klaimnya tumpang tindih. Kasus ini sudah berlangsung puluhan tahun. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Mempelajari dokumen sejarah, memfasilitasi dialog antara kedua kampung, melibatkan tokoh adat netral, dan mencari solusi yang adil bagi kedua belah pihak",
      "B. Memutuskan sepihak berdasarkan data administratif saja",
      "C. Mengabaikan karena dianggap terlalu rumit",
      "D. Memihak salah satu kampung",
      "E. Membiarkan konflik berlanjut tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan mampu menyelesaikan konflik yang kompleks. Mempelajari sejarah, memfasilitasi dialog, dan mencari solusi adil menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membuat laporan tentang kondisi sosial budaya masyarakat di daerah tugas Anda. Apa yang sebaiknya Anda sertakan dalam laporan?",
    options: JSON.stringify([
      "A. Data demografis, kondisi budaya, potensi lokal, tantangan, dan rekomendasi pengembangan",
      "B. Hanya data numerik tanpa analisis",
      "C. Pendapat pribadi tanpa data pendukung",
      "D. Data dari daerah lain untuk perbandingan",
      "E. Laporan yang terlalu teknis tanpa bahasa yang mudah dipahami"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dalam penyusunan laporan. Menyertakan data demografis, kondisi budaya, potensi, tantangan, dan rekomendasi menunjukkan pendekatan yang komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada potensi konflik sosial di daerah tugas Anda terkait pembagian hasil sumber daya alam. Bagaimana Anda sebagai ASN ikut mencegah konflik tersebut?",
    options: JSON.stringify([
      "A. Memahami akar masalah, memfasilitasi dialog antar pihak, dan mengusulkan mekanisme pembagian yang adil dan transparan",
      "B. Mengabaikan potensi konflik karena belum terjadi",
      "C. Memihak salah satu pihak",
      "D. Melarang diskusi tentang pembagian hasil",
      "E. Menunggu konflik terjadi baru bertindak"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dalam pencegahan konflik. Memahami akar masalah, memfasilitasi dialog, dan mengusulkan mekanisme adil menunjukkan profesionalisme dan kepedulian sosial.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola anggaran program pelestarian budaya yang terbatas. Ada banyak kebutuhan yang harus dipenuhi. Bagaimana Anda memprioritaskan?",
    options: JSON.stringify([
      "A. Melakukan analisis dampak, memprioritaskan berdasarkan urgensi dan dampak, serta melibatkan masyarakat dalam pengambilan keputusan",
      "B. Membagi anggaran secara merata tanpa pertimbangan",
      "C. Menggunakan seluruh anggaran untuk satu program besar",
      "D. Menunda semua program karena dianggap tidak cukup anggaran",
      "E. Meminta tambahan anggaran tanpa justifikasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dalam pengelolaan sumber daya. Melakukan analisis dampak, memprioritaskan, dan melibatkan masyarakat menunjukkan profesionalisme dan akuntabilitas.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyosialisasikan program pelestarian budaya kepada masyarakat. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan bahasa yang mudah dipahami, memberikan contoh nyata, dan melibatkan tokoh masyarakat dalam sosialisasi",
      "B. Membagikan brosur tanpa penjelasan",
      "C. Menggunakan bahasa teknis yang sulit dipahami",
      "D. Melaksanakan sosialisasi tanpa persiapan",
      "E. Mengabaikan sosialisasi dan hanya mengandalkan media"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan kompeten. Menggunakan bahasa mudah dipahami, memberikan contoh, dan melibatkan tokoh masyarakat menunjukkan pendekatan yang efektif.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada pergeseran nilai di masyarakat akibat urbanisasi. Nilai-nilai gotong royong mulai berkurang. Bagaimana Anda sebagai ASN ikut memperkuat nilai gotong royong?",
    options: JSON.stringify([
      "A. Menginisiasi kegiatan gotong royong di lingkungan kerja, melibatkan masyarakat, dan memberikan apresiasi terhadap praktik gotong royong",
      "B. Mengabaikan pergeseran nilai karena dianggap wajar",
      "C. Memaksa masyarakat untuk kembali ke nilai lama",
      "D. Melarang urbanisasi",
      "E. Menyalahkan pemerintah atas pergeseran nilai"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan proaktif dalam memperkuat nilai sosial. Menginisiasi kegiatan, melibatkan masyarakat, dan memberikan apresiasi menunjukkan pendekatan yang positif.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Sosial Budaya",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang kebijakan yang mengakomodasi keberagaman budaya dalam pelayanan publik. Kebijakan ini harus efektif dan tidak diskriminatif. Bagaimana Anda merancang kebijakan ini?",
    options: JSON.stringify([
      "A. Melakukan kajian komprehensif, berdialog dengan kelompok minoritas, merancang kebijakan inklusif, dan memastikan mekanisme pengawasan",
      "B. Merancang kebijakan berdasarkan budaya mayoritas",
      "C. Menyalin kebijakan dari daerah lain tanpa adaptasi",
      "D. Merancang kebijakan tanpa melibatkan kelompok minoritas",
      "E. Merancang kebijakan yang terlalu idealis tanpa pertimbangan implementasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Melakukan kajian, berdialog, merancang kebijakan inklusif, dan memastikan pengawasan menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Akuntabel"
  },

  // ============================================================
  // 3. JEJARING KERJA (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk berkoordinasi dengan instansi lain dalam pelaksanaan program bersama. Apa langkah pertama yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mengidentifikasi instansi terkait, memahami peran masing-masing, dan mengatur jadwal koordinasi",
      "B. Langsung menjalankan program tanpa koordinasi",
      "C. Menunggu instansi lain yang menghubungi Anda",
      "D. Menyuruh bawahan yang mengurus koordinasi",
      "E. Mengabaikan tugas karena dianggap ribet"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Mengidentifikasi instansi terkait, memahami peran, dan mengatur jadwal menunjukkan pendekatan yang terstruktur dan profesional.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Rekan kerja dari instansi lain mengirim email yang meminta data untuk program bersama. Namun, data tersebut belum tersedia. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Membalas email dengan jujur tentang ketersediaan data, memberikan estimasi waktu, dan menawarkan data alternatif jika ada",
      "B. Mengabaikan email tersebut",
      "C. Membalas email dengan informasi yang tidak akurat",
      "D. Meminta rekan kerja menunggu tanpa batas waktu",
      "E. Menyuruh rekan kerja mencari data sendiri"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kolaboratif. Membalas dengan jujur, memberikan estimasi, dan menawarkan alternatif menunjukkan profesionalisme dan komitmen pada kerja sama.",
    explanationSource: "Core values ASN: Akuntabel, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda ditugaskan menjadi koordinator program yang melibatkan 5 instansi berbeda. Setiap instansi memiliki prioritas yang berbeda. Bagaimana Anda mengkoordinasikan program ini?",
    options: JSON.stringify([
      "A. Memahami prioritas setiap instansi, mencari titik temu, dan menyusun rencana kerja yang mengakomodasi kepentingan bersama",
      "B. Memaksakan jadwal Anda kepada semua instansi",
      "C. Membiarkan setiap instansi bekerja sendiri-sendiri",
      "D. Meminta atasan yang mengkoordinasi",
      "E. Mengabaikan perbedaan prioritas dan menjalankan program sesuai keinginan Anda"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten dalam koordinasi multi-instansi. Memahami prioritas, mencari titik temu, dan menyusun rencana kerja menunjukkan kemampuan manajemen dan diplomasi.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa rekan kerja dari instansi lain sering terlambat memberikan data yang dibutuhkan untuk program bersama. Hal ini mengganggu progres kerja Anda. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan rekan kerja untuk memahami kendala, menawarkan bantuan, dan menyepakati timeline yang realistis",
      "B. Melaporkan rekan kerja ke atasan tanpa berdiskusi",
      "C. Mengabaikan keterlambatan",
      "D. Meminta rekan kerja diganti",
      "E. Mengambil alih pekerjaan rekan kerja tanpa izin"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan harmonis. Berdiskusi untuk memahami kendala, menawarkan bantuan, dan menyepakati timeline menunjukkan sikap yang konstruktif dan profesional.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi penghubung antara instansi pusat dan daerah dalam program nasional. Daerah memiliki kebutuhan yang berbeda dengan kebijakan pusat. Bagaimana Anda menjembatani perbedaan ini?",
    options: JSON.stringify([
      "A. Memahami kebijakan pusat dan kebutuhan daerah, menyampaikan aspirasi daerah ke pusat, dan mencari solusi yang dapat diterima kedua belah pihak",
      "B. Hanya menyampaikan instruksi pusat tanpa mempertimbangkan kebutuhan daerah",
      "C. Hanya fokus pada aspirasi daerah tanpa mempertimbangkan kebijakan pusat",
      "D. Membiarkan konflik berlangsung tanpa intervensi",
      "E. Memihak salah satu pihak"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi jembatan antara pusat dan daerah. Memahami kedua perspektif, menyampaikan aspirasi, dan mencari solusi menunjukkan kemampuan diplomasi dan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada instansi lain yang menjalankan program serupa dengan program Anda. Ada potensi duplikasi yang dapat menghabiskan anggaran. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Menginisiasi pertemuan untuk mengoordinasikan program, mengidentifikasi potensi sinergi, dan mengusulkan integrasi program",
      "B. Mengabaikan potensi duplikasi",
      "C. Bersaing dengan instansi tersebut untuk mendapatkan anggaran lebih",
      "D. Melaporkan instansi tersebut ke atasan",
      "E. Menghentikan program Anda karena ada yang lebih dulu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan akuntabel. Menginisiasi pertemuan, mengidentifikasi sinergi, dan mengusulkan integrasi menunjukkan profesionalisme dan pengelolaan anggaran yang bertanggung jawab.",
    explanationSource: "Core values ASN: Kolaboratif, Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri rapat koordinasi dengan instansi terkait. Apa persiapan yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mempersiapkan data dan materi yang relevan, memahami agenda rapat, dan menyusun poin-poin yang akan disampaikan",
      "B. Datang tanpa persiapan",
      "C. Datang hanya untuk menandatangani daftar hadir",
      "D. Mengirimkan wakil tanpa koordinasi",
      "E. Datang terlambat tanpa pemberitahuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Mempersiapkan data, memahami agenda, dan menyusun poin-poin menunjukkan dedikasi dan profesionalisme dalam rapat koordinasi.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda bekerja sama dengan LSM dalam program pemberdayaan masyarakat. LSM tersebut memiliki pendekatan yang berbeda dengan instansi Anda. Bagaimana Anda menjalin kerja sama yang efektif?",
    options: JSON.stringify([
      "A. Menghargai pendekatan LSM, mencari kesamaan tujuan, dan menyepakati mekanisme kerja sama yang saling menguntungkan",
      "B. Memaksa LSM mengikuti pendekatan instansi Anda",
      "C. Mengabaikan pendekatan LSM",
      "D. Hanya bekerja sama dalam hal yang sudah disepakati tanpa fleksibilitas",
      "E. Menghentikan kerja sama karena perbedaan pendekatan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan harmonis. Menghargai pendekatan LSM, mencari kesamaan tujuan, dan menyepakati mekanisme menunjukkan profesionalisme dan kemampuan bekerja dengan berbagai mitra.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik antara dua instansi yang bekerja sama dalam program yang Anda koordinasi. Konflik tersebut mengancam keberhasilan program. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Memahami akar konflik, memfasilitasi dialog antara kedua instansi, dan mencari solusi yang menguntungkan kedua belah pihak",
      "B. Memihak salah satu instansi",
      "C. Mengabaikan konflik",
      "D. Melaporkan konflik ke atasan tanpa berusaha menyelesaikan",
      "E. Membatalkan program karena konflik"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus mampu menjadi mediator dalam konflik antar instansi. Memahami akar konflik, memfasilitasi dialog, dan mencari solusi menunjukkan kemampuan resolusi konflik dan kepemimpinan.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengirimkan laporan perkembangan program kepada instansi mitra. Apa yang sebaiknya Anda sertakan dalam laporan?",
    options: JSON.stringify([
      "A. Pencapaian, kendala, rencana selanjutnya, dan data pendukung yang akurat",
      "B. Hanya pencapaian tanpa kendala",
      "C. Laporan tanpa data pendukung",
      "D. Laporan yang berlebihan tanpa substansi",
      "E. Laporan yang tidak sesuai dengan format yang diminta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam pelaporan. Menyertakan pencapaian, kendala, rencana, dan data pendukung menunjukkan transparansi dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun jaringan kerja sama baru dengan instansi yang belum pernah bekerja sama sebelumnya. Bagaimana Anda memulai?",
    options: JSON.stringify([
      "A. Mengidentifikasi potensi kerja sama, menginisiasi pertemuan awal, dan menyusun proposal kerja sama yang saling menguntungkan",
      "B. Menunggu instansi lain yang menghubungi",
      "C. Langsung mengirim surat kerja sama tanpa pendahuluan",
      "D. Mengabaikan tugas karena tidak kenal dengan instansi tersebut",
      "E. Meminta atasan yang mengurus"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dan kolaboratif. Mengidentifikasi potensi, menginisiasi pertemuan, dan menyusun proposal menunjukkan inisiatif dan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada instansi yang tidak kooperatif dalam program bersama. Instansi tersebut sering tidak hadir dalam rapat dan tidak memberikan data yang diminta. Bagaimana Anda mengatasi?",
    options: JSON.stringify([
      "A. Menghubungi instansi untuk memahami kendala, menyampaikan pentingnya kerja sama, dan mencari solusi bersama",
      "B. Melaporkan instansi tersebut ke atasan",
      "C. Mengabaikan ketidakooperatifan tersebut",
      "D. Menghentikan kerja sama dengan instansi tersebut",
      "E. Memaksa instansi tersebut untuk kooperatif"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten dalam mengatasi tantangan kerja sama. Menghubungi untuk memahami kendala, menyampaikan pentingnya kerja sama, dan mencari solusi menunjukkan pendekatan yang konstruktif.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk berbagi informasi tentang program Anda kepada publik. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyusun informasi yang akurat, jelas, dan mudah dipahami, serta menggunakan saluran komunikasi yang tepat",
      "B. Menyembunyikan informasi karena dianggap rahasia",
      "C. Memberikan informasi yang berlebihan tanpa fokus",
      "D. Mengabaikan tugas karena tidak ada yang bertanya",
      "E. Memberikan informasi yang tidak akurat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan akuntabel. Menyusun informasi akurat dan menggunakan saluran yang tepat menunjukkan transparansi dan profesionalisme.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda bekerja dalam tim gabungan dari beberapa instansi. Ada perbedaan pendapat tentang strategi pelaksanaan program. Bagaimana Anda menangani perbedaan ini?",
    options: JSON.stringify([
      "A. Mendengarkan semua pendapat, mencari data pendukung, dan memfasilitasi diskusi untuk mencapai kesepakatan",
      "B. Bersikeras bahwa pendapat Anda adalah yang terbaik",
      "C. Mengabaikan perbedaan dan memaksakan keputusan",
      "D. Meminta atasan yang memutuskan",
      "E. Tidak menyuarakan pendapat Anda"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Mendengarkan semua pendapat, mencari data, dan memfasilitasi diskusi menunjukkan kemampuan bekerja dalam tim dan pengambilan keputusan yang partisipatif.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola proyek yang melibatkan stakeholder dari sektor pemerintah, swasta, dan masyarakat sipil. Setiap sektor memiliki kepentingan yang berbeda. Bagaimana Anda mengelola proyek ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi kepentingan setiap sektor, membangun visi bersama, dan menciptakan mekanisme tata kelola yang inklusif",
      "B. Mengabaikan kepentingan sektor yang dianggap tidak penting",
      "C. Membiarkan setiap sektor bekerja sendiri",
      "D. Memaksakan kehendak pemerintah",
      "E. Menyerahkan pengelolaan kepada konsultan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten dalam mengelola multi-stakeholder. Mengidentifikasi kepentingan, membangun visi bersama, dan menciptakan mekanisme inklusif menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi perwakilan instansi Anda dalam pertemuan dengan komunitas. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Berpenampilan profesional, mendengarkan aspirasi komunitas, dan menyampaikan informasi instansi dengan jelas",
      "B. Berbicara lebih banyak daripada mendengarkan",
      "C. Mengabaikan aspirasi komunitas",
      "D. Berpenampilan tidak profesional",
      "E. Tidak membawa data atau informasi yang diperlukan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan profesional. Berpenampilan profesional, mendengarkan, dan menyampaikan informasi jelas menunjukkan representasi yang baik.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada peluang pendanaan dari lembaga internasional untuk program di daerah Anda. Bagaimana Anda memanfaatkan peluang ini?",
    options: JSON.stringify([
      "A. Mempelajari persyaratan pendanaan, berkoordinasi dengan instansi terkait, dan menyusun proposal yang memenuhi kriteria",
      "B. Mengabaikan peluang karena dianggap terlalu sulit",
      "C. Meminta lembaga internasional yang mengurus",
      "D. Menyusun proposal tanpa koordinasi",
      "E. Menunggu lembaga lain yang mengajukan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dan kompeten. Mempelajari persyaratan, berkoordinasi, dan menyusun proposal menunjukkan inisiatif dan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik kepentingan antara instansi Anda dan instansi mitra dalam pengelolaan anggaran program bersama. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Menganalisis konflik kepentingan, menyampaikan secara transparan kepada pihak terkait, dan mencari solusi yang akuntabel",
      "B. Menyembunyikan konflik kepentingan",
      "C. Memihak instansi Anda",
      "D. Mengabaikan konflik kepentingan",
      "E. Melaporkan instansi mitra"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan profesional. Menganalisis, menyampaikan transparan, dan mencari solusi akuntabel menunjukkan integritas dan komitmen pada tata kelola yang baik.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menindaklanjuti hasil rapat koordinasi dengan instansi mitra. Apa langkah pertama yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mendokumentasikan hasil rapat, mengidentifikasi action items, dan menyampaikan kepada pihak terkait",
      "B. Mengabaikan hasil rapat",
      "C. Menunggu instansi mitra yang menindaklanjuti",
      "D. Menyuruh bawahan yang menindaklanjuti tanpa koordinasi",
      "E. Melupakan isi rapat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Mendokumentasikan, mengidentifikasi action items, dan menyampaikan menunjukkan profesionalisme dan komitmen pada tindak lanjut.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memfasilitasi pertemuan antara masyarakat dan instansi pemerintah. Masyarakat memiliki keluhan yang kompleks. Bagaimana Anda memfasilitasi pertemuan ini?",
    options: JSON.stringify([
      "A. Menyiapkan agenda yang jelas, memberikan kesempatan semua pihak untuk berbicara, dan memastikan keluhan tercatat dan ditindaklanjuti",
      "B. Membatasi waktu berbicara masyarakat",
      "C. Memihak instansi pemerintah",
      "D. Mengabaikan keluhan masyarakat",
      "E. Membiarkan pertemuan tanpa arah"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan berorientasi pelayanan. Menyiapkan agenda, memberikan kesempatan, dan memastikan tindak lanjut menunjukkan profesionalisme dan komitmen pada aspirasi masyarakat.",
    explanationSource: "Core values ASN: Kolaboratif, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang menyalahgunakan wewenang dalam kerja sama dengan instansi lain. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengumpulkan bukti, melaporkan ke atasan atau pihak berwenang, dan menjaga kerahasiaan informasi",
      "B. Mengabaikan karena dianggap urusan pribadi",
      "C. Ikut menyalahgunakan wewenang",
      "D. Memberi tahu rekan kerja yang bersangkutan dan meminta bagian",
      "E. Menyimpan informasi sebagai alat pemerasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Mengumpulkan bukti, melaporkan, dan menjaga kerahasiaan menunjukkan komitmen pada anti-korupsi dan akuntabilitas.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjalin komunikasi yang baik dengan media. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memberikan informasi yang akurat dan tepat waktu, serta menjaga profesionalisme dalam berkomunikasi dengan media",
      "B. Menghindari media",
      "C. Memberikan informasi yang tidak akurat",
      "D. Menjadi defensif saat ditanya media",
      "E. Memberikan informasi rahasia kepada media"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berorientasi pelayanan. Memberikan informasi akurat dan menjaga profesionalisme menunjukkan transparansi dan komitmen pada informasi publik.",
    explanationSource: "Core values ASN: Akuntabel, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengoordinasikan bencana alam dengan berbagai instansi dan lembaga. Situasinya mendesak. Bagaimana Anda mengkoordinasikan respons?",
    options: JSON.stringify([
      "A. Segera mengaktifkan jaringan komunikasi, mengkoordinasikan sumber daya, dan memastikan distribusi bantuan yang efektif",
      "B. Menunggu instruksi dari atasan",
      "C. Bekerja sendiri tanpa koordinasi",
      "D. Mengabaikan situasi darurat",
      "E. Panik dan tidak bisa mengambil keputusan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif dalam situasi darurat. Mengaktifkan jaringan, mengkoordinasikan sumber daya, dan memastikan distribusi efektif menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang sistem kerja sama antar instansi yang berkelanjutan. Sistem ini harus dapat mengakomodasi perubahan kebijakan dan kebutuhan. Bagaimana Anda merancang sistem ini?",
    options: JSON.stringify([
      "A. Melakukan kajian kebutuhan, merancang mekanisme fleksibel, menyusun SOP yang adaptif, dan menciptakan sistem monitoring dan evaluasi",
      "B. Merancang sistem yang kaku tanpa fleksibilitas",
      "C. Menyalin sistem dari instansi lain",
      "D. Merancang sistem tanpa melibatkan stakeholder",
      "E. Merancang sistem yang terlalu kompleks"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Melakukan kajian, merancang mekanisme fleksibel, dan menciptakan sistem monitoring menunjukkan profesionalisme dan pemikiran strategis.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk berpartisipasi dalam kegiatan sosial yang melibatkan masyarakat. Apa yang sebaiknya Anda tunjukkan?",
    options: JSON.stringify([
      "A. Partisipasi aktif, sikap ramah, dan kemampuan berkomunikasi dengan berbagai kalangan",
      "B. Partisipasi pasif tanpa inisiatif",
      "C. Hanya hadir tanpa berkontribusi",
      "D. Menghindari interaksi dengan masyarakat",
      "E. Berperilaku sombong"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Partisipasi aktif, sikap ramah, dan kemampuan berkomunikasi menunjukkan profesionalisme dan kedekatan dengan masyarakat.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada program di instansi lain yang dapat mendukung program Anda. Bagaimana Anda memanfaatkan peluang ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi kesesuaian program, menginisiasi koordinasi, dan mengusulkan kerja sama yang saling menguntungkan",
      "B. Mengabaikan peluang karena tidak ada koneksi",
      "C. Menunggu instansi lain yang menghubungi",
      "D. Menyalin program tanpa izin",
      "E. Mengabaikan tugas karena dianggap bukan bidang Anda"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dan kolaboratif. Mengidentifikasi kesesuaian, menginisiasi koordinasi, dan mengusulkan kerja sama menunjukkan inisiatif dan profesionalisme.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada potensi konflik antara instansi Anda dan lembaga donor terkait penggunaan dana hibah. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Menganalisis perjanjian, berdialog dengan lembaga donor, dan mencari solusi yang sesuai dengan ketentuan dan kebutuhan program",
      "B. Mengabaikan konflik",
      "C. Menyalahkan lembaga donor",
      "D. Menyembunyikan masalah dari atasan",
      "E. Menghentikan program tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Menganalisis perjanjian, berdialog, dan mencari solusi menunjukkan profesionalisme dan komitmen pada pengelolaan dana yang bertanggung jawab.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memberikan feedback kepada instansi mitra tentang program bersama. Apa yang sebaiknya Anda sampaikan?",
    options: JSON.stringify([
      "A. Feedback yang konstruktif, spesifik, dan disertai rekomendasi perbaikan",
      "B. Feedback negatif tanpa solusi",
      "C. Tidak memberikan feedback",
      "D. Feedback yang berlebihan tanpa substansi",
      "E. Feedback yang menyinggung pihak lain"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus profesional dan kolaboratif. Memberikan feedback konstruktif, spesifik, dan disertai rekomendasi menunjukkan komitmen pada perbaikan bersama.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun kerja sama dengan sektor swasta untuk mendukung program pemerintah. Bagaimana Anda memulai?",
    options: JSON.stringify([
      "A. Mengidentifikasi potensi sinergi, menyusun proposal kerja sama yang menguntungkan kedua belah pihak, dan menginisiasi pertemuan",
      "B. Menunggu sektor swasta yang menghubungi",
      "C. Memaksa sektor swasta untuk berpartisipasi",
      "D. Mengabaikan potensi kerja sama",
      "E. Menyusun proposal tanpa mempertimbangkan kepentingan sektor swasta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus proaktif dan kolaboratif. Mengidentifikasi sinergi, menyusun proposal menguntungkan, dan menginisiasi pertemuan menunjukkan profesionalisme dan kemampuan membangun kemitraan.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada perubahan kebijakan yang mempengaruhi program kerja sama dengan instansi lain. Perubahan ini membutuhkan penyesuaian segera. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Menganalisis dampak perubahan, berkoordinasi dengan instansi mitra, dan menyusun rencana penyesuaian yang efektif",
      "B. Mengabaikan perubahan kebijakan",
      "C. Menunggu instruksi dari atasan",
      "D. Menghentikan program tanpa solusi",
      "E. Menyalahkan kebijakan baru"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Menganalisis dampak, berkoordinasi, dan menyusun rencana penyesuaian menunjukkan profesionalisme dan kemampuan respons terhadap perubahan.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi narasumber dalam workshop dengan instansi lain. Apa persiapan yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyiapkan materi yang relevan, berlatih penyampaian, dan mempersiapkan diri untuk sesi tanya jawab",
      "B. Datang tanpa persiapan",
      "C. Membacakan materi tanpa penjelasan",
      "D. Mengirimkan wakil tanpa koordinasi",
      "E. Datang terlambat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Menyiapkan materi, berlatih, dan mempersiapkan diri menunjukkan dedikasi dan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda bekerja dalam tim yang terdiri dari orang-orang dengan keahlian berbeda. Bagaimana Anda memanfaatkan keahlian tim secara optimal?",
    options: JSON.stringify([
      "A. Mengidentifikasi keahlian masing-masing, mendistribusikan tugas sesuai kompetensi, dan memfasilitasi kolaborasi",
      "B. Melakukan semua pekerjaan sendiri",
      "C. Membiarkan setiap anggota bekerja tanpa koordinasi",
      "D. Memberikan tugas yang sama kepada semua anggota",
      "E. Mengabaikan keahlian anggota tim"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Mengidentifikasi keahlian, mendistribusikan tugas sesuai kompetensi, dan memfasilitasi kolaborasi menunjukkan kemampuan manajemen tim yang efektif.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang strategi komunikasi antar instansi yang efektif. Setiap instansi memiliki budaya komunikasi yang berbeda. Bagaimana Anda merancang strategi ini?",
    options: JSON.stringify([
      "A. Menganalisis budaya komunikasi setiap instansi, merancang strategi yang fleksibel, dan menciptakan mekanisme umpan balik",
      "B. Menerapkan satu strategi komunikasi untuk semua instansi",
      "C. Mengabaikan perbedaan budaya komunikasi",
      "D. Menggunakan hanya saluran komunikasi formal",
      "E. Menyerahkan sepenuhnya kepada tim humas"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Menganalisis budaya komunikasi, merancang strategi fleksibel, dan menciptakan mekanisme umpan balik menunjukkan profesionalisme dan pemikiran strategis.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },

  // ============================================================
  // 4. TEKNOLOGI INFORMASI (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menggunakan sistem informasi baru dalam pelayanan publik. Anda belum familiar dengan sistem tersebut. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mempelajari panduan penggunaan, mengikuti pelatihan jika tersedia, dan bertanya kepada rekan yang sudah mahir",
      "B. Mengabaikan sistem baru dan tetap menggunakan cara lama",
      "C. Menyerahkan tugas kepada rekan kerja yang lebih paham",
      "D. Menggunakan sistem tanpa persiapan dan berharap bisa sendiri",
      "E. Mengeluh tentang sistem baru kepada atasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari panduan, mengikuti pelatihan, dan bertanya menunjukkan kemauan belajar dan profesionalisme dalam menghadapi teknologi baru.",
    explanationSource: "Core values ASN: Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Warga mengeluh bahwa layanan online diinstansi Anda sulit diakses. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mencoba mengakses layanan tersebut, mengidentifikasi masalah, dan menyampaikan ke tim IT untuk perbaikan",
      "B. Mengabaikan keluhan warga",
      "C. Menyuruh warga menggunakan cara manual",
      "D. Menyalahkan warga yang tidak bisa menggunakan teknologi",
      "E. Menjanjikan perbaikan tanpa koordinasi dengan tim IT"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan proaktif. Mencoba mengakses, mengidentifikasi masalah, dan menyampaikan ke tim IT menunjukkan komitmen pada perbaikan layanan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada aplikasi yang dapat meningkatkan efisiensi kerja di instansi Anda. Namun, beberapa rekan kerja enggan menggunakannya karena tidak terbiasa dengan teknologi. Bagaimana Anda mengatasinya?",
    options: JSON.stringify([
      "A. Memberikan demonstrasi manfaat aplikasi, menawarkan pelatihan, dan membantu rekan kerja dalam proses transisi",
      "B. Memaksa semua rekan kerja menggunakan aplikasi tanpa penjelasan",
      "C. Mengabaikan aplikasi tersebut karena ada rekan yang enggan",
      "D. Melaporkan rekan kerja yang enggan ke atasan",
      "E. Menggunakan aplikasi sendiri tanpa melibatkan rekan kerja"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Memberikan demonstrasi, menawarkan pelatihan, dan membantu transisi menunjukkan kemampuan memimpin perubahan dan membantu rekan.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola data sensitif warga dalam sistem digital. Bagaimana Anda memastikan keamanan data tersebut?",
    options: JSON.stringify([
      "A. Menggunakan kata sandi yang kuat, tidak membagikan akses kepada yang tidak berwenang, dan mengikuti protokol keamanan data yang berlaku",
      "B. Menyimpan data dalam flashdisk pribadi untuk kemudahan akses",
      "C. Membagikan kata sandi kepada semua rekan kerja",
      "D. Mengabaikan protokol keamanan karena dianggap ribet",
      "E. Menyimpan data dalam format yang tidak terenkripsi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam pengelolaan data. Menggunakan kata sandi kuat, tidak membagikan akses, dan mengikuti protokol keamanan menunjukkan komitmen pada perlindungan data.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada kebocoran data warga dari sistem informasi instansi Anda. Situasinya mendesak dan dapat merusak kepercayaan publik. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Segera melaporkan ke atasan dan tim keamanan siber, mengidentifikasi cakupan kebocoran, dan mengambil langkah mitigasi",
      "B. Menyembunyikan informasi kebocoran data",
      "C. Menyalahkan pihak lain tanpa bukti",
      "D. Mengabaikan kebocoran karena dianggap sudah terjadi",
      "E. Memberikan komentar kepada media tanpa izin atasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam situasi darurat. Segera melaporkan, mengidentifikasi cakupan, dan mengambil langkah mitigasi menunjukkan profesionalisme dan tanggung jawab.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membuat presentasi digital tentang program kerja. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Membuat presentasi yang informatif, menggunakan desain yang profesional, dan memastikan konten mudah dipahami",
      "B. Membuat presentasi yang terlalu penuh dengan animasi",
      "C. Hanya menyalin teks tanpa visualisasi",
      "D. Mengabaikan kualitas visual karena yang penting isi",
      "E. Menggunakan gambar tanpa izin cipta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Membuat presentasi informatif, desain profesional, dan konten mudah dipahami menunjukkan dedikasi pada kualitas komunikasi.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengadakan rapat virtual dengan instansi lain yang berada di daerah berbeda. Apa persiapan yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menguji koneksi internet, memastikan perangkat berfungsi, menyiapkan materi rapat, dan mengirimkan undangan dengan tautan yang jelas",
      "B. Mengadakan rapat tanpa persiapan",
      "C. Meminta rekan kerja yang mengurus teknis",
      "D. Mengabaikan kemungkinan masalah teknis",
      "E. Menunggu masalah teknis terjadi baru mencari solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Menguji koneksi, memastikan perangkat, menyiapkan materi, dan mengirimkan undangan menunjukkan profesionalisme dalam rapat virtual.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang menggunakan komputer kantor untuk keperluan pribadi yang berlebihan. Hal ini mengganggu kinerja sistem. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengingatkan rekan kerja tentang kebijakan penggunaan aset negara dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut menggunakan komputer untuk keperluan pribadi",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Mematikan komputer rekan kerja tanpa izin",
      "E. Melaporkan langsung ke atasan tanpa berdiskusi dengan rekan kerja"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan profesional. Mengingatkan tentang kebijakan penggunaan aset negara dan melaporkan jika tidak ada perubahan menunjukkan komitmen pada akuntabilitas.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengarsipkan dokumen penting secara digital. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Memastikan dokumen terenkripsi, membuat backup, dan mengorganisir dengan sistem penamaan yang jelas",
      "B. Menyimpan dokumen tanpa backup",
      "C. Menggunakan nama file yang tidak deskriptif",
      "D. Menyimpan dokumen dalam satu folder tanpa pengorganisasian",
      "E. Mengabaikan keamanan dokumen"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel dalam pengelolaan dokumen digital. Memastikan enkripsi, membuat backup, dan mengorganisir dengan jelas menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mensosialisasikan penggunaan aplikasi layanan publik kepada warga yang mayoritas lansia. Bagaimana Anda mensosialisasikan?",
    options: JSON.stringify([
      "A. Menggunakan bahasa sederhana, memberikan panduan langkah demi langkah, dan menawarkan bantuan langsung",
      "B. Hanya memberikan brosur tanpa penjelasan",
      "C. Menggunakan istilah teknis yang sulit dipahami",
      "D. Mengabaikan lansia karena dianggap tidak bisa teknologi",
      "E. Menyuruh warga muda yang mendampingi lansia"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan adaptif. Menggunakan bahasa sederhana, memberikan panduan, dan menawarkan bantuan menunjukkan inklusivitas dan kesabaran.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada penipuan online yang menggunakan nama instansi Anda untuk menipu warga. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Segera mengeluarkan peringatan resmi, melaporkan ke pihak berwenang, dan memberikan informasi kepada warga tentang cara mengenali penipuan",
      "B. Mengabaikan karena dianggap urusan pribadi warga",
      "C. Menyalahkan warga yang tertipu",
      "D. Menyembunyikan informasi agar tidak menimbulkan kepanikan",
      "E. Menunggu laporan dari warga baru bertindak"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berorientasi pelayanan. Segera mengeluarkan peringatan, melaporkan, dan memberikan informasi menunjukkan perlindungan terhadap warga.",
    explanationSource: "Core values ASN: Akuntabel, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengirim email resmi kepada instansi lain. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Menggunakan bahasa formal dan sopan, memastikan lampiran lengkap, dan mengecek alamat email sebelum mengirim",
      "B. Menggunakan bahasa informal seperti chatting",
      "C. Mengirim email tanpa mengecek isi",
      "D. Mengabaikan tata bahasa karena yang penting isi",
      "E. Mengirim email tanpa subjek yang jelas"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional dalam komunikasi digital. Menggunakan bahasa formal, memastikan lampiran, dan mengecek alamat menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola media sosial resmi instansi Anda. Ada komentar negatif dari warga tentang pelayanan. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Merespons dengan profesional, mencatat keluhan, dan menyampaikan ke pihak terkait untuk ditindaklanjuti",
      "B. Menghapus komentar negatif tersebut",
      "C. Membalas komentar dengan nada defensif",
      "D. Mengabaikan komentar negatif",
      "E. Membalas komentar dengan informasi yang tidak akurat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berorientasi pelayanan. Merespons profesional, mencatat keluhan, dan menyampaikan ke pihak terkait menunjukkan transparansi dan komitmen pada perbaikan.",
    explanationSource: "Core values ASN: Akuntabel, Berorientasi Pelayanan, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengimplementasikan sistem e-government yang mengintegrasikan berbagai layanan. Ada resistensi dari beberapa staf karena takut kehilangan pekerjaan. Bagaimana Anda mengatasinya?",
    options: JSON.stringify([
      "A. Menjelaskan manfaat sistem, menawarkan pelatihan, dan memastikan tidak ada staf yang dirugikan",
      "B. Mengabaikan resistensi dan mengimplementasikan paksa",
      "C. Membatalkan implementasi karena ada resistensi",
      "D. Menyalahkan staf yang resisten",
      "E. Menjanjikan hal yang tidak realistis"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Menjelaskan manfaat, menawarkan pelatihan, dan memastikan tidak ada yang dirugai menunjukkan kemampuan manajemen perubahan yang efektif.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menggunakan video conference untuk rapat dengan instansi lain. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menguji perangkat sebelum rapat, memastikan pencahayaan dan suara jelas, dan bergabung tepat waktu",
      "B. Bergabung rapat tanpa persiapan",
      "C. Menyalakan kamera dalam kondisi berantakan",
      "D. Bergabung terlambat tanpa pemberitahuan",
      "E. Mengabaikan aturan etika rapat virtual"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Menguji perangkat, memastikan pencahayaan, dan bergabung tepat waktu menunjukkan dedikasi dan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada staf yang menggunakan media sosial pribadi untuk menyebarkan informasi rahasia instansi. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengingatkan staf tentang kebijakan keamanan informasi dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut menyebarkan informasi rahasia",
      "C. Mengabaikan karena dianggap hak pribadi staf",
      "D. Menyuruh staf menghapus postingan tanpa penjelasan",
      "E. Melaporkan langsung ke atasan tanpa berdiskusi dengan staf"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan profesional. Mengingatkan tentang kebijakan keamanan informasi dan melaporkan jika tidak ada perubahan menunjukkan komitmen pada kerahasiaan.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang sistem informasi yang dapat diakses oleh penyandang disabilitas. Bagaimana Anda memastikan aksesibilitas?",
    options: JSON.stringify([
      "A. Melibatkan penyandang disabilitas dalam pengujian, mengikuti standar aksesibilitas, dan melakukan pengujian dengan pembaca layar",
      "B. Merancang sistem tanpa mempertimbangkan aksesibilitas",
      "C. Menambahkan fitur aksesibilitas sebagai fitur tambahan",
      "D. Mengabaikan kebutuhan penyandang disabilitas",
      "E. Menyalin desain dari situs lain tanpa pengujian"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan kompeten. Melibatkan penyandang disabilitas, mengikuti standar, dan melakukan pengujian menunjukkan komitmen pada inklusivitas.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mencetak dokumen penting untuk rapat. Namun, printer kantor mengalami gangguan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menghubungi tim IT untuk perbaikan, mencari alternatif pencetakan, dan memastikan dokumen siap sebelum rapat",
      "B. Mengabaikan masalah dan datang tanpa dokumen",
      "C. Menyalahkan tim IT atas gangguan printer",
      "D. Meminta rekan kerja yang mencetakkan dokumen tanpa koordinasi",
      "E. Menunda rapat karena printer gangguan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan proaktif. Menghubungi tim IT, mencari alternatif, dan memastikan dokumen siap menunjukkan profesionalisme dan kemampuan memecahkan masalah.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola database warga yang berisi informasi pribadi sensitif. Bagaimana Anda memastikan keamanan data?",
    options: JSON.stringify([
      "A. Menggunakan enkripsi, membatasi akses hanya kepada yang berwenang, dan membuat backup secara berkala",
      "B. Membagikan akses kepada semua staf",
      "C. Menyimpan data tanpa enkripsi",
      "D. Mengabaikan keamanan data karena dianggap tidak penting",
      "E. Menyimpan data dalam perangkat pribadi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten dalam pengelolaan data. Menggunakan enkripsi, membatasi akses, dan membuat backup menunjukkan komitmen pada perlindungan data pribadi.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada serangan siber yang mengancam sistem informasi instansi Anda. Situasinya kritis. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Segera mengaktifkan protokol keamanan siber, melaporkan ke tim keamanan, dan mengambil langkah mitigasi",
      "B. Mengabaikan serangan karena dianggap urusan IT",
      "C. Panik dan tidak bisa mengambil keputusan",
      "D. Menyembunyikan informasi serangan",
      "E. Menyalahkan pihak lain tanpa bukti"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif dalam situasi darurat. Mengaktifkan protokol keamanan, melaporkan, dan mengambil langkah mitigasi menunjukkan profesionalisme dan tanggung jawab.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menggunakan cloud storage untuk menyimpan dokumen kerja. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Memastikan cloud storage memiliki keamanan yang memadai, membuat backup lokal, dan mengatur hak akses dengan bijak",
      "B. Menyimpan semua dokumen tanpa pertimbangan keamanan",
      "C. Mengabaikan kebijakan privasi cloud storage",
      "D. Menyimpan dokumen rahasia dalam cloud yang tidak aman",
      "E. Tidak menggunakan cloud storage karena dianggap berisiko"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel dalam penggunaan teknologi. Memastikan keamanan cloud, membuat backup, dan mengatur hak akses menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengadakan pelatihan digital kepada staf yang kurang melek teknologi. Bagaimana Anda menjalankan pelatihan?",
    options: JSON.stringify([
      "A. Menyusun materi bertahap, menggunakan bahasa sederhana, memberikan praktik langsung, dan menyediakan panduan tertulis",
      "B. Mengadakan pelatihan cepat tanpa mempertimbangkan kemampuan staf",
      "C. Menggunakan istilah teknis yang kompleks",
      "D. Mengabaikan staf yang kesulitan",
      "E. Menyuruh staf belajar sendiri"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Menyusun materi bertahap, menggunakan bahasa sederhana, dan memberikan praktik menunjukkan kemampuan mengajar yang efektif.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang kebijakan penggunaan teknologi informasi di instansi Anda. Kebijakan ini harus fleksibel namun tetap aman. Bagaimana Anda merancangnya?",
    options: JSON.stringify([
      "A. Melakukan kajian kebutuhan, berdiskusi dengan berbagai pihak, merancang kebijakan yang seimbang antara fleksibilitas dan keamanan",
      "B. Menyalin kebijakan dari instansi lain tanpa adaptasi",
      "C. Merancang kebijakan yang terlalu ketat tanpa fleksibilitas",
      "D. Merancang kebijakan tanpa melibatkan stakeholder",
      "E. Mengabaikan aspek keamanan demi fleksibilitas"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan kolaboratif. Melakukan kajian, berdiskusi, dan merancang kebijakan seimbang menunjukkan profesionalisme dan pemikiran strategis.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengirimkan undangan rapat melalui email kepada banyak pihak. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menggunakan fitur BCC atau mailing list untuk menjaga privasi, memastikan informasi rapat lengkap, dan mengecek alamat email",
      "B. Menulis semua alamat email di kolom To sehingga semua orang bisa melihat",
      "C. Mengirim undangan tanpa informasi yang lengkap",
      "D. Mengabaikan tata bahasa dalam undangan",
      "E. Mengirim undangan terlalu sering"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menggunakan fitur BCC atau mailing list, memastikan informasi lengkap, dan mengecek alamat menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada aplikasi yang dapat memudahkan pelayanan publik, tetapi memerlukan integrasi dengan sistem yang sudah ada. Bagaimana Anda melaksanakan integrasi?",
    options: JSON.stringify([
      "A. Menganalisis kompatibilitas sistem, berkoordinasi dengan tim IT, dan melakukan pengujian sebelum implementasi",
      "B. Langsung mengimplementasikan tanpa analisis",
      "C. Mengabaikan integrasi dan menggunakan aplikasi secara terpisah",
      "D. Meminta vendor yang mengurus semuanya",
      "E. Menunda implementasi karena dianggap terlalu rumit"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Menganalisis kompatibilitas, berkoordinasi, dan melakukan pengujian menunjukkan profesionalisme dan pendekatan yang hati-hati.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada staf yang menggunakan keahlian IT untuk keuntungan pribadi dengan menjual data warga. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengumpulkan bukti, melaporkan ke atasan atau pihak berwenang, dan menjaga kerahasiaan informasi",
      "B. Ikut menjual data untuk mendapatkan keuntungan",
      "C. Mengabaikan karena dianggap urusan pribadi staf",
      "D. Meminta bagian dari keuntungan tersebut",
      "E. Menyimpan informasi sebagai alat pemerasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Mengumpulkan bukti, melaporkan, dan menjaga kerahasiaan menunjukkan komitmen pada anti-korupsi dan perlindungan data.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membuat formulir pendaftaran online. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Memastikan formulir mudah diisi, mengumpulkan data yang relevan, dan memiliki keamanan yang memadai",
      "B. Membuat formulir yang terlalu panjang dan rumit",
      "C. Mengumpulkan data yang tidak relevan",
      "D. Mengabaikan keamanan formulir",
      "E. Membuat formulir tanpa validasi input"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Memastikan formulir mudah diisi, data relevan, dan keamanan memadai menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola website instansi yang memuat informasi publik. Bagaimana Anda memastikan website selalu update?",
    options: JSON.stringify([
      "A. Menyusun jadwal update berkala, berkoordinasi dengan bagian terkait, dan memastikan informasi yang dipublikasikan akurat",
      "B. Mengupdate website tanpa jadwal yang jelas",
      "C. Mengabaikan update karena dianggap tidak penting",
      "D. Menyalahkan tim IT jika website tidak update",
      "E. Menunggu warga yang komplain baru update"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menyusun jadwal, berkoordinasi, dan memastikan akurasi informasi menunjukkan profesionalisme dan transparansi.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengimplementasikan artificial intelligence (AI) dalam pelayanan publik. Ada kekhawatiran tentang etika dan bias. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Melakukan kajian etika, melibatkan pakar, memastikan transparansi algoritma, dan mengawasi implementasi secara berkala",
      "B. Mengimplementasikan AI tanpa pertimbangan etika",
      "C. Mengabaikan kekhawatiran etika karena dianggap menghambat inovasi",
      "D. Menolak implementasi AI karena kekhawatiran etika",
      "E. Menyerahkan sepenuhnya kepada vendor tanpa pengawasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Melakukan kajian etika, melibatkan pakar, dan mengawasi implementasi menunjukkan profesionalisme dan tanggung jawab.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menggunakan scanner untuk mendigitalisasi dokumen fisik. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Memastikan kualitas scan jelas, mengorganisir file dengan nama yang deskriptif, dan menyimpan dalam format yang sesuai",
      "B. Scan dengan kualitas rendah agar cepat",
      "C. Menggunakan nama file yang tidak jelas",
      "D. Menyimpan file tanpa pengorganisasian",
      "E. Mengabaikan kualitas scan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel dalam pengelolaan dokumen digital. Memastikan kualitas scan, mengorganisir file, dan menyimpan dengan format sesuai menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengadakan webinar tentang program pemerintah. Peserta dari berbagai daerah. Bagaimana Anda memastikan webinar berjalan lancar?",
    options: JSON.stringify([
      "A. Menguji platform sebelum acara, menyiapkan materi presentasi, mengundang moderator, dan memiliki rencana cadangan",
      "B. Mengadakan webinar tanpa persiapan",
      "C. Mengabaikan kemungkinan masalah teknis",
      "D. Tidak memiliki moderator atau pengatur jalannya acara",
      "E. Mengabaikan umpan balik peserta setelah acara"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Menguji platform, menyiapkan materi, dan memiliki rencana cadangan menunjukkan dedikasi dan kemampuan mengelola acara virtual.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada kesenjangan digital di daerah tugas Anda. Banyak warga yang tidak bisa mengakses layanan online. Bagaimana Anda mengatasi kesenjangan ini?",
    options: JSON.stringify([
      "A. Menyediakan alternatif layanan offline, mengadakan pelatihan digital, dan bekerja sama dengan komunitas untuk meningkatkan literasi digital",
      "B. Mengabaikan masalah karena dianggap tanggung jawab pemerintah pusat",
      "C. Memaksa warga menggunakan layanan online tanpa bantuan",
      "D. Menyalahkan warga yang tidak melek teknologi",
      "E. Menunggu infrastruktur digital tersedia baru bertindak"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan adaptif. Menyediakan alternatif offline, mengadakan pelatihan, dan bekerja sama dengan komunitas menunjukkan komitmen pada pelayanan inklusif.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif, Kolaboratif"
  },

  // ============================================================
  // 5. PROFESIONALISME (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyelesaikan tugas dengan tenggat waktu yang ketat. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyusun prioritas, bekerja secara efisien, dan berkomunikasi dengan atasan jika ada kendala yang mengancam tenggat waktu",
      "B. Mengeluh tentang tenggat waktu yang ketat",
      "C. Melakukan tugas seadanya agar cepat selesai",
      "D. Menyerahkan tugas yang belum selesai tanpa penjelasan",
      "E. Menunda pengerjaan karena merasa tertekan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Menyusun prioritas, bekerja efisien, dan berkomunikasi menunjukkan kemampuan manajemen waktu dan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada kesalahan dalam laporan yang Anda buat. Tenggat pengumpulan laporan sudah dekat. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Segera memperbaiki kesalahan, memberitahu atasan, dan memastikan laporan yang dikirim akurat",
      "B. Mengabaikan kesalahan karena tenggat sudah dekat",
      "C. Menyalahkan rekan kerja atas kesalahan tersebut",
      "D. Mengirim laporan dengan kesalahan",
      "E. Menunda pengiriman laporan tanpa penjelasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Segera memperbaiki, memberitahu atasan, dan memastikan akurasi menunjukkan integritas dan tanggung jawab.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk bekerja lembur karena ada pekerjaan mendesak. Anda sudah memiliki rencana pribadi. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Menyelesaikan pekerjaan mendesak terlebih dahulu, berkoordinasi dengan atasan tentang waktu penyelesaian, dan menyesuaikan rencana pribadi",
      "B. Menolak bekerja lembur karena sudah ada rencana",
      "C. Bekerja lembur tetapi dengan kualitas yang buruk",
      "D. Mengabaikan pekerjaan mendesak",
      "E. Meminta kompensasi yang berlebihan sebelum menerima tugas"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan kompeten. Menyelesaikan pekerjaan mendesak, berkoordinasi, dan menyesuaikan rencana menunjukkan dedikasi dan profesionalisme.",
    explanationSource: "Core values ASN: Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa atasan Anda membuat keputusan yang Anda anggap kurang tepat. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Menyampaikan masukan secara privatu dengan data dan argumen yang logis, namun tetap melaksanakan keputusan atasan",
      "B. Mengkritik keputusan atasan di depan staf lain",
      "C. Mengabaikan keputusan dan melakukan sesuai keinginan sendiri",
      "D. Menjalankan keputusan tanpa pertimbangan",
      "E. Menyerahkan surat pengunduran diri"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal tetapi juga kompeten. Menyampaikan masukan secara privatu dengan data menunjukkan profesionalisme, sementara tetap melaksanakan keputusan menunjukkan loyalitas.",
    explanationSource: "Core values ASN: Loyal, Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang sering mengambil izin sakit palsu. Hal ini mengganggu kinerja tim. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan rekan kerja untuk memahami kendala, dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut mengambil izin sakit palsu",
      "C. Mengabaikan karena dianggap urusan pribadi",
      "D. Melaporkan langsung ke atasan tanpa berdiskusi dengan rekan kerja",
      "E. Menyebarkan rumor tentang rekan kerja tersebut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan harmonis. Berdiskusi dengan rekan kerja untuk memahami kendala, dan melaporkan jika tidak ada perubahan menunjukkan sikap yang profesional dan konstruktif.",
    explanationSource: "Core values ASN: Akuntabel, Harmonis, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merekomendasikan kenaikan jabatan bagi bawahan Anda. Ada dua kandidat yang masing-masing memiliki kelebihan dan kekurangan. Bagaimana Anda membuat rekomendasi?",
    options: JSON.stringify([
      "A. Mengevaluasi berdasarkan kompetensi, kinerja, dan potensi pengembangan, serta menjelaskan alasan rekomendasi Anda",
      "B. Merekomendasikan kandidat yang lebih dekat dengan Anda secara personal",
      "C. Mengabaikan evaluasi dan memilih secara acak",
      "D. Menyerahkan keputusan sepenuhnya kepada atasan tanpa rekomendasi",
      "E. Merekomendasikan kedua kandidat agar tidak ada yang kecewa"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mengevaluasi berdasarkan kompetensi dan kinerja, serta menjelaskan alasan menunjukkan profesionalisme dan integritas.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri pelatihan profesional tentang manajemen pelayanan publik. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Berpartisipasi aktif, mencatat materi penting, dan menerapkan ilmu yang didapat dalam pekerjaan",
      "B. Menghadiri pelatihan tanpa persiapan",
      "C. Tidak hadir karena dianggap tidak penting",
      "D. Menghabiskan waktu pelatihan dengan ponsel",
      "E. Tidak menerapkan ilmu yang didapat dalam pekerjaan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pada pengembangan diri. Berpartisipasi aktif, mencatat, dan menerapkan ilmu menunjukkan dedikasi pada profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada anggaran yang tidak terserap karena birokrasi yang rumit. Hal ini menghambat pelaksanaan program. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengidentifikasi hambatan birokrasi, mengusulkan simplifikasi prosedur, dan mencari cara yang lebih efisien",
      "B. Mengabaikan masalah karena dianggap sudah menjadi prosedur",
      "C. Melanggar prosedur agar anggaran bisa terserap",
      "D. Menyalahkan birokrasi tanpa solusi",
      "E. Membiarkan anggaran tidak terserap"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mengidentifikasi hambatan, mengusulkan simplifikasi, dan mencari cara efisien menunjukkan profesionalisme dan inovasi.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola anggaran yang terbatas untuk program yang memiliki banyak kebutuhan. Bagaimana Anda memprioritaskan penggunaan anggaran?",
    options: JSON.stringify([
      "A. Melakukan analisis cost-benefit, memprioritaskan berdasarkan dampak, dan memastikan akuntabilitas penggunaan anggaran",
      "B. Membagi anggaran secara merata tanpa pertimbangan",
      "C. Menggunakan seluruh anggaran untuk satu kegiatan besar",
      "D. Mengabaikan prioritas dan menggunakan anggaran sesuai keinginan",
      "E. Meminta tambahan anggaran tanpa justifikasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Melakukan analisis cost-benefit, memprioritaskan, dan memastikan akuntabilitas menunjukkan profesionalisme dalam pengelolaan keuangan.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menulis email kepada atasan tentang progress pekerjaan. Apa yang sebaiknya Anda sampaikan?",
    options: JSON.stringify([
      "A. Progress yang realistis, kendala yang dihadapi, dan rencana tindak lanjut",
      "B. Hanya menyampaikan pencapaian tanpa kendala",
      "C. Email yang terlalu panjang tanpa fokus",
      "D. Mengabaikan email karena dianggap tidak penting",
      "E. Menulis email dengan bahasa informal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Menyampaikan progress realistis, kendala, dan rencana tindak lanjut menunjukkan transparansi dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada bawahan yang melakukan kesalahan dalam pekerjaan. Kesalahan tersebut dapat diperbaiki. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Memberikan umpan balik yang konstruktif, membantu memperbaiki kesalahan, dan memberikan peluang untuk belajar",
      "B. Menghukum bawahan tanpa penjelasan",
      "C. Mengabaikan kesalahan",
      "D. Menyalahkan bawahan di depan staf lain",
      "E. Mengambil alih pekerjaan bawahan tanpa memberikan kesempatan belajar"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kompeten dalam memimpin. Memberikan umpan balik konstruktif, membantu memperbaiki, dan memberikan peluang belajar menunjukkan kepemimpinan yang efektif.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada praktik tidak etis yang dilakukan oleh atasan Anda. Praktik tersebut merugikan institusi. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengumpulkan bukti, melaporkan ke pihak yang berwenang, dan menjaga kerahasiaan informasi",
      "B. Ikut melakukan praktik tidak etis tersebut",
      "C. Mengabaikan karena dianggap urusan atasan",
      "D. Menyimpan informasi sebagai alat pemerasan",
      "E. Menyerang reputasi atasan secara terbuka"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Mengumpulkan bukti, melaporkan, dan menjaga kerahasiaan menunjukkan komitmen pada anti-korupsi dan akuntabilitas.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri rapat yang membahas anggaran tahun depan. Apa yang sebaiknya Anda siapkan?",
    options: JSON.stringify([
      "A. Data kebutuhan anggaran, analisis program yang akan dilaksanakan, dan proposal yang realistis",
      "B. Datang tanpa persiapan",
      "C. Hanya membawa dokumen tanpa analisis",
      "D. Mengabaikan rapat karena dianggap tidak penting",
      "E. Datang terlambat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan profesional. Menyiapkan data kebutuhan, analisis, dan proposal realistis menunjukkan dedikasi dan kemampuan perencanaan.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang tidak bekerja sesuai tanggung jawabnya. Hal ini membebani anggota tim lainnya. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan rekan kerja untuk memahami kendala, menawarkan bantuan, dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Mengambil alih pekerjaan rekan kerja tanpa koordinasi",
      "C. Mengabaikan karena dianggap urusan rekan kerja",
      "D. Menyebarkan rumor tentang rekan kerja tersebut",
      "E. Melaporkan langsung ke atasan tanpa berdiskusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan harmonis. Berdiskusi untuk memahami kendala, menawarkan bantuan, dan melaporkan jika tidak ada perubahan menunjukkan sikap yang konstruktif.",
    explanationSource: "Core values ASN: Kolaboratif, Harmonis, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengevaluasi kinerja bawahan yang memiliki masalah pribadi yang mempengaruhi pekerjaan. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Berdiskusi secara privatu untuk memahami masalah, memberikan dukungan, dan mencari solusi yang mengakomodasi kebutuhan bawahan tanpa mengorbankan kinerja",
      "B. Mengabaikan masalah pribadi dan hanya mengevaluasi kinerja",
      "C. Menghukum bawahan karena penurunan kinerja",
      "D. Menyerahkan masalah ke HR tanpa pendekatan personal",
      "E. Membiarkan masalah berlarut tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kompeten. Berdiskusi privatu, memberikan dukungan, dan mencari solusi menunjukkan kepemimpinan yang empatik namun tetap menjaga kinerja.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membuat catatan kerja harian. Apa yang sebaiknya Anda catat?",
    options: JSON.stringify([
      "A. Aktivitas yang dilakukan, hasil yang dicapai, kendala yang dihadapi, dan rencana untuk hari berikutnya",
      "B. Hanya mencatat aktivitas tanpa hasil",
      "C. Mengabaikan catatan karena dianggap tidak penting",
      "D. Membuat catatan yang tidak akurat",
      "E. Menyalin catatan dari hari sebelumnya"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mencatat aktivitas, hasil, kendala, dan rencana menunjukkan disiplin dan tanggung jawab dalam dokumentasi.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mempresentasikan hasil kerja kepada atasan. Hasil kerja Anda memiliki beberapa kekurangan. Bagaimana Anda mempresentasikan?",
    options: JSON.stringify([
      "A. Menyampaikan hasil secara jujur, mengakui kekurangan, dan menjelaskan rencana perbaikan",
      "B. Menyembunyikan kekurangan dan hanya menonjolkan kelebihan",
      "C. Menyalahkan pihak lain atas kekurangan",
      "D. Tidak mempresentasikan karena takut dikritik",
      "E. Membuat hasil yang tidak akurat agar terlihat bagus"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Menyampaikan secara jujur, mengakui kekurangan, dan menjelaskan rencana perbaikan menunjukkan integritas dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik kepentingan antara tugas Anda sebagai ASN dan kepentingan pribadi. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Menyatakan konflik kepentingan kepada atasan, meminta penugasan ulang jika diperlukan, dan mengutamakan kepentingan publik",
      "B. Mengabaikan konflik kepentingan",
      "C. Menyembunyikan konflik kepentingan",
      "D. Mengutamakan kepentingan pribadi",
      "E. Menolak tugas tanpa penjelasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berintegritas. Menyatakan konflik kepentingan, meminta penugasan ulang, dan mengutamakan kepentingan publik menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjaga kerahasiaan dokumen penting instansi. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menyimpan dokumen di tempat yang aman, tidak membagikan akses kepada yang tidak berwenang, dan mengikuti protokol keamanan",
      "B. Membagikan dokumen kepada semua rekan kerja",
      "C. Menyimpan dokumen dalam perangkat pribadi",
      "D. Mengabaikan protokol keamanan",
      "E. Membocorkan informasi kepada pihak luar"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan loyal. Menyimpan di tempat aman, tidak membagikan akses, dan mengikuti protokol keamanan menunjukkan komitmen pada kerahasiaan.",
    explanationSource: "Core values ASN: Akuntabel, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada program yang sudah tidak relevan tetapi masih berjalan. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Menganalisis dampak program, menyampaikan masukan kepada atasan, dan mengusulkan penyesuaian atau penghentian",
      "B. Mengabaikan karena dianggap sudah menjadi kebijakan",
      "C. Menghentikan program sepihak",
      "D. Melanjutkan program tanpa evaluasi",
      "E. Menyalahkan perencana program sebelumnya"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Menganalisis dampak, menyampaikan masukan, dan mengusulkan penyesuaian menunjukkan profesionalisme dan inisiatif.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memimpin tim yang sedang mengalami konflik internal. Konflik tersebut mengganggu produktivitas. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Memahami akar konflik, memfasilitasi dialog, mencari solusi bersama, dan membangun kembali kepercayaan dalam tim",
      "B. Mengabaikan konflik dan berharap selesai sendiri",
      "C. Memihak salah satu pihak",
      "D. Menghukum anggota tim yang terlibat konflik",
      "E. Membubarkan tim dan membentuk tim baru"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan harmonis. Memahami akar konflik, memfasilitasi dialog, dan membangun kembali kepercayaan menunjukkan kepemimpinan yang efektif.",
    explanationSource: "Core values ASN: Kompeten, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri upacara bendera di kantor. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Hadir tepat waktu, berpakaian rapi, dan mengikuti prosesi dengan khidmat",
      "B. Tidak hadir karena dianggap tidak penting",
      "C. Hadir tetapi tidak mengikuti prosesi",
      "D. Hadir terlambat",
      "E. Hadir tetapi tidak serius"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan profesional. Hadir tepat waktu, berpakaian rapi, dan mengikuti prosesi menunjukkan penghormatan dan dedikasi.",
    explanationSource: "Core values ASN: Loyal, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada staf yang melakukan pekerjaan sampingan selama jam kerja. Hal ini mempengaruhi produktivitas. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan staf untuk memahami situasi, mengingatkan tentang aturan, dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut melakukan pekerjaan sampingan",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Melaporkan langsung ke atasan tanpa berdiskusi",
      "E. Menghukum staf tanpa penjelasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan harmonis. Berdiskusi untuk memahami situasi, mengingatkan tentang aturan, dan melaporkan jika tidak ada perubahan menunjukkan sikap yang profesional.",
    explanationSource: "Core values ASN: Akuntabel, Harmonis, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merumuskan standar kinerja yang realistis untuk tim Anda. Anda mengetahui bahwa ada tekanan dari atasan untuk menetapkan standar yang sangat tinggi. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Menyusun standar berdasarkan analisis kemampuan tim, menyampaikan kekhawatiran kepada atasan, dan mencari kompromi yang realistis",
      "B. Mengikuti standar atasan tanpa pertimbangan",
      "C. Menolak menetapkan standar",
      "D. Menetapkan standar yang terlalu rendah",
      "E. Menyalahkan atasan atas standar yang tidak realistis"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menyusun standar berdasarkan analisis, menyampaikan kekhawatiran, dan mencari kompromi menunjukkan profesionalisme dan realisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memberikan pelayanan yang terbaik kepada warga. Apa sikap yang sebaiknya Anda tunjukkan?",
    options: JSON.stringify([
      "A. Ramah, sabar, responsif, dan menyelesaikan masalah warga dengan profesional",
      "B. Melayani dengan sikap acuh tak acuh",
      "C. Melayani dengan tergesa-gesa",
      "D. Mengabaikan keluhan warga",
      "E. Bersikap sombong kepada warga"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Ramah, sabar, responsif, dan profesional menunjukkan komitmen pada pelayanan publik yang berkualitas.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada anggaran yang dapat dioptimalkan penggunaannya. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Menganalisis penggunaan anggaran, mengusulkan efisiensi, dan memastikan akuntabilitas penggunaan anggaran",
      "B. Mengabaikan karena dianggap urusan bagian keuangan",
      "C. Menggunakan anggaran untuk kepentingan pribadi",
      "D. Menyalahkan bagian keuangan atas inefisiensi",
      "E. Membiarkan anggaran terbuang sia-sia"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Menganalisis, mengusulkan efisiensi, dan memastikan akuntabilitas menunjukkan profesionalisme dalam pengelolaan keuangan.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada bawahan yang melakukan penyalahgunaan wewenang. Anda adalah atasan langsung bawahan tersebut. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Mengumpulkan bukti, melakukan konfirmasi, mengambil tindakan tegas sesuai aturan, dan melaporkan ke atasan",
      "B. Mengabaikan karena dianggap bawahan Anda",
      "C. Menutupi kesalahan bawahan",
      "D. Menghukum bawahan tanpa prosedur yang benar",
      "E. Menyerahkan masalah ke bagian lain tanpa tindakan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mengumpulkan bukti, melakukan konfirmasi, mengambil tindakan tegas, dan melaporkan menunjukkan kepemimpinan yang berintegritas.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyampaikan informasi kepada publik melalui website instansi. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Informasi yang akurat, mudah dipahami, dan sesuai dengan kebijakan instansi",
      "B. Informasi yang dibuat-buat agar menarik",
      "C. Informasi yang menggunakan bahasa teknis",
      "D. Informasi yang tidak sesuai fakta",
      "E. Informasi yang menyinggung pihak tertentu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan berorientasi pelayanan. Informasi akurat, mudah dipahami, dan sesuai kebijakan menunjukkan transparansi dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang sering terlambat masuk kerja. Hal ini mempengaruhi semangat kerja tim. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdiskusi dengan rekan kerja untuk memahami situasi, mengingatkan tentang pentingnya disiplin, dan melaporkan ke atasan jika tidak ada perubahan",
      "B. Ikut terlambat masuk kerja",
      "C. Mengabaikan karena dianggap urusan pribadi",
      "D. Melaporkan langsung ke atasan tanpa berdiskusi",
      "E. Membicarakan kebiasaan rekan kerja di belakangnya"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan harmonis. Berdiskusi untuk memahami situasi, mengingatkan, dan melaporkan jika tidak ada perubahan menunjukkan sikap yang profesional.",
    explanationSource: "Core values ASN: Akuntabel, Harmonis, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola perubahan organisasi yang signifikan di instansi Anda. Ada resistensi yang kuat dari beberapa staf. Bagaimana Anda mengelola perubahan ini?",
    options: JSON.stringify([
      "A. Memahami alasan resistensi, berkomunikasi tentang manfaat perubahan, melibatkan staf dalam proses, dan memberikan dukungan selama transisi",
      "B. Mengabaikan resistensi dan memaksakan perubahan",
      "C. Membatalkan perubahan karena ada resistensi",
      "D. Menyalahkan staf yang resisten",
      "E. Menjanjikan hal yang tidak realistis"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Memahami alasan resistensi, berkomunikasi, melibatkan staf, dan memberikan dukungan menunjukkan kemampuan manajemen perubahan yang efektif.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyerahkan laporan kerja kepada atasan. Apa yang sebaiknya Anda pastikan?",
    options: JSON.stringify([
      "A. Laporan lengkap, akurat, tepat waktu, dan sesuai format yang diminta",
      "B. Laporan yang dibuat-buat agar terlihat bagus",
      "C. Laporan yang tidak lengkap",
      "D. Laporan yang terlambat tanpa penjelasan",
      "E. Laporan yang tidak sesuai format"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Laporan lengkap, akurat, tepat waktu, dan sesuai format menunjukkan profesionalisme dan tanggung jawab.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada program yang berhasil diinstansi lain. Anda ingin mengadopsi program tersebut di instansi Anda. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Mempelajari program tersebut, menyesuaikan dengan konteks instansi Anda, berkoordinasi dengan instansi asal, dan mengusulkan ke atasan",
      "B. Menyalin program tanpa adaptasi",
      "C. Mengabaikan karena dianggap bukan ide sendiri",
      "D. Mengusulkan tanpa studi banding",
      "E. Menunggu instansi lain yang mengadopsi terlebih dahulu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari, menyesuaikan konteks, berkoordinasi, dan mengusulkan menunjukkan profesionalisme dan inovasi.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memberikan penilaian kinerja kepada bawahan yang memiliki hubungan keluarga dengan Anda. Bagaimana Anda menjaga objektivitas?",
    options: JSON.stringify([
      "A. Menerapkan kriteria penilaian yang sama, menggunakan data objektif, dan melibatkan pihak lain dalam proses penilaian",
      "B. Memberikan penilaian yang lebih tinggi karena hubungan keluarga",
      "C. Menghindari penilaian karena dianggap konflik kepentingan",
      "D. Menyerahkan penilaian kepada orang lain",
      "E. Memberikan penilaian yang lebih rendah agar terlihat objektif"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Menerapkan kriteria yang sama, menggunakan data objektif, dan melibatkan pihak lain menunjukkan integritas dan objektivitas.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengelola inventaris kantor. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mendata inventaris dengan lengkap, memastikan kondisi barang terawat, dan melaporkan jika ada kerusakan",
      "B. Mengabaikan inventaris karena dianggap tidak penting",
      "C. Menyalahgunakan inventaris untuk kepentingan pribadi",
      "D. Tidak melakukan pencatatan",
      "E. Membiarkan inventaris rusak tanpa perawatan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mendata lengkap, memastikan kondisi terawat, dan melaporkan kerusakan menunjukkan tanggung jawab terhadap aset negara.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada peluang pengembangan karir yang sesuai dengan keahlian Anda. Bagaimana Anda memanfaatkan peluang ini?",
    options: JSON.stringify([
      "A. Mempersiapkan diri dengan baik, mengembangkan kompetensi yang dibutuhkan, dan berkoordinasi dengan atasan",
      "B. Mengabaikan peluang karena dianggap tidak siap",
      "C. Meminta promosi tanpa persiapan",
      "D. Menyalahkan atasan karena tidak mendukung pengembangan karir",
      "E. Menunggu peluang datang sendiri"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Mempersiapkan diri, mengembangkan kompetensi, dan berkoordinasi dengan atasan menunjukkan profesionalisme dan inisiatif.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menangani situasi darurat yang melibatkan banyak pihak. Situasinya kritis dan membutuhkan keputusan cepat. Bagaimana Anda bertindak?",
    options: JSON.stringify([
      "A. Tetap tenang, mengidentifikasi prioritas, mengoordinasikan tim, dan mengambil keputusan berdasarkan informasi yang tersedia",
      "B. Panik dan tidak bisa mengambil keputusan",
      "C. Menunggu instruksi dari atasan",
      "D. Mengabaikan situasi darurat",
      "E. Menyalahkan pihak lain atas situasi darurat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif dalam situasi darurat. Tetap tenang, mengidentifikasi prioritas, mengoordinasikan tim, dan mengambil keputusan menunjukkan kepemimpinan yang efektif.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Loyal"
  },

  // ============================================================
  // 6. ANTI-RADIKALISME (40 soal)
  // ============================================================
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang menyebarkan informasi provokatif melalui media sosial yang dapat memecah belah masyarakat. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengingatkan rekan kerja tentang dampak buruk informasi provokatif dan mengajak untuk menyebarkan informasi yang positif",
      "B. Ikut menyebarkan informasi provokatif",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Melaporkan rekan kerja ke atasan tanpa berdiskusi",
      "E. Menyimpan informasi sebagai alat pemerasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan berkontribusi pada persatuan. Mengingatkan tentang dampak buruk dan mengajak menyebarkan informasi positif menunjukkan komitmen pada anti-radikalisme.",
    explanationSource: "Core values ASN: Loyal, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mensosialisasikan pencegahan radikalisme kepada masyarakat. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan bahasa yang mudah dipahami, memberikan contoh nyata, dan melibatkan tokoh masyarakat dalam sosialisasi",
      "B. Menggunakan pendekatan yang menggurui dan menghakimi",
      "C. Mengabaikan aspek budaya lokal",
      "D. Hanya menyampaikan teori tanpa contoh",
      "E. Mengabaikan kelompok yang dianggap sudah paham"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Menggunakan bahasa mudah dipahami, memberikan contoh, dan melibatkan tokoh masyarakat menunjukkan pendekatan yang efektif.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada kelompok yang merekrut pemuda untuk paham radikal di daerah tugas Anda. Bagaimana Anda sebagai ASN ikut mencegahnya?",
    options: JSON.stringify([
      "A. Memberikan pemahaman tentang bahaya radikalisme, membangun jaringan dengan tokoh masyarakat, dan melaporkan aktivitas mencurigakan",
      "B. Mengabaikan karena dianggap urusan keamanan",
      "C. Melarang pemuda untuk berkumpul",
      "D. Mengkritik kelompok tersebut secara terbuka",
      "E. Membiarkan rekrutmen berlangsung"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan kompeten. Memberikan pemahaman, membangun jaringan, dan melaporkan menunjukkan komitmen pada pencegahan radikalisme.",
    explanationSource: "Core values ASN: Loyal, Kompeten, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun ketahanan masyarakat terhadap paham radikalisme. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Mengidentifikasi kerentanan masyarakat, merancang program pencegahan yang kontekstual, dan melibatkan seluruh komponen masyarakat",
      "B. Mengabaikan kerentanan masyarakat",
      "C. Menggunakan pendekatan represif",
      "D. Hanya fokus pada penegakan hukum",
      "E. Mengabaikan peran masyarakat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan kolaboratif. Mengidentifikasi kerentanan, merancang program kontekstual, dan melibatkan masyarakat menunjukkan pendekatan yang komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada anggota keluarga Anda yang mulai terpapar paham radikalisme. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Berdialog dengan pendekatan yang empati, memberikan informasi yang benar, dan mencari bantuan dari tokoh agama atau ahli jika diperlukan",
      "B. Mengabaikan karena dianggap urusan pribadi",
      "C. Melaporkan anggota keluarga ke pihak berwenang tanpa dialog",
      "D. Memaksa anggota keluarga untuk meninggalkan paham radikal",
      "E. Menyembunyikan fakta dari pihak berwenang"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kompeten. Berdialog dengan empati, memberikan informasi benar, dan mencari bantuan menunjukkan pendekatan yang manusiawi dan efektif.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menulis kebijakan pencegahan radikalisme di instansi Anda. Bagaimana Anda merancang kebijakan ini?",
    options: JSON.stringify([
      "A. Melakukan kajian risiko, merancang mekanisme deteksi dini, menyusun program pencegahan, dan memastikan implementasi yang efektif",
      "B. Menyalin kebijakan dari instansi lain tanpa adaptasi",
      "C. Merancang kebijakan represif tanpa pencegahan",
      "D. Mengabaikan aspek pencegahan",
      "E. Merancang kebijakan tanpa melibatkan stakeholder"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Melakukan kajian risiko, merancang mekanisme deteksi, dan menyusun program pencegahan menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menghadiri seminar tentang pencegahan radikalisme. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Berpartisipasi aktif, mencatat materi penting, dan menerapkan ilmu yang didapat dalam pekerjaan",
      "B. Tidak hadir karena dianggap tidak penting",
      "C. Hadir tetapi tidak memperhatikan",
      "D. Hadir hanya untuk tanda tangan",
      "E. Tidak menerapkan ilmu yang didapat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pada pengembangan diri. Berpartisipasi aktif, mencatat, dan menerapkan ilmu menunjukkan dedikasi pada pencegahan radikalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konten di media sosial yang menyebarkan kebencian antar kelompok agama. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Tidak menyebarkan konten tersebut, melaporkan ke platform media sosial, dan menyebarkan informasi yang menyejukkan",
      "B. Ikut menyebarkan konten tersebut",
      "C. Mengabaikan karena dianggap hak kebebasan berekspresi",
      "D. Membalas dengan konten yang lebih provokatif",
      "E. Melaporkan pembuat konten ke pihak berwenang tanpa verifikasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan harmonis. Tidak menyebarkan, melaporkan, dan menyebarkan informasi menyejukkan menunjukkan komitmen pada persatuan dan kerukunan.",
    explanationSource: "Core values ASN: Loyal, Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada organisasi yang menggunakan kedok keagamaan untuk menyebarkan paham radikalisme. Bagaimana Anda mengidentifikasi dan menanganinya?",
    options: JSON.stringify([
      "A. Memahami modus operandi, berkoordinasi dengan pihak berwenang, dan memberikan pemahaman kepada masyarakat tentang cara mengenali",
      "B. Mengabaikan karena dianggap urusan agama",
      "C. Melarang seluruh kegiatan organisasi tersebut",
      "D. Mengkritik organisasi secara terbuka tanpa bukti",
      "E. Membiarkan organisasi tersebut beroperasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Memahami modus operandi, berkoordinasi dengan pihak berwenang, dan memberikan pemahaman menunjukkan pendekatan yang profesional.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun toleransi antar umat beragama di lingkungan kerja. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menghormati perbedaan agama, menghadiri acara keagamaan rekan kerja, dan menciptakan lingkungan kerja yang inklusif",
      "B. Mengabaikan perbedaan agama",
      "C. Memaksa semua orang mengikuti agama tertentu",
      "D. Mengkritik agama lain",
      "E. Menghindari interaksi dengan rekan yang berbeda agama"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan berorientasi pelayanan. Menghormati perbedaan, menghadiri acara, dan menciptakan lingkungan inklusif menunjukkan komitmen pada toleransi.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang program pencegahan radikalisme bagi pemuda di daerah tugas Anda. Bagaimana Anda merancang program ini?",
    options: JSON.stringify([
      "A. Melibatkan pemuda dalam perancangan, menggunakan pendekatan yang menarik bagi generasi muda, dan mengintegrasikan dengan kegiatan produktif",
      "B. Merancang program tanpa melibatkan pemuda",
      "C. Menggunakan pendekatan yang membosankan",
      "D. Hanya menyampaikan materi tanpa kegiatan",
      "E. Mengabaikan kebutuhan pemuda"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Melibatkan pemuda, menggunakan pendekatan menarik, dan mengintegrasikan dengan kegiatan produktif menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik sosial yang dimanfaatkan oleh pihak tertentu untuk menyebarkan paham radikalisme. Bagaimana Anda menangani?",
    options: JSON.stringify([
      "A. Memahami akar konflik, memfasilitasi dialog, mencegah eskalasi, dan memberikan pemahaman tentang bahaya radikalisme",
      "B. Mengabaikan konflik karena dianggap urusan keamanan",
      "C. Memihak salah satu pihak",
      "D. Melarang diskusi tentang konflik",
      "E. Biarkan konflik berlanjut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan harmonis. Memahami akar konflik, memfasilitasi dialog, dan mencegah eskalasi menunjukkan kemampuan resolusi konflik dan pencegahan radikalisme.",
    explanationSource: "Core values ASN: Kompeten, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjadi tutor dalam program deradikalisasi. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan pendekatan yang empati, memberikan pemahaman yang benar, dan memberikan dukungan psikologis",
      "B. Menggunakan pendekatan yang menghakimi",
      "C. Mengabaikan kondisi psikologis peserta",
      "D. Hanya menyampaikan materi tanpa dukungan",
      "E. Mengabaikan kebutuhan peserta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kompeten. Menggunakan pendekatan empati, memberikan pemahaman, dan dukungan psikologis menunjukkan pendekatan yang manusiawi dalam deradikalisasi.",
    explanationSource: "Core values ASN: Harmonis, Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada penyebaran hoaks yang dapat memicu konflik sosial. Bagaimana Anda merespons sebagai ASN?",
    options: JSON.stringify([
      "A. Memverifikasi informasi, tidak menyebarkan hoaks, melaporkan ke platform, dan menyebarkan informasi yang benar",
      "B. Ikut menyebarkan hoaks",
      "C. Mengabaikan karena dianggap urusan pribadi",
      "D. Membalas hoaks dengan hoaks lain",
      "E. Menyalahkan pihak lain atas penyebaran hoaks"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Memverifikasi, tidak menyebarkan, melaporkan, dan menyebarkan informasi benar menunjukkan komitmen pada pencegahan radikalisme.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menangani mantan narapidana teroris yang kembali ke masyarakat. Bagaimana Anda membantu reintegrasi mereka?",
    options: JSON.stringify([
      "A. Memberikan dukungan sosial, membangun jaringan kerja, memantau perkembangan, dan memastikan mereka mendapatkan hak-haknya",
      "B. Mengucilkan dari masyarakat",
      "C. Mengabaikan karena dianggap sudah selesai hukumannya",
      "D. Memperlakukan mereka sebagai penjahat seumur hidup",
      "E. Membiarkan mereka tanpa bantuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan berorientasi pelayanan. Memberikan dukungan, membangun jaringan, dan memastikan hak-haknya menunjukkan pendekatan reintegrasi yang efektif.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengidentifikasi tanda-tanda radikalisme di lingkungan kerja. Apa yang sebaiknya Anda perhatikan?",
    options: JSON.stringify([
      "A. Perubahan perilaku yang drastis, penyebaran informasi provokatif, dan upaya merekrut anggota baru",
      "B. Kehadiran yang terlambat",
      "C. Penurunan kinerja",
      "D. Konflik interpersonal",
      "E. Ketidakhadiran dalam rapat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Mengidentifikasi tanda-tanda radikalisme menunjukkan kewaspadaan dan kemampuan deteksi dini.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada pemuda di daerah tugas Anda yang mulai terpapar paham radikalisme melalui internet. Bagaimana Anda membantu?",
    options: JSON.stringify([
      "A. Memberikan literasi digital, membimbing akses informasi yang benar, dan melibatkan keluarga dalam pendampingan",
      "B. Melarang akses internet",
      "C. Mengabaikan karena dianggap urusan keluarga",
      "D. Melaporkan pemuda tersebut ke pihak berwenang",
      "E. Membiarkan pemuda tersebut tanpa bantuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Memberikan literasi digital, membimbing akses informasi, dan melibatkan keluarga menunjukkan pendekatan pencegahan yang komprehensif.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengevaluasi efektivitas program pencegahan radikalisme di instansi Anda. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Menentukan indikator keberhasilan, mengumpulkan data, menganalisis dampak, dan memberikan rekomendasi perbaikan",
      "B. Mengabaikan evaluasi karena dianggap tidak penting",
      "C. Hanya melaporkan kegiatan tanpa analisis",
      "D. Menyembunyikan data yang tidak sesuai harapan",
      "E. Mengabaikan masukan dari peserta program"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menentukan indikator, mengumpulkan data, menganalisis, dan memberikan rekomendasi menunjukkan profesionalisme dalam evaluasi.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyosialisasikan nilai-nilai Pancasila kepada masyarakat. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan contoh nyata dalam kehidupan sehari-hari, melibatkan komunitas, dan membuat kegiatan yang interaktif",
      "B. Hanya menyampaikan teori tanpa contoh",
      "C. Menggunakan pendekatan yang menggurui",
      "D. Mengabaikan konteks lokal",
      "E. Hanya menyampaikan materi tanpa diskusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Menggunakan contoh nyata, melibatkan komunitas, dan kegiatan interaktif menunjukkan pendekatan yang efektif.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada organisasi yang menyebarkan paham radikalisme melalui kegiatan sosial. Bagaimana Anda mengidentifikasinya?",
    options: JSON.stringify([
      "A. Memahami modus operandi, mengidentifikasi ciri-ciri kegiatan yang mencurigakan, dan berkoordinasi dengan pihak berwenang",
      "B. Mengabaikan karena dianggap kegiatan sosial",
      "C. Melarang seluruh kegiatan sosial",
      "D. Mengkritik organisasi tanpa bukti",
      "E. Membiarkan organisasi beroperasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Memahami modus operandi, mengidentifikasi ciri-ciri, dan berkoordinasi menunjukkan kemampuan deteksi dini.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang strategi komunikasi pencegahan radikalisme yang efektif. Bagaimana Anda merancang strategi ini?",
    options: JSON.stringify([
      "A. Memahami target audiens, menggunakan pesan yang tepat, memilih saluran komunikasi yang efektif, dan mengukur dampak",
      "B. Menggunakan pesan yang provokatif",
      "C. Mengabaikan target audiens",
      "D. Hanya menggunakan satu saluran komunikasi",
      "E. Mengabaikan pengukuran dampak"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Memahami audiens, menggunakan pesan tepat, memilih saluran efektif, dan mengukur dampak menunjukkan profesionalisme dalam komunikasi.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang menyebarkan informasi yang dapat memicu kebencian. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mengingatkan tentang dampak buruk informasi kebencian, mengajak untuk menyebarkan informasi positif, dan melaporkan jika tidak ada perubahan",
      "B. Ikut menyebarkan informasi kebencian",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Menyimpan informasi sebagai alat pemerasan",
      "E. Melaporkan rekan kerja tanpa berdiskusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan harmonis. Mengingatkan dampak buruk, mengajak menyebarkan informasi positif, dan melaporkan menunjukkan komitmen pada persatuan.",
    explanationSource: "Core values ASN: Loyal, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun jaringan kerja sama dengan organisasi masyarakat sipil dalam pencegahan radikalisme. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Mengidentifikasi organisasi yang relevan, membangun komunikasi yang efektif, menyusun program bersama, dan mengevaluasi kerja sama",
      "B. Mengabaikan peran organisasi masyarakat sipil",
      "C. Hanya bekerja sama dengan organisasi tertentu",
      "D. Membiarkan organisasi bekerja sendiri",
      "E. Mengkritik organisasi yang tidak bekerja sama"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Mengidentifikasi organisasi, membangun komunikasi, menyusun program bersama, dan mengevaluasi menunjukkan kemampuan membangun jaringan.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada upaya untuk mengubah kurikulum pendidikan agar mengandung paham radikalisme. Bagaimana Anda menyikapi?",
    options: JSON.stringify([
      "A. Mengidentifikasi perubahan yang mencurigakan, berkoordinasi dengan pihak pendidikan, melaporkan ke pihak berwenang, dan memberikan alternatif yang sesuai",
      "B. Mengabaikan karena dianggap urusan pendidikan",
      "C. Melarang seluruh perubahan kurikulum",
      "D. Mengkritik tanpa solusi",
      "E. Membiarkan perubahan terjadi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Mengidentifikasi perubahan mencurigakan, berkoordinasi, melaporkan, dan memberikan alternatif menunjukkan kewaspadaan dan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel, Loyal"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memberikan pelayanan yang adil kepada semua warga tanpa memandang latar belakang. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Memberikan pelayanan yang sama tanpa diskriminasi, mendengarkan keluhan, dan menyelesaikan masalah dengan profesional",
      "B. Memberikan pelayanan yang berbeda berdasarkan latar belakang",
      "C. Mengabaikan keluhan warga tertentu",
      "D. Bersikap favorit terhadap warga tertentu",
      "E. Mengabaikan protokol pelayanan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Memberikan pelayanan adil tanpa diskriminasi menunjukkan komitmen pada pelayanan publik yang berkualitas.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik antar kelompok masyarakat yang dimanfaatkan untuk menyebarkan paham radikalisme. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Memahami akar konflik, memfasilitasi dialog, mencegah eskalasi, dan memberikan pemahaman tentang bahaya radikalisme",
      "B. Mengabaikan konflik",
      "C. Memihak salah satu pihak",
      "D. Melarang diskusi tentang konflik",
      "E. Biarkan konflik berlanjut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan harmonis. Memahami akar konflik, memfasilitasi dialog, dan mencegah eskalasi menunjukkan kemampuan resolusi konflik.",
    explanationSource: "Core values ASN: Kompeten, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menangani kasus radikalisme yang melibatkan anak di bawah umur. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Mengutamakan perlindungan anak, memberikan pendampingan psikologis, melibatkan keluarga, dan memastikan proses hukum yang sesuai",
      "B. Mengabaikan karena dianggap urusan hukum",
      "C. Memperlakukan anak sebagai penjahat dewasa",
      "D. Menyerahkan kasus tanpa pendampingan",
      "E. Membiarkan anak tanpa bantuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan berorientasi pelayanan. Mengutamakan perlindungan anak, memberikan pendampingan, dan melibatkan keluarga menunjukkan pendekatan yang manusiawi.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengembangkan materi edukasi tentang pencegahan radikalisme. Apa yang sebaiknya Anda masukkan dalam materi tersebut?",
    options: JSON.stringify([
      "A. Pengertian radikalisme, dampak buruk, cara mengenali, dan langkah pencegahan yang dapat dilakukan",
      "B. Hanya definisi radikalisme",
      "C. Cerita horor tentang radikalisme",
      "D. Informasi yang menakut-nakuti",
      "E. Mengabaikan aspek pencegahan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Memasukkan pengertian, dampak, cara mengenali, dan langkah pencegahan menunjukkan materi yang komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada aktivitas mencurigakan di lingkungan sekitar kantor yang dapat terkait dengan radikalisme. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mengamati tanpa mencurigai, mengumpulkan informasi yang relevan, dan melaporkan ke pihak berwenang jika ada bukti",
      "B. Mengabaikan karena dianggap aktivitas biasa",
      "C. Melaporkan tanpa bukti",
      "D. Menyelidiki sendiri secara berisiko",
      "E. Menyebarkan kecurigaan ke orang lain"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mengamati, mengumpulkan informasi, dan melaporkan dengan bukti menunjukkan kewaspadaan dan profesionalisme.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengevaluasi program deradikalisasi yang sudah berjalan. Program tersebut memiliki hasil yang campuran. Bagaimana Anda mengevaluasi?",
    options: JSON.stringify([
      "A. Menganalisis keberhasilan dan kegagalan, mengidentifikasi faktor-faktor yang mempengaruhi, dan memberikan rekomendasi perbaikan",
      "B. Mengabaikan kegagalan dan hanya melaporkan keberhasilan",
      "C. Menyembunyikan data yang tidak sesuai harapan",
      "D. Menyalahkan pelaksana program",
      "E. Menghentikan program tanpa evaluasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menganalisis keberhasilan dan kegagalan, mengidentifikasi faktor, dan memberikan rekomendasi menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun hubungan yang baik dengan masyarakat dari berbagai latar belakang. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menghormati perbedaan, berkomunikasi dengan baik, dan berpartisipasi dalam kegiatan komunitas",
      "B. Menghindari interaksi dengan masyarakat",
      "C. Bersikap diskriminatif",
      "D. Mengabaikan perbedaan budaya",
      "E. Hanya berinteraksi dengan kelompok tertentu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kolaboratif. Menghormati perbedaan, berkomunikasi baik, dan berpartisipasi dalam kegiatan menunjukkan kemampuan membangun hubungan.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada penggunaan teknologi untuk menyebarkan paham radikalisme. Bagaimana Anda sebagai ASN ikut mencegahnya?",
    options: JSON.stringify([
      "A. Meningkatkan literasi digital, mempromosikan penggunaan teknologi yang bertanggung jawab, dan melaporkan konten radikal",
      "B. Melarang penggunaan teknologi",
      "C. Mengabaikan karena dianggap urusan pribadi",
      "D. Ikut menyebarkan konten radikal",
      "E. Membiarkan penyebaran konten radikal"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Meningkatkan literasi digital, mempromosikan penggunaan bertanggung jawab, dan melaporkan menunjukkan pencegahan yang proaktif.",
    explanationSource: "Core values ASN: Adaptif, Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang sistem deteksi dini radikalisme di instansi Anda. Bagaimana Anda merancang sistem ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi indikator, menentukan mekanisme monitoring, melatih staf, dan mengevaluasi efektivitas sistem",
      "B. Mengabaikan aspek pencegahan",
      "C. Hanya fokus pada penegakan hukum",
      "D. Merancang sistem tanpa melibatkan staf",
      "E. Mengabaikan pengembangan sistem"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Mengidentifikasi indikator, menentukan mekanisme, melatih staf, dan mengevaluasi menunjukkan profesionalisme dalam deteksi dini.",
    explanationSource: "Core values ASN: Kompeten, Adaptif"
  }
,
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menangani keluhan warga yang tidak puas dengan pelayanan instansi Anda. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Mendengarkan keluhan dengan sabar, memahami masalah, dan mencari solusi yang adil",
      "B. Menolak mendengarkan keluhan",
      "C. Bersikap defensif",
      "D. Mengabaikan keluhan",
      "E. Menyalahkan warga atas ketidakpuasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Mendengarkan dengan sabar, memahami masalah, dan mencari solusi adil menunjukkan pelayanan yang berkualitas.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada warga yang kesulitan mengakses layanan publik karena kendala transportasi. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mengidentifikasi alternatif layanan, mengusulkan solusi, dan berkoordinasi dengan pihak terkait",
      "B. Mengabaikan karena dianggap bukan tanggung jawab",
      "C. Menolak membantu",
      "D. Menyalahkan warga atas kendala transportasi",
      "E. Membiarkan warga tanpa solusi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan adaptif. Mengidentifikasi alternatif, mengusulkan solusi, dan berkoordinasi menunjukkan inisiatif dalam pelayanan.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang sistem pelayanan publik yang lebih efisien. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Menganalisis kebutuhan masyarakat, merancang prosedur yang mudah, mengintegrasikan teknologi, dan mengevaluasi dampak",
      "B. Menyalin sistem dari instansi lain",
      "C. Mengabaikan kebutuhan masyarakat",
      "D. Merancang sistem yang rumit",
      "E. Mengabaikan pengembangan sistem"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Menganalisis kebutuhan, merancang prosedur mudah, mengintegrasikan teknologi, dan mengevaluasi menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada warga yang membutuhkan bantuan khusus karena memiliki keterbatasan. Bagaimana Anda melayani?",
    options: JSON.stringify([
      "A. Memberikan pelayanan yang inklusif, memahami kebutuhan khusus, dan memastikan akses yang setara",
      "B. Memberikan pelayanan yang sama tanpa penyesuaian",
      "C. Mengabaikan keterbatasan warga",
      "D. Menolak memberikan pelayanan",
      "E. Membiarkan warga tanpa bantuan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan harmonis. Memberikan pelayanan inklusif, memahami kebutuhan khusus, dan memastikan akses setara menunjukkan pelayanan yang berkualitas.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Harmonis"
  },
  {
    category: "TKP",
    subcategory: "Pelayanan Publik",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengkoordinasikan pelayanan publik dengan instansi lain. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Membangun komunikasi yang efektif, menyepakati prosedur bersama, dan memastikan koordinasi yang berkelanjutan",
      "B. Mengabaikan koordinasi",
      "C. Bekerja sendiri tanpa koordinasi",
      "D. Menyalahkan instansi lain atas ketidakkoordinasian",
      "E. Membiarkan pelayanan tidak terkoordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Membangun komunikasi efektif, menyepakati prosedur bersama, dan memastikan koordinasi berkelanjutan menunjukkan kemampuan kerja sama.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menjalin kerja sama dengan organisasi masyarakat sipil. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Memahami kebutuhan organisasi, menawarkan kolaborasi yang saling menguntungkan, dan membangun kepercayaan",
      "B. Mengabaikan peran organisasi masyarakat sipil",
      "C. Hanya bekerja sama dengan organisasi tertentu",
      "D. Membiarkan organisasi bekerja sendiri",
      "E. Mengkritik organisasi yang tidak bekerja sama"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan berorientasi pelayanan. Memahami kebutuhan, menawarkan kolaborasi, dan membangun kepercayaan menunjukkan kemampuan membangun jejaring.",
    explanationSource: "Core values ASN: Kolaboratif, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada peluang kerja sama dengan instansi pemerintah lain. Bagaimana Anda memanfaatkan peluang ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi manfaat kerja sama, menyusun proposal, berkoordinasi dengan instansi terkait, dan mengevaluasi hasil",
      "B. Mengabaikan peluang kerja sama",
      "C. Menunggu instansi lain mengajak",
      "D. Menolak kerja sama tanpa pertimbangan",
      "E. Membiarkan peluang terlewat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kolaboratif. Mengidentifikasi manfaat, menyusun proposal, berkoordinasi, dan mengevaluasi menunjukkan inisiatif dalam membangun jejaring.",
    explanationSource: "Core values ASN: Adaptif, Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun jaringan kerja sama dengan sektor swasta dalam program pemberdayaan masyarakat. Bagaimana Anda merancang kerja sama ini?",
    options: JSON.stringify([
      "A. Mengidentifikasi kebutuhan sektor swasta, merancang program yang saling menguntungkan, dan memastikan akuntabilitas",
      "B. Mengabaikan kebutuhan sektor swasta",
      "C. Hanya meminta bantuan tanpa memberikan manfaat",
      "D. Membiarkan kerja sama tanpa perencanaan",
      "E. Mengkritik sektor swasta"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan kolaboratif. Mengidentifikasi kebutuhan, merancang program saling menguntungkan, dan memastikan akuntabilitas menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk berkoordinasi dengan tokoh masyarakat dalam program pembangunan. Apa yang sebaiknya Anda lakukan?",
    options: JSON.stringify([
      "A. Menghormati peran tokoh masyarakat, berkomunikasi secara efektif, dan melibatkan mereka dalam pengambilan keputusan",
      "B. Mengabaikan peran tokoh masyarakat",
      "C. Memutuskan tanpa melibatkan tokoh masyarakat",
      "D. Menyalahkan tokoh masyarakat atas ketidakberhasilan program",
      "E. Membiarkan program tanpa dukungan tokoh masyarakat"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kolaboratif. Menghormati peran, berkomunikasi efektif, dan melibatkan dalam pengambilan keputusan menunjukkan kemampuan membangun hubungan.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik kepentingan antara instansi Anda dengan mitra kerja. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Memahami akar konflik, mencari solusi yang menguntungkan kedua belah pihak, dan membangun kembali kepercayaan",
      "B. Mengabaikan konflik",
      "C. Memihak instansi Anda",
      "D. Menyalahkan mitra kerja",
      "E. Membiarkan konflik berlanjut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan harmonis. Memahami akar konflik, mencari solusi saling menguntungkan, dan membangun kembali kepercayaan menunjukkan kemampuan resolusi konflik.",
    explanationSource: "Core values ASN: Kompeten, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengevaluasi efektivitas jaringan kerja sama yang sudah terbentuk. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Menentukan indikator keberhasilan, mengumpulkan data, menganalisis dampak, dan memberikan rekomendasi perbaikan",
      "B. Mengabaikan evaluasi",
      "C. Hanya melaporkan kegiatan tanpa analisis",
      "D. Menyembunyikan data yang tidak sesuai harapan",
      "E. Menghentikan kerja sama tanpa evaluasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menentukan indikator, mengumpulkan data, menganalisis, dan memberikan rekomendasi menunjukkan profesionalisme dalam evaluasi.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Jejaring Kerja",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada organisasi internasional yang ingin bekerja sama dengan instansi Anda. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mempelajari profil organisasi, mengidentifikasi kesesuaian dengan program, dan berkoordinasi dengan atasan",
      "B. Mengabaikan tawaran kerja sama",
      "C. Menolak tanpa pertimbangan",
      "D. Menerima tanpa studi kelayakan",
      "E. Membiarkan tawaran tanpa respons"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari profil, mengidentifikasi kesesuaian, dan berkoordinasi menunjukkan profesionalisme dalam menanggapi peluang kerja sama.",
    explanationSource: "Core values ASN: Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menggunakan teknologi informasi dalam pelayanan publik. Apa yang sebaiknya Anda pastikan?",
    options: JSON.stringify([
      "A. Sistem mudah digunakan, aman, dan dapat diakses oleh semua warga",
      "B. Sistem yang rumit agar terlihat canggih",
      "C. Sistem yang hanya bisa diakses oleh orang tertentu",
      "D. Sistem yang tidak aman",
      "E. Sistem yang sulit diakses"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus berorientasi pelayanan dan kompeten. Memastikan sistem mudah digunakan, aman, dan dapat diakses semua warga menunjukkan pelayanan yang inklusif.",
    explanationSource: "Core values ASN: Berorientasi Pelayanan, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada teknologi baru yang dapat meningkatkan efisiensi kerja. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mempelajari teknologi baru, mengidentifikasi manfaat, dan mengusulkan penerapan jika sesuai",
      "B. Mengabaikan teknologi baru",
      "C. Menolak menggunakan teknologi baru",
      "D. Mengkritik teknologi baru",
      "E. Membiarkan teknologi berlalu"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari, mengidentifikasi manfaat, dan mengusulkan penerapan menunjukkan keterbukaan terhadap inovasi.",
    explanationSource: "Core values ASN: Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengamankan data sensitif instansi dari ancaman siber. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Mengimplementasikan keamanan berlapis, melatih staf, memantau ancaman, dan menyiapkan rencana respons insiden",
      "B. Mengabaikan keamanan siber",
      "C. Hanya menggunakan antivirus",
      "D. Menyimpan data tanpa enkripsi",
      "E. Membiarkan data tanpa perlindungan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Mengimplementasikan keamanan berlapis, melatih staf, memantau, dan menyiapkan rencana respons menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada staf yang tidak paham menggunakan teknologi informasi. Bagaimana Anda membantu?",
    options: JSON.stringify([
      "A. Memberikan pelatihan, pendampingan, dan dukungan teknis",
      "B. Mengabaikan ketidakpahaman staf",
      "C. Menyalahkan staf atas ketidakmampuan",
      "D. Membiarkan staf tanpa bantuan",
      "E. Mengambil alih pekerjaan staf"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Memberikan pelatihan, pendampingan, dan dukungan menunjukkan kemampuan membangun kapasitas tim.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mengembangkan aplikasi pelayanan publik berbasis mobile. Bagaimana Anda merancangnya?",
    options: JSON.stringify([
      "A. Memahami kebutuhan pengguna, merancang antarmuka yang intuitif, menguji secara menyeluruh, dan menyediakan dukungan",
      "B. Merancang tanpa memahami kebutuhan pengguna",
      "C. Mengabaikan aspek keamanan",
      "D. Merancang aplikasi yang rumit",
      "E. Mengabaikan pengujian"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan berorientasi pelayanan. Memahami kebutuhan, merancang intuitif, menguji, dan menyediakan dukungan menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Berorientasi Pelayanan"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada potensi penyalahgunaan data pribadi warga oleh pihak yang tidak bertanggung jawab. Bagaimana Anda melindunginya?",
    options: JSON.stringify([
      "A. Mengimplementasikan kebijakan privasi data, mengenkripsi data sensitif, memantau akses, dan melaporkan pelanggaran",
      "B. Mengabaikan privasi data",
      "C. Menyimpan data tanpa perlindungan",
      "D. Membiarkan data tanpa pengawasan",
      "E. Menyalahkan pihak lain atas penyalahgunaan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Mengimplementasikan kebijakan privasi, mengenkripsi, memantau, dan melaporkan menunjukkan komitmen pada perlindungan data.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyimpan dokumen penting secara digital. Apa yang sebaiknya Anda pastikan?",
    options: JSON.stringify([
      "A. Dokumen di-backup secara berkala, disimpan di tempat yang aman, dan hanya bisa diakses oleh yang berwenang",
      "B. Menyimpan tanpa backup",
      "C. Menyimpan di tempat yang tidak aman",
      "D. Membagikan akses kepada semua orang",
      "E. Mengabaikan keamanan dokumen"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus akuntabel dan kompeten. Memastikan backup berkala, penyimpanan aman, dan akses terbatas menunjukkan pengelolaan dokumen yang profesional.",
    explanationSource: "Core values ASN: Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Teknologi Informasi",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada tren teknologi baru yang relevan dengan pekerjaan Anda. Bagaimana Anda mengikuti perkembangan ini?",
    options: JSON.stringify([
      "A. Membaca literatur, mengikuti pelatihan, berdiskusi dengan ahli, dan menerapkan yang relevan",
      "B. Mengabaikan perkembangan teknologi",
      "C. Menunggu pelatihan resmi",
      "D. Mengkritik teknologi baru",
      "E. Membiarkan perkembangan tanpa respons"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Membaca literatur, mengikuti pelatihan, berdiskusi, dan menerapkan menunjukkan dedikasi pada pengembangan diri.",
    explanationSource: "Core values ASN: Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk menyelesaikan tugas yang membutuhkan kerja sama dengan banyak pihak. Bagaimana Anda mengkoordinasikan?",
    options: JSON.stringify([
      "A. Mengidentifikasi peran masing-masing, berkomunikasi secara efektif, dan memastikan koordinasi yang baik",
      "B. Bekerja sendiri tanpa koordinasi",
      "C. Menyerahkan koordinasi kepada orang lain",
      "D. Mengabaikan kerja sama",
      "E. Membiarkan tugas tanpa koordinasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kolaboratif dan kompeten. Mengidentifikasi peran, berkomunikasi efektif, dan memastikan koordinasi menunjukkan kemampuan kerja tim.",
    explanationSource: "Core values ASN: Kolaboratif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada rekan kerja yang sering melakukan kesalahan dalam pekerjaan. Bagaimana Anda membantu?",
    options: JSON.stringify([
      "A. Berdiskusi secara privatu, memberikan umpan balik konstruktif, dan menawarkan bantuan",
      "B. Mengabaikan kesalahan rekan kerja",
      "C. Melaporkan langsung ke atasan tanpa berdiskusi",
      "D. Menyalahkan rekan kerja",
      "E. Mengambil alih pekerjaan rekan kerja"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kolaboratif. Berdiskusi privatu, memberikan umpan balik konstruktif, dan menawarkan bantuan menunjukkan sikap yang profesional.",
    explanationSource: "Core values ASN: Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk memimpin proyek besar dengan tenggat waktu yang ketat. Bagaimana Anda mengelola proyek ini?",
    options: JSON.stringify([
      "A. Menyusun perencanaan matang, mengalokasikan sumber daya, memantau progres, dan mengambil tindakan korektif jika diperlukan",
      "B. Memulai tanpa perencanaan",
      "C. Menyerahkan pengelolaan kepada orang lain",
      "D. Mengabaikan tenggat waktu",
      "E. Membiarkan proyek tanpa pengawasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan akuntabel. Menyusun perencanaan, mengalokasikan sumber daya, memantau, dan mengambil tindakan korektif menunjukkan kemampuan manajemen proyek.",
    explanationSource: "Core values ASN: Kompeten, Akuntabel"
  },
  {
    category: "TKP",
    subcategory: "Profesionalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada aturan baru yang perlu diterapkan di instansi Anda. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mempelajari aturan baru, memahami implikasi, dan mengkomunikasikan kepada staf",
      "B. Mengabaikan aturan baru",
      "C. Menolak menerapkan aturan baru",
      "D. Menyalahkan pembuat aturan",
      "E. Membiarkan aturan tanpa implementasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus adaptif dan kompeten. Mempelajari, memahami implikasi, dan mengkomunikasikan menunjukkan ketaatan pada aturan dan profesionalisme.",
    explanationSource: "Core values ASN: Adaptif, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada pemuda yang mulai menyebarkan paham radikalisme di media sosial. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Mengingatkan tentang dampak buruk, mengajak berdiskusi, dan memberikan informasi yang benar",
      "B. Ikut menyebarkan paham radikalisme",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Melaporkan ke pihak berwenang tanpa berdiskusi",
      "E. Menyimpan informasi sebagai alat pemerasan"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan kompeten. Mengingatkan dampak buruk, mengajak berdiskusi, dan memberikan informasi benar menunjukkan pendekatan yang efektif.",
    explanationSource: "Core values ASN: Harmonis, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk membangun ketahanan masyarakat terhadap paham radikalisme di daerah tugas Anda. Bagaimana Anda melakukannya?",
    options: JSON.stringify([
      "A. Mengidentifikasi kerentanan, merancang program pencegahan, melibatkan komunitas, dan mengevaluasi dampak",
      "B. Mengabaikan kerentanan masyarakat",
      "C. Hanya fokus pada penegakan hukum",
      "D. Mengabaikan peran masyarakat",
      "E. Membiarkan paham radikalisme menyebar"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan kolaboratif. Mengidentifikasi kerentanan, merancang program, melibatkan komunitas, dan mengevaluasi menunjukkan pendekatan komprehensif.",
    explanationSource: "Core values ASN: Kompeten, Kolaboratif, Adaptif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada upaya untuk merekrut anggota ASN untuk paham radikalisme. Bagaimana Anda mencegahnya?",
    options: JSON.stringify([
      "A. Membangun kesadaran, memberikan pemahaman tentang bahaya radikalisme, dan melaporkan aktivitas mencurigakan",
      "B. Mengabaikan upaya rekrutmen",
      "C. Ikut direkrut",
      "D. Menyimpan informasi untuk kepentingan pribadi",
      "E. Membiarkan rekrutmen berlangsung"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan akuntabel. Membangun kesadaran, memberikan pemahaman, dan melaporkan menunjukkan komitmen pada pertahanan institusi.",
    explanationSource: "Core values ASN: Loyal, Akuntabel, Kompeten"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk mensosialisasikan pentingnya persatuan dan kesatuan kepada masyarakat. Apa pendekatan yang sebaiknya Anda gunakan?",
    options: JSON.stringify([
      "A. Menggunakan contoh nyata, melibatkan tokoh masyarakat, dan membuat kegiatan yang menyatukan",
      "B. Hanya menyampaikan teori",
      "C. Menggunakan pendekatan yang menggurui",
      "D. Mengabaikan perbedaan",
      "E. Hanya menyampaikan materi tanpa interaksi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus harmonis dan berorientasi pelayanan. Menggunakan contoh nyata, melibatkan tokoh, dan kegiatan menyatukan menunjukkan pendekatan yang efektif.",
    explanationSource: "Core values ASN: Harmonis, Berorientasi Pelayanan, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sedang",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada konflik yang dimanfaatkan untuk menyebarkan paham radikalisme. Bagaimana Anda menanganinya?",
    options: JSON.stringify([
      "A. Memahami akar konflik, memfasilitasi dialog, mencegah eskalasi, dan memberikan pemahaman tentang persatuan",
      "B. Mengabaikan konflik",
      "C. Memihak salah satu pihak",
      "D. Melarang diskusi",
      "E. Membiarkan konflik berlanjut"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan harmonis. Memahami akar konflik, memfasilitasi dialog, dan mencegah eskalasi menunjukkan kemampuan resolusi konflik.",
    explanationSource: "Core values ASN: Kompeten, Harmonis, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "sulit",
    cognitiveLevel: "C3",
    question: "Anda diminta untuk merancang program pencegahan radikalisme yang efektif untuk komunitas rentan. Bagaimana Anda merancangnya?",
    options: JSON.stringify([
      "A. Memahami karakteristik komunitas, merancang program yang kontekstual, melibatkan pemangku kepentingan, dan mengevaluasi dampak",
      "B. Menyalin program dari tempat lain",
      "C. Mengabaikan kebutuhan komunitas",
      "D. Merancang program tanpa melibatkan komunitas",
      "E. Mengabaikan pengembangan program"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus kompeten dan adaptif. Memahami karakteristik, merancang kontekstual, melibatkan pemangku kepentingan, dan mengevaluasi menunjukkan profesionalisme.",
    explanationSource: "Core values ASN: Kompeten, Adaptif, Kolaboratif"
  },
  {
    category: "TKP",
    subcategory: "Anti-Radikalisme",
    difficulty: "mudah",
    cognitiveLevel: "C3",
    question: "Anda mengetahui bahwa ada informasi yang dapat memicu kebencian antar kelompok. Bagaimana Anda merespons?",
    options: JSON.stringify([
      "A. Tidak menyebarkan informasi, memverifikasi kebenaran, dan menyebarkan informasi yang menyejukkan",
      "B. Ikut menyebarkan informasi kebencian",
      "C. Mengabaikan karena dianggap hak pribadi",
      "D. Membalas dengan informasi yang lebih provokatif",
      "E. Menyimpan informasi"
    ]),
    correctAnswer: "A",
    explanation: "ASN harus loyal dan harmonis. Tidak menyebarkan, memverifikasi, dan menyebarkan informasi menyejukkan menunjukkan komitmen pada persatuan.",
    explanationSource: "Core values ASN: Loyal, Harmonis"
  }
];

// Bobot opsi TKP (1-5): kunci = 5; sisanya 3/2/2/1 mengikuti urutan opsi.
// Deterministik — seed hanya menulis satu jawaban "terbaik" per soal.
function weightsFor(correctAnswer: string): string {
  const pool = [3, 2, 2, 1];
  const weights: Record<string, number> = {};
  let p = 0;
  for (const letter of ["A", "B", "C", "D", "E"]) {
    weights[letter] = letter === correctAnswer ? 5 : (pool[p++] ?? 1);
  }
  return JSON.stringify(weights);
}

export const tkpQuestions = rawTkpQuestions.map((q) => ({
  ...q,
  optionWeights: weightsFor(q.correctAnswer),
}));
