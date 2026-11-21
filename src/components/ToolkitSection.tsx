import { CAPABILITY_STRIP, TOOLKIT_ITEMS } from '../data/portfolioData';

export function ToolkitSection() {
  return (
    <section className="py-20 border-b border-paper-line bg-paper" id="toolkit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-crimson uppercase block mb-1">
            05 // ALAT PRAKTIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-ink uppercase">
            KEAHLIAN &amp; KARYA MATERIAL MANDIRI
          </h2>
          <p className="text-sm sm:text-base text-ink-muted font-sans mt-2">
            Tata letak dokumen praktis, tabulasi spreadsheet, komposisi grafis visual, dan layanan reprografi fisik di bawah inisiatif Material Mandiri.
          </p>
        </div>

        {/* 5 Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TOOLKIT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-paper-warm-line p-5 rounded-sm shadow-subtle-card flex flex-col justify-between hover:border-crimson transition-all"
            >
              <div>
                <div
                  className={`w-10 h-10 ${item.badgeBg} text-white flex items-center justify-center font-mono font-bold text-base mb-4 rounded-sm shadow-sm`}
                >
                  {item.code}
                </div>
                <h3 className="text-base font-cinzel font-bold text-ink">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-ink-muted mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div
                className={`mt-5 pt-3 border-t border-paper-warm-line text-[10px] font-mono ${item.categoryColor} font-bold uppercase`}
              >
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Strip */}
        <div className="mt-10 p-5 bg-paper-subtle border border-paper-warm-line rounded-sm flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink">
          {CAPABILITY_STRIP.map((cap) => (
            <div key={cap.label} className="flex items-center gap-2">
              <span className={cap.colorClass} aria-hidden="true">
                ✦
              </span>
              <span>{cap.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
