import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Locale } from '../types';
import { OFFICIAL_CONTENT } from '../officialContent';

interface OfficialNavbarProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

export const OfficialNavbar: React.FC<OfficialNavbarProps> = ({ locale, setLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const t = OFFICIAL_CONTENT[locale].nav;

  const navLinks = [
    { label: t.home, path: '/' },
    { label: t.about, path: '/about' },
    { label: t.programs, path: '/programs' },
    { label: t.events, path: '/events' },
    { label: t.media, path: '/media' },
    { label: t.getInvolved, path: '/get-involved' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-primary shadow-lg shadow-primary/20 group-hover:scale-105">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                NECINA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
                {locale === 'zh' ? '纽英伦中华资讯网络协会' : 'Est. 1996 • Boston'}
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Special 30th Anniversary Link */}
            <Link
              to="/anniversary"
              className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all whitespace-nowrap ml-2 flex items-center gap-1.5 ${
                isActive('/anniversary')
                  ? 'bg-primary/20 border-primary text-primary shadow-[0_0_12px_rgba(41,176,233,0.3)]'
                  : 'bg-white/5 border-primary/40 text-primary hover:bg-primary/10'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>{t.anniversary}</span>
            </Link>
          </div>

          {/* Zone 3: Language switcher + Join Us CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all ${
                  locale === 'en'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider transition-all ${
                  locale === 'zh'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                中文
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/get-involved"
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all transform active:scale-95 whitespace-nowrap"
            >
              {t.joinUs}
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  locale === 'en' ? 'bg-primary text-white' : 'text-slate-400'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  locale === 'zh' ? 'bg-primary text-white' : 'text-slate-400'
                }`}
              >
                中
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/anniversary"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-bold text-primary bg-primary/10 border border-primary/20"
          >
            ★ {t.anniversary}
          </Link>

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-sm bg-primary text-white shadow-lg shadow-primary/20"
            >
              {t.joinUs}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default OfficialNavbar;
