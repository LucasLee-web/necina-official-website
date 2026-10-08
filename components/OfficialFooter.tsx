import React from 'react';
import { Link } from 'react-router-dom';
import type { Locale } from '../types';

interface OfficialFooterProps {
  locale: Locale;
}

export const OfficialFooter: React.FC<OfficialFooterProps> = ({ locale }) => {
  const isZh = locale === 'zh';

  const t = {
    tagline: isZh
      ? '自 1996 年以来，赋能专业人士、创业者与青年学子。纽英伦中华资讯网络协会是一家经美国国税局批准的 501(c)(3) 免税非营利机构。'
      : 'Empowering professionals, entrepreneurs, and students across New England since 1996. NECINA is an IRS-recognized 501(c)(3) non-profit organization.',
    quickLinks: isZh ? '网站导航' : 'Quick Links',
    initiatives: isZh ? '核心项目' : 'Key Programs',
    contactTitle: isZh ? '联系我们' : 'Contact & Connect',
    home: isZh ? '首页' : 'Home',
    about: isZh ? '关于我们' : 'About Us',
    leadership: isZh ? '领导架构与董事会' : 'Leadership & Board',
    programs: isZh ? '项目纵览' : 'All Programs',
    events: isZh ? '活动资讯' : 'Events & News',
    media: isZh ? '媒体中心' : 'Media Center',
    getInvolved: isZh ? '加入参与' : 'Get Involved',
    anniversary: isZh ? '30 周年盛典' : '30th Anniversary',
    membership: isZh ? '会员权益' : 'Membership',
    volunteer: isZh ? '志愿者招募' : 'Volunteering',
    sponsorship: isZh ? '企业赞助' : 'Sponsorship',
    address: isZh ? '总部：大波士顿地区，马萨诸塞州' : 'Greater Boston Area, Massachusetts, USA',
    rights: isZh ? '版权所有。' : 'All rights reserved.'
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                N
              </div>
              <span className="text-2xl font-black text-white tracking-tight">NECINA</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              EIN / 501(c)(3) Tax-Exempt Non-Profit Public Charity
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t.home}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t.about}</Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors">{t.leadership}</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">{t.events}</Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">{t.media}</Link>
              </li>
              <li>
                <Link to="/anniversary" className="text-primary hover:underline transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t.anniversary}
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Programs (9 Official Programs) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {t.initiatives}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/programs/youth-impact-program" className="hover:text-white transition-colors">
                  Youth Impact Program
                </Link>
              </li>
              <li>
                <Link to="/programs/yes-youth-entrepreneurship" className="hover:text-white transition-colors">
                  YES - Youth Entrepreneurship
                </Link>
              </li>
              <li>
                <Link to="/programs/innovation-ntc-conference" className="hover:text-white transition-colors">
                  Innovation NTC Conference
                </Link>
              </li>
              <li>
                <Link to="/programs/innovation-abc-platform" className="hover:text-white transition-colors">
                  Innovation ABC Platform
                </Link>
              </li>
              <li>
                <Link to="/programs/innovation-sig-groups" className="hover:text-white transition-colors">
                  Innovation SIG Groups
                </Link>
              </li>
              <li>
                <Link to="/programs/entrepreneur-nic-challenge" className="hover:text-white transition-colors">
                  Entrepreneur NIC Challenge
                </Link>
              </li>
              <li>
                <Link to="/programs/entrepreneur-cld-leadership" className="hover:text-white transition-colors">
                  Entrepreneur CLD Leadership
                </Link>
              </li>
              <li>
                <Link to="/programs/necina-clubs" className="hover:text-white transition-colors">
                  NECINA Clubs
                </Link>
              </li>
              <li>
                <Link to="/programs/necina-chapters" className="hover:text-white transition-colors">
                  NECINA Chapters
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {t.contactTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                <span className="text-white block font-medium">Email</span>
                <a href="mailto:contact@necina.org" className="text-primary hover:underline">
                  contact@necina.org
                </a>
              </p>
              <p className="text-slate-400">
                <span className="text-white block font-medium">Membership Portal</span>
                <a
                  href="https://app.joinit.com/o/necina-boston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  joinit.com/o/necina-boston
                </a>
              </p>
              <p className="text-xs text-slate-500 pt-1">
                {t.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NECINA. {t.rights}</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">About</Link>
            <Link to="/get-involved" className="hover:text-slate-400 transition-colors">Join</Link>
            <Link to="/anniversary" className="hover:text-slate-400 transition-colors">30th Gala</Link>
            <a href="mailto:contact@necina.org" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OfficialFooter;
