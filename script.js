// ============================================================
// DATA SOAL
// ============================================================

const IQ_QUESTIONS = [
    { question: '2, 4, 6, 8, 10, ?', options: ['11', '12', '13', '14'], answer: 1 },
    { question: '1, 1, 2, 3, 5, 8, 13, ?', options: ['18', '20', '21', '22'], answer: 2 },
    { question: 'Mana yang tidak termasuk?\nApel, Pisang, Wortel, Jeruk', options: ['Apel', 'Pisang', 'Wortel', 'Jeruk'], answer: 2 },
    { question: '3, 6, 12, 24, 48, ?', options: ['72', '84', '96', '108'], answer: 2 },
    { question: 'KAKI : SEPATU :: KEPALA : ?', options: ['TOPI', 'RAMBUT', 'MATA', 'LEHER'], answer: 0 },
    { question: 'Jika hari ini adalah Rabu, maka 100 hari lagi adalah hari?', options: ['Senin', 'Selasa', 'Kamis', 'Jumat'], answer: 3 },
    { question: 'Mana kata yang berbeda?', options: ['Merah', 'Biru', 'Bulat', 'Hijau'], answer: 2 },
    { question: '1/2, 2/3, 3/4, 4/5, ?', options: ['5/6', '6/7', '4/6', '5/7'], answer: 0 },
    { question: 'Jika A=1, B=2, C=3, maka IQ = ?', options: ['26', '27', '28', '29'], answer: 0 },
    { question: '81, 27, 9, 3, ?', options: ['0', '1', '2', '4'], answer: 1 },
    { question: '25, 24, 22, 19, 15, ?', options: ['10', '11', '12', '13'], answer: 0 },
    { question: 'Semua kucing adalah hewan. Semua hewan butuh makan. Maka:', options: ['Semua kucing butuh makan', 'Semua yang butuh makan adalah kucing', 'Kucing tidak butuh makan', 'Tidak dapat disimpulkan'], answer: 0 },
    { question: 'Matahari terbit di sebelah?', options: ['Utara', 'Selatan', 'Timur', 'Barat'], answer: 2 },
    { question: 'Jika 10 pekerja bisa menyelesaikan pekerjaan dalam 5 hari, berapa pekerja yang dibutuhkan untuk menyelesaikan dalam 2 hari?', options: ['20', '25', '30', '35'], answer: 1 },
    { question: '1, 4, 9, 16, 25, ?', options: ['30', '33', '35', '36'], answer: 3 },
    { question: 'Seorang ayah memiliki 3 anak. Setiap anak memiliki 2 saudara laki-laki. Berapa jumlah anak laki-laki?', options: ['2', '3', '4', '5'], answer: 1 },
    { question: '1, 2, 4, 8, 16, 32, ?', options: ['48', '56', '64', '72'], answer: 2 },
    { question: 'Berapa banyak sisi yang dimiliki kubus?', options: ['4', '6', '8', '12'], answer: 1 },
    { question: 'Jika 5 + 3 = 28, 9 + 1 = 810, 8 + 6 = 214, 5 + 4 = 19, maka 7 + 3 = ?', options: ['410', '211', '310', '49'], answer: 0 },
    { question: 'Mana yang tidak termasuk?\nSegitiga, Persegi, Lingkaran, Tabung', options: ['Segitiga', 'Persegi', 'Lingkaran', 'Tabung'], answer: 3 },
    { question: 'Jika Utara = Selatan, dan Timur = Barat, maka Tenggara = ?', options: ['Utara', 'Barat Laut', 'Timur Laut', 'Barat Daya'], answer: 1 },
    { question: 'Sebuah jam menunjukkan pukul 15:15. Berapa sudut antara jarum jam dan menit?', options: ['0\u00B0', '7,5\u00B0', '15\u00B0', '30\u00B0'], answer: 1 },
    { question: '2, 3, 5, 7, 11, ?', options: ['12', '13', '14', '15'], answer: 1 },
    { question: 'Nenek memiliki 5 kue. Ia membaginya kepada 5 cucu sehingga setiap cucu mendapat 1 kue, tetapi masih ada 1 kue di piring. Bagaimana?', options: ['Cucu terakhir mendapat kue dengan piringnya', 'Satu cucu tidak suka kue', 'Nenek juga makan', 'Tidak mungkin'], answer: 0 },
    { question: 'Jika A=1, B=2, C=3, maka D+E+F = ?', options: ['12', '13', '14', '15'], answer: 3 }
];

const DISC_QUESTIONS = [
    { situation: 'Dalam sebuah tim, saya cenderung:', options: [
        { label: 'D', text: 'Mengambil kendali dan memimpin' }, { label: 'I', text: 'Menciptakan suasana yang menyenangkan' }, { label: 'S', text: 'Mendukung keputusan bersama' }, { label: 'C', text: 'Menganalisis setiap detail dengan teliti' }
    ]},
    { situation: 'Ketika menghadapi masalah, saya:', options: [
        { label: 'D', text: 'Langsung bertindak mencari solusi' }, { label: 'I', text: 'Mendiskusikannya dengan orang lain' }, { label: 'S', text: 'Mencari pendekatan yang sudah terbukti' }, { label: 'C', text: 'Mengumpulkan data dan informasi terlebih dahulu' }
    ]},
    { situation: 'Dalam bekerja, saya lebih suka:', options: [
        { label: 'D', text: 'Tantangan dan kompetisi' }, { label: 'I', text: 'Kolaborasi dan interaksi' }, { label: 'S', text: 'Lingkungan yang stabil dan harmonis' }, { label: 'C', text: 'Prosedur dan aturan yang jelas' }
    ]},
    { situation: 'Orang lain menggambarkan saya sebagai:', options: [
        { label: 'D', text: 'Tegas dan berorientasi hasil' }, { label: 'I', text: 'Antusias dan persuasif' }, { label: 'S', text: 'Sabar dan dapat diandalkan' }, { label: 'C', text: 'Teliti dan akurat' }
    ]},
    { situation: 'Ketika berkomunikasi, saya cenderung:', options: [
        { label: 'D', text: 'Langsung ke inti pembicaraan' }, { label: 'I', text: 'Bercerita dengan penuh semangat' }, { label: 'S', text: 'Mendengarkan dengan penuh perhatian' }, { label: 'C', text: 'Menyampaikan dengan data yang akurat' }
    ]},
    { situation: 'Saya merasa paling termotivasi ketika:', options: [
        { label: 'D', text: 'Mencapai target yang sulit' }, { label: 'I', text: 'Diakui dan diapresiasi' }, { label: 'S', text: 'Bekerja dalam tim yang solid' }, { label: 'C', text: 'Pekerjaan saya sempurna dan akurat' }
    ]},
    { situation: 'Dalam pengambilan keputusan, saya:', options: [
        { label: 'D', text: 'Cepat dan berani mengambil risiko' }, { label: 'I', text: 'Mempertimbangkan perasaan orang lain' }, { label: 'S', text: 'Membutuhkan waktu untuk merenung' }, { label: 'C', text: 'Berdasarkan fakta dan logika' }
    ]},
    { situation: 'Saya kurang nyaman ketika:', options: [
        { label: 'D', text: 'Tidak ada kemajuan atau hasil' }, { label: 'I', text: 'Diabaikan atau tidak diperhatikan' }, { label: 'S', text: 'Terjadi konflik dan ketegangan' }, { label: 'C', text: 'Data tidak lengkap atau tidak akurat' }
    ]},
    { situation: 'Kontribusi terbaik saya dalam tim adalah:', options: [
        { label: 'D', text: 'Mendorong tim mencapai target' }, { label: 'I', text: 'Membangun semangat dan kreativitas' }, { label: 'S', text: 'Menjaga keharmonisan dan stabilitas' }, { label: 'C', text: 'Memastikan kualitas dan ketepatan' }
    ]},
    { situation: 'Saya lebih menyukai lingkungan yang:', options: [
        { label: 'D', text: 'Dinamis dan penuh tantangan' }, { label: 'I', text: 'Sosial dan ramah' }, { label: 'S', text: 'Tenang dan terprediksi' }, { label: 'C', text: 'Terstruktur dan terorganisir' }
    ]},
    { situation: 'Ketika stress, saya cenderung:', options: [
        { label: 'D', text: 'Menjadi lebih dominan dan memaksa' }, { label: 'I', text: 'Mencari dukungan dari orang lain' }, { label: 'S', text: 'Menarik diri dan mengalah' }, { label: 'C', text: 'Menjadi terlalu kritis dan perfeksionis' }
    ]},
    { situation: 'Saya paling puas ketika:', options: [
        { label: 'D', text: 'Berhasil memenangkan persaingan' }, { label: 'I', text: 'Membantu orang lain berkembang' }, { label: 'S', text: 'Semua berjalan dengan lancar' }, { label: 'C', text: 'Sesuatu dilakukan dengan benar' }
    ]},
    { situation: 'Teman saya akan berkata saya adalah orang yang:', options: [
        { label: 'D', text: 'Mandiri dan percaya diri' }, { label: 'I', text: 'Menyenangkan dan mudah bergaul' }, { label: 'S', text: 'Setia dan dapat diandalkan' }, { label: 'C', text: 'Cerdas dan analitis' }
    ]},
    { situation: 'Saya belajar paling baik ketika:', options: [
        { label: 'D', text: 'Langsung praktek dan mencoba' }, { label: 'I', text: 'Diskusi dan bertukar pikiran' }, { label: 'S', text: 'Melihat contoh dan mengikuti langkah' }, { label: 'C', text: 'Membaca teori dan konsep' }
    ]},
    { situation: 'Dalam menghadapi perubahan:', options: [
        { label: 'D', text: 'Saya yang memulai perubahan' }, { label: 'I', text: 'Saya mudah beradaptasi' }, { label: 'S', text: 'Saya butuh waktu untuk menyesuaikan' }, { label: 'C', text: 'Saya menganalisis dampak perubahan' }
    ]},
    { situation: 'Saya menghargai orang yang:', options: [
        { label: 'D', text: 'Berani mengambil keputusan' }, { label: 'I', text: 'Mudah bergaul dan ramah' }, { label: 'S', text: 'Konsisten dan dapat dipercaya' }, { label: 'C', text: 'Teliti dan berpikir logis' }
    ]},
    { situation: 'Kelemahan saya adalah:', options: [
        { label: 'D', text: 'Terlalu memaksa dan tidak sabar' }, { label: 'I', text: 'Terlalu impulsif dan tidak teratur' }, { label: 'S', text: 'Terlalu mudah menyerah dan pasif' }, { label: 'C', text: 'Terlalu perfeksionis dan kritis' }
    ]},
    { situation: 'Saya lebih memilih pekerjaan yang:', options: [
        { label: 'D', text: 'Memberi saya wewenang dan kontrol' }, { label: 'I', text: 'Memungkinkan saya bertemu banyak orang' }, { label: 'S', text: 'Memberikan rasa aman dan stabilitas' }, { label: 'C', text: 'Membutuhkan keahlian spesifik' }
    ]},
    { situation: 'Ketika bertemu orang baru, saya:', options: [
        { label: 'D', text: 'Menilai kompetensi mereka' }, { label: 'I', text: 'Langsung akrab dan terbuka' }, { label: 'S', text: 'Bersikap hangat tapi hati-hati' }, { label: 'C', text: 'Mengamati terlebih dahulu' }
    ]},
    { situation: 'Saya lebih mudah marah ketika:', options: [
        { label: 'D', text: 'Orang tidak mengikuti arahan saya' }, { label: 'I', text: 'Orang tidak menghargai saya' }, { label: 'S', text: 'Orang diperlakukan tidak adil' }, { label: 'C', text: 'Aturan tidak diikuti dengan benar' }
    ]},
    { situation: 'Dalam presentasi, saya lebih fokus pada:', options: [
        { label: 'D', text: 'Hasil dan kesimpulan' }, { label: 'I', text: 'Cara menyampaikan yang menarik' }, { label: 'S', text: 'Kebutuhan audiens' }, { label: 'C', text: 'Data dan fakta pendukung' }
    ]},
    { situation: 'Saya berkontribusi paling baik dalam rapat ketika:', options: [
        { label: 'D', text: 'Mengarahkan diskusi ke keputusan' }, { label: 'I', text: 'Mencairkan suasana dengan humor' }, { label: 'S', text: 'Mendukung ide orang lain' }, { label: 'C', text: 'Mengajukan pertanyaan kritis' }
    ]},
    { situation: 'Hiburan yang paling saya nikmati:', options: [
        { label: 'D', text: 'Kompetisi dan olahraga' }, { label: 'I', text: 'Pesta dan acara sosial' }, { label: 'S', text: 'Kegiatan santai bersama keluarga' }, { label: 'C', text: 'Membaca atau aktivitas individual' }
    ]},
    { situation: 'Hal terpenting dalam hidup adalah:', options: [
        { label: 'D', text: 'Prestasi dan kesuksesan' }, { label: 'I', text: 'Hubungan dan pertemanan' }, { label: 'S', text: 'Kedamaian dan kestabilan' }, { label: 'C', text: 'Pengetahuan dan kebenaran' }
    ]}
];

const MBTI_QUESTIONS = [
    { pair: 'EI', options: [{ letter: 'E', text: 'Saya lebih suka menghabiskan waktu bersama banyak orang dan mendapat energi dari interaksi sosial' }, { letter: 'I', text: 'Saya lebih suka menghabiskan waktu sendiri atau dengan segelintir orang dekat dan butuh waktu sendiri untuk mengisi energi' }]},
    { pair: 'EI', options: [{ letter: 'E', text: 'Saya lebih suka berbicara dan berpikir sambil berbicara' }, { letter: 'I', text: 'Saya lebih suka berpikir terlebih dahulu sebelum berbicara' }]},
    { pair: 'EI', options: [{ letter: 'E', text: 'Saya mudah berkenalan dengan orang baru dan memiliki banyak teman' }, { letter: 'I', text: 'Saya selektif dalam berteman dan lebih suka hubungan yang mendalam' }]},
    { pair: 'EI', options: [{ letter: 'E', text: 'Saya lebih suka kerja kelompok dan diskusi' }, { letter: 'I', text: 'Saya lebih suka bekerja sendiri dan konsentrasi penuh' }]},
    { pair: 'EI', options: [{ letter: 'E', text: 'Saya cenderung cepat bertindak dan memutuskan' }, { letter: 'I', text: 'Saya cenderung merenung dan mempertimbangkan' }]},
    { pair: 'SN', options: [{ letter: 'S', text: 'Saya lebih percaya pada fakta konkret dan pengalaman nyata' }, { letter: 'N', text: 'Saya lebih tertarik pada kemungkinan dan gambaran besar' }]},
    { pair: 'SN', options: [{ letter: 'S', text: 'Saya fokus pada apa yang terjadi saat ini' }, { letter: 'N', text: 'Saya sering memikirkan masa depan dan kemungkinan-kemungkinan' }]},
    { pair: 'SN', options: [{ letter: 'S', text: 'Saya lebih suka petunjuk langkah demi langkah yang jelas' }, { letter: 'N', text: 'Saya lebih suka menemukan cara saya sendiri' }]},
    { pair: 'SN', options: [{ letter: 'S', text: 'Saya memperhatikan detail dan hal-hal praktis sehari-hari' }, { letter: 'N', text: 'Saya lebih fokus pada konsep dan ide abstrak' }]},
    { pair: 'SN', options: [{ letter: 'S', text: 'Saya lebih suka instruksi yang spesifik dan terperinci' }, { letter: 'N', text: 'Saya lebih suka instruksi yang bersifat umum dan konseptual' }]},
    { pair: 'TF', options: [{ letter: 'T', text: 'Saya mengambil keputusan berdasarkan logika dan fakta objektif' }, { letter: 'F', text: 'Saya mengambil keputusan berdasarkan nilai pribadi dan dampak pada orang lain' }]},
    { pair: 'TF', options: [{ letter: 'T', text: 'Saya lebih mudah melihat kesalahan logika dalam argumen' }, { letter: 'F', text: 'Saya lebih mudah merasakan emosi dan kebutuhan orang lain' }]},
    { pair: 'TF', options: [{ letter: 'T', text: 'Saya mengutamakan keadilan dan kebenaran di atas perasaan' }, { letter: 'F', text: 'Saya mengutamakan keharmonisan dan perasaan orang lain' }]},
    { pair: 'TF', options: [{ letter: 'T', text: 'Saya dianggap sebagai orang yang objektif dan analitis' }, { letter: 'F', text: 'Saya dianggap sebagai orang yang empati dan pengertian' }]},
    { pair: 'TF', options: [{ letter: 'T', text: 'Saya lebih suka feedback yang jujur meskipun keras' }, { letter: 'F', text: 'Saya lebih suka feedback yang disampaikan dengan lembut' }]},
    { pair: 'JP', options: [{ letter: 'J', text: 'Saya suka membuat jadwal dan mengikuti rencana' }, { letter: 'P', text: 'Saya suka fleksibel dan mengikuti arus' }]},
    { pair: 'JP', options: [{ letter: 'J', text: 'Saya lebih suka pekerjaan selesai sebelum beristirahat' }, { letter: 'P', text: 'Saya lebih suka menikmati proses dan tidak terburu-buru' }]},
    { pair: 'JP', options: [{ letter: 'J', text: 'Saya merasa tenang dengan struktur dan rutinitas' }, { letter: 'P', text: 'Saya merasa terkekang dengan terlalu banyak aturan' }]},
    { pair: 'JP', options: [{ letter: 'J', text: 'Saya suka membuat daftar dan checklist' }, { letter: 'P', text: 'Saya lebih suka spontan dan improvisasi' }]},
    { pair: 'JP', options: [{ letter: 'J', text: 'Ketepatan waktu sangat penting bagi saya' }, { letter: 'P', text: 'Waktu hanyalah pedoman, bukan aturan mutlak' }]}
];

// ----- TES RAISEC (30 Soal - 5 per tipe) -----
const RAISEC_QUESTIONS = [
    // Realistic (R)
    { type: 'R', text: 'Memperbaiki barang elektronik atau mesin' },
    { type: 'R', text: 'Bekerja di luar ruangan (berkebun, konstruksi)' },
    { type: 'R', text: 'Mengoperasikan alat-alat teknik atau kendaraan berat' },
    { type: 'R', text: 'Membuat kerajinan tangan atau merakit sesuatu' },
    { type: 'R', text: 'Kegiatan fisik seperti olahraga atau hiking' },
    // Investigative (I)
    { type: 'I', text: 'Melakukan eksperimen ilmiah di laboratorium' },
    { type: 'I', text: 'Mempelajari cara kerja sesuatu secara mendalam' },
    { type: 'I', text: 'Menganalisis data dan menemukan pola' },
    { type: 'I', text: 'Membaca jurnal ilmiah atau artikel riset' },
    { type: 'I', text: 'Memecahkan teka-teki atau masalah matematis' },
    // Artistic (A)
    { type: 'A', text: 'Menggambar, melukis, atau membuat karya seni' },
    { type: 'A', text: 'Menulis cerita, puisi, atau konten kreatif' },
    { type: 'A', text: 'Bermain alat musik atau bernyanyi' },
    { type: 'A', text: 'Mendesain grafis, fashion, atau interior' },
    { type: 'A', text: 'Fotografi atau videografi' },
    // Social (S)
    { type: 'S', text: 'Mengajar atau melatih orang lain' },
    { type: 'S', text: 'Menjadi relawan kegiatan sosial atau kemanusiaan' },
    { type: 'S', text: 'Mendengarkan dan membantu orang yang kesulitan' },
    { type: 'S', text: 'Bekerja di bidang pelayanan masyarakat' },
    { type: 'S', text: 'Merawat orang sakit atau lansia' },
    // Enterprising (E)
    { type: 'E', text: 'Memimpin tim atau organisasi' },
    { type: 'E', text: 'Menjual produk atau meyakinkan orang lain' },
    { type: 'E', text: 'Memulai bisnis atau proyek baru' },
    { type: 'E', text: 'Bernegosiasi dan membuat kesepakatan' },
    { type: 'E', text: 'Berbicara di depan umum atau presentasi' },
    // Conventional (C)
    { type: 'C', text: 'Mengatur data dan membuat laporan keuangan' },
    { type: 'C', text: 'Bekerja dengan angka dan spreadsheet' },
    { type: 'C', text: 'Mengikuti prosedur dan aturan yang jelas' },
    { type: 'C', text: 'Mengarsipkan dokumen dan menjaga kerapihan' },
    { type: 'C', text: 'Menjadwalkan kegiatan dan mengelola administrasi' }
];

// ============================================================
// DATA HASIL & REFERENSI
// ============================================================

const IQ_RESULTS = [
    { min: 0, max: 5, label: 'Perlu Pengembangan', iq: 70, desc: 'Skor ini menunjukkan potensi yang masih perlu dikembangkan. Jangan berkecil hati, IQ dapat ditingkatkan melalui latihan dan pembelajaran.', recommendations: ['Perbanyak membaca buku dan artikel', 'Latih kemampuan berpikir logis dengan puzzle', 'Ikuti kursus atau pelatihan online', 'Diskusikan topik kompleks dengan teman', 'Praktekkan tes IQ secara rutin'] },
    { min: 6, max: 10, label: 'Rata-rata', iq: 90, desc: 'Anda memiliki kecerdasan pada tingkat rata-rata. Anda mampu memahami konsep-konsep dasar dan menyelesaikan masalah sehari-hari dengan baik.', recommendations: ['Terus asah kemampuan dengan membaca', 'Coba pelajari skill baru secara berkala', 'Latih kemampuan analitis dengan game strategi', 'Ikut komunitas diskusi atau debat', 'Tantang diri dengan masalah yang lebih kompleks'] },
    { min: 11, max: 15, label: 'Di Atas Rata-rata', iq: 110, desc: 'Anda memiliki kecerdasan di atas rata-rata. Anda mampu memahami ide-ide kompleks dan menyelesaikan masalah dengan baik.', recommendations: ['Pertimbangkan pendidikan lanjutan', 'Kembangkan karier di bidang yang menantang', 'Pelajari hal-hal di luar zona nyaman', 'Ajarkan orang lain untuk memperdalam pemahaman', 'Ambil proyek-proyek yang membutuhkan pemikiran kritis'] },
    { min: 16, max: 20, label: 'Cerdas (Superior)', iq: 130, desc: 'Anda memiliki kecerdasan superior! Anda mampu menangani masalah yang sangat kompleks dan belajar dengan cepat.', recommendations: ['Kejar pendidikan tinggi atau spesialisasi', 'Pertimbangkan karier di bidang penelitian, STEM, atau professi', 'Kembangkan bakat kepemimpinan', 'Berbagi pengetahuan melalui mentoring', 'Cari tantangan intelektual yang terus-menerus'] },
    { min: 21, max: 25, label: 'Sangat Cerdas (Genius)', iq: 145, desc: 'Anda memiliki kecerdasan pada level genius! Kemampuan analitis dan pemecahan masalah Anda luar biasa.', recommendations: ['Pertimbangkan karier di bidang inovasi dan riset', 'Kembangkan proyek-proyek berdampak besar', 'Bergabung dengan komunitas intelektual tinggi', 'Publikasikan pemikiran dan ide-ide Anda', 'Gunakan kecerdasan untuk memberi dampak positif bagi masyarakat'] }
];

const DISC_RESULTS = {
    D: { name: 'Dominance', color: '#e74c3c', desc: 'Anda adalah tipe Dominance (D) - Tegas, berorientasi hasil, dan suka tantangan. Anda adalah pemimpin alami yang tidak takut mengambil risiko dan membuat keputusan sulit.', positive: ['Berani mengambil keputusan', 'Orientasi hasil yang kuat', 'Pemimpin yang tegas', 'Efisien dan produktif', 'Berorientasi pada solusi'], negative: ['Kurang sabar', 'Terkesan terlalu memaksa', 'Kurang peka terhadap perasaan orang lain', 'Cenderung otoriter', 'Kurang mendengarkan masukan'], strengths: ['Kepemimpinan', 'Pengambilan keputusan', 'Manajemen krisis', 'Inisiatif tinggi', 'Ketahanan dalam tekanan'], careers: ['CEO/Direktur', 'Manajer Proyek', 'Pengusaha', 'Militer/Polisi', 'Hukum/Jaksa'], communication: ['Gunakan bahasa yang tegas dan langsung', 'Fokus pada hasil dan tujuan', 'Sampaikan poin utama terlebih dahulu', 'Hindari detail yang tidak perlu', 'Tunjukkan rasa percaya diri'], development: ['Belajar mendengarkan aktif', 'Kembangkan empati', 'Latih kesabaran', 'Hargai pendapat orang lain', 'Belajar mendelegasikan'] },
    I: { name: 'Influence', color: '#f39c12', desc: 'Anda adalah tipe Influence (I) - Ramah, antusias, dan suka bersosialisasi. Anda pandai membangun hubungan dan mempengaruhi orang lain dengan kepribadian yang karismatik.', positive: ['Mudah bergaul', 'Komunikator ulung', 'Antusias dan energik', 'Kreatif dan inovatif', 'Membangun hubungan dengan cepat'], negative: ['Kurang teratur', 'Terlalu emosional', 'Kurang fokus pada detail', 'Cenderung impulsif', 'Sulit mengatakan tidak'], strengths: ['Komunikasi', 'Negosiasi', 'Membangun networking', 'Public speaking', 'Kreativitas'], careers: ['Marketing/PR', 'Sales', 'Public Relations', 'Hiburan/Media', 'Konsultan'], communication: ['Gunakan pendekatan yang hangat', 'Berikan apresiasi dan pujian', 'Ajak diskusi dan tukar pikiran', 'Gunakan visual dan cerita', 'Ciptakan suasana yang menyenangkan'], development: ['Belajar mengatur waktu', 'Kembangkan konsistensi', 'Perhatikan detail', 'Belajar menerima kritik', 'Fokus pada follow-through'] },
    S: { name: 'Steadiness', color: '#2ecc71', desc: 'Anda adalah tipe Steadiness (S) - Sabar, setia, dan dapat diandalkan. Anda adalah pendukung tim yang solid dan selalu menjaga keharmonisan dalam lingkungan sekitar.', positive: ['Sabar dan konsisten', 'Setia dan dapat diandalkan', 'Pendengar yang baik', 'Menjaga keharmonisan', 'Empati yang tinggi'], negative: ['Terlalu pasif', 'Sulit beradaptasi dengan perubahan', 'Cenderung mengalah', 'Kurang asertif', 'Khawatir berlebihan'], strengths: ['Kesetiaan', 'Kesabaran', 'Teamwork', 'Konsistensi', 'Empati'], careers: ['Administrasi', 'HR/SDM', 'Konseling', 'Pelayanan Masyarakat', 'Perawat/Guru'], communication: ['Gunakan pendekatan yang lembut', 'Beri waktu untuk merespon', 'Tunjukkan empati', 'Jaga nada bicara yang tenang', 'Hindari tekanan dan konfrontasi'], development: ['Belajar mengatakan tidak', 'Kembangkan keberanian mengambil risiko', 'Latih asertivitas', 'Terbuka terhadap perubahan', 'Ambil inisiatif lebih sering'] },
    C: { name: 'Compliance', color: '#3498db', desc: 'Anda adalah tipe Compliance (C) - Teliti, analitis, dan perfeksionis. Anda memiliki standar kualitas yang tinggi dan selalu bekerja berdasarkan fakta dan data.', positive: ['Teliti dan akurat', 'Analitis dan logis', 'Perfeksionis', 'Terorganisir', 'Berpikir sistematis'], negative: ['Terlalu kritis', 'Kaku terhadap aturan', 'Terlalu perfeksionis', 'Kurang fleksibel', 'Cenderung overthinking'], strengths: ['Analisis data', 'Quality control', 'Pemecahan masalah kompleks', 'Perencanaan', 'Sistematis'], careers: ['Akuntan', 'Analis Data', 'Peneliti', 'IT/Programmer', 'Quality Assurance'], communication: ['Sajikan data dan fakta', 'Gunakan bahasa yang presisi', 'Berikan waktu untuk menganalisis', 'Siapkan dokumentasi', 'Hindari generalisasi'], development: ['Belajar fleksibel', 'Kembangkan toleransi terhadap ambiguitas', 'Latih pengambilan keputusan cepat', 'Belajar melihat gambaran besar', 'Kembangkan hubungan interpersonal'] }
};

