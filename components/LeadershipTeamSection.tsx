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
              ? '由现任会长 Caroline (吕妤婧) 及主席团带领项目执行团队与后台运营团队紧密协作，驱动 NECINA 2026-2027 全年品牌峰会、青年创投孵化与会员成长网络。'
              : 'Led by President Caroline Lu and the executive presidency, functional Program Teams and Operations Teams drive NECINA’s 2026-2027 conferences, youth accelerators, and global member networks.'}
          </p>
        </div>

        {/* 1. Executive Presidency Cards */}
        <div className="mb-16">
          <div className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{isZh ? '核心主席团 (Executive Leadership)' : 'Executive Leadership'}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* President: Caroline Lu */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/95 border border-primary/40 relative overflow-hidden shadow-2xl group hover:border-primary transition-all flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary/50 bg-slate-950 flex-shrink-0 shadow-xl shadow-primary/20">
                      <img
                        src={data.president.photo || '/NECINA Leaders.jpg'}
                        alt={data.president.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-primary/30">
                        ★ {isZh ? data.president.role_zh : data.president.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        {data.president.name}
                      </h3>
                      <div className="text-sm font-semibold text-slate-300 mt-1">
                        {isZh ? data.president.name_zh : 'Caroline Lu (吕妤婧)'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {data.president.bioUrl && (
                      <a
                        href={data.president.bioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-xs text-slate-200 transition-colors font-medium"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/30 border border-primary/30 text-xs text-primary transition-colors font-bold"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                  {isZh
                    ? (data.president.bio_zh || '统领 NECINA 2026-2027 年度战略规划与执行，深耕教育赋能与科技社区，致力于推动组织数字化转型、青年跨代传承与全球创新合作网络。')
                    : (data.president.bio || 'Leading NECINA 2026-2027 strategic vision, digital modernization, youth-to-founder entrepreneurial pipelines, and global partnerships.')}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <span className="font-semibold text-primary">
                  {isZh ? '当前任期：2026 – 2027' : 'Current Term: 2026 – 2027'}
                </span>
                <span>{isZh ? '纽英伦中华资讯网络协会' : 'NECINA Executive President'}</span>
              </div>
            </div>

            {/* Adjacent Presidency Leadership: Immediate Past Presidents */}
            <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
              {/* Bing He */}
              {data.vicePresident && (
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 relative overflow-hidden shadow-xl hover:border-primary/40 transition-all flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-slate-950 flex-shrink-0">
                        <img
                          src={data.vicePresident.photo || '/images/board/bing_he.jpg'}
                          alt={data.vicePresident.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1">
                          {isZh ? data.vicePresident.role_zh : data.vicePresident.role}
                        </span>
                        <h4 className="text-lg font-bold text-white">
                          {data.vicePresident.name}
                        </h4>
                        <div className="text-xs text-slate-400">
                          {isZh ? data.vicePresident.name_zh : '何 冰 (Bing He)'}
                        </div>
                      </div>
                    </div>

                    {data.vicePresident.linkedin && (
                      <a
                        href={data.vicePresident.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors"
                        title="LinkedIn"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                    {isZh
                      ? (data.vicePresident.bio_zh || '拥有 25 年以上顶尖硅谷工程管理与企业咨询经验的技术领袖。')
                      : (data.vicePresident.bio || 'Seasoned Silicon Valley engineering leader and enterprise consultant with 25+ years experience.')}
                  </p>
                </div>
              )}

              {/* John Zhuang */}
              {data.immediatePastPresident && (
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 relative overflow-hidden shadow-xl hover:border-primary/40 transition-all flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1">
                        {isZh ? data.immediatePastPresident.role_zh : data.immediatePastPresident.role}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {data.immediatePastPresident.name}
                      </h4>
                      <div className="text-xs text-slate-400">
                        {isZh ? data.immediatePastPresident.name_zh : '庄辉壮 (Huizhuang Zhuang)'}
                      </div>
                    </div>

                    {data.immediatePastPresident.linkedin && (
                      <a
                        href={data.immediatePastPresident.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-colors"
                        title="LinkedIn"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                    {isZh
                      ? (data.immediatePastPresident.bio_zh || '带领 NECINA 顺利完成疫后全面复兴，率先布局生成式 AI 专题系列。')
                      : (data.immediatePastPresident.bio || 'Led NECINA through post-pandemic revitalization, inaugurating AI technical tracks.')}
                  </p>
                </div>
              )}
            </div>
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
