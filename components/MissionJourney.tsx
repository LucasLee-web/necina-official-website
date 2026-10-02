
import React, { useMemo, useState } from 'react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
};

type JourneyItem = {
  id: string;
  title: string;
  desc: string;
};

const MissionJourney: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    const en = {
      missionTitle: 'Our Mission',
      missionQuote:
        '"NECINA has been empowering professionals, entrepreneurs, and students through technology, learning, and community since its founding in 1996."',
      journeyTitle: 'Our Journey Since 1996',
      items: [
        {
          id: 'tech',
          title: 'Technology & Leadership',
          desc: 'Hosted hundreds of conferences, seminars, and workshops on technology trends, entrepreneurship, and career development.',
        },
        {
          id: 'growth',
          title: 'Professional Growth',
          desc: 'Supported thousands of professionals and students to expand their skills, networks, and opportunities in New England.',
        },
        {
          id: 'community',
          title: 'Vibrant Community',
          desc: 'Fostered a vibrant community connecting technology, business, and innovation across generations since 1996.',
        },
      ] as JourneyItem[],
    };

    if (locale === 'zh') {
      return {
        missionTitle: '我们的使命',
        missionQuote:
          '“自 1996 年成立以来，NECINA 通过科技、学习与社区，持续赋能专业人士、创业者与学生。”',
        journeyTitle: '自 1996 年以来的历程',
        items: [
          {
            id: 'tech',
            title: '科技与领导力',
            desc: '举办数百场会议、研讨会与工作坊，覆盖技术趋势、创业与职业发展等主题。',
          },
          {
            id: 'growth',
            title: '职业成长',
            desc: '支持成千上万的专业人士与学生拓展技能、人脉与新英格兰地区的发展机会。',
          },
          {
            id: 'community',
            title: '活力社区',
            desc: '打造跨代连接科技、商业与创新的社区网络，持续至今。',
          },
        ] as JourneyItem[],
      };
    }
    return en;
  }, [locale]);

  return (
    <section className="py-24 bg-[#070B14]" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">{t.missionTitle}</h2>
          <p className="text-xl text-white/70 italic max-w-3xl mx-auto px-8 border-l-4 border-primary">{t.missionQuote}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, idx) => (
            <div key={item.id} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10 group">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 font-black text-xl">{idx + 1}</div>
              <h4 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionJourney;
