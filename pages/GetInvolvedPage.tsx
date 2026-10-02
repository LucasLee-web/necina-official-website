import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle2, Users, HeartHandshake, Briefcase, Award, ExternalLink, Send } from 'lucide-react';
import type { Locale } from '../types';
import { MEMBERSHIP_TIERS, SPONSOR_PACKAGES } from '../officialContent';

interface GetInvolvedPageProps {
  locale: Locale;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [activeTab, setActiveTab] = useState<'membership' | 'volunteer' | 'sponsorship' | 'careers'>('membership');

  // Volunteer form state
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('event');
  const [volunteerNote, setVolunteerNote] = useState('');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Sponsor inquiry form state
  const [sponsorCompany, setSponsorCompany] = useState('');
  const [sponsorContact, setSponsorContact] = useState('');
  const [sponsorTier, setSponsorTier] = useState('Gold');
  const [sponsorNote, setSponsorNote] = useState('');
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerEmail) return;
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setVolunteerSubmitted(false);
      setVolunteerName('');
      setVolunteerEmail('');
      setVolunteerNote('');
    }, 4000);
  };

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sponsorContact) return;
    setSponsorSubmitted(true);
    setTimeout(() => {
      setSponsorSubmitted(false);
      setSponsorCompany('');
      setSponsorContact('');
      setSponsorNote('');
    }, 4000);
  };

  const t = {
    badge: isZh ? '携手共进 • 融入社群' : 'Join Our Mission',
    title: isZh ? '加入 NECINA：会员、志愿奉献、赞助与职业赋能' : 'Get Involved: Membership, Volunteering, Sponsorship & Careers',
    subtitle: isZh
      ? 'NECINA 依赖社区每一位成员的积极参与和奉献。探索成为正式会员、加入志愿者大家庭、赞助科技盛事或获取顶尖职业成长资源。'
      : 'Our vibrant 501(c)(3) community is powered by the passion of our members, volunteers, and corporate partners. Discover how you can participate and grow.',
    tabMembership: isZh ? '会员方案' : 'Membership Plans',
    tabVolunteer: isZh ? '志愿者招募' : 'Volunteering',
    tabSponsorship: isZh ? '赞助与合作伙伴' : 'Sponsorship & Partners',
    tabCareers: isZh ? '职业发展资源' : 'Career Resources',
    membershipTitle: isZh ? '选择适合您的会员方案' : 'Select Your Membership Tier',
    membershipDesc: isZh
      ? '享受研讨会门票优惠、导师咨询、独家内推人脉与专业兴趣组 (SIG) 特权。'
      : 'Unlock discounted conference admissions, exclusive mentorship access, and peer circles on our official portal.',
    volunteerTitle: isZh ? '成为 NECINA 志愿者，锻炼卓越领导力' : 'Volunteer With Us & Lead Real Impact',
    volunteerDesc: isZh
      ? '自 1996 年以来，无数科技高管与创业领袖均从 NECINA 志愿者团队起步。在这里，您可以策划大型峰会、结识良师益友并服务华人社区。'
      : 'Since 1996, many corporate executives and serial founders began their leadership journey in the NECINA volunteer team.',
    sponsorshipTitle: isZh ? '赞助合作：触达新英格兰核心科技网络' : 'Partner & Sponsor: Direct Access to 5,000+ Innovators',
    sponsorshipDesc: isZh
      ? '提升企业品牌知名度、高效招聘顶尖工程与商业人才，彰显对非营利科技教育的支持。'
      : 'Elevate your brand presence, recruit premier engineering talent, and champion non-profit technology education.',
    careersTitle: isZh ? '职业成长与人才对接网络' : 'Career Resources & Mentorship Pipeline',
    careersDesc: isZh
      ? '依托新英格兰顶尖华人科技高管网络，为会员提供求职指导、简历复盘与名企内推。'
      : 'Leveraging our executive alumni network to provide resume teardowns, career roundtables, and high-impact referrals.'
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Functional Navigation Tabs */}
          <div className="mt-12 flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-slate-900 border border-white/10 w-fit text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-5 py-3 rounded-xl transition-all ${
                activeTab === 'membership' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tabMembership}
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-5 py-3 rounded-xl transition-all ${
                activeTab === 'volunteer' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tabVolunteer}
            </button>
            <button
              onClick={() => setActiveTab('sponsorship')}
              className={`px-5 py-3 rounded-xl transition-all ${
                activeTab === 'sponsorship' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tabSponsorship}
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-5 py-3 rounded-xl transition-all ${
                activeTab === 'careers' ? 'bg-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tabCareers}
            </button>
          </div>
        </div>
      </section>

      {/* 2. TAB 1: MEMBERSHIP */}
      {activeTab === 'membership' && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Membership Portal
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {t.membershipTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.membershipDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {MEMBERSHIP_TIERS.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl bg-slate-900 border flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                    tier.popular ? 'border-primary ring-2 ring-primary/20' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                      {isZh ? '最受欢迎' : 'Most Popular'}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">
                        {isZh ? tier.name_zh : tier.name}
                      </h3>
                      <p className="text-xs text-slate-400 min-h-[32px]">
                        {isZh ? tier.description_zh : tier.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-400">
                        {isZh ? tier.term_zh : tier.term}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      {(isZh ? tier.features_zh : tier.features).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href={tier.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-4 rounded-xl font-bold text-sm transition-all transform active:scale-95 ${
                        tier.popular
                          ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30'
                          : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
                      }`}
                    >
                      {isZh ? tier.cta_zh : tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-slate-500">
              {isZh
                ? '所有会员账户均通过官方安全平台 Joinit 管理，会籍支持自动续期与退税凭证。'
                : 'All memberships are securely handled through Joinit.org. Contributions support our 501(c)(3) mission.'}
            </div>
          </div>
        </section>
      )}

      {/* 3. TAB 2: VOLUNTEERING */}
      {activeTab === 'volunteer' && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Volunteer Programs and Picture */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    Community Leadership
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    {t.volunteerTitle}
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {t.volunteerDesc}
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                  <img
                    src="/volunteers_team.jpg"
                    alt="Volunteers Team"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-slate-950/80 text-xs text-slate-400 text-center">
                    {isZh ? 'NECINA 充满凝聚力与创新活力的各届志愿者团队' : 'The energetic NECINA volunteer family at our annual assembly'}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    {isZh ? '开放参与的志愿者团队方向' : 'Active Volunteer Committees'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: isZh ? '大型活动策划与执行' : 'Conference Logistics & Stage', desc: isZh ? '统筹科技峰会、迎宾签到与现场会务' : 'Stage management, VIP escorting, venue coordination' },
                      { title: isZh ? '新媒体运营与公关' : 'Marketing & Communications', desc: isZh ? '撰写微信公众号、新闻简报与视觉设计' : 'Social media, press releases, newsletters, graphic design' },
                      { title: isZh ? 'YES 青年创业导师团' : 'Youth Mentorship & Judging', desc: isZh ? '指导高中生商业计划书并参与大赛评审' : 'Mentoring high school startup teams and pitch evaluation' },
                      { title: isZh ? '技术架构与网站开发' : 'Technology & Web Systems', desc: isZh ? '维护官方站点、开发会员工具与技术沙龙' : 'Full-stack development, tooling, SIG tech support' }
                    ].map((role, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                        <div className="text-sm font-bold text-white">{role.title}</div>
                        <div className="text-xs text-slate-400">{role.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Volunteer Application Form */}
              <div className="lg:col-span-6">
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-white/15 shadow-2xl space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {isZh ? '在线加入申请' : 'Application Form'}
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      {isZh ? '申请成为 NECINA 志愿者' : 'Apply for a Volunteer Position'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {isZh
                        ? '请填写您的基本信息，负责人将在 3 个工作日内与您取得联系。'
                        : 'Submit your contact information and interests; our committee lead will reach out promptly.'}
                    </p>
                  </div>

                  {volunteerSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <div className="font-bold text-lg">
                        {isZh ? '申请已成功提交！' : 'Application Received!'}
                      </div>
                      <p className="text-xs text-emerald-200/80">
                        {isZh
                          ? '感谢您对 NECINA 非营利事业的热忱支持，我们将尽快通过邮件与您联系。'
                          : 'Thank you for your dedication to our community. We will connect with you via email.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isZh ? '您的姓名' : 'Full Name'} *
                        </label>
                        <input
                          type="text"
                          required
                          value={volunteerName}
                          onChange={(e) => setVolunteerName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isZh ? '电子邮箱' : 'Email Address'} *
                        </label>
                        <input
                          type="email"
                          required
                          value={volunteerEmail}
                          onChange={(e) => setVolunteerEmail(e.target.value)}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isZh ? '意向志愿方向' : 'Preferred Committee / Area'}
                        </label>
                        <select
                          value={volunteerRole}
                          onChange={(e) => setVolunteerRole(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-primary"
                        >
                          <option value="event">{isZh ? '大型活动策划与执行' : 'Conference Logistics & Events'}</option>
                          <option value="marketing">{isZh ? '新媒体运营与设计宣传' : 'Marketing & Communications'}</option>
                          <option value="yes">{isZh ? 'YES 青年创业导师团' : 'YES Youth Mentorship'}</option>
                          <option value="tech">{isZh ? '网站与技术开发支持' : 'Technology & Web Systems'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {isZh ? '个人背景简述或留言（可选）' : 'Background / Brief Message (Optional)'}
                        </label>
                        <textarea
                          rows={3}
                          value={volunteerNote}
                          onChange={(e) => setVolunteerNote(e.target.value)}
                          placeholder={isZh ? '例如：软件工程师，熟悉 React，愿周末协助活动' : 'E.g., Software engineer, interested in mentoring students'}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 transition-transform active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isZh ? '提交志愿者申请' : 'Submit Volunteer Application'}</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. TAB 3: SPONSORSHIP */}
      {activeTab === 'sponsorship' && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Corporate Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {t.sponsorshipTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.sponsorshipDesc}
              </p>
            </div>

            {/* Sponsorship Tiers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SPONSOR_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl bg-slate-900 border flex flex-col justify-between group shadow-xl ${
                    pkg.featured ? 'border-primary ring-2 ring-primary/20' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">
                      {isZh ? pkg.tier_zh : pkg.tier}
                    </div>
                    <div className="text-3xl font-black text-white tabular-nums">
                      {isZh ? pkg.price_zh || pkg.price : pkg.price}
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      {(isZh ? pkg.benefits_zh : pkg.benefits).map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSponsorTier(pkg.tier);
                        const formElem = document.getElementById('sponsor-inquiry-form');
                        if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-primary text-white transition-colors"
                    >
                      {isZh ? '选择意向方案' : 'Select Tier'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sponsorship Inquiry Form */}
            <div id="sponsor-inquiry-form" className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900 border border-white/15 shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {isZh ? '赞助意向登记' : 'Sponsorship Inquiry'}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {isZh ? '与赞助委员会取得联系' : 'Connect with Our Sponsorship Committee'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isZh
                    ? '我们将为您提供官方赞助回执、免税收据（Tax Deductible Receipt）及定制品牌方案。'
                    : 'We provide formal 501(c)(3) tax receipts and tailored brand engagement packages.'}
                </p>
              </div>

              {sponsorSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="font-bold text-lg">{isZh ? '感谢您的垂询！' : 'Inquiry Submitted!'}</div>
                  <p className="text-xs text-emerald-200/80">
                    {isZh
                      ? '赞助委员会主管将在 24 小时内与您联系，并发送赞助手册及合作方案。'
                      : 'Our committee representative will contact you within 24 hours with the prospectus.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSponsorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isZh ? '公司或机构名称' : 'Company / Organization Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={sponsorCompany}
                      onChange={(e) => setSponsorCompany(e.target.value)}
                      placeholder="Acme Technologies"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isZh ? '联系人姓名及邮箱' : 'Contact Person & Email'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={sponsorContact}
                      onChange={(e) => setSponsorContact(e.target.value)}
                      placeholder="Alex Wang (alex@acme.com)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isZh ? '意向赞助等级' : 'Sponsorship Level of Interest'}
                    </label>
                    <select
                      value={sponsorTier}
                      onChange={(e) => setSponsorTier(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-primary"
                    >
                      <option value="Bronze">Bronze ($2,000)</option>
                      <option value="Silver">Silver ($5,000)</option>
                      <option value="Gold">Gold ($10,000)</option>
                      <option value="Diamond">Diamond / Custom Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isZh ? '特定合作诉求或留言（可选）' : 'Notes / Special Requests (Optional)'}
                    </label>
                    <textarea
                      rows={3}
                      value={sponsorNote}
                      onChange={(e) => setSponsorNote(e.target.value)}
                      placeholder={isZh ? '例如：希望在 30 周年盛典设立企业展台或招募 AI 工程师' : 'E.g., Interested in recruiting senior engineers at the 30th Gala'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 transition-transform active:scale-95"
                  >
                    {isZh ? '发送赞助意向' : 'Submit Sponsorship Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. TAB 4: CAREER RESOURCES */}
      {activeTab === 'careers' && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Talent Pipeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {t.careersTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                {t.careersDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: isZh ? '大厂高管一对一简历精修' : 'Executive Resume Review Circles',
                  desc: isZh
                    ? '由罗克韦尔、思科、谷歌等名企资深工程主管与创业创始人亲授简历包装与叙事架构。'
                    : 'Quarterly workshops pairing engineers with tech directors to optimize technical impact storytelling.'
                },
                {
                  title: isZh ? '科技与职场导师咨询日' : 'Mentorship Office Hours',
                  desc: isZh
                    ? '面向职场转型、技术转管理及早期创业者提供针对性的职业规划咨询与破局建议。'
                    : 'Direct access to senior mentors guiding career transitions, management ladders, and founder mindsets.'
                },
                {
                  title: isZh ? 'NECINA 独家企业内推库' : 'Verified Community Referrals',
                  desc: isZh
                    ? '会员专属企业内推网络，直达波士顿与硅谷顶尖科技企业、生命医药公司及独角兽团队招聘高管。'
                    : 'Internal referral channels connecting vetted members directly to hiring managers in tech and life sciences.'
                }
              ].map((res, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-primary/40 transition-colors space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {res.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="https://app.joinit.com/o/necina-boston"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                    >
                      <span>{isZh ? '会员专享入口' : 'Member Access Portal'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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

export default GetInvolvedPage;
