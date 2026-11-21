import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 w-full backdrop-blur-md border-b border-paper-line z-50 transition-all duration-200"
      style={{ backgroundColor: 'rgba(235, 243, 250, 0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Monogram & Title */}
        <a
          aria-label="Beranda Skyvero"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-sm shrink-0"
          href="#hero"
        >
          <div className="w-10 h-10 rounded-sm bg-primary-container text-white flex items-center justify-center font-cinzel font-bold text-base border border-primary-container shadow-sm group-hover:bg-ink group-hover:border-ink transition-colors">
            VP
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-sm tracking-widest text-ink uppercase group-hover:text-crimson transition-colors whitespace-nowrap">
              SKYVERO PARDI
            </span>
            <span className="font-mono text-[10px] tracking-wider text-ink-muted whitespace-nowrap">
              S1 INFORMATIKA ITPLN • REKAM ARSIP
            </span>
          </div>
        </a>

        {/* Jump Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-mono font-medium text-ink-light"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-crimson transition-colors py-1 relative whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-crimson after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Direct Call-to-Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase font-mono font-semibold tracking-wider text-white bg-primary-container hover:bg-primary border border-primary-container hover:border-primary transition-all duration-200 rounded-sm shadow-editorial-crimson hover:shadow-editorial active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>HUBUNGI SAYA</span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 border border-paper-line bg-white/80 hover:bg-white text-ink rounded-sm transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="lg:hidden border-t border-paper-line bg-[#EBF3FA] px-4 py-3 flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-ink-light"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 hover:text-crimson hover:bg-white/60 rounded-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
