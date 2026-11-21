export type ArchiveCategory = 'all' | 'academic' | 'debate' | 'craft' | 'lore';

export interface CassetteEntry {
  id: string;
  volume: string;
  spineTitle: string;
  fullTitle: string;
  shortTitle: string;
  footerLabel: string;
  category: Exclude<ArchiveCategory, 'all'>;
  categoryLabel: string;
  badge: string;
  code: string;
  tag: string;
  period: string;
  desc: string;
  meta: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  volumeTextClass: string;
  spineTextClass: string;
  footerSubClass: string;
  dividerClass: string;
}

export const PORTRAIT_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCHQnXc0AuVzKT57ZDn-7ymrZhEg8VEF3_jHtnfikOJTfeuHQo_xEvkqZdNgm2AV3KYMeOHw_DKTUmIZhMlOn0xHN2_uHjpA-YBQdzJvjkglPmJQmjq56I_DCCOTzyiYgB3kOKLtw4CzMJnE8Nz48pKFJ-3e20Zbuw1jI5206zg0IUzAybhPBVbGSeeMcM47IWR-yRKhv9PICturw0P6274mTe_wWJlVYSxuZH_lCFczdX_vt3LewM9';

export const CONTACT_EMAIL = 'skyverohidayatullahpardi@gmail.com';

export const NAV_LINKS = [
  { href: '#profile', label: 'TENTANG' },
  { href: '#showcase', label: 'RAK ARSIP' },
  { href: '#education', label: 'PENDIDIKAN' },
  { href: '#achievements', label: 'PRESTASI' },
  { href: '#toolkit', label: 'KEAHLIAN & ALAT' },
];

export const HERO_STATS = [
  {
    label: 'STATUS AKADEMIK',
    value: 'Mahasiswa Baru (Angkatan 2026)',
    valueClass: 'text-ink',
  },
  {
    label: 'INSTITUSI',
    value: 'Institut Teknologi PLN (ITPLN)',
    valueClass: 'text-ink',
  },
  {
    label: 'FOKUS BIDANG',
    value: 'Algoritma & Sistem',
    valueClass: 'text-crimson',
  },
  {
    label: 'PERAN DEBAT',
    value: 'Pembicara Ketiga (Whip)',
    valueClass: 'text-bronze-dark',
  },
];

export const ARCHIVE_FILTER_TABS: { id: ArchiveCategory; label: string }[] = [
  { id: 'all', label: 'SEMUA ARSIP' },
  { id: 'academic', label: 'AKADEMIK & TEKNO' },
  { id: 'debate', label: 'DEBAT & PIDATO' },
  { id: 'craft', label: 'KARYA & CETAK' },
  { id: 'lore', label: 'SINEMA & MINAT' },
];

