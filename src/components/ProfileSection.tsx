import { useState } from 'react';
import { PORTRAIT_IMAGE_URL } from '../data/portfolioData';

export function ProfileSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="py-20 border-b border-paper-line bg-paper-section"
      id="profile"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-crimson uppercase block mb-1">
            01 // TENTANG SKYVERO (VERO)
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-ink">
            DOSIR RESMI ARSIP
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Formal Portrait & Metadata Specs */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-paper-line p-5 rounded-sm shadow-subtle-card">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm mb-5 border-2 border-crimson/30 bg-[#9E1B28] shadow-inner flex items-center justify-center">
                {!imgError ? (
                  <img
                    alt="Foto Resmi Skyvero Hidayatullah Pardi"
                    className="w-full h-full object-cover object-top"
                    src={PORTRAIT_IMAGE_URL}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#9E1B28] to-[#7A0016] text-white">
                    <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center font-cinzel text-3xl font-bold mb-4">
                      VP
                    </div>
                    <p className="font-cinzel font-bold text-lg tracking-wider uppercase">
                      Skyvero Hidayatullah Pardi
                    </p>
                    <p className="font-mono text-xs text-white/80 mt-1">
                      S1 Teknik Informatika • ITPLN 2026
                    </p>
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-primary-container text-white px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase border border-white/20 shadow-sm">
                  ARSIP RESMI
                </div>
                <div className="absolute bottom-3 left-3 bg-ink/90 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono tracking-widest border border-white/20">
                  REF: VER-ID // 026
                </div>
              </div>

              {/* Metadata Specs Table */}
              <div className="space-y-2.5 font-mono text-xs text-ink-light pt-2 border-t border-paper-warm-line">
                <div className="flex justify-between gap-2 py-1 border-b border-paper-warm-line/60">
                  <span className="text-ink-muted">NAMA LENGKAP:</span>
                  <span className="font-bold text-ink text-right">
                    Skyvero Hidayatullah Pardi
                  </span>
                </div>
                <div className="flex justify-between gap-2 py-1 border-b border-paper-warm-line/60">
                  <span className="text-ink-muted">PANGGILAN:</span>
                  <span className="font-bold text-ink">Vero</span>
                </div>
                <div className="flex justify-between gap-2 py-1 border-b border-paper-warm-line/60">
                  <span className="text-ink-muted">ASAL:</span>
                  <span className="font-medium text-right">Kab. Solok, Sumatera Barat</span>
                </div>
                <div className="flex justify-between gap-2 py-1 border-b border-paper-warm-line/60">
                  <span className="text-ink-muted">KAMPUS:</span>
                  <span className="font-medium text-right">
                    Institut Teknologi PLN (Jakarta)
                  </span>
                </div>
                <div className="flex justify-between gap-2 py-1">
                  <span className="text-ink-muted">PROGRAM STUDI:</span>
                  <span className="font-semibold text-crimson text-right">
                    S1 Teknik Informatika
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-paper-line p-8 rounded-sm shadow-subtle-card space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-light border border-crimson/30 text-crimson text-xs font-mono font-semibold">
                FONDASI AKADEMIK &amp; DEDIKASI KARYA
              </div>
              <h3 className="text-2xl font-cinzel font-bold text-ink">
                DEDIKASI PADA KETELITIAN ANALITIS, DEBAT DINAMIS, DAN ESTETIKA BERMAKNA
              </h3>

              <div className="space-y-4 text-ink-muted leading-relaxed font-sans text-base">
                <p>
                  Halo, saya <strong className="text-ink">Skyvero Hidayatullah Pardi</strong> — biasa dipanggil{' '}
                  <strong className="text-ink">Vero</strong>. Saya merupakan lulusan SMA (Juni 2026) asal Kabupaten Solok, Sumatera Barat, yang kini melanjutkan studi di jenjang{' '}
                  <strong className="text-ink">S1 Teknik Informatika</strong> di{' '}
                  <strong className="text-ink">Institut Teknologi PLN (ITPLN)</strong> di Jakarta Barat.
                </p>
                <p>
                  Di bidang teknologi, fokus utama saya mencakup logika komputasional, algoritma dasar, arsitektur perangkat lunak, serta implementasi sistem yang efisien. Ketertarikan saya pada presisi berpikir terasah melalui keaktifan di dunia debat parlementer, di mana saya terbiasa bertindak sebagai{' '}
                  <strong className="text-ink">Pembicara Ketiga (Whip)</strong> — menyintesis argumen, merekonstruksi benturan logika (clash), dan membedah esensi masalah di bawah tekanan waktu.
                </p>
                <p>
                  Di luar perkuliahan dan coding, saya memperkaya perspektif melalui apresiasi mendalam terhadap narasi pop-culture Jepang seperti Tokusatsu (Kamen Rider &amp; Super Sentai), sinematografi, animasi, serta presisi mekanika dan kalkulasi <em>frame data</em> pada game pertarungan kompetitif. Perpaduan antara struktur disiplin dan apresiasi visual ini membentuk cara kerja saya dalam berkarya maupun menyelesaikan masalah.
                </p>
              </div>

              {/* Mini Highlight Cards */}
              <div className="pt-6 border-t border-paper-warm-line grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3 bg-paper-subtle border border-paper-warm-line rounded-sm">
                  <span className="text-crimson font-bold block mb-1">01 / LOGIKA</span>
                  <span className="text-ink font-medium">
                    Pemikiran Algoritmik &amp; Fondasi Kode Bersih
                  </span>
                </div>
                <div className="p-3 bg-paper-subtle border border-paper-warm-line rounded-sm">
                  <span className="text-bronze font-bold block mb-1">02 / RETORIKA</span>
                  <span className="text-ink font-medium">
                    Sintesis Argumen, Bantahan &amp; Resolusi Clash
                  </span>
                </div>
                <div className="p-3 bg-paper-subtle border border-paper-warm-line rounded-sm">
                  <span className="text-forest font-bold block mb-1">03 / PRODUKSI</span>
                  <span className="text-ink font-medium">
                    Tata Letak Dokumen &amp; Percetakan Material Mandiri
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
