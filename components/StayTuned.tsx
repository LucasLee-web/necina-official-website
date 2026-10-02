
import React, { useMemo } from 'react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
};

const StayTuned: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        title: '关注动态',
        body: '2026 年我们将陆续推出系列活动。欢迎关注 NECINA 的 LinkedIn，并通过社区渠道保持联系。',
        linkedin: '访问 LinkedIn',
        wechat: '微信群（说明）',
        wechatNote: '可在活动现场或通过组织联系人获取入群方式。',
      };
    }
    return {
      title: 'Stay Tuned',
      body: 'We will host a series of events throughout 2026. Follow NECINA on LinkedIn and stay connected via our community channels (including WeChat).',
      linkedin: 'Visit LinkedIn',
      wechat: 'WeChat Group (Info)',
      wechatNote: 'Join details can be shared on-site or via NECINA contacts.',
    };
  }, [locale]);

  const linkedinUrl = 'https://www.linkedin.com/company/necina/';

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-4xl font-black text-white">{t.title}</h2></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="group p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:bg-white/10"><div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></div><h3 className="text-2xl font-black text-white mb-2">{t.linkedin}</h3><p className="text-white/50 text-sm">Join our professional network of 5,000+ members.</p></a>
          <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl"><div className="w-12 h-12 bg-[#07C160] rounded-xl flex items-center justify-center mb-6"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8.5 14c-.828 0-1.5-.672-1.5-1.5S7.672 11 8.5 11s1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM22 10.5c0-4.694-4.477-8.5-10-8.5s-10 3.806-10 8.5c0 2.508 1.277 4.759 3.284 6.307l-.95 3.193 3.666-1.5c1.233.321 2.544.5 3.996.5 5.523 0 10-3.806 10-8.5z" /></svg></div><h3 className="text-2xl font-black text-white mb-2">{t.wechat}</h3><p className="text-white/50 text-sm">{t.wechatNote}</p></div>
        </div>
      </div>
    </section>
  );
};

export default StayTuned;
