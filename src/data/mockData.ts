import { ServiceItem, PortfolioProject, TechItem, ProcessStep, TestimonialItem, FaqItem, TeamMember, ClientItem, TechBenefitItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'company-profile-web',
    title: 'Website Profil Perusahaan & Landing Page',
    category: 'Website Bisnis',
    shortDesc: 'Bikin bisnis Anda terlihat kredibel dan profesional di mata calon pelanggan dengan website berdesain elegan, cepat, dan responsif di HP.',
    fullDesc: 'Website adalah kartu nama digital utama bisnis Anda. Kami merancang website profil perusahaan dan landing page promosi yang cepat dibuka, mudah ditemukan di Google (SEO-friendly), dan terintegrasi langsung dengan tombol WhatsApp untuk menghasilkan penjualan.',
    iconName: 'Globe',
    badge: 'Paling Populer',
    features: [
      'Desain Modern, Bersih & Eksklusif (Bukan template pasaran)',
      'Tampilan Responsif di Semua Ukuran Layar HP & Laptop',
      'Gratis Domain (.com/.id) & Cloud Hosting Cepat',
      'Integrasi Tombol WhatsApp & Formulir Kontak Pelanggan',
      'Optimasi SEO Dasar agar Mudah Ditemukan di Google'
    ],
    deliverables: ['Website Siap Pakai & Online', 'Akses Akun Domain & Hosting', 'Panduan Cara Edit Konten / Teks', 'Garansi Pendampingan Teknis']
  },
  {
    id: 'toko-online',
    title: 'Website Toko Online & Katalog Produk',
    category: 'E-Commerce',
    shortDesc: 'Mudahkan pelanggan memesan produk Anda 24 jam dengan website toko online otomatis, lengkap dengan hitung ongkir dan pembayaran digital.',
    fullDesc: 'Tingkatkan penjualan produk Anda tanpa repot melayani chat manual satu per satu. Sistem katalog produk kami dilengkapi keranjang belanja, checkout via WhatsApp atau payment gateway (QRIS, Transfer Bank, E-Wallet), dan cek ongkos kirim otomatis.',
    iconName: 'ShoppingBag',
    badge: 'Siap Jualan',
    features: [
      'Katalog Produk Rapi dengan Foto & Deskripsi Lengkap',
      'Checkout Cepat ke WhatsApp atau Pembayaran Otomatis (QRIS)',
      'Integrasi Cek Ongkir Ekspedisi (JNE, J&T, SiCepat)',
      'Panel Admin Sederhana untuk Tambah/Ubah Produk Sendiri'
    ],
    deliverables: ['Toko Online Siap Transaksi', 'Pengaturan Produk Awal', 'Buku Panduan Pengelolaan Stok', 'Garansi Teknis & Bantuan']
  },
  {
    id: 'sistem-informasi-pos',
    title: 'Sistem Informasi & Kasir POS Kustom',
    category: 'Sistem Bisnis',
    shortDesc: 'Rapikan pembukuan, pencatatan stok barang, dan laporan penjualan usaha Anda dengan sistem web yang disesuaikan dengan alur kerja Anda.',
    fullDesc: 'Tinggalkan catatan buku manual dan Excel yang rawan salah. Kami membuatkan sistem kasir (Point of Sale), manajemen stok multi-toko, rekap absensi karyawan, dan laporan laba-rugi otomatis yang bisa Anda pantau dari HP kapan saja.',
    iconName: 'Layers',
    badge: 'Efisiensi Kerja',
    features: [
      'Pencatatan Transaksi Kasir Cepat & Cetak Struk',
      'Manajemen Stok Masuk, Keluar & Notifikasi Habis',
      'Laporan Penjualan Harian, Mingguan & Bulanan Otomatis',
      'Bisa Diakses dari HP, Tablet, maupun Komputer Toko'
    ],
    deliverables: ['Sistem Web Terpasang & Siap Pakai', 'Pelatihan Operator & Kasir Sampai Bisa', 'Hak Akses Penuh Tanpa Biaya Lisensi Bulanan', 'Garansi Perbaikan Bug']
  },
  {
    id: 'mobile-app',
    title: 'Pembuatan Aplikasi Mobile (Android & iOS)',
    category: 'Aplikasi HP',
    shortDesc: 'Bangun aplikasi Android dan iOS untuk mempererat loyalitas pelanggan atau mempermudah operasional tim di lapangan.',
    fullDesc: 'Dari aplikasi pemesanan khusus, aplikasi keanggotaan (membership/loyalitas), hingga aplikasi pelaporan staf lapangan. Kami menggunakan teknologi Flutter sehingga aplikasi Anda ringan, cepat, dan hemat biaya karena langsung mencakup Android & iOS.',
    iconName: 'Smartphone',
    badge: 'Modern & Ringan',
    features: [
      'Aplikasi Satu Paket untuk Android & iOS',
      'Fitur Notifikasi Promo (Push Notification)',
      'Desain Antarmuka Simpel dan Nyaman Digunakan Pelanggan',
      'Pendampingan Upload ke Google Play Store'
    ],
    deliverables: ['File Aplikasi Siap Rilis', 'Akses Source Code Lengkap', 'Dukungan Rilis di Play Store', 'Buku Panduan Penggunaan']
  },
  {
    id: 'redesign-website',
    title: 'Redesign & Perbaikan Website Lama',
    category: 'Penyegaran Web',
    shortDesc: 'Punya website lama yang lambat, tampilannya ketinggalan zaman, atau rusak? Kami perbaiki dan ubah menjadi modern kembali.',
    fullDesc: 'Jangan biarkan calon pelanggan kabur karena website Anda lambat atau tampak jadul. Tim kami siap merombak tampilan website lama Anda agar fresh, kekinian, cepat dibuka, dan nyaman dilihat di smartphone.',
    iconName: 'Sparkles',
    features: [
      'Penyegaran Tampilan Menjadi Modern & Bersih',
      'Peningkatan Kecepatan Loading (PageSpeed)',
      'Perbaikan Error, Link Rusak, dan Masalah Tampilan HP',
      'Penyusunan Ulang Konten & Foto Produk Lebih Menarik'
    ],
    deliverables: ['Website Tampilan Baru yang Cepat', 'Optimasi Kecepatan Server', 'Backup File Website Lama', 'Garansi Bebas Error']
  },
  {
    id: 'pemeliharaan-support',
    title: 'Pemeliharaan & Bantuan Teknis Berkala',
    category: 'Dukungan Penuh',
    shortDesc: 'Fokus kembangkan bisnis Anda, biar urusan server, keamanan, backup data, dan update website kami yang tangani.',
    fullDesc: 'Tidak punya tim IT internal? Tenang, KPS Technology siap menjadi mitra IT Anda. Kami menjaga website Anda tetap online, aman dari peretasan, dan siap membantu update konten kapan pun Anda butuhkan.',
    iconName: 'ShieldCheck',
    badge: 'Bebas Repot',
    features: [
      'Pencadangan (Backup) Data Rutin agar Selalu Aman',
      'Bantuan Update Teks, Banner & Foto Produk',
      'Monitoring Server agar Website Tidak Down',
      'Konsultasi Cepat Kapan Saja via WhatsApp'
    ],
    deliverables: ['Laporan Pemeliharaan Bulanan', 'Prioritas Bantuan Teknis WA', 'Keamanan Server Terpantau', 'Salinan Backup Data']
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'katalog-umkm',
    title: 'Website Profil & Katalog Digital Bisnis',
    client: 'Usaha Retail & Manufaktur Lokal',
    category: 'web',
    summary: 'Pembuatan website profil perusahaan modern dilengkapi etalase katalog produk interaktif dengan tombol langsung terhubung ke admin WhatsApp penjualan.',
    challenge: 'Sebelumnya promosi hanya lewat media sosial, pelanggan sering bingung melihat daftar produk lengkap dan harga resmi.',
    solution: 'Membangun website katalog berkecepatan tinggi, ringan dibuka di HP, dan memudahkan calon pembeli memilih produk serta langsung memesan ke WhatsApp.',
    metrics: [
      { label: 'Kecepatan Web', value: '1.2 Detik' },
      { label: 'Peningkatan Chat WA', value: '+75%' },
      { label: 'Tampilan HP', value: '100% Responsif' }
    ],
    tags: ['Next.js', 'Tailwind CSS', 'WhatsApp Order', 'SEO Lokal'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    imageGradient: 'from-blue-900 to-slate-900',
    architectureHighlight: 'Fast Static Generation + Tombol Order Otomatis',
    completionYear: '2025'
  },
  {
    id: 'sistem-kasir-toko',
    title: 'Aplikasi Web Kasir & Stok Barang Toko',
    client: 'Toko Perlengkapan & Grosir',
    category: 'enterprise',
    summary: 'Sistem pencatatan penjualan kasir (POS), stok inventori barang masuk/keluar, serta rekap laba kotor harian yang dapat diakses pemilik dari rumah.',
    challenge: 'Stok barang sering selisih karena pencatatan manual di buku kasir, dan pemilik toko kesulitan mengecek rekap penjualan saat di luar kota.',
    solution: 'Merancang aplikasi web kasir berbasis cloud yang simpel, mudah dipelajari kasir dalam 1 hari, dan bisa dibuka pemilik lewat browser HP secara real-time.',
    metrics: [
      { label: 'Akurasi Stok', value: '99.5%' },
      { label: 'Waktu Input Kasir', value: '15 Detik' },
      { label: 'Pantau dari HP', value: 'Real-time' }
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Cloud POS'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
    imageGradient: 'from-indigo-900 to-slate-900',
    architectureHighlight: 'Cloud POS Ringan + Cetak Struk Bluetooth',
    completionYear: '2025'
  },
  {
    id: 'web-company-jasa',
    title: 'Website Profil Jasa & Konsultansi Profesional',
    client: 'Firma Layanan Jasa & Legalitas',
    category: 'web',
    summary: 'Landing page dan website profil elegan dengan form konsultasi otomatis, kalkulator estimasi layanan, dan integrasi Google Maps.',
    challenge: 'Website lama tampilannya kaku, tidak mobile-friendly, dan sering error saat dibuka dari smartphone klien.',
    solution: 'Desain ulang total dengan nuansa biru navy elegan, tipografi bersih, copywriting profesional, dan struktur menu yang jelas.',
    metrics: [
      { label: 'Peringkat Google', value: 'Halaman 1' },
      { label: 'Kredibilitas', value: 'Sangat Tinggi' },
      { label: 'Konversi Prospek', value: '+60%' }
    ],
    tags: ['Tailwind CSS', 'React', 'SEO Friendly', 'Fast Load'],
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80',
    imageGradient: 'from-blue-950 to-slate-900',
    architectureHighlight: 'Clean Design + Struktur SEO Teroptimasi',
    completionYear: '2024'
  }
];

export const TECH_BENEFITS: TechBenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Loading Cepat & Ringan',
    description: 'Website terbuka seketika di berbagai jaringan internet tanpa membuat calon pelanggan menunggu atau kabur.',
    iconName: 'Zap',
    tag: 'Kecepatan Maksimal'
  },
  {
    id: 'benefit-2',
    title: 'Tampilan Rapi di Layar HP',
    description: 'Otomatis menyesuaikan layar smartphone sehingga menu, foto produk, dan tombol order nyaman diakses pembeli.',
    iconName: 'Smartphone',
    tag: 'Mobile Friendly'
  },
  {
    id: 'benefit-3',
    title: 'Terhubung Langsung ke WhatsApp',
    description: 'Pengunjung dapat langsung klik tombol pesan untuk chat langsung dengan nomor WhatsApp bisnis Anda.',
    iconName: 'MessageSquare',
    tag: 'Mudah Dihubungi'
  },
  {
    id: 'benefit-4',
    title: 'Praktis Dikelola Sendiri',
    description: 'Kami sertakan panduan sederhana agar Anda bisa memperbarui foto, teks, atau katalog produk dengan mudah.',
    iconName: 'Sliders',
    tag: 'Tanpa Ribet'
  },
  {
    id: 'benefit-5',
    title: 'Server Aman & Terlindungi',
    description: 'Data bisnis dan website Anda tersimpan di server cloud andal dengan proteksi koneksi aman SSL/HTTPS.',
    iconName: 'ShieldCheck',
    tag: 'Aman & Stabil'
  },
  {
    id: 'benefit-6',
    title: 'Hak Milik Penuh Tanpa Sewa',
    description: 'Seluruh sistem dan website adalah milik Anda sepenuhnya tanpa potongan komisi jualan atau biaya sewa bulanan.',
    iconName: 'CheckCircle2',
    tag: 'Bebas Komisi'
  }
];

