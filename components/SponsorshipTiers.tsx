import React, { useMemo, useState, useRef } from 'react';
import { Check, ChevronDown, ChevronUp, Sparkles, Award, Shield, User, HelpCircle } from 'lucide-react';
import type { Locale, DesignStyle } from '../types';

type Props = {
  locale: Locale;
  designStyle?: DesignStyle;
};

type HighlightBenefit = {
  en: string;
  zh: string;
};

type ViewTier = {
  key: string;
  name: string;
  price: string;
  badge?: { en: string; zh: string };
  badgeClass?: string;
  borderClass?: string;
  glowClass?: string;
  highlights: HighlightBenefit[];
};

const SPONSOR_TIERS_DATA: ViewTier[] = [
  {
    key: 'Diamond',
    name: 'Diamond',
    price: '$20,000',
    badge: { en: 'Elite Partner', zh: '首要合作伙伴' },
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    borderClass: 'border-amber-500/40 hover:border-amber-500/60',
    glowClass: 'shadow-[0_0_50px_rgba(245,158,11,0.15)]',
    highlights: [
      { en: 'Full Page Program Profile', zh: '会刊整页高亮专页介绍' },
      { en: 'Gala Stage Presentation', zh: '晚宴舞台宣讲与自主推介' },
      { en: '10 Conference & 6 Gala Passes', zh: '赠 10 张大会门票 & 6 张晚宴门票' },
      { en: 'Exhibit Booth Space & Promo', zh: '专属参展展位及全套资料分发' },
      { en: '4 VIP Reception Tickets', zh: '4 张 VIP 专享招待会门票' }
    ]
  },
  {
    key: 'Platinum',
    name: 'Platinum',
    price: '$10,000',
    badge: { en: 'Signature Sponsor', zh: '白金主办方' },
    badgeClass: 'bg-slate-300/10 text-slate-200 border-slate-300/20',
    borderClass: 'border-slate-400/30 hover:border-slate-400/60',
    glowClass: 'shadow-[0_0_50px_rgba(203,213,225,0.1)]',
    highlights: [
      { en: 'Full Page Program Profile', zh: '会刊整页图文并茂介绍' },
      { en: 'Gala Stage Presentation', zh: '晚宴舞台宣讲与交流机会' },
      { en: '8 Conference & 5 Gala Passes', zh: '赠 8 张大会门票 & 5 张晚宴门票' },
      { en: 'Exhibit Booth Space & Promo', zh: '专属参展展位及资料宣传' },
      { en: '3 VIP Reception Tickets', zh: '3 张 VIP 专享招待会门票' }
    ]
  },
  {
    key: 'Gold',
    name: 'Gold',
    price: '$5,000',
    badge: { en: 'Major Sponsor', zh: '金牌核心赞助物' },
    badgeClass: 'bg-yellow-600/10 text-yellow-300 border-yellow-600/20',
    borderClass: 'border-yellow-600/30 hover:border-yellow-600/50',
    glowClass: 'shadow-[0_0_40px_rgba(234,179,8,0.06)]',
    highlights: [
      { en: '1/2 Page Program Profile', zh: '会刊半页特约图文介绍' },
      { en: 'Gala Stage Presentation', zh: '晚宴舞台发言与互动' },
      { en: '6 Conference & 4 Gala Passes', zh: '赠 6 张大会门票 & 4 张晚宴门票' },
      { en: 'Exhibit Booth Space & Promo', zh: '专属参展展位及资料宣传' },
      { en: '2 VIP Reception Tickets', zh: '2 张 VIP 专享招待会门票' }
    ]
  },
  {
    key: 'Silver',
    name: 'Silver',
    price: '$3,000',
    borderClass: 'border-slate-600/30 hover:border-[#29B0E9]/50',
    highlights: [
      { en: '1/4 Page Program Profile', zh: '会刊 1/4 页宣传介绍' },
      { en: 'Gala Stage Presentation', zh: '晚宴舞台大会互动交流' },
      { en: '4 Conference & 3 Gala Passes', zh: '赠 4 张大会门票 & 3 张晚宴门票' },
      { en: 'Exhibit Booth Space & Promo', zh: '专属参展展位及资料派发' },
      { en: '2 VIP Reception Tickets', zh: '2 张 VIP 专享招待会门票' }
    ]
  },
  {
    key: 'Bronze',
    name: 'Bronze',
    price: '$1,000',
    borderClass: 'border-slate-600/30 hover:border-[#29B0E9]/50',
    highlights: [
      { en: '1/4 Page Program Profile', zh: '会刊 1/4 页精选展示' },
      { en: 'Gala MC Acknowledgement', zh: '晚宴主持人口头特别致谢' },
      { en: '2 Conference & 2 Gala Passes', zh: '赠 2 张大会门票 & 2 张晚宴门票' },
      { en: 'Exhibit Booth Space & Promo', zh: '提供专属微型展位' },
      { en: '1 VIP Reception Ticket', zh: '1 张 VIP 专享招待会门票' }
    ]
  },
  {
    key: 'Friend',
    name: 'Friend',
    price: '$500',
    borderClass: 'border-slate-600/30 hover:border-[#29B0E9]/50',
    highlights: [
      { en: 'Conference Program Logo', zh: '会刊专属合作伙伴 Logo 展现' },
      { en: 'Website Logo Placement', zh: 'NECINA 官网列名展示' },
      { en: '1 Conference & 1 Gala Pass', zh: '赠 1 张大会门票 & 1 张晚宴门票' },
      { en: 'Gala MC Acknowledgement', zh: '晚宴主持人特别致谢' },
      { en: '2 Free Lifetime Memberships', zh: '2 个免费协会终身会员名额' }
    ]
  }
];

