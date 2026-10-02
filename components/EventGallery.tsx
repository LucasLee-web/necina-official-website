
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Locale } from '../types';
import { HIGHLIGHT_CATEGORIES } from '../constants';

type Props = {
  locale: Locale;
};

const EventGallery: React.FC<Props> = ({ locale }) => {
  const navigate = useNavigate();
  
  const translations = useMemo(() => {
    if (locale === 'zh') {
      return {
        heading: '辉煌回忆',
        subheading: '回顾 NECINA 三十年来的核心发展方向与标志性项目。',
        viewMore: '查看详情'
      };
    }
    return {
      heading: 'Event Highlights',
      subheading: 'A look back at three decades of community, innovation, and leadership categories.',
      viewMore: 'Explore Now'
    };
  }, [locale]);

  const items = HIGHLIGHT_CATEGORIES[locale];

  return (
    <section className="py-24 bg-slate-950" id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-full">
          NECINA Legacy
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {translations.heading}
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          {translations.subheading}
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.path)}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                {['journey', 'ceremony', 'leaders'].includes(item.id) ? (
                  <div 
                    style={{ 
                      backgroundImage: `url("${item.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h4 className="text-3xl font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-white/70 mb-8 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center space-x-3 text-primary font-bold text-sm uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>{translations.viewMore}</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
