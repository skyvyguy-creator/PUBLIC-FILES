import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  ARCHIVE_FILTER_TABS,
  CASSETTE_ENTRIES,
  type ArchiveCategory,
} from '../data/portfolioData';

export function ArchiveShelfSection() {
  const [activeFilter, setActiveFilter] = useState<ArchiveCategory>('all');
  const [activeId, setActiveId] = useState<string>(CASSETTE_ENTRIES[0].id);
  const shelfRef = useRef<HTMLDivElement>(null);

  const visibleCassettes =
    activeFilter === 'all'
      ? CASSETTE_ENTRIES
      : CASSETTE_ENTRIES.filter((entry) => entry.category === activeFilter);

  const activeEntry =
    visibleCassettes.find((entry) => entry.id === activeId) ??
    visibleCassettes[0] ??
    CASSETTE_ENTRIES[0];

  const handleFilterChange = (category: ArchiveCategory) => {
    setActiveFilter(category);
    const matching =
      category === 'all'
        ? CASSETTE_ENTRIES
        : CASSETTE_ENTRIES.filter((entry) => entry.category === category);
    if (matching.length > 0 && !matching.some((entry) => entry.id === activeId)) {
      setActiveId(matching[0].id);
    }
  };

  const scrollShelf = (delta: number) => {
    shelfRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="py-20 border-b border-paper-line bg-paper" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-paper-line">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-crimson uppercase block mb-1">
              02 // RAK ARSIP MEDIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-ink uppercase">
              RAK KOLEKSI ARSIP
            </h2>
            <p className="text-sm font-sans text-ink-muted mt-2 max-w-xl">
              Rak arsip taktil interaktif yang mencatat tonggak prestasi, debat, publikasi, dan inspirasi kultural. Pilih kaset untuk melihat rincian arsip.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs" role="tablist" aria-label="Filter koleksi arsip">
            {ARCHIVE_FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-3.5 py-1.5 border transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'border-ink bg-ink text-white shadow-editorial'
                      : 'border-paper-warm-line bg-white text-ink hover:border-crimson'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Shelf Container Box */}
        <div className="bg-paper-shelf border border-paper-line p-6 sm:p-8 rounded-sm shadow-subtle-card">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-paper-line">
            <span className="text-xs font-mono font-bold tracking-wider text-ink-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crimson" aria-hidden="true" />
              RAK KASET FISIK // {visibleCassettes.length} VOLUME TERSUSUN
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Gulir rak ke kiri"
                title="Gulir ke Kiri"
                onClick={() => scrollShelf(-220)}
                className="p-2 border border-paper-warm-line bg-white hover:border-ink hover:bg-paper-subtle transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-ink" />
              </button>
              <button
                type="button"
                aria-label="Gulir rak ke kanan"
                title="Gulir ke Kanan"
                onClick={() => scrollShelf(220)}
                className="p-2 border border-paper-warm-line bg-white hover:border-ink hover:bg-paper-subtle transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-ink" />
              </button>
            </div>
          </div>

          {/* VHS Cassette Rack */}
          <div
            ref={shelfRef}
            className="shelf-track flex items-end gap-4 overflow-x-auto pb-6 pt-10 px-2 scroll-smooth"
          >
            {visibleCassettes.map((entry) => {
              const isActive = entry.id === activeEntry.id;
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveId(entry.id)}
                  aria-pressed={isActive}
                  aria-label={`${entry.volume} ${entry.fullTitle}`}
                  className={`vhs-spine flex-shrink-0 w-24 sm:w-28 h-72 sm:h-80 ${entry.bgClass} ${entry.textClass} border ${entry.borderClass} rounded-t-sm flex flex-col justify-between p-2.5 select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson ${
                    isActive ? 'active-tape' : ''
                  }`}
                >
                  <div
                    className={`w-full text-[9px] font-mono tracking-widest text-center border-b ${entry.dividerClass} pb-1 ${entry.volumeTextClass} font-bold`}
                  >
                    {entry.volume}
                  </div>
                  <div
                    className={`spine-title-vertical text-xs sm:text-sm font-cinzel font-bold tracking-widest text-center uppercase my-auto mx-auto ${entry.spineTextClass}`}
                  >
                    {entry.spineTitle}
                  </div>
                  <div
                    className={`w-full border-t ${entry.dividerClass} pt-1 text-center font-mono text-[9px] ${entry.footerSubClass}`}
                  >
                    <span>KASET</span>
                    <br />
                    <span className="font-bold">{entry.footerLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Shelf Plinth Accent */}
          <div className="w-full h-4 bg-paper-darker border-t border-b border-paper-warm-line relative">
            <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 via-bronze/30 to-crimson/20" />
          </div>

          {/* Featured Active Case Display */}
          <div
            className="mt-8 p-6 bg-white border border-paper-warm-line rounded-sm shadow-subtle-card flex flex-col md:flex-row gap-8 items-stretch"
            id="active-display-box"
          >
            <div className="w-full sm:w-72 flex-shrink-0 bg-paper-subtle border border-paper-warm-line p-5 rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-crimson font-bold tracking-widest uppercase pb-2 border-b border-paper-warm-line">
                  <span>{activeEntry.badge}</span>
                  <span className="w-2 h-2 rounded-full bg-crimson" aria-hidden="true" />
                </div>
                <div className="mt-6 mb-8 text-center">
                  <div className="text-[11px] font-mono tracking-widest text-ink-muted uppercase mb-1">
                    ENTRI KASET ARSIP
                  </div>
                  <div className="font-cinzel font-extrabold text-2xl text-ink tracking-tight uppercase">
                    {activeEntry.shortTitle}
                  </div>
                  <div className="w-12 h-1 bg-crimson mx-auto mt-3" />
                </div>
                <div className="bg-white border border-paper-warm-line p-3 font-mono text-[10px] space-y-1.5 text-ink-light">
                  <div className="flex justify-between gap-2">
                    <span className="text-ink-muted">FORMAT:</span>
                    <span className="font-bold text-ink">PITA AUDIO-DATA ANALOG</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-ink-muted">KODE INDEKS:</span>
                    <span className="font-bold text-crimson">{activeEntry.code}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-ink-muted">STATUS:</span>
                    <span className="font-bold text-forest">TERKATALOGISASI</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-paper-warm-line flex items-center justify-between text-[10px] font-mono text-ink-muted">
                <span>{activeEntry.period}</span>
                <span className="text-crimson font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson" aria-hidden="true" />
                  KASET AKTIF
                </span>
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-between py-1 space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-crimson-light text-crimson border border-crimson/30 rounded-sm">
                    {activeEntry.tag}
                  </span>
                  <span className="text-xs font-mono text-ink-muted">
                    KATEGORI: {activeEntry.categoryLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-ink mb-3">
                  {activeEntry.fullTitle}
                </h3>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                  {activeEntry.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-paper-warm-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="text-ink font-medium">{activeEntry.meta}</div>
                <div className="text-[11px] text-ink-muted flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" aria-hidden="true" />
                  <span>ENTRI ARSIP TERVERIFIKASI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
