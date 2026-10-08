import React, { useState } from 'react';
import { ShieldCheck, Users, Calendar, Award } from 'lucide-react';
import type { Locale } from '../types';
import BoardMembersSection from '../components/BoardMembersSection';
import LeadershipTeamSection from '../components/LeadershipTeamSection';
import { PRESIDENTS_CHRONOLOGY } from '../officialContent';

interface LeadershipPageProps {
  locale: Locale;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [activeTab, setActiveTab] = useState<'all' | 'board' | 'team' | 'presidents'>('all');

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. Header Banner */}
      <section className="relative py-16 lg:py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isZh ? '权威治理架构' : 'Authoritative Leadership Directory'}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {isZh ? 'NECINA 领导层与董事会' : 'NECINA Leadership'}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {isZh
                ? '包含董事会成员、2024-2025 执行与运营团队，以及自 1996 年以来的历任会长名录。'
                : 'Featuring the Board of Directors, the 2024-2025 Program & Operations Teams, and the complete Presidents Chronicle.'}
            </p>

            {/* Sub-navigation Tabs */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {isZh ? '全部领导层架构' : 'All Leadership'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('board')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'board'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isZh ? '董事会成员' : 'Board Members'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('team')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'team'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>{isZh ? '2024-2025 团队' : '2024-2025 Team'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('presidents')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'presidents'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{isZh ? '历任会长名录 (1996 - 2027)' : 'Presidents Chronicle'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Board Members Section (Strict DOM Order #1 to #11) */}
      {(activeTab === 'all' || activeTab === 'board') && (
        <BoardMembersSection locale={locale} />
      )}

      {/* 3. 2024-2025 Team Section (Program Teams & Operations Teams) */}
      {(activeTab === 'all' || activeTab === 'team') && (
        <LeadershipTeamSection locale={locale} />
      )}

      {/* 4. 30-Year Presidents Chronology */}
      {(activeTab === 'all' || activeTab === 'presidents') && (
        <section id="presidents-chronology" className="py-24 bg-slate-900/40 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                <Award className="w-4 h-4" />
                <span>1996 - 2027</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {isZh ? '历任会长名录 (Chronicle of Presidents)' : 'Chronicle of NECINA Presidents'}
              </h2>
              <p className="text-slate-400 text-sm">
                {isZh
                  ? '致敬自 1996 年创立以来，历任会长及其团队无私奉献的志愿者精神与开拓担当。'
                  : 'Honoring visionary presidential leadership and selfless volunteer service since 1996.'}
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
          </div>
        </section>
      )}
    </div>
  );
};

export default LeadershipPage;
