import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t border-[#5C1A2B]/15 py-12"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#635852]">
          
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif-title text-sm text-[#2B2320]">
              Divya Sri Teegala
            </p>
            <p className="text-[0.72rem] text-[#8A6D56]">
              Typeset in Playfair Display, Fraunces &amp; Plus Jakarta Sans on Ivory &amp; Burgundy.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[0.7rem] uppercase tracking-widest text-[#8A6D56]">
              © {new Date().getFullYear()} · All rights reserved
            </span>

            <button
              onClick={scrollToTop}
              className="editorial-btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp size={12} className="text-[#5C1A2B]" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
