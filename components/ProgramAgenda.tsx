
import React, { useMemo, useState, useEffect } from 'react';
import { ANNIVERSARY_AGENDA, GALA_AGENDA } from '../constants';
import type { Locale, AgendaItem } from '../types';
import { Calendar, Moon, Sun, Clock, MapPin, Sparkles } from 'lucide-react';

type Props = {
  locale: Locale;
};

export default function ProgramAgenda({ locale }: Props) {
  const [activeSection, setActiveSection] = useState<'daytime' | 'evening'>('daytime');
  const isScrollingToSection = React.useRef<boolean>(false);

  const daytimeHeading = useMemo(() => (locale === 'zh' ? '日间会议日程' : 'Daytime Conference Agenda'), [locale]);
  const galaHeading = useMemo(() => (locale === 'zh' ? '晚宴日程' : 'Evening Gala Program'), [locale]);

  const navTitle = useMemo(() => (locale === 'zh' ? '活动日程导航' : 'Agenda Navigation'), [locale]);
  const daytimeLabel = useMemo(() => (locale === 'zh' ? '日间全球论坛' : 'Daytime Conference'), [locale]);
  const daytimeSlogan = useMemo(() => (locale === 'zh' ? '物理与生物 AI 前沿论坛' : 'Physical & Biologic AI'), [locale]);
  const galaLabel = useMemo(() => (locale === 'zh' ? '晚宴与文艺晚会' : 'Evening Gala dinner'), [locale]);
  const galaSlogan = useMemo(() => (locale === 'zh' ? '周年大庆、颁奖与汇演' : 'Anniversary Awards & Gala'), [locale]);

  // Setup ScrollSpy with highly responsive scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToSection.current) return;

      const daytimeEl = document.getElementById('agenda-daytime');
      const eveningEl = document.getElementById('agenda-evening');
      
      if (!daytimeEl || !eveningEl) return;
      
      const eveningRect = eveningEl.getBoundingClientRect();
      
      // Determine if scrolled near the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      // Use viewport-relative visual midpoint as threshold
      const threshold = window.innerHeight * 0.4;
      
      if (isAtBottom || eveningRect.top <= threshold) {
        setActiveSection('evening');
      } else {
        setActiveSection('daytime');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial cycle to set state correctly
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string, section: 'daytime' | 'evening') => {
    setActiveSection(section);
    isScrollingToSection.current = true;

    const element = document.getElementById(id);
    if (element) {
      // Compensate for sticky headers
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Allow scroll animations to settle before reactivating scroll spies
      setTimeout(() => {
        isScrollingToSection.current = false;
      }, 850);
    } else {
      isScrollingToSection.current = false;
    }
  };

  const renderAgendaList = (items: AgendaItem[]) => (
    <div className="relative pl-8 sm:pl-10 border-l border-white/10 ml-2">
      {items.map((it, idx) => (
        <div key={idx} className="relative pb-10 last:pb-0">
          <div className="absolute -left-[41px] sm:-left-[45px] top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-[#070B14] transition-all duration-300" style={{ background: 'var(--brand)', boxShadow: '0 0 0 4px rgba(41,176,233,0.1)' }} />
          
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border p-5 md:p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/45" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#29B0E9]">
                    <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                    {it.time}
                  </div>
                  {it.location && (
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold bg-[#29B0E9]/15 text-[#29B0E9] border border-[#29B0E9]/20 tracking-wider flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" />
                      ROOM {it.location}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  {it.speaker && <div className="text-xs font-bold text-white/50">{it.speaker}</div>}
                  {locale === 'zh' && it.speaker_zh && <div className="text-[10px] font-medium text-white/40">{it.speaker_zh}</div>}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="text-xl sm:text-2xl font-black text-white/95 leading-snug">{it.title}</div>
                {locale === 'zh' && it.title_zh && <div className="text-sm sm:text-base font-bold text-white/60">{it.title_zh}</div>}
              </div>
              
              {(it.description || (locale === 'zh' && it.description_zh)) && (
                <div className="mt-4 flex flex-col gap-2 border-t border-white/5 pt-4">
                  {it.description && <div className="text-xs sm:text-sm leading-relaxed text-white/60">{it.description}</div>}
                  {locale === 'zh' && it.description_zh && <div className="text-xs leading-relaxed text-white/40">{it.description_zh}</div>}
                </div>
              )}
            </div>

            {(it.track2 || it.track3) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {it.track2 && (
                  <div className="rounded-3xl border p-5 md:p-7 backdrop-blur-xl transition-transform hover:scale-[1.01] border-dashed flex flex-col justify-between" style={{ background: 'rgba(41,176,233,0.02)', borderColor: 'rgba(41,176,233,0.18)' }}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="px-2.5 py-0.5 rounded-full bg-[#29B0E9]/20 text-[9px] font-extrabold text-[#29B0E9] uppercase tracking-widest border border-[#29B0E9]/10">Track 2</div>
                        <div className="flex flex-col items-end gap-1">
                          {it.track2.time && <span className="text-[10px] font-bold text-white/40">{it.track2.time}</span>}
                          {it.track2.location && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-[#29B0E9]/10 text-primary border border-primary/15 flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5" />
                              ROOM {it.track2.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-lg font-black text-white/90 leading-snug">{it.track2.title}</div>
                        {locale === 'zh' && it.track2.title_zh && <div className="text-sm font-bold text-white/50">{it.track2.title_zh}</div>}
                      </div>
                    </div>
                    
                    {(it.track2.speaker || (locale === 'zh' && it.track2.speaker_zh)) && (
                      <div className="mt-3 flex flex-col pt-3 border-t border-white/5">
                        {it.track2.speaker && <div className="text-xs font-bold text-[#29B0E9]/80">{it.track2.speaker}</div>}
                        {locale === 'zh' && it.track2.speaker_zh && <div className="text-[10px] font-medium text-[#29B0E9]/60">{it.track2.speaker_zh}</div>}
                      </div>
                    )}

                    {(it.track2.description || (locale === 'zh' && it.track2.description_zh)) && (
                      <div className="mt-2.5 flex flex-col gap-1">
                        {it.track2.description && <div className="text-xs sm:text-sm leading-relaxed text-white/50">{it.track2.description}</div>}
                        {locale === 'zh' && it.track2.description_zh && <div className="text-xs leading-relaxed text-white/35">{it.track2.description_zh}</div>}
                      </div>
                    )}
                  </div>
                )}

                {it.track3 && (
                  <div className="rounded-3xl border p-5 md:p-7 backdrop-blur-xl transition-transform hover:scale-[1.01] border-dashed flex flex-col justify-between" style={{ background: 'rgba(14,165,233,0.02)', borderColor: 'rgba(14,165,233,0.18)' }}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-[9px] font-extrabold text-sky-450 uppercase tracking-widest border border-sky-500/10">Track 3</div>
                        <div className="flex flex-col items-end gap-1">
                          {it.track3.time && <span className="text-[10px] font-bold text-white/40">{it.track3.time}</span>}
                          {it.track3.location && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-sky-500/10 text-sky-400 border border-sky-500/15 flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5" />
                              ROOM {it.track3.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-lg font-black text-white/90 leading-snug">{it.track3.title}</div>
                        {locale === 'zh' && it.track3.title_zh && <div className="text-sm font-bold text-white/50">{it.track3.title_zh}</div>}
                      </div>
                    </div>
                    
                    {(it.track3.speaker || (locale === 'zh' && it.track3.speaker_zh)) && (
                      <div className="mt-3 flex flex-col pt-3 border-t border-white/5">
                        {it.track3.speaker && <div className="text-xs font-bold text-sky-305">{it.track3.speaker}</div>}
                        {locale === 'zh' && it.track3.speaker_zh && <div className="text-[10px] font-medium text-sky-305/80">{it.track3.speaker_zh}</div>}
                      </div>
                    )}

                    {(it.track3.description || (locale === 'zh' && it.track3.description_zh)) && (
                      <div className="mt-2.5 flex flex-col gap-1">
                        {it.track3.description && <div className="text-xs sm:text-sm leading-relaxed text-white/50">{it.track3.description}</div>}
                        {locale === 'zh' && it.track3.description_zh && <div className="text-xs leading-relaxed text-white/35">{it.track3.description_zh}</div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden" id="program" style={{ background: '#070B14', color: '#fff' }}>
      {/* Visual background ambient details */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#29B0E9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Sticky Mobile/Tablet Anchor Navigation */}
      <div className="sticky top-16 z-30 lg:hidden w-full backdrop-blur-md bg-slate-950/70 border-b border-white/5 py-3 transition-all">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-3">
          <button
            onClick={() => scrollToSection('agenda-daytime', 'daytime')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black tracking-tight transition-all duration-300 border ${
              activeSection === 'daytime'
                ? 'bg-primary/20 text-white border-primary/50 shadow-[0_0_15px_rgba(41,176,233,0.15)]'
                : 'text-white/40 border-transparent hover:text-white/80'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${activeSection === 'daytime' ? 'text-amber-400 fill-amber-400/20' : ''}`} />
            {daytimeLabel}
          </button>
          <button
            onClick={() => scrollToSection('agenda-evening', 'evening')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black tracking-tight transition-all duration-300 border ${
              activeSection === 'evening'
                ? 'bg-primary/20 text-white border-primary/50 shadow-[0_0_15px_rgba(41,176,233,0.15)]'
                : 'text-white/40 border-transparent hover:text-white/80'
            }`}
          >
            <Moon className={`w-3.5 h-3.5 ${activeSection === 'evening' ? 'text-indigo-400 fill-indigo-400/20' : ''}`} />
            {galaLabel}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-0">
        
        {/* Venue Map Block */}
        <div className="mb-16 rounded-[2rem] border border-white/5 bg-slate-900/30 p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-primary to-[#29B0E9]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-black tracking-widest uppercase text-primary mb-1 block">
                {locale === 'zh' ? '会议场地与活动地图' : 'CONFERENCE VENUE & ROOM MAP'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {locale === 'zh' ? 'LaCava 中心 3 层平面图' : 'LaCava Center Room Maps'}
              </h3>
            </div>
            <div className="text-xs text-white/50 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 max-w-sm">
              {locale === 'zh' 
                ? '日间论坛：Room 395 | YES分论坛：325AB & 325C | VIP招待会：375'
                : 'Main Agenda: Room 395 | YES Tracks: Rooms 325AB & 325C | VIP Reception: Room 375'}
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-1 md:p-2">
            <img 
              src="/map.png" 
              alt={locale === 'zh' ? '会场地图' : 'Venue Map'} 
              className="w-full h-auto object-contain select-none mx-auto block max-h-[1000px] rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
          
          {/* Sticky Left Sidebar Navigation on Desktop */}
          <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-32 h-auto z-10">
            <div className="rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-md p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#29B0E9] to-indigo-600" />
              
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black tracking-widest uppercase text-white/50">{navTitle}</span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Daytime Anchor Button */}
                <button
                  onClick={() => scrollToSection('agenda-daytime', 'daytime')}
                  className={`group flex items-start gap-4 text-left p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    activeSection === 'daytime'
                      ? 'bg-gradient-to-br from-slate-900/60 to-slate-800/60 border-[#29B0E9]/35 shadow-lg'
                      : 'border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  <div className={`mt-0.5 p-2 rounded-xl transition-all ${
                    activeSection === 'daytime' ? 'bg-[#29B0E9]/20 text-amber-400' : 'bg-white/5 text-white/40 group-hover:text-amber-400/80'
                  }`}>
                    <Sun className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-black transition-colors ${activeSection === 'daytime' ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {daytimeLabel}
                    </h4>
                    <span className="text-[10px] text-white/40 block mt-0.5">{daytimeSlogan}</span>
                    <span className="text-[9px] text-[#29B0E9] font-bold block mt-1">8:00 AM - 4:30 PM</span>
                  </div>
                </button>

                {/* Evening Anchor Button */}
                <button
                  onClick={() => scrollToSection('agenda-evening', 'evening')}
                  className={`group flex items-start gap-4 text-left p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    activeSection === 'evening'
                      ? 'bg-gradient-to-br from-slate-900/60 to-slate-800/60 border-[#29B0E9]/35 shadow-lg'
                      : 'border-transparent hover:bg-white/[0.02] hover:border-white/5'
                  }`}
                >
                  <div className={`mt-0.5 p-2 rounded-xl transition-all ${
                    activeSection === 'evening' ? 'bg-[#29B0E9]/20 text-indigo-400' : 'bg-white/5 text-white/40 group-hover:text-indigo-400/80'
                  }`}>
                    <Moon className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-black transition-colors ${activeSection === 'evening' ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {galaLabel}
                    </h4>
                    <span className="text-[10px] text-white/40 block mt-0.5">{galaSlogan}</span>
                    <span className="text-[9px] text-sky-400 font-bold block mt-1">6:00 PM - 10:30 PM</span>
                  </div>
                </button>
              </div>

              {/* Mini Interactive Decor */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2.5 text-[10px] text-white/30 italic">
                <Sparkles className="w-3.5 h-3.5 text-amber-500/50 animate-pulse" />
                <span>30th Anniversary Showcase</span>
              </div>
            </div>
          </div>

          {/* Agenda main timeline wrapper */}
          <div className="col-span-1 lg:col-span-9">
            
            {/* Daytime Agenda */}
            <div id="agenda-daytime" className="mb-24 scroll-mt-28">
              <div className="flex items-center space-x-4 mb-12 sm:mb-16">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-[#29B0E9]" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">{daytimeHeading}</h2>
              </div>
              {renderAgendaList(ANNIVERSARY_AGENDA)}
            </div>

            {/* Evening Gala */}
            <div id="agenda-evening" className="scroll-mt-28">
              <div className="flex items-center space-x-4 mb-12 sm:mb-16">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-[#29B0E9]" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">{galaHeading}</h2>
              </div>
              {renderAgendaList(GALA_AGENDA)}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
