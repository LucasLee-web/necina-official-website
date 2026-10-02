
import React, { useMemo } from 'react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
};

const Hero: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        badge: '成立于 1996 • 2026 年 30 周年',
        titleA: 'NECINA',
        titleB: '30周年',
        titleC: '庆典',
        tagline: '庆祝 NECINA 30 年 — 赋能专业人士，激发创新',
        body:
          '自 1996 年以来，NECINA 一直活跃在新英格兰地区的科技与创业社区。欢迎加入我们，共同庆祝这一重要里程碑。',
        ctaJoin: '加入 / 续费会员',
        ctaSponsor: '赞助意向',
        highlights: '亮点',
        stats: [
          { label: '周年', val: '30' },
          { label: '年份', val: '2026' }
        ]
      };
    }
    return {
      badge: 'Est. 1996 • 30th Anniversary in 2026',
      titleA: 'NECINA',
      titleB: '30th',
      titleC: 'Anniversary',
      tagline: 'Celebrating 30 Years of NECINA — Empowering Professionals, Inspiring Innovation',
      body:
        'Since 1996, NECINA has been at the forefront of the technology and entrepreneurship community in New England. Join us as we celebrate our landmark 30th year.',
      ctaJoin: 'Join / Renew Membership',
      ctaSponsor: 'Sponsor Interest',
      highlights: 'Highlights',
      stats: [
        { label: 'Anniversary', val: '30th' },
        { label: 'Year', val: '2026' }
      ]
    };
  }, [locale]);

  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: '#070B14', color: '#fff' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute -top-40 -right-40 w-[850px] h-[850px] rounded-full blur-[140px] opacity-50" style={{ background: 'rgba(41,176,233,0.55)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full backdrop-blur-md border text-xs font-bold tracking-widest uppercase" style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.18)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--brand)' }} />
              <span>{t.badge}</span>
            </div>
            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight tracking-tight">{t.titleA} <span style={{ color: 'var(--brand)' }}>{t.titleB}</span> {t.titleC}</h1>
            <p className="mt-6 text-xl lg:text-2xl font-bold" style={{ color: 'rgba(255,255,255,0.92)' }}>{t.tagline}</p>
            <p className="mt-5 text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>{t.body}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <a href="https://app.joinit.com/o/necina-boston" target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-2xl font-bold text-xl text-center bg-primary text-white shadow-xl hover:-translate-y-1 transition-transform">{t.ctaJoin}</a>
              <a href="#forms" className="px-10 py-5 rounded-2xl font-bold text-xl text-center border border-white/20 bg-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform">{t.ctaSponsor}</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] border p-8 backdrop-blur-2xl" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}>
              <div className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.70)' }}>{t.highlights}</div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{locale === 'zh' ? '周年纪念' : 'Anniversary'}</span>
                  <span className="text-3xl font-black" style={{ color: 'var(--brand)' }}>30</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{locale === 'zh' ? '年份' : 'Year'}</span>
                  <span className="text-3xl font-black" style={{ color: 'rgba(255,255,255,0.92)' }}>2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
