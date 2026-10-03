import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Target, Compass, Award, Calendar, ChevronRight, UserCheck } from 'lucide-react';
import type { Locale } from '../types';
import { MILESTONES, PRESIDENTS_CHRONOLOGY, LEADERSHIP_ROSTER } from '../officialContent';

interface AboutPageProps {
  locale: Locale;
}

export const AboutPage: React.FC<AboutPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [activeTab, setActiveTab] = useState<'all' | 'executive' | 'board' | 'founder'>('all');

  const t = {
    badge: isZh ? '了解 NECINA' : 'About NECINA',
    title: isZh ? '三十载传承：连接、赋能与成长' : '30 Years of Leadership, Innovation & Community',
    subtitle: isZh
      ? '纽英伦中华资讯网络协会（NECINA）成立于 1996 年，是大波士顿及新英格兰地区历史最悠久、影响力最深远的华裔高科技非营利组织之一。'
      : 'Founded in 1996, NECINA (New England Chinese Information and Networking Association) is one of the premier non-profit professional associations in New England dedicated to advancing technology, leadership, and entrepreneurship.',
    missionTitle: isZh ? '使命、愿景与价值观' : 'Mission, Vision & Core Values',
    missionDesc: isZh
      ? '我们坚守非营利教育与赋能初心，为华人专业人士搭建前沿技术与领袖成长的沃土。'
      : 'Our core philosophy guides every symposium, mentorship initiative, and community gathering.',
    visionLabel: isZh ? '愿景 Vision' : 'Our Vision',
    visionText: isZh
      ? '“一个你可以连接、创造和成长的地方。” (A place where you can Connect, Create and Grow.)'
      : '“A place where you can Connect, Create and Grow.”',
    missionLabel: isZh ? '使命 Mission' : 'Our Mission',
    missionText: isZh
      ? '促进职业社交 (Facilitate Professional Networking) • 推广前沿科技 (Promote Cutting-Edge Technologies) • 培养创业家精神与领导力 (Foster Entrepreneurship and Leadership)'
      : 'To facilitate professional networking, to promote cutting edge technologies, and to foster entrepreneurship and leadership.',
    valuesLabel: isZh ? '核心价值观 Core Values' : 'Our Core Values',
    valuesText: isZh
      ? '热情的态度 (Passionate attitude) • 可靠的关系 (Dependable relationships) • 卓越的人才 (Talent excellence)'
      : 'Passionate attitude • Dependable relationships • Talent excellence',
    historyTitle: isZh ? '科技演进与三十载历程' : '30-Year Evolution & Technological Waves',
    historyBody: isZh
      ? '自 1996 年创立以来，NECINA 始终走在时代浪潮的最前沿。从早期的电信网络、路由器技术，到移动互联网、物联网、云计算、大数据、金融科技与区块链，再到今日大众瞩目的生成式 AI、物理 AI 与生物 AI，NECINA 一直陪伴社区成员理解、拥抱并掌握每一轮科技变革。'
      : 'Since 1996, NECINA has continuously embraced disruptive technology waves: from early telecommunications and routing infrastructure to the mobile internet, IoT, cloud computing, big data, blockchain, and now autonomous AI agents, physical AI, and computational biology. We have stood as an indispensable lighthouse for the tech community.',
    leadersTitle: isZh ? '董事会与领导团队' : 'Board of Directors & Leadership',
    leadersDesc: isZh
      ? '由德高望重的行业领袖、成功科技创业家与资深高管组成的治理团队。'
      : 'Governed by distinguished industry pioneers, serial entrepreneurs, and dedicated executives.',
    presidentsTitle: isZh ? '历任会长名录 (1996 - 2027)' : 'Chronicle of NECINA Presidents (1996 - 2027)',
    presidentsDesc: isZh
      ? '致敬历任会长及其团队无私奉献的志愿者精神与卓越领导力。'
      : 'Honoring visionary presidential leadership and dedicated community service since 1996.',
    milestonesTitle: isZh ? '组织关键里程碑' : 'Organizational Milestones',
    filterAll: isZh ? '全部领袖' : 'All Leadership',
    filterExec: isZh ? '执行团队' : 'Executive Team',
    filterBoard: isZh ? '董事会' : 'Board of Directors',
    filterFounders: isZh ? '联合创始人' : 'Founders'
  };

  const filteredLeaders = LEADERSHIP_ROSTER.filter(leader => {
    if (activeTab === 'all') return true;
    return leader.category === activeTab;
  });

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION, VALUES */}
      <section className="py-20 bg-slate-900/50 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {t.missionTitle}
            </h2>
            <p className="text-slate-400 text-base">
              {t.missionDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.visionLabel}</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {t.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-primary/40 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.missionLabel}</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {t.missionText}
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t.valuesLabel}</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {t.valuesText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 30-YEAR HISTORY & EVOLUTION */}
      <section className="py-20 bg-slate-950 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                1996 - 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t.historyTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t.historyBody}
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
        </div>
      </section>

      {/* 4. BOARD & LEADERSHIP */}
      <section className="py-24 bg-slate-900/60 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Governance & Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {t.leadersTitle}
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                {t.leadersDesc}
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'all' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setActiveTab('executive')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'executive' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterExec}
              </button>
              <button
                onClick={() => setActiveTab('board')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'board' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterBoard}
              </button>
              <button
                onClick={() => setActiveTab('founder')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'founder' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.filterFounders}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLeaders.map((leader, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-950 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {isZh ? leader.role_zh : leader.role}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                      {isZh ? leader.name_zh : leader.name}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {isZh ? leader.bio_zh : leader.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <UserCheck className="w-3.5 h-3.5 text-primary" />
                    <span>{isZh ? 'NECINA 领导梯队' : 'NECINA Leadership'}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 30-YEAR CHRONOLOGY OF PRESIDENTS */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Presidents Roster
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {t.presidentsTitle}
            </h2>
            <p className="text-slate-400 text-sm">
              {t.presidentsDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {PRESIDENTS_CHRONOLOGY.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors flex flex-col justify-between"
              >
                <div className="text-[11px] font-bold text-primary tracking-wider tabular-nums">
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
        </div>
      </section>

      {/* 6. ORGANIZATIONAL MILESTONES TIMELINE */}
      <section className="py-24 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              History in the Making
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {t.milestonesTitle}
            </h2>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-8">
            {MILESTONES.map((m, i) => (
              <div key={i} className="relative group">
                {/* Node indicator */}
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
