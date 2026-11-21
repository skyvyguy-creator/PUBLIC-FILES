import { useEffect, useRef, useState } from 'react';
import { Copy, Mail, Check } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/portfolioData';

export function ContactFooterSection() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const temp = document.createElement('input');
      temp.value = CONTACT_EMAIL;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }

    setCopied(true);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <>
      <section className="py-24 bg-paper-shelf text-ink" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-crimson uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-crimson" aria-hidden="true" />
            06 // HUBUNGI &amp; KOLABORASI
          </div>
          <h2 className="text-4xl sm:text-5xl font-cinzel font-extrabold tracking-tight text-ink uppercase mb-5">
            TOLONG JANGAN HUBUNG
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto font-sans leading-relaxed mb-8">
            Baik untuk mendiskusikan Ilmu Komputer, strategi debat bahasa Inggris, inspirasi sinematik, atau memerlukan bantuan persiapan dokumen, poster, dan materi presentasi — kotak masuk saya selalu terbuka.
          </p>

          {/* Email Pill & Copy Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              className="px-6 py-3.5 bg-ink text-[#FAF8F5] font-mono text-sm font-semibold border border-ink hover:bg-primary-container hover:border-primary-container transition-colors shadow-editorial flex items-center gap-3"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <Mail className="w-4 h-4 text-secondary-container shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              title="Salin alamat surel"
              className="px-5 py-3.5 bg-white text-ink font-mono text-sm font-semibold border border-paper-warm-line hover:border-crimson transition-all shadow-subtle-card flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-forest" />
              ) : (
                <Copy className="w-4 h-4 text-ink-muted" />
              )}
              <span>{copied ? 'Disalin!' : 'Salin Email'}</span>
            </button>
          </div>

          {/* Notification Toast */}
          <div
            role="status"
            aria-live="polite"
            className={`mt-4 inline-block transition-opacity duration-300 pointer-events-none text-xs font-mono font-bold px-3.5 py-1.5 bg-primary-container text-white rounded-sm shadow-sm ${
              copied ? 'opacity-100' : 'opacity-0'
            }`}
          >
            EMAIL DISALIN KE CLIPBOARD!
          </div>
        </div>
      </section>

      <footer className="border-t border-paper-line bg-paper-footer py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-muted">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 bg-crimson rotate-45 inline-block" aria-hidden="true" />
            <span className="font-semibold text-ink">
              © 2026 Skyvero Hidayatullah Pardi
            </span>
            <span aria-hidden="true">•</span>
            <span>S1 TEKNIK INFORMATIKA ITPLN</span>
          </div>
          <div className="text-ink-muted">
            Arsip Akademik Editorial // Jakarta – Solok
          </div>
          <div>
            <a
              className="hover:text-crimson transition-colors uppercase tracking-widest text-[11px] underline underline-offset-4"
              href="#hero"
            >
              KEMBALI KE ATAS ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