const MBTI_TYPES = {
    'INTJ': { name: 'The Architect', desc: 'Pemikir strategis dengan visi masa depan yang kuat. Mandiri, analitis, dan selalu punya rencana.', strengths: ['Berpikir strategis', 'Visi jangka panjang', 'Kemandirian', 'Analitis dan logis', 'Berstandar tinggi'], weaknesses: ['Terlalu perfeksionis', 'Kurang peka sosial', 'Sulit mengekspresikan perasaan', 'Terkesan sombong', 'Terlalu kritis'], careers: ['Arsitek', 'Insinyur', 'Ilmuwan', 'Pengembang Software', 'Konsultan Manajemen', 'Pemimpin Proyek'], relationships: ['Cenderung mandiri dalam hubungan', 'Menghargai pasangan yang cerdas', 'Setia tapi butuh ruang pribadi', 'Komunikasi langsung dan jujur'] },
    'INTP': { name: 'The Thinker', desc: 'Pemikir logis yang suka menganalisis segala sesuatu. Kreatif, inovatif, dan selalu ingin tahu.', strengths: ['Kreativitas', 'Pemikiran logis', 'Rasa ingin tahu tinggi', 'Objektif', 'Adaptif secara intelektual'], weaknesses: ['Sulit memutuskan', 'Kurang praktis', 'Canggung sosial', 'Terlalu analitis', 'Kurang peka perasaan'], careers: ['Ilmuwan', 'Pengembang Software', 'Dosen/Akademisi', 'Penulis Teknis', 'Analis Sistem'], relationships: ['Menghargai kebebasan intelektual', 'Komunikasi berbasis ide', 'Kurang ekspresif secara emosional', 'Mencari pasangan yang merangsang intelektual'] },
    'ENTJ': { name: 'The Commander', desc: 'Pemimpin alami yang karismatik dan tegas. Berorientasi tujuan, efisien, dan visioner.', strengths: ['Kepemimpinan kuat', 'Visioner', 'Pengambil keputusan', 'Efisien dan efektif', 'Percaya diri'], weaknesses: ['Terlalu dominan', 'Kurang sabar', 'Kaku dan keras kepala', 'Kurang empati', 'Workaholic'], careers: ['CEO/Eksekutif', 'Pengusaha', 'Konsultan', 'Pemimpin Proyek', 'Pengacara', 'Manajer Senior'], relationships: ['Menghargai pasangan yang setara', 'Komunikasi langsung', 'Mendukung ambisi pasangan', 'Cenderung memimpin hubungan'] },
    'ENTP': { name: 'The Debater', desc: 'Inovator yang energik dengan pemikiran out-of-the-box. Suka debat dan tantangan intelektual.', strengths: ['Inovatif', 'Pandai berdebat', 'Energik', 'Adaptif', 'Kreatif'], weaknesses: ['Argumentatif', 'Kurang konsisten', 'Kurang detail', 'Cepat bosan', 'Kurang sensitif'], careers: ['Pengusaha', 'Jurnalis', 'Pengacara', 'Konsultan Inovasi', 'Pemasar Digital'], relationships: ['Mencari stimulasi intelektual', 'Suka debat sehat', 'Butuh kebebasan', 'Kreatif dalam hubungan'] },
    'INFJ': { name: 'The Advocate', desc: 'Idealis dengan intuisi kuat dan kepedulian tinggi pada sesama. Bijaksana, kreatif, dan berprinsip.', strengths: ['Empati tinggi', 'Idealis', 'Bijaksana', 'Kreatif', 'Berprinsip'], weaknesses: ['Terlalu sensitif', 'Perfeksionis', 'Sulit membuka diri', 'Cenderung kelelahan', 'Overthinking'], careers: ['Psikolog', 'Konselor', 'Penulis', 'Dosen', 'HR Manager', 'Pekerja Sosial'], relationships: ['Hubungan yang dalam dan bermakna', 'Sangat setia', 'Butuh koneksi emosional', 'Romantis dan perhatian'] },
    'INFP': { name: 'The Mediator', desc: 'Jiwa bebas yang idealis dan kreatif. Penuh empati, setia pada nilai-nilai pribadi, dan selalu mencari makna.', strengths: ['Kreativitas', 'Empati', 'Idealis', 'Adaptif', 'Setia pada nilai'], weaknesses: ['Terlalu sensitif', 'Kurang praktis', 'Sulit mengambil keputusan', 'Cenderung mengkritik diri', 'Mudah kecewa'], careers: ['Penulis', 'Seniman', 'Konselor', 'Desainer', 'Psikolog', 'Musisi'], relationships: ['Mencari makna dalam hubungan', 'Romantis dan idealis', 'Sangat setia', 'Butuh pasangan yang pengertian'] },
    'ENFJ': { name: 'The Protagonist', desc: 'Karismatik dan inspiratif dengan kemampuan memimpin yang alami. Sangat peduli pada perkembangan orang lain.', strengths: ['Karismatik', 'Komunikator ulung', 'Empati', 'Menginspirasi', 'Terorganisir'], weaknesses: ['Terlalu idealis', 'Cenderung mengabaikan diri', 'Terlalu sensitif', 'Sulit menerima kritik', 'Ingin menyenangkan semua orang'], careers: ['Manajer HR', 'Konselor', 'Pemimpin Organisasi', 'Guru/Dosen', 'Public Relations'], relationships: ['Sangat perhatian', 'Membangun hubungan mendalam', 'Mendukung pasangan', 'Butuh apresiasi'] },
    'ENFP': { name: 'The Campaigner', desc: 'Antusias, kreatif, dan sosial. Jiwa bebas yang selalu mencari petualangan dan koneksi dengan orang lain.', strengths: ['Antusias', 'Kreatif', 'Sosial', 'Adaptif', 'Optimis'], weaknesses: ['Kurang fokus', 'Terlalu emosional', 'Kurang teratur', 'Sulit memutuskan', 'Mudah stres'], careers: ['Kreatif/Marketing', 'Jurnalis', 'Public Relations', 'Desainer', 'Konsultan', 'Entertainment'], relationships: ['Butuh variasi dan petualangan', 'Romantis dan ekspresif', 'Sosial dan ramah', 'Mencari koneksi emosional'] },
    'ISTJ': { name: 'The Logistician', desc: 'Praktis, bertanggung jawab, dan dapat diandalkan. Pekerja keras yang menjunjung tinggi tradisi dan aturan.', strengths: ['Bertanggung jawab', 'Teliti', 'Dapat diandalkan', 'Konsisten', 'Praktis'], weaknesses: ['Kaku', 'Kurang fleksibel', 'Sulit beradaptasi', 'Kurang imajinatif', 'Terlalu kritis'], careers: ['Akuntan', 'Auditor', 'Hakim', 'Administrator', 'Militer/Polisi', 'Manajer Operasional'], relationships: ['Setia dan komitmen', 'Praktis dalam cinta', 'Menghargai tradisi', 'Bertanggung jawab'] },
    'ISFJ': { name: 'The Defender', desc: 'Lembut, setia, dan selalu siap membantu. Penjaga harmoni yang sangat memperhatikan kebutuhan orang lain.', strengths: ['Setia', 'Teliti', 'Empati', 'Praktis', 'Dapat diandalkan'], weaknesses: ['Terlalu mengalah', 'Sulit mengatakan tidak', 'Khawatir berlebihan', 'Kurang asertif', 'Takut perubahan'], careers: ['Perawat', 'Guru SD', 'Pekerja Sosial', 'HR', 'Administrasi', 'Konselor'], relationships: ['Sangat setia dan berbakti', 'Perhatian pada detail', 'Menjaga harmoni', 'Romantis secara tradisional'] },
    'ESTJ': { name: 'The Executive', desc: 'Tegas, organisatoris, dan berorientasi hasil. Pemimpin yang efisien dengan standar tinggi.', strengths: ['Kepemimpinan', 'Organisatoris', 'Efisien', 'Tegas', 'Bertanggung jawab'], weaknesses: ['Kaku dan dogmatis', 'Kurang empati', 'Terlalu kritis', 'Kurang fleksibel', 'Workaholic'], careers: ['Manajer', 'Pengusaha', 'Hakim', 'Politikus', 'Militer', 'Project Manager'], relationships: ['Pemimpin dalam rumah tangga', 'Menghargai tradisi', 'Bertanggung jawab', 'Praktis dan langsung'] },
    'ESFJ': { name: 'The Consul', desc: 'Sosial, peduli, dan sangat memperhatikan harmoni. Pribadi yang hangat dan selalu siap membantu.', strengths: ['Sosial', 'Peduli', 'Terorganisir', 'Praktis', 'Setia'], weaknesses: ['Terlalu sensitif', 'Membutuhkan persetujuan', 'Kaku', 'Cenderung mengabaikan diri', 'Sulit menerima perubahan'], careers: ['HR', 'Perawat', 'Guru', 'Pekerja Sosial', 'Event Organizer', 'Customer Service'], relationships: ['Sangat perhatian', 'Butuh apresiasi', 'Menjaga tradisi', 'Sosial dan ramah'] },
    'ISTP': { name: 'The Virtuoso', desc: 'Praktis, mandiri, dan suka petualangan. Ahli dalam memahami cara kerja sesuatu dan pemecah masalah alami.', strengths: ['Mandiri', 'Praktis', 'Pemecah masalah', 'Adaptif', 'Keterampilan teknis'], weaknesses: ['Kurang peka', 'Mudah bosan', 'Cenderung menyendiri', 'Kurang terencana', 'Menghindari komitmen'], careers: ['Insinyur', 'Mekanik', 'Pilot', 'Arsitek', 'Atlet', 'Teknisi'], relationships: ['Mandiri dalam hubungan', 'Butuh kebebasan', 'Praktis dan tidak rumit', 'Menghargai ruang pribadi'] },
    'ISFP': { name: 'The Adventurer', desc: 'Artistik, sensitif, dan penuh perasaan. Jiwa bebas yang mengekspresikan diri melalui seni dan tindakan.', strengths: ['Artistik', 'Sensitif', 'Adaptif', 'Praktis', 'Pengamat yang baik'], weaknesses: ['Terlalu sensitif', 'Kurang terencana', 'Menghindari konflik', 'Kurang percaya diri', 'Mudah stres'], careers: ['Seniman', 'Desainer', 'Musisi', 'Fotografer', 'Pemandu Wisata', 'Chef'], relationships: ['Romantis secara diam-diam', 'Butuh ruang pribadi', 'Ekspresif melalui tindakan', 'Setia tapi mandiri'] },
    'ESTP': { name: 'The Entrepreneur', desc: 'Energik, persuasif, dan penuh aksi. Pengambil risiko yang karismatik dengan kemampuan membaca situasi yang tajam.', strengths: ['Karismatik', 'Praktis', 'Adaptif', 'Pembaca situasi', 'Berani mengambil risiko'], weaknesses: ['Impulsif', 'Kurang sabar', 'Kurang terencana', 'Cenderung provokatif', 'Menghindari komitmen'], careers: ['Pengusaha', 'Sales', 'Investor', 'Atlet', 'Polisi/Detektif', 'Pengacara'], relationships: ['Menantang dan seru', 'Butuh kebebasan', 'Karismatik', 'Praktis dan langsung'] },
    'ESFP': { name: 'The Entertainer', desc: 'Hidup, ceria, dan penuh energi. Pusat perhatian yang membuat orang di sekitarnya merasa bahagia.', strengths: ['Sosial', 'Energik', 'Adaptif', 'Antusias', 'Ramah'], weaknesses: ['Kurang fokus', 'Impulsif', 'Kurang terencana', 'Sensitif terhadap kritik', 'Kurang disiplin'], careers: ['Entertainment', 'Sales', 'Public Relations', 'Event Organizer', 'Pemandu Wisata', 'Guru'], relationships: ['Menyenangkan dan seru', 'Sangat sosial', 'Ekspresif', 'Butuh variasi dan petualangan'] }
};

const RAISEC_RESULTS = {
    R: { name: 'Realistic (Realistis)', color: '#e74c3c', desc: 'Anda bertipe Realistic — praktis, mandiri, dan suka bekerja dengan tangan. Anda menikmati kegiatan fisik, pekerjaan lapangan, dan hal-hal yang nyata dan terukur.', traits: ['Praktis dan mandiri', 'Suka kegiatan fisik', 'Terampil menggunakan alat', 'Terus terang dan jujur', 'Kurang suka teori abstrak'], strengths: ['Keterampilan teknis dan mekanik', 'Ketahanan fisik', 'Pemecahan masalah praktis', 'Kemandirian', 'Ketelitian dalam tugas fisik'], careers: ['Insinyur/Teknisi', 'Arsitek', 'Mekanik', 'Tukang/Kontraktor', 'Pilot', 'Atlet/Instruktur Olahraga', 'Chef', 'Ahli Forensik'], education: ['SMK/Teknik', 'Teknik Sipil', 'Teknik Mesin', 'Arsitektur', 'Ilmu Keolahragaan'], workplace: 'Lingkungan kerja yang praktis, hands-on, dan terstruktur dengan tugas-tugas fisik yang jelas.' },
    I: { name: 'Investigative (Investigatif)', color: '#3498db', desc: 'Anda bertipe Investigative — analitis, intelektual, dan suka memecahkan masalah. Anda menikmati riset, eksperimen, dan memahami hal-hal kompleks.', traits: ['Analitis dan logis', 'Rasa ingin tahu tinggi', 'Suka riset dan data', 'Mandiri dalam berpikir', 'Kurang suka rutinitas'], strengths: ['Pemikiran kritis dan analitis', 'Kemampuan riset', 'Pemecahan masalah kompleks', 'Kreativitas ilmiah', 'Kemampuan matematis'], careers: ['Ilmuwan/Peneliti', 'Dokter', 'Insinyur', 'Programmer/Analis Sistem', 'Psikolog', 'Farmasi', 'Ahli Biologi/Kimia', 'Data Scientist'], education: ['Kedokteran', 'Teknik', 'Ilmu Komputer', 'Biologi/Kimia/Fisika', 'Psikologi', 'Matematika/Statistika'], workplace: 'Lingkungan kerja yang merangsang intelektual, penuh tantangan, dan memberi kebebasan untuk mengeksplorasi ide.' },
    A: { name: 'Artistic (Artistik)', color: '#e67e22', desc: 'Anda bertipe Artistic — kreatif, ekspresif, dan inovatif. Anda menikmati seni, imajinasi, dan kebebasan berekspresi tanpa batasan.', traits: ['Kreatif dan inovatif', 'Ekspresif', 'Menghargai keindahan', 'Mandiri dan nonkonformis', 'Intuitif dan emosional'], strengths: ['Kreativitas dan imajinasi', 'Ekspresi diri', 'Kemampuan desain', 'Kepekaan estetika', 'Fleksibilitas berpikir'], careers: ['Seniman/Desainer Grafis', 'Penulis/Jurnalis', 'Musisi/Penyanyi', 'Aktor/Sutradara', 'Fotografer/Videografer', 'Arsitek', 'Fashion Designer', 'Animator'], education: ['Seni Rupa/Desain', 'Sastra/Bahasa', 'Musik', 'Film/Televisi', 'Arsitektur', 'Desain Komunikasi Visual'], workplace: 'Lingkungan kerja yang fleksibel, ekspresif, dan memberi kebebasan untuk berkreasi tanpa terlalu banyak aturan.' },
    S: { name: 'Social (Sosial)', color: '#2ecc71', desc: 'Anda bertipe Social — ramah, suka menolong, dan peduli pada sesama. Anda menikmati mengajar, konseling, dan kegiatan kemanusiaan.', traits: ['Peduli dan empati', 'Suka menolong', 'Komunikatif', 'Bekerja sama dalam tim', 'Kurang suka pekerjaan teknis'], strengths: ['Empati dan kepekaan sosial', 'Komunikasi interpersonal', 'Kemampuan mengajar', 'Kerja tim', 'Konseling dan mendengarkan'], careers: ['Guru/Dosen', 'Psikolog/Konselor', 'Perawat/Dokter', 'Pekerja Sosial', 'HR/SDM', 'Pelatih/Mentor', 'Pendeta/Ustadz', 'Terapis'], education: ['Pendidikan/Keguruan', 'Psikologi', 'Keperawatan/Kedokteran', 'Ilmu Sosial', 'Bimbingan Konseling', 'Hubungan Internasional'], workplace: 'Lingkungan kerja yang harmonis, kolaboratif, dan berfokus pada hubungan antar manusia serta nilai-nilai kemanusiaan.' },
    E: { name: 'Enterprising (Enterprising)', color: '#9b59b6', desc: 'Anda bertipe Enterprising — karismatik, ambisius, dan suka memimpin. Anda menikmati bisnis, persuasi, dan mencapai target.', traits: ['Karismatik dan persuasif', 'Berorientasi hasil', 'Ambisius', 'Percaya diri', 'Suka tantangan dan kompetisi'], strengths: ['Kepemimpinan', 'Negosiasi dan persuasi', 'Public speaking', 'Jiwa wirausaha', 'Pengambilan keputusan'], careers: ['Pengusaha/Bisnis Owner', 'Manajer/Eksekutif', 'Sales/Marketing', 'Politikus', 'Konsultan Manajemen', 'Pengacara', 'Manajer Proyek', 'Investor'], education: ['Manajemen Bisnis', 'Hukum', 'Marketing/Komunikasi', 'Ekonomi', 'Ilmu Politik', 'Hubungan Masyarakat'], workplace: 'Lingkungan kerja yang dinamis, kompetitif, dan memberi kesempatan untuk memimpin, mempengaruhi, dan mencapai target.' },
    C: { name: 'Conventional (Konvensional)', color: '#1abc9c', desc: 'Anda bertipe Conventional — teliti, teratur, dan suka dengan kepastian. Anda menikmati pekerjaan administrasi, data, dan sistem yang terstruktur.', traits: ['Teliti dan rapi', 'Terorganisir', 'Mengikuti aturan', 'Konsisten dan dapat diandalkan', 'Kurang suka perubahan drastis'], strengths: ['Keterampilan administrasi', 'Manajemen data', 'Ketelitian dan akurasi', 'Organisasi dan scheduling', 'Disiplin dan konsisten'], careers: ['Akuntan/Auditor', 'Administrasi/Office Manager', 'Petugas Pajak', 'Bankir', 'Analis Keuangan', 'Resepsionis', 'Data Entry', 'Sekretaris'], education: ['Akuntansi', 'Administrasi Perkantoran', 'Manajemen', 'Perpajakan', 'Sistem Informasi', 'Kearsipan'], workplace: 'Lingkungan kerja yang terstruktur, stabil, dengan prosedur jelas dan tugas-tugas yang terorganisir secara sistematis.' }
};

// ============================================================
// STATE
// ============================================================

let currentTest = null;
let currentQuestion = 0;
let answers = [];
let timerInterval = null;
let timeLeft = 0;
const MAX_TIME = { iq: 1800, disc: 1200, mbti: 900, raisec: 1200 };

// ============================================================
// NAVIGASI
// ============================================================

function showPage(id) {
    // Restrict Guest access
    if (isGuestUser()) {
        if (id === 'riwayat' || id === 'pengaturan') {
            id = 'home';
        }
    }
    
    // Toggle layout class for split screen login page
    const appContainer = document.getElementById('app');
    if (appContainer) {
        if (id === 'login') {
            appContainer.classList.add('login-page-active');
        } else {
            appContainer.classList.remove('login-page-active');
        }
    }
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(id);
    if (page) page.classList.add('active');

    const nav = document.getElementById('bottomNav');
    if (id === 'home' || id === 'riwayat' || id === 'pengaturan') {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }

    // Feature checks
    const guestBtn = document.getElementById('guestLoginBtn');
    if (guestBtn) guestBtn.style.display = isFeatureEnabled('guest_login') ? '' : 'none';
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.style.display = isFeatureEnabled('dark_theme') ? '' : 'none';
    const logoutBtn = document.getElementById('logoutToggleBtn');
    if (logoutBtn) logoutBtn.style.display = (id === 'home') ? 'flex' : 'none';

    if (id === 'home') {
        updateHomeStats();
        checkExpiringWarnings();
    }
    if (id === 'riwayat') renderRiwayat();
}

function updateNav(el) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
}

function confirmBack() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'confirmModal';
    overlay.innerHTML = '<div class="modal"><h3>Yakin ingin kembali?</h3><p>Jawaban Anda akan hilang jika kembali ke beranda.</p><div class="modal-actions"><button class="btn btn-secondary btn-sm" onclick="closeModal()">Batal</button><button class="btn btn-primary btn-sm" onclick="goHome()">Ya, Kembali</button></div></div>';
    document.body.appendChild(overlay);
}

function closeModal() {
    const m = document.getElementById('confirmModal');
    if (m) m.remove();
}

function closeModalById(id) {
    const m = document.getElementById(id);
    if (m) m.remove();
}

function goHome() {
    closeModal();
    stopTimer();
    showPage('home');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item:first-child').classList.add('active');
}

// ============================================================
// MEMULAI TEST
// ============================================================

function startTest(type) {
    // Activation check (superadmin bypass)
    const loggedUser = localStorage.getItem('iqku_logged_user') || '';
    if (!isSuperAdmin(loggedUser) && !isAppActivated()) {
        alert('Aplikasi belum diaktivasi. Hubungi admin untuk aktivasi.');
        return;
    }

    // Feature check
    const featureMap = { iq: 'test_iq', disc: 'test_disc', mbti: 'test_mbti', raisec: 'test_raisec' };
    if (!isFeatureEnabled(featureMap[type])) {
        alert('Fitur ini sedang dinonaktifkan oleh administrator.');
        return;
    }

    // Check profile (skip if profile feature disabled)
    const p = isFeatureEnabled('profile') ? getProfile() : { name: 'Peserta', age: 0 };
    if (isFeatureEnabled('profile') && !p) {
        pendingTest = type;
        document.getElementById('profileModal').classList.add('active');
        document.getElementById('profileName').value = '';
        document.getElementById('profileAge').value = '';
        document.getElementById('profileGender').value = '';
        document.getElementById('profileInstansi').value = '';
        return;
    }

    currentTest = type;
    currentQuestion = 0;
    answers = [];

    if (type === 'iq') {
        answers = new Array(IQ_QUESTIONS.length).fill(null);
        timeLeft = MAX_TIME.iq;
    } else if (type === 'disc') {
        answers = DISC_QUESTIONS.map(() => ({ most: null, least: null }));
        timeLeft = MAX_TIME.disc;
    } else if (type === 'mbti') {
        answers = new Array(MBTI_QUESTIONS.length).fill(null);
        timeLeft = MAX_TIME.mbti;
    } else {
        answers = new Array(RAISEC_QUESTIONS.length).fill(null);
        timeLeft = MAX_TIME.raisec;
    }

    const titles = { iq: 'Tes IQ', disc: 'Tes DISC', mbti: 'Tes MBTI', raisec: 'Tes RAISEC' };
    document.getElementById('testTitle').textContent = titles[type] || 'Tes';

    showPage('test');
    renderQuestion();
    startTimer();
}

function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            stopTimer();
            submitTest();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const s = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timer').textContent = m + ':' + s;
    document.getElementById('timer').style.color = timeLeft < 60 ? '#e74c3c' : '#f5576c';
}

// ============================================================
// RENDER SOAL
// ============================================================

