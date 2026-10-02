import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Calendar, Users, ExternalLink, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import type { Locale } from '../types';
import { PROGRAMS_LIST } from '../officialContent';

interface ProgramsPageProps {
  locale: Locale;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const location = useLocation();
  const [selectedProgramId, setSelectedProgramId] = useState<string>('yes');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = PROGRAMS_LIST.find(p => p.id === id);
      if (found) {
        setSelectedProgramId(found.id);
      }
    }
  }, [location.hash]);

  const selectedProg = PROGRAMS_LIST.find(p => p.id === selectedProgramId) || PROGRAMS_LIST[0];

  const t = {
    badge: isZh ? 'NECINA 核心赋能体系' : 'NECINA Flagship Initiatives',
    title: isZh ? '推动前沿技术与跨代领导力的品牌项目' : 'Transformative Programs Across Every Career Stage',
    subtitle: isZh
      ? '从面向青少年的创业启蒙，到前沿 AI 技术的深度极客沙龙，再到为企业创始人定制的高端商业联盟，NECINA 构建了完整贯通的培育生态。'
      : 'From high school entrepreneurial incubation to deep AI engineering circles and executive peer advisory, NECINA bridges knowledge and opportunity.',
    targetAudience: isZh ? '面向群体' : 'Target Audience',
    established: isZh ? '创办时间' : 'Established',
    curriculum: isZh ? '核心亮点与特色' : 'Key Highlights & Curriculum',
    modules: isZh ? '核心模块' : 'Program Modules',
    applyCta: isZh ? '报名咨询 / 申请加入' : 'Apply / Inquire Now',
    joinJoinit: isZh ? '通过会员平台申请' : 'Apply via Member Portal',
    yesSpecial: isZh ? '★ 庆祝 YES 项目成立 20 周年 (2006 - 2026)' : '★ Celebrating 20 Years of the YES Program (2006 - 2026)'
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Program Selector Tabs */}
          <div className="mt-12 flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-slate-900 border border-white/10">
            {PROGRAMS_LIST.map((prog) => {
              const active = prog.id === selectedProgramId;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    active
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{isZh ? prog.name_zh.split(' ')[0] : prog.name.split(' ')[0]}</span>
                  {prog.id === 'yes' && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${active ? 'bg-white text-primary' : 'bg-primary/20 text-primary'}`}>
                      20 Yrs
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PROGRAM DEEP DIVE SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedProg.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {/* Top Showcase: Split 7:5 */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {selectedProg.id === 'yes' && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider">
                    {t.yesSpecial}
                  </div>
                )}

                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                  {isZh ? selectedProg.name_zh : selectedProg.name}
                </h2>

                <p className="text-xl text-primary font-semibold">
                  {isZh ? selectedProg.subtitle_zh : selectedProg.subtitle}
                </p>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {isZh ? selectedProg.description_zh : selectedProg.description}
                </p>

                {/* Metadata strip */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {t.targetAudience}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {isZh ? selectedProg.audience_zh : selectedProg.audience}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {t.established}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {isZh ? `自 ${selectedProg.founded} 年起持续运营` : `Established ${selectedProg.founded}`}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://app.joinit.com/o/necina-boston"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 transition-transform active:scale-95"
                  >
                    <span>{t.applyCta}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Image Banner */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
                  <img
                    src={selectedProg.image}
                    alt={isZh ? selectedProg.name_zh : selectedProg.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                    {isZh ? '真实活动实景与社群记录' : 'Authentic program showcase & community event archive'}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {t.curriculum}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {(isZh ? selectedProg.highlights_zh : selectedProg.highlights).map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features / Modules Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t.modules}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProg.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-primary/40 transition-colors space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">
                      Module 0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {isZh ? feat.title_zh : feat.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {isZh ? feat.desc_zh : feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special YES 20-Year Video Feature (if YES selected) */}
            {selectedProg.id === 'yes' && (
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-primary/30 space-y-8">
                <div className="max-w-2xl space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Documentary Feature
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {isZh ? 'YES 二十年影响回顾（陶东斌）' : 'YES: 20 Years of Impact (by Ben Tao)'}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {isZh
                      ? '深情回顾 YES 项目自 2006 年创立以来，如何陪伴一代又一代青年走向全球商业与科技舞台。'
                      : 'Reflecting on two decades of fostering youth entrepreneurship, leadership, and Ivy League college admissions.'}
                  </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/pdIQUqs_YuM"
                    title="YES 20 Years of Impact"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
