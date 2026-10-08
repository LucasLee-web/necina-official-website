import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Award, ChevronDown, ChevronUp } from 'lucide-react';
import type { Locale } from '../types';
import { BOARD_MEMBERS_DATA } from '../aboutLeadershipData';

interface BoardMembersSectionProps {
  locale: Locale;
}

export const BoardMembersSection: React.FC<BoardMembersSectionProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (id: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="board-members" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isZh ? '最高治理与战略监督' : 'Highest Governance & Oversight'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isZh ? 'NECINA 董事会成员' : 'Board of Directors'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {isZh
              ? '汇聚深耕新英格兰与全球高科技产业数十载的传奇科技创业家、跨国企业高管与杰出行业领袖。'
              : 'Comprising pioneering high-tech entrepreneurs, Fortune 500 executives, and distinguished venture investors.'}
          </p>
        </div>

        {/* Board Members Grid: DOM order strictly preserved from 1 to 11 */}
        <div className="space-y-8">
          {BOARD_MEMBERS_DATA.map((member) => {
            const isExpanded = !!expandedBios[member.id];
            const bioList = isZh ? member.bio_zh : member.bio;
            const titleDisplay = isZh ? member.title_zh : member.title;
            const distinctionDisplay = isZh ? member.distinction_zh : member.distinction;

            return (
              <div
                key={member.id}
                id={`board-${member.id}`}
                className="group relative rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-xl"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Member Photo + Badges (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                      {/* Photo Container */}
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/15 bg-slate-950 shadow-2xl flex-shrink-0 group-hover:border-primary/60 transition-colors">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Name & Bilingual Titles */}
                      <div className="space-y-1.5 w-full">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <span className="text-lg font-bold text-slate-400">
                            {member.name_zh}
                          </span>
                        </div>

                        {/* Distinction Tag */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/25 text-primary text-xs font-bold">
                          <Award className="w-3.5 h-3.5" />
                          <span>{distinctionDisplay}</span>
                        </div>

                        {/* Official Title */}
                        <div className="text-sm font-semibold text-slate-300 pt-1 leading-snug">
                          {titleDisplay}
                        </div>
                      </div>

                      {/* External links if any */}
                      {member.links && member.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {member.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-xs text-slate-300 hover:text-white transition-colors"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3 text-primary" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Column: Full Biography (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-white/10 pb-2">
                        <span>{isZh ? '董事官方传略 (Official Biography)' : 'Official Biography'}</span>
                      </div>

                      {/* Full Bio Paragraphs */}
                      <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {bioList.map((paragraph, pIdx) => {
                          // If there are multiple paragraphs and not expanded, optionally collapse beyond first 2 on small screens
                          if (!isExpanded && pIdx >= 2) return null;
                          return (
                            <p key={pIdx} className="font-normal text-slate-300 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>

                      {/* Expand / Collapse Button if more than 2 paragraphs */}
                      {bioList.length > 2 && (
                        <button
                          type="button"
                          onClick={() => toggleBio(member.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors pt-2 focus:outline-none"
                        >
                          {isExpanded ? (
                            <>
                              <span>{isZh ? '收起部分传略' : 'Show less'}</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>{isZh ? '展开阅读完整传略' : 'Read full biography'}</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoardMembersSection;
