import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Photos', href: '#photos' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F7F1E8]/90 backdrop-blur-md border-b border-[#5C1A2B]/10 shadow-[0_2px_20px_rgba(92,26,43,0.03)]'
          : 'bg-transparent'
      }`}
      style={{
        padding: isScrolled ? '0.85rem 0' : '1.5rem 0',
        transition: 'padding 0.4s ease, background-color 0.4s ease, border-color 0.4s ease'
      }}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Name Mark — No "portfolio" label */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-baseline cursor-pointer select-none"
          aria-label="Divya Sri Teegala - Top"
        >
          <span 
            className="font-serif-title font-medium text-lg tracking-tight transition-colors duration-300 group-hover:text-[#5C1A2B]"
            style={{ color: 'var(--accent-burgundy)' }}
          >
            Divya Sri Teegala
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-sans text-[0.76rem] tracking-[0.14em] uppercase transition-colors duration-300 py-1 ${
                  isActive ? 'text-[#5C1A2B] font-semibold' : 'text-[#635852] hover:text-[#5C1A2B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#5C1A2B] rounded-full"
                    style={{ animation: 'fadeIn 0.3s ease' }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="https://hiresphereai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn-outline ml-1 text-[0.72rem] py-1.5 px-3 flex items-center gap-1.5"
            style={{ borderColor: 'rgba(92, 26, 43, 0.2)' }}
          >
            <span>Live Showcase</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#5C1A2B] hover:bg-[#5C1A2B]/5 rounded transition-colors"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-[#FAF6EE] border-b border-[#5C1A2B]/15 px-6 py-6 shadow-xl"
          style={{ animation: 'slideDown 0.25s ease-out' }}
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans text-xs tracking-[0.16em] uppercase text-[#2B2320] hover:text-[#5C1A2B] py-2 border-b border-[#5C1A2B]/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#8A6D56] font-serif-body italic text-xs">0{index + 1}</span>
              </a>
            ))}
            <a
              href="https://hiresphereai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-primary mt-2 text-center justify-center text-xs py-2.5"
            >
              <span>Featured Project</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
