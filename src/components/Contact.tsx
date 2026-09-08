import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Clean inline vector brand icons (SVG)
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA.personal;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section 
      id="contact" 
      className="editorial-section border-t border-[#5C1A2B]/10 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="editorial-container-narrow text-center py-8">
        
        {/* Section Kicker */}
        <span className="section-kicker justify-center mb-6">
          07 / Contact
        </span>

        {/* Headline */}
        <h2 className="font-serif-title text-[clamp(2.2rem,5vw,3.6rem)] text-[#2B2320] leading-tight font-normal mb-6">
          Correspondence &amp; Channels
        </h2>

        <p className="font-serif-body italic text-lg text-[#635852] max-w-xl mx-auto leading-relaxed mb-10">
          Open to discussions on cryptography, distributed consensus, or software verification roles.
        </p>

        {/* Primary Email Card */}
        <div className="max-w-md mx-auto bg-[#FDFBF7] p-6 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm mb-12">
          <span className="text-[0.7rem] font-mono uppercase tracking-widest text-[#8A6D56] block mb-2">
            Direct Electronic Mail
          </span>

          <a 
            href={`mailto:${contact.email}`}
            className="font-serif-title text-xl text-[#5C1A2B] hover:text-[#461320] transition-colors block mb-4 break-all"
          >
            {contact.email}
          </a>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="editorial-btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#5C1A2B]" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contact.email}`}
              className="editorial-btn-primary text-xs py-2 px-3.5"
            >
              <span>Write Email</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Exact Social Links: GitHub, LinkedIn, Instagram */}
        <div className="pt-6 border-t border-[#5C1A2B]/10 max-w-lg mx-auto">
          <span className="text-xs uppercase tracking-[0.16em] text-[#8A6D56] font-medium block mb-6">
            Digital Profiles
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline text-xs py-2 px-4 flex items-center gap-2"
            >
              <GithubIcon size={15} className="text-[#5C1A2B]" />
              <span>GitHub</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline text-xs py-2 px-4 flex items-center gap-2"
            >
              <LinkedinIcon size={15} className="text-[#5C1A2B]" />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-outline text-xs py-2 px-4 flex items-center gap-2"
            >
              <InstagramIcon size={15} className="text-[#5C1A2B]" />
              <span>Instagram</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>
          </div>
        </div>

        {/* Final Typographic Bookend with Location Correction */}
        <div className="mt-20 pt-10 border-t border-[#5C1A2B]/10">
          <span className="font-serif-title text-2xl text-[#2B2320] tracking-wider block mb-1">
            Divya Sri Teegala
          </span>
          <span className="font-serif-body italic text-sm text-[#8A6D56]">
            Vizianagaram, Andhra Pradesh · MVGR College of Engineering
          </span>
        </div>

      </div>
    </section>
  );
};
