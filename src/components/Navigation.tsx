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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#F9F5EE]/95 backdrop-blur-md border-b border-[#751424]/10 shadow-[0_2px_20px_rgba(117,20,36,0.03)] py-3'
          : 'bg-transparent pt-6 sm:pt-8 pb-4'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex items-start justify-between">
        
        {/* Top-Left: "good ideas take time —" in Caveat script when at top, or Name mark when scrolled */}
        <div className="flex items-start">
          {isScrolled ? (
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-serif-title font-medium text-base tracking-wide cursor-pointer transition-colors"
              style={{ color: '#751424' }}
              aria-label="Divya Sri Teegala - Top"
            >
              DIVYA SRI TEEGALA
            </a>
          ) : (
            <div className="flex flex-col text-left select-none pointer-events-none">
              <span
                className="text-[1.35rem] sm:text-[1.55rem] font-medium leading-[1.08]"
                style={{ fontFamily: "'Caveat', cursive", color: '#751424' }}
              >
                good<br />ideas<br />take time
              </span>
              <span className="w-5 h-[1.5px] bg-[#751424] mt-1.5 block opacity-85" />
            </div>
          )}
        </div>

        {/* Top-Right: Exact Navigation Links in Josefin Sans */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 pt-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[0.72rem] tracking-[0.22em] transition-colors py-1 ${
                  isActive ? 'text-[#751424] font-semibold' : 'text-[#3D332E] hover:text-[#751424]'
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-[#FAF6EE] border-b border-[#751424]/15 px-6 py-6 shadow-xl"
          style={{ animation: 'slideDown 0.25s ease-out' }}
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs tracking-[0.2em] text-[#2B2320] hover:text-[#751424] py-2 border-b border-[#751424]/10 flex items-center justify-between"
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
