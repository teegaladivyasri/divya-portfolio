import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Active section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="editorial-navbar py-3 px-6 sm:px-10 lg:px-16" aria-label="Primary Navigation">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Brand Identity Mark (Always visible, links to top) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-baseline gap-2.5 cursor-pointer select-none group"
          aria-label="Divya Sri Teegala - Back to top"
        >
          <span 
            className="font-serif-title font-medium text-base sm:text-lg tracking-wider transition-colors"
            style={{ color: '#751424' }}
          >
            DIVYA SRI TEEGALA
          </span>
          <span className="hidden sm:inline text-xs text-[#8A6D56] font-serif-body italic">
            · Portfolio
          </span>
        </a>

        {/* Right: Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[0.72rem] tracking-[0.2em] transition-colors py-1 ${
                  isActive ? 'text-[#751424] font-semibold border-b border-[#751424]' : 'text-[#3D332E] hover:text-[#751424]'
                }`}
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#751424] hover:bg-[#751424]/5 rounded transition-colors"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-[#FAF6EE] border-b border-[#751424]/15 px-6 py-6 mt-3 shadow-xl"
          style={{ animation: 'slideDown 0.25s ease-out' }}
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs tracking-[0.2em] text-[#2B2320] hover:text-[#751424] py-2.5 border-b border-[#751424]/10 flex items-center justify-between"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                <span>{item.label}</span>
                <span className="font-serif-body italic text-xs text-[#8A6D56]">0{index + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
