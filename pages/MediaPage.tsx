import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, FileText, ExternalLink, Sparkles, Filter, X } from 'lucide-react';
import type { Locale } from '../types';
import { MEDIA_GALLERY, MediaItem } from '../officialContent';

interface MediaPageProps {
  locale: Locale;
}

export const MediaPage: React.FC<MediaPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [filterType, setFilterType] = useState<'all' | 'video' | 'photo' | 'publication'>('all');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activePhotoUrl, setActivePhotoUrl] = useState<{ url: string; title: string } | null>(null);

  const t = {
    badge: isZh ? '多媒体中心与历史档案' : 'Media Center & Historical Archives',
    title: isZh ? '三十年视听记忆：影像、视频与文献' : 'Visual Legacy: Photos, Videos & Archival Publications',
    subtitle: isZh
      ? '汇集三十年来 NECINA 举办的大型科技论坛、历届盛典、青年创业大赛与志愿者团队的精彩图文视听纪录。'
      : 'Explore high-resolution event photography, keynote video recordings, and historical publications chronicling 30 years of excellence.',
    filterAll: isZh ? '全部资源' : 'All Media',
    filterVideos: isZh ? '高清视频' : 'Videos',
    filterPhotos: isZh ? '实景相册' : 'Photos',
    filterArchives: isZh ? '历史档案' : 'Publications & Archives',
    watchVideo: isZh ? '在线播放' : 'Watch Video',
    viewPhoto: isZh ? '查看高清大图' : 'View Full Image',
    publicationsTitle: isZh ? '出版物与年度简报' : 'Featured Publications & Newsletters',
    publicationsDesc: isZh
      ? '下载官方年度纪念册、技术洞察白皮书及每月社区简报。'
      : 'Access historical anniversary programs, annual reviews, and community tech newsletters.',
    close: isZh ? '关闭' : 'Close'
  };

  const filteredMedia = MEDIA_GALLERY.filter(item => {
    if (filterType === 'all') return true;
    if (filterType === 'publication') return item.type === 'publication' || item.category === 'Archive';
    return item.type === filterType;
  });

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

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

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 w-fit text-xs sm:text-sm font-bold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2.5 rounded-xl transition-all ${
                filterType === 'all' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                filterType === 'video' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>{t.filterVideos}</span>
            </button>
            <button
              onClick={() => setFilterType('photo')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                filterType === 'photo' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{t.filterPhotos}</span>
            </button>
            <button
              onClick={() => setFilterType('publication')}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                filterType === 'publication' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.filterArchives}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MEDIA GALLERY GRID */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Thumbnail / Media Container */}
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    <img
                      src={item.thumbnail}
                      alt={isZh ? item.title_zh : item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-primary border border-white/10 flex items-center gap-1">
                        {item.type === 'video' ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                        <span>{item.category}</span>
                      </span>
                    </div>

                    {/* Action trigger button overlay */}
                    {item.type === 'video' && (
                      <button
                        onClick={() => setActiveVideoUrl(item.url)}
                        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                        aria-label="Play Video"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-red-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:bg-red-500">
                          <Play className="w-7 h-7 fill-white ml-1" />
                        </div>
                      </button>
                    )}

                    {item.type === 'photo' && (
                      <button
                        onClick={() => setActivePhotoUrl({ url: item.url, title: isZh ? item.title_zh : item.title })}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40"
                        aria-label="View Full Photo"
                      >
                        <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                          {t.viewPhoto}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-8 space-y-3">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {isZh ? item.title_zh : item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {isZh ? item.description_zh : item.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    {item.type === 'video' ? (
                      <button
                        onClick={() => setActiveVideoUrl(item.url)}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-primary" />
                        <span>{t.watchVideo}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setActivePhotoUrl({ url: item.url, title: isZh ? item.title_zh : item.title })}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{t.viewPhoto}</span>
                      </button>
                    )}
                    <span className="text-[11px] text-slate-500 font-medium">
                      NECINA Archive
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PUBLICATIONS & ARCHIVAL DOWNLOADS */}
      <section className="py-20 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Publications & Retrospectives
            </span>
            <h2 className="text-3xl font-black text-white">
              {t.publicationsTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {t.publicationsDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isZh ? 'NECINA 30 周年纪念特刊' : 'NECINA 30th Anniversary Commemorative Program',
                tag: 'Special Edition',
                desc: isZh
                  ? '汇集 29 届会长领导历程、YES 20 周年传承专栏及波士顿科技生态变迁。'
                  : 'Featuring 29 presidential terms, 20 years of YES youth impact, and the evolution of Boston\'s tech ecosystem.'
              },
              {
                title: isZh ? 'AI Agent 与新一代计算白皮书' : 'AI Agents & Next-Gen Computing Whitepaper',
                tag: 'Technical Report',
                desc: isZh
                  ? '汇编来自哈佛、MIT、OpenAI 及工业界专家对智能体与物理 AI 的深度洞察。'
                  : 'Compiling technical insights from Harvard, MIT, and leading industry experts on agentic workflows and robotics.'
              },
              {
                title: isZh ? 'YES 青年创业指南与优秀商业案例集' : 'YES Youth Entrepreneurship Playbook & Case Studies',
                tag: 'Education',
                desc: isZh
                  ? '历届高中生优胜项目路演计划书复盘、商业模型拆解与导师实战评语。'
                  : 'Selected high school pitch decks, business frameworks, and mentoring evaluations from 2006 to 2026.'
              }
            ].map((pub, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary font-bold uppercase tracking-wider">{pub.tag}</span>
                    <FileText className="w-4 h-4 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {pub.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="mailto:contact@necina.org?subject=Request%20NECINA%20Publication"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                  >
                    <span>{isZh ? '邮件索取电子文档' : 'Request Digital Copy'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-white/20 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mt-8">
              <iframe
                src={getEmbedUrl(activeVideoUrl)}
                title="Video Feature"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* PHOTO MODAL */}
      {activePhotoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-white/20 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white">{activePhotoUrl.title}</h3>
              <button
                onClick={() => setActivePhotoUrl(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={activePhotoUrl.url}
                alt={activePhotoUrl.title}
                className="w-full h-auto max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
