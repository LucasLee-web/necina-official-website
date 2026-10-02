import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, Check, Bell, Tag, Clock, ArrowRight } from 'lucide-react';
import type { Locale } from '../types';
import { EVENTS_LIST, OfficialEvent } from '../officialContent';

interface EventsPageProps {
  locale: Locale;
}

export const EventsPage: React.FC<EventsPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [registrationModalEvent, setRegistrationModalEvent] = useState<OfficialEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: isZh ? '全部类别' : 'All Categories' },
    { id: 'Flagship', label: isZh ? '旗舰峰会' : 'Flagship' },
    { id: 'AI & Tech', label: isZh ? '前沿科技' : 'AI & Tech' },
    { id: 'Youth', label: isZh ? '青年创业' : 'Youth' },
    { id: 'Entrepreneurship', label: isZh ? '商业领袖' : 'Entrepreneurship' },
  ];

  const filteredEvents = EVENTS_LIST.filter(ev => {
    const matchesTab = ev.status === activeTab;
    const matchesCat = selectedCategory === 'all' || ev.category === selectedCategory;
    return matchesTab && matchesCat;
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpEmail) return;
    setRsvpSubmitted(true);
    setTimeout(() => {
      setRsvpSubmitted(false);
      setRegistrationModalEvent(null);
      setRsvpName('');
      setRsvpEmail('');
    }, 2500);
  };

  const t = {
    badge: isZh ? 'NECINA 活动日历与前沿资讯' : 'Events, Conferences & News',
    title: isZh ? '汇聚全球华人智识，共赴科技浪潮' : 'Connect, Learn & Engage at Premier Tech Gatherings',
    subtitle: isZh
      ? '三十年来，NECINA 持续举办数百场高规格学术研讨会、前沿技术论坛、青年大赛与高端社交酒会，让每一位参与者拓展视野与人脉。'
      : 'For three decades, NECINA has hosted hundreds of high-caliber conferences, tech symposiums, youth competitions, and exclusive networking mixers across New England.',
    upcomingTab: isZh ? '即将举办的活动' : 'Upcoming Events',
    pastTab: isZh ? '往期活动回顾' : 'Past Events Archive',
    speakersLabel: isZh ? '特邀演讲嘉宾' : 'Featured Speakers',
    venueLabel: isZh ? '地点' : 'Venue',
    registerBtn: isZh ? '即刻报名参会' : 'Register / RSVP',
    learnMore: isZh ? '了解详情' : 'Learn More',
    announcementsTitle: isZh ? '官方重要公告与通知' : 'Official News & Announcements',
    modalTitle: isZh ? '活动报名登记' : 'Event RSVP Registration',
    modalDesc: isZh
      ? '请填写您的姓名与邮箱，我们将向您发送参会指南与电子票务确认函。'
      : 'Please provide your name and email to receive event logistical details and confirmation.',
    namePlaceholder: isZh ? '您的姓名' : 'Full Name',
    emailPlaceholder: isZh ? '电子邮箱 (如 user@example.com)' : 'Email address',
    submitRsvp: isZh ? '确认报名登记' : 'Confirm Registration',
    successMsg: isZh ? '恭喜！登记成功，确认函已发送至您的邮箱。' : 'Success! Your registration details have been recorded.',
    close: isZh ? '关闭' : 'Close'
  };

  const announcements = [
    {
      date: isZh ? '2026年3月' : 'March 2026',
      title: isZh ? 'NECINA 三十周年盛典全面开启报名与赞助通道' : 'NECINA 30th Anniversary Gala Registration & Sponsorship Now Open',
      desc: isZh
        ? '三十周年盛典将于 2026 年 6 月 13 日在 Bentley 大学会议中心隆重举行，涵盖全天高端科技论坛与盛大晚宴。'
        : 'The landmark celebration takes place on June 13, 2026, featuring keynote presentations from Flagship Pioneering, Harvard Medical School, and OpenAI.'
    },
    {
      date: isZh ? '2026年2月' : 'February 2026',
      title: isZh ? 'YES 青年创业服务项目 2026 年度春季训练营正式启航' : 'YES Youth Entrepreneurship 2026 Spring Cohort Commences',
      desc: isZh
        ? '庆祝 YES 成立 20 周年，数十位新英格兰高中生入选，开启为期数月的商业计划书实战孵化。'
        : 'Marking 20 years of youth mentorship, the spring cohort kicks off with executive mentors and venture competition preparation.'
    },
    {
      date: isZh ? '2026年1月' : 'January 2026',
      title: isZh ? '新一届志愿者团队招募启动，诚邀专业人士与学子加入' : '2026 Volunteer Recruitment Campaign Launched',
      desc: isZh
        ? '为科技峰会、新媒体运营、青少年导师库及技术开发提供广阔的实践舞台与领导力平台。'
        : 'Offering dynamic roles in conference logistics, tech operations, social media, and youth entrepreneurship mentoring.'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Sub-navigation Controls: Upcoming vs Past + Category Tabs */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold w-fit">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'upcoming' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.upcomingTab}
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'past' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.pastTab}
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-white/10 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVENT LISTINGS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/10 space-y-4">
              <Clock className="w-10 h-10 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-300">
                {isZh ? '此分类下暂无已列出活动' : 'No events found in this category'}
              </h3>
              <p className="text-sm text-slate-500">
                {isZh ? '请切换其他分类或关注官方最新公告。' : 'Please check back soon or browse other categories.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="rounded-3xl bg-slate-900 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Event Banner */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={ev.image}
                        alt={isZh ? ev.title_zh : ev.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-bold text-primary border border-white/10">
                          {isZh ? ev.category_zh : ev.category}
                        </span>
                        {ev.id === '30th-gala' && (
                          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-xs font-bold text-white border border-primary/40 animate-pulse">
                            ★ 30th Anniversary
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-8 space-y-5">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-bold text-primary">
                          <Calendar className="w-4 h-4" />
                          <span>{isZh ? ev.date_zh : ev.date}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {isZh ? ev.title_zh : ev.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {isZh ? ev.description_zh : ev.description}
                      </p>

                      <div className="pt-2 flex items-start gap-2 text-xs text-slate-400">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{isZh ? ev.venue_zh : ev.venue}</span>
                      </div>

                      {/* Featured Speakers (if any) */}
                      {ev.speakers && ev.speakers.length > 0 && (
                        <div className="pt-3 border-t border-white/10 space-y-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            {t.speakersLabel}
                          </span>
                          <div className="text-xs text-slate-300 font-medium">
                            {(isZh ? ev.speakers_zh || ev.speakers : ev.speakers).join(' • ')}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="p-8 pt-0">
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                      {ev.status === 'upcoming' ? (
                        <>
                          <button
                            onClick={() => setRegistrationModalEvent(ev)}
                            className="px-6 py-3 rounded-xl font-bold text-xs bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 transition-transform active:scale-95"
                          >
                            {t.registerBtn}
                          </button>
                          <a
                            href={ev.registrationUrl || 'https://app.joinit.com/o/necina-boston'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
                          >
                            <span>Joinit Portal</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500">
                          {isZh ? '活动已圆满举行' : 'Concluded Successfully'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. ANNOUNCEMENTS & NEWS BULLETINS */}
      <section className="py-20 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Press & Bulletins
            </span>
            <h2 className="text-3xl font-black text-white">
              {t.announcementsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-primary font-bold">{item.date}</span>
                  <Bell className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE REGISTRATION MODAL */}
      {registrationModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6 relative">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {isZh ? '活动注册' : 'Event RSVP'}
              </span>
              <h3 className="text-2xl font-black text-white">
                {isZh ? registrationModalEvent.title_zh : registrationModalEvent.title}
              </h3>
              <p className="text-xs text-slate-400">
                {t.modalDesc}
              </p>
            </div>

            {rsvpSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>{t.successMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    required
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setRegistrationModalEvent(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    {t.close}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
                  >
                    {t.submitRsvp}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
