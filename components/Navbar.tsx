
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, NAV_TRANSLATIONS } from '../constants';
import { Locale, DesignStyle } from '../types';

interface NavbarProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const Navbar: React.FC<NavbarProps> = ({ locale, setLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = NAV_TRANSLATIONS[locale];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home with hash
        navigate(`/${href}`);
        // The Home page will need to handle the scroll on mount
      } else {
        // If on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          window.history.pushState(null, '', href);
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center transition-all bg-primary">
              <span className="text-white font-bold text-lg lg:text-xl">N</span>
            </div>
            <span 
              className="text-xl lg:text-2xl font-black transition-all cursor-pointer text-white"
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              NECINA
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <div className="flex space-x-6 mr-4 border-r pr-6 transition-all border-white/10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="transition-colors duration-200 whitespace-nowrap cursor-pointer text-white/80 hover:text-white"
                >
                  {t[item.label as keyof typeof t]}
                </a>
              ))}
            </div>

            {/* Language Toggle (Desktop) */}
            <div className="flex items-center p-1 rounded-full transition-all bg-white/5 border border-white/10">
              {(['en', 'zh'] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest transition-all ${
                    locale === l 
                      ? 'bg-primary text-white shadow-[0_0_15px_rgba(41,176,233,0.3)]' 
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a 
              href="#sponsorship"
              onClick={(e) => handleNavClick(e, '#sponsorship')}
              className="px-6 py-2 rounded-full font-bold text-xs transition-all active:scale-95 cursor-pointer bg-primary text-white hover:bg-primary-hover ring-4 ring-primary/10"
            >
              {t.sponsorship}
            </a>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Language Toggle (Always visible on mobile top bar) */}
            <div className="flex items-center p-0.5 rounded-full transition-all bg-white/5 border border-white/10">
              {(['en', 'zh'] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest transition-all ${
                    locale === l 
                      ? 'bg-primary text-white shadow-[0_0_10px_rgba(41,176,233,0.3)]' 
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors rounded-lg hover:bg-slate-500/10 text-white/80"
              aria-label="Toggle menu"
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full animate-in slide-in-from-top duration-300 shadow-2xl bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 pt-4 pb-8 space-y-6">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-4 text-xl font-black tracking-tight rounded-xl transition-all text-white hover:bg-white/5"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {t[item.label as keyof typeof t]}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              {/* Language Section in mobile menu (Secondary, consistent with top bar) */}
              <div className="flex items-center justify-between mb-8 px-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.language}</span>
                <div className="flex items-center p-0.5 rounded-full transition-all bg-white/5 border border-white/10">
                  {(['en', 'zh'] as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocale(l)}
                      className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest transition-all ${
                        locale === l 
                          ? 'bg-primary text-white shadow-[0_0_15px_rgba(41,176,233,0.3)]' 
                          : 'text-white/40 hover:text-white/60'
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="#sponsorship"
                onClick={(e) => handleNavClick(e, '#sponsorship')}
                className="block w-full text-center py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-transform bg-primary text-white"
              >
                {t.sponsorship}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
