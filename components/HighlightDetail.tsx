
import React, { useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Award, Shield, Briefcase, GraduationCap, Target, Cpu, MessageSquare } from 'lucide-react';
import type { Locale } from '../types';
import { HIGHLIGHT_CATEGORIES, HIGHLIGHT_DETAILS } from '../constants';
import ProgramAgenda from './ProgramAgenda';

type Props = {
  locale: Locale;
};

const HighlightDetail: React.FC<Props> = ({ locale }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const category = useMemo(() => {
    return HIGHLIGHT_CATEGORIES[locale].find(item => item.id === id);
  }, [id, locale]);

  const details = useMemo(() => {
    return (HIGHLIGHT_DETAILS[locale] as any)?.[id as string];
  }, [id, locale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        back: '返回首页',
        summary: '概览',
        featured: '核心亮点',
        related: '更多精彩',
        timeline: '历任会长',
        spotlight: '现任会长风采',
        cta: {
          title: '加入我们的旅程',
          subtitle: '成为下一章历史的一部分。',
          button: '立即加入'
        }
      };
    }
    return {
      back: 'Back to Home',
      summary: 'Summary',
      featured: 'Featured Highlights',
      related: 'Related Highlights',
      timeline: 'Presidents Timeline',
      spotlight: 'Current President Spotlight',
      cta: {
        title: 'Join Our Journey',
        subtitle: 'Be a part of the next chapter of our history.',
        button: 'Get Involved'
      }
    };
  }, [locale]);

  if (!category) return <div className="p-20 text-center">Category not found</div>;

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={details?.hero?.image || category.image} 
            alt={category.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-primary hover:text-white transition-colors mb-10 font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20"
          >
            NECINA 30th Anniversary Anniversary
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            {details?.hero?.title || category.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {details?.hero?.description || category.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-white">
        {/* Page Content Renderer */}
        {details && (
          <>
            {/* 1. Summary Section (7:5 Split) */}
            <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-20 items-stretch">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">
                      {details.summaryHeading || details.founders?.title || details.about?.title || details.techLegacy?.title || details.values?.title || t.summary}
                    </h2>
                    <div className="space-y-8">
                      <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                        {details.summaryBody || details.founders?.content || details.about?.content || details.techLegacy?.content || details.content?.body || category.description}
                      </p>
                      <div className="w-24 h-2 bg-primary rounded-full" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-full relative p-12 rounded-[3.5rem] bg-slate-950 text-white overflow-hidden group shadow-2xl border border-white/5"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />
                    <div className="relative z-10 flex flex-col h-full">
                      {id === 'leaders' ? (
                        <>
                          <Shield className="w-12 h-12 text-primary mb-8" />
                          <h3 className="text-2xl font-black mb-6">Founders' Spirit</h3>
                          <ul className="space-y-6">
                            {['Innovation', 'Collaboration', 'Giving Back'].map((item) => (
                              <li key={item} className="flex items-center space-x-4">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : id === 'ceremony' ? (
                        <>
                          <Calendar className="w-12 h-12 text-primary mb-8" />
                          <h3 className="text-2xl font-black mb-8">{locale === 'zh' ? '活动详情' : 'Event Details'}</h3>
                          <div className="space-y-6">
                            {[
                              { label: locale === 'zh' ? '日期' : 'Date', val: details.event?.date },
                              { label: locale === 'zh' ? '地点' : 'Venue', val: details.event?.venue },
                              { label: locale === 'zh' ? '主题' : 'Theme', val: details.event?.theme }
                            ].map((d, i) => (
                              <div key={i}>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{d.label}</div>
                                <div className="text-lg font-bold text-slate-100">{d.val}</div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <Award className="w-12 h-12 text-primary mb-8" />
                          <h3 className="text-2xl font-black mb-6">{locale === 'zh' ? '核心影响' : 'Key Impact'}</h3>
                          <p className="text-slate-400 mb-8 leading-relaxed italic">
                            {locale === 'zh' ? '三十载初心如一，我们致力于成为连接梦想与现实的桥梁。' : 'Thirty years of consistent original intention, we are committed to being a bridge connecting dreams and reality.'}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-auto">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                              <div className="text-2xl font-black text-white">30+</div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                              <div className="text-2xl font-black text-white">Vibrant</div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Community</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Video Feature Section (New) */}
            {details.videoUrl && (
              <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(41,176,233,0.3)] bg-slate-900 border border-slate-100 group"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${details.videoUrl.split('v=')[1]?.split('&')[0] || details.videoUrl.split('/').pop()}`}
                      title="Video Feature"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[3rem]" />
                  </motion.div>
                  {details.videoCaption && (
                    <p className="mt-10 text-center text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
                      {details.videoCaption}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Multiple Videos Section (e.g. for YES page) */}
            {details.videos && (
              <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={details.videos.length === 1 ? "max-w-3xl mx-auto" : "grid md:grid-cols-2 gap-12"}>
                    {details.videos.map((video: any, i: number) => {
                      const getThumbnailUrl = (url: string) => {
                        if (!url) return '';
                        const vMatch = url.match(/[?&]v=([^&#]+)/);
                        let videoId = vMatch ? vMatch[1] : '';
                        if (!videoId) {
                          const parts = url.split('/');
                          const lastPart = parts[parts.length - 1];
                          if (lastPart) {
                            videoId = lastPart.split('?')[0].split('&')[0];
                          }
                        }
                        return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
                      };

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {video.url ? (
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 mb-8 border border-slate-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20"
                            >
                              {/* Background Image */}
                              <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                  backgroundImage: `url(${getThumbnailUrl(video.url)})`,
                                }}
                              />
                              {/* Dark Overlay */}
                              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-300" />
                              
                              {/* Large Centered Play Button */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-600 rounded-[1.75rem] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:bg-red-500 shadow-[0_10px_30px_rgba(220,38,38,0.5)]">
                                  <svg
                                    className="w-8 h-8 text-white ml-1.5 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>

                              {/* Corner Platform badge */}
                              <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/75 rounded-lg text-[10px] font-black text-white tracking-widest uppercase">
                                YouTube
                              </div>
                            </a>
                          ) : (
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 mb-8 border border-slate-200 flex items-center justify-center text-slate-400">
                              Video Coming Soon
                            </div>
                          )}
                          <h3 className="text-2xl font-black mb-4 px-4">{video.title}</h3>
                          <p className="text-slate-500 line-clamp-2 px-4 leading-relaxed font-medium">
                            {video.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Grid Content Section */}
            {id === 'ceremony' && (
              <div className="bg-slate-950">
                <ProgramAgenda locale={locale} />
              </div>
            )}

            {(details.content?.items || details.presidents || details.about?.curriculum || details.values?.coreValues) && (
              <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="max-w-4xl mb-20 text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                      {details.presidents?.title || details.about?.gridTitle || details.values?.gridTitle || t.featured}
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                      {details.presidents?.content || details.gridDescription || (locale === 'zh' ? '深耕多个领域，打造全方位扶持体系。' : 'Deeply cultivate multiple fields to create a comprehensive support system.')}
                    </p>
                  </div>

                  {id === 'leaders' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {details.presidents.list.map((p: any, i: number) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.03, y: -5 }}
                          className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100">{p.year}</div>
                          <div className="text-lg font-black text-slate-800 leading-tight">{p.name}</div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                      {(details.content?.items || (details.about?.curriculum ? details.about.curriculum.map((c: string) => ({ title: c, desc: '' })) : null) || (details.values?.coreValues ? details.values.coreValues.map((v: string) => ({ title: v, desc: '' })) : null) || []).map((item: any, i: number) => (
                        <motion.div 
                          key={i}
                          whileHover={{ y: -10 }}
                          className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group"
                        >
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/5">
                            {i % 3 === 0 ? <Cpu className="w-8 h-8" /> : i % 3 === 1 ? <Target className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
                          </div>
                          <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                          <p className="text-slate-500 leading-relaxed">
                            {item.desc || (locale === 'zh' ? '这是我们计划中不可或缺的核心模块，助力社区成员成长。' : 'This is an indispensable core module in our plan, helping community members grow.')}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 3. Conference Specific Feature (if available, e.g. for events page) */}
            {id === 'events' && details.conferenceFeature && (
              <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-950 rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/10 group">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#29B0E933,transparent_40%)]" />
                  
                  <div className="relative z-10 grid lg:grid-cols-2">
                    <div className="p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                      <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20 w-fit">
                        {locale === 'zh' ? '旗舰活动' : 'Flagship Event'}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                        {details.conferenceFeature.title}
                      </h2>
                      <p className="text-xl text-white/50 mb-10 leading-relaxed font-medium">
                        {details.conferenceFeature.intro}
                      </p>
                      <div className="p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="space-y-8">
                          {[
                            { label: locale === 'zh' ? '时间' : 'Date', val: details.conferenceFeature.details.date },
                            { label: locale === 'zh' ? '地点' : 'Venue', val: details.conferenceFeature.details.venue },
                            { label: locale === 'zh' ? '主题' : 'Theme', val: details.conferenceFeature.details.theme }
                          ].map((d, i) => (
                            <div key={i} className="flex items-start justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary pt-1">{d.label}</span>
                              <span className="text-lg font-bold text-white text-right max-w-[250px]">{d.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-10 md:p-20 bg-white/5 flex flex-col justify-center">
                      <h3 className="text-2xl font-black text-white mb-8">{details.agenda.title}</h3>
                      <div className="space-y-12">
                        {details.agenda.sessions.map((session: any, i: number) => (
                          <div key={i} className="relative pl-8 border-l-2 border-primary/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(41,176,233,0.5)]" />
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6">{session.timeSlot}</h4>
                            <div className="space-y-6">
                              {session.items.map((item: any, j: number) => (
                                <div key={j}>
                                  <div className="text-lg font-black text-white mb-1">{item.title}</div>
                                  <div className="text-sm text-white/40">{item.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 4. Spotlight / CTA Section */}
            {(details.spotlight || details.techLegacy?.featured || details.values?.vision) && (
              <section className="py-32 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(41,176,233,0.15)] overflow-hidden p-8 md:p-20"
                  >
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-24 -z-0" />
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                      <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl">
                        <img 
                          src={details.spotlight?.image || category.image} 
                          alt="Spotlight"
                          className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20 w-fit">
                          {id === 'leaders' ? t.spotlight : (locale === 'zh' ? '即将到来' : 'Featured Spotlight')}
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter leading-tight">
                          {details.spotlight?.name || details.techLegacy?.featured || details.values?.vision || (locale === 'zh' ? '未来已至' : 'Future is Here')}
                        </h2>
                        {details.spotlight?.term && (
                          <div className="text-2xl font-bold text-slate-400 mb-8 font-serif italic">
                            {locale === 'zh' ? '任期' : 'Term'} {details.spotlight.term}
                          </div>
                        )}
                        
                        <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                          {details.spotlight?.bio || details.values?.mission || (locale === 'zh' ? '我们站在新时代的潮头，致力于通过 AI 技术赋能每一位社区成员，共同书写下一个三十年的辉煌篇章。' : 'Standing at the forefront of the new era, we are committed to empowering every community member through AI technology, and jointly writing a brilliant chapter for the next thirty years.')}
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                          <div className="flex items-start space-x-4">
                            <div className="mt-1 p-3 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{locale === 'zh' ? '行业' : 'Context'}</div>
                              <div className="font-bold text-slate-800 text-sm">{details.spotlight ? '25+ Years Experience' : 'Innovation First'}</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="mt-1 p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{locale === 'zh' ? '资质' : 'Excellence'}</div>
                              <div className="font-bold text-slate-800 text-sm">{details.spotlight ? 'MS/BS CS' : 'Global Synergy'}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}
          </>
        )}
      </div>

      {/* Related Highlights */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-4">Discovery</div>
            <h2 className="text-4xl font-black tracking-tight">{t.related}</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHT_CATEGORIES[locale]
            .filter(item => item.id !== id)
            .slice(0, 4)
            .map(item => (
              <Link 
                key={item.id} 
                to={item.path}
                className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white font-black text-xl leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
            {t.cta.title}
          </h2>
          <p className="text-white/80 text-xl font-medium mb-16 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <button className="px-12 py-6 bg-white text-primary font-black text-xl rounded-3xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95">
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HighlightDetail;
