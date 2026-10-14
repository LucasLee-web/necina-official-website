import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Target, Compass, Award, Calendar, Users, History, Layers } from 'lucide-react';
import type { Locale } from '../types';
import AboutNecinaSection from '../components/AboutNecinaSection';
import BoardMembersSection from '../components/BoardMembersSection';
import LeadershipTeamSection from '../components/LeadershipTeamSection';
import { MILESTONES, PRESIDENTS_CHRONOLOGY } from '../officialContent';

interface AboutPageProps {
  locale: Locale;
}

export const AboutPage: React.FC<AboutPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'about' | 'board' | 'team' | 'history' | 'all'>('about');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam === 'board' || tabParam === 'team' || tabParam === 'about' || tabParam === 'history' || tabParam === 'all') {
      setActiveTab(tabParam);
      return;
    }

    if (location.hash === '#board' || location.hash === '#board-members') {
      setActiveTab('board');
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#team' || location.hash === '#leadership' || location.hash === '#leadership-teams') {
      setActiveTab('team');
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#history' || location.hash === '#milestones') {
      setActiveTab('history');
    }
  }, [location.hash, location.search]);

  const t = {
    badge: isZh ? '关于我们与组织架构' : 'About Us & Leadership',
    title: isZh ? '关于 NECINA 与组织架构' : 'About NECINA & Leadership',
    subtitle: isZh
      ? '全方位了解创立于 1996 年的大波士顿顶尖非营利高科技专业协会、官方核心项目矩阵，以及董事会治理与运营团队。'
      : 'Comprehensive organizational profile and governance directory. Discover our founding legacy since 1996, the three mission pillars, program matrix, and the official Board of Directors and Leadership Teams.',
    tabAbout: isZh ? '关于 NECINA' : 'About NECINA',
    tabBoard: isZh ? 'NECINA董事会' : 'NECINA Board',
    tabTeam: isZh ? 'NECINA团队' : 'NECINA Team',
    tabHistory: isZh ? '三十载历程与里程碑' : '30-Year History & Milestones',
    tabAll: isZh ? '浏览全部内容' : 'View All',
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO & TOP SECTION NAVIGATION */}
      <section className="relative py-14 lg:py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {t.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* Interactive Primary View Tabs */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'about'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>{t.tabAbout}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('board')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'board'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>{t.tabBoard}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('team')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'team'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>{t.tabTeam}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'history'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <History className="w-4 h-4" />
                <span>{t.tabHistory}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'all'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{t.tabAll}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT NECINA SECTION */}
      {(activeTab === 'about' || activeTab === 'all') && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutNecinaSection locale={locale} />
          </div>
        </section>
      )}

      {/* 3. NECINA BOARD SECTION (隶属于标签: NECINA董事会) */}
      {(activeTab === 'board' || activeTab === 'all') && (
        <div className={activeTab === 'all' ? 'border-t border-white/5' : ''}>
          <BoardMembersSection locale={locale} />
        </div>
      )}

      {/* 4. NECINA TEAM SECTION (隶属于标签: NECINA团队) */}
      {(activeTab === 'team' || activeTab === 'all') && (
        <div className={activeTab === 'all' ? 'border-t border-white/5' : ''}>
          <LeadershipTeamSection locale={locale} />
        </div>
      )}

      {/* 4. 30-YEAR HISTORY & PRESIDENTS CHRONOLOGY */}
      {(activeTab === 'history' || activeTab === 'all') && (
        <div className="border-t border-white/5 space-y-20 py-16">
          {/* 30-Year Evolution Overview */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  1996 - 2026
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {isZh ? '科技演进与三十载历程' : '30-Year Evolution & Technological Waves'}
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {isZh
                    ? '自 1996 年创立以来，NECINA 始终走在时代浪潮的最前沿。从早期的电信网络、路由器技术，到移动互联网、物联网、云计算、大数据、金融科技与区块链，再到今日大众瞩目的生成式 AI、物理 AI 与生物 AI，NECINA 一直陪伴社区成员理解、拥抱并掌握每一轮科技变革。'
                    : 'Since 1996, NECINA has continuously embraced disruptive technology waves: from early telecommunications and routing infrastructure to mobile internet, IoT, cloud computing, big data, blockchain, and now autonomous AI agents and computational biology.'}
                </p>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">
                    {isZh ? '技术代际传承' : 'Technological Generations'}
                  </div>
                  <div className="text-sm text-slate-200">
                    {isZh
                      ? '电信与网络计算 (1996) → 互联网与移动应用 (2000s) → 云计算与大数据 (2010s) → 智能体与物理/生物 AI (2020s)'
                      : 'Networking & Telecom (1996) → Internet & Mobile (2000s) → Cloud & Big Data (2010s) → AI Agents & Biological AI (2020s)'}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                  <img
                    src="/30 Years Journey.png"
                    alt="30 Years Journey"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Presidents Chronology */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                1996 - 2027
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {isZh ? '历任会长名录 (1996 - 2027)' : 'Chronicle of NECINA Presidents (1996 - 2027)'}
              </h2>
              <p className="text-slate-400 text-sm">
                {isZh
                  ? '致敬历任会长及其团队无私奉献的志愿者精神与卓越领导力。'
                  : 'Honoring visionary presidential leadership and dedicated community service since 1996.'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {PRESIDENTS_CHRONOLOGY.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors flex flex-col justify-between"
                >
                  <div className="text-[11px] font-bold text-primary tracking-wider tabular-nums font-mono">
                    {p.year}
                  </div>
                  <div className="mt-2 text-sm font-black text-white">
                    {isZh ? p.name_zh : p.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {isZh ? p.name : p.name_zh}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Milestones Timeline */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                History in the Making
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {isZh ? '组织关键里程碑' : 'Organizational Milestones'}
              </h2>
            </div>

            <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(41,176,233,0.5)]" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-primary tabular-nums">
                        {m.year}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {isZh ? m.tag_zh : m.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {isZh ? m.title_zh : m.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {isZh ? m.description_zh : m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
