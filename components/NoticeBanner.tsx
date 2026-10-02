
import React, { useMemo } from 'react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
};

const NoticeBanner: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        title: '提示：30 周年专题页面',
        body: '我们正在持续更新 30 周年活动信息。欢迎访问专题页面查看最新内容与活动安排。',
        cta: '打开专题页面',
        note: '（当前为演示版本，链接可后续替换为正式地址）',
      };
    }
    return {
      title: 'Notice: 30th Anniversary Webpage',
      body: 'We are continuously updating details for the 30th anniversary. Visit the dedicated page for the latest updates and program info.',
      cta: 'Open the webpage',
      note: '(Demo link — replace with final URL later)',
    };
  }, [locale]);

  const href = 'https://necina.org/content/30th-anniversary';

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left"><span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{t.title}</span><p className="mt-2 text-white/80 text-lg">{t.body} <span className="text-xs text-white/40 ml-2">{t.note}</span></p></div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary text-white rounded-2xl font-black shadow-[0_0_20px_rgba(41,176,233,0.3)] hover:scale-105 transition-transform">{t.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default NoticeBanner;
