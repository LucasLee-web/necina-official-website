import type { Locale } from './types';

export interface ProgramMentor {
  name: string;
  role: string;
  role_zh: string;
  company?: string;
  image?: string;
  linkedin?: string;
}

export interface ProgramModule {
  title: string;
  title_zh: string;
  description: string;
  description_zh?: string;
  dateOrDuration?: string;
}

export interface ProgramJobPost {
  title: string;
  title_zh: string;
  company: string;
  type: string;
  type_zh: string;
  industry: string;
  industry_zh: string;
  description: string;
  description_zh: string;
  logo?: string;
}

export interface OfficialProgram {
  id: number;
  slug: string;
  name: string;
  name_zh: string;
  shortName: string;
  category: 'youth' | 'innovation' | 'entrepreneur' | 'community';
  categoryLabel: string;
  categoryLabel_zh: string;
  sourceUrl: string;
  tagline: string;
  tagline_zh: string;
  intro: string;
  intro_zh: string;
  overview: string[];
  overview_zh: string[];
  heroImage?: string;
  statusBadge: string;
  statusBadge_zh: string;
  established?: string;
  location?: string;
  location_zh?: string;
  audience: string;
  audience_zh: string;
  highlights: string[];
  highlights_zh: string[];
  modules?: ProgramModule[];
  mentors?: ProgramMentor[];
  jobPosts?: ProgramJobPost[];
  trackRecord?: string[];
  trackRecord_zh?: string[];
  chaptersList?: {
    category: string;
    category_zh: string;
    items: string[];
  }[];
  activities?: {
    title: string;
    title_zh: string;
    description: string;
    description_zh: string;
    image?: string;
  }[];
  applicationInfo: {
    status: string;
    status_zh: string;
    applyUrl?: string;
    applyText?: string;
    applyText_zh?: string;
    contactEmail: string;
    externalPortalUrl?: string;
    externalPortalText?: string;
  };
  galleryImages?: {
    src: string;
    alt: string;
    caption: string;
    caption_zh: string;
  }[];
}

