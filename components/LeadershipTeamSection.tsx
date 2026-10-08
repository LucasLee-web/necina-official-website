import React from 'react';
import { ExternalLink, Mail, Users, Layers, Sparkles, Building, Briefcase } from 'lucide-react';
import type { Locale } from '../types';
import { LEADERSHIP_2024_2025_DATA } from '../aboutLeadershipData';

interface LeadershipTeamSectionProps {
  locale: Locale;
}

export const LeadershipTeamSection: React.FC<LeadershipTeamSectionProps> = ({ locale }) => {
  const isZh = locale === 'zh';
  const data = LEADERSHIP_2024_2025_DATA;

  return (
    <section id="leadership-teams" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>{isZh ? data.term_zh : data.term}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isZh ? '执行与运营领导团队' : 'Leadership & Operations Teams'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {isZh
              ? '严格依照官方领导层名单收录。由项目执行团队与后台运营团队紧密协作，驱动 NECINA 全年品牌峰会、青年创投孵化与会员成长网络。'
              : 'Official operational roster as published on the authoritative NECINA leadership directory, organized by functional Program Teams and Operations Teams.'}
          </p>
        </div>

        {/* 1. Executive Presidency Card */}
        <div className="mb-16">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{isZh ? '领导层核心主席团' : 'Executive Leadership'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* President: John Zhuang */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-primary/30 relative overflow-hidden shadow-2xl group hover:border-primary transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                    {isZh ? data.president.role_zh : data.president.role}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {data.president.name}
                  </h3>
                  <div className="text-sm font-semibold text-slate-400 mt-0.5">
                    {isZh ? data.president.name_zh : '庄辉壮 (Huizhuang Zhuang)'}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {data.president.bioUrl && (
                    <a
                      href={data.president.bioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-xs text-slate-200 transition-colors"
                    >
                      <span>{isZh ? '官方履历' : 'Official Bio'}</span>
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </a>
                  )}
                  {data.president.linkedin && (
                    <a
                      href={data.president.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/30 border border-primary/30 text-xs text-primary transition-colors font-bold"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                {isZh
                  ? '统领 NECINA 2024-2025 年度战略规划、项目执行矩阵与社区发展。'
                  : 'Leading NECINA 2024-2025 strategic initiatives, program matrix execution, and regional community outreach.'}
              </p>
            </div>

            {/* Vice President: Bing He */}
            {data.vicePresident && (
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/15 relative overflow-hidden shadow-2xl group hover:border-primary/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 bg-slate-950 flex-shrink-0">
                      <img
                        src="/images/board/bing_he.jpg"
                        alt={data.vicePresident.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider mb-1">
                        {isZh ? data.vicePresident.role_zh : data.vicePresident.role}
                      </span>
                      <h3 className="text-xl font-black text-white">
                        {data.vicePresident.name}
                      </h3>
                      <div className="text-sm font-semibold text-slate-400">
                        {isZh ? data.vicePresident.name_zh : '何 冰 (Bing He)'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {data.vicePresident.bioUrl && (
                      <a
                        href={data.vicePresident.bioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-xs text-slate-200 transition-colors"
                      >
                        <span>{isZh ? '官方履历' : 'Official Bio'}</span>
                        <ExternalLink className="w-3 h-3 text-primary" />
                      </a>
                    )}
                    {data.vicePresident.linkedin && (
                      <a
                        href={data.vicePresident.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/30 border border-primary/30 text-xs text-primary transition-colors font-bold"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                  {isZh
                    ? '协助统筹后台运营与跨部门资源协同，25 年以上硅谷工程管理与企业咨询经验。'
                    : 'Overseeing operations synergy and cross-departmental coordination; 25+ years of Silicon Valley engineering and management consulting background.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 2. Program Teams Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
            <Layers className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-black text-white">
              {isZh ? '项目团队 (Program Teams)' : 'Program Teams'}
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              ({data.programTeams.length} {isZh ? '个业务大组' : 'Divisions'})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.programTeams.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h4 className="text-base font-bold text-white leading-tight">
                      {isZh ? group.name_zh : group.name}
                    </h4>
                    {group.email && (
                      <a
                        href={`mailto:${group.email}`}
                        className="p-1 rounded-md bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-colors"
                        title={group.email}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="divide-y divide-white/5">
                    {group.members.map((member, mIdx) => (
                      <div key={mIdx} className="py-2.5 flex items-center justify-between gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">
                            {member.name}
                          </span>
                          {member.name_zh && (
                            <span className="text-xs text-slate-400 font-medium">
                              ({member.name_zh})
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                            {isZh ? member.role_zh || member.role : member.role}
                          </span>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-primary transition-colors"
                              title="LinkedIn"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="text-slate-400 hover:text-primary transition-colors"
                              title={member.email}
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                  {group.members.length} {isZh ? '位团队成员' : 'Members'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Operations Teams Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
            <Building className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-black text-white">
              {isZh ? '运营团队 (Operation Teams)' : 'Operation Teams'}
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              ({data.operationTeams.length} {isZh ? '个职能部门' : 'Divisions'})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.operationTeams.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h4 className="text-base font-bold text-white leading-tight">
                      {isZh ? group.name_zh : group.name}
                    </h4>
                    {group.email && (
                      <a
                        href={`mailto:${group.email}`}
                        className="p-1 rounded-md bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-colors"
                        title={group.email}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="divide-y divide-white/5">
                    {group.members.map((member, mIdx) => (
                      <div key={mIdx} className="py-2.5 flex items-center justify-between gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">
                            {member.name}
                          </span>
                          {member.name_zh && (
                            <span className="text-xs text-slate-400 font-medium">
                              ({member.name_zh})
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                            {isZh ? member.role_zh || member.role : member.role}
                          </span>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-primary transition-colors"
                              title="LinkedIn"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                  {group.members.length} {isZh ? '位职能成员' : 'Members'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;
