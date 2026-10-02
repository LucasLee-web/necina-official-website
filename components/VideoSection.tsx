
import React, { useMemo } from 'react';
import type { Locale } from '../types';

type Props = {
  locale: Locale;
};

const VideoSection: React.FC<Props> = ({ locale }) => {
  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        heading: '视频回放',
        subheading: '观看我们往届周年的精彩瞬间与社区活动。',
        items: [
          {
            title: 'NECINA 概览',
            url: 'https://www.youtube.com/watch?v=eyEn949I_GQ',
            id: 'eyEn949I_GQ'
          },
          {
            title: 'NECINA 2024 年度大会',
            url: 'https://www.youtube.com/watch?v=PApDTumyVNA',
            id: 'PApDTumyVNA'
          },
          {
            title: 'NECINA 2023 人工智能大会',
            url: 'https://www.youtube.com/watch?v=xwkQSs0IHFk',
            id: 'xwkQSs0IHFk'
          },
          {
            title: 'NECINA 二十周年庆典 (时装秀)',
            url: 'https://www.youtube.com/watch?v=P5OoXcm7fQw',
            id: 'P5OoXcm7fQw'
          }
        ]
      };
    }
    return {
      heading: 'Video Highlights',
      subheading: 'Relive the energy of our landmark events and visionary community.',
      items: [
        {
          title: 'NECINA Overview',
          url: 'https://www.youtube.com/watch?v=eyEn949I_GQ',
          id: 'eyEn949I_GQ'
        },
        {
          title: 'NECINA Annual Conference 2024',
          url: 'https://www.youtube.com/watch?v=PApDTumyVNA',
          id: 'PApDTumyVNA'
        },
        {
          title: 'NECINA AI Conference 2023',
          url: 'https://www.youtube.com/watch?v=xwkQSs0IHFk',
          id: 'xwkQSs0IHFk'
        },
        {
          title: 'NECINA 20th Anniversary Gala (Fashion Show)',
          url: 'https://www.youtube.com/watch?v=P5OoXcm7fQw',
          id: 'P5OoXcm7fQw'
        }
      ]
    };
  }, [locale]);

  return (
    <section className="py-24 bg-slate-950 text-white" id="video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
            {t.heading}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {t.items.map((video, i) => (
            <div key={i} className="group">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-red-600/10"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                  }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-[1.75rem] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:bg-red-500 shadow-[0_10px_30px_rgba(220,38,38,0.4)]">
                    <svg
                      className="w-8 h-8 text-white ml-1.5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Corner platform badge */}
                <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/75 rounded-lg text-[10px] font-black text-white tracking-widest uppercase">
                  YouTube
                </div>
              </a>
              <h4 className="mt-6 text-xl font-bold px-2 group-hover:text-red-500 transition-colors duration-300">
                {video.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
