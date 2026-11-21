export function EducationAchievementsSection() {
  return (
    <section
      className="py-20 border-b border-paper-line bg-paper-section"
      id="education"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Pendidikan Formal */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-crimson uppercase block mb-1">
                03 // JALUR PENDIDIKAN
              </span>
              <h2 className="text-3xl font-cinzel font-bold text-ink uppercase">
                PENDIDIKAN
              </h2>
              <p className="text-sm text-ink-muted mt-1 font-sans">
                Fondasi performa akademik dan peminatan studi perguruan tinggi.
              </p>
            </div>

            <div className="space-y-6">
              {/* ITPLN */}
              <article className="bg-white border border-paper-line p-6 rounded-sm shadow-subtle-card relative pl-6 border-l-4 border-l-crimson">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-paper-subtle text-ink border border-paper-warm-line">
                    2026 – SEKARANG
                  </span>
                  <span className="text-xs font-mono text-ink-muted">JAKARTA BARAT</span>
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ink">
                  Institut Teknologi PLN (ITPLN)
                </h3>
                <div className="text-xs font-mono font-semibold text-crimson mt-1">
                  S1 Teknik Informatika – Sarjana
                </div>
                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed font-sans">
                  Fokus pada kurikulum inti ilmu komputer: struktur data, pola perancangan algoritmik, dasar sistem komputer, dan metodologi rekayasa perangkat lunak.
                </p>
                <div className="mt-4 pt-3 border-t border-paper-warm-line flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>FAKULTAS: TELEMATIKA ENERGI</span>
                  <span className="text-ink font-semibold">STATUS: MAHASISWA AKTIF</span>
                </div>
              </article>

              {/* SMA Negeri 1 Gunung Talang */}
              <article className="bg-white border border-paper-line p-6 rounded-sm shadow-subtle-card relative pl-6 border-l-4 border-l-ink">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-paper-subtle text-ink border border-paper-warm-line">
                    LULUS 2026
                  </span>
                  <span className="text-xs font-mono text-ink-muted">KAB. SOLOK</span>
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ink">
                  SMA Negeri 1 Gunung Talang
                </h3>
                <div className="text-xs font-mono font-semibold text-ink mt-1">
                  Ijazah Sekolah Menengah Atas // Nilai Rata-rata: 90.35
                </div>
                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed font-sans">
                  Menyelesaikan pendidikan menengah atas dengan predikat sangat memuaskan (Rata-rata 90.35). Mata pelajaran peminatan: Bahasa Inggris Tingkat Lanjut, Informatika, Biologi, dan Sosiologi. Aktif dalam forum debat dan kegiatan ekstrakurikuler.
                </p>
                <div className="mt-4 pt-3 border-t border-paper-warm-line flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>PREDIKAT: NILAI 90.35</span>
                  <span className="text-ink font-semibold">ANGKATAN 2026</span>
                </div>
              </article>
            </div>
          </div>

          {/* Column 2: Prestasi & Penghargaan */}
          <div className="lg:col-span-6 space-y-8" id="achievements">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-bronze-dark uppercase block mb-1">
                04 // RETORIKA &amp; PENGHARGAAN
              </span>
              <h2 className="text-3xl font-cinzel font-bold text-ink uppercase">
                PRESTASI &amp; PENGHARGAAN
              </h2>
              <p className="text-sm text-ink-muted mt-1 font-sans">
                Rekam jejak kompetisi debat dan olimpiade bahasa asing.
              </p>
            </div>

            <div className="space-y-6">
              {/* Taikai 2024 */}
              <article className="bg-white border border-paper-line p-6 rounded-sm shadow-subtle-card relative pl-6 border-l-4 border-l-crimson">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-crimson-light text-crimson font-mono text-xs font-bold border border-crimson/30">
                    ★ PRESTASI NASIONAL
                  </span>
                  <span className="text-xs font-mono text-ink-muted">NOV 2024</span>
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ink">
                  PENGHARGAAN CO-9TH BEST SPEAKER
                </h3>
                <div className="text-xs font-mono font-semibold text-crimson mt-1">
                  Taikai 2024: The First National Foreign Language Olympiad
                </div>
                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed font-sans">
                  Meraih peringkat pembicara terbaik ke-9 nasional di antara peserta debat SMA tingkat nasional di seluruh Indonesia. Diakui atas ketajaman dekonstruksi argumen dan bantahan substantif.
                </p>
                <div className="mt-4 pt-3 border-t border-paper-warm-line flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>KATEGORI: DEBAT BAHASA INGGRIS</span>
                  <span className="text-ink font-semibold">TINGKAT: NASIONAL</span>
                </div>
              </article>

              {/* MGMP Solok 2025 */}
              <article className="bg-white border border-paper-line p-6 rounded-sm shadow-subtle-card relative pl-6 border-l-4 border-l-bronze">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-bronze-light text-bronze-dark font-mono text-xs font-bold border border-bronze/40">
                    ★ JUARA TINGKAT KABUPATEN
                  </span>
                  <span className="text-xs font-mono text-ink-muted">JAN 2025</span>
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ink">
                  JUARA 3 // OLIMPIADE BAHASA INGGRIS
                </h3>
                <div className="text-xs font-mono font-semibold text-ink mt-1">
                  The 1st English Olympiad 2025 Kabupaten Solok
                </div>
                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed font-sans">
                  Diselenggarakan oleh MGMP Bahasa Inggris SMA Kabupaten Solok. Berhasil lolos melalui berbagai tahap penilaian tertulis dan babak speech/impromptu hingga meraih podium juara ke-3.
                </p>
                <div className="mt-4 pt-3 border-t border-paper-warm-line flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>PENYELENGGARA: MGMP SMA KAB. SOLOK</span>
                  <span className="text-bronze-dark font-semibold">PENGHARGAAN: JUARA 3</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