const TABLE_COLUMNS = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze', 'Friend'] as const;

type RowValue = { en: string; zh: string } | string | boolean;

const TABLE_ROWS = [
  {
    id: 'program_profile',
    label: { en: 'Conference Program Ad / Profile', zh: '会刊赞助商页面展示' },
    values: {
      Diamond: { en: 'Full Page', zh: '整页展示' },
      Platinum: { en: 'Full Page', zh: '整页展示' },
      Gold: { en: '1/2 Page', zh: '半页展示' },
      Silver: { en: '1/4 Page', zh: '1/4 页' },
      Bronze: { en: '1/4 Page', zh: '1/4 页' },
      Friend: { en: 'Logo Only', zh: '仅 Logo' }
    }
  },
  {
    id: 'website_logo',
    label: { en: 'Logo on NECINA Website', zh: '官网高亮 Logo 展现' },
    values: {
      Diamond: true,
      Platinum: true,
      Gold: true,
      Silver: true,
      Bronze: true,
      Friend: true
    }
  },
  {
    id: 'stage_intro',
    label: { en: 'Self-intro onstage of Gala dinner', zh: '晚宴主舞台宣讲推介' },
    values: {
      Diamond: true,
      Platinum: true,
      Gold: true,
      Silver: true,
      Bronze: false,
      Friend: false
    }
  },
  {
    id: 'mc_acknowledgement',
    label: { en: 'Acknowledgement by MC of Gala', zh: '晚宴主持人口头特别致谢' },
    values: {
      Diamond: true,
      Platinum: true,
      Gold: true,
      Silver: true,
      Bronze: true,
      Friend: true
    }
  },
  {
    id: 'conference_pass',
    label: { en: 'Complimentary Conference Passes', zh: '赠送大会入场券数量' },
    values: {
      Diamond: '10',
      Platinum: '8',
      Gold: '6',
      Silver: '4',
      Bronze: '2',
      Friend: '1'
    }
  },
  {
    id: 'gala_pass',
    label: { en: 'Complimentary Gala Dinner Passes', zh: '赠送晚宴贵宾券数量' },
    values: {
      Diamond: '6',
      Platinum: '5',
      Gold: '4',
      Silver: '3',
      Bronze: '2',
      Friend: '1'
    }
  },
  {
    id: 'lifetime_membership',
    label: { en: 'Free Lifetime Memberships', zh: '赠送免费协会终身会员' },
    values: {
      Diamond: '20',
      Platinum: '15',
      Gold: '10',
      Silver: '8',
      Bronze: '5',
      Friend: '2'
    }
  },
  {
    id: 'exhibit_booth',
    label: { en: 'Exhibit Booth & Material Distribution', zh: '提供专属微型展位/资料派发' },
    values: {
      Diamond: true,
      Platinum: true,
      Gold: true,
      Silver: true,
      Bronze: true,
      Friend: false
    }
  },
  {
    id: 'vip_tickets',
    label: { en: 'Complimentary VIP Reception Tickets', zh: 'VIP 贵宾专属招待会门票' },
    values: {
      Diamond: '4',
      Platinum: '3',
      Gold: '2',
      Silver: '2',
      Bronze: '1',
      Friend: false
    }
  }
];