function renderQuestion() {
    const container = document.getElementById('testContent');
    const total = getTestTotal();

    document.getElementById('testProgress').textContent = (currentQuestion + 1) + '/' + total;
    document.getElementById('progressFill').style.width = ((currentQuestion) / total * 100) + '%';

    if (currentTest === 'iq') renderIQQuestion(container);
    else if (currentTest === 'disc') renderDISCQuestion(container);
    else if (currentTest === 'mbti') renderMBTIQuestion(container);
    else renderRAISECQuestion(container);
}

function getTestTotal() {
    return currentTest === 'iq' ? IQ_QUESTIONS.length :
           currentTest === 'disc' ? DISC_QUESTIONS.length :
           currentTest === 'mbti' ? MBTI_QUESTIONS.length :
           RAISEC_QUESTIONS.length;
}

function renderIQQuestion(container) {
    const q = IQ_QUESTIONS[currentQuestion];
    const total = IQ_QUESTIONS.length;
    const selected = answers[currentQuestion];

    container.innerHTML = `
        <div class="question-number">Soal ${currentQuestion + 1} dari ${total}</div>
        <div class="question-text">${q.question.replace(/\n/g, '<br>')}</div>
        <div class="options">
            ${q.options.map((opt, i) => `
                <div class="option ${selected === i ? 'selected' : ''}" onclick="selectIQOption(${i})">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </div>
            `).join('')}
        </div>
        <div class="test-nav">
            <button class="btn btn-back" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled style="opacity:0.3"' : ''}>Sebelumnya</button>
            ${currentQuestion < total - 1
                ? `<button class="btn btn-primary" onclick="nextQuestion()">Selanjutnya &#8594;</button>`
                : `<button class="btn-submit" onclick="submitTest()" ${selected === null ? 'disabled' : ''}>Lihat Hasil</button>`
            }
        </div>
    `;
}

function selectIQOption(index) {
    if (answers[currentQuestion] === index) return;
    answers[currentQuestion] = index;
    renderQuestion();
    setTimeout(autoAdvance, 300);
}

function autoAdvance() {
    const total = getTestTotal();
    if (currentQuestion < total - 1) {
        nextQuestion();
    } else {
        submitTest();
    }
}

function renderDISCQuestion(container) {
    const q = DISC_QUESTIONS[currentQuestion];
    const total = DISC_QUESTIONS.length;
    const ans = answers[currentQuestion];

    container.innerHTML = `
        <div class="question-number">Soal ${currentQuestion + 1} dari ${total}</div>
        <p class="disc-prompt">Pilih satu yang PALING sesuai dan satu yang PALING TIDAK sesuai dengan diri Anda</p>
        <div class="question-text">${q.situation}</div>
        <div class="disc-options">
            ${q.options.map(opt => `
                <div class="disc-option">
                    <div class="disc-text">${opt.text}</div>
                    <div class="disc-buttons">
                        <button class="disc-btn ${ans.most === opt.label ? 'active-most' : ''}" onclick="selectDISC('${opt.label}', 'most')">Paling</button>
                        <button class="disc-btn ${ans.least === opt.label ? 'active-least' : ''}" onclick="selectDISC('${opt.label}', 'least')">Tidak</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="test-nav">
            <button class="btn btn-back" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled style="opacity:0.3"' : ''}>Sebelumnya</button>
            ${currentQuestion < total - 1
                ? `<button class="btn btn-primary" onclick="nextQuestion()">Selanjutnya &#8594;</button>`
                : `<button class="btn-submit disc-submit" onclick="submitTest()" ${(ans.most === null || ans.least === null) ? 'disabled' : ''}>Lihat Hasil</button>`
            }
        </div>
    `;
}

function selectDISC(label, type) {
    const ans = answers[currentQuestion];
    const otherType = type === 'most' ? 'least' : 'most';
    if (ans[otherType] === label) {
        alert('Anda tidak bisa memilih pernyataan yang sama untuk Paling dan Tidak sesuai!');
        return;
    }
    ans[type] = label;
    renderQuestion();
    if (ans.most !== null && ans.least !== null) {
        setTimeout(autoAdvance, 300);
    }
}

function renderMBTIQuestion(container) {
    const q = MBTI_QUESTIONS[currentQuestion];
    const total = MBTI_QUESTIONS.length;
    const selected = answers[currentQuestion];

    container.innerHTML = `
        <div class="question-number">Soal ${currentQuestion + 1} dari ${total}</div>
        <p class="disc-prompt">Pilih satu pernyataan yang paling menggambarkan diri Anda</p>
        <div class="mbti-options">
            ${q.options.map((opt, i) => `
                <div class="mbti-option ${selected === i ? 'selected' : ''}" onclick="selectMBTIOption(${i})">
                    <div class="mbti-text">${opt.text}</div>
                </div>
            `).join('')}
        </div>
        <div class="test-nav">
            <button class="btn btn-back" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled style="opacity:0.3"' : ''}>Sebelumnya</button>
            ${currentQuestion < total - 1
                ? `<button class="btn btn-primary" onclick="nextQuestion()">Selanjutnya &#8594;</button>`
                : `<button class="btn-submit mbti-submit" onclick="submitTest()" ${selected === null ? 'disabled' : ''}>Lihat Hasil</button>`
            }
        </div>
    `;
}

function selectMBTIOption(index) {
    if (answers[currentQuestion] === index) return;
    answers[currentQuestion] = index;
    renderQuestion();
    setTimeout(autoAdvance, 300);
}

function renderRAISECQuestion(container) {
    const q = RAISEC_QUESTIONS[currentQuestion];
    const total = RAISEC_QUESTIONS.length;
    const selected = answers[currentQuestion];

    const typeNames = { R: 'Realistic', I: 'Investigative', A: 'Artistic', S: 'Social', E: 'Enterprising', C: 'Conventional' };

    container.innerHTML = `
        <div class="question-number">Soal ${currentQuestion + 1} dari ${total}</div>
        <p class="disc-prompt" style="margin-bottom:6px;">Apakah Anda tertarik dengan kegiatan berikut?</p>
        <div class="question-text">${q.text}</div>
        <div class="raisec-options">
            <div class="raisec-btn ${selected === true ? 'active-yes' : ''}" onclick="selectRAISECOption(true)">
                <span class="raisec-icon">&#10003;</span> Ya, Tertarik
            </div>
            <div class="raisec-btn ${selected === false ? 'active-no' : ''}" onclick="selectRAISECOption(false)">
                <span class="raisec-icon">&#10007;</span> Tidak Tertarik
            </div>
        </div>
        <div class="test-nav">
            <button class="btn btn-back" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled style="opacity:0.3"' : ''}>Sebelumnya</button>
            ${currentQuestion < total - 1
                ? `<button class="btn btn-primary" onclick="nextQuestion()">Selanjutnya &#8594;</button>`
                : `<button class="btn-submit raisec-submit" onclick="submitTest()" ${selected === null ? 'disabled' : ''}>Lihat Hasil</button>`
            }
        </div>
    `;
}

function selectRAISECOption(value) {
    if (answers[currentQuestion] === value) return;
    answers[currentQuestion] = value;
    renderQuestion();
    setTimeout(autoAdvance, 300);
}

function nextQuestion() {
    const total = getTestTotal();
    if (currentQuestion < total - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// ============================================================
// HASIL & RIWAYAT
// ============================================================

function submitTest() {
    stopTimer();
    
    // Guest: save to history but don't show results, auto-return home
    if (isGuestUser()) {
        saveHistoryEntry();
        showGuestTestComplete();
        return;
    }
    
    if (currentTest === 'iq') showIQResult();
    else if (currentTest === 'disc') showDISCResult();
    else if (currentTest === 'mbti') showMBTIResult();
    else showRAISECResult();
}

function saveHistoryEntry() {
    const p = getProfile() || { name: 'Peserta', age: 0 };
    const entry = {
        type: currentTest,
        date: Date.now(),
        profile: { ...p }
    };
    
    if (currentTest === 'iq') {
        const correct = answers.filter((a, i) => a === IQ_QUESTIONS[i].answer).length;
        entry.iqScore = Math.round((correct / IQ_QUESTIONS.length) * 150);
        entry.totalQ = IQ_QUESTIONS.length;
        entry.correct = correct;
    } else if (currentTest === 'disc') {
        const scores = { D: 0, I: 0, S: 0, C: 0 };
        answers.forEach(a => {
            if (a.most) scores[a.most] = (scores[a.most] || 0) + 1;
            if (a.least) scores[a.least] = (scores[a.least] || 0) - 1;
        });
        const maxKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        entry.discResult = maxKey;
        entry.discScores = scores;
    } else if (currentTest === 'mbti') {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        answers.forEach((a, i) => {
            if (a !== null) {
                const q = MBTI_QUESTIONS[i];
                scores[q.options[a]] = (scores[q.options[a]] || 0) + 1;
            }
        });
        const mbti = (scores.E >= scores.I ? 'E' : 'I') +
                     (scores.S >= scores.N ? 'S' : 'N') +
                     (scores.T >= scores.F ? 'T' : 'F') +
                     (scores.J >= scores.P ? 'J' : 'P');
        entry.mbtiResult = mbti;
        entry.mbtiScores = scores;
    } else if (currentTest === 'raisec') {
        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        RAISEC_QUESTIONS.forEach((q, i) => {
            if (answers[i] !== null) {
                scores[q.options[answers[i]]] = (scores[q.options[answers[i]]] || 0) + 1;
            }
        });
        const maxKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        entry.raisecResult = maxKey;
        entry.raisecScores = scores;
    }
    
    saveHistory(entry);
}

function showGuestTestComplete() {
    const testLabels = { iq: 'IQ', disc: 'DISC', mbti: 'MBTI', raisec: 'RAISEC' };
    document.getElementById('resultContent').innerHTML = `
        <div style="text-align:center;padding:60px 20px;">
            <div style="font-size:4rem;margin-bottom:16px;">&#9989;</div>
            <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">Tes Selesai!</h3>
            <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:24px;">
                Tes ${testLabels[currentTest]} telah selesai. Hasil tidak ditampilkan untuk mode Tamu.
            </p>
            <button class="btn btn-primary" onclick="showPage('home')" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:12px 32px;">
                Kembali ke Beranda
            </button>
        </div>
    `;
    showPage('result');
    // Auto-return to home after 3 seconds
    setTimeout(() => showPage('home'), 3000);
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem('iqku_history')) || [];
    } catch { return []; }
}

function saveHistory(entry) {
    const p = getProfile();
    if (p) { entry.userName = p.name; entry.userAge = p.age; }
    const h = getHistory();
    h.unshift(entry);
    localStorage.setItem('iqku_history', JSON.stringify(h));
}

function getTimeStr() {
    const d = new Date();
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function updateHomeStats() {
    const h = getHistory();
    const total = h.length;
    document.getElementById('totalTests').textContent = total;

    const iqEntries = h.filter(e => e.type === 'iq');
    if (iqEntries.length > 0) {
        const avg = Math.round(iqEntries.reduce((s, e) => s + e.iqScore, 0) / iqEntries.length);
        document.getElementById('avgScore').textContent = avg;
    } else {
        document.getElementById('avgScore').textContent = '-';
    }

    if (total > 0) {
        const last = h[0];
        const labels = { iq: 'IQ', disc: 'DISC', mbti: 'MBTI', raisec: 'RAISEC' };
        document.getElementById('lastTest').textContent = labels[last.type] || '-';
    } else {
        document.getElementById('lastTest').textContent = '-';
    }
    updateGreeting();

    // Feature visibility
    const menuIQ = document.getElementById('menuTestIQ');
    const menuDISC = document.getElementById('menuTestDISC');
    const menuMBTI = document.getElementById('menuTestMBTI');
    const menuRAISEC = document.getElementById('menuTestRAISEC');
    const shareBtn = document.getElementById('shareHomeBtn');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuIQ) menuIQ.style.display = isFeatureEnabled('test_iq') ? '' : 'none';
    if (menuDISC) menuDISC.style.display = isFeatureEnabled('test_disc') ? '' : 'none';
    if (menuMBTI) menuMBTI.style.display = isFeatureEnabled('test_mbti') ? '' : 'none';
    if (menuRAISEC) menuRAISEC.style.display = isFeatureEnabled('test_raisec') ? '' : 'none';
    if (shareBtn) shareBtn.style.display = (isFeatureEnabled('share_whatsapp') || isFeatureEnabled('share_bluetooth') || isFeatureEnabled('share_print')) ? '' : 'none';

    // Nav items: [0]=home, [1]=riwayat, [2]=pengaturan
    if (navItems[1]) navItems[1].style.display = isFeatureEnabled('history') ? '' : 'none';
    if (navItems[2]) navItems[2].style.display = isFeatureEnabled('settings') ? '' : 'none';

    // Activation banner
    const banner = document.getElementById('activationBanner');
    if (banner) {
        const loggedUser = localStorage.getItem('iqku_logged_user') || '';
        const isSuper = isSuperAdmin(loggedUser);
        banner.style.display = (!isSuper && !isAppActivated()) ? 'block' : 'none';
    }
}

function getProfile() {
    try { return JSON.parse(localStorage.getItem('iqku_profile')); } catch(e) { return null; }
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
    pendingTest = null;
    showPage('home');
}

function saveProfile() {
    const name = document.getElementById('profileName').value.trim();
    const age = document.getElementById('profileAge').value.trim();
    const gender = document.getElementById('profileGender').value;
    const instansi = document.getElementById('profileInstansi').value.trim();
    
    if (!name) { alert('Mohon isi nama lengkap.'); return; }
    if (!age || parseInt(age) < 5 || parseInt(age) > 100) { alert('Mohon isi usia (5-100 tahun).'); return; }
    if (!gender) { alert('Mohon pilih jenis kelamin.'); return; }
    if (!instansi) { alert('Mohon isi nama instansi / sekolah.'); return; }
    
    const p = { name, age: parseInt(age), gender, instansi };
    localStorage.setItem('iqku_profile', JSON.stringify(p));
    document.getElementById('profileModal').classList.remove('active');
    updateGreeting();
    // Start pending test if any
    if (pendingTest) {
        const t = pendingTest;
        pendingTest = null;
        startTest(t);
    }
}

function saveSettingsProfile() {
    const name = document.getElementById('settingsProfileName').value.trim();
    const age = document.getElementById('settingsProfileAge').value.trim();
    const gender = document.getElementById('settingsProfileGender').value;
    const instansi = document.getElementById('settingsProfileInstansi').value.trim();
    const msg = document.getElementById('settingsProfileMsg');
    
    if (!name) { msg.style.color = '#e74c3c'; msg.textContent = 'Mohon isi nama lengkap.'; return; }
    if (!age || parseInt(age) < 5 || parseInt(age) > 100) { msg.style.color = '#e74c3c'; msg.textContent = 'Mohon isi usia (5-100 tahun).'; return; }
    if (!gender) { msg.style.color = '#e74c3c'; msg.textContent = 'Mohon pilih jenis kelamin.'; return; }
    if (!instansi) { msg.style.color = '#e74c3c'; msg.textContent = 'Mohon isi nama instansi / sekolah.'; return; }
    
    const p = { name, age: parseInt(age), gender, instansi };
    localStorage.setItem('iqku_profile', JSON.stringify(p));
    updateGreeting();
    msg.style.color = '#2ecc71';
    msg.textContent = 'Profil berhasil disimpan!';
    setTimeout(() => { msg.textContent = ''; }, 3000);
}

function updateGreeting() {
    const p = getProfile();
    document.getElementById('greetingText').textContent = p ? 'Halo, ' + p.name + '!' : 'Halo, Pengguna!';
}

let pendingTest = null;

function showRiwayat() {
    showPage('riwayat');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.nav-item')[1].classList.add('active');
    renderRiwayat();
}

function renderRiwayat(filter) {
    filter = filter || 'all';
    const h = getHistory();
    const filtered = filter === 'all' ? h : h.filter(e => e.type === filter);
    const list = document.getElementById('riwayatList');

    if (filtered.length === 0) {
        list.innerHTML = '<div class="riwayat-empty"><div class="riwayat-empty-icon">&#128203;</div><p>Belum ada riwayat tes</p></div>';
        return;
    }

    list.innerHTML = filtered.map(e => {
        const icons = { iq: '&#931;', disc: '&#9733;', mbti: '&#9729;', raisec: '&#9878;' };
        const labels = { iq: 'Tes IQ', disc: 'Tes DISC', mbti: 'Tes MBTI', raisec: 'Tes RAISEC' };
        let resultText = '';
        if (e.type === 'iq') resultText = `IQ ${e.iqScore} - ${e.label}`;
        else if (e.type === 'disc') resultText = `${e.topType} - ${e.typeName}`;
        else if (e.type === 'mbti') resultText = `${e.mbtiType} - ${e.mbtiName}`;
        else if (e.type === 'raisec') resultText = `${e.topType} - ${e.topName}`;

        return `<div class="riwayat-item" onclick="viewHistory(${e.id})">
            <div class="riwayat-icon ${e.type}">${icons[e.type]}</div>
            <div class="riwayat-body">
                <div class="riwayat-type">${labels[e.type]}</div>
                <div class="riwayat-result">${resultText}</div>
                <div class="riwayat-date">${e.userName ? e.userName + ' (' + e.userAge + ' thn) · ' : ''}${e.date}</div>
            </div>
        </div>`;
    }).join('');
}

function filterRiwayat(filter) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.filter-tab[data-filter="${filter}"]`).classList.add('active');
    renderRiwayat(filter);
}

function viewHistory(id) {
    const h = getHistory();
    const entry = h.find(e => e.id === id);
    if (!entry) return;

    currentTest = entry.type;
    answers = entry.answers || [];
    if (entry.type === 'iq') showIQResult(true);
    else if (entry.type === 'disc') showDISCResult(true);
    else if (entry.type === 'mbti') showMBTIResult(true);
    else showRAISECResult(true);
}

