
import React, { useMemo, useState } from 'react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
};

const InterestForms: React.FC<Props> = ({ locale }) => {
  const [formType, setFormType] = useState<'rsvp' | 'volunteer'>('rsvp');
  const [submitted, setSubmitted] = useState(false);

  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        heading: '社区参与',
        subheading: '你可以作为来宾报名参加，或加入志愿者为活动贡献力量。',
        tabs: {
          rsvp: '活动报名（RSVP）',
          volunteer: '志愿者申请',
        },
        successTitle: '已收到申请！',
        successBody: '感谢你的参与意向。我们的团队将尽快与你联系。',
        fields: {
          nameLabel: '姓名',
          namePh: '请输入姓名',
          emailLabel: '邮箱',
          emailPh: 'name@company.com',
          detailsLabel: '补充说明 / 动机',
          detailsPhRsvp: '请简单说明你为何想报名参加活动，以及任何需要我们了解的信息。',
          detailsPhVolunteer: '请简单说明你想参与志愿服务的原因、可提供的支持与时间安排。',
        },
        submit: '提交',
        submitRsvp: '提交报名',
        submitVolunteer: '提交志愿者申请',
      };
    }
    return {
      heading: 'Community Engagement',
      subheading: 'Join us as a guest or contribute your skills as a volunteer.',
      tabs: { rsvp: 'RSVP for Gala', volunteer: 'Volunteer Application' },
      successTitle: 'Request Received!',
      successBody: 'Thank you for your interest. Our community team will be in touch shortly.',
      fields: {
        nameLabel: 'Full Name',
        namePh: 'John Doe',
        emailLabel: 'Email Address',
        emailPh: 'john@company.com',
        detailsLabel: 'Details / Motivation',
        detailsPhRsvp: "Tell us a bit about why you'd like to RSVP.",
        detailsPhVolunteer: "Tell us a bit about why you'd like to volunteer.",
      },
      submit: 'Submit',
      submitRsvp: 'Submit RSVP',
      submitVolunteer: 'Submit Volunteer Application',
    };
  }, [locale]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const submitLabel = formType === 'rsvp' ? t.submitRsvp : t.submitVolunteer;
  const detailsPlaceholder = formType === 'rsvp' ? t.fields.detailsPhRsvp : t.fields.detailsPhVolunteer;

  // ---------- STYLE: MODERN ----------
  return (
    <section className="py-24 bg-[#070B14] text-white" id="forms">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-4xl font-black mb-4">{t.heading}</h2><p className="text-white/40">{t.subheading}</p></div>
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          <div className="flex border-b border-white/10">
            {(['rsvp', 'volunteer'] as const).map((type) => (
              <button key={type} type="button" onClick={() => setFormType(type)} className={`flex-1 py-6 text-xs font-black uppercase tracking-[0.2em] transition-all ${formType === type ? 'bg-primary text-white shadow-[0_0_30px_rgba(41,176,233,0.2)]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>{t.tabs[type]}</button>
            ))}
          </div>
          <div className="p-10 md:p-16">
            {submitted ? (
              <div className="text-center py-12"><div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"><svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div><h3 className="text-3xl font-black mb-3">{t.successTitle}</h3><p className="text-white/40">{t.successBody}</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">{t.fields.nameLabel}</label><input type="text" required className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-primary outline-none transition-all placeholder-white/20" placeholder={t.fields.namePh} /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">{t.fields.emailLabel}</label><input type="email" required className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-primary outline-none transition-all placeholder-white/20" placeholder={t.fields.emailPh} /></div>
                </div>
                <div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">{t.fields.detailsLabel}</label><textarea className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-primary outline-none transition-all h-36 resize-none placeholder-white/20" placeholder={detailsPlaceholder} /></div>
                <button type="submit" className="w-full py-5 bg-primary text-white rounded-[1.5rem] font-black text-xl shadow-[0_20px_60px_rgba(41,176,233,0.3)] hover:scale-[1.02] transition-transform">{submitLabel}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestForms;
