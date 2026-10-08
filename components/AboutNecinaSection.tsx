import React from 'react';
import { Target, Compass, Award, Shield, ExternalLink, Globe, Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Locale } from '../types';
import { ABOUT_NECINA_DATA } from '../aboutLeadershipData';

interface AboutNecinaSectionProps {
  locale: Locale;
}

export const AboutNecinaSection: React.FC<AboutNecinaSectionProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const data = ABOUT_NECINA_DATA;

  return (
    <section id="about-necina-core" className="space-y-24">
      {/* 1. Hero Statement & Organization Identity */}
      <div className="relative py-12 lg:py-16">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{isZh ? '权威机构介绍' : 'Official Organization Profile'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {isZh ? data.subtitle_zh : data.subtitle}
          </h1>

          <div className="p-4 sm:p-6 rounded-2xl bg-primary/10 border border-primary/30 text-primary text-lg sm:text-xl font-bold italic tracking-wide">
            {isZh ? data.visionSlogan_zh : `"${data.visionSlogan}"`}
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {isZh ? data.foundingDescription_zh : data.foundingDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
              Est. 1996
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
              501(c)(3) Tax-Exempt
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
              New England & Global
            </span>
            <a
              href="https://www.necina.org/content/about-necina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-bold text-primary transition-colors ml-auto"
            >
              <span>necina.org</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. The Three Mission Pillars */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            {isZh ? '三大宗旨支柱' : 'Core Missions'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {isZh ? '我们的使命 (Our Missions)' : 'Our Missions'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isZh
              ? '三大立会基石凝聚新英格兰数万名高科技精英与创业家'
              : 'The tripartite foundation guiding every conference, initiative, and community network.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.missions.map((m, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  {idx === 0 && <Shield className="w-6 h-6" />}
                  {idx === 1 && <Target className="w-6 h-6" />}
                  {idx === 2 && <Award className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {isZh ? m.title_zh : m.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {isZh ? m.description_zh : m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-primary font-mono font-bold">
                Pillar 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Detailed Program Descriptions and Categories */}
      <div className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            {isZh ? '项目架构与发展纵览' : 'Program Architecture'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {isZh ? '核心项目三大领域与详细描述' : 'Three Program Domains & Official Initiatives'}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {isZh ? data.programsIntro_zh : data.programsIntro}
          </p>
        </div>

        {/* Pillars 1, 2, 3 in full verbatim fidelity */}
        <div className="space-y-14">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 relative space-y-8"
            >
              <div className="flex items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 flex-wrap">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                    Section {pillar.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {pillar.number}. {isZh ? pillar.title_zh : pillar.title}
                  </h3>
                  {pillar.summary && (
                    <p className="text-sm text-slate-400 pt-1">
                      {isZh ? pillar.summary_zh : pillar.summary}
                    </p>
                  )}
                </div>
              </div>

              {/* Items within this pillar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.items.map((item, itIdx) => (
                  <div
                    key={itIdx}
                    className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-white leading-snug">
                          {isZh ? item.name_zh : item.name}
                        </h4>
                        {item.tagline && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary flex-shrink-0">
                            {isZh ? item.tagline_zh : item.tagline}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {isZh ? item.description_zh : item.description}
                      </p>
                    </div>

                    {item.links && item.links.length > 0 && (
                      <div className="pt-3 border-t border-white/10 space-y-2">
                        {item.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Official Links & Video Highlights */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-white/10 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            {isZh ? '官方资源与多媒体影像' : 'Official Resources & Multimedia'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {isZh ? '官方权威链接与纪实影片' : 'Authoritative Links & Recorded Highlights'}
          </h3>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.officialLinks.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-950 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {isZh ? link.label_zh : link.label}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
                <span>necina.org</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Video Highlights */}
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Play className="w-4 h-4 text-primary" />
            <span>{isZh ? '官方纪录片与技术演讲精选' : 'Official YouTube Feature Spotlights'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.officialVideos.map((video, vIdx) => (
              <a
                key={vIdx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-slate-950 border border-white/10 hover:border-primary/50 overflow-hidden transition-all flex flex-col"
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {isZh ? video.title_zh : video.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span>YouTube Archive</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNecinaSection;
