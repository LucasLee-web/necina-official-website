import React, { useState } from 'react';
import Hero from '../components/Hero';
import EventGallery from '../components/EventGallery';
import MissionJourney from '../components/MissionJourney';
import VideoSection from '../components/VideoSection';
import ProgramAgenda from '../components/ProgramAgenda';
import ConversionBlock from '../components/ConversionBlock';
import StayTuned from '../components/StayTuned';
import SponsorshipTiers from '../components/SponsorshipTiers';
import InterestForms from '../components/InterestForms';
import type { Locale } from '../types';

interface AnniversaryPageProps {
  locale: Locale;
}

const SponsorsImage: React.FC<{ fallbackUrls: string[] }> = ({ fallbackUrls }) => {
  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < fallbackUrls.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={fallbackUrls[index]}
      alt="Featured Sponsors"
      referrerPolicy="no-referrer"
      onError={handleError}
      className="w-full h-auto max-h-[440px] md:max-h-[480px] object-contain block select-none mx-auto rounded-xl shadow-lg border border-white/5"
    />
  );
};

export const AnniversaryPage: React.FC<AnniversaryPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 30th Anniversary Banner */}
      <div className="pt-20 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-b border-primary/30 py-3 text-center text-xs font-bold text-primary tracking-widest uppercase">
        {isZh
          ? '★ 1996 - 2026 • NECINA 三十周年特别专题盛典页面 ★'
          : '★ 1996 - 2026 • NECINA 30th Anniversary Special Commemorative Edition ★'}
      </div>

      <Hero locale={locale} />

      <div className="animate-reveal">
        <EventGallery locale={locale} />
      </div>

      <MissionJourney locale={locale} />

      <div className="animate-reveal">
        <VideoSection locale={locale} />
      </div>

      <div style={{ backgroundColor: 'var(--surface2)', borderTop: '1px solid var(--border)' }}>
        <ProgramAgenda locale={locale} />
      </div>

      <ConversionBlock locale={locale} />
      <StayTuned locale={locale} />

      <div id="sponsorship">
        <SponsorshipTiers locale={locale} />
      </div>

      <div id="forms">
        <InterestForms locale={locale} />
      </div>

      {/* Sponsors Wall */}
      <section className="relative py-12 border-t border-white/5 overflow-hidden" style={{ background: '#070B14', color: '#fff' }} id="sponsors">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute -bottom-40 -left-12 w-[550px] h-[550px] rounded-full blur-[120px] opacity-25" style={{ background: 'rgba(41,176,233,0.4)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center uppercase tracking-widest font-bold text-xs mb-8 underline underline-offset-8" style={{ color: 'rgba(255,255,255,0.6)', textDecorationColor: 'var(--brandBg2)' }}>
            {isZh ? '30 周年特邀赞助商' : 'Featured Sponsors of 30 Years'}
          </p>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-6xl px-1 sm:px-2">
              <SponsorsImage fallbackUrls={[
                '/Sponsor.png',
                '/featured_sponsors.jpg',
                '/sponsors_poster.png',
                '/sponsors_banner.png',
                '/sponsors.png',
                '/sponsors_poster.jpg',
                '/sponsors_banner.jpg',
                '/sponsors.jpg'
              ]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnniversaryPage;
