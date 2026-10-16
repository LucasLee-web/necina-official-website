import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  Mail,
  Briefcase,
  Layers,
  Globe,
  BookOpen,
  ShieldCheck,
  Building
} from 'lucide-react';
import type { Locale } from '../types';
import { OFFICIAL_PROGRAMS, getProgramBySlug } from '../programsData';

interface ProgramDetailPageProps {
  locale: Locale;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ locale }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isZh = locale === 'zh';

  const program = slug ? getProgramBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pt-36 pb-24 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-primary">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-white">
            {isZh ? '未找到该项目' : 'Program Not Found'}
          </h1>
          <p className="text-slate-400 text-sm">
            {isZh
              ? '抱歉，您访问的项目页面不存在或已被更新。请返回项目纵览查看全部九大核心赋能项目。'
              : 'The requested program could not be found. Please return to the programs overview.'}
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-lg transition-transform active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isZh ? '返回全部九大项目' : 'Back to All 9 Programs'}</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find index for next/previous navigation
  const currentIndex = OFFICIAL_PROGRAMS.findIndex((p) => p.slug === program.slug);
  const prevProgram = currentIndex > 0 ? OFFICIAL_PROGRAMS[currentIndex - 1] : undefined;
  const nextProgram =
    currentIndex < OFFICIAL_PROGRAMS.length - 1 ? OFFICIAL_PROGRAMS[currentIndex + 1] : undefined;

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24 sm:pt-28 pb-24 selection:bg-primary/30">
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION */}
      <div className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/programs" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isZh ? '项目纵览' : 'All Programs'}</span>
            </Link>
            <span>/</span>
            <span className="text-white font-bold truncate">
              {isZh ? program.name_zh : program.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={program.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors text-[11px]"
              title={program.sourceUrl}
            >
              <Globe className="w-3 h-3 text-primary" />
              <span>{isZh ? '核验自官方源网页' : 'Verified Official Archive'}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. HERO BANNER */}
      <section className="relative py-14 lg:py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-black tracking-wider uppercase">
                  Program 0{program.id} • {isZh ? program.categoryLabel_zh : program.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold">
                  {program.shortName}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isZh ? program.statusBadge_zh : program.statusBadge}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {isZh ? program.name_zh : program.name}
              </h1>

              <p className="text-xl sm:text-2xl text-primary font-bold leading-snug">
                {isZh ? program.tagline_zh : program.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {isZh ? program.intro_zh : program.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {program.applicationInfo.applyUrl && (
                  <a
                    href={program.applicationInfo.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/25 transition-transform active:scale-95 flex items-center gap-2"
                  >
                    <span>{isZh ? (program.applicationInfo.applyText_zh || '立即在线申请') : (program.applicationInfo.applyText || 'Apply Now')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {program.applicationInfo.externalPortalUrl && (
                  <a
                    href={program.applicationInfo.externalPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/25 transition-transform active:scale-95 flex items-center gap-2"
                  >
                    <span>{program.applicationInfo.externalPortalText || (isZh ? '访问官方赛事网站' : 'Visit Official Portal')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={`mailto:${program.applicationInfo.contactEmail}`}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{program.applicationInfo.contactEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Card: Photo if available, or Network Overview Card if no photo */}
            <div className="lg:col-span-5">
              {program.heroImage ? (
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
                  <img
                    src={program.heroImage}
                    alt={isZh ? program.name_zh : program.name}
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{isZh ? '面向群体：' : 'Target Audience:'}</span>
                      <span className="font-bold text-white">{isZh ? program.audience_zh : program.audience}</span>
                    </div>
                    {program.location && (
                      <div className="flex items-center justify-between text-slate-400 pt-1 border-t border-white/5">
                        <span>{isZh ? '活动地点：' : 'Location:'}</span>
                        <span className="font-bold text-primary">{isZh ? program.location_zh : program.location}</span>
                      </div>
                    )}
                    {program.established && (
                      <div className="flex items-center justify-between text-slate-400 pt-1 border-t border-white/5">
                        <span>{isZh ? '创办时间：' : 'Established:'}</span>
                        <span className="font-bold text-slate-200">{program.established}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/10 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">
                        {isZh ? '分会生态网络' : 'Chapter Network'}
                      </span>
                      <h3 className="text-xl font-black text-white">
                        {isZh ? '覆盖版图与核心枢纽' : 'Regional & Campus Matrix'}
                      </h3>
                    </div>
                    <span className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                      <Globe className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {isZh ? '美东跨州区域分会' : 'Regional Chapters'}
                      </span>
                      <span className="font-bold text-white block">
                        New Hampshire • Rhode Island • New York • New Jersey
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {isZh ? '名校高校校园分会' : 'College & University Chapters'}
                      </span>
                      <span className="font-bold text-primary block">
                        MIT • Boston University • Brandeis • Northeastern • Stonehill
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {isZh ? '大波士顿都市核心分会' : 'Boston Metro Chapters'}
                      </span>
                      <span className="font-bold text-white block">
                        Cambridge • Woburn • Dedham • Marlborough
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>{isZh ? '网络状态：' : 'Status:'}</span>
                      <span className="font-bold text-emerald-400">
                        {isZh ? program.statusBadge_zh : program.statusBadge}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBSTANTIVE OVERVIEW & HIGHLIGHTS */}
      <section className="py-16 sm:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission & Background Paragraphs */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Layers className="w-4 h-4" />
              <span>{isZh ? '项目全貌与愿景' : 'Program Mission & Structure'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {isZh ? '核心背景与使命' : 'Background & Core Objectives'}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {(isZh ? program.overview_zh : program.overview).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Key Highlights Checklist */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-white/10 space-y-6 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>{isZh ? '项目特色与核心权益' : 'Key Highlights & Value Proposition'}</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {(isZh ? program.highlights_zh : program.highlights).map((h, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM SPECIFIC TAILORED SECTIONS */}

      {/* A. If Mentors / Leadership Team Exists (e.g. Youth Impact Changemakers or NEW Mentors) */}
      {program.mentors && program.mentors.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Leadership & Advisory
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '导师与核心团队阵容' : 'Officers, Mentors & Program Directors'}
              </h2>
              <p className="text-slate-400 text-sm">
                {isZh
                  ? '汇聚常春藤顶尖学子、硅谷老将与一线投资合伙人，全程参与指导与辅导。'
                  : 'Industry executives, university mentors, and program officers guiding participants every step.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.mentors.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-primary/40 transition-all flex items-start gap-4 shadow-lg group"
                >
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-black text-lg flex-shrink-0">
                      {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                  )}

                  <div className="space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                        {m.name}
                      </h4>
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors ml-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <div className="text-xs font-medium text-primary">
                      {isZh ? m.role_zh : m.role}
                    </div>
                    {m.company && (
                      <div className="text-xs text-slate-400">
                        {m.company}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* B. If Modules / Curriculum Exists (e.g. YES 20.0 or ABC-NEW 5.0) */}
      {program.modules && program.modules.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isZh ? '历史经典模块' : 'Historical Curriculum Archive'}</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  {isZh ? '过往课程大纲与赋能模块' : 'Past Curriculum & Program Schedule'}
                </h2>
                <p className="text-sm text-slate-400">
                  {isZh
                    ? '以下为往届经典教学体系与实训大纲。如需参加今年最新批次，请前往最新活动专区报名。'
                    : "Below is our historical curriculum milestone syllabus. To enroll in this year's newest cohort, explore the latest event."}
                </p>
              </div>

              {/* Jump to this year's latest event */}
              <Link
                to={
                  program.slug === 'yes-youth-entrepreneurship'
                    ? '/events/yes-youth-entrepreneurship-launch'
                    : '/events'
                }
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-hover hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-xl shadow-primary/25 border border-primary/40 transition-all transform active:scale-95 flex-shrink-0 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {isZh
                    ? program.slug === 'yes-youth-entrepreneurship'
                      ? '前往 2026 最新一期活动报名'
                      : '查看今年最新活动与动态'
                    : program.slug === 'yes-youth-entrepreneurship'
                    ? 'View Latest 2026 Event & Register'
                    : 'View Latest 2026 Events'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-visibility Callout Banner linking to this year's latest event */}
            {program.slug === 'yes-youth-entrepreneurship' && (
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-primary/15 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isZh ? '2026 最新一期正在火热招募中' : '2026 Cohort Registration Now Open'}</span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mt-0.5">
                      {isZh
                        ? 'NECINA-YES 青年创业服务项目 2026 全新8周实战营（10/17开课，全程免费）'
                        : 'NECINA-YES Youth Entrepreneurship 8-Week Program 2026 (Starts Oct 17, Free)'}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      {isZh
                        ? '时间：2026年10月17日–12月12日 每周六 9:30–11:30 AM | 地点：Lexington 或 Waltham'
                        : 'Saturdays 9:30–11:30 AM (Oct 17 – Dec 12, 2026) | Lexington or Waltham, MA'}
                    </div>
                  </div>
                </div>

                <Link
                  to="/events/yes-youth-entrepreneurship-launch"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all whitespace-nowrap active:scale-95 flex-shrink-0"
                >
                  <span>{isZh ? '跳转到今年最新活动' : 'Jump to Latest Event'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-900 border border-white/10 hover:border-primary/40 transition-colors flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-primary">
                      Track 0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {isZh ? mod.title_zh : mod.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {isZh ? mod.description_zh : mod.description}
                    </p>
                  </div>
                  {mod.dateOrDuration && (
                    <div className="pt-3 border-t border-white/5 text-xs text-primary font-bold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{mod.dateOrDuration}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* C. If Track Record Exists (e.g. ABC Platform Startup Graduates) */}
      {program.trackRecord && program.trackRecord.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '往期优秀初创校友企业与融资突破' : 'Alumni Startups & Proven Track Record'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {(isZh ? program.trackRecord_zh || program.trackRecord : program.trackRecord).map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950 border border-white/10 flex items-start gap-3 shadow-lg"
                >
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* D. If Job Posts Exist (e.g. CLD Leadership Career Board) */}
      {program.jobPosts && program.jobPosts.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Talent Pipeline & Openings
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '精选企业招聘合作岗位' : 'Featured Partner Career Opportunities'}
              </h2>
              <p className="text-slate-400 text-sm">
                {isZh
                  ? '以下为合作科技企业直聘职位示例。如需职位内推或发布企业招聘需求，请联系 career@necina.org。'
                  : 'Representative opportunities with partner tech enterprises. For direct referrals, contact career@necina.org.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {program.jobPosts.map((job, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-900 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between space-y-5 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-10 w-auto object-contain rounded-lg bg-white p-1 border border-white/10"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                          <Building className="w-5 h-5" />
                        </div>
                      )}
                      <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                        {isZh ? job.type_zh : job.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {isZh ? job.title_zh : job.title}
                      </h3>
                      <div className="text-sm font-semibold text-primary mt-0.5">
                        {job.company} • {isZh ? job.industry_zh : job.industry}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {isZh ? job.description_zh : job.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {isZh ? '招聘渠道：NECINA CLD 合作网' : 'Direct via CLD Network'}
                    </span>
                    <a
                      href={`mailto:career@necina.org?subject=Inquiry regarding ${job.title} at ${job.company}`}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>{isZh ? '咨询申请' : 'Apply / Inquire'}</span>
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E. If Activities Exist (e.g. NECINA Clubs activities) */}
      {program.activities && program.activities.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Club Gatherings & Formats
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '俱乐部核心常设活动' : 'Core Activities & Meetup Formats'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl group hover:border-primary/40 transition-all"
                >
                  {act.image && (
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                        {isZh ? act.title_zh : act.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                        {isZh ? act.description_zh : act.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* F. If Chapters List Exists (NECINA Chapters) */}
      {program.chaptersList && program.chaptersList.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Network Footprint
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '全美区域、顶尖名校及都市圈分会矩阵' : 'Regional, College & Boston Metro Chapters'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {program.chaptersList.map((chap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-primary/40 transition-colors space-y-6 shadow-xl"
                >
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">
                      Chapter Network 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {isZh ? chap.category_zh : chap.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {chap.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* G. Gallery & Preserved Media Images */}
      {program.galleryImages && program.galleryImages.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Visual Archive
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                {isZh ? '官方历史图像与成果展示' : 'Preserved Visual Assets & Archives'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {program.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl space-y-3 group"
                >
                  <div className="overflow-hidden bg-black/40">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto max-h-[460px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-xs sm:text-sm text-slate-400 font-medium border-t border-white/5">
                    {isZh ? img.caption_zh : img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CALL TO ACTION & REGISTRATION CARD */}
      <section className="py-16 sm:py-20 border-b border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Connect & Participate
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isZh ? `加入 ${program.name_zh}` : `Get Involved with ${program.name}`}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isZh
                ? '我们欢迎学生、专业从业者、创业团队与赞助伙伴融入 NECINA 社区生态，共同创造更具深远影响的技术未来。'
                : 'Whether as a participant, volunteer mentor, or sponsoring corporate partner, your leadership moves our community forward.'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {program.applicationInfo.applyUrl && (
              <a
                href={program.applicationInfo.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/25 transition-transform active:scale-95 flex items-center gap-2"
              >
                <span>{isZh ? (program.applicationInfo.applyText_zh || '立即在线申请') : (program.applicationInfo.applyText || 'Apply Now')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {program.applicationInfo.externalPortalUrl && (
              <a
                href={program.applicationInfo.externalPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/25 transition-transform active:scale-95 flex items-center gap-2"
              >
                <span>{program.applicationInfo.externalPortalText || (isZh ? '访问官方赛事网站' : 'Visit Official Portal')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={`mailto:${program.applicationInfo.contactEmail}`}
              className="px-8 py-4 rounded-xl font-bold text-base bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-transform active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>{program.applicationInfo.contactEmail}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. NEXT / PREVIOUS PROGRAM NAVIGATION FOOTER */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-xl">
            {prevProgram ? (
              <Link
                to={`/programs/${prevProgram.slug}`}
                className="flex items-center gap-3 text-left hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    {isZh ? '上一项目' : 'Previous Program'}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    0{prevProgram.id}. {isZh ? prevProgram.name_zh : prevProgram.name}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/programs"
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {isZh ? '查看全部九大项目' : 'All 9 Programs'}
            </Link>

            {nextProgram ? (
              <Link
                to={`/programs/${nextProgram.slug}`}
                className="flex items-center gap-3 text-right hover:text-primary transition-colors group"
              >
                <div>
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    {isZh ? '下一项目' : 'Next Program'}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    0{nextProgram.id}. {isZh ? nextProgram.name_zh : nextProgram.name}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailPage;
