import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Award, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Locale } from '../types';
import { OFFICIAL_CONTENT, EVENTS_LIST } from '../officialContent';
import { OFFICIAL_PROGRAMS } from '../programsData';

interface OfficialHomeProps {
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
      className="w-full h-auto max-h-[440px] md:max-h-[480px] object-contain block select-none mx-auto rounded-2xl shadow-xl border border-white/10"
    />
  );
};

export const OfficialHome: React.FC<OfficialHomeProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const c = OFFICIAL_CONTENT[locale];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Ambient Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        {/* Glow Spheres */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full blur-[140px] opacity-40 bg-primary pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 bg-[#1B7297] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>{c.hero.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]"
              >
                {c.hero.headlineStart}{' '}
                <span className="text-primary">{c.hero.headlineAccent}</span>{' '}
                {c.hero.headlineEnd}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal"
              >
                {c.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  to="/programs"
                  className="px-8 py-4 rounded-xl font-bold text-base text-center bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>{c.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/get-involved"
                  className="px-8 py-4 rounded-xl font-bold text-base text-center bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-md transition-all transform active:scale-95"
                >
                  {c.hero.ctaSecondary}
                </Link>
                <Link
                  to="/anniversary"
                  className="px-6 py-4 rounded-xl font-bold text-sm text-center bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isZh ? '30 周年专题' : '30th Special'}</span>
                </Link>
              </motion.div>

              {/* Stat Strip */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10">
                {c.hero.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-primary tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Hero Asset */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group"
              >
                <img
                  src="/necina_boston_hub.jpg"
                  alt="Boston Tech Hub"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{isZh ? '新英格兰科技中枢' : 'Greater Boston Innovation Hub'}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {isZh ? '三十载初心如一，筑造前沿科技社群' : 'Three Decades of Innovation & Community Excellence'}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isZh
                      ? '连接学术殿堂、产业领袖与创业资本，陪伴数千名华人科技精英从校园走向全球领袖舞台。'
                      : 'Connecting world-class academia, industry titans, and startup capital across New England since 1996.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & CORE PILLARS */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              {c.intro.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {c.intro.title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              {c.intro.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.intro.cards.map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {i === 0 ? <Users className="w-6 h-6" /> : i === 1 ? <Sparkles className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED FLAGSHIP PROGRAMS */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                {c.featuredPrograms.kicker}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {c.featuredPrograms.title}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                {c.featuredPrograms.description}
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm uppercase tracking-wider whitespace-nowrap"
            >
              <span>{c.featuredPrograms.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bento-style Grid of Programs */}
          <div className="grid lg:grid-cols-3 gap-8">
            {OFFICIAL_PROGRAMS.slice(0, 3).map((prog) => (
              <div
                key={prog.slug}
                className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prog.heroImage}
                    alt={isZh ? prog.name_zh : prog.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-primary border border-white/10 flex items-center gap-1.5">
                    <span className="font-extrabold text-white">{prog.shortName}</span>
                    <span className="text-slate-500">•</span>
                    <span>{isZh ? prog.categoryLabel_zh : prog.categoryLabel}</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {isZh ? prog.name_zh : prog.name}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {isZh ? prog.intro_zh : prog.intro}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {isZh ? prog.audience_zh : prog.audience}
                    </span>
                    <Link
                      to={`/programs/${prog.slug}`}
                      className="px-3.5 py-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <span>{isZh ? `探索 ${prog.shortName}` : `Explore ${prog.shortName}`}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UPCOMING EVENTS SPOTLIGHT */}
      <section className="py-24 bg-slate-900/60 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                {c.upcomingEventsSection.kicker}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {c.upcomingEventsSection.title}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                {c.upcomingEventsSection.description}
              </p>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm uppercase tracking-wider whitespace-nowrap"
            >
              <span>{c.upcomingEventsSection.viewAllEvents}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EVENTS_LIST.slice(0, 2).map((ev) => (
              <div
                key={ev.id}
                className="p-8 rounded-3xl bg-slate-950 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                      {isZh ? ev.category_zh : ev.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {isZh ? ev.date_zh : ev.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {isZh ? ev.title_zh : ev.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {isZh ? ev.description_zh : ev.description}
                  </p>

                  <div className="text-xs text-slate-500 pt-1">
                    <span className="text-slate-400 font-semibold">{isZh ? '地点：' : 'Venue: '}</span>
                    {isZh ? ev.venue_zh : ev.venue}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>{isZh ? '活动已圆满举行' : 'Concluded Successfully'}</span>
                  </span>
                  {ev.id === '30th-gala' ? (
                    <Link
                      to="/anniversary"
                      className="text-xs font-semibold text-primary hover:underline transition-colors flex items-center gap-1"
                    >
                      <span>{isZh ? '查看 30 周年专题' : 'View 30th Anniversary'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      to="/events"
                      className="text-xs font-semibold text-primary hover:underline transition-colors flex items-center gap-1"
                    >
                      <span>{isZh ? '查看回顾与详情' : 'View Recap & Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BLOCK */}
      <section className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
            {isZh ? '跨越三十载，共筑未来' : 'Join Our High-Impact Community'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {isZh
              ? '成为 NECINA 会员，与大波士顿科技领袖同行'
              : 'Empower Your Career & Venture with Greater Boston’s Premier Tech Network'}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isZh
              ? '无论您是探索前沿技术的工程师、寻找投资机遇的创业者，还是志存高远的学生，NECINA 为您提供终身受益的高端资源。'
              : 'Gain privileged access to technical conferences, executive mentorship, startup pitch competitions, and exclusive peer circles.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="https://app.joinit.com/o/necina-boston"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/25 transition-transform active:scale-95"
            >
              {isZh ? '立即加入 / 续费会员' : 'Join / Renew Membership'}
            </a>
            <Link
              to="/get-involved"
              className="px-8 py-4 rounded-xl font-bold text-base bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-transform active:scale-95"
            >
              {isZh ? '志愿者与赞助合作' : 'Volunteer & Sponsorship'}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FEATURED SPONSORS WALL */}
      <section className="relative py-16 border-t border-white/10 bg-[#070B14] overflow-hidden" id="sponsors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {c.sponsorsSection.kicker}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {c.sponsorsSection.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {c.sponsorsSection.subtitle}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-5xl px-2">
              <SponsorsImage
                fallbackUrls={[
                  '/Sponsor.png',
                  '/featured_sponsors.jpg',
                  '/sponsors_poster.png',
                  '/sponsors_banner.png'
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficialHome;