export const CASSETTE_ENTRIES: CassetteEntry[] = [
  {
    id: 'inf-01',
    volume: 'VOL. 01',
    spineTitle: 'PERJALANAN INFORMATIKA',
    fullTitle: 'PERJALANAN INFORMATIKA',
    shortTitle: 'PERJALANAN INFORMATIKA',
    footerLabel: 'ITPLN',
    category: 'academic',
    categoryLabel: 'AKADEMIK & TEKNOLOGI',
    badge: 'ITPLN-26 // LOGIKA & SISTEM',
    code: 'INF-01',
    tag: 'TEKNOLOGI & ALGORITMA',
    period: '2026 – SEKARANG',
    desc: 'Studi S1 Teknik Informatika di Institut Teknologi PLN (ITPLN). Mendalami struktur data, logika komputasi, konsep berorientasi objek, dan metodologi rekayasa perangkat lunak.',
    meta: 'Kampus: ITPLN Jakarta • Status: Mahasiswa Aktif • Program: S1 Teknik Informatika',
    bgClass: 'bg-[#16171B]',
    borderClass: 'border-[#2D2E36]',
    textClass: 'text-[#FAF8F5]',
    volumeTextClass: 'text-emerald-400',
    spineTextClass: 'text-[#FAF8F5]',
    footerSubClass: 'text-white/70',
    dividerClass: 'border-white/20',
  },
  {
    id: 'deb-02',
    volume: 'VOL. 02',
    spineTitle: 'PEMBICARA KETIGA',
    fullTitle: 'PEMBICARA KETIGA: RETORIKA & CLASH',
    shortTitle: 'PEMBICARA KETIGA',
    footerLabel: 'DEBAT',
    category: 'debate',
    categoryLabel: 'DEBAT & PIDATO',
    badge: 'ORATOR-03 // SPESIALIS WHIP',
    code: 'DEB-02',
    tag: 'DEBAT & ORATORI',
    period: '2024 – 2026',
    desc: 'Rekam jejak kompetitif sebagai Pembicara Ketiga (Whip) dalam turnamen Debat Parlementer. Menguasai matriks bantahan waktu-nyata, sintesis argumen kompleks, dan resolusi benturan logika.',
    meta: 'Format: Asian Parliamentary / WSDC • Posisi: Pembicara 3 (Whip) • Komunitas: Klub Bahasa Inggris',
    bgClass: 'bg-[#7A0016]',
    borderClass: 'border-[#9E1B28]',
    textClass: 'text-[#FAF8F5]',
    volumeTextClass: 'text-amber-200',
    spineTextClass: 'text-white',
    footerSubClass: 'text-white/80',
    dividerClass: 'border-white/20',
  },
  {
    id: 'hon-03',
    volume: 'VOL. 03',
    spineTitle: 'PRESTASI & OLIMPIADE',
    fullTitle: 'PRESTASI & OLIMPIADE',
    shortTitle: 'PRESTASI & OLIMPIADE',
    footerLabel: 'MEDALI',
    category: 'academic',
    categoryLabel: 'AKADEMIK & TEKNOLOGI',
    badge: 'PRESTASI // NASIONAL & KABUPATEN',
    code: 'HON-03',
    tag: 'PRESTASI & PENGHARGAAN',
    period: '2024 – 2025',
    desc: 'Meraih Co-9th Best Speaker tingkat nasional pada Taikai 2024 dan Juara 3 Olimpiade Bahasa Inggris Kabupaten Solok (MGMP Solok 2025).',
    meta: 'Penghargaan: Co-9th Speaker (Nasional Taikai 2024) | Juara 3 (MGMP Solok 2025)',
    bgClass: 'bg-[#1D2A3A]',
    borderClass: 'border-[#2E415A]',
    textClass: 'text-[#FAF8F5]',
    volumeTextClass: 'text-amber-300',
    spineTextClass: 'text-amber-200',
    footerSubClass: 'text-amber-300',
    dividerClass: 'border-white/20',
  },
  {
    id: 'man-04',
    volume: 'VOL. 04',
    spineTitle: 'MATERIAL MANDIRI',
    fullTitle: 'MATERIAL MANDIRI: CETAK & KARYA DOKUMEN',
    shortTitle: 'MATERIAL MANDIRI',
    footerLabel: 'CETAK',
    category: 'craft',
    categoryLabel: 'KARYA & CETAK',
    badge: 'KARYA-01 // PRAKSIS PRODUKSI',
    code: 'MAN-04',
    tag: 'TATA LETAK & DOKUMEN',
    period: 'KARYA BERKELANJUTAN',
    desc: 'Keahlian tata letak dokumen, standarisasi karya ilmiah/makalah, perancangan slide presentasi, tabulasi spreadsheet, dan layanan cetak-jilid fisik mandiri.',
    meta: 'Alat: MS Word, Excel, PowerPoint, Canva, Perangkat Cetak & Penjilidan Fisik',
    bgClass: 'bg-[#B58E3C]',
    borderClass: 'border-[#8C6D27]',
    textClass: 'text-ink',
    volumeTextClass: 'text-ink',
    spineTextClass: 'text-ink',
    footerSubClass: 'text-ink',
    dividerClass: 'border-ink/20',
  },
  {
    id: 'lore-05',
    volume: 'VOL. 05',
    spineTitle: 'TOKUSATSU & LORE',
    fullTitle: 'TOKUSATSU & MINAT POP-CULTURE',
    shortTitle: 'TOKUSATSU & MINAT POP-CULTURE',
    footerLabel: 'SINEMA',
    category: 'lore',
    categoryLabel: 'SINEMA & MINAT',
    badge: 'SINEMA // ARSIP NARATIF',
    code: 'LORE-05',
    tag: 'NARASI & SINEMA',
    period: 'MINAT KREATIF',
    desc: 'Apresiasi mendalam terhadap sinematografi Tokusatsu (Kamen Rider, Super Sentai), mekanika game pertarungan kompetitif (frame data & mind games), dan seni komposisi naratif visual.',
    meta: 'Ketertarikan: Sinematografi Tokusatsu, Game Pertarungan, Desain Cerita Visual',
    bgClass: 'bg-[#251A24]',
    borderClass: 'border-[#442B40]',
    textClass: 'text-[#FAF8F5]',
    volumeTextClass: 'text-rose-300',
    spineTextClass: 'text-rose-200',
    footerSubClass: 'text-rose-300',
    dividerClass: 'border-white/20',
  },
];

export const TOOLKIT_ITEMS = [
  {
    code: 'W',
    badgeBg: 'bg-[#2B579A]',
    categoryColor: 'text-[#2B579A]',
    title: 'Microsoft Word',
    description:
      'Penyusunan makalah ilmiah, kerapian margin standar, format kutipan, proposal, dan standarisasi dokumen akademik.',
    category: 'KARYA DOKUMEN',
  },
  {
    code: 'X',
    badgeBg: 'bg-[#217346]',
    categoryColor: 'text-[#217346]',
    title: 'Microsoft Excel',
    description:
      'Pengolahan lembar kerja, formula kalkulasi dasar, rekapitulasi data tabular, serta pembuatan laporan angka yang teratur.',
    category: 'TABULASI DATA',
  },
  {
    code: 'P',
    badgeBg: 'bg-primary-container',
    categoryColor: 'text-crimson',
    title: 'PowerPoint',
    description:
      'Penyusunan slide presentasi seminar & kelas, penataan ritme informasi, hierarki visual, dan kesiapan orasi.',
    category: 'SLIDE PRESENTASI',
  },
  {
    code: 'C',
    badgeBg: 'bg-[#008F94]',
    categoryColor: 'text-[#008F94]',
    title: 'Canva Design',
    description:
      'Desain poster kegiatan, pamflet informasi, konten grafis presentasi, komposisi tipografi, dan aset visual modern.',
    category: 'GRAFIS VISUAL',
  },
  {
    code: 'PR',
    badgeBg: 'bg-bronze-dark',
    categoryColor: 'text-bronze-dark',
    title: 'Print & Binding',
    description:
      'Pencetakan mandiri, fotokopi fisik, jilid spiral/lakban, pemotongan presisi, dan penanganan reprografi dokumen.',
    category: 'MATERIAL MANDIRI',
  },
];

export const CAPABILITY_STRIP = [
  { label: 'Standarisasi Makalah & Penulisan Terstruktur', colorClass: 'text-crimson' },
  { label: 'Desain Media Publikasi & Poster Visual', colorClass: 'text-bronze' },
  { label: 'Perancangan Slide Materi Presentasi', colorClass: 'text-forest' },
  { label: 'Administrasi Tabular & Eksekusi Cetak Fisik', colorClass: 'text-ink' },
];