export const WORKFLOW_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Konsultasi Santai & Gratis',
    duration: 'Tahap 1',
    description: 'Ceritakan ide, kebutuhan, atau kendala bisnis Anda via WhatsApp atau Google Meet. Kami bantu berikan rekomendasi solusi yang paling tepat sasaran.',
    keyOutputs: ['Rekomendasi Solusi', 'Diskusi Kebutuhan Fitur', 'Konsultasi 100% Gratis']
  },
  {
    stepNumber: '02',
    title: 'Kesepakatan & Gambaran Desain',
    duration: 'Tahap 2',
    description: 'Setelah menyepakati fitur yang dibutuhkan, kami buatkan struktur halaman dan gambaran desain awal agar Anda tahu jelas bentuk sistem nantinya.',
    keyOutputs: ['Rancangan Desain Awal', 'Daftar Fitur Final', 'Jadwal Pengerjaan Jelas']
  },
  {
    stepNumber: '03',
    title: 'Proses Pengerjaan (Development)',
    duration: 'Tahap 3',
    description: 'Kami mulai merakit website atau aplikasi dengan teliti. Anda dapat melihat perkembangan pengerjaan secara berkala melalui tautan uji coba (demo link).',
    keyOutputs: ['Tautan Uji Coba Demo', 'Update Progres Berkala', 'Tinjauan & Masukan Anda']
  },
  {
    stepNumber: '04',
    title: 'Uji Coba & Bimbingan Pakai',
    duration: 'Tahap 4',
    description: 'Kita uji bersama seluruh fungsi website dan tombol di HP Anda. Kami juga berikan panduan cara mengelola konten atau produk dengan mudah.',
    keyOutputs: ['Pemeriksaan Tampilan & Fitur', 'Panduan Cara Pakai Simpel', 'Penyesuaian Akhir']
  },
  {
    stepNumber: '05',
    title: 'Website Online & Garansi Penuh',
    duration: 'Tahap 5',
    description: 'Website resmi diluncurkan dengan nama domain bisnis Anda sendiri. Anda mendapatkan garansi bantuan teknis penuh bila ada kendala.',
    keyOutputs: ['Website Resmi Online', 'Data Akses Diserahkan Penuh', 'Garansi Teknis & Pendampingan']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Budi Setiawan',
    role: 'Owner',
    company: 'Mitra Baja Nusantara',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Awalnya ragu bikin website karena takut ribet, tapi tim KPS Technology sangat komunikatif dan sabar menjelaskan. Tampilan website perusahaan kami sekarang jauh lebih profesional dan order dari luar kota mulai berdatangan lewat WhatsApp.',
    rating: 5,
    projectScope: 'Website Profil Perusahaan'
  },
  {
    id: 'testi-2',
    name: 'Dewi Anggraeni',
    role: 'Founder',
    company: 'Klinik Cantik Sehat',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'Pelayanan cepat dan ramah banget. Desainnya bersih, elegan, dan enak dibuka di HP. Klien kami bilang websitenya rapi dan gampang untuk booking jadwal treatment langsung ke admin.',
    rating: 5,
    projectScope: 'Landing Page & Booking Jadwal'
  },
  {
    id: 'testi-3',
    name: 'Rian Hidayat',
    role: 'Pengelola',
    company: 'Grosir Sembako Berkah',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Sistem kasir dan stok barang dari KPS Technology sangat membantu toko kami. Sekarang tidak pusing lagi menghitung stok akhir bulan karena semuanya sudah tercatat otomatis di sistem.',
    rating: 5,
    projectScope: 'Sistem Kasir & Stok Barang'
  }
];