// ----- IQ RESULT -----
function showIQResult(fromHistory) {
    const total = IQ_QUESTIONS.length;
    const correct = answers.reduce((sum, ans, idx) => sum + (ans === IQ_QUESTIONS[idx].answer ? 1 : 0), 0);
    const wrong = total - correct;
    const category = IQ_RESULTS.find(r => correct >= r.min && correct <= r.max);
    const iqScore = Math.round(70 + (correct / total) * 80);
    const pct = Math.round((correct / total) * 100);
    const p = getProfile();
    const nameText = p ? p.name : 'Peserta';
    const ageText = p ? p.age + ' tahun' : '';

    if (!fromHistory) {
        saveHistory({ id: Date.now(), type: 'iq', date: getTimeStr(), iqScore, label: category.label, correct, total, answers: [...answers] });
    }

    showPage('result');
    document.getElementById('resultContent').innerHTML = `
        <div class="result-hero" style="background:linear-gradient(135deg,rgba(102,126,234,0.25),rgba(118,75,162,0.25));border:1px solid rgba(102,126,234,0.3);border-radius:24px;padding:32px 24px;text-align:center;margin-bottom:20px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(102,126,234,0.15) 0%,transparent 50%);animation:heroPulse 4s ease-in-out infinite;"></div>
            <div style="position:relative;z-index:1;">
                <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(102,126,234,0.2);border:1px solid rgba(102,126,234,0.3);border-radius:24px;padding:6px 16px;margin-bottom:16px;">
                    <span style="font-size:1rem;">&#128300;</span>
                    <span style="font-size:0.82rem;font-weight:600;color:#667eea;">TES INTELEGENSIA</span>
                </div>
                <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:6px;">${nameText}${ageText ? ', ' + ageText : ''}</div>
                <div style="font-size:4.5rem;font-weight:800;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin:12px 0;">${iqScore}</div>
                <div style="font-size:1.2rem;font-weight:700;color:var(--text-muted5);margin-bottom:4px;">${category.label}</div>
                <div style="font-size:0.85rem;color:var(--text-muted);">Range: ${iqScore - 5} &ndash; ${iqScore + 5}</div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div class="stat-card">
                <div class="stat-icon" style="background:rgba(46,204,113,0.15);color:#2ecc71;">
                    <span>&#10004;</span>
                </div>
                <div class="stat-value" style="color:#2ecc71;">${correct}</div>
                <div class="stat-label">Benar</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon" style="background:rgba(231,76,60,0.15);color:#e74c3c;">
                    <span>&#10008;</span>
                </div>
                <div class="stat-value" style="color:#e74c3c;">${wrong}</div>
                <div class="stat-label">Salah</div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">&#128202;</span>
                Performa Anda
            </h3>
            <div style="margin-top:14px;">
                <div class="progress-container">
                    <div class="progress-fill" style="width:${pct}%;background:linear-gradient(90deg,#667eea,#764ba2);"></div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:0.85rem;">
                    <span style="color:var(--text-muted);">${correct}/${total} soal benar</span>
                    <span style="font-weight:700;color:#667eea;">${pct}%</span>
                </div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;">&#128161;</span>
                Analisis Hasil
            </h3>
            <p style="line-height:1.8;margin-top:12px;color:var(--text-muted7);">${category.desc}</p>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff;">&#127919;</span>
                Rekomendasi Pengembangan
            </h3>
            <div style="margin-top:14px;">
                ${category.recommendations.map((r, i) => `
                    <div class="list-item">
                        <div class="item-number" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">${i + 1}</div>
                        <div style="flex:1;line-height:1.6;">${r}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;">&#128221;</span>
                Rincian Jawaban
            </h3>
            <div style="margin-top:14px;">
                ${IQ_QUESTIONS.map((q, i) => {
                    const isCorrect = answers[i] === q.answer;
                    return `
                        <div class="answer-item">
                            <div class="answer-number" style="background:${isCorrect ? 'rgba(46,204,113,0.15)' : 'rgba(231,76,60,0.15)'};color:${isCorrect ? '#2ecc71' : '#e74c3c'};">
                                ${i + 1}
                            </div>
                            <div class="answer-content">
                                <div class="answer-question">${q.question.split('\n')[0].substring(0, 60)}${q.question.split('\n')[0].length > 60 ? '...' : ''}</div>
                                <div class="answer-detail">
                                    <span class="answer-badge" style="background:${isCorrect ? 'rgba(46,204,113,0.15)' : 'rgba(231,76,60,0.15)'};color:${isCorrect ? '#2ecc71' : '#e74c3c'};">
                                        ${isCorrect ? '&#10004; Benar' : '&#10008; Salah'}
                                    </span>
                                    ${answers[i] !== null ? '<span>Jawaban: ' + q.options[answers[i]] + '</span>' : '<span>Tidak dijawab</span>'}
                                    ${!isCorrect ? '<span style="color:var(--text-dim);">| Benar: ' + q.options[q.answer] + '</span>' : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="result-actions">
            <button class="btn btn-secondary" onclick="showPage('home')" style="background:var(--card-bg);border:1px solid var(--border-color);color:var(--text-muted5);">Beranda</button>
            <button class="btn btn-primary" onclick="retakeTest()" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">Ulangi Tes</button>
        </div>
        <div class="share-actions print-hide">
            ${isFeatureEnabled('share_print') ? '<button class="btn-share btn-share-pdf" onclick="printResult()" style="width:100%;justify-content:center;">&#128424; Cetak / PDF</button>' : ''}
        </div>
    `;
}

// ----- DISC RESULT -----
function showDISCResult(fromHistory) {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    answers.forEach(a => {
        if (a.most) scores[a.most] = (scores[a.most] || 0) + 1;
        if (a.least) scores[a.least] = (scores[a.least] || 0) - 1;
    });

    const rawScores = {};
    Object.keys(scores).forEach(k => rawScores[k] = scores[k]);
    const min = Math.min(...Object.values(scores));
    const max = Math.max(...Object.values(scores));
    const range = max - min || 1;
    Object.keys(scores).forEach(k => {
        scores[k] = Math.round(((scores[k] - min) / range) * 100);
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = sorted[0][0];
    const data = DISC_RESULTS[topType];
    const p = getProfile();
    const nameText = p ? p.name : 'Peserta';
    const ageText = p ? p.age + ' tahun' : '';

    if (!fromHistory) {
        saveHistory({ id: Date.now(), type: 'disc', date: getTimeStr(), topType, typeName: data.name, scores, rawScores, answers: JSON.parse(JSON.stringify(answers)) });
    }

    const discIcons = { D: '&#9889;', I: '&#9728;', S: '&#9829;', C: '&#9881;' };
    const discNames = { D: 'Dominance', I: 'Influence', S: 'Steadiness', C: 'Compliance' };

    showPage('result');
    document.getElementById('resultContent').innerHTML = `
        <div class="result-hero" style="background:linear-gradient(135deg,rgba(240,147,251,0.2),rgba(245,87,108,0.2));border:1px solid rgba(240,147,251,0.3);border-radius:24px;padding:32px 24px;text-align:center;margin-bottom:20px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(240,147,251,0.15) 0%,transparent 50%);animation:heroPulse 4s ease-in-out infinite;"></div>
            <div style="position:relative;z-index:1;">
                <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(240,147,251,0.2);border:1px solid rgba(240,147,251,0.3);border-radius:24px;padding:6px 16px;margin-bottom:16px;">
                    <span style="font-size:1rem;">&#128200;</span>
                    <span style="font-size:0.82rem;font-weight:600;color:#f093fb;">TES KEPRIBADIAN DISC</span>
                </div>
                <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:6px;">${nameText}${ageText ? ', ' + ageText : ''}</div>
                <div style="font-size:4.5rem;font-weight:800;color:${data.color};line-height:1;margin:12px 0;letter-spacing:8px;">${topType}</div>
                <div style="font-size:1.2rem;font-weight:700;color:var(--text-muted5);margin-bottom:4px;">${data.name}</div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,${data.color},${data.color}99);color:#fff;">&#128161;</span>
                Deskripsi Kepribadian
            </h3>
            <p style="line-height:1.8;margin-top:12px;color:var(--text-muted7);">${data.desc}</p>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">&#128202;</span>
                Grafik Kepribadian
            </h3>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px;">
                ${['D','I','S','C'].map(k => `
                    <div style="text-align:center;">
                        <div class="chart-bar-container">
                            <div class="chart-bar-value" style="color:${DISC_RESULTS[k].color};">${rawScores[k] > 0 ? '+' : ''}${rawScores[k]}</div>
                            <div class="chart-bar">
                                <div class="chart-bar-fill" style="height:${scores[k]}%;background:${DISC_RESULTS[k].color};"></div>
                            </div>
                        </div>
                        <div class="chart-bar-label" style="color:${DISC_RESULTS[k].color};">${k}</div>
                        <div class="chart-bar-sublabel">${discNames[k]}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;">&#10004;</span>
                Kelebihan Anda
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.positive.map(p => '<span class="tag-item" style="background:rgba(46,204,113,0.12);border-color:rgba(46,204,113,0.2);color:#2ecc71;">&#10003; ' + p + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;">&#128269;</span>
                Area Pengembangan
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.negative.map(p => '<span class="tag-item" style="background:rgba(231,76,60,0.1);border-color:rgba(231,76,60,0.18);color:#e74c3c;">&#9888; ' + p + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#f39c12,#e67e22);color:#fff;">&#128737;</span>
                Kekuatan Utama
            </h3>
            <div style="margin-top:12px;">
                ${data.strengths.map((s, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:${data.color}20;color:${data.color};">&#9654;</div>
                        <div style="flex:1;line-height:1.6;">${s}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#3498db,#2980b9);color:#fff;">&#128188;</span>
                Karier yang Cocok
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.careers.map(c => '<span class="tag-item" style="background:rgba(52,152,219,0.12);border-color:rgba(52,152,219,0.2);color:#3498db;">&#128188; ' + c + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#9b59b6,#8e44ad);color:#fff;">&#128172;</span>
                Tips Komunikasi
            </h3>
            <div style="margin-top:12px;">
                ${data.communication.map((c, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:#9b59b620;color:#9b59b6;">&#10148;</div>
                        <div style="flex:1;line-height:1.6;">${c}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#1abc9c,#16a085);color:#fff;">&#127793;</span>
                Pengembangan Diri
            </h3>
            <div style="margin-top:12px;">
                ${data.development.map((d, i) => `
                    <div class="list-item">
                        <div class="item-number" style="background:linear-gradient(135deg,${data.color},${data.color}99);color:#fff;">${i + 1}</div>
                        <div style="flex:1;line-height:1.6;">${d}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;">&#127970;</span>
                Lingkungan Kerja Ideal
            </h3>
            <div style="margin-top:12px;">
                ${(topType === 'D' ? ['Lingkungan yang menantang dan kompetitif','Kebebasan mengambil keputusan','Target yang jelas dan terukur','Otonomi dalam bekerja'] :
                    topType === 'I' ? ['Lingkungan yang sosial dan kolaboratif','Pengakuan dan apresiasi rutin','Kesempatan untuk presentasi','Suasana kerja yang ceria'] :
                    topType === 'S' ? ['Lingkungan yang stabil dan harmonis','Hubungan kerja yang suportif','Rutinitas yang jelas','Apresiasi atas loyalitas'] :
                    ['Lingkungan yang terstruktur','Standar kualitas yang tinggi','Akses ke data dan informasi','Waktu untuk menganalisis']
                ).map((w, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:#e67e2220;color:#e67e22;">&#10003;</div>
                        <div style="flex:1;line-height:1.6;">${w}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-actions">
            <button class="btn btn-secondary" onclick="showPage('home')" style="background:var(--card-bg);border:1px solid var(--border-color);color:var(--text-muted5);">Beranda</button>
            <button class="btn btn-primary" onclick="retakeTest()" style="background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;">Ulangi Tes</button>
        </div>
        <div class="share-actions print-hide">
            ${isFeatureEnabled('share_print') ? '<button class="btn-share btn-share-pdf" onclick="printResult()" style="width:100%;justify-content:center;">&#128424; Cetak / PDF</button>' : ''}
        </div>
    `;
}

// ----- MBTI RESULT -----
function showMBTIResult(fromHistory) {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    MBTI_QUESTIONS.forEach((q, i) => {
        if (answers[i] !== null) {
            scores[q.options[answers[i]].letter]++;
        }
    });

    const tieType = ((scores.E >= scores.I) ? 'E' : 'I') +
                    ((scores.S >= scores.N) ? 'S' : 'N') +
                    ((scores.T >= scores.F) ? 'T' : 'F') +
                    ((scores.J >= scores.P) ? 'J' : 'P');

    const finalType = MBTI_TYPES[tieType] ? tieType : 'INTJ';
    const data = MBTI_TYPES[finalType];
    const p = getProfile();
    const nameText = p ? p.name : 'Peserta';
    const ageText = p ? p.age + ' tahun' : '';

    const percentage = (letter) => {
        const pairs = { 'E':'I','I':'E','S':'N','N':'S','T':'F','F':'T','J':'P','P':'J' };
        const total = scores[letter] + scores[pairs[letter]];
        return total > 0 ? Math.round((scores[letter] / total) * 100) : 50;
    };

    if (!fromHistory) {
        saveHistory({ id: Date.now(), type: 'mbti', date: getTimeStr(), mbtiType: finalType, mbtiName: data.name, scores, answers: [...answers] });
    }

    const dims = [
        { left: 'E', right: 'I', leftLabel: 'Extravert', rightLabel: 'Introvert', pct: percentage('E'), color: '#4facfe' },
        { left: 'S', right: 'N', leftLabel: 'Sensing', rightLabel: 'Intuition', pct: percentage('S'), color: '#667eea' },
        { left: 'T', right: 'F', leftLabel: 'Thinking', rightLabel: 'Feeling', pct: percentage('T'), color: '#f093fb' },
        { left: 'J', right: 'P', leftLabel: 'Judging', rightLabel: 'Perceiving', pct: percentage('J'), color: '#2ecc71' }
    ];

    showPage('result');
    document.getElementById('resultContent').innerHTML = `
        <div class="result-hero" style="background:linear-gradient(135deg,rgba(79,172,254,0.2),rgba(0,242,254,0.2));border:1px solid rgba(79,172,254,0.3);border-radius:24px;padding:32px 24px;text-align:center;margin-bottom:20px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(79,172,254,0.15) 0%,transparent 50%);animation:heroPulse 4s ease-in-out infinite;"></div>
            <div style="position:relative;z-index:1;">
                <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(79,172,254,0.2);border:1px solid rgba(79,172,254,0.3);border-radius:24px;padding:6px 16px;margin-bottom:16px;">
                    <span style="font-size:1rem;">&#129504;</span>
                    <span style="font-size:0.82rem;font-weight:600;color:#4facfe;">TES KEPRIBADIAN MBTI</span>
                </div>
                <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:6px;">${nameText}${ageText ? ', ' + ageText : ''}</div>
                <div style="font-size:4.5rem;font-weight:800;letter-spacing:12px;background:linear-gradient(135deg,#4facfe,#00f2fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin:12px 0;">${finalType}</div>
                <div style="font-size:1.2rem;font-weight:700;color:var(--text-muted5);margin-bottom:4px;">${data.name}</div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff;">&#128161;</span>
                Deskripsi Kepribadian
            </h3>
            <p style="line-height:1.8;margin-top:12px;color:var(--text-muted7);">${data.desc}</p>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">&#128200;</span>
                Dimensi Kepribadian
            </h3>
            <div style="margin-top:16px;">
                ${dims.map(d => `
                    <div class="dimension-bar">
                        <div class="dimension-header">
                            <div class="dimension-label" style="color:${d.pct >= 50 ? d.color : 'var(--text-muted)'};">
                                <span style="font-size:1.1rem;">${d.left}</span>
                                <span style="font-weight:400;font-size:0.82rem;">${d.leftLabel}</span>
                            </div>
                            <div class="dimension-label" style="color:${d.pct < 50 ? d.color : 'var(--text-muted)'};">
                                <span style="font-weight:400;font-size:0.82rem;">${d.rightLabel}</span>
                                <span style="font-size:1.1rem;">${d.right}</span>
                            </div>
                        </div>
                        <div class="dimension-track">
                            <div class="track">
                                <div class="fill" style="width:${d.pct}%;background:${d.color};"></div>
                            </div>
                            <div class="dimension-pct" style="color:${d.color};">${d.pct}%</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div class="result-section" style="margin-bottom:0;">
                <h3>
                    <span class="icon" style="background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;">&#10004;</span>
                    Kelebihan
                </h3>
                <div style="margin-top:12px;">
                    ${data.strengths.map(s => `
                        <div class="list-item" style="padding:8px 0;">
                            <div class="item-icon" style="background:#2ecc7120;color:#2ecc71;">&#10003;</div>
                            <div style="flex:1;font-size:0.85rem;line-height:1.5;">${s}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="result-section" style="margin-bottom:0;">
                <h3>
                    <span class="icon" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;">&#128269;</span>
                    Kelemahan
                </h3>
                <div style="margin-top:12px;">
                    ${data.weaknesses.map(s => `
                        <div class="list-item" style="padding:8px 0;">
                            <div class="item-icon" style="background:#e74c3c20;color:#e74c3c;">&#9888;</div>
                            <div style="flex:1;font-size:0.85rem;line-height:1.5;">${s}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#3498db,#2980b9);color:#fff;">&#128188;</span>
                Karier yang Cocok
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.careers.map(c => '<span class="tag-item" style="background:rgba(52,152,219,0.12);border-color:rgba(52,152,219,0.2);color:#3498db;">&#128188; ' + c + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;">&#128149;</span>
                Hubungan & Interaksi Sosial
            </h3>
            <div style="margin-top:12px;">
                ${data.relationships.map((r, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:#f093fb20;color:#f093fb;">&#10148;</div>
                        <div style="flex:1;line-height:1.6;">${r}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#1abc9c,#16a085);color:#fff;">&#127793;</span>
                Rekomendasi Pengembangan Diri
            </h3>
            <div style="margin-top:12px;">
                ${['Kenali dan manfaatkan kelebihan Anda dalam pekerjaan dan hubungan sehari-hari','Kembangkan area kelemahan dengan kesadaran diri dan latihan','Cari lingkungan yang sesuai dengan tipe kepribadian Anda','Pelajari cara berkomunikasi efektif dengan tipe kepribadian yang berbeda','Gunakan pemahaman ini untuk pengembangan karier dan pribadi'].map((d, i) => `
                    <div class="list-item">
                        <div class="item-number" style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff;">${i + 1}</div>
                        <div style="flex:1;line-height:1.6;">${d}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-actions">
            <button class="btn btn-secondary" onclick="showPage('home')" style="background:var(--card-bg);border:1px solid var(--border-color);color:var(--text-muted5);">Beranda</button>
            <button class="btn btn-primary" onclick="retakeTest()" style="background:linear-gradient(135deg,#4facfe,#00f2fe);color:#fff;">Ulangi Tes</button>
        </div>
        <div class="share-actions print-hide">
            ${isFeatureEnabled('share_print') ? '<button class="btn-share btn-share-pdf" onclick="printResult()" style="width:100%;justify-content:center;">&#128424; Cetak / PDF</button>' : ''}
        </div>
    `;
}

// ----- RAISEC RESULT -----
function showRAISECResult(fromHistory) {
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    RAISEC_QUESTIONS.forEach((q, i) => {
        if (answers[i] === true) scores[q.type]++;
    });

    const maxScore = 5;
    const percentages = {};
    Object.keys(scores).forEach(k => {
        percentages[k] = Math.round((scores[k] / maxScore) * 100);
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = sorted[0][0];
    const hollandCode = sorted.slice(0, 3).map(s => s[0]).join('');
    const data = RAISEC_RESULTS[topType];
    const p = getProfile();
    const nameText = p ? p.name : 'Peserta';
    const ageText = p ? p.age + ' tahun' : '';

    if (!fromHistory) {
        saveHistory({
            id: Date.now(),
            type: 'raisec',
            date: getTimeStr(),
            topType,
            topName: data.name,
            hollandCode,
            scores,
            percentages,
            answers: [...answers]
        });
    }

    const typeNames = { R: 'Realistic', I: 'Investigative', A: 'Artistic', S: 'Social', E: 'Enterprising', C: 'Conventional' };
    const typeColors = { R: '#e74c3c', I: '#3498db', A: '#e67e22', S: '#2ecc71', E: '#9b59b6', C: '#1abc9c' };

    showPage('result');
    document.getElementById('resultContent').innerHTML = `
        <div class="result-hero" style="background:linear-gradient(135deg,rgba(230,126,34,0.2),rgba(211,84,0,0.2));border:1px solid rgba(230,126,34,0.3);border-radius:24px;padding:32px 24px;text-align:center;margin-bottom:20px;position:relative;overflow:hidden;">
            <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle,rgba(230,126,34,0.15) 0%,transparent 50%);animation:heroPulse 4s ease-in-out infinite;"></div>
            <div style="position:relative;z-index:1;">
                <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(230,126,34,0.2);border:1px solid rgba(230,126,34,0.3);border-radius:24px;padding:6px 16px;margin-bottom:16px;">
                    <span style="font-size:1rem;">&#127919;</span>
                    <span style="font-size:0.82rem;font-weight:600;color:#e67e22;">TES MINAT BAKAT RAISEC</span>
                </div>
                <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:6px;">${nameText}${ageText ? ', ' + ageText : ''}</div>
                <div style="font-size:4.5rem;font-weight:800;letter-spacing:14px;background:linear-gradient(135deg,${typeColors[sorted[0][0]]},${typeColors[sorted[1][0]]});-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin:12px 0;">${hollandCode}</div>
                <div style="font-size:1.2rem;font-weight:700;color:var(--text-muted5);margin-bottom:12px;">${data.name}</div>
                <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
                    ${sorted.map(s => '<span style="font-size:0.78rem;padding:5px 12px;border-radius:16px;font-weight:600;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);color:' + typeColors[s[0]] + ';">' + s[0] + ': ' + s[1] + '</span>').join('')}
                </div>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,${data.color},${data.color}99);color:#fff;">&#128161;</span>
                Deskripsi Kepribadian
            </h3>
            <p style="line-height:1.8;margin-top:12px;color:var(--text-muted7);">${data.desc}</p>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;">&#128202;</span>
                Grafik Minat RAISEC
            </h3>
            <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:16px;">
                ${['R','I','A','S','E','C'].map(k => `
                    <div style="text-align:center;">
                        <div class="chart-bar-container">
                            <div class="chart-bar-value" style="color:${typeColors[k]};">${scores[k]}/${maxScore}</div>
                            <div class="chart-bar" style="width:32px;">
                                <div class="chart-bar-fill" style="height:${percentages[k]}%;background:${typeColors[k]};"></div>
                            </div>
                        </div>
                        <div class="chart-bar-label" style="color:${typeColors[k]};">${k}</div>
                        <div class="chart-bar-sublabel">${typeNames[k]}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;">&#128205;</span>
                Karakteristik Utama
            </h3>
            <div style="margin-top:12px;">
                ${data.traits.map((t, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:${data.color}20;color:${data.color};">&#9654;</div>
                        <div style="flex:1;line-height:1.6;">${t}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;">&#128170;</span>
                Kekuatan Utama
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.strengths.map(s => '<span class="tag-item" style="background:rgba(46,204,113,0.12);border-color:rgba(46,204,113,0.2);color:#2ecc71;">&#10003; ' + s + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#3498db,#2980b9);color:#fff;">&#128188;</span>
                Karier yang Cocok
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
                ${data.careers.map(c => '<span class="tag-item" style="background:rgba(52,152,219,0.12);border-color:rgba(52,152,219,0.2);color:#3498db;">&#128188; ' + c + '</span>').join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#9b59b6,#8e44ad);color:#fff;">&#127891;</span>
                Pendidikan yang Disarankan
            </h3>
            <div style="margin-top:12px;">
                ${data.education.map((e, i) => `
                    <div class="list-item">
                        <div class="item-icon" style="background:#9b59b620;color:#9b59b6;">&#10148;</div>
                        <div style="flex:1;line-height:1.6;">${e}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;">&#127970;</span>
                Lingkungan Kerja Ideal
            </h3>
            <div style="margin-top:12px;background:var(--card-bg2);padding:16px;border-radius:12px;border:1px solid var(--border-color);">
                <p style="line-height:1.8;color:var(--text-muted7);margin:0;">${data.workplace}</p>
            </div>
        </div>

        <div class="result-section">
            <h3>
                <span class="icon" style="background:linear-gradient(135deg,#1abc9c,#16a085);color:#fff;">&#127793;</span>
                Rekomendasi Pengembangan Diri
            </h3>
            <div style="margin-top:12px;">
                ${['Kembangkan kekuatan utama Anda dengan mengikuti pelatihan atau workshop terkait','Eksplorasi karier yang sesuai dengan tipe kepribadian RAISEC Anda','Jika ingin meningkatkan minat di area lain, coba kegiatan baru di luar zona nyaman','Gunakan pemahaman ini untuk memilih jurusan kuliah atau jalur karier','Kombinasikan tipe terkuat Anda dengan tipe kedua dan ketiga untuk hasil optimal'].map((d, i) => `
                    <div class="list-item">
                        <div class="item-number" style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;">${i + 1}</div>
                        <div style="flex:1;line-height:1.6;">${d}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="result-actions">
            <button class="btn btn-secondary" onclick="showPage('home')" style="background:var(--card-bg);border:1px solid var(--border-color);color:var(--text-muted5);">Beranda</button>
            <button class="btn btn-primary" onclick="retakeTest()" style="background:linear-gradient(135deg,#e67e22,#d35400);color:#fff;">Ulangi Tes</button>
        </div>
        <div class="share-actions print-hide">
            ${isFeatureEnabled('share_print') ? '<button class="btn-share btn-share-pdf" onclick="printResult()" style="width:100%;justify-content:center;">&#128424; Cetak / PDF</button>' : ''}
        </div>
    `;
}

// ============================================================
// ACTIVATION SYSTEM — .Maju ID Based
// ============================================================

function getDeviceFingerprint() {
    // Try Electron first
    if (window.electronAPI && window.electronAPI.getSystemInfo) {
        try {
            const info = window.electronAPI.getSystemInfo();
            const raw = JSON.stringify(info.cpus) + info.platform + info.hostname;
            return simpleHash(raw);
        } catch(e) {}
    }
    // Try Capacitor/Android
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Device) {
        try {
            const info = window.Capacitor.Plugins.Device.getInfo();
            const raw = (info.model || '') + (info.manufacturer || '') + (info.osVersion || '');
            return simpleHash(raw);
        } catch(e) {}
    }
    // Fallback: browser fingerprint
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('IQ.ku', 2, 2);
    const nav = navigator.userAgent + screen.width + screen.height + screen.colorDepth;
    return simpleHash(canvas.toDataURL() + nav);
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    // Convert to hex and take last 12 chars
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
    return hex.slice(-8);
}

function generateActivationCode(fingerprint, duration = 'perm') {
    const salt = 'IQKU';
    let hash = 0;
    // Securely encode the duration into the offline activation code
    const raw = fingerprint + duration + salt;
    for (let i = 0; i < raw.length; i++) {
        hash = ((hash << 5) - hash) + raw.charCodeAt(i);
        hash = hash & hash;
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
    // Format: XXXX-XXXX
    return hex.slice(0, 4) + '-' + hex.slice(4, 8);
}

function validateActivation(code) {
    const fp = getDeviceFingerprint();
    const durations = ['3d', '7d', '30d', '3m', '6m', '12m', 'perm'];
    
    // Check which duration matches the input activation code
    for (const d of durations) {
        if (code.toUpperCase().trim() === generateActivationCode(fp, d)) {
            return d; // Returns the matched duration
        }
    }
    return null;
}

function getFirstRunTime() {
    let firstRun = localStorage.getItem('iqku_first_run');
    if (!firstRun) {
        firstRun = Date.now().toString();
        localStorage.setItem('iqku_first_run', firstRun);
    }
    return parseInt(firstRun, 10);
}

function showTrialExpiredScreen() {
    if (document.getElementById('trialExpiredScreen')) return;
    
    const blockPage = document.createElement('div');
    blockPage.id = 'trialExpiredScreen';
    blockPage.className = 'page active';
    blockPage.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%);display:flex;align-items:center;justify-content:center;z-index:99999;padding:24px;color:#fff;';
    blockPage.innerHTML = `
        <div style="text-align:center;max-width:440px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:32px;border-radius:24px;backdrop-filter:blur(20px);box-shadow:0 20px 50px rgba(0,0,0,0.5);">
            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#ff758c,#ff7eb3);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:2.2rem;box-shadow:0 0 20px rgba(255,117,140,0.4);">🔒</div>
            <h2 style="font-size:1.4rem;font-weight:800;margin-bottom:12px;letter-spacing:0.5px;">Masa Uji Coba Berakhir</h2>
            <p style="font-size:0.88rem;line-height:1.6;color:#a0aec0;margin-bottom:20px;">
                Aplikasi belum diaktivasi dan batas waktu uji coba gratis selama <strong>3 hari</strong> telah habis.
            </p>
            <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.05);border-radius:14px;padding:16px;margin-bottom:24px;text-align:left;">
                <div style="font-size:0.7rem;font-weight:700;color:#cbd5e0;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.5px;">Kode Perangkat Anda:</div>
                <div style="font-family:monospace;font-size:1.1rem;font-weight:800;color:#fff;letter-spacing:1px;background:rgba(0,0,0,0.2);padding:8px 12px;border-radius:8px;text-align:center;border:1px solid rgba(255,255,255,0.1);">${getDeviceFingerprint()}</div>
                <div style="font-size:0.68rem;color:#718096;margin-top:6px;text-align:center;">Salin kode di atas dan berikan ke Superadmin untuk aktivasi.</div>
            </div>
            
            <div class="form-group" style="margin-bottom:16px;text-align:left;">
                <label class="form-label" style="font-size:0.75rem;font-weight:700;color:#cbd5e0;margin-bottom:6px;display:block;">KODE AKTIVASI</label>
                <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:0 14px;height:44px;display:flex;align-items:center;">
                    <span style="font-size:1rem;margin-right:10px;opacity:0.7;">🔑</span>
                    <input type="text" id="expiredScreenCode" style="background:transparent;border:none;outline:none;color:#fff;font-size:0.9rem;width:100%;font-weight:700;letter-spacing:1px;" placeholder="Masukkan kode aktivasi">
                </div>
            </div>
            
            <button class="btn btn-primary" onclick="activateFromExpiredScreen()" style="width:100%;height:44px;font-weight:700;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(102,126,234,0.3);margin-bottom:12px;">AKTIFKAN SEKARANG</button>
            <div id="expiredScreenMsg" style="font-size:0.8rem;font-weight:600;margin-top:8px;"></div>
        </div>
    `;
    document.getElementById('app').appendChild(blockPage);
}

function activateFromExpiredScreen() {
    const code = document.getElementById('expiredScreenCode').value.trim();
    const msg = document.getElementById('expiredScreenMsg');
    if (!code) {
        msg.style.color = '#ff758c';
        msg.textContent = 'Kode aktivasi tidak boleh kosong.';
        return;
    }
    const success = activateApp(code);
    if (success) {
        msg.style.color = '#2ecc71';
        msg.textContent = 'Aplikasi berhasil diaktivasi! Memuat...';
        setTimeout(() => {
            const screen = document.getElementById('trialExpiredScreen');
            if (screen) screen.remove();
            checkLogin();
        }, 1500);
    } else {
        msg.style.color = '#ff758c';
        msg.textContent = 'Kode aktivasi salah atau tidak cocok untuk perangkat ini.';
    }
}

function checkExpiringWarnings() {
    const loggedUser = localStorage.getItem('iqku_logged_user') || '';
    
    // 1. Check Device Activation Warning
    if (!isAppActivated() && !isSuperAdmin(loggedUser)) {
        const firstRun = getFirstRunTime();
        const elapsed = Date.now() - firstRun;
        const totalLimit = 3 * 24 * 3600 * 1000; // 3 days
        const remaining = totalLimit - elapsed;
        
        if (remaining > 0 && remaining <= 2 * 24 * 3600 * 1000) {
            if (!sessionStorage.getItem('iqku_app_act_warned')) {
                sessionStorage.setItem('iqku_app_act_warned', 'true');
                const days = (remaining / (24 * 3600 * 1000)).toFixed(1);
                showWarningDialog(
                    'Peringatan Aktivasi Perangkat',
                    `Aplikasi ini belum diaktivasi dan masa uji coba gratis Anda tinggal <strong>${days} hari</strong> lagi. Setelah masa uji coba habis, aplikasi akan otomatis dikunci.`,
                    'Hubungi Superadmin untuk mengaktifkan perangkat.'
                );
                return;
            }
        }
    }
    
    // 2. Check User Account Warning
    if (loggedUser && !isSuperAdmin(loggedUser)) {
        const users = getUsers();
        const user = users.find(u => u.username === loggedUser);
        if (user && user.expireAt) {
            const remaining = user.expireAt - Date.now();
            if (remaining > 0 && remaining <= 2 * 24 * 3600 * 1000) {
                if (!sessionStorage.getItem('iqku_user_act_warned')) {
                    sessionStorage.setItem('iqku_user_act_warned', 'true');
                    const days = (remaining / (24 * 3600 * 1000)).toFixed(1);
                    showWarningDialog(
                        'Peringatan Masa Aktif Akun',
                        `Akun Anda (<strong>${loggedUser}</strong>) akan segera kadaluarsa dalam waktu <strong>${days} hari</strong> lagi.`,
                        'Silakan hubungi Administrator untuk memperpanjang masa aktif akun Anda.'
                    );
                }
            }
        }
    }
}

function showWarningDialog(title, message, hint) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'warningExpirationDialog';
    overlay.innerHTML = `
        <div class="modal" style="max-width:400px; text-align:center; padding:24px;">
            <div style="width:64px; height:64px; border-radius:50%; background:rgba(243,156,18,0.12); color:#f39c12; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:1.8rem;">⚠️</div>
            <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:12px; color:var(--text-color);">${title}</h3>
            <p style="font-size:0.88rem; line-height:1.6; color:var(--text-color); margin-bottom:12px;">${message}</p>
            <p style="font-size:0.8rem; color:var(--text-muted); font-weight:500; margin-bottom:20px;">${hint}</p>
            <button class="btn btn-primary btn-sm" onclick="closeModalById('warningExpirationDialog')" style="width:100%; height:38px; font-weight:700; background:linear-gradient(135deg,#f39c12,#e67e22); border:none; box-shadow:0 4px 12px rgba(243,156,18,0.25);">Mengerti</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function isAppActivated() {
    const activation = localStorage.getItem('iqku_activation');
    if (!activation) return false;
    try {
        const data = JSON.parse(activation);
        if (data.fingerprint !== getDeviceFingerprint()) return false;
        
        // Check if activation has expired
        if (data.expireAt && Date.now() > data.expireAt) {
            localStorage.removeItem('iqku_activation');
            return false;
        }
        
        return data.activated === true && data.code;
    } catch(e) {
        return false;
    }
}

function activateApp(code) {
    const duration = validateActivation(code);
    if (!duration) return false;
    
    const fp = getDeviceFingerprint();
    const now = Date.now();
    let expireAt = null;
    
    if (duration === '3d') expireAt = now + 3 * 24 * 3600 * 1000;
    else if (duration === '7d') expireAt = now + 7 * 24 * 3600 * 1000;
    else if (duration === '30d') expireAt = now + 30 * 24 * 3600 * 1000;
    else if (duration === '3m') expireAt = now + 90 * 24 * 3600 * 1000;
    else if (duration === '6m') expireAt = now + 180 * 24 * 3600 * 1000;
    else if (duration === '12m') expireAt = now + 365 * 24 * 3600 * 1000;
    
    localStorage.setItem('iqku_activation', JSON.stringify({
        fingerprint: fp,
        code: code.toUpperCase().trim(),
        duration: duration,
        activated: true,
        activatedAt: now,
        expireAt: expireAt
    }));
    return true;
}

function deactivateApp() {
    localStorage.removeItem('iqku_activation');
}

function renderActivationEntryCard(isActivated) {
    return `
        <div class="settings-section">
            <div class="settings-section-header">
                <div class="settings-section-icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="12" y1="15" x2="12" y2="18"/></svg>
                </div>
                <div><div class="settings-section-title">Masukkan Kode Aktivasi</div><div class="settings-section-desc">Masukkan kode aktivasi yang diberikan superadmin</div></div>
            </div>
            <div class="settings-form-group">
                <div class="settings-input-wrapper"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg><input type="text" id="activationCodeInput" class="settings-input" placeholder="XXXX-XXXX" maxlength="9" style="font-family:monospace;letter-spacing:2px;text-transform:uppercase;"></div>
                <div class="settings-activation-actions"><button class="settings-btn-primary" onclick="doActivateApp()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Aktifkan</button>${isActivated ? '<button class="settings-btn-logout" onclick="doDeactivateApp()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>Nonaktifkan</button>' : ''}</div>
                <div id="activationMsg" class="settings-msg"></div>
            </div>
        </div>`;
}

function showActivationTab() {
    const fp = getDeviceFingerprint();
    const activation = localStorage.getItem('iqku_activation');
    let activationData = null;
    try { activationData = activation ? JSON.parse(activation) : null; } catch(e) {}
    const isActivated = activationData && activationData.activated;
    const activatedAt = activationData && activationData.activatedAt ? new Date(activationData.activatedAt).toLocaleString('id-ID') : '-';
    
    const durationLabels = {
        '3d': '3 Hari',
        '7d': '7 Hari',
        '30d': '30 Hari',
        '3m': '3 Bulan',
        '6m': '6 Bulan',
        '12m': '12 Bulan',
        'perm': 'Permanen'
    };
    const durLabel = activationData && activationData.duration ? durationLabels[activationData.duration] : 'Permanen';
    const expiresText = activationData && activationData.expireAt ? new Date(activationData.expireAt).toLocaleString('id-ID') : 'Permanen / Selamanya';

    document.getElementById('settingsContent').innerHTML = `
        <div class="settings-section">
            <div class="settings-section-header">
                <div class="settings-section-icon" style="background:linear-gradient(135deg,#667eea,#764ba2);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>
                </div>
                <div>
                    <div class="settings-section-title">Aktivasi Aplikasi</div>
                    <div class="settings-section-desc">Sistem aktivasi berdasarkan .Maju ID perangkat</div>
                </div>
            </div>
            <div class="settings-activation-fingerprint">
                <div class="settings-activation-fp-label">Kode Perangkat</div>
                <div class="settings-activation-fp-code">${fp}</div>
                <div class="settings-activation-fp-hint">Kode ini dihasilkan dari .Maju ID perangkat Anda.</div>
            </div>
            ${isActivated ? `
                <div class="settings-activation-status settings-activation-active">
                    <div class="settings-activation-status-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span class="settings-activation-status-text" style="color:#2ecc71;">Aktif</span>
                    </div>
                    <div class="settings-activation-status-detail">
                        <div>Kode: <strong>${activationData.code}</strong></div>
                        <div>Masa Aktif: <strong>${durLabel}</strong></div>
                        <div>Aktifkan: ${activatedAt}</div>
                        <div>Kadaluarsa: <strong>${expiresText}</strong></div>
                    </div>
                </div>
            ` : `
                <div class="settings-activation-status settings-activation-inactive">
                    <div class="settings-activation-status-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        <span class="settings-activation-status-text" style="color:#e74c3c;">Belum Aktif</span>
                    </div>
                </div>
            `}
        </div>

        <div class="settings-section">
            <div class="settings-section-header">
                <div class="settings-section-icon" style="background:linear-gradient(135deg,#43e97b,#38f9d7);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2l7 5v4c0 5-3 9-7 11-4-2-7-6-7-11V7l7-5z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div>
                    <div class="settings-section-title">Generate Kode Aktivasi</div>
                    <div class="settings-section-desc">Masukkan kode 8 karakter dari perangkat untuk generate kode aktivasi</div>
                </div>
            </div>
            <div class="settings-form-group">
                <div class="settings-input-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                    <input type="text" id="activationFingerprintInput" class="settings-input" placeholder="Kode Perangkat (8 karakter)" maxlength="8" style="font-family:monospace;letter-spacing:2px;text-transform:uppercase;">
                </div>
                <div style="margin-top: 10px; display: flex; align-items: center; background: var(--card-bg2); border: 1px solid var(--border-color); border-radius: 12px; padding: 0 14px; height: 44px; margin-bottom: 12px;">
                    <span style="font-size:1.1rem;margin-right:10px;">⏱️</span>
                    <select id="activationDurationSelect" style="background:transparent;border:none;outline:none;color:var(--text-color);font-size:0.9rem;width:100%;font-weight:600;">
                        <option value="3d">3 Hari</option>
                        <option value="7d">7 Hari</option>
                        <option value="30d">30 Hari</option>
                        <option value="3m">3 Bulan</option>
                        <option value="6m">6 Bulan</option>
                        <option value="12m">12 Bulan</option>
                        <option value="perm" selected>Permanen</option>
                    </select>
                </div>
                <button class="settings-btn-primary" onclick="generateActivationFromInput()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2l7 5v4c0 5-3 9-7 11-4-2-7-6-7-11V7l7-5z"/></svg>
                    Generate Kode Aktivasi
                </button>
                <div id="activationGenResult" class="settings-msg"></div>
            </div>
        </div>

    `;
}

function generateActivationFromInput() {
    const input = document.getElementById('activationFingerprintInput');
    const durationSelect = document.getElementById('activationDurationSelect');
    const result = document.getElementById('activationGenResult');
    
    const fp = input.value.trim().toUpperCase();
    const duration = durationSelect.value;
    
    if (fp.length !== 8) {
        result.style.color = '#e74c3c';
        result.textContent = 'Kode perangkat harus 8 karakter.';
        return;
    }
    
    const code = generateActivationCode(fp, duration);
    
    const durationLabels = {
        '3d': '3 Hari',
        '7d': '7 Hari',
        '30d': '30 Hari',
        '3m': '3 Bulan',
        '6m': '6 Bulan',
        '12m': '12 Bulan',
        'perm': 'Permanen'
    };
    
    result.style.color = '#2ecc71';
    result.innerHTML = `<strong>Kode Aktivasi (${durationLabels[duration]}): ${code}</strong><br><span style="font-size:0.72rem;color:var(--text-muted);">Berikan kode ini kepada pemilik perangkat.</span>`;
}

function doActivateApp() {
    const input = document.getElementById('activationCodeInput');
    const msg = document.getElementById('activationMsg');
    const code = input.value.trim();
    
    if (!code) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Masukkan kode aktivasi.';
        return;
    }
    
    if (activateApp(code)) {
        msg.style.color = '#2ecc71';
        msg.textContent = 'Aktivasi berhasil! Aplikasi telah diaktifkan.';
        setTimeout(() => showSettingsTab('bantuan'), 1000);
    } else {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Kode aktivasi tidak valid untuk perangkat ini.';
    }
}

function doDeactivateApp() {
    if (confirm('Nonaktifkan aplikasi di perangkat ini?')) {
        deactivateApp();
        showSettingsTab('bantuan');
    }
}

// ============================================================
// PRINT / SHARE HELPERS — Colorful KPI Layout
// ============================================================

function shouldAutoHome() {
    return localStorage.getItem('iqku_auto_home') !== 'false';
}

function toggleAutoHome() {
    const current = shouldAutoHome();
    localStorage.setItem('iqku_auto_home', (!current).toString());
    updateAutoHomeBtn();
}

function updateAutoHomeBtn() {
    const btn = document.getElementById('autoHomeToggleBtn');
    if (btn) {
        btn.textContent = shouldAutoHome() ? '🏠' : '📭';
        btn.title = shouldAutoHome() ? 'Kembali ke Beranda setelah share' : 'Tetap di halaman hasil setelah share';
    }
}

function getPrintTheme(testType) {
    const themes = {
        iq:    { gradient: 'linear-gradient(135deg,#667eea,#764ba2)', color: '#667eea', color2: '#764ba2', icon: '&#128300;', label: 'TES INTELEGENSIA', bg: 'rgba(102,126,234,0.08)' },
        disc:  { gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', color: '#f093fb', color2: '#f5576c', icon: '&#128200;', label: 'TES KEPRIBADIAN DISC', bg: 'rgba(240,147,251,0.08)' },
        mbti:  { gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', color: '#4facfe', color2: '#00f2fe', icon: '&#129504;', label: 'TES KEPRIBADIAN MBTI', bg: 'rgba(79,172,254,0.08)' },
        raisec: { gradient: 'linear-gradient(135deg,#e67e22,#d35400)', color: '#e67e22', color2: '#d35400', icon: '&#127919;', label: 'TES MINAT BAKAT RAISEC', bg: 'rgba(230,126,34,0.08)' }
    };
    return themes[testType] || themes.iq;
}

function getPrintHeaderHTML(testType) {
    const t = getPrintTheme(testType);
    const p = getProfile();
    const nameText = p ? p.name : 'Peserta';
    const ageText = p ? p.age + ' tahun' : '-';
    const dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    return `
    <div style="background:${t.bg};border-left:6px solid ${t.color2 || t.color};border-radius:14px;padding:20px 24px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 8px rgba(0,0,0,0.02);">
        <div>
            <div style="font-size:0.75rem;font-weight:800;color:${t.color2 || t.color};text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px;">Laporan Resmi Hasil Ujian</div>
            <div style="font-size:1.5rem;font-weight:800;color:#1a202c;line-height:1.2;">${t.label}</div>
        </div>
        <div style="text-align:right;font-size:0.8rem;color:#4a5568;line-height:1.4;border-left:1px solid rgba(0,0,0,0.08);padding-left:20px;">
            <div style="font-size:1.25rem;font-weight:800;background:${t.gradient || 'linear-gradient(135deg,#667eea,#764ba2)'};-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px;letter-spacing:0.5px;">IQ.ku</div>
            <div><strong>Nama:</strong> ${nameText}</div>
            <div><strong>Usia:</strong> ${ageText}</div>
            <div><strong>Tanggal:</strong> ${dateStr}</div>
        </div>
    </div>`;
}

function getPrintKPIHTML(testType) {
    const p = getProfile();
    let kpis = [];

    if (testType === 'iq') {
        const total = IQ_QUESTIONS.length;
        const correct = answers.reduce((sum, ans, idx) => sum + (ans === IQ_QUESTIONS[idx].answer ? 1 : 0), 0);
        const wrong = total - correct;
        const iqScore = Math.round(70 + (correct / total) * 80);
        const pct = Math.round((correct / total) * 100);
        const category = IQ_RESULTS.find(r => correct >= r.min && correct <= r.max);
        kpis = [
            { icon: '🏆', label: 'Skor IQ', value: iqScore, sub: category.label, bg: 'linear-gradient(135deg,#667eea,#764ba2)', textColor: '#fff', highlight: true },
            { icon: '✔', label: 'Benar', value: correct + '/' + total, sub: pct + '% akurasi', bg: 'linear-gradient(135deg,#2ecc71,#27ae60)', textColor: '#fff', color: '#2ecc71' },
            { icon: '✖', label: 'Salah', value: wrong, sub: 'perlu diperbaiki', bg: 'linear-gradient(135deg,#e74c3c,#c0392b)', textColor: '#fff', color: '#e74c3c' },
            { icon: '📈', label: 'Range', value: (iqScore - 5) + '-' + (iqScore + 5), sub: 'confidence interval', bg: 'linear-gradient(135deg,#f39c12,#e67e22)', textColor: '#fff', color: '#f39c12' }
        ];
    } else if (testType === 'disc') {
        const scores = { D: 0, I: 0, S: 0, C: 0 };
        answers.forEach(a => { if (a.most) scores[a.most] = (scores[a.most] || 0) + 1; if (a.least) scores[a.least] = (scores[a.least] || 0) - 1; });
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topType = sorted[0][0];
        const data = DISC_RESULTS[topType];
        kpis = [
            { icon: '🎯', label: 'Tipe Utama', value: topType, sub: data.name, bg: `linear-gradient(135deg,${data.color},${data.color}dd)`, textColor: '#fff', highlight: true },
            { icon: '⚡', label: 'Dominance', value: scores.D > 0 ? '+' + scores.D : scores.D, sub: 'D score', bg: 'linear-gradient(135deg,#e74c3c,#c0392b)', textColor: '#fff', color: '#e74c3c' },
            { icon: '☀', label: 'Influence', value: scores.I > 0 ? '+' + scores.I : scores.I, sub: 'I score', bg: 'linear-gradient(135deg,#f39c12,#e67e22)', textColor: '#fff', color: '#f39c12' },
            { icon: '♥', label: 'Steadiness', value: scores.S > 0 ? '+' + scores.S : scores.S, sub: 'S score', bg: 'linear-gradient(135deg,#2ecc71,#27ae60)', textColor: '#fff', color: '#2ecc71' },
            { icon: '⚙', label: 'Compliance', value: scores.C > 0 ? '+' + scores.C : scores.C, sub: 'C score', bg: 'linear-gradient(135deg,#3498db,#2980b9)', textColor: '#fff', color: '#3498db' }
        ];
    } else if (testType === 'mbti') {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        MBTI_QUESTIONS.forEach((q, i) => { if (answers[i] !== null) scores[q.options[answers[i]].letter]++; });
        const finalType = ((scores.E >= scores.I) ? 'E' : 'I') + ((scores.S >= scores.N) ? 'S' : 'N') + ((scores.T >= scores.F) ? 'T' : 'F') + ((scores.J >= scores.P) ? 'J' : 'P');
        const data = MBTI_TYPES[finalType] || MBTI_TYPES['INTJ'];
        const pctE = scores.E + scores.I > 0 ? Math.round((scores.E / (scores.E + scores.I)) * 100) : 50;
        const pctS = scores.S + scores.N > 0 ? Math.round((scores.S / (scores.S + scores.N)) * 100) : 50;
        const pctT = scores.T + scores.F > 0 ? Math.round((scores.T / (scores.T + scores.F)) * 100) : 50;
        const pctJ = scores.J + scores.P > 0 ? Math.round((scores.J / (scores.J + scores.P)) * 100) : 50;
        kpis = [
            { icon: '🧠', label: 'Tipe MBTI', value: finalType, sub: data.name, bg: 'linear-gradient(135deg,#4facfe,#667eea)', textColor: '#fff', highlight: true },
            { icon: '🌐', label: 'E vs I', value: pctE + '% E', sub: (100 - pctE) + '% I', bg: 'linear-gradient(135deg,#4facfe,#667eea)', textColor: '#fff', color: '#4facfe' },
            { icon: '💡', label: 'S vs N', value: pctS + '% S', sub: (100 - pctS) + '% N', bg: 'linear-gradient(135deg,#667eea,#764ba2)', textColor: '#fff', color: '#667eea' },
            { icon: '❤', label: 'T vs F', value: pctT + '% T', sub: (100 - pctT) + '% F', bg: 'linear-gradient(135deg,#f093fb,#f5576c)', textColor: '#fff', color: '#f093fb' },
            { icon: '🔁', label: 'J vs P', value: pctJ + '% J', sub: (100 - pctJ) + '% P', bg: 'linear-gradient(135deg,#2ecc71,#1abc9c)', textColor: '#fff', color: '#2ecc71' }
        ];
    } else if (testType === 'raisec') {
        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        RAISEC_QUESTIONS.forEach((q, i) => { if (answers[i] === true) scores[q.type]++; });
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topType = sorted[0][0];
        const hollandCode = sorted.slice(0, 3).map(s => s[0]).join('');
        const data = RAISEC_RESULTS[topType];
        const typeColors = { R: '#e74c3c', I: '#3498db', A: '#e67e22', S: '#2ecc71', E: '#9b59b6', C: '#1abc9c' };
        const typeNames = { R: 'Realistic', I: 'Investigative', A: 'Artistic', S: 'Social', E: 'Enterprising', C: 'Conventional' };
        kpis = [
            { icon: '🎯', label: 'Kode Holland', value: hollandCode, sub: data.name, bg: `linear-gradient(135deg,${typeColors[sorted[0][0]]},${typeColors[sorted[1][0]]})`, textColor: '#fff', highlight: true },
            { icon: '🛠', label: 'Realistic', value: scores.R + '/5', sub: typeNames.R, bg: 'linear-gradient(135deg,#e74c3c,#c0392b)', textColor: '#fff', color: '#e74c3c' },
            { icon: '🔬', label: 'Investigative', value: scores.I + '/5', sub: typeNames.I, bg: 'linear-gradient(135deg,#3498db,#2980b9)', textColor: '#fff', color: '#3498db' },
            { icon: '🎨', label: 'Artistic', value: scores.A + '/5', sub: typeNames.A, bg: 'linear-gradient(135deg,#e67e22,#d35400)', textColor: '#fff', color: '#e67e22' },
            { icon: '👥', label: 'Social', value: scores.S + '/5', sub: typeNames.S, bg: 'linear-gradient(135deg,#2ecc71,#27ae60)', textColor: '#fff', color: '#2ecc71' },
            { icon: '💼', label: 'Enterprising', value: scores.E + '/5', sub: typeNames.E, bg: 'linear-gradient(135deg,#9b59b6,#8e44ad)', textColor: '#fff', color: '#9b59b6' },
            { icon: '📝', label: 'Conventional', value: scores.C + '/5', sub: typeNames.C, bg: 'linear-gradient(135deg,#1abc9c,#16a085)', textColor: '#fff', color: '#1abc9c' }
        ];
    }

    return `
    <div style="display:flex;gap:10px;margin-bottom:24px;justify-content:space-between;flex-wrap:wrap;">
        ${kpis.map(k => {
            if (k.highlight) {
                return `
                <div style="flex:1.2;min-width:120px;background:${k.bg};border-radius:14px;padding:16px 8px;text-align:center;box-shadow:0 8px 16px rgba(102,126,234,0.12);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;">
                    <div style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-size:1.1rem;margin-bottom:6px;">${k.icon}</div>
                    <div style="font-size:1.45rem;font-weight:850;line-height:1.1;letter-spacing:0.5px;margin-bottom:2px;">${k.value}</div>
                    <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;opacity:0.85;">${k.label}</div>
                    <div style="font-size:0.65rem;opacity:0.9;margin-top:2px;font-weight:600;">${k.sub}</div>
                </div>`;
            }
            return `
            <div style="flex:1;min-width:105px;background:#fff;border:1px solid #e2e8f0;border-top:3px solid ${k.color};border-radius:12px;padding:14px 8px;text-align:center;box-shadow:0 2px 4px rgba(0,0,0,0.02);display:flex;flex-direction:column;align-items:center;justify-content:center;">
                <div style="width:32px;height:32px;border-radius:50%;background:${k.bg};color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;margin-bottom:8px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">${k.icon}</div>
                <div style="font-size:1.3rem;font-weight:800;line-height:1.1;color:#1a202c;margin-bottom:2px;">${k.value}</div>
                <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#718096;">${k.label}</div>
                <div style="font-size:0.65rem;color:#4a5568;margin-top:2px;font-weight:500;">${k.sub}</div>
            </div>`;
        }).join('')}
    </div>`;
}

function getPrintCSS() {
    return `
        :root {
            --text-muted: #718096; --text-muted5: #2d3748; --text-muted7: #1a202c; --text-dim: #a0aec0;
            --bar-bg: #edf2f7; --card-bg: #fff; --card-bg2: #f8fafc; --card-bg-hover: #f1f5f9;
            --border-color: #e2e8f0; --border-color2: #cbd5e1; --border-color4: #f1f5f9;
        }
        * { 
            box-sizing: border-box; 
            margin: 0; 
            padding: 0; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
        }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 36px; color: #2d3748; line-height: 1.6; background: #fff; }
        
        .stat-card { border-radius: 12px; padding: 16px 12px; text-align: center; border: 1px solid #e2e8f0; background: #f8fafc; }
        .stat-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin: 0 auto 8px; }
        .stat-value { font-size: 1.6rem; font-weight: 800; line-height: 1; margin-bottom: 3px; color: #1a202c; }
        .stat-label { font-size: 0.78rem; font-weight: 600; color: #718096; }
        
        .result-section { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
        .result-section h3 { font-size: 1.05rem; font-weight: 700; color: #1a202c; display: flex; align-items: center; gap: 10px; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #edf2f7; }
        .result-section h3 .icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: #fff; flex-shrink: 0; }
        
        .progress-container { background: #edf2f7; border-radius: 12px; height: 12px; overflow: hidden; margin-top: 8px; border: 1px solid #e2e8f0; }
        .progress-fill { height: 100%; border-radius: 12px; }
        
        .list-item { display: flex; align-items: flex-start; gap: 10px; padding: 12px 0; border-bottom: 1px solid #edf2f7; }
        .list-item:last-child { border-bottom: none; }
        .item-icon { width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; }
        .item-number { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: #fff; flex-shrink: 0; }
        
        .tag-item { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 24px; font-size: 0.82rem; font-weight: 600; margin: 4px; border: 1px solid; }
        
        .chart-bar-container { display: flex; flex-direction: column; align-items: center; height: 120px; justify-content: flex-end; }
        .chart-bar-value { font-size: 0.78rem; font-weight: 700; margin-bottom: 6px; color: #2d3748; }
        .chart-bar { width: 36px; height: 100%; background: #edf2f7; border-radius: 8px; overflow: hidden; display: flex; align-items: flex-end; border: 1px solid #e2e8f0; }
        .chart-bar-fill { width: 100%; border-radius: 6px 6px 0 0; }
        .chart-bar-label { margin-top: 8px; font-size: 0.85rem; font-weight: 700; color: #1a202c; }
        .chart-bar-sublabel { font-size: 0.7rem; color: #718096; margin-top: 2px; }
        
        .dimension-bar { margin-bottom: 16px; }
        .dimension-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .dimension-label { font-size: 0.88rem; font-weight: 600; color: #2d3748; }
        .dimension-track { display: flex; align-items: center; gap: 10px; }
        .dimension-track .track { flex: 1; height: 10px; background: #edf2f7; border-radius: 5px; overflow: hidden; border: 1px solid #e2e8f0; }
        .dimension-track .track .fill { height: 100%; border-radius: 5px; }
        .dimension-pct { font-size: 0.85rem; font-weight: 700; min-width: 36px; text-align: right; color: #1a202c; }
        
        .answer-item { display: flex; gap: 10px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 8px; }
        .answer-number { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
        .answer-content { flex: 1; }
        .answer-question { font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; color: #1a202c; }
        .answer-detail { font-size: 0.78rem; color: #718096; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .answer-badge { display: inline-flex; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 600; }
        
        hr { border: none; border-top: 1px solid #e2e8f0; margin: 20px 0; }
        .btn, .share-actions, .bottom-nav, .theme-toggle-btn, .print-hide, .result-actions, .result-hero { display: none !important; }
        
        @media print {
            body { padding: 0; }
            .result-section, .answer-item { break-inside: avoid; }
        }
    `;
}

function printResult() {
    const testType = currentTest;
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Hasil Tes IQ.ku</title><style>${getPrintCSS()}</style></head><body>
        ${getPrintHeaderHTML(testType)}
        ${getPrintKPIHTML(testType)}
        ${document.getElementById('resultContent').innerHTML}
        <hr style="margin-top:24px;">
        <p style="text-align:center;color:#aaa;font-size:0.72rem;margin-top:12px;">Hasil tes dari IQ.ku &bull; Dicetak ${new Date().toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'})}</p>
    </body></html>`);
    w.document.close();
    setTimeout(() => {
        w.focus();
        w.print();
        
        let called = false;
        const finishPrint = () => {
            if (called) return;
            called = true;
            try { w.close(); } catch(e) {}
            showSharePopup();
        };

        w.onafterprint = finishPrint;
        // Fallback in case print takes longer or onafterprint is delayed
        setTimeout(finishPrint, 2000);
    }, 600);
}

// ============================================================
// SHARE MODAL POPUP
// ============================================================

function showSharePopup() {
    if (document.getElementById('shareModalOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'shareModalOverlay';
    overlay.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: modalFadeIn 0.3s ease forwards;
    `;

    const card = document.createElement('div');
    card.style.cssText = `
        width: 90%;
        max-width: 400px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 24px;
        padding: 32px 24px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        transform: translateY(20px);
        opacity: 0;
        animation: modalSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    `;

    card.innerHTML = `
        <div style="font-size: 3.2rem; margin-bottom: 16px;">🎉</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-color); margin-bottom: 8px;">Laporan Berhasil Dibuat!</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px; line-height: 1.5;">
            Laporan hasil tes Anda telah siap. Apakah Anda ingin membagikannya sekarang?
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="triggerShareWAFromPopup()" style="
                width: 100%;
                padding: 14px;
                border: none;
                border-radius: 14px;
                background: linear-gradient(135deg, #2ecc71, #27ae60);
                color: #fff;
                font-weight: 700;
                font-size: 0.9rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 12px rgba(46,204,113,0.25);
                transition: transform 0.2s;
            " onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='none'">
                <span>💬</span> Bagikan ke WhatsApp
            </button>
            
            <button onclick="triggerShareBTFromPopup()" style="
                width: 100%;
                padding: 14px;
                border: none;
                border-radius: 14px;
                background: linear-gradient(135deg, #3498db, #2980b9);
                color: #fff;
                font-weight: 700;
                font-size: 0.9rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 12px rgba(52,152,219,0.25);
                transition: transform 0.2s;
            " onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='none'">
                <span>📡</span> Bagikan Bluetooth / Lainnya
            </button>
            
            <button onclick="closeSharePopupAndGoHome()" style="
                width: 100%;
                padding: 14px;
                border: 1px solid var(--border-color);
                border-radius: 14px;
                background: var(--card-bg2);
                color: var(--text-color);
                font-weight: 700;
                font-size: 0.9rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: background 0.2s;
            " onmouseover="this.style.background='var(--card-bg-hover)'" onmouseout="this.style.background='var(--card-bg2)'">
                🏠 Kembali ke Beranda
            </button>
        </div>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    if (!document.getElementById('modalAnimationStyles')) {
        const style = document.createElement('style');
        style.id = 'modalAnimationStyles';
        style.textContent = `
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes modalSlideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

function triggerShareWAFromPopup() {
    closeSharePopup();
    shareWhatsApp();
}

function triggerShareBTFromPopup() {
    closeSharePopup();
    shareBluetooth();
}

function closeSharePopup() {
    const overlay = document.getElementById('shareModalOverlay');
    if (overlay) {
        overlay.style.animation = 'modalFadeIn 0.2s ease reverse forwards';
        setTimeout(() => {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 200);
    }
}

function closeSharePopupAndGoHome() {
    closeSharePopup();
    showPage('home');
}

function shareWhatsApp() {
    const page = document.getElementById('resultContent');
    if (!page) { alert('Tidak ada hasil untuk dibagikan'); return; }

    const testType = currentTest;
    const p = getProfile();
    const fileName = p ? `Hasil_Tes_${p.name.replace(/\s+/g, '_')}.pdf` : 'Hasil_Tes_IQku.pdf';

    const fullHTML = `
        <style>${getPrintCSS()}</style>
        <div style="padding:28px;background:#fff;width:794px;color:#2d3748;box-sizing:border-box;">
            ${getPrintHeaderHTML(testType)}
            ${getPrintKPIHTML(testType)}
            ${page.innerHTML}
            <hr><p style="text-align:center;color:#aaa;font-size:0.72rem;margin-top:12px;">Hasil tes dari IQ.ku</p>
        </div>
    `;

    const container = document.createElement('div');
    container.style.cssText = 'position:absolute;left:0;top:0;width:794px;background:#fff;z-index:-99999;display:block!important;margin:0!important;padding:0!important;';
    container.innerHTML = fullHTML;
    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            logging: false,
            width: 794,
            windowWidth: 794,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save().then(() => {
        if (container.parentNode) container.parentNode.removeChild(container);
        const url = 'https://wa.me/?text=' + encodeURIComponent('Hasil tes IQ.ku saya sudah jadi! File PDF terlampir.');
        window.open(url, '_blank');
        if (shouldAutoHome()) showPage('home');
    }).catch(err => {
        if (container.parentNode) container.parentNode.removeChild(container);
        alert('Gagal membuat PDF: ' + err.message);
    });
}

function shareBluetooth() {
    const page = document.getElementById('resultContent');
    if (!page) { alert('Tidak ada hasil untuk dibagikan'); return; }

    const testType = currentTest;
    const p = getProfile();
    const fileName = p ? `Hasil_Tes_${p.name.replace(/\s+/g, '_')}.pdf` : 'Hasil_Tes_IQku.pdf';

    const fullHTML = `
        <style>${getPrintCSS()}</style>
        <div style="padding:28px;background:#fff;width:794px;color:#2d3748;box-sizing:border-box;">
            ${getPrintHeaderHTML(testType)}
            ${getPrintKPIHTML(testType)}
            ${page.innerHTML}
            <hr><p style="text-align:center;color:#aaa;font-size:0.72rem;margin-top:12px;">Hasil tes dari IQ.ku</p>
        </div>
    `;

    const container = document.createElement('div');
    container.style.cssText = 'position:absolute;left:0;top:0;width:794px;background:#fff;z-index:-99999;display:block!important;margin:0!important;padding:0!important;';
    container.innerHTML = fullHTML;
    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            logging: false,
            width: 794,
            windowWidth: 794,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).outputPdf('blob').then(blob => {
        if (container.parentNode) container.parentNode.removeChild(container);
        
        // Always trigger local download first
        downloadBlob(blob, fileName);
        
        // Then trigger native system share if supported
        const file = new File([blob], fileName, { type: 'application/pdf' });
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            setTimeout(() => {
                navigator.share({ title: 'Hasil Tes IQ.ku', files: [file] }).catch(() => {});
            }, 500);
        }
        
        if (shouldAutoHome()) showPage('home');
    }).catch(err => {
        if (container.parentNode) container.parentNode.removeChild(container);
        alert('Gagal membuat PDF: ' + err.message);
    });
}

function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function retakeTest() {
    startTest(currentTest);
}

// ============================================================
// LOGIN & PENGATURAN
// ============================================================

function getUsers() {
    try { return JSON.parse(localStorage.getItem('iqku_users')) || null; } catch(e) { return null; }
}

function saveUsers(users) {
    localStorage.setItem('iqku_users', JSON.stringify(users));
    return syncUsersToServer(users);
}

async function syncUsersToServer(users) {
    if (window.location.protocol === 'file:') return false;
    try {
        const response = await fetch('/api/users', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ users }) });
        return response.ok;
    } catch (error) {
        console.warn('Sinkronisasi pengguna ke server gagal:', error.message);
        return false;
    }
}

async function syncUsersFromServer() {
    if (window.location.protocol === 'file:') return getUsers();
    try {
        const response = await fetch('/api/users', { cache: 'no-store' });
        if (!response.ok) return getUsers();
        const payload = await response.json();
        if (Array.isArray(payload.users) && payload.users.length) {
            localStorage.setItem('iqku_users', JSON.stringify(payload.users));
            return payload.users;
        }
    } catch (error) {
        console.warn('Sinkronisasi pengguna dari server gagal:', error.message);
    }
    return getUsers();
}

function getLoginEnabled() {
    return localStorage.getItem('iqku_login_enabled') === 'true';
}

function initUsers() {
    const users = getUsers() || [];
    const bundledUsers = [
        { username: 'Arga', password: '171289', role: 'Admin' },
        { username: 'Tamu', password: '', role: 'Guest' },
        {
            username: 'Ayo Maju',
            password: '1234',
            role: 'User',
            active: true,
            duration: '7d',
            createdAt: 1783819245514,
            expireAt: 1784424045534,
            features: {}
        }
    ];
    let changed = false;
    bundledUsers.forEach(defaultUser => {
        if (!users.some(user => user.username === defaultUser.username)) {
            users.push(defaultUser);
            changed = true;
        }
    });
    if (changed) {
        localStorage.setItem('iqku_users', JSON.stringify(users));
    }
    syncUsersFromServer();
}

// ============================================================
// SESSION MANAGEMENT & DEVICE TRACKING
// ============================================================

function getDeviceId() {
    let deviceId = localStorage.getItem('iqku_device_id');
    if (!deviceId) {
        deviceId = 'DEV-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('iqku_device_id', deviceId);
    }
    return deviceId;
}

function getActiveSessions() {
    try { return JSON.parse(localStorage.getItem('iqku_active_sessions')) || {}; } catch(e) { return {}; }
}

function saveActiveSessions(sessions) {
    localStorage.setItem('iqku_active_sessions', JSON.stringify(sessions));
}

function registerSession(username) {
    const sessions = getActiveSessions();
    const deviceId = getDeviceId();
    const sessionId = 'SES-' + Date.now() + '-' + Math.random().toString(36).substr(2, 8);
    const now = Date.now();
    
    sessions[username] = {
        deviceId: deviceId,
        sessionId: sessionId,
        loginAt: now,
        expireAt: now + (24 * 60 * 60 * 1000)
    };
    saveActiveSessions(sessions);
    
    // Save current session ID to local storage for comparison
    localStorage.setItem('iqku_session_id', sessionId);
}

function isMySessionValid(username) {
    const sessions = getActiveSessions();
    const deviceId = getDeviceId();
    const localSessionId = localStorage.getItem('iqku_session_id');
    const session = sessions[username];
    
    // No session in database = invalid
    if (!session) return false;
    
    // Session expired = invalid
    if (session.expireAt && session.expireAt < Date.now()) return false;
    
    // Device ID doesn't match = someone else logged in from different device
    if (session.deviceId !== deviceId) return false;
    
    // Session ID doesn't match = someone logged in again on this device or another
    if (session.sessionId !== localSessionId) return false;
    
    return true;
}

function destroySession(username) {
    const sessions = getActiveSessions();
    delete sessions[username];
    saveActiveSessions(sessions);
    localStorage.removeItem('iqku_session_id');
}

// ============================================================
// PIN SYSTEM
// ============================================================

function getPendingPins() {
    try { return JSON.parse(localStorage.getItem('iqku_pending_pins')); } catch(e) { return {}; }
}

function savePendingPins(pins) {
    localStorage.setItem('iqku_pending_pins', JSON.stringify(pins));
}

function generatePin(username) {
    const pins = getPendingPins();
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    const expireAt = Date.now() + (10 * 60 * 1000); // 10 minutes
    
    pins[username] = {
        pin: pin,
        expireAt: expireAt,
        createdAt: Date.now(),
        used: false
    };
    savePendingPins(pins);
    
    return pin;
}

function validatePin(username, inputPin) {
    const pins = getPendingPins();
    const pinData = pins[username];
    
    if (!pinData) return { valid: false, message: 'PIN tidak ditemukan' };
    if (pinData.used) return { valid: false, message: 'PIN sudah digunakan' };
    if (pinData.expireAt < Date.now()) return { valid: false, message: 'PIN sudah expired' };
    if (pinData.pin !== inputPin) return { valid: false, message: 'PIN salah' };
    
    // Mark as used
    pinData.used = true;
    savePendingPins(pins);
    
    // Destroy old session and register new one
    destroySession(username);
    registerSession(username);
    
    return { valid: true, message: 'PIN valid! Session berhasil dipindahkan.' };
}

function normalizeUsername(username) {
    return (username || '').toString().trim();
}

function isSuperAdmin(username) {
    // Arga is the permanent superadmin. All access checks should treat Arga as full-access without exception.
    return normalizeUsername(username).toLowerCase() === 'arga';
}

function isGuestUser() {
    const loggedUser = normalizeUsername(localStorage.getItem('iqku_logged_user') || '');
    return loggedUser === 'Tamu';
}

function isUserRole() {
    const loggedUser = localStorage.getItem('iqku_logged_user') || '';
    if (!loggedUser || loggedUser === 'Tamu') return false;
    if (isSuperAdmin(loggedUser)) return false;
    const users = getUsers();
    const user = users.find(u => u.username === loggedUser);
    return user && user.role === 'User';
}

function isAdminUser(username) {
    const cleanName = normalizeUsername(username);
    if (isSuperAdmin(cleanName)) return true;
    const users = getUsers();
    const user = users.find(u => normalizeUsername(u.username).toLowerCase() === cleanName.toLowerCase());
    return !!user && user.role === 'Admin';
}

function getSettingsAccessContext() {
    const loggedUser = normalizeUsername(localStorage.getItem('iqku_logged_user') || '');
    const isSuper = isSuperAdmin(loggedUser);
    const isGuest = loggedUser === 'Tamu';
    const users = getUsers() || [];
    const user = users.find(u => normalizeUsername(u.username) === loggedUser);
    const isAdmin = !isSuper && !isGuest && !!user && user.role === 'Admin';
    const isRegularUser = !isSuper && !isGuest && !!user && user.role === 'User';

    return { loggedUser, isSuper, isAdmin, isRegularUser, isGuest, user };
}

function canAccessSettingsTab(tab) {
    const access = getSettingsAccessContext();
    const allowedTabs = {
        umum: true,
        manajemen: access.isSuper || access.isAdmin,
        aktivasi: access.isSuper,
        bantuan: true,
        tentang: true
    };
    return !!allowedTabs[tab];
}

// ============================================================
// FEATURE MANAGEMENT — Role-Based
// ============================================================

const DEFAULT_FEATURES = {
    test_iq: true,
    test_disc: true,
    test_mbti: true,
    test_raisec: true,
    history: true,
    share_whatsapp: true,
    share_bluetooth: true,
    share_print: true,
    profile: true,
    guest_login: true,
    dark_theme: true,
    settings: true
};

// Guest-only features (can only test, nothing else)
const GUEST_FEATURES = {
    test_iq: true,
    test_disc: true,
    test_mbti: true,
    test_raisec: true,
    history: false,
    share_whatsapp: false,
    share_bluetooth: false,
    share_print: false,
    profile: false,
    guest_login: false,
    dark_theme: true,
    settings: false
};

// Feature groups used in Manajemen Fitur and per-user feature selection
const FEATURE_GROUPS = [
    {
        title: 'Tes',
        desc: 'Kelola jenis tes yang tersedia',
        items: [
            { key: 'test_iq', label: 'Tes IQ (Intelegensia)', icon: '&#128300;', color: '#667eea' },
            { key: 'test_disc', label: 'Tes DISC (Kepribadian)', icon: '&#128200;', color: '#f093fb' },
            { key: 'test_mbti', label: 'Tes MBTI (Kepribadian)', icon: '&#129504;', color: '#4facfe' },
            { key: 'test_raisec', label: 'Tes RAISEC (Minat Bakat)', icon: '&#127919;', color: '#e67e22' }
        ]
    },
    {
        title: 'Berbagi & Cetak',
        desc: 'Kelola fitur berbagi hasil tes',
        items: [
            { key: 'share_whatsapp', label: 'Bagikan via WhatsApp', icon: '&#128172;', color: '#25D366' },
            { key: 'share_bluetooth', label: 'Bagikan via Bluetooth', icon: '&#128228;', color: '#3498db' },
            { key: 'share_print', label: 'Cetak / Simpan PDF', icon: '&#128424;', color: '#9b59b6' }
        ]
    },
    {
        title: 'Lainnya',
        desc: 'Fitur pendukung aplikasi',
        items: [
            { key: 'history', label: 'Riwayat Tes', icon: '&#128214;', color: '#2ecc71' },
            { key: 'profile', label: 'Profil Pengguna', icon: '&#128100;', color: '#e74c3c' },
            { key: 'guest_login', label: 'Login Tamu', icon: '&#128101;', color: '#f39c12', superOnly: true },
            { key: 'dark_theme', label: 'Tema Gelap / Terang', icon: '&#127769;', color: '#34495e' },
            { key: 'settings', label: 'Pengaturan', icon: '&#9881;', color: '#7f8c8d', superOnly: true }
        ]
    }
];

function getFeatures() {
    try {
        const saved = JSON.parse(localStorage.getItem('iqku_features'));
        if (saved && typeof saved === 'object') {
            return { ...DEFAULT_FEATURES, ...saved };
        }
    } catch(e) {}
    return { ...DEFAULT_FEATURES };
}

function saveFeatures(features) {
    localStorage.setItem('iqku_features', JSON.stringify(features));
}

function isFeatureEnabled(featureKey) {
    const loggedUser = localStorage.getItem('iqku_logged_user') || '';
    
    // Superadmin: always full access
    if (isSuperAdmin(loggedUser)) return true;
    
    // Guest: only tests + dark_theme
    if (loggedUser === 'Tamu') {
        return GUEST_FEATURES[featureKey] === true;
    }
    
    // Regular User: per-user features if set, else global (superadmin-controlled)
    const users = getUsers() || [];
    const user = users.find(u => u.username === loggedUser);
    if (user && user.features && typeof user.features === 'object' && Object.prototype.hasOwnProperty.call(user.features, featureKey)) {
        return user.features[featureKey] !== false;
    }
    const features = getFeatures();
    return features[featureKey] !== false;
}

function toggleFeature(featureKey) {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;

    const features = getFeatures();
    features[featureKey] = !features[featureKey];
    saveFeatures(features);
    showSettingsTab('umum');
}

function togglePrintFeature() {
    const access = getSettingsAccessContext();
    if (!access.isSuper && !access.isAdmin) return;

    const features = getFeatures();
    features.share_print = !features.share_print;
    saveFeatures(features);
    showSettingsTab('umum');
}

function resetAllFeatures() {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;

    const features = {};
    Object.keys(DEFAULT_FEATURES).forEach(k => features[k] = true);
    saveFeatures(features);
    showSettingsTab('manajemen');
}

function disableAllFeatures() {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;

    const features = {};
    Object.keys(DEFAULT_FEATURES).forEach(k => features[k] = false);
    saveFeatures(features);
    showSettingsTab('manajemen');
}

// ============================================================
// DATA MANAGEMENT FUNCTIONS
// ============================================================

function clearMyHistory() {
    if (!confirm('Hapus semua riwayat tes Anda? Tindakan ini tidak dapat dibatalkan.')) return;
    localStorage.removeItem('iqku_history');
    showSettingsTab('umum');
}

function clearProfile() {
    if (!confirm('Hapus data profil (nama & usia)? Anda akan diminta mengisi ulang saat tes berikutnya.')) return;
    localStorage.removeItem('iqku_profile');
    showSettingsTab('umum');
}

function clearAllHistory() {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;
    if (!confirm('Hapus SEMUA riwayat tes dari semua pengguna? Tindakan ini tidak dapat dibatalkan.')) return;
    localStorage.removeItem('iqku_history');
    showManajemenSubtab('data');
}

function resetUserPassword(username) {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;
    const newPass = document.getElementById('resetPassInput_' + username.replace(/[^a-zA-Z0-9]/g, '_'));
    if (!newPass) return;
    const pw = newPass.value.trim();
    if (pw.length < 4) {
        alert('Password minimal 4 karakter.');
        return;
    }
    const users = getUsers() || [];
    const user = users.find(u => u.username === username);
    if (!user) return;
    user.password = pw;
    saveUsers(users);
    newPass.value = '';
    const msg = document.getElementById('resetPassMsg_' + username.replace(/[^a-zA-Z0-9]/g, '_'));
    if (msg) {
        msg.style.color = '#2ecc71';
        msg.textContent = 'Password berhasil direset.';
        setTimeout(() => { if (msg) msg.textContent = ''; }, 3000);
    }
}

function factoryReset() {
    const access = getSettingsAccessContext();
    if (!access.isSuper) return;
    if (!confirm('⚠️ FACTORY RESET\n\nSemua data akan dihapus:\n- Riwayat tes\n- Profil peserta\n- Data pengguna\n- Pengaturan fitur\n- Data aktivasi\n- Sesi aktif\n\nTindakan ini TIDAK DAPAT dibatalkan.\nLanjutkan?')) return;
    if (!confirm('Apakah Anda BENAR-BENAR yakin ingin menghapus semua data?')) return;
    
    const keysToRemove = [
        'iqku_history', 'iqku_profile', 'iqku_features',
        'iqku_activation', 'iqku_active_sessions', 'iqku_pending_pins',
        'iqku_auto_home', 'iqku_theme', 'iqku_login_enabled'
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));
    // Reset users to default (keep superadmin)
    const defaultUsers = [
        { username: 'Arga', password: 'admin123', role: 'Admin', features: { ...DEFAULT_FEATURES } },
        { username: 'Tamu', password: '', role: 'User', features: { ...GUEST_FEATURES } }
    ];
    saveUsers(defaultUsers);
    alert('Factory reset berhasil. Aplikasi akan dimuat ulang.');
    location.reload();
}

function toggleThemeFromSettings() {
    toggleTheme();
    showSettingsTab('umum');
}

function toggleAutoHomeFromSettings() {
    toggleAutoHome();
    showSettingsTab('umum');
}

function getPendingPinForUser(username) {
    const pins = getPendingPins();
    const pinData = pins[username];
    if (!pinData || pinData.used || pinData.expireAt < Date.now()) return null;
    return pinData;
}

// ============================================================
// DEMO DATA INITIALIZATION & TEST PRINT
// ============================================================

function initializeDemoHistory() {
    try {
        const existing = localStorage.getItem('iqku_history');
        if (existing) {
            const parsed = JSON.parse(existing);
            if (Array.isArray(parsed) && parsed.length > 0) return;
        }
    } catch(e) {}

    const demoEntries = [
        {
            id: 1700000000001,
            type: 'iq',
            date: '10 Juli 2026 08:30',
            iqScore: 125,
            label: 'Superior',
            correct: 22,
            total: 25,
            userName: 'Arga',
            userAge: 19,
            answers: [1, 2, 2, 2, 0, 3, 2, 0, 0, 1, 0, 0, 2, 1, 0, 1, 2, 1, 3, 1, 2, 1, 0, 1, 3]
        },
        {
            id: 1700000000002,
            type: 'disc',
            date: '10 Juli 2026 08:35',
            topType: 'D',
            typeName: 'Dominance',
            scores: { D: 80, I: 20, S: 40, C: 30 },
            rawScores: { D: 6, I: -2, S: 1, C: 0 },
            userName: 'Arga',
            userAge: 19,
            answers: Array(24).fill(null).map(() => ({ most: 'D', least: 'I' }))
        },
        {
            id: 1700000000003,
            type: 'mbti',
            date: '10 Juli 2026 08:40',
            mbtiType: 'ENTJ',
            mbtiName: 'Commander',
            scores: { E: 4, I: 1, S: 1, N: 4, T: 4, F: 1, J: 4, P: 1 },
            userName: 'Arga',
            userAge: 19,
            answers: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        },
        {
            id: 1700000000004,
            type: 'raisec',
            date: '10 Juli 2026 08:45',
            topType: 'I',
            topName: 'Investigative',
            hollandCode: 'IAS',
            scores: { R: 2, I: 5, A: 4, S: 3, E: 1, C: 0 },
            percentages: { R: 40, I: 100, A: 80, S: 60, E: 20, C: 0 },
            userName: 'Arga',
            userAge: 19,
            answers: Array(30).fill(false).map((_, i) => i >= 5 && i < 10)
        }
    ];

    localStorage.setItem('iqku_history', JSON.stringify(demoEntries));
}

function triggerTestPrint() {
    const h = getHistory();
    if (h.length === 0) {
        alert('Tidak ada riwayat hasil tes untuk dicetak.');
        return;
    }
    const entry = h[0];
    
    const prevTest = currentTest;
    const prevAnswers = answers ? [...answers] : [];
    const prevPage = document.querySelector('.page.active')?.id || 'home';
    const prevResultContent = document.getElementById('resultContent').innerHTML;

    currentTest = entry.type;
    answers = entry.answers || [];
    
    if (entry.type === 'iq') showIQResult(true);
    else if (entry.type === 'disc') showDISCResult(true);
    else if (entry.type === 'mbti') showMBTIResult(true);
    else showRAISECResult(true);
    
    printResult();
    
    setTimeout(() => {
        currentTest = prevTest;
        answers = prevAnswers;
        document.getElementById('resultContent').innerHTML = prevResultContent;
        showPage(prevPage);
    }, 1200);
}

function checkLogin() {
    initUsers();
    initializeDemoHistory();

    const startupParams = new URLSearchParams(window.location.search);
    if (startupParams.get('postLogin') === '1') {
        startupParams.delete('postLogin');
        const cleanUrl = window.location.pathname + (startupParams.toString() ? '?' + startupParams.toString() : '') + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
        showPage('home');
        return;
    }
    
    // Check if app is not activated and trial (3 days) has expired
    if (!isAppActivated()) {
        const elapsed = Date.now() - getFirstRunTime();
        const limit = 3 * 24 * 3600 * 1000;
        if (elapsed > limit) {
            showTrialExpiredScreen();
            return;
        }
    }
    // Clean all expired sessions on startup
    const sessions = getActiveSessions();
    const now = Date.now();
    Object.keys(sessions).forEach(key => {
        if (sessions[key].expireAt && sessions[key].expireAt < now) {
            delete sessions[key];
        }
    });
    saveActiveSessions(sessions);
    
    // Check if current user session is expired
    const logged = localStorage.getItem('iqku_logged_user');
    if (logged && logged !== 'Arga') { // Superadmin never expires
        const users = getUsers();
        const user = users.find(u => u.username === logged);
        if (user && user.expireAt && Date.now() > user.expireAt) {
            logout();
            alert('Sesi Anda telah berakhir karena masa aktif akun Anda telah habis.');
            return;
        }
    }
    
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    const isPageRefresh = navigationEntry
        ? navigationEntry.type === 'reload'
        : performance.navigation && performance.navigation.type === 1;

    if (isPageRefresh) {
        localStorage.removeItem('iqku_logged_in');
        localStorage.removeItem('iqku_logged_user');
        document.getElementById('loginError').style.display = 'none';
        showPage('login');
        document.getElementById('bottomNav').classList.remove('visible');
        return;
    }

    if (getLoginEnabled()) {
        document.getElementById('loginError').style.display = 'none';
        showPage('login');
        document.getElementById('bottomNav').classList.remove('visible');
    } else {
        // The standalone splash screen has already been shown at startup.
        showPage('home');
    }
}

function startSplashLoading() {
    const returnUrl = new URL('index.html', window.location.href);
    returnUrl.searchParams.set('postLogin', '1');
    window.location.href = 'splash.html?next=' + encodeURIComponent(returnUrl.href);
}

async function doLogin() {
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value.trim();
    await syncUsersFromServer();
    const users = getUsers();
    const user = users.find(u => u.username === username);
    
    if (user) {
        // Check if account has expired
        if (user.expireAt && Date.now() > user.expireAt) {
            document.getElementById('loginError').textContent = 'Akun ini telah kadaluarsa. Silakan hubungi Administrator.';
            document.getElementById('loginError').style.display = 'block';
            return;
        }

        // Check if it's guest user (no password required)
        if (user.role === 'Guest' || user.password === '') {
            registerSession(username);
            localStorage.setItem('iqku_logged_in', 'true');
            localStorage.setItem('iqku_logged_user', username);
            document.getElementById('loginError').style.display = 'none';
            startSplashLoading();
            return;
        }
        
        // Regular user - check password
        if (user.password === password) {
            // Always register new session (overwrites old one = kicks out old device)
            registerSession(username);
            localStorage.setItem('iqku_logged_in', 'true');
            localStorage.setItem('iqku_logged_user', username);
            document.getElementById('loginError').style.display = 'none';
            startSplashLoading();
            return;
        }
    }
    
    document.getElementById('loginError').textContent = 'Username atau password salah.';
    document.getElementById('loginError').style.display = 'block';
}

function loginAsGuest() {
    registerSession('Tamu');
    localStorage.setItem('iqku_logged_in', 'true');
    localStorage.setItem('iqku_logged_user', 'Tamu');
    document.getElementById('loginError').style.display = 'none';
    startSplashLoading();
}

function toggleSettingsSection(sectionId) {
    const content = document.getElementById('content_' + sectionId);
    const arrow = document.getElementById('arrow_' + sectionId);
    if (!content) return;
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
}

function showSettings() {
    showPage('pengaturan');
    showSettingsTab('umum');
}

function showSettingsTab(tab) {
    const access = getSettingsAccessContext();
    const normalizedTab = tab === 'activation' ? 'aktivasi' : (tab === 'tentang' ? 'bantuan' : tab);
    const effectiveTab = canAccessSettingsTab(normalizedTab) ? normalizedTab : 'umum';
    tab = effectiveTab;

    document.querySelectorAll('#settingsTabs .filter-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`#settingsTabs .filter-tab[data-ssettings="${tab}"]`);
    if (activeTab) activeTab.classList.add('active');

    const p = getLoginEnabled();
    const users = getUsers() || [];
    const loggedUser = access.loggedUser;

    const tabSelectors = {
        manajemen: document.getElementById('manajemenTab'),
        aktivasi: document.getElementById('activationTab')
    };

    if (tabSelectors.manajemen) tabSelectors.manajemen.style.display = (access.isSuper || access.isAdmin) ? 'inline-block' : 'none';
    if (tabSelectors.aktivasi) tabSelectors.aktivasi.style.display = access.isSuper ? 'inline-block' : 'none';

    if (tab === 'umum') {
        const isLight = document.documentElement.classList.contains('light-theme');
        const autoHome = shouldAutoHome();
        const profile = getProfile();
        const history = (() => { try { return JSON.parse(localStorage.getItem('iqku_history')) || []; } catch(e) { return []; } })();
        const roleBadge = access.isSuper ? '<span class="settings-role-badge settings-role-super">Superadmin</span>' :
                          access.isAdmin ? '<span class="settings-role-badge settings-role-admin">Admin</span>' :
                          access.isGuest ? '<span class="settings-role-badge settings-role-guest">Tamu</span>' :
                          '<span class="settings-role-badge settings-role-user">User</span>';
        const roleColor = access.isSuper ? '#764ba2' : access.isAdmin ? '#667eea' : access.isGuest ? '#f39c12' : '#2ecc71';
        const avatarChar = access.isGuest ? '&#128101;' : (loggedUser ? loggedUser.charAt(0).toUpperCase() : '?');

        const nameVal = profile ? (profile.name || '') : '';
        const ageVal = profile ? (profile.age || '') : '';
        const genderVal = profile ? (profile.gender || '') : '';
        const instansiVal = profile ? (profile.instansi || '') : '';

        document.getElementById('settingsContent').innerHTML = `
            <!-- Kartu Akun Singkat -->
            <div class="settings-section" style="margin-bottom:16px;">
                <div class="settings-account-card" style="padding:16px;">
                    <div class="settings-account-avatar" style="background:linear-gradient(135deg,${roleColor},${roleColor}cc); width:50px; height:50px; font-size:1.4rem;">${avatarChar}</div>
                    <div class="settings-account-info">
                        <div class="settings-account-name" style="font-size:1.05rem;">${loggedUser || 'Pengguna'}${roleBadge}</div>
                        <div class="settings-account-meta" style="font-size:0.75rem; display:flex; gap:12px; margin-top:2px;">
                            <span>📊 ${history.length} Tes Selesai</span>
                            <span>👤 ${profile ? 'Profil terisi' : 'Profil kosong'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 1: Profil Pengguna (Selalu Terbuka / Expanded) -->
            <div class="settings-section" style="margin-bottom:16px;">
                <div class="settings-section-header" style="border-bottom: 1px solid var(--border-color); padding-bottom:12px; margin-bottom:12px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="settings-section-icon" style="background:linear-gradient(135deg,#ff9a9e,#fecfef);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div>
                            <div class="settings-section-title">Profil Pengguna</div>
                            <div class="settings-section-desc">Identitas peserta tes aktif aplikasi</div>
                        </div>
                    </div>
                </div>
                
                <div class="settings-form-group" style="text-align:left;">
                    <div class="form-group" style="margin-bottom:12px;">
                        <label class="form-label" style="font-size:0.72rem;font-weight:700;color:var(--text-color);margin-bottom:6px;display:block;letter-spacing:0.5px;">NAMA LENGKAP</label>
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <input type="text" id="settingsProfileName" class="settings-input" placeholder="Nama lengkap" value="${nameVal}" style="font-size:0.85rem;">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label class="form-label" style="font-size:0.72rem;font-weight:700;color:var(--text-color);margin-bottom:6px;display:block;letter-spacing:0.5px;">USIA (TAHUN)</label>
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            <input type="number" id="settingsProfileAge" class="settings-input" placeholder="Usia" value="${ageVal}" style="font-size:0.85rem;">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label class="form-label" style="font-size:0.72rem;font-weight:700;color:var(--text-color);margin-bottom:6px;display:block;letter-spacing:0.5px;">JENIS KELAMIN</label>
                        <div style="background:var(--card-bg2);border:1px solid var(--border-color);border-radius:12px;padding:0 12px;height:40px;display:flex;align-items:center;">
                            <span style="font-size:0.9rem;margin-right:10px;opacity:0.6;">👥</span>
                            <select id="settingsProfileGender" style="background:transparent;border:none;outline:none;color:var(--text-color);font-size:0.85rem;width:100%;font-weight:600;">
                                <option value="" disabled ${!genderVal ? 'selected' : ''}>Pilih Jenis Kelamin</option>
                                <option value="Laki-laki" ${genderVal === 'Laki-laki' ? 'selected' : ''}>Laki-laki</option>
                                <option value="Perempuan" ${genderVal === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom:16px;">
                        <label class="form-label" style="font-size:0.72rem;font-weight:700;color:var(--text-color);margin-bottom:6px;display:block;letter-spacing:0.5px;">INSTANSI / SEKOLAH</label>
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2);">
                            <span style="font-size:0.9rem;margin-right:10px;opacity:0.6;">🏢</span>
                            <input type="text" id="settingsProfileInstansi" class="settings-input" placeholder="Instansi / Sekolah" value="${instansiVal}" style="padding-left:0; font-size:0.85rem;">
                        </div>
                    </div>
                    <button class="settings-btn-primary" onclick="saveSettingsProfile()" style="height:38px; font-size:0.85rem; font-weight:700; width:100%; display:flex; align-items:center; justify-content:center; gap:8px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                        Simpan Profil
                    </button>
                    <div id="settingsProfileMsg" class="settings-msg" style="margin-top:8px;"></div>
                </div>
            </div>

            <!-- SECTION 2: Tampilan & Keamanan (Collapsible) -->
            <div class="settings-section" style="margin-bottom:16px;">
                <div class="settings-section-header" onclick="toggleSettingsSection('tampilan_keamanan')" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="settings-section-icon" style="background:linear-gradient(135deg,#a18cd1,#fbc2eb);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                        </div>
                        <div>
                            <div class="settings-section-title">Tampilan & Fitur</div>
                            <div class="settings-section-desc">Atur tema, alur beranda, & login</div>
                        </div>
                    </div>
                    <span id="arrow_tampilan_keamanan" style="font-size:0.75rem; transition:transform 0.22s; transform:rotate(0deg); opacity:0.6;">▼</span>
                </div>
                
                <div id="content_tampilan_keamanan" style="display:none; margin-top:14px; border-top:1px solid var(--border-color); padding-top:12px;">
                    <div class="settings-option-card" style="padding:10px 12px; margin-bottom:8px;">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:${isLight ? 'rgba(243,156,18,0.1)' : 'rgba(52,73,94,0.18)'}; width:32px; height:32px;">
                                <span style="font-size:0.95rem;">${isLight ? '☀️' : '🌙'}</span>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Tema ${isLight ? 'Terang' : 'Gelap'}</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">Ganti kecerahan tema aplikasi</div>
                            </div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" ${isLight ? 'checked' : ''} onchange="toggleThemeFromSettings()">
                            <span class="toggle-slider" style="width:40px; height:22px;"></span>
                        </label>
                    </div>
                    
                    <div class="settings-option-card" style="padding:10px 12px; margin-bottom:8px;">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:rgba(46,204,113,0.1); width:32px; height:32px;">
                                <span style="font-size:0.95rem;">🏠</span>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Auto Kembali ke Beranda</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">Kembali ke beranda sehabis cetak</div>
                            </div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" ${autoHome ? 'checked' : ''} onchange="toggleAutoHomeFromSettings()">
                            <span class="toggle-slider" style="width:40px; height:22px;"></span>
                        </label>
                    </div>
                    
                    <div class="settings-option-card" style="padding:10px 12px;">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:rgba(52,152,219,0.1); width:32px; height:32px;">
                                <span style="font-size:0.95rem;">🔒</span>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Aktifkan Login</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">Minta login setiap kali aplikasi dibuka</div>
                            </div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="loginToggle" ${p ? 'checked' : ''} onchange="toggleLogin()">
                            <span class="toggle-slider" style="width:40px; height:22px;"></span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- SECTION 3: Ganti Password (Collapsible) -->
            <div class="settings-section" style="margin-bottom:16px;">
                <div class="settings-section-header" onclick="toggleSettingsSection('ganti_password')" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="settings-section-icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="12" y1="15" x2="12" y2="18"/></svg>
                        </div>
                        <div>
                            <div class="settings-section-title">Ganti Password</div>
                            <div class="settings-section-desc">Ganti kredensial password akun Anda</div>
                        </div>
                    </div>
                    <span id="arrow_ganti_password" style="font-size:0.75rem; transition:transform 0.22s; transform:rotate(0deg); opacity:0.6;">▼</span>
                </div>
                
                <div id="content_ganti_password" style="display:none; margin-top:14px; border-top:1px solid var(--border-color); padding-top:12px; text-align:left;">
                    <div class="settings-form-group">
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2); margin-bottom:10px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                            <input type="password" id="currentPass" class="settings-input" placeholder="Password saat ini" style="font-size:0.85rem;">
                        </div>
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2); margin-bottom:10px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="12" y1="15" x2="12" y2="18"/></svg>
                            <input type="password" id="newPass" class="settings-input" placeholder="Password baru" style="font-size:0.85rem;">
                        </div>
                        <div class="settings-input-wrapper" style="height:40px; padding:0 12px; background:var(--card-bg2); margin-bottom:14px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                            <input type="password" id="confirmPass" class="settings-input" placeholder="Konfirmasi password baru" style="font-size:0.85rem;">
                        </div>
                        <button class="settings-btn-primary" onclick="changePassword()" style="height:38px; font-size:0.85rem; font-weight:700; width:100%; display:flex; align-items:center; justify-content:center; gap:8px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                            Simpan Password
                        </button>
                        <div id="passMsg" class="settings-msg" style="margin-top:8px;"></div>
                    </div>
                </div>
            </div>

            <!-- SECTION 4: Data & Penyimpanan (Collapsible) -->
            <div class="settings-section" style="margin-bottom:16px;">
                <div class="settings-section-header" onclick="toggleSettingsSection('data_penyimpanan')" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div class="settings-section-icon" style="background:linear-gradient(135deg,#f6d365,#fda085);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
                        </div>
                        <div>
                            <div class="settings-section-title">Data & Penyimpanan</div>
                            <div class="settings-section-desc">Pengelolaan data, hapus riwayat, & uji coba</div>
                        </div>
                    </div>
                    <span id="arrow_data_penyimpanan" style="font-size:0.75rem; transition:transform 0.22s; transform:rotate(0deg); opacity:0.6;">▼</span>
                </div>
                
                <div id="content_data_penyimpanan" style="display:none; margin-top:14px; border-top:1px solid var(--border-color); padding-top:12px;">
                    <div class="settings-option-card" style="cursor:pointer; padding:10px 12px; margin-bottom:8px;" onclick="clearMyHistory()">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:rgba(231,76,60,0.1); width:32px; height:32px;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Hapus Riwayat Tes</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">${history.length} tes tersimpan — ketuk untuk hapus</div>
                            </div>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    
                    <div class="settings-option-card" style="cursor:pointer; padding:10px 12px; margin-bottom:8px;" onclick="clearProfile()">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:rgba(243,156,18,0.1); width:32px; height:32px;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="1" y1="1" x2="23" y2="23" stroke-opacity="0.4"/></svg>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Hapus Profil Peserta</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">${profile ? 'Reset profil: ' + nameVal : 'Profil kosong'}</div>
                            </div>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    
                    <div class="settings-option-card" style="cursor:pointer; padding:10px 12px;" onclick="triggerTestPrint()">
                        <div class="settings-option-left">
                            <div class="settings-option-icon" style="background:rgba(102,126,234,0.1); width:32px; height:32px;">
                                <span style="font-size:0.95rem;">🖨️</span>
                            </div>
                            <div>
                                <div class="settings-option-label" style="font-size:0.85rem;">Uji Coba Cetak PDF</div>
                                <div class="settings-option-hint" style="font-size:0.7rem;">Simulasi cetak laporan hasil tes</div>
                            </div>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </div>
            </div>

            <!-- Bagian Logout -->
            <div class="settings-logout-section" style="margin-top:20px; margin-bottom:12px;">
                <button class="settings-btn-logout" onclick="logout()" style="height:40px; font-size:0.85rem; font-weight:700; width:100%; display:flex; align-items:center; justify-content:center; gap:8px; border-radius:12px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Keluar dari Akun
                </button>
            </div>
        `;
    } else if (tab === 'aktivasi' && access.isSuper) {
        showActivationTab();
    } else if (tab === 'manajemen') {
        const roleColors = { 'Admin': '#667eea', 'User': '#2ecc71' };

        document.getElementById('settingsContent').innerHTML = `
            <div class="settings-section">
                <div class="settings-section-header">
                    <div class="settings-section-icon" style="background:linear-gradient(135deg,#667eea,#764ba2);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
                    </div>
                    <div>
                        <div class="settings-section-title">Manajemen Akses</div>
                        <div class="settings-section-desc">Kelola pengguna dan role akses aplikasi</div>
                    </div>
                </div>
                <div class="settings-subtabs">
                    <button class="settings-subtab active" data-subtab="daftar" onclick="showManajemenSubtab('daftar')">Daftar Pengguna</button>
                    <button class="settings-subtab" data-subtab="tambah" onclick="showManajemenSubtab('tambah')">Tambah User</button>
                    <button class="settings-subtab" data-subtab="role" onclick="showManajemenSubtab('role')">User Role</button>
                    ${access.isSuper ? '<button class="settings-subtab" data-subtab="fitur" onclick="showManajemenSubtab(\'fitur\')">Fitur Global</button>' : ''}
                    ${access.isSuper ? '<button class="settings-subtab" data-subtab="resetpw" onclick="showManajemenSubtab(\'resetpw\')">Reset Password</button>' : ''}
                    ${access.isSuper ? '<button class="settings-subtab" data-subtab="data" onclick="showManajemenSubtab(\'data\')">Data</button>' : ''}
                </div>
                <div id="manajemenContent"></div>
            </div>
        `;
        showManajemenSubtab('daftar');
    } else if (tab === 'bantuan') {
        const activationDataRaw = localStorage.getItem('iqku_activation');
        let helpActivationData = null;
        try { helpActivationData = activationDataRaw ? JSON.parse(activationDataRaw) : null; } catch(e) {}
        const helpIsActivated = helpActivationData && helpActivationData.activated;
        document.getElementById('settingsContent').innerHTML = `
            ${renderActivationEntryCard(helpIsActivated)}
            <div class="settings-section">
                <div class="settings-section-header">
                    <div class="settings-section-icon" style="background:linear-gradient(135deg,#f6d365,#fda085);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    </div>
                    <div>
                        <div class="settings-section-title">Panduan Penggunaan</div>
                        <div class="settings-section-desc">Langkah-langkah menggunakan fitur utama aplikasi</div>
                    </div>
                </div>
                <div class="settings-help-list">
                    <div class="settings-help-item">
                        <div class="settings-help-icon" style="background:rgba(102,126,234,0.12);color:#667eea;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        </div>
                        <div class="settings-help-body">
                            <div class="settings-help-title">Cara Melakukan Tes</div>
                            <div class="settings-help-desc">Pilih tes yang tersedia di halaman Beranda, isi profil, lalu jawab soal yang muncul. Hasil akan ditampilkan setelah tes selesai.</div>
                        </div>
                    </div>
                    <div class="settings-help-item">
                        <div class="settings-help-icon" style="background:rgba(46,204,113,0.12);color:#2ecc71;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        </div>
                        <div class="settings-help-body">
                            <div class="settings-help-title">Bagikan Tes</div>
                            <div class="settings-help-desc">Gunakan fitur "Bagikan Tes" di halaman Beranda untuk mengirimkan tes ke perangkat lain dalam jaringan yang sama.</div>
                        </div>
                    </div>
                    <div class="settings-help-item">
                        <div class="settings-help-icon" style="background:rgba(243,156,18,0.12);color:#f39c12;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                        </div>
                        <div class="settings-help-body">
                            <div class="settings-help-title">Cetak Hasil</div>
                            <div class="settings-help-desc">Setelah tes selesai, klik tombol "Cetak/PDF" di halaman hasil untuk menyimpan hasil sebagai PDF atau mencetaknya.</div>
                        </div>
                    </div>
                    <div class="settings-help-item">
                        <div class="settings-help-icon" style="background:rgba(155,89,182,0.12);color:#9b59b6;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                        </div>
                        <div class="settings-help-body">
                            <div class="settings-help-title">Aktivasi</div>
                            <div class="settings-help-desc">Hubungi superadmin untuk mendapatkan kode aktivasi perangkat Anda.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <div class="settings-section-header">
                    <div class="settings-section-icon" style="background:linear-gradient(135deg,#a18cd1,#fbc2eb);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div>
                        <div class="settings-section-title">Tentang IQ.ku</div>
                        <div class="settings-section-desc">Informasi versi dan deskripsi aplikasi</div>
                    </div>
                </div>
                <div class="settings-about-card">
                    <div class="settings-about-version">v1.0.0</div>
                    <div class="settings-about-text">IQ.ku menyediakan tes IQ, DISC, MBTI, dan RAISEC untuk membantu Anda memahami diri lebih baik.</div>
                    <div class="settings-about-badges">
                        <span class="settings-about-badge" style="background:rgba(102,126,234,0.12);color:#667eea;">IQ</span>
                        <span class="settings-about-badge" style="background:rgba(46,204,113,0.12);color:#2ecc71;">DISC</span>
                        <span class="settings-about-badge" style="background:rgba(243,156,18,0.12);color:#f39c12;">MBTI</span>
                        <span class="settings-about-badge" style="background:rgba(155,89,182,0.12);color:#9b59b6;">RAISEC</span>
                    </div>
                    <div style="margin-top:20px; border-top:1px solid var(--border-color); padding-top:16px; text-align:left;">
                        <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px;">Kode Perangkat</div>
                        <div style="font-family:monospace; font-size:1.15rem; font-weight:800; color:var(--text-color); letter-spacing:1px; background:var(--card-bg2); padding:10px 14px; border-radius:12px; border:1px solid var(--border-color); display:inline-block;">${getDeviceFingerprint()}</div>
                        <div style="font-size:0.72rem; color:var(--text-muted); margin-top:6px; font-weight:500;">Kode ini dihasilkan dari .Maju ID perangkat Anda.</div>
                    </div>
                </div>
            </div>
        `;
    }
}

function showManajemenSubtab(subTab) {
    document.querySelectorAll('.settings-subtab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.subtab === subTab);
    });
    const access = getSettingsAccessContext();
    const users = getUsers() || [];
    const content = document.getElementById('manajemenContent');
    if (!content) return;

    if (subTab === 'role') {
        content.innerHTML = renderManajemenRoleView(users, access);
    } else if (subTab === 'tambah') {
        content.innerHTML = renderManajemenAddUserView();
    } else if (subTab === 'fitur' && access.isSuper) {
        content.innerHTML = renderManajemenFiturGlobal();
    } else if (subTab === 'resetpw' && access.isSuper) {
        content.innerHTML = renderManajemenResetPassword(users);
    } else if (subTab === 'data' && access.isSuper) {
        content.innerHTML = renderManajemenData();
    } else {
        content.innerHTML = renderManajemenUserList(users, access.loggedUser);
    }
}

function renderManajemenAddUserView() {
    return `
        <div class="settings-add-user-header">
            <div class="settings-add-user-title">Tambah User Baru</div>
            <div class="settings-add-user-desc">Buat akun baru untuk pengguna aplikasi dengan batas waktu tertentu.</div>
        </div>
        <div class="settings-form-group">
            <div class="settings-input-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" id="newUsername" class="settings-input" placeholder="Username baru">
            </div>
            <div class="settings-input-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <input type="password" id="newUserPass" class="settings-input" placeholder="Password awal">
            </div>
            <div class="settings-select-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <select id="newUserRole" class="settings-select">
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div class="settings-select-wrapper" style="margin-top:10px;">
                <span style="font-size:1.1rem;margin-right:10px;margin-left:4px;">⏱️</span>
                <select id="newUserDuration" class="settings-select" style="padding-left:0;">
                    <option value="perm" selected>Permanen</option>
                    <option value="3d">3 Hari</option>
                    <option value="7d">7 Hari</option>
                    <option value="30d">30 Hari</option>
                    <option value="3m">3 Bulan</option>
                    <option value="6m">6 Bulan</option>
                    <option value="12m">12 Bulan</option>
                </select>
            </div>
            <div class="settings-activation-actions">
                <button class="settings-btn-primary" onclick="addUser()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                    Simpan User
                </button>
                <button class="settings-btn-logout" style="color:var(--text-muted);border-color:var(--border-color);" onclick="showManajemenSubtab('daftar')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Batal
                </button>
            </div>
            <div id="userMsg" class="settings-msg"></div>
        </div>
    `;
}

function renderManajemenUserList(users, loggedUser) {
    const roleColors = { 'Admin': '#667eea', 'User': '#2ecc71' };
    const durationLabels = {
        '3d': '3 Hari',
        '7d': '7 Hari',
        '30d': '30 Hari',
        '3m': '3 Bulan',
        '6m': '6 Bulan',
        '12m': '12 Bulan',
        'perm': 'Permanen'
    };

    return `
        <div class="settings-user-list">
            ${users.map(u => {
                const isCurrentUser = u.username === loggedUser;
                const isTamuu = u.username === 'Tamu';
                const roleColor = roleColors[u.role] || '#7f8c8d';
                
                const isExpired = u.expireAt && Date.now() > u.expireAt;
                let activeDurationBadge = '';
                if (isTamuu) {
                    activeDurationBadge = '<span style="font-size:0.75rem;padding:2px 8px;border-radius:12px;background:rgba(102,126,234,0.1);color:#667eea;font-weight:700;">Publik</span>';
                } else if (isExpired) {
                    activeDurationBadge = '<span style="font-size:0.75rem;padding:2px 8px;border-radius:12px;background:rgba(231,76,60,0.1);color:#e74c3c;font-weight:700;">Expired</span>';
                } else if (u.expireAt) {
                    const daysLeft = Math.max(0, Math.ceil((u.expireAt - Date.now()) / (24 * 3600 * 1000)));
                    activeDurationBadge = `<span style="font-size:0.75rem;padding:2px 8px;border-radius:12px;background:rgba(46,204,113,0.1);color:#2ecc71;font-weight:700;">Sisa ${daysLeft} hari</span>`;
                } else {
                    activeDurationBadge = '<span style="font-size:0.75rem;padding:2px 8px;border-radius:12px;background:rgba(127,140,141,0.1);color:#7f8c8d;font-weight:700;">Permanen</span>';
                }

                return `
                <div class="settings-user-card ${isCurrentUser ? 'settings-user-current' : ''}" style="${isExpired ? 'opacity: 0.75; border-color: rgba(231,76,60,0.3);' : ''}">
                    <div class="settings-user-avatar" style="background:linear-gradient(135deg,${isExpired ? '#e74c3c' : roleColor},${isExpired ? '#c0392b' : roleColor}dd);">
                        ${isTamuu ? '&#128101;' : u.username.charAt(0).toUpperCase()}
                    </div>
                    <div class="settings-user-info">
                        <div class="settings-user-name" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                            ${u.username}
                            ${isCurrentUser ? '<span class="settings-user-badge">Anda</span>' : ''}
                            ${activeDurationBadge}
                        </div>
                        <div class="settings-user-role">
                            <span class="settings-role-tag" style="background:${roleColor}22;color:${roleColor};">${u.role}</span>
                        </div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">Fitur aktif: ${u.features ? Object.keys(u.features).filter(k => u.features[k]).length : 0}</div>
                    </div>
                    <div class="settings-user-actions">
                        ${isTamuu ? '<span class="settings-user-status">Publik</span>' :
                          isCurrentUser ? '' :
                          `<button class="settings-btn-icon-danger" onclick="editUserRole('${u.username}')" title="Kelola user dan durasi">Kelola User</button>`}
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderManajemenRoleView(users, access) {
    return `
        <div class="settings-add-user-header">
            <div class="settings-add-user-title">User Role</div>
            <div class="settings-add-user-desc">Kelola role dan akses fitur pengguna yang sudah terdaftar.</div>
        </div>
        <div class="settings-user-list">
            ${users.map(u => {
                if (u.username === 'Tamu') return '';
                const roleColor = u.role === 'Admin' ? '#667eea' : '#2ecc71';
                return `
                    <div class="settings-user-card">
                        <div class="settings-user-avatar" style="background:linear-gradient(135deg,${roleColor},${roleColor}dd);">${u.username.charAt(0).toUpperCase()}</div>
                        <div class="settings-user-info">
                            <div class="settings-user-name">${u.username}</div>
                            <div class="settings-user-role"><span class="settings-role-tag" style="background:${roleColor}22;color:${roleColor};">${u.role}</span></div>
                            <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">${u.features ? Object.keys(u.features).filter(k => u.features[k]).length : 0} fitur aktif</div>
                        </div>
                        <div class="settings-user-actions">
                            ${access.isSuper ? `<button class="settings-btn-icon-danger" onclick="editUserRole('${u.username}')" title="Kelola">Kelola</button>` : ''}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderManajemenFiturGlobal() {
    const features = getFeatures();
    const enabledCount = Object.values(features).filter(v => v).length;
    const totalCount = Object.keys(DEFAULT_FEATURES).length;
    return `
        <div class="settings-add-user-header">
            <div class="settings-add-user-title">Fitur Global</div>
            <div class="settings-add-user-desc">Kontrol fitur yang berlaku untuk semua pengguna. Fitur per-user yang sudah di-override akan mengikuti pengaturan masing-masing.</div>
        </div>
        <div class="settings-feature-stats">
            <span class="settings-feature-stat-badge">${enabledCount}/${totalCount} fitur aktif</span>
        </div>
        <div class="settings-feature-groups">
            ${FEATURE_GROUPS.map(group => `
                <div class="settings-feature-group">
                    <div class="settings-feature-group-header">
                        <div class="settings-feature-group-title">${group.title}</div>
                        <div class="settings-feature-group-desc">${group.desc}</div>
                    </div>
                    ${group.items.map(item => `
                        <div class="settings-option-card">
                            <div class="settings-option-left">
                                <div class="settings-option-icon" style="background:${item.color}18;">
                                    <span style="font-size:1.1rem;">${item.icon}</span>
                                </div>
                                <div>
                                    <div class="settings-option-label">${item.label}</div>
                                    <div class="settings-option-hint">${features[item.key] ? 'Aktif' : 'Nonaktif'}${item.superOnly ? ' • Super only' : ''}</div>
                                </div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" ${features[item.key] ? 'checked' : ''} onchange="toggleFeature('${item.key}')">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
        <div class="settings-activation-actions" style="margin-top:16px;">
            <button class="settings-btn-primary" onclick="resetAllFeatures()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Aktifkan Semua
            </button>
            <button class="settings-btn-logout" style="color:var(--text-muted);border-color:var(--border-color);" onclick="disableAllFeatures()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                Nonaktifkan Semua
            </button>
        </div>
    `;
}

function renderManajemenResetPassword(users) {
    const filteredUsers = users.filter(u => u.username !== 'Tamu' && !isSuperAdmin(u.username));
    return `
        <div class="settings-add-user-header">
            <div class="settings-add-user-title">Reset Password</div>
            <div class="settings-add-user-desc">Reset password pengguna lain tanpa perlu tahu password lama mereka.</div>
        </div>
        ${filteredUsers.length === 0 ? '<div style="font-size:0.84rem;color:var(--text-muted);padding:20px 0;text-align:center;">Tidak ada pengguna yang bisa direset.</div>' : `
            <div class="settings-user-list">
                ${filteredUsers.map(u => {
                    const safeId = u.username.replace(/[^a-zA-Z0-9]/g, '_');
                    const roleColor = u.role === 'Admin' ? '#667eea' : '#2ecc71';
                    return `
                        <div class="settings-resetpw-card">
                            <div class="settings-resetpw-user">
                                <div class="settings-user-avatar" style="background:linear-gradient(135deg,${roleColor},${roleColor}dd);width:38px;height:38px;border-radius:10px;font-size:0.95rem;">${u.username.charAt(0).toUpperCase()}</div>
                                <div>
                                    <div style="font-weight:700;font-size:0.88rem;color:var(--text-color);">${u.username}</div>
                                    <div><span class="settings-role-tag" style="background:${roleColor}22;color:${roleColor};">${u.role}</span></div>
                                </div>
                            </div>
                            <div class="settings-resetpw-form">
                                <div class="settings-input-wrapper">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                                    <input type="password" id="resetPassInput_${safeId}" class="settings-input" placeholder="Password baru (min 4 karakter)">
                                </div>
                                <button class="settings-btn-primary" style="padding:10px 16px;font-size:0.82rem;" onclick="resetUserPassword('${u.username}')">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/></svg>
                                    Reset
                                </button>
                            </div>
                            <div id="resetPassMsg_${safeId}" class="settings-msg" style="margin-top:6px;"></div>
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
}

function renderManajemenData() {
    const history = (() => { try { return JSON.parse(localStorage.getItem('iqku_history')) || []; } catch(e) { return []; } })();
    const users = getUsers() || [];
    const sessions = getActiveSessions() || {};
    const activation = localStorage.getItem('iqku_activation');
    let isActivated = false;
    try { isActivated = activation ? JSON.parse(activation).activated : false; } catch(e) {}

    return `
        <div class="settings-add-user-header">
            <div class="settings-add-user-title">Manajemen Data</div>
            <div class="settings-add-user-desc">Kelola dan bersihkan data aplikasi.</div>
        </div>

        <div class="settings-data-overview">
            <div class="settings-data-stat">
                <span class="settings-data-stat-icon" style="background:rgba(102,126,234,0.12);color:#667eea;">&#128202;</span>
                <span class="settings-data-stat-num">${history.length}</span>
                <span class="settings-data-stat-label">Riwayat Tes</span>
            </div>
            <div class="settings-data-stat">
                <span class="settings-data-stat-icon" style="background:rgba(46,204,113,0.12);color:#2ecc71;">&#128101;</span>
                <span class="settings-data-stat-num">${users.length}</span>
                <span class="settings-data-stat-label">Pengguna</span>
            </div>
            <div class="settings-data-stat">
                <span class="settings-data-stat-icon" style="background:rgba(243,156,18,0.12);color:#f39c12;">&#128268;</span>
                <span class="settings-data-stat-num">${Object.keys(sessions).length}</span>
                <span class="settings-data-stat-label">Sesi Aktif</span>
            </div>
            <div class="settings-data-stat">
                <span class="settings-data-stat-icon" style="background:${isActivated ? 'rgba(46,204,113,0.12)' : 'rgba(231,76,60,0.12)'};color:${isActivated ? '#2ecc71' : '#e74c3c'};">${isActivated ? '&#9989;' : '&#10060;'}</span>
                <span class="settings-data-stat-num">${isActivated ? 'Aktif' : 'Tidak'}</span>
                <span class="settings-data-stat-label">Aktivasi</span>
            </div>
        </div>

        <div class="settings-option-card" style="cursor:pointer;" onclick="clearAllHistory()">
            <div class="settings-option-left">
                <div class="settings-option-icon" style="background:rgba(231,76,60,0.12);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </div>
                <div>
                    <div class="settings-option-label">Hapus Semua Riwayat</div>
                    <div class="settings-option-hint">${history.length} tes tersimpan — hapus semua riwayat tes</div>
                </div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>

        <div class="settings-danger-zone">
            <div class="settings-danger-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>Zona Berbahaya</span>
            </div>
            <div class="settings-danger-desc">Tindakan ini akan menghapus SEMUA data aplikasi dan tidak dapat dibatalkan.</div>
            <button class="settings-btn-danger-full" onclick="factoryReset()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Factory Reset
            </button>
        </div>
    `;
}

function editUserRole(username) {
    const users = getUsers() || [];
    const user = users.find(u => u.username === username);
    if (!user) return;
    const password = user.password || '';
    showUserRoleDialog(username, password, user.role, 'roleDialog');
}

async function addUser() {
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newUserPass').value.trim();
    const role = document.getElementById('newUserRole').value;
    const duration = document.getElementById('newUserDuration').value;
    const msg = document.getElementById('userMsg');

    if (!username || !password) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Username dan password harus diisi.';
        return;
    }
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Username sudah ada.';
        return;
    }
    
    let expireAt = null;
    const now = Date.now();
    if (duration === '3d') expireAt = now + 3 * 24 * 3600 * 1000;
    else if (duration === '7d') expireAt = now + 7 * 24 * 3600 * 1000;
    else if (duration === '30d') expireAt = now + 30 * 24 * 3600 * 1000;
    else if (duration === '3m') expireAt = now + 90 * 24 * 3600 * 1000;
    else if (duration === '6m') expireAt = now + 180 * 24 * 3600 * 1000;
    else if (duration === '12m') expireAt = now + 365 * 24 * 3600 * 1000;

    const active = true;
    users.push({
        username,
        password,
        role,
        active,
        duration,
        createdAt: now,
        expireAt,
        features: {}
    });
    const synced = await saveUsers(users);
    
    msg.style.color = '#2ecc71';
    msg.textContent = synced
        ? `User '${username}' berhasil ditambahkan dan tersedia di browser lain.`
        : `User '${username}' tersimpan di browser ini, tetapi server belum dapat disinkronkan.`;
    if (!synced) msg.style.color = '#f39c12';
    document.getElementById('newUsername').value = '';
    document.getElementById('newUserPass').value = '';
    document.getElementById('newUserRole').value = 'User';
    document.getElementById('newUserDuration').value = 'perm';
    showManajemenSubtab('daftar');
}

function refreshSuperadminPanel() {
    showSettingsTab('manajemen');
}

function forceLogoutUser(username) {
    if (confirm(`Force logout user "${username}"?`)) {
        destroySession(username);
        refreshSuperadminPanel();
    }
}

function toggleLogin() {
    const enabled = document.getElementById('loginToggle').checked;
    localStorage.setItem('iqku_login_enabled', enabled ? 'true' : 'false');
    if (!enabled) {
        localStorage.removeItem('iqku_logged_in');
        localStorage.removeItem('iqku_logged_user');
    }
}

function changePassword() {
    const current = document.getElementById('currentPass').value.trim();
    const newP = document.getElementById('newPass').value.trim();
    const confirm = document.getElementById('confirmPass').value.trim();
    const msg = document.getElementById('passMsg');

    const loggedUser = localStorage.getItem('iqku_logged_user') || 'Arga';
    const users = getUsers();
    const user = users.find(u => u.username === loggedUser);
    
    if (loggedUser === 'Tamu') {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Pengguna Tamu tidak dapat mengubah password.';
        return;
    }
    
    if (!user || user.password !== current) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Password saat ini salah.';
        return;
    }
    if (newP.length < 4) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Password baru minimal 4 karakter.';
        return;
    }
    if (newP !== confirm) {
        msg.style.color = '#e74c3c';
        msg.textContent = 'Konfirmasi password tidak cocok.';
        return;
    }
    user.password = newP;
    saveUsers(users);
    msg.style.color = '#2ecc71';
    msg.textContent = 'Password berhasil diubah.';
    document.getElementById('currentPass').value = '';
    document.getElementById('newPass').value = '';
    document.getElementById('confirmPass').value = '';
}

function showUserRoleDialog(username, password, defaultRole, msg) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'roleDialog';
    overlay.innerHTML = `
        <div class="modal modal-role-select">
            <h3>Pilih Role Pengguna</h3>
            <p>Pemilihan role untuk user: <strong>${username}</strong></p>
            <div class="role-options">
                <div class="role-option" data-role="Admin" onclick="confirmUserRole('Admin', '${username}', '${password}', 'roleDialog')">
                    <div class="role-icon">&#128081;</div>
                    <div class="role-info">
                        <div class="role-title">Admin</div>
                        <div class="role-desc">Akses penuh, bisa mengelola pengguna</div>
                    </div>
                </div>
                <div class="role-option" data-role="User" onclick="confirmUserRole('User', '${username}', '${password}', 'roleDialog')">
                    <div class="role-icon">&#128100;</div>
                    <div class="role-info">
                        <div class="role-title">User</div>
                        <div class="role-desc">Hanya bisa menggunakan tes (fitur diatur oleh superadmin)</div>
                    </div>
                </div>
            </div>
            <p style="margin-top:16px;font-size:0.82rem;color:var(--text-muted);">* Setelah memilih role, akan muncul popup untuk memilih fitur detail yang boleh aktif.</p>
        </div>
    `;
    document.body.appendChild(overlay);
}

function confirmUserRole(role, username, password, dialogId) {
    const overlay = document.getElementById(dialogId);
    if (overlay) overlay.remove();
    // Setelah pilih role, tampilkan popup detail fitur untuk user ini
    showUserFeaturesDialog(username, password, role);
}

function showUserFeaturesDialog(username, password, role) {
    // Base fitur: Admin = semua aktif, User = mengikuti fitur global saat ini
    const base = role === 'Admin' ? { ...DEFAULT_FEATURES } : { ...getFeatures() };
    
    // Retrieve current user duration
    const users = getUsers() || [];
    const existing = users.find(u => u.username === username);
    const currentDuration = existing ? (existing.duration || 'perm') : 'perm';
    const currentExpiryText = existing && existing.expireAt
        ? new Date(existing.expireAt).toLocaleString('id-ID')
        : 'Permanen';

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'userFeaturesDialog';
    overlay.innerHTML = `
        <div class="modal modal-feature-select">
            <h3>Kelola User & Fitur</h3>
            <p>Atur konfigurasi akses untuk user: <strong>${username}</strong> (${role})</p>
            
            <!-- EXPIRED LIMIT SETTING -->
            <div style="background:var(--card-bg2); border:1px solid var(--border-color); border-radius:14px; padding:14px; margin-bottom:16px; text-align:left;">
                <div style="font-size:0.75rem; font-weight:700; color:var(--text-color); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                    <span>⏱️</span> BATAS LIMIT WAKTU (MASA AKTIF)
                </div>
                <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:8px; padding:0 10px; height:38px; display:flex; align-items:center;">
                    <select id="editUserDurationSelect" style="background:transparent; border:none; outline:none; color:var(--text-color); font-size:0.85rem; width:100%; font-weight:600;">
                        <option value="perm" ${currentDuration === 'perm' ? 'selected' : ''}>Permanen</option>
                        <option value="3d" ${currentDuration === '3d' ? 'selected' : ''}>3 Hari</option>
                        <option value="7d" ${currentDuration === '7d' ? 'selected' : ''}>7 Hari</option>
                        <option value="30d" ${currentDuration === '30d' ? 'selected' : ''}>30 Hari</option>
                        <option value="3m" ${currentDuration === '3m' ? 'selected' : ''}>3 Bulan</option>
                        <option value="6m" ${currentDuration === '6m' ? 'selected' : ''}>6 Bulan</option>
                        <option value="12m" ${currentDuration === '12m' ? 'selected' : ''}>12 Bulan</option>
                    </select>
                </div>
                <div style="font-size:0.72rem;color:var(--text-muted);margin-top:8px;">Batas aktif saat ini: <strong>${currentExpiryText}</strong></div>
                <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:8px; padding:0 10px; height:38px; display:flex; align-items:center; margin-top:10px;">
                    <select id="editUserDurationMode" style="background:transparent;border:none;outline:none;color:var(--text-color);font-size:0.82rem;width:100%;font-weight:600;">
                        <option value="reset">Atur ulang durasi dari hari ini</option>
                        <option value="extend">Tambahkan durasi dari batas aktif saat ini</option>
                    </select>
                </div>
            </div>

            <div class="feature-select-groups">
                ${FEATURE_GROUPS.map(group => `
                    <div class="feature-select-group">
                        <div class="feature-select-group-title">${group.title}</div>
                        ${group.items.map(item => `
                            <div class="feature-toggle-row">
                                <div class="feature-toggle-left">
                                    <span class="feature-toggle-icon" style="color:${item.color};">${item.icon}</span>
                                    <span class="feature-toggle-label">${item.label}</span>
                                </div>
                                <label class="toggle-switch">
                                    <input type="checkbox" class="uf-toggle" data-key="${item.key}" ${base[item.key] !== false ? 'checked' : ''}>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
            <div style="display:flex;gap:10px;margin-top:16px;">
                <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="closeModalById('userFeaturesDialog')">Batal</button>
                <button class="btn btn-primary btn-sm" style="flex:1;background:linear-gradient(135deg,#667eea,#764ba2);" onclick="confirmUserFeatures('${username}', '${password}', '${role}', 'userFeaturesDialog')">Simpan User</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function confirmUserFeatures(username, password, role, dialogId) {
    const features = {};
    document.querySelectorAll('#userFeaturesDialog .uf-toggle').forEach(cb => {
        features[cb.dataset.key] = cb.checked;
    });
    
    // Read the duration dropdown
    const duration = document.getElementById('editUserDurationSelect').value;
    const durationMode = document.getElementById('editUserDurationMode').value;

    const users = getUsers() || [];
    const existing = users.find(u => u.username === username);
    if (existing) {
        existing.password = password;
        existing.role = role;
        existing.features = features;
        
        const durationDays = { '3d': 3, '7d': 7, '30d': 30, '3m': 90, '6m': 180, '12m': 365 };
        const now = Date.now();
        const baseTime = durationMode === 'extend' && existing.expireAt
            ? Math.max(now, existing.expireAt)
            : now;
        existing.duration = duration;
        existing.expireAt = duration === 'perm' ? null : baseTime + durationDays[duration] * 24 * 3600 * 1000;
    } else {
        let expireAt = null;
        const now = Date.now();
        if (duration === '3d') expireAt = now + 3 * 24 * 3600 * 1000;
        else if (duration === '7d') expireAt = now + 7 * 24 * 3600 * 1000;
        else if (duration === '30d') expireAt = now + 30 * 24 * 3600 * 1000;
        else if (duration === '3m') expireAt = now + 90 * 24 * 3600 * 1000;
        else if (duration === '6m') expireAt = now + 180 * 24 * 3600 * 1000;
        else if (duration === '12m') expireAt = now + 365 * 24 * 3600 * 1000;

        users.push({ username, password, role, duration, expireAt, features });
    }
    
    saveUsers(users);
    const overlay = document.getElementById(dialogId);
    if (overlay) overlay.remove();
    showSettingsTab('manajemen');
    
    const newUserField = document.getElementById('newUsername');
    if (newUserField) newUserField.value = '';
    const passwordField = document.getElementById('newUserPass');
    if (passwordField) passwordField.value = '';
    const msg = document.getElementById('userMsg');
    if (msg) {
        msg.style.color = '#2ecc71';
        msg.textContent = existing ? `Pengguna '${username}' berhasil diperbarui.` : `Pengguna '${username}' (${role}) berhasil dibuat dengan fitur terpilih.`;
    }
}

function deleteUser(username) {
    if (username === 'Tamu') {
        alert('Pengguna Tamu tidak dapat dihapus.');
        return;
    }
    if (!confirm('Hapus pengguna "' + username + '"?')) return;
    let users = getUsers();
    users = users.filter(u => u.username !== username);
    saveUsers(users);
    showSettingsTab('manajemen');
}

function logout() {
    const username = localStorage.getItem('iqku_logged_user');
    if (username) {
        destroySession(username);
    }
    localStorage.removeItem('iqku_logged_in');
    localStorage.removeItem('iqku_logged_user');
    showPage('login');
    document.getElementById('bottomNav').classList.remove('visible');
}

// ============================================================
// SHARE SERVER
// ============================================================

function getShareAPI() {
    if (window.electronAPI && window.electronAPI.shareStart) return window.electronAPI;
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.ShareServer) {
        return {
            shareStart: () => window.Capacitor.Plugins.ShareServer.start(),
            shareStop: () => window.Capacitor.Plugins.ShareServer.stop()
        };
    }
    // Web implementation
    return {
        shareStart: () => {
            return new Promise((resolve) => {
                const shareUrl = window.location.origin + '/share';
                resolve({ success: true, url: shareUrl });
            });
        },
        shareStop: () => {
            return new Promise((resolve) => {
                resolve({ success: true });
            });
        }
    };
}

function showShareModal() {
    const modal = document.getElementById('shareModal');
    modal.classList.add('active');
    document.getElementById('shareModalStatus').textContent = 'Memulai server...';
    document.getElementById('shareModalStatus').style.display = 'block';
    document.getElementById('shareUrlContainer').style.display = 'none';
    document.getElementById('shareError').style.display = 'none';

    const api = getShareAPI();
    if (api) {
        api.shareStart().then(result => {
            if (result.success) {
                document.getElementById('shareModalStatus').style.display = 'none';
                document.getElementById('shareUrlContainer').style.display = 'block';
                document.getElementById('shareUrl').textContent = result.url;
            } else {
                document.getElementById('shareModalStatus').style.display = 'none';
                document.getElementById('shareError').textContent = 'Gagal: ' + result.error;
                document.getElementById('shareError').style.display = 'block';
            }
        });
    } else {
        document.getElementById('shareModalStatus').style.display = 'none';
        document.getElementById('shareError').textContent = 'Fitur ini hanya tersedia di aplikasi desktop/Android.';
        document.getElementById('shareError').style.display = 'block';
    }
}

function stopShareServer() {
    const api = getShareAPI();
    if (api) {
        api.shareStop().then(() => {
            document.getElementById('shareModal').classList.remove('active');
        });
    }
}

// Override showPage to handle login check
const origShowPage = showPage;
showPage = function(id) {
    // Check login requirement
    if (getLoginEnabled() && !localStorage.getItem('iqku_logged_in') && id !== 'login') {
        origShowPage('login');
        document.getElementById('bottomNav').classList.remove('visible');
        return;
    }
    
    // Check if session is still valid (not kicked out by another device)
    const loggedUser = localStorage.getItem('iqku_logged_user');
    if (getLoginEnabled() && loggedUser && loggedUser !== 'Tamu' && id !== 'login') {
        if (!isMySessionValid(loggedUser)) {
            // Session kicked out by another device
            localStorage.removeItem('iqku_logged_in');
            localStorage.removeItem('iqku_logged_user');
            showSessionExpiredScreen();
            return;
        }
    }
    
    origShowPage(id);
};

function showSessionExpiredScreen() {
    document.getElementById('bottomNav').classList.remove('visible');
    document.getElementById('resultContent').innerHTML = '';
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Create and show error page
    const errorPage = document.createElement('div');
    errorPage.id = 'sessionExpired';
    errorPage.className = 'page active';
    errorPage.style.cssText = 'display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;';
    errorPage.innerHTML = `
        <div style="text-align:center;max-width:420px;">
            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#e74c3c,#c0392b);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:2.2rem;color:#fff;">&#128683;</div>
            <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:16px;color:var(--text-color);">Akses Ditolak</h2>
            <h3 style="font-size:1rem;font-weight:600;color:#e74c3c;margin-bottom:20px;">Sesi Anda Telah Berakhir</h3>
            <p style="font-size:0.9rem;line-height:1.8;color:var(--text-muted);margin-bottom:8px;">
                Akun Anda terdeteksi baru saja melakukan login melalui perangkat atau browser lain.
            </p>
            <p style="font-size:0.9rem;line-height:1.8;color:var(--text-muted);margin-bottom:24px;">
                Demi keamanan, aplikasi web ini hanya mengizinkan <strong style="color:var(--text-color);">1 User aktif di 1 Perangkat</strong>. Sesi di perangkat ini otomatis ditutup.
            </p>
            <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:28px;">
                Silakan login kembali jika ingin menggunakan perangkat ini.
            </p>
            <button class="btn btn-primary" onclick="document.getElementById('sessionExpired').remove();checkLogin();" style="background:linear-gradient(135deg,#667eea,#764ba2);padding:14px 32px;font-size:0.95rem;">
                Login Kembali
            </button>
        </div>
    `;
    document.getElementById('app').appendChild(errorPage);
}

// ============================================================
// THEME
// ============================================================

function applyTheme() {
    const theme = localStorage.getItem('iqku_theme');
    const btn = document.getElementById('themeToggle');
    if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
        if (btn) btn.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('light-theme');
        if (btn) btn.textContent = '🌙';
    }
}

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('iqku_theme', isLight ? 'light' : 'dark');
    document.getElementById('themeToggle').textContent = isLight ? '☀️' : '🌙';
}

// Initialize app
checkLogin();
applyTheme();
updateAutoHomeBtn();

// ============================================================
// KEYBOARD
// ============================================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextQuestion();
    if (e.key === 'ArrowLeft') prevQuestion();
    if (e.key === '1') selectIQOption(0);
    if (e.key === '2') selectIQOption(1);
    if (e.key === '3') selectIQOption(2);
    if (e.key === '4') selectIQOption(3);
});
