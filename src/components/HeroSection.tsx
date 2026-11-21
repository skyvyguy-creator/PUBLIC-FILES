import { HERO_STATS } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 border-b border-paper-line" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-paper-line mb-8">
          <div className="inline-flex items-center gap-2.5 bg-paper-subtle border border-paper-warm-line px-3 py-1 rounded-sm text-[11px] font-mono tracking-widest text-ink">
            <span className="w-2 h-2 rounded-full bg-crimson" aria-hidden="true" />
            <span>REKAM ARSIP &amp; PORTOFOLIO // 2024–SEKARANG</span>
          </div>
          <span className="text-xs font-mono text-ink-muted">
            JAKARTA &amp; SOLOK, SUMATERA BARAT
          </span>
        </div>

        {/* Headline & Bio Header */}
        <div className="max-w-4xl">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-crimson uppercase block mb-3 font-semibold">
            MAHASISWA S1 TEKNIK INFORMATIKA • DEBATER PARLEMEN • SPESIALIS DOKUMEN &amp; GRAFIS
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-ink uppercase leading-none mb-6">
            Skyvero Hidayatullah Pardi
          </h1>
          <p className="text-base sm:text-xl text-ink-muted max-w-3xl font-serif italic leading-relaxed">
            Menjembatani ketelitian logika akademik dan algoritma dengan wacana publik serta narasi visual. Mengarsipkan rekam jejak studi di Institut Teknologi PLN, prestasi debat kompetitif, dan keahlian tata letak dokumen praktis.
          </p>
        </div>

        {/* Quick Stats & Alignment Bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-8 border-t border-paper-line text-ink">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-paper-subtle p-3.5 border border-paper-warm-line rounded-sm"
            >
              <span className="block text-[10px] font-mono text-ink-muted uppercase">
                {stat.label}
              </span>
              <span className={`font-mono font-bold text-sm ${stat.valueClass}`}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