// Struktur Tim Karyawan (Sederhana: Foto, Nama, Posisi)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Imam Ali Saputra',
    position: 'Project Manager',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-2',
    name: 'Muhammad Radityo',
    position: 'UI/Ux Designer & Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-3',
    name: 'Subayu Kalla',
    position: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  }
];

// Daftar Klien Kami (Our Clients)
export const OUR_CLIENTS: ClientItem[] = [
  {
    id: 'client-1',
    name: 'Mitra Baja Nusantara',
    industry: 'Distribusi & Konstruksi',
    logoLetter: 'MBN',
    projectType: 'Website Profil & Katalog Bahan Bangunan',
    tagline: 'Perusahaan supplier baja dan material konstruksi regional',
    bgGradient: 'from-blue-700 to-indigo-900'
  },
  {
    id: 'client-2',
    name: 'Klinik Medika Asri',
    industry: 'Layanan Kesehatan',
    logoLetter: 'KMA',
    projectType: 'Landing Page & Sistem Booking Dokter',
    tagline: 'Fasilitas kesehatan pratama dengan reservasi pasien via web',
    bgGradient: 'from-emerald-600 to-teal-800'
  },
  {
    id: 'client-3',
    name: 'Grosir Sembako Berkah',
    industry: 'Retail & Perdagangan',
    logoLetter: 'GSB',
    projectType: 'Sistem Kasir (POS) & Manajemen Stok Multi-Gudang',
    tagline: 'Distributor bahan pokok dengan pencatatan inventori harian',
    bgGradient: 'from-amber-600 to-orange-800'
  },
  {
    id: 'client-4',
    name: 'Kopi Senja Roastery',
    industry: 'Food & Beverage',
    logoLetter: 'KSR',
    projectType: 'Website Katalog Kopi & Checkout WhatsApp',
    tagline: 'Brand kopi artisanal lokal dengan jangkauan pengiriman nasional',
    bgGradient: 'from-stone-700 to-stone-900'
  },
  {
    id: 'client-5',
    name: 'Cipta Rekayasa Teknik',
    industry: 'Jasa Kontraktor & Konsultan',
    logoLetter: 'CRT',
    projectType: 'Website Korporat & Portofolio Proyek',
    tagline: 'Biro konsultansi perencanaan dan rekayasa mekanikal elektrikal',
    bgGradient: 'from-sky-700 to-blue-900'
  },
  {
    id: 'client-6',
    name: 'Bintang Furnitur Interior',
    industry: 'Manufaktur & Desain Interior',
    logoLetter: 'BFI',
    projectType: 'Katalog Produk Interaktif & Galeri Proyek',
    tagline: 'Workshop kustom perabotan kayu dan penataan interior kantor',
    bgGradient: 'from-slate-700 to-indigo-950'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Biaya & Konsultasi',
    question: 'Bagaimana penentuan biaya pembuatan website atau sistem di KPS Technology?',
    answer: 'Kami tidak mematok paket kaku atau biaya tersembunyi. Biaya disesuaikan secara transparan berdasarkan ruang lingkup fitur, jumlah halaman, dan kebutuhan spesifik bisnis Anda. Anda dapat berkonsultasi terlebih dahulu secara gratis, dan kami akan menyusun rincian penawaran tertulis yang pas dengan anggaran Anda.'
  },
  {
    category: 'Kemudahan Pemilik',
    question: 'Saya belum paham teknis website, apakah nanti dibantu?',
    answer: 'Tentu saja! Anda tidak perlu pusing urusan teknis seperti domain, hosting, koding, atau server. Tim KPS Technology akan mengurus semuanya dari nol hingga siap pakai, serta mengajarkan cara mudah mengelola website atau sistem Anda.'
  },
  {
    category: 'Waktu Pengerjaan',
    question: 'Berapa lama proses pembuatan website sampai online?',
    answer: 'Untuk website profil atau landing page biasanya selesai dalam waktu 5 sampai 10 hari kerja setelah materi (foto & teks) siap. Untuk sistem informasi atau aplikasi kustom membutuhkan waktu 2 hingga 4 minggu tergantung kompleksitas alur kerja.'
  },
  {
    category: 'Garansi & Bantuan',
    question: 'Apakah ada revisi dan garansi setelah website selesai?',
    answer: 'Ya, kami menyediakan kesempatan revisi desain hingga Anda puas. Setelah website diluncurkan, kami juga memberikan masa garansi perbaikan gratis jika terjadi kendala teknis atau error.'
  },
  {
    category: 'Kepemilikan',
    question: 'Apakah website dan data menjadi milik kami sepenuhnya?',
    answer: 'Ya, 100% milik Anda. Akses akun domain, hosting, dan seluruh file website akan kami serahkan sepenuhnya kepada Anda tanpa ikatan sewa sistem bulanan.'
  }
];

export const COMPANY_STATS = [
  { label: 'Komitmen Kualitas', value: '100%', desc: 'Garansi Pendampingan Penuh' },
  { label: 'Dukungan Langsung', value: 'Responsif', desc: 'Komunikasi Langsung Tanpa Perantara' },
  { label: 'Konsultasi Kebutuhan', value: 'Gratis', desc: 'Bebas Tanya Kapan Saja via WA' },
  { label: 'Penyelesaian Proyek', value: 'Tepat Waktu', desc: 'Jadwal Pengerjaan Terencana' }
];
