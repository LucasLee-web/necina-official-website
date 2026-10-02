
import React, { useMemo } from 'react';
import type { Locale } from '../types';

type Props = {
  locale: Locale;
};

const ConversionBlock: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        title: '加入我们，共庆 30 周年',
        body: '我们诚挚邀请会员、校友与朋友重聚相连，参与交流，并共同庆祝我们的集体成就。',
        join: '正式会员 (年费)',
        renew: '普通会员 (免费加入)',
      };
    }
    return {
      title: 'Join Us to Celebrate',
      body: 'We invite all members, alumni, and friends to reconnect, engage, and celebrate our collective achievements.',
      join: 'Full Membership (Annual fee)',
      renew: 'Associate Membership (Free to join)',
    };
  }, [locale]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="join">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">{t.title}</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">{t.body}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://app.joinit.com/o/necina-boston"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(41,176,233,0.3)] hover:scale-105 transition-transform"
            >
              {t.join}
            </a>
            <a
              href="https://app.joinit.com/o/necina-boston/D5cy5MhBMDt8TTvAq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-xl hover:bg-white/20 transition-all"
            >
              {t.renew}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionBlock;