export default function SponsorshipTiers({ locale }: Props) {
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  const t = useMemo(() => {
    if (locale === 'zh') {
      return {
        heading: '30周年 合作方案与商机',
        subheading: '精准触达优质资源，携手 NECINA，助力并深度赋能新英格兰地区科技、风投与商业生态。',
        cta: '成为赞助商',
        viewFull: '查看完整权益对比表',
        hideFull: '隐藏权益对比表',
        benefitsComparison: '赞助级别及权益细则对比 Matrix',
        benefitDesc: '赞助级别与核心权益说明',
        footnote: '* 赠送的免费终身会员名额 — 赞助商亦可自由赠予新进高管或关键合作伙伴',
      };
    }
    return {
      heading: '30th Anniversary Sponsorship',
      subheading: 'Partner with NECINA to deeply engage with the technology, investing, and leadership ecosystem.',
      cta: 'Become a Sponsor',
      viewFull: 'View Full Sponsorship Benefits',
      hideFull: 'Hide Detailed Benefit Matrix',
      benefitsComparison: 'Sponsorship Benefit Matrix Comparison',
      benefitDesc: 'Level & Benefit Description',
      footnote: '* Free Lifetime Membership - Sponsor may give away free membership to new potential members or associates',
    };
  }, [locale]);

  const handleToggleTable = () => {
    if (!showTable) {
      setShowTable(true);
      setTimeout(() => {
        tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setShowTable(false);
    }
  };

  const getIconForTier = (tierName: string) => {
    switch (tierName) {
      case 'Diamond':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Platinum':
        return <Award className="w-6 h-6 text-slate-300" />;
      case 'Gold':
        return <Award className="w-6 h-6 text-yellow-500" />;
      default:
        return <Shield className="w-5 h-5 text-sky-400" />;
    }
  };

  const renderValue = (val: RowValue) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <div className="flex justify-center items-center">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
            </span>
          </div>
        );
      } else {
        return <span className="text-white/20 select-none">—</span>;
      }
    }

    if (typeof val === 'object' && val !== null) {
      return <span className="text-white/80 font-medium text-xs">{locale === 'zh' ? val.zh : val.en}</span>;
    }

    return <span className="text-white/80 font-semibold text-xs">{val}</span>;
  };

  return (
    <section className="py-20" id="sponsorship" style={{ background: '#070B14', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm mt-3 text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 6 Grid layout - Balanced Heights and Subtle Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {SPONSOR_TIERS_DATA.map((tier) => (
            <div
              key={tier.key}
              className={`flex flex-col relative rounded-2xl border p-6 md:p-7 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] bg-slate-900/40 relative overflow-hidden ${
                tier.borderClass || 'border-white/10 hover:border-white/20'
              } ${tier.glowClass || ''}`}
            >
              {/* Optional glowing backgrounds for Elite columns */}
              {tier.key === 'Diamond' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Badge for High level hierarchy */}
              {tier.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border ${tier.badgeClass}`}>
                    {locale === 'zh' ? tier.badge.zh : tier.badge.en}
                  </span>
                </div>
              )}

              {/* Title & Icon Header */}
              <div className="flex items-center gap-2.5 mb-2.5">
                {getIconForTier(tier.name)}
                <span className="text-lg font-bold text-white tracking-tight">
                  {tier.name}
                </span>
              </div>

              {/* Price Tag with larger font weight for visual focus */}
              <div className="text-2xl sm:text-3xl font-black text-white mb-5 flex items-baseline gap-1">
                {tier.price}
              </div>

              {/* Shorter, highly concise highlight benefits list (Only 3-5 rows) */}
              <div className="space-y-3 mb-6 flex-1 text-xs text-white/70">
                {tier.highlights.map((item, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#29B0E9]" strokeWidth={2.5} />
                    </span>
                    <span className="leading-relaxed">{locale === 'zh' ? item.zh : item.en}</span>
                  </div>
                ))}
              </div>

              {/* Button "Become a Sponsor" */}
              <a
                href="mailto:contact@necina.org"
                className="w-full text-center py-2.5 rounded-xl font-bold text-xs transition-all bg-[#0d1e36] text-white border border-[#29B0E9]/30 hover:border-[#29B0E9]/80 hover:bg-[#132c4f] hover:scale-[1.02] duration-300 shadow-md"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Action Button: To look up matrix table below */}
        <div className="mt-12 text-center">
          <button
            onClick={handleToggleTable}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#29B0E9]/30 text-white hover:text-[#29B0E9] hover:bg-[#29B0E9]/10 text-xs font-bold transition-all duration-350 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(41,176,233,0.15)] bg-slate-900/60"
          >
            <span>{showTable ? t.hideFull : t.viewFull}</span>
            {showTable ? (
              <ChevronUp className="w-4 h-4 text-[#29B0E9]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#29B0E9]" />
            )}
          </button>
        </div>

        {/* Collagen Comparison Matrix Section */}
        {showTable && (
          <div
            ref={tableRef}
            className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-lg p-5 sm:p-6 shadow-2xl transition-all duration-500 animate-fadeIn"
          >
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-[#29B0E9]" />
                {t.benefitsComparison}
              </h3>
            </div>

            {/* Horizontal Scroll wrapper for responsive mobile display */}
            <div className="overflow-x-auto select-none rounded-xl border border-white/5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <table className="w-full min-w-[800px] text-center border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-white/10">
                    <th className="py-4 px-5 text-left text-[11px] uppercase tracking-widest text-[#29B0E9] font-black w-[280px]">
                      {t.benefitDesc}
                    </th>
                    {TABLE_COLUMNS.map((col) => (
                      <th key={col} className="py-4 px-3 text-[11px] uppercase tracking-widest font-black text-white">
                        <div className="flex flex-col items-center gap-0.5">
                          <span className={`${col === 'Diamond' ? 'text-amber-400' : col === 'Platinum' ? 'text-slate-300' : 'text-white'}`}>
                            {col}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {TABLE_ROWS.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3.5 px-5 text-left text-xs font-semibold text-white/95 border-r border-white/5 whitespace-normal leading-normal max-w-[280px]">
                        {locale === 'zh' ? row.label.zh : row.label.en}
                      </td>
                      {TABLE_COLUMNS.map((col) => (
                        <td key={col} className="py-3.5 px-3 text-xs border-r border-white/5 last:border-r-0">
                          {renderValue(row.values[col])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote instruction */}
            <p className="mt-4 text-[10px] text-white/40 italic leading-normal">
              {t.footnote}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
