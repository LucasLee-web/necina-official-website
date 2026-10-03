import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Search,
  BookOpen
} from 'lucide-react';
import type { Locale } from '../types';
import { OFFICIAL_PROGRAMS, type OfficialProgram } from '../programsData';

interface ProgramsPageProps {
  locale: Locale;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const location = useLocation();
  const [selectedSlug, setSelectedSlug] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Support direct hash navigation, e.g. #yes, #sig, #eclub, #new, #nic
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '').toLowerCase();
      const matched = OFFICIAL_PROGRAMS.find(
        (p) =>
          p.slug.toLowerCase().includes(hash) ||
          p.shortName.toLowerCase() === hash
      );
      if (matched) {
        setSelectedSlug(matched.slug);
      }
    }
  }, [location.hash]);

  const t = {
    badge: isZh ? 'NECINA 核心赋能体系' : 'NECINA Flagship Initiatives',
    title: isZh ? '九大核心赋能项目矩阵' : 'NECINA Official Programs Matrix',
    subtitle: isZh
      ? '严格收录并完整重塑自官网的九大品牌项目：涵盖青少年启蒙、年度旗舰科技大会、创业加速器、前沿技术小组、商业竞赛、高管俱乐部与区域分会网络。'
      : 'Comprehensive directory of all nine official NECINA initiatives: from youth leadership and flagship conferences to venture accelerators, technical SIGs, executive clubs, and regional chapters.',
    filterAll: isZh ? '全部 (All 9)' : 'All (9)',
    searchPlaceholder: isZh ? '搜索项目名称或关键词...' : 'Search programs...',
    learnMoreBtn: isZh ? '了解详情 (Learn More)' : 'Learn More',
    verifiedArchive: isZh ? '官方核验档案' : 'Verified Archive',
    noResults: isZh ? '未找到匹配的项目' : 'No matching programs found',
    clearFilter: isZh ? '查看全部九大项目' : 'View all 9 programs',
    showingAll: isZh ? '正在展示全部 9 个项目（按官方序列 01 - 09）' : 'Showing all 9 official programs in sequential order (01 - 09)',
    showingSingle: (name: string) =>
      isZh ? `已筛选项目：${name}（点击“全部”可恢复完整九大项目列表）` : `Filtered program: ${name} (Click "All" to view all 9 programs)`
  };

  const filteredPrograms = OFFICIAL_PROGRAMS.filter((prog) => {
    const matchesSlug = selectedSlug === 'all' || prog.slug === selectedSlug;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesSlug;

    const matchesSearch =
      prog.name.toLowerCase().includes(query) ||
      prog.name_zh.toLowerCase().includes(query) ||
      prog.shortName.toLowerCase().includes(query) ||
      prog.intro.toLowerCase().includes(query) ||
      prog.intro_zh.toLowerCase().includes(query) ||
      prog.tagline.toLowerCase().includes(query) ||
      prog.tagline_zh.toLowerCase().includes(query);

    return matchesSlug && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24 selection:bg-primary/30">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 lg:py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* THAT HORIZONTAL ROW (那一横排) OF ABBREVIATED PROGRAM BUTTONS */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 p-2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl">
              {/* All / 全部 Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedSlug('all');
                  setSearchQuery('');
                }}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-black tracking-wider transition-all flex items-center gap-1.5 ${
                  selectedSlug === 'all'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.filterAll}</span>
              </button>

              {/* Exact Abbreviation Buttons for all 9 programs in official order */}
              {OFFICIAL_PROGRAMS.map((prog) => {
                const active = selectedSlug === prog.slug;
                return (
                  <button
                    key={prog.slug}
                    type="button"
                    onClick={() => {
                      setSelectedSlug(prog.slug);
                      setSearchQuery('');
                    }}
                    className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-black tracking-wider transition-all flex items-center gap-2 ${
                      active
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/40'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{prog.shortName}</span>
                    {prog.shortName === 'YES' && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                          active ? 'bg-white text-primary' : 'bg-primary/20 text-primary'
                        }`}
                      >
                        20 Yrs
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>
                  {selectedSlug === 'all'
                    ? t.showingAll
                    : t.showingSingle(
                        OFFICIAL_PROGRAMS.find((p) => p.slug === selectedSlug)?.name || ''
                      )}
                </span>
              </div>

              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM CARDS GRID */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {filteredPrograms.length === 0 ? (
            <div className="p-16 rounded-3xl bg-slate-900 border border-white/10 text-center space-y-4">
              <Layers className="w-12 h-12 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-white">{t.noResults}</h3>
              <button
                onClick={() => {
                  setSelectedSlug('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold transition-all shadow-lg"
              >
                {t.clearFilter}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="rounded-3xl bg-slate-900 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Visual Hero Image Container */}
                    <div className="relative h-56 overflow-hidden bg-slate-950">
                      {prog.heroImage ? (
                        <img
                          src={prog.heroImage}
                          alt={isZh ? prog.name_zh : prog.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-inner">
                            <Layers className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-bold text-slate-300">
                            {isZh ? '美东跨州与名校分会网络' : 'Regional & Campus Matrix'}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent pointer-events-none" />

                      {/* Top Badges: Index, Short Name, Status */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <div className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-[11px] font-black text-primary border border-white/10 shadow-sm flex items-center gap-1.5">
                          <span>0{prog.id}</span>
                          <span className="text-slate-500">•</span>
                          <span className="font-extrabold text-white">{prog.shortName}</span>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                          {isZh ? prog.statusBadge_zh : prog.statusBadge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-7 space-y-4">
                      {/* Program Category & Name */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {isZh ? prog.categoryLabel_zh : prog.categoryLabel}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-primary transition-colors min-h-[58px] flex items-center">
                          {isZh ? prog.name_zh : prog.name}
                        </h3>
                      </div>

                      {/* Tagline / Hook */}
                      <p className="text-xs font-semibold text-primary/90 leading-relaxed min-h-[36px]">
                        {isZh ? prog.tagline_zh : prog.tagline}
                      </p>

                      {/* Concise Introduction from verified source */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3 min-h-[60px]">
                        {isZh ? prog.intro_zh : prog.intro}
                      </p>

                      {/* Highlights snapshot */}
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        {(isZh ? prog.highlights_zh : prog.highlights).slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA linking to dedicated detail page */}
                  <div className="p-7 pt-0 border-t border-white/5 mt-4">
                    <div className="pt-4 flex items-center justify-between gap-3">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{t.verifiedArchive}</span>
                      </span>

                      <Link
                        to={`/programs/${prog.slug}`}
                        className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all flex items-center gap-1.5 group-hover:shadow-primary/30"
                      >
                        <span>{t.learnMoreBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. VERIFIED MIGRATION SUMMARY BANNER */}
      <section className="py-12 border-t border-white/5 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 space-y-2">
          <p className="font-semibold text-slate-300">
            {isZh
              ? '九大项目按官方序列（01 - 09）展示，点击上方横排缩写按钮可快速定位，点击卡片进入独立专属详情页。'
              : 'All 9 initiatives are preserved in official sequence (01 - 09). Use the abbreviation buttons above for quick filtering, and click any card for its dedicated detail page.'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-500">
            <span>YIP</span>
            <span>•</span>
            <span>YES</span>
            <span>•</span>
            <span>NTC</span>
            <span>•</span>
            <span>NEW</span>
            <span>•</span>
            <span>SIG</span>
            <span>•</span>
            <span>NIC</span>
            <span>•</span>
            <span>CLD</span>
            <span>•</span>
            <span>E-Club</span>
            <span>•</span>
            <span>Chapters</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
