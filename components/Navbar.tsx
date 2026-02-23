'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Kolleksiyalar', href: '/#mebel' },
  { label: 'Showroom', href: '/#aksessuarlar' },
  { label: 'Online Magazine', href: '/online-magazine' },
  { label: 'Biz haqimizda', href: '/#biz-haqimizda' }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-greenDeep py-2 text-center text-xs font-medium tracking-widest text-goldAccent uppercase">
        Bepul yetkazib berish — 5 000 000 so'm dan oshiq buyurtmalarda
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 shadow-card backdrop-blur-md'
            : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-greenDeep flex items-center justify-center">
              <span className="font-display text-sm font-bold italic text-goldAccent">S</span>
            </span>
            <span className="text-lg font-semibold tracking-tight text-greenDeep">
              <span className="font-display italic text-goldAccent">Sof</span> Mebel
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-greenDeep/75 transition-colors duration-200 hover:text-greenDeep after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-goldAccent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+998901234567" className="text-sm font-medium text-greenDeep/70 hover:text-greenDeep transition-colors duration-200">
              +998 90 123 45 67
            </a>
            <a href="#cta" className="btn-primary text-xs py-2.5 px-5">
              Maslahat olish
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-greenDeep transition-colors hover:bg-beigeMid md:hidden"
            aria-label="Menyu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMobileMenuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'max-h-96 border-t border-beigeMid' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col bg-cream px-5 pb-5 pt-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-beigeMid py-3 text-sm font-medium text-greenDeep/80 transition-colors hover:text-greenDeep"
              >
                {item.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary mt-4 text-center text-xs py-3">
              Maslahat olish
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