export const OFFICIAL_PROGRAMS: OfficialProgram[] = [
  // 1. Youth Impact Program
  {
    id: 1,
    slug: 'youth-impact-program',
    name: 'Youth Impact Program',
    name_zh: 'Youth Impact Program (青年影响力计划)',
    shortName: 'YIP',
    category: 'youth',
    categoryLabel: 'Youth & Leadership',
    categoryLabel_zh: '青年与领导力',
    sourceUrl: 'https://necina.org/content/youth-impact-program',
    tagline: 'Ready to Shape the Next Generation of Leaders?',
    tagline_zh: '准备好塑造下一代青年领袖了吗？',
    intro: 'A premier initiative empowering high school and college students to build real-world venture experience, guided by elite collegiate mentors and seasoned industry executives.',
    intro_zh: '专为高中生和大学生打造的标杆性赋能计划，由顶尖名校大学生导师和资深行业高管带队，深入体验真实商业与社会影响力创业。',
    overview: [
      'Whether you are a student looking to build real-world venture experience or an industry professional looking to mentor top-tier young talent, we want you involved.',
      'The Youth Impact Program bridges generational divides by pairing high school participants with high-achieving college mentors from Harvard, Columbia, Duke Law, and Babson, providing hands-on project-based venture training.',
      'Participants develop leadership, team collaboration, public pitching, and entrepreneurial execution while tackling meaningful community and technological challenges.'
    ],
    overview_zh: [
      '无论您是渴望积累实操创业经验的学生，还是希望辅导顶尖年轻人才的行业专业人士，我们都真诚欢迎您的加入。',
      '青年影响力计划通过跨代际传承体系，将高中学员与来自哈佛、哥伦比亚大学、杜克大学法学院和百森商学院的优秀大学导师结对，开展基于项目的实战创业训练。',
      '学员将在解决具有现实意义的社区及科技挑战过程中，全面提升领导力、团队协作、公众路演和商业执行力。'
    ],
    heroImage: '/programs/youth_impact_team.png',
    statusBadge: 'Applications for Fall 2026 Open July 1st',
    statusBadge_zh: '2026 年秋季批次申请将于 7 月 1 日开放',
    established: '2024',
    audience: 'High school students (grades 9-12) & college undergraduates',
    audience_zh: '9-12 年级高中生及在校大学生',
    highlights: [
      'Direct pairing with Ivy League & top-tier college mentors',
      'Hands-on venture creation and real-world project incubation',
      'Guidance on college admissions, leadership portfolios, and career trajectory',
      'Final project showcase presented to venture capitalists and corporate leaders'
    ],
    highlights_zh: [
      '常春藤名校及顶尖大学导师一对一专项辅导',
      '实战型社会影响力创业项目孵化与动手实践',
      '名校升学背景打造、领导力成果集建设及职业长远规划',
      '面向知名风险投资人与企业高管的年度结业项目路演'
    ],
    mentors: [
      {
        name: 'Sophie Xu',
        role: 'Program Director',
        role_zh: '项目总监',
        company: 'NECINA Leadership',
        linkedin: 'https://www.linkedin.com/in/sophiexuu/'
      },
      {
        name: 'Rory Li',
        role: 'College Mentor — Incoming JD Student',
        role_zh: '大学导师 —— 杜克大学法学院法学博士生',
        company: 'Duke Law School'
      },
      {
        name: 'Grade Luo',
        role: 'College Mentor — Math + Neuro',
        role_zh: '大学导师 —— 数学与神经科学专业',
        company: 'Harvard University'
      },
      {
        name: 'Sophia Hann',
        role: 'College Mentor',
        role_zh: '大学导师',
        company: 'Columbia University'
      },
      {
        name: 'Annie Chan',
        role: 'College Mentor',
        role_zh: '大学导师',
        company: 'Babson College'
      },
      {
        name: 'Michelle Liu',
        role: 'High School Officer',
        role_zh: '高中部干事',
        company: 'High School Junior'
      },
      {
        name: 'Ivan Chan',
        role: 'High School Officer',
        role_zh: '高中部干事',
        company: 'High School Junior'
      },
      {
        name: 'Lucas Cao',
        role: 'High School Officer',
        role_zh: '高中部干事',
        company: 'High School Sophomore'
      },
      {
        name: 'Austin Xu',
        role: 'High School Officer',
        role_zh: '高中部干事',
        company: 'High School Freshman'
      }
    ],
    applicationInfo: {
      status: 'Applications for the Fall 2026, open July 1st.',
      status_zh: '2026 年秋季批次申请将于 7 月 1 日正式开放。',
      contactEmail: 'info@necina.org'
    },
    galleryImages: [
      {
        src: '/programs/youth_impact_team.png',
        alt: 'The Changemakers of Youth Impact Program',
        caption: 'The Changemakers — Youth Impact Program Leadership Team',
        caption_zh: '青年影响力计划领导团队合影（The Changemakers）'
      }
    ]
  },

  // 2. YES - Youth Entrepreneurship
  {
    id: 2,
    slug: 'yes-youth-entrepreneurship',
    name: 'YES - Youth Entrepreneurship',
    name_zh: 'YES - Youth Entrepreneurship (青年创业服务)',
    shortName: 'YES',
    category: 'youth',
    categoryLabel: 'Youth Entrepreneurship',
    categoryLabel_zh: '青年创业孵化',
    sourceUrl: 'https://necina.org/content/yes-yes-200',
    tagline: 'Youth Entrepreneurship Service (YES-20) — Empowering Innovators Since 2005',
    tagline_zh: '青年创业服务 (YES-20) —— 自 2005 年起培育青年创业精神与商业思维',
    intro: 'NECINA’s flagship youth development initiative tailored for high school students to learn entrepreneurship, team dynamics, and business planning from experienced founders.',
    intro_zh: 'NECINA 最具声誉的旗舰青年培养计划，专为高中生量身定制，通过系统性商业课程、实战团队演练与高管导师辅导，全面培养领袖才能。',
    overview: [
      'Founded in 2005, YES is tailored for high school students to discover their passions in science, technology, business, and philanthropy.',
      'Through Project-Based Learning, participants learn to think, listen, and act as founders, developing complete business ideas and competing in the annual Business Plan Contest.',
      'Top-performing teams earn substantial cash prizes and eligibility for corporate internships with sponsor enterprises. Parents are warmly encouraged to join NECINA as active members.'
    ],
    overview_zh: [
      'YES 项目创立于 2005 年，专为高中学子量身设计，帮助年轻一代发掘对科学、科技、商业和公益事业的热情。',
      '通过基于项目的实战学习（PBL），学员学会像创始人一样思考、倾听与行动，打磨出兼具商业潜力与技术可行性的商业计划，并角逐年度商业计划书大赛。',
      '优胜团队将获得丰厚的现金奖金，并有机会获得知名赞助企业的实战实习机会。我们热忱欢迎 YES 学员家长加入 NECINA 会员生态。'
    ],
    heroImage: '/yes_group_photo.jpg',
    statusBadge: 'YES 20.0 Workshop Sessions Active',
    statusBadge_zh: 'YES 20.0 实战工作坊持续开展中',
    established: '2005',
    location: 'Lexington Community Center (39 Marrett Rd, Lexington, MA 02421)',
    location_zh: '莱克星顿社区中心 (39 Marrett Rd, Lexington, MA 02421)',
    audience: 'High school students (grades 9-12) & ambitious youth founders',
    audience_zh: '9-12 年级高中生及志在创业的青年学子',
    highlights: [
      'Think Differently — Learn to listen, think, and act as a founder and team leader',
      'Build Business Knowledge — Gain executive business knowledge not taught in high school curricula',
      'Discover Solutions — Leverage emerging technology trends to solve real-world community problems',
      'Team Building & Management — Form and lead high-performing teams with diverse peers',
      'Venture Pitch Competition — Present refined business ideas to a panel of venture capitalists and CEOs',
      'Corporate Internships — Top finalists considered for internships at sponsor companies'
    ],
    highlights_zh: [
      '颠覆性商业思维 —— 学会像初创团队创始人一样高效思考、倾听与果断行动',
      '拓展商业综合知识 —— 学习高中课堂无法接触到的实战商业、金融与营销知识体系',
      '寻找技术落地解法 —— 探索前沿科技趋势，针对现实生活与社会痛点研发商业方案',
      '卓越团队协作管理 —— 与志同道合的同龄伙伴组建互补型高战斗力团队',
      '真实路演投融资答辩 —— 面向资深风险投资家与科技企业总裁进行商业计划路演',
      '名企实战实习机会 —— 大赛获奖优胜团队将优先获得赞助企业的暑期实习推荐'
    ],
    modules: [
      {
        title: 'Session 1: Entrepreneurship 101 and Ideation',
        title_zh: '第一模块：创业基础认知与商业构想萌发',
        description: 'Introduction to market problem discovery, customer empathy, and generating defensible startup ideas.',
        description_zh: '市场痛点发掘、客户共情分析、商业模式画布初步构建与可行性构想发散。',
        dateOrDuration: '08/09/2025 • 9:30 AM - 12:30 PM (Saturday)'
      },
      {
        title: 'Session 2: Market Validation & Customer Interviews',
        title_zh: '第二模块：市场验证与目标客户实战调研',
        description: 'Conducting customer discovery, analyzing competitors, and refining the value proposition.',
        description_zh: '开展目标客户访谈验证、竞品深度调研、提炼核心差异化价值主张。'
      },
      {
        title: 'Session 3: Marketing, Sales Cycles & Go-To-Market',
        title_zh: '第三模块：市场营销、销售闭环与获客策略',
        description: 'B2B/B2C customer acquisition funnels, digital marketing channels, and brand positioning.',
        description_zh: 'B2B 与 B2C 获客漏斗拆解、全网数字营销渠道搭建与品牌差异化定位策略。'
      },
      {
        title: 'Session 4: Unit Economics & Financial Modeling',
        title_zh: '第四模块：财务建模、单店模型与现金流管理',
        description: 'Pricing models, startup cost projections, gross margins, and seed funding math.',
        description_zh: '定价策略、初创成本预算、毛利率测算与种子轮融资财务模型实战演练。'
      },
      {
        title: 'Session 5: Mentor Teardowns & Dry-Run Reviews',
        title_zh: '第五模块：导师闭门一对一辅导与模拟路演复盘',
        description: 'Intensive 1-on-1 feedback sessions with serial entrepreneurs and venture capital judges.',
        description_zh: '与连续创业者及风险投资评审进行闭门一对一打磨与高强度模拟答辩。'
      },
      {
        title: 'Session 6: Capstone Business Plan Pitch Gala',
        title_zh: '第六模块：YES 商业计划书全场总决赛路演',
        description: 'Live pitch showcase in front of industry judges, family, and peers with cash prize distribution.',
        description_zh: '面向资深行业评委、投资人与社区公众的线下盛大路演，评选优胜奖项并颁发丰厚奖金。'
      }
    ],
    applicationInfo: {
      status: 'Open for Registration (Workshops Saturday mornings)',
      status_zh: '工作坊报名开放中（周六上午现场授课）',
      applyUrl: 'https://tinyurl.com/YES-19-Registration',
      applyText: 'SIGN UP AT GOOGLE FORM',
      applyText_zh: '前往 Google 报名表单',
      contactEmail: 'yes@necina.org'
    },
    galleryImages: [
      {
        src: '/yes_group_photo.jpg',
        alt: 'YES Program Cohort and Mentors',
        caption: 'YES 20.0 Cohort, Faculty and Executive Mentors at Lexington Community Center',
        caption_zh: 'YES 20.0 莱克星顿社区中心学员、导师与嘉宾大合影'
      }
    ]
  },

  // 3. Innovation NTC Conference
  {
    id: 3,
    slug: 'innovation-ntc-conference',
    name: 'Innovation NTC Conference',
    name_zh: 'Innovation NTC Conference (NTC 年度科技峰会)',
    shortName: 'NTC',
    category: 'innovation',
    categoryLabel: 'Flagship Conferences',
    categoryLabel_zh: '旗舰行业盛会',
    sourceUrl: 'https://necina.org/content/conferences',
    tagline: 'NECINA Premier Technology Conferences & High-Impact Domain Summits',
    tagline_zh: '汇聚前沿科技变革与华人商业领袖的旗舰盛典与垂直峰会',
    intro: 'Since 1996, NECINA’s flagship annual conference (NTC) and thematic summits have brought together thousands of innovators, corporate executives, and researchers.',
    intro_zh: '自 1996 年以来，NECINA 年度科技峰会（NTC）及系列垂直前沿专题大会，已成为新英格兰地区连接学术界、工业界与创新投资圈的标志性高端交流高地。',
    overview: [
      'The Innovation NTC Conference serves as the crown jewel of NECINA’s annual calendar, featuring globally renowned keynote speakers, thought-provoking panel discussions, and high-impact innovation showcases.',
      'Complementing the annual flagship conference, NECINA hosts eight specialized conference tracks throughout the calendar year, focusing on Artificial Intelligence, China-US cross-border innovation, medical devices, IoT, and leadership career growth.',
      'Attendees include Fortune 500 technology leaders, university research fellows from Harvard, MIT, and Boston University, promising startup founders, and angel investors.'
    ],
    overview_zh: [
      'NTC 年度科技峰会是 NECINA 全年活动日历中的重中之重，特邀享誉全球的主旨演讲嘉宾、高规格闭门圆桌论坛及前沿技术成果展示。',
      '除年度旗舰大会外，NECINA 贯穿全年定期组织八大系列专题大会，涵盖人工智能、中美科技合作、医疗器械与生命科学、物联网以及职场高管成长。',
      '参会者涵盖世界 500 强科技公司高管、来自哈佛、MIT、波士顿大学的顶尖学者、极具成长潜力的初创企业创始人与天使投资机构。'
    ],
    heroImage: '/necina_tech_workshop.jpg',
    statusBadge: 'Annual Conference & Symposia Series',
    statusBadge_zh: '年度大会与专题研讨会系列',
    established: '1996',
    audience: 'Technology professionals, engineering leaders, entrepreneurs, and researchers',
    audience_zh: '科技专业人士、工程总监、创业团队与高校科研人员',
    highlights: [
      'Keynotes by world-renowned scientists, Turing / Nobel laureates, and tech founders',
      'Panel discussions tackling disruptive technological shifts and market trends',
      'Innovation showcase featuring emerging startup prototypes and commercial demos',
      'Executive networking banquets connecting over 5,000 community professionals'
    ],
    highlights_zh: [
      '享誉全球的顶级科学家、图灵奖/诺奖得主与科技独角兽创始人主旨演讲',
      '深度剖析前沿技术变革、宏观资本走势与行业破局痛点的专题论坛',
      '汇聚早期高科技初创企业原型、专利成果与商业 Demo 的创新展区',
      '连接 5,000+ 专业会员与跨国企业高管的闭门交流晚宴与对接平台'
    ],
    modules: [
      {
        title: 'NECINA Annual Conference (NTC)',
        title_zh: 'NECINA 年度科技盛典 (NTC)',
        description: 'The premier annual gathering bringing together the entire New England high-tech ecosystem to celebrate innovation, visionary leadership, and community impact.'
      },
      {
        title: 'Artificial Intelligence and Deep Learning Conference (ABC)',
        title_zh: '人工智能与深度学习大会 (ABC)',
        description: 'Dedicated to generative AI, large language models, autonomous agents, computer vision, and neural compute infrastructure.'
      },
      {
        title: 'China Conference (SIG)',
        title_zh: '中国与全球科技合作峰会 (SIG)',
        description: 'Exploring cross-border market synergies, international venture capital trends, and bilateral technological advancements.'
      },
      {
        title: 'CABA / NECINA Medical Device Symposium (SIG)',
        title_zh: 'CABA / NECINA 医疗器械与前沿生物技术研讨会 (SIG)',
        description: 'Joint symposium with the Chinese American Biomedical Association spotlighting medtech breakthroughs, FDA regulations, and diagnostic innovations.'
      },
      {
        title: 'Leadership Career Development Conference (CLD)',
        title_zh: '职场与领导力进阶大会 (CLD)',
        description: 'Focusing on executive presence, climbing the corporate ladder, engineering-to-management transitions, and tech executive coaching.'
      },
      {
        title: 'Internet of Things Conference (SIG)',
        title_zh: '物联网与边缘智能大会 (SIG)',
        description: 'Smart devices, industrial robotics, embedded microcontrollers, and real-world deployment of edge intelligence in New England.'
      },
      {
        title: 'YES Final Competition (YES)',
        title_zh: 'YES 青年创业总决赛 (YES Final Competition)',
        description: 'The culminating showcase where the region’s brightest high school teams pitch their business models to venture capital judges for cash awards.'
      },
      {
        title: 'NIC-NEW 5.0 Business Competition & Demo Day (NIC)',
        title_zh: 'NIC-NEW 创新挑战总决选与投资人 Demo Day',
        description: 'High-stakes accelerator pitch showcase where vetted tech startups present to angel syndicates, institutional VCs, and corporate acquirers.'
      }
    ],
    applicationInfo: {
      status: 'Annual Schedule Announced Seasonally',
      status_zh: '各季度峰会日程定期发布',
      contactEmail: 'conference@necina.org'
    }
  },

  // 4. Innovation ABC Platform
  {
    id: 4,
    slug: 'innovation-abc-platform',
    name: 'Innovation ABC Platform',
    name_zh: 'Innovation ABC Platform (ABC-NEW 5.0 创新加速平台)',
    shortName: 'NEW',
    category: 'innovation',
    categoryLabel: 'Venture Accelerator',
    categoryLabel_zh: '创业加速器',
    sourceUrl: 'https://necina.org/content/new-50',
    tagline: 'By Entrepreneurs, For Entrepreneurs — Six Months of Systematic Venture Acceleration',
    tagline_zh: '源自创业家，赋能创业家 —— 历时 6 个月的全方位系统化初创加速营',
    intro: 'The NEW Accelerator (NECINA Entrepreneur Workshop) is a high-impact business accelerator helping technology founders validate business models, recruit teams, and secure funding.',
    intro_zh: 'NEW 创业加速营（涵盖人工智能、区块链、物联网与数字健康）是 NECINA 面向早期与成长期科技初创企业的加速赋能矩阵，助力完成商业模型打磨、团队招募与资本对接。',
    overview: [
      'By Entrepreneurs, For Entrepreneurs: The NEW Accelerator organizes six months of systematic workshops and rich networking where cohort teams meet monthly at the heart of Boston’s innovation hub.',
      'Four Focus Tracks: FinTech & Blockchain, Machine Learning & AI, Healthcare IT (partnered with Harvard Medical School), and Internet of Things.',
      'Participating teams receive 1-on-1 mentorship from seasoned operators, pitch to top-tier VCs, recruit at NECINA job fairs, and compete for $10,000+ in non-dilutive cash prizes at the annual conference Demo Day.'
    ],
    overview_zh: [
      '源自创业家，赋能创业家：NEW 加速营组织历时半年的系统化进阶工坊与深度人脉网络，入选团队每月在波士顿核心科技创新枢纽聚会复盘。',
      '四大专注赛道：金融科技与区块链、机器学习与人工智能、医疗健康数字化（携手哈佛医学院伙伴）以及物联网智能硬件。',
      '入选团队享受连续创业高管一对一实战辅导，直通一线创投合伙人，在 NECINA 招聘会设立展台招募核心成员，并在年度总决赛角逐万元现金奖励与投资直通车。'
    ],
    heroImage: '/programs/abc_new_banner.jpeg',
    statusBadge: 'Acceleration Tracks Active',
    statusBadge_zh: '创业加速赛道持续赋能中',
    established: '2014',
    audience: 'Early-stage tech founders, growth companies (Series A/B), aspiring tech entrepreneurs, and university student builders',
    audience_zh: '早期科技创业团队、成长型企业（A/B 轮）、寻求创业机会的职场精英及高校创业团队',
    highlights: [
      'FinTech & Blockchain Track: Enterprise smart contracts, cryptographic protocols, and financial infrastructure',
      'Machine Learning Track: Applying cutting-edge ML models to solve real enterprise customer workflows',
      'Healthcare IT Track: Solving clinical and diagnostic pain points, co-organized with medical innovators',
      'Internet of Things Track: Edge hardware deployment, wireless communications, and smart device monetization',
      'Monthly Workshops with high-profile guest lectures on GTM, SaaS pricing, legal structuring, and IP strategy',
      'Vendor booth at the NECINA Career Fair to recruit top software engineers and interns',
      'Final Pitch Competition for $10,000 cash prizes in front of institutional venture funds and angels'
    ],
    highlights_zh: [
      '金融科技与区块链赛道：赋能金融基础设施升级、去中心化商业模式与智能合约应用',
      '机器学习赛道：聚焦企业级工作流自动化、前沿大模型工程落地与实际业务赋能',
      '医疗健康数字化赛道：联合哈佛医学院生态伙伴，攻关临床诊断、数字疗法与医疗数据痛点',
      '物联网智能硬件赛道：攻关边缘计算、智能终端架构、软硬件协同与商业化变现',
      '每月进阶大师课：资深操盘手现场拆解 GTM 获客漏斗、SaaS 定价模型、公司股权法务与专利布局',
      '专属招聘展位特权：在 NECINA 官方招聘会设立展台，高效招募核心研发工程师与业务合伙人',
      '万元现金总决赛路演：在顶级风险投资机构合伙人与知名天使投资人面前路演，角逐非稀释性奖金'
    ],
    mentors: [
      {
        name: 'Edgar Marsi',
        role: 'CEO and President',
        role_zh: '总裁兼首席执行官',
        company: 'Qualtré Inc.',
        image: '/programs/new_mentor1.jpg'
      },
      {
        name: 'Sheldon Borkin',
        role: 'Managing Partner',
        role_zh: '管理合伙人',
        company: 'Strategic Angles',
        image: '/programs/new_mentor2.jpg'
      },
      {
        name: 'Wan Li Zhu',
        role: 'Principal',
        role_zh: '合伙人 / 投资总监',
        company: 'Fairhaven Capital',
        image: '/programs/new_mentor3.jpg'
      },
      {
        name: 'Tina Weber',
        role: 'Founder / CEO of A Starting Line',
        role_zh: '创始人兼首席执行官 / 精益创业总监',
        company: 'Director of Lean Startup',
        image: '/programs/new_mentor4.jpg'
      },
      {
        name: 'Patricio Feder',
        role: 'Director of Marketing',
        role_zh: '市场营销总监',
        company: 'Brunswick Laboratories',
        image: '/programs/new_mentor5.jpg'
      },
      {
        name: 'Jake Simpson',
        role: 'Divisional Vice President (DVP) & General Manager',
        role_zh: '事业部副总裁兼总经理',
        company: 'PTC',
        image: '/programs/new_mentor6.jpg'
      }
    ],
    trackRecord: [
      'NuVolta Technology — Built business strategy throughout NEW program, raised $4M, now operating in the Bay Area and Shanghai.',
      'AiZhiBo TV — Raised $1.2M+, successfully scaling operations in Greater China.',
      'SmartWok — Closed angel round and advanced to Series A institutional round.',
      'TVision Insight — Closed first institutional round, admitted to Techstars New York, recipient of MassChallenge Diamond Award.',
      'Blanc — Successfully scaled and completed M&A exit.',
      'Dreamech — Launched and operating profitably in the United States.',
      'LeanGap — Founded and launched by alumni of the NEW accelerator.',
      'eShip — Successfully landed and scaled logistics operations in Hangzhou, China.'
    ],
    trackRecord_zh: [
      'NuVolta Technology —— 在 NEW 加速营期间完成商业战略升级，顺利募集 400 万美元，现设立于硅谷湾区与上海。',
      '爱直播 (AiZhiBo TV) —— 成功募集 120 万+ 美元融资，业务全面拓展至大中华区。',
      'SmartWok (智能炒菜机器人) —— 完成天使轮融资，顺利推进 A 轮融资。',
      'TVision Insight —— 完成首轮机构融资，入选纽约 Techstars，荣获 MassChallenge 顶级钻石大奖。',
      'Blanc —— 成功完成规模化扩张并实现并购退出。',
      'Dreamech —— 成功在美启动并在多个垂直市场稳健运营。',
      'LeanGap —— 由 NEW 加速营校友创办的高中生高强度创业训练平台。',
      'eShip (易运跨境) —— 成功落地中国杭州高新区并实现规模化物流供应链覆盖。'
    ],
    modules: [
      {
        title: 'Month 1: Blockchain & Cryptoeconomics Deep-Dive',
        title_zh: '首月工坊：区块链、加密经济学与金融科技底层架构',
        description: 'Deconstructing smart contracts, consensus protocols, and commercial enterprise adoption.'
      },
      {
        title: 'Month 2: Machine Learning & Generative Architectures',
        title_zh: '次月工坊：机器学习、生成式模型与企业级自动化落地',
        description: 'Algorithm deployment, vector databases, unit economics of AI compute, and defensible moats.'
      },
      {
        title: 'Month 3: Healthcare IT & Biotech Innovation',
        title_zh: '第三月工坊：数字医疗、临床痛点与跨界生物医药技术',
        description: 'Organized in partnership with Harvard Medical School researchers and medtech regulators.'
      },
      {
        title: 'Month 4: IoT, Edge Devices & Supply Chain Hardware',
        title_zh: '第四月工坊：物联网硬件架构、嵌入式系统与供应链量产',
        description: 'Prototyping, overseas supply chain coordination, hardware certifications, and pricing.'
      },
      {
        title: 'Month 5: Final Competition ($10,000 Cash Prizes)',
        title_zh: '第五月：万元现金大奖总决赛路演闭门评选',
        description: 'Judged by veteran industrial leaders, institutional VCs, and prominent angel investors.'
      },
      {
        title: 'Month 6: Demo Day Showcase at NECINA Annual Conference',
        title_zh: '第六月：NECINA 年度盛典投资人 Demo Day 高光展示',
        description: 'Presenting to over 500 conference attendees, corporate acquirers, and media partners.'
      }
    ],
    applicationInfo: {
      status: 'Open for Rolling Application Submissions',
      status_zh: '滚动申请开放中',
      applyUrl: 'https://docs.google.com/forms/d/1z96ixSJdTTbP-4Rdpkz87AlzfTWYeo49SLJIwh66ISk/edit',
      applyText: 'APPLY VIA GOOGLE FORM',
      applyText_zh: '前往 Google 申请表单',
      contactEmail: 'arthur.xu@necina.org'
    },
    galleryImages: [
      {
        src: '/programs/abc_new_banner.jpeg',
        alt: 'NECINA NEW 5.0 Accelerator Banner',
        caption: 'ABC-NEW 5.0 Accelerator Official Program Banner',
        caption_zh: 'ABC-NEW 5.0 创业加速器官方主视觉'
      },
      {
        src: '/programs/new_startups_wall.png',
        alt: 'NEW Program Startup Graduates',
        caption: 'Partial Showcase of Successful Startups Graduated from NEW Accelerator',
        caption_zh: 'NEW 加速营历届部分毕业初创企业与融资成果墙'
      }
    ]
  },

  // 5. Innovation SIG Groups
  {
    id: 5,
    slug: 'innovation-sig-groups',
    name: 'Innovation SIG Groups',
    name_zh: 'Innovation SIG Groups (前沿技术兴趣组)',
    shortName: 'SIG',
    category: 'innovation',
    categoryLabel: 'Technical Special Interest Groups',
    categoryLabel_zh: '专业前沿技术组',
    sourceUrl: 'https://necina.org/content/sig',
    tagline: 'Deep Intelligence, Mobile Solutions, and IoT Networks Led by Domain Authorities',
    tagline_zh: '汇聚数百名顶尖工程师与科学家，深耕深度智能、移动互联与物联网硬件',
    intro: 'NECINA’s Special Interest Groups (SIG) unite hundreds of savvy experts, engineering leaders, and students in specialized technical domains.',
    intro_zh: 'NECINA 专业前沿兴趣组（SIG）汇聚数百位资深技术专家、工程架构师与学者，通过双周前沿技术研讨、代码精读沙龙与实操 Hackathon 推动技术进阶。',
    overview: [
      'NECINA Special Interest Groups provide dedicated peer platforms where engineers, AI practitioners, researchers, and hobbyists collaborate on bleeding-edge technologies.',
      'Current active divisions include the Deep Intelligence Group (DIG: AI & Deep Learning, led by Victor Cao), the NECINA Mobile Group (led by Lin Song and Geoff Xiao), and the NECINA IoT Group (led by John Zhuang, Nancy Li, and Brandon Chen).',
      'Activities feature bi-weekly technical paper breakdowns, architecture teardowns, hands-on LLM hack days, and joint events with MIT, Harvard, and industry leaders.'
    ],
    overview_zh: [
      'NECINA 专业技术兴趣组为工程师、AI 从业者、高校学者与技术极客提供了专注于垂直细分技术的高端同行交流圈。',
      '目前旗下设有三大活跃专业分舵：深度智能小组（DIG：专注于 AI 与深度学习，由曹江山领衔）、移动互联小组（由宋林与肖建峰领衔）及物联网硬件小组（由庄辉壮、李楠与陈斌领衔）。',
      '活动包括双周顶级学术论文精读、开源微服务架构拆解、大模型动手营，以及与哈佛、MIT 学者的定期技术沙龙。'
    ],
    heroImage: '/necina_boston_hub.jpg',
    statusBadge: 'Bi-Weekly Tech Salons Active',
    statusBadge_zh: '双周前沿极客沙龙活跃开展',
    established: '2016',
    audience: 'Software engineers, AI researchers, data scientists, and hardware developers',
    audience_zh: '软件架构师、AI 研究员、数据科学家与智能硬件极客',
    highlights: [
      'NECINA DIG (Deep Intelligence Group): Led by Victor Cao. Hundreds of savvy experts and students in AI, Deep Learning, and GenAI workflows',
      'NECINA Mobile Group: Led by Lin Song & Geoff Xiao, focusing on mobile solutions, cross-platform apps, and ubiquitous user computing',
      'NECINA IoT Group: Led by Analog Devices / Huawei veteran John Zhuang, Verizon executive Nancy Li, and Soteria Networks CEO Brandon Chen',
      'Exploration of billions of connected devices, edge computing, smart industrial sensors, and real-world value-add deployment',
      'Hands-on hackathons, technical demonstrations, code walkthroughs, and executive networking'
    ],
    highlights_zh: [
      '深度智能小组 (DIG)：由曹江山（Victor Cao）领衔，数百位 AI 与深度学习专家、工程师及高校学子共同探讨最新算法与生成式大模型应用',
      '移动互联小组：由宋林（Lin Song）与肖建峰（Geoff Xiao）领衔，专注跨平台移动终端方案、微前端交互及影响亿万用户日常生活的移动科技',
      '物联网小组 (IoT Group)：由 Analog Devices 与华为资深专家庄辉壮（John Zhuang）、Verizon 高管李楠（Nancy Li）及 Soteria Networks CEO 陈斌（Brandon Chen）领衔',
      '立足新英格兰雄厚产业基础，深度布局千亿级智能物联网硬件生态、边缘智能终端与工业级部署落地',
      '定期组织线下动手黑客松、架构复盘研讨会、前沿代码走查与行业技术酒会'
    ],
    modules: [
      {
        title: 'NECINA DIG (Deep Intelligence Group)',
        title_zh: 'NECINA 深度智能前沿小组 (DIG)',
        description: 'Led by Victor Cao. Made of hundreds of savvy experts, professionals, and students in AI, LLMs, computer vision, and neural reasoning.'
      },
      {
        title: 'NECINA Mobile Solutions Group',
        title_zh: 'NECINA 移动互联与跨端应用小组',
        description: 'Led by Lin Song and Geoff Xiao. Focuses on mobile architectures, progressive web technologies, and ubiquitous consumer applications.'
      },
      {
        title: 'NECINA IoT & Intelligent Devices Group',
        title_zh: 'NECINA 物联网与智能硬件小组',
        description: 'Led by John Zhuang, Nancy Li, and Brandon Chen. Focuses on intelligent devices, industrial automation, and commercial edge systems.'
      }
    ],
    applicationInfo: {
      status: 'Open to All Tech Enthusiasts and Engineers',
      status_zh: '面向全体技术从业者与工程师开放',
      contactEmail: 'sig@necina.org'
    }
  },

  // 6. Entrepreneur NIC Challenge
  {
    id: 6,
    slug: 'entrepreneur-nic-challenge',
    name: 'Entrepreneur NIC Challenge',
    name_zh: 'Entrepreneur NIC Challenge (NECINA 创新挑战赛)',
    shortName: 'NIC',
    category: 'entrepreneur',
    categoryLabel: 'Innovation Contest',
    categoryLabel_zh: '全球创新大赛',
    sourceUrl: 'https://necina.org/content/necina-innovation-challenge',
    tagline: 'Transforming Breakthrough Concepts into Viable Technological Ventures',
    tagline_zh: '将突破性构想转化为具备商业价值与社会影响力的实体企业',
    intro: 'The NECINA Innovation Challenge (NIC) is a comprehensive multi-month technology competition open to innovators aged 15 and older to tackle urgent societal pain points.',
    intro_zh: 'NECINA 创新挑战大赛（NIC）是一项面向 15 岁及以上创新者的全周期科技创业大赛，旨在激发解决各行业关键痛点的颠覆性构想与落地方案。',
    overview: [
      'The NECINA Innovation Challenge (NIC) invites individuals or teams of up to 4 persons to develop innovative products, technologies, applications, or operational processes that shape the future.',
      'Themes encompass all aspects of life, education, healthcare, workplace collaboration, robotics, smart sensor systems, and supply chain logistics.',
      'All participants receive a one-year complimentary NECINA membership with all fees waived. Participants are granted dedicated "office hours" with seasoned mentors, venture capitalists, corporate executives, and distinguished professors.'
    ],
    overview_zh: [
      'NECINA 创新挑战赛（NIC）热忱邀请 15 岁以上的个人或最多 4 人的团队参赛，围绕影响未来社会生活与经济发展的核心议题开发前沿产品、创新技术与方案。',
      '赛事主题涵盖数字化远程协作、医疗健康智能监测、机器人自主作业、智能传感器终端以及现代物流供应链优化等多元领域。',
      '所有成功报名参赛者均将免费获赠为期一年的 NECINA 正式会员资格（会费全免！）。参赛团队还将享受顶尖导师“专属咨询时间（Office Hours）”，由资深创投人、高校教授与名企高管倾囊相授。'
    ],
    heroImage: '/necina_eclub_summit.jpg',
    statusBadge: 'Multi-Month Innovation Competition',
    statusBadge_zh: '全周期创新创业大赛',
    established: '2020',
    audience: 'Entrepreneurs, engineering teams, university researchers, and high school innovators (ages 15+)',
    audience_zh: '创业团队、工程师群体、高校科研团队及 15 岁以上青年创新者',
    highlights: [
      'Open to individuals and teams of up to 4 persons (aged 15+)',
      'Complimentary 1-year NECINA membership for all participants (fee waived)',
      'Direct access to mentor office hours with venture capitalists, professors, and serial founders',
      'Comprehensive feedback from a distinguished panel of industry reviewers',
      'Top 5 winning submissions awarded cash prizes and incubation acceleration',
      'Opportunity to showcase in front of angel investors and corporate acquirers'
    ],
    highlights_zh: [
      '面向 15 岁以上个人或最多 4 人跨学科团队开放报名',
      '全体参赛选手获赠为期 1 年的 NECINA 正式会员特权（免收全部会费）',
      '直通顶级投资人、知名教授与成功创业老将的专属辅导答疑（Office Hours）',
      '获得资深行业评审委员会详尽专业的打分反馈与商业计划优化建议',
      '评选出前 5 名优胜团队并颁发丰厚现金大奖与后续加速赋能支持',
      '在闭门投资者路演日向天使基金、一线创投机构与战略并购方高光展示'
    ],
    modules: [
      {
        title: 'Phase 1: Registration & Team Formation',
        title_zh: '第一阶段：官方报名注册与团队组建',
        description: 'November – December: Initial signup, team formation, and onboarding to the competition portal.'
      },
      {
        title: 'Phase 2: Mentorship Office Hours & Concept Development',
        title_zh: '第二阶段：导师辅导答疑与商业方案精细打磨',
        description: 'November – March: Teams book office hours with mentors, refine product architectures, and submit detailed plans.'
      },
      {
        title: 'Phase 3: Reviewer Scoring & Shortlist Voting',
        title_zh: '第三阶段：评审委员会综合评分与入围决选',
        description: 'April: Industry reviewers evaluate submissions based on market size, defensibility, and technological viability.'
      },
      {
        title: 'Phase 4: Pitch Finals & Award Ceremony',
        title_zh: '第四阶段：总决赛路演答辩与盛大颁奖典礼',
        description: 'May: Finalist teams present live pitches to the executive jury, with top 5 teams awarded honors and prizes.'
      }
    ],
    applicationInfo: {
      status: 'Annual Cycle Announced on Portal',
      status_zh: '年度赛程于官方平台发布',
      externalPortalUrl: 'http://www.necinaic.com',
      externalPortalText: 'VISIT WWW.NECINAIC.COM',
      contactEmail: 'nic@necina.org'
    }
  },

  // 7. Entrepreneur CLD Leadership
  {
    id: 7,
    slug: 'entrepreneur-cld-leadership',
    name: 'Entrepreneur CLD Leadership',
    name_zh: 'Entrepreneur CLD Leadership (职场与领导力发展)',
    shortName: 'CLD',
    category: 'entrepreneur',
    categoryLabel: 'Career & Executive Development',
    categoryLabel_zh: '职场与高管发展',
    sourceUrl: 'https://necina.org/job-posts',
    tagline: 'Accelerating Executive Presence, Career Transitions & Industry Placements',
    tagline_zh: '赋能华人科技精英跨越职业天花板，提升高管领导力与名企职位对接',
    intro: 'The Career & Leadership Development (CLD) initiative empowers Asian-American professionals to transition from individual contributors into influential engineering and executive leaders.',
    intro_zh: 'CLD（Career & Leadership Development）致力于帮助华人工程师与专业人士突破职场发展瓶颈，完成从技术骨干到卓越管理层与行业领袖的华丽蜕变。',
    overview: [
      'The Career and Leadership Development program organizes the annual Leadership Career Development Conference, executive coaching circles, and direct job placement channels.',
      'Through partnerships with high-growth technology corporations in New England and across the country, CLD hosts an active Job Board featuring exclusive career opportunities in software, mobility, finance, and enterprise tech.',
      'Programs encompass resume teardowns, executive communications workshops, cross-cultural leadership training, and direct executive referrals into Boston’s leading tech employers.'
    ],
    overview_zh: [
      'CLD 职业与领导力发展计划常年主办年度高规格职场发展峰会、高管一对一导师圈以及直通科技企业的猎头引荐通道。',
      '依托与新英格兰及全美高增长科技企业的深度战略合作，CLD 长期设立官方招聘求职信息板（Job Board），发布涵盖移动互联、企业级软件、智能科技与金融保险的真实优质岗位。',
      '赋能内容涵盖简历逐行复盘、高管沟通表达技巧、跨文化跨语境领导力演练，以及直达大波士顿顶尖科技雇主高管层的内推直通车。'
    ],
    heroImage: '/volunteers_team.jpg',
    statusBadge: 'Career Advisory & Job Posts Active',
    statusBadge_zh: '职业辅导与企业职位对接持续进行',
    established: '2008',
    audience: 'Software engineers, tech managers, product leads, and career changers',
    audience_zh: '软件工程师、技术总监、产品经理与寻求职业突破的职场精英',
    highlights: [
      'Annual Leadership Career Development Conference (CLD Conference)',
      'Executive coaching & mentorship with Chinese-American VP and C-level executives',
      'Exclusive technology job board with direct recruiter & hiring manager access',
      'Interview bootcamps, salary negotiation tactics, and managerial presence workshops',
      'Employer partnership programs with leading Boston tech unicorns and public companies'
    ],
    highlights_zh: [
      '年度标志性职场与领导力发展峰会（CLD 旗舰论坛）',
      '由成功跨入 500 强副总裁与 C 级高管的华人行业先辈提供一对一高管导师咨询',
      '汇聚独家高科技职位的官方招聘直通通道，直接对接用人部门总监与 HR 负责人',
      '高管面试实战特训营、薪酬谈判策略指导与高层商务风范打造工坊',
      '与波士顿本土科技独角兽及上市公司建立长期人才雇主战略合作伙伴关系'
    ],
    jobPosts: [
      {
        title: 'Sales and Marketing Associate',
        title_zh: '销售与市场拓展专员',
        company: 'Segway Discovery',
        type: 'Full Time',
        type_zh: '全职',
        industry: 'Mobile Internet / Micro-mobility',
        industry_zh: '移动互联 / 微出行智能硬件',
        description: 'Self-motivated and creative team player to join the newly formed Segway Discovery team, driving user acquisition, corporate sales channels, and micromobility fleet partnerships.',
        description_zh: '加入快速成长的 Segway Discovery 核心业务团队，开拓企业客户销售渠道、推动智能微出行车队合作与全美市场品牌落地。',
        logo: '/programs/cld_job_segway.jpg'
      },
      {
        title: 'Network Systems & Solutions Engineer',
        title_zh: '网络系统与架构解决方案工程师',
        company: 'NetBrain Technologies',
        type: 'Full Time',
        type_zh: '全职',
        industry: 'Network Automation & Enterprise Software',
        industry_zh: '网络自动化与企业级系统架构',
        description: 'Delivering next-generation adaptive network automation solutions for Fortune 500 enterprises. Designing automated diagnostic workflows and enterprise customer deployments.',
        description_zh: '为全球财富 500 强企业提供下一代自适应网络自动化解决方案，负责客户生产环境的网络自动化诊断工作流搭建与大型部署。',
        logo: '/programs/cld_job_netbrain.jpg'
      },
      {
        title: 'Financial & Wealth Risk Advisor',
        title_zh: '金融财富与风险管理顾问',
        company: 'New York Life',
        type: 'Full Time',
        type_zh: '全职',
        industry: 'Financial Services & Risk Planning',
        industry_zh: '金融服务与财富规划',
        description: 'Guiding high-net-worth professionals, technology entrepreneurs, and families on long-term wealth preservation, executive retirement structures, and estate risk planning.',
        description_zh: '为高净值科技从业人员、创业企业合伙人及精英家庭提供长期资产配置、高管退休金结构与财富传承规划服务。',
        logo: '/programs/cld_job_nylife.jpg'
      },
      {
        title: 'Operations & Strategy Associate',
        title_zh: '运营与战略拓展经理',
        company: 'Hooli Global',
        type: 'Full Time',
        type_zh: '全职',
        industry: 'Cross-Border Tech & Real Estate Operations',
        industry_zh: '跨国科技服务与商业运营',
        description: 'Driving cross-border student housing logistics, platform technology upgrades, partnership negotiations, and customer experience operations across major US university hubs.',
        description_zh: '负责全美主流大学园区跨国学生生活科技服务运营、供应链资源整合、平台数字化系统升级与商业合作伙伴谈判。',
        logo: '/programs/cld_job_hooli.jpg'
      }
    ],
    applicationInfo: {
      status: 'Career Mentorship & Employer Listings Open',
      status_zh: '导师辅导预约与企业职位招聘常年开放',
      contactEmail: 'career@necina.org'
    }
  },

  // 8. NECINA Clubs
  {
    id: 8,
    slug: 'necina-clubs',
    name: 'NECINA Clubs',
    name_zh: 'NECINA Clubs (eCLUB / iCLUB / WeCLUB 俱乐部矩阵)',
    shortName: 'E-Club',
    category: 'community',
    categoryLabel: 'Executive & Peer Communities',
    categoryLabel_zh: '高管与同行社群',
    sourceUrl: 'https://necina.org/content/eclub-iclub-weclub',
    tagline: 'eCLUB + iCLUB + WeCLUB — A Blended Ecosystem for Founders, Innovators & Community',
    tagline_zh: '三维融合的互助俱乐部矩阵：凝聚科技创始人、极客工程师与社区菁英',
    intro: 'NECINA’s club matrix provides vetted, member-only peer environments for company founders, technology builders, and community advocates to collaborate and scale.',
    intro_zh: 'NECINA 俱乐部矩阵构建了受邀准入的高端同行交流圈，为科技企业创始人、前沿技术开发者及社区骨干提供深度互助、投资对接与资源共享平台。',
    overview: [
      'The NECINA Entrepreneur Club (eCLUB), blended in 2023 with Innovation iCLUB and Community WeCLUB, is a premier peer community of technology company founders, owners, and C-level executives.',
      'The mission is to help member companies accelerate growth by connecting members to senior serial founders, venture funding sources, professional service firms, and cross-border commercial opportunities.',
      'Members maintain active connections through informal face-to-face meetups, dedicated WeChat and LinkedIn executive roundtables, speaker consultations, and commercial showcase exhibitions at NECINA conferences.'
    ],
    overview_zh: [
      'NECINA 企业家俱乐部（eCLUB）于 2023 年全面融合创新俱乐部（iCLUB）与社区俱乐部（WeCLUB），是专为科技公司创始人、企业法人及 C 级核心高管打造的高端商业互助社群。',
      '俱乐部的使命是通过连接更具经验的成功连环创业先辈、一级创投资本、专业法律与财税机构以及亚洲跨境商业伙伴，为成员企业赋能解惑、拓展广阔商机。',
      '成员通过线下闭门私享聚会、专属微信与 LinkedIn 高管圈、垂直主题专家问诊以及在 NECINA 大型科技峰会上的企业商业展位，长期保持紧密互助与商业协同。'
    ],
    heroImage: '/programs/eclub_showcase.jpg',
    statusBadge: 'Member-Only Executive Network Active',
    statusBadge_zh: '会员制高管专属圈活跃运作中',
    established: '2011',
    audience: 'Technology company owners, founders, C-level executives, and active NECINA members',
    audience_zh: '科技企业法人、初创创始人、C 级高管及 NECINA 正式会员',
    highlights: [
      'Informal Member-Only Meetups: Face-to-face dinners and executive salons to share real metrics, pivots, and peer advisory',
      'WeChat & LinkedIn Peer Circles: 24/7 confidential communication and real-time business opportunities exchange',
      'Subject Matter Expert Sessions: Direct consultations with leading patent attorneys, corporate tax specialists, and VCs',
      'Business Showcase at NECINA Events: Prominent exhibition space at annual conferences (over 15 member companies showcase annually)',
      'Cross-Border Synergies: Establishing business connections and supply chain channels with Asian technology hubs'
    ],
    highlights_zh: [
      '受邀制闭门私享沙龙：定期举办面对面晚宴与高管交流会，坦诚分享经营数据、转型阵痛与实战决策建议',
      '微信与 LinkedIn 高管同行圈：全天候高效连接，实时交流行业情报、投融资线索与海内外合作商机',
      '行业专家面对面咨询会：直面顶级知识产权律师、跨国财税专家与知名投资人进行一对一闭门问诊',
      'NECINA 旗舰峰会商业展台特权：在每年数千人参与的年会与科技大会设立专属展台（每年 15+ 会员企业参展推广）',
      '跨国业务与全球供应链整合：架设与亚洲及全球主要科技高地之间的商业合作、技术转让与渠道拓展桥梁'
    ],
    activities: [
      {
        title: 'Informal Member-Only Meetups',
        title_zh: '非正式闭门会员见面沙龙',
        description: 'Held in relaxed environments to build authentic trust, share operational successes, discuss hiring dilemmas, and seek peer executive advice.',
        description_zh: '在轻松真诚的氛围中面对面深入沟通，建立深度信任，分享经营心得、高管招聘困境与实战避坑经验。',
        image: '/programs/eclub_meetup.jpg'
      },
      {
        title: 'LinkedIn & WeChat Peer Discussions',
        title_zh: '高管微信与 LinkedIn 专属社群',
        description: 'Keeping club founders tightly connected day to day with curated market intel, referral requests, and investment intros.',
        description_zh: '保持俱乐部创始人社群全天候高频互动，快速传递前沿市场动态、高管人才引荐与天使投资对接。',
        image: '/programs/eclub_social.jpg'
      },
      {
        title: 'Speaker & Subject Matter Consultations',
        title_zh: '垂直领域专家专题咨询与研讨',
        description: 'Dedicated sessions where member founders consult with corporate M&A bankers, international patent attorneys, and growth marketers.',
        description_zh: '定期举办专业问诊会，特邀企业兼并重组投资银行家、国际专利律所高级合伙人与增长专家现场解题。',
        image: '/programs/eclub_expert.jpg'
      },
      {
        title: 'Business Showcase at NECINA Conferences',
        title_zh: 'NECINA 盛典企业商业高光展台',
        description: 'Member startups promote their products, hardware devices, and enterprise SaaS solutions directly to thousands of conference attendees.',
        description_zh: '会员企业在每届盛典上直接向数千名现场参会高管、技术采购决策者与投资机构展示前沿技术与产品方案。',
        image: '/programs/eclub_showcase.jpg'
      }
    ],
    applicationInfo: {
      status: 'Open to Active NECINA Members who are Founders or C-Level Tech Executives',
      status_zh: '面向科技公司创始人、企业主与 C 级高管会员开放申请',
      applyUrl: 'http://bit.ly/1muKWJc',
      applyText: 'SUBMIT E-CLUB APPLICATION',
      applyText_zh: '提交 eCLUB 会员申请表',
      contactEmail: 'eclub@necina.org'
    },
    galleryImages: [
      {
        src: '/programs/eclub_members_logos.jpg',
        alt: 'NECINA E-Club Member Companies Matrix',
        caption: 'Partial Graphic of Vetted Technology Member Companies in NECINA E-Club',
        caption_zh: 'NECINA eCLUB 部分会员科技企业品牌墙'
      }
    ]
  },

  // 9. NECINA Chapters
  {
    id: 9,
    slug: 'necina-chapters',
    name: 'NECINA Chapters',
    name_zh: 'NECINA Chapters (分会网络矩阵)',
    shortName: 'Chapters',
    category: 'community',
    categoryLabel: 'Regional & Campus Networks',
    categoryLabel_zh: '区域与高校分会',
    sourceUrl: 'https://necina.org/content/necina-chapters',
    tagline: 'Expanding Technology Leadership Across Regional Hubs, Ivy Campuses & Boston Metro',
    tagline_zh: '立足新英格兰，辐射美东多州，深耕顶尖名校与大波士顿科技走廊',
    intro: 'NECINA Chapters extend our vibrant tech community across regional states, university campuses, and Boston metropolitan technology corridors.',
    intro_zh: 'NECINA 分会网络将前沿科技社群的强大影响力延伸至东北各州、知名顶尖高校及大波士顿高科技核心产业圈，搭建无缝对接的互助生态。',
    overview: [
      'NECINA’s footprint spans far beyond central Boston through our structured network of Regional, College, and Metro Chapters.',
      'Regional Chapters in New Hampshire, Rhode Island, New York, and New Jersey foster cross-state professional exchanges, while College Chapters at MIT, Boston University, Brandeis, Northeastern, and Stonehill nurture the next generation of engineers and entrepreneurs.',
      'Boston Metro Chapters located in Woburn, Cambridge, Dedham, and Marlborough serve as localized tech hubs hosting neighborhood meetups, peer hackathons, and corporate networking.'
    ],
    overview_zh: [
      'NECINA 的影响力早已超越大波士顿核心区，通过系统化的区域分会、高校分会与大波士顿都市分会构建了四通八达的人才网络。',
      '在新罕布什尔州、罗德岛州、纽约州及新泽西州设立的区域分会，极大促进了跨州高科技专业人士的互动交流；位于 MIT、波士顿大学、布兰迪斯大学、东北大学与斯通希尔学院的高校分会，持续滋养下一代科技新星。',
      '沃本（Woburn）、剑桥（Cambridge）、戴德姆（Dedham）与马尔堡（Marlborough）等大波士顿都市分会，则为周边科技园区从业人员提供了家门口的高端技术沙龙与同行网络。'
    ],
    statusBadge: 'Regional & University Chapters Active',
    statusBadge_zh: '区域与大学分会持续联动发展',
    established: '2012',
    audience: 'Regional tech professionals, university students, faculty, and local tech communities',
    audience_zh: '美东各州科技专业人士、高校在读师生、科研学者及大波士顿都市圈从业人员',
    highlights: [
      'Regional Chapters extending into New Hampshire, Rhode Island, New York, and New Jersey',
      'Campus College Chapters active at MIT, Boston University, Brandeis, Northeastern, and Stonehill College',
      'Suburban Boston Metro Chapters anchoring tech hubs in Woburn, Cambridge, Dedham, and Marlborough',
      'Student-to-professional mentorship pipelines and localized tech dinners',
      'Collaborative hackathons, campus innovation seminars, and regional networking summits'
    ],
    highlights_zh: [
      '区域分会纵深拓展：覆盖新罕布什尔、罗德岛、纽约与新泽西等美东高科技走廊核心州',
      '名校分会深耕青年：建立在 MIT、波士顿大学、布兰迪斯大学、东北大学与斯通希尔学院的官方学生分会',
      '都市圈分会贴近产业：在大波士顿高科技重镇沃本、剑桥、戴德姆与马尔堡建立常设联系机制',
      '搭建从校园走向职场的 mentorship 辅导梯队，定期举办本地化技术研讨会与校友联谊',
      '跨区域联动举办创业黑客松、校园前沿科技讲座与美东跨州青年创新峰会'
    ],
    chaptersList: [
      {
        category: 'Regional Chapters',
        category_zh: '区域分会矩阵',
        items: ['New Hampshire', 'Rhode Island', 'New York', 'New Jersey']
      },
      {
        category: 'College & University Chapters',
        category_zh: '高校校园分会',
        items: [
          'MIT (Massachusetts Institute of Technology)',
          'Boston University (BU)',
          'Brandeis University',
          'Northeastern University',
          'Stonehill College'
        ]
      },
      {
        category: 'Boston Metro Chapters',
        category_zh: '大波士顿都市圈分会',
        items: [
          'Cambridge (Biotech & Innovation Core)',
          'Woburn (Route 128 North Tech Corridor)',
          'Dedham (South Shore Professional Circle)',
          'Marlborough (MetroWest Enterprise Software & Storage Hub)'
        ]
      }
    ],
    applicationInfo: {
      status: 'Open to Launch New Chapters or Join Existing Local Branches',
      status_zh: '欢迎申请发起新分会或加入已有本地分会',
      contactEmail: 'info@necina.org'
    }
  }
];

export const getProgramBySlug = (slug: string): OfficialProgram | undefined => {
  return OFFICIAL_PROGRAMS.find((p) => p.slug === slug);
};
