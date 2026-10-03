export type Locale = 'en' | 'zh';

export interface Milestone {
  year: string;
  title: string;
  title_zh: string;
  description: string;
  description_zh: string;
  tag?: string;
  tag_zh?: string;
}

export interface Leader {
  name: string;
  name_zh: string;
  role: string;
  role_zh: string;
  bio: string;
  bio_zh: string;
  image?: string;
  category: 'executive' | 'board' | 'founder' | 'advisory';
}

export interface ProgramDetail {
  id: string;
  name: string;
  name_zh: string;
  subtitle: string;
  subtitle_zh: string;
  description: string;
  description_zh: string;
  audience: string;
  audience_zh: string;
  founded: string;
  highlights: string[];
  highlights_zh: string[];
  features: { title: string; title_zh: string; desc: string; desc_zh: string }[];
  image: string;
  linkText?: string;
  linkText_zh?: string;
}

export interface OfficialEvent {
  id: string;
  title: string;
  title_zh: string;
  date: string;
  date_zh: string;
  venue: string;
  venue_zh: string;
  category: 'Flagship' | 'AI & Tech' | 'Youth' | 'Entrepreneurship' | 'Community';
  category_zh: string;
  status: 'upcoming' | 'past';
  description: string;
  description_zh: string;
  speakers?: string[];
  speakers_zh?: string[];
  registrationUrl?: string;
  image: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video' | 'publication';
  title: string;
  title_zh: string;
  date: string;
  url: string;
  thumbnail: string;
  description?: string;
  description_zh?: string;
  category: string;
}

export const OFFICIAL_CONTENT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      programs: 'Programs',
      events: 'Events & News',
      media: 'Media Center',
      getInvolved: 'Get Involved',
      anniversary: '30th Anniversary',
      joinUs: 'Join Us',
    },
    hero: {
      badge: 'Celebrating 30 Years of Innovation • 1996 - 2026',
      headlineStart: 'Empowering Leaders,',
      headlineAccent: 'Connecting Communities,',
      headlineEnd: 'Inspiring the Future.',
      subtitle: 'New England Chinese Information and Networking Association (NECINA) is a premier 501(c)(3) non-profit professional association dedicated to fostering technology innovation, career growth, and entrepreneurship across generations.',
      ctaPrimary: 'Explore Programs',
      ctaSecondary: 'Become a Member',
      stats: [
        { value: '30+', label: 'Years of Impact' },
        { value: '5,000+', label: 'Community Members' },
        { value: '500+', label: 'Conferences & Seminars' },
        { value: '20', label: 'Years of Youth Mentorship' }
      ]
    },
    intro: {
      kicker: 'Our Foundation',
      title: 'A Hub Where Technology Meets Community Leadership',
      description: 'Since 1996, NECINA has stood as a beacon of collaboration in New England. From the dawn of internet computing to today\'s breakthroughs in physical and biological AI, we equip innovators, professionals, and students with the network and skills to thrive.',
      cards: [
        {
          title: 'Professional Networking',
          description: 'Bridging senior executives, tech professionals, researchers, and aspiring innovators through high-caliber forums, mentoring circles, and social mixers.'
        },
        {
          title: 'Technology Foresight',
          description: 'Deep dives into generative AI, robotics, cloud infrastructure, life sciences, and quantum computing with global thought leaders.'
        },
        {
          title: 'Entrepreneurship & Incubation',
          description: 'Fostering startups and next-gen business leaders through workshops, investor pitch stages, and comprehensive acceleration.'
        }
      ]
    },
    featuredPrograms: {
      kicker: 'Flagship Initiatives',
      title: 'Programs Designed for Every Stage of Growth',
      description: 'Whether you are a high school student finding your entrepreneurial spark or an experienced executive building your next venture, NECINA offers dedicated platforms.',
      viewAll: 'View All Programs'
    },
    upcomingEventsSection: {
      kicker: 'Conferences & Gatherings',
      title: 'Flagship Conferences & Gatherings',
      description: 'Explore our landmark conferences, technology symposiums, and impactful community gatherings.',
      viewAllEvents: 'View All Events'
    },
    sponsorsSection: {
      kicker: 'Trusted Partners',
      title: 'Honoring Our Community Sponsors & Benefactors',
      subtitle: 'We are deeply grateful to our corporate and institutional partners who power our educational mission.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      programs: '核心项目',
      events: '活动与资讯',
      media: '媒体中心',
      getInvolved: '加入参与',
      anniversary: '30 周年盛典',
      joinUs: '加入我们',
    },
    hero: {
      badge: '庆祝创新三十载 • 1996 - 2026',
      headlineStart: '赋能领袖成长，',
      headlineAccent: '连接卓越社区，',
      headlineEnd: '启迪科技未来。',
      subtitle: '纽英伦中华资讯网络协会（NECINA）是一家领先的 501(c)(3) 非营利专业机构，致力于跨代际推动科技创新、职业晋升与创新创业。',
      ctaPrimary: '探索核心项目',
      ctaSecondary: '加入成为会员',
      stats: [
        { value: '30+', label: '深厚影响力年限' },
        { value: '5,000+', label: '跨领域社区成员' },
        { value: '500+', label: '专业研讨与会议' },
        { value: '20', label: '青年创业培育传承' }
      ]
    },
    intro: {
      kicker: '组织基石',
      title: '汇聚前沿科技与华人精英的交流高地',
      description: '自 1996 年成立以来，NECINA 始终是新英格兰地区科技创新的灯塔。从互联网浪潮到如今的物理 AI 与生物 AI 革命，我们为创新者、职场精英与青年学子提供不可或缺的优质网络与进阶资源。',
      cards: [
        {
          title: '高端职业网络',
          description: '通过高水准行业论坛、专属导师圈与高端酒会，连接企业高管、顶尖工程师、科研学者与新兴创新力量。'
        },
        {
          title: '前瞻科技洞察',
          description: '携手全球思想领袖，深度剖析生成式人工智能、机器人、云原生架构、生命科学与量子计算等科技前沿。'
        },
        {
          title: '创业孵化赋能',
          description: '通过创业工坊、投资人对接路演与全方位孵化赋能体系，助力早期创业团队与未来商业领袖跨越成长鸿沟。'
        }
      ]
    },
    featuredPrograms: {
      kicker: '旗舰项目',
      title: '面向各成长阶段的多元赋能平台',
      description: '无论您是渴望探索商业思维的高中生，还是正带领团队开辟新赛道的资深创始人，NECINA 都能为您提供坚实助力。',
      viewAll: '查看全部项目'
    },
    upcomingEventsSection: {
      kicker: '盛会与里程碑',
      title: '旗舰峰会与重要活动展示',
      description: '探索 NECINA 标志性的高规格科技大会、行业研讨与精彩社区盛会。',
      viewAllEvents: '浏览完整活动'
    },
    sponsorsSection: {
      kicker: '信任伙伴',
      title: '特邀赞助商与长期支持机构',
      subtitle: '由衷感谢企业与机构伙伴对 NECINA 非营利科技教育事业的鼎力支持。'
    }
  }
};

export const MILESTONES: Milestone[] = [
  {
    year: '1996',
    title: 'NECINA Founded in Greater Boston',
    title_zh: 'NECINA 在大波士顿地区创立',
    description: 'Founded by tech pioneers Wufu Chen, Cheng Wu, Ed Song, and fellow leaders to build an information highway and networking bridge for Chinese-American professionals.',
    description_zh: '由科技先驱陈五福、吴锦城、宋利伟等行业领袖发起创立，旨在为华裔专业人士构建信息高速公路与高端人脉桥梁。',
    tag: 'Foundation',
    tag_zh: '初创成立'
  },
  {
    year: '2006',
    title: 'Youth Entrepreneurship Service (YES) Launched',
    title_zh: '创立青年创业服务项目 (YES)',
    description: 'Inaugurated a dedicated 7-stage youth entrepreneurship academy for high school and university students, bridging generations of tech leadership.',
    description_zh: '正式开启面向中学生与大学生的 7 阶段青年创业培训营，搭建跨代际的科技与领导力传承桥梁。',
    tag: 'Education',
    tag_zh: '青年教育'
  },
  {
    year: '2011',
    title: 'Necina Entrepreneurs Club (E-Club) Established',
    title_zh: '成立企业家俱乐部 (E-Club)',
    description: 'Created a specialized peer network and investor connection circle for business founders, CEOs, and startup teams.',
    description_zh: '专为企业创始人、高管与初创团队打造的同行互助社群及投融资直通对接平台。',
    tag: 'Entrepreneurship',
    tag_zh: '创新创业'
  },
  {
    year: '2016',
    title: '20th Anniversary Gala at Harvard Club',
    title_zh: '哈佛俱乐部 20 周年盛大庆典',
    description: 'Celebrated two decades of community leadership with over 500 tech veterans, honored key contributors, and hosted a community cultural showcase.',
    description_zh: '在波士顿哈佛俱乐部举行 20 周年盛典，500 多位科技老将与青年才俊共襄盛举，表彰卓越贡献者。',
    tag: 'Milestone',
    tag_zh: '里程碑'
  },
  {
    year: '2020',
    title: 'NECINA Innovation Challenge (NIC) & Digital Pivot',
    title_zh: '推出 NECINA 创新大赛 (NIC) 与全面数字化',
    description: 'Launched the Innovation Challenge and hybrid incubator format to support resilient technology solutions during global transitions.',
    description_zh: '设立创新大赛与混合孵化器，在全球环境变革中支持科技创新团队突破突围。',
    tag: 'Innovation',
    tag_zh: '前沿创新'
  },
  {
    year: '2026',
    title: '30th Anniversary & Era of Converged AI',
    title_zh: '三十周年华诞与物理/生物 AI 汇聚时代',
    description: '30 Years of Impact celebration at Bentley University and Newton City Hall, honoring 29 presidential terms and forging the AI-driven future.',
    description_zh: '在 Bentley 大学与 Newton 市政厅隆重举行 30 周年盛典，致敬 29 届会长领导历程，携手迈入 AI 新航程。',
    tag: '30th Anniversary',
    tag_zh: '30周年华诞'
  }
];

export const PROGRAMS_LIST: ProgramDetail[] = [
  {
    id: 'yes',
    name: 'Youth Entrepreneurship Service (YES)',
    name_zh: '青年创业服务项目 (YES)',
    subtitle: 'Empowering High School & College Innovators Since 2006 (20th Anniversary)',
    subtitle_zh: '自 2006 年起赋能下一代创新者与领袖（20 周年传承）',
    description: 'The YES Program is NECINA’s flagship youth development initiative. Over 20 consecutive years, YES has introduced hundreds of high school and university students across New England to real-world business thinking, customer discovery, prototyping, and executive mentorship.',
    description_zh: 'YES 项目是 NECINA 最具声誉的旗舰青年培养计划。历经二十年不间断耕耘，YES 带领数百位新英格兰地区的高中与大学青年深入了解商业模式设计、产品验证、财务规划与高管导师实战指导。',
    audience: 'High school students (grades 9-12) & college undergraduates',
    audience_zh: '9-12 年级高中生及在校大学生',
    founded: '2006',
    image: '/yes_group_photo.jpg',
    highlights: [
      '20 Consecutive Years of Proven Track Record',
      'Over 600 Alumni Admitted to Top Global Universities',
      'Direct 1-on-1 Guidance from Seasoned Tech Founders & Executives',
      'Annual Business Plan Pitch Contest with Cash Awards'
    ],
    highlights_zh: [
      '连续 20 年成功运营与卓越口碑',
      '600+ 名优秀校友考入哈佛、MIT 等全球顶尖学府',
      '由科技创始人与资深高管提供一对一实战指导',
      '年度商业计划书路演大赛及丰厚创业种子奖金'
    ],
    features: [
      {
        title: '7-Stage Practical Curriculum',
        title_zh: '七阶段实战课程大纲',
        desc: 'Ideation, Market Validation, Sales & Marketing, Financial Modeling, Mentor Review Sessions, Mock Competition, and Final Pitch Gala.',
        desc_zh: '涵盖创意构建、市场验证、营销获客、财务建模、导师多轮评审、模拟路演及最终全场总决赛。'
      },
      {
        title: 'Executive Mentorship Network',
        title_zh: '资深高管导师阵容',
        desc: 'Mentors drawn from Boston\'s Fortune 500 companies, biotech unicorns, and venture capital firms.',
        desc_zh: '导师库均来自大波士顿地区 500 强科技公司高管、生物医药独角兽创始人与风险投资人。'
      },
      {
        title: 'Parent & Alumni Community',
        title_zh: '校友与家长智囊网络',
        desc: 'A lifelong network where alumni return to mentor new cohorts and share college/career navigation strategies.',
        desc_zh: '庞大而温暖的校友生态圈，历届校友持续回归担任评委与辅导员，分享名校升学与职业进阶智慧。'
      }
    ]
  },
  {
    id: 'nic',
    name: 'NECINA Innovation Challenge (NIC) & Incubator',
    name_zh: 'NECINA 创新挑战赛与创业孵化器 (NIC)',
    subtitle: 'From Breakthrough Idea to Venture-Backable Startup',
    subtitle_zh: '从突破性构想到具备融资能力的科技初创',
    description: 'The NECINA Innovation Challenge (NIC) is an open technology contest and incubation launchpad designed to unearth high-potential teams in AI, enterprise SaaS, biotech, climate tech, and hardware innovation.',
    description_zh: 'NECINA 创新挑战赛（NIC）是一项面向全社会的科技创新大赛与孵化加速平台，旨在发掘人工智能、企业级软件、生物医药、绿色科技及硬件领域的潜力团队。',
    audience: 'Startup founders, engineers, researchers, and entrepreneurial teams',
    audience_zh: '初创企业创始人、工程师、科研团队及早期创业者',
    founded: '2020',
    image: '/necina_tech_workshop.jpg',
    highlights: [
      'Incubator track for winning teams with executive advisors',
      'Pitch directly to Angel Investors and Tier-1 VC Partners',
      'Legal, cloud credits, and go-to-market partner perks',
      'Showcase exposure to NECINA’s 5,000+ member network'
    ],
    highlights_zh: [
      '获奖优胜团队直接进入专属孵化轨道并配备高管顾问',
      '直通天使投资人与一线美元/人民币创投基金合伙人',
      '享受云服务赞助额度、法务咨询与市场渠道资源',
      '在拥有 5,000+ 专业会员的 NECINA 平台上获得高光展示'
    ],
    features: [
      {
        title: 'Pitch & Evaluation Rounds',
        title_zh: '专业评审与多轮路演',
        desc: 'Rigorous feedback on product-market fit, unit economics, and defensible technology moats.',
        desc_zh: '针对产品市场契合度（PMF）、商业模型与技术壁垒提供严谨犀利的评审建议。'
      },
      {
        title: 'Investor Demo Day',
        title_zh: '投资人年度 Demo Day',
        desc: 'Exclusive showcase bringing together Boston angel syndicates, institutional venture funds, and strategic corporate acquirers.',
        desc_zh: '汇聚大波士顿天使投资联盟、机构风险基金与行业巨头战略投资部门的闭门路演日。'
      }
    ]
  },
  {
    id: 'new',
    name: 'NECINA Entrepreneur Workshop (NEW)',
    name_zh: 'NECINA 创业实战工坊 (NEW)',
    subtitle: 'Masterclasses on Product Architecture, Sales, and Scaling',
    subtitle_zh: '聚焦产品研发、企业级获客与商业扩张的实战大师课',
    description: 'NEW (NECINA Entrepreneur Workshop) provides tactical, no-nonsense masterclasses taught by seasoned operators who have successfully built, scaled, and exited technology enterprises.',
    description_zh: 'NEW 创业实战工坊专注于交付干货满满的进阶课程，均由具备完整初创企业建立、规模化运营及成功退出经历的资深操盘手亲自讲授。',
    audience: 'Early-stage founders, product managers, and engineering leaders',
    audience_zh: '初创期创始人、产品总监与核心技术负责人',
    founded: '2014',
    image: '/necina_eclub_summit.jpg',
    highlights: [
      'Practical frameworks on B2B sales cycles & pricing models',
      'Hands-on fundraising pitch deck workshops',
      'Intellectual property strategy and cross-border operations'
    ],
    highlights_zh: [
      'B2B 销售链路梳理、大客户打单与定价策略实战拆解',
      '募资 Pitch Deck 逐页复盘与模拟答辩',
      '科技知识产权（IP）全球布局与跨国合规策略'
    ],
    features: [
      {
        title: 'Operator-Led Sessions',
        title_zh: '实战操盘手领衔授课',
        desc: 'Interactive lectures and breakout teardowns led by founders who have navigated $10M+ ARR scaling.',
        desc_zh: '突破千万元美金营收规模的独角兽操盘手现场面对面拆解实战经验。'
      },
      {
        title: 'Case Study Teardowns',
        title_zh: '实操案例深度复盘',
        desc: 'Real startup metrics, marketing attribution blunders, and technical pivots analyzed in confidential settings.',
        desc_zh: '真实初创企业增长数据、增长踩坑教训与关键技术转型的深度复盘研讨。'
      }
    ]
  },
  {
    id: 'sig',
    name: 'Special Interest Groups (SIG)',
    name_zh: '专业前沿兴趣组 (SIG)',
    subtitle: 'Deep Intelligence (DIG), Mobile, IoT, and iCLUB',
    subtitle_zh: '涵盖深度智能 (DIG)、移动互联、物联网与创新者俱乐部 (iCLUB)',
    description: 'NECINA\'s Special Interest Groups unite domain experts and enthusiasts around cutting-edge technological paradigms. Notable tracks include the Deep Intelligence Group (DIG: GenAI & LLMs), IoT & Edge Systems, and iCLUB for hands-on technical skill building.',
    description_zh: 'NECINA 专业兴趣组（SIG）汇聚前沿垂直领域的专家与开发者。重点包含深度智能组（DIG：专注生成式 AI 与大模型）、物联网与边缘计算组，以及着重动手实战编码的 iCLUB。',
    audience: 'Software engineers, AI researchers, data scientists, and hardware developers',
    audience_zh: '软件工程师、AI 研究员、数据科学家与硬件极客',
    founded: '2016',
    image: '/NECINA Leaders.jpg',
    highlights: [
      'Bi-weekly technical paper discussions and code walkthroughs',
      'AI Agent workflows and hands-on LLM hack days',
      'Direct interaction with leading research scientists from MIT, Harvard, and Broad Institute'
    ],
    highlights_zh: [
      '双周技术论文解读与开源代码精读',
      '智能体（AI Agent）工作流搭建与 LLM Hackathon 动手营',
      '与哈佛、MIT、Broad 研究所顶尖华人科学家面对面交流'
    ],
    features: [
      {
        title: 'Deep Intelligence Group (DIG)',
        title_zh: '深度智能前沿小组 (DIG)',
        desc: 'Dedicated to generative architectures, retrieval-augmented generation (RAG), multimodal AI, and physical AI robotics.',
        desc_zh: '专注于生成式架构、检索增强生成（RAG）、多模态大模型及具身智能机器人领域。'
      },
      {
        title: 'iCLUB Technical Practice',
        title_zh: 'iCLUB 动手实操俱乐部',
        desc: 'Peer problem-solving sessions where developers build real-world micro-services and prototype open-source tools together.',
        desc_zh: '由资深架构师领衔的实操开发沙龙，共同打造实际可用的微服务工具与开源原型。'
      }
    ]
  },
  {
    id: 'eclub',
    name: 'Necina Entrepreneurs Club (E-Club)',
    name_zh: 'NECINA 企业家俱乐部 (E-Club)',
    subtitle: 'Connecting Business Owners, Executives, and Capital Partners',
    subtitle_zh: '连接企业掌舵人、商业领袖与核心资本伙伴',
    description: 'Established in 2011, the E-Club is a premier business network tailored for founders, business owners, and C-level executives. The club drives strategic partnerships, cross-border commercial opportunities, and executive peer roundtables.',
    description_zh: 'E-Club 成立于 2011 年，是专为企业创始人、商界业主与 C 级高管定制的高端商业互助联盟，致力于促进战略合作、跨界商业开拓与高管闭门圆桌会议。',
    audience: 'Technology business owners, corporate executives, and angel investors',
    audience_zh: '科技企业负责人、跨国高管与天使投资人',
    founded: '2011',
    image: '/30 Years Journey.png',
    highlights: [
      'Quarterly closed-door executive roundtables with vetted business peers',
      'Annual "Break Barriers, Build Bridges" Celebrating Female Leadership Event',
      'Direct access to strategic corporate partners, banks, and legal counsel',
      'Cross-border business development and supply chain synergy'
    ],
    highlights_zh: [
      '每季度举办受邀制企业高管闭门圆桌私享会',
      '年度“打破壁垒，架设桥梁”杰出女性领导力专题峰会',
      '直通顶级律所合伙人、投行顾问与战略企业合作伙伴',
      '跨国供应链整合与商业机遇对接'
    ],
    features: [
      {
        title: 'Female Leadership Series',
        title_zh: '女性领袖力量专题论坛',
        desc: 'Dedicated summits highlighting trailblazing women entrepreneurs, venture partners, and executives overcoming systemic barriers.',
        desc_zh: '彰显杰出女性创业家、投资合伙人与行业高管卓越影响力的标杆年度峰会。'
      },
      {
        title: 'Executive Peer Advisory',
        title_zh: '高管同行互助顾问组',
        desc: 'A trusted, confidential forum for business leaders to discuss governance, team culture, and scaling bottlenecks.',
        desc_zh: '提供私密信任空间，深入探讨企业治理、人才梯队构建与企业瓶颈突破。'
      }
    ]
  }
];

export const EVENTS_LIST: OfficialEvent[] = [
  {
    id: '30th-gala',
    title: 'NECINA 30th Anniversary Grand Ceremony & Gala',
    title_zh: 'NECINA 三十周年盛大庆典与科技峰会',
    date: 'June 13, 2026',
    date_zh: '2026年6月13日',
    venue: 'Bentley University Conference Center, Waltham, MA',
    venue_zh: '本特利大学会议中心（马萨诸塞州 Waltham）',
    category: 'Flagship',
    category_zh: '旗舰庆典',
    status: 'past',
    description: 'The premier milestone event bringing together 500+ leaders, alumni, founders, and students. Featuring keynotes from Flagship Pioneering, Harvard Medical School, and OpenAI, high-level AI panels, and an evening cultural celebration.',
    description_zh: '汇聚 500 多位科技领袖、杰出校友、创始人与学子的年度里程碑盛事。包含 Flagship Pioneering、哈佛医学院与 OpenAI 专家的重磅演讲、物理与生物 AI 高端论坛及三十周年文艺晚宴。',
    speakers: ['Uli Stilz (Flagship Pioneering)', 'Prof. John Quackenbush (Harvard)', 'Charles Qi (OpenAI)', 'Cheng Wu (NECINA Chairman)'],
    speakers_zh: ['Uli Stilz 博士 (Flagship Pioneering)', 'John Quackenbush 教授 (哈佛大学)', 'Charles Qi (OpenAI)', '吴锦城 (NECINA 荣誉董事长)'],
    image: '/30th Anniversary Ceremony.jpg'
  },
  {
    id: 'ai-agent-2025',
    title: 'NECINA AI Agent Tech Conference',
    title_zh: 'NECINA 智能体 (AI Agent) 前沿科技大会',
    date: 'December 13, 2025',
    date_zh: '2025年12月13日',
    venue: 'Newton City Hall Auditorium, Newton, MA',
    venue_zh: '牛顿市政厅大礼堂（马萨诸塞州 Newton）',
    category: 'AI & Tech',
    category_zh: '前沿科技',
    status: 'past',
    description: 'Exploring the transition from LLMs to autonomous agentic workflows. Featuring live demos, technical architecture breakdowns, and startup showcases.',
    description_zh: '深入探讨从大语言模型走向自主智能体工作流的前沿突破，包含架构剖析、现场 Live Demo 演示与创业团队路演。',
    speakers: ['Mingsheng Hong, PhD (VP of AI, Ironclad)', 'Dr. Alan Jiang (XtalPi)', 'Industry Tech Fellows'],
    speakers_zh: ['洪銘胜 博士 (Ironclad AI 副总裁)', '姜航 博士 (晶泰科技 CSO)', '硅谷及波士顿科技资深专家'],
    image: 'https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg'
  },
  {
    id: 'yes-competition',
    title: 'YES 20th Anniversary Final Pitch Competition',
    title_zh: 'YES 青年创业大赛二十周年全场总决赛',
    date: 'May 16, 2026',
    date_zh: '2026年5月16日',
    venue: 'MIT Stata Center, Cambridge, MA',
    venue_zh: '麻省理工学院 (MIT) Stata 创新中心',
    category: 'Youth',
    category_zh: '青年创业',
    status: 'past',
    description: 'High school finalist teams pitch their tested business models and working prototypes before a distinguished panel of venture investors and tech executives.',
    description_zh: '入围决赛的高中青年创业战队登上 MIT 舞台，向知名风险投资人与科技高管评审团展示经过市场验证的商业计划书与产品原型。',
    speakers: ['Ben Tao (Rockwell Automation)', 'YES Alumni Mentors', 'Boston Angel Investors'],
    speakers_zh: ['陶东斌 (罗克韦尔自动化战略高管)', 'YES 往届杰出校友导师', '波士顿天使投资人评审'],
    image: '/yes_group_photo.jpg'
  },
  {
    id: 'eclub-female-leadership',
    title: 'Break Barriers, Build Bridges: Women in Tech & Leadership',
    title_zh: '突破壁垒，架设桥梁：科技与创业女性领导力论坛',
    date: 'March 28, 2026',
    date_zh: '2026年3月28日',
    venue: 'Babson College Executive Center, Wellesley, MA',
    venue_zh: '巴布森商学院高管中心（马萨诸塞州 Wellesley）',
    category: 'Entrepreneurship',
    category_zh: '商业领袖',
    status: 'past',
    description: 'Celebrating impactful female founders, researchers, and venture capitalists. Discussions covering fundraising dynamics, executive resilience, and career advancement.',
    description_zh: '聚焦科技与创投领域的卓越女性创始人与合伙人，围绕募资实战、职场抗逆力与领袖进阶展开深度对谈。',
    speakers: ['Shirley Liu PhD (GV20)', 'Claire Jin (Past President)', 'Connie Dai (Esq.)'],
    speakers_zh: ['刘小乐 博士 (GV20 创始人兼 CEO)', '金世维 (前会长)', '戴晨方 律师 (前会长)'],
    image: '/necina_eclub_summit.jpg'
  },
  {
    id: 'biotech-ai-symposium',
    title: 'Biologic AI & Drug Discovery Forum',
    title_zh: '生物 AI 与创新药物发现高峰论坛',
    date: 'October 18, 2025',
    date_zh: '2025年10月18日',
    venue: 'Broad Institute Auditorium, Cambridge, MA',
    venue_zh: 'Broad 研究所大礼堂（马萨诸塞州剑桥市）',
    category: 'AI & Tech',
    category_zh: '生命科技',
    status: 'past',
    description: 'A deep-dive into computational biology, molecular dynamics, and generative chemistry accelerating the clinical pipeline.',
    description_zh: '聚焦计算生物学、分子动力学模拟与生成式化学在临床药物研发中的革命性应用。',
    speakers: ['Shantanu Singh PhD (Broad)', 'Jennifer Joe MD', 'Prof. Xiaobo Zhou'],
    speakers_zh: ['Shantanu Singh 博士', 'Jennifer Joe 医学博士', '周小波 教授'],
    image: '/necina_boston_hub.jpg'
  }
];

export const PRESIDENTS_CHRONOLOGY = [
  { year: '1996', name: 'Wufu Chen', name_zh: '陈五福' },
  { year: '1997', name: 'Cheng Wu', name_zh: '吴锦城' },
  { year: '1998', name: 'Ed Song', name_zh: '宋利伟' },
  { year: '1999', name: 'Chi Shue', name_zh: '许基康' },
  { year: '2000', name: 'Hong Yu', name_zh: '余 鸿' },
  { year: '2001', name: 'Dick Chiu', name_zh: '邱瑞贤' },
  { year: '2002', name: 'Nanying Yin', name_zh: '尹南鹰' },
  { year: '2003', name: 'Alex Wang', name_zh: '王 雷' },
  { year: '2004', name: 'Jimmy Wang', name_zh: '王义明' },
  { year: '2005', name: 'Daryl Luk', name_zh: '陆德礼' },
  { year: '2006', name: 'Jun Wang', name_zh: '王 军' },
  { year: '2007', name: 'Jipeng Li', name_zh: '李纪鹏' },
  { year: '2008', name: 'Nick Ning', name_zh: '宁 可' },
  { year: '2009', name: 'Daryl Luk', name_zh: '陆德礼' },
  { year: '2010', name: 'Jenny Chen', name_zh: '陈君瑶' },
  { year: '2011', name: 'Sean Shen', name_zh: '沈心焯' },
  { year: '2012', name: 'Mingsheng Hong', name_zh: '洪銘胜' },
  { year: '2013', name: 'Ru Zheng', name_zh: '郑 茹' },
  { year: '2014', name: 'Ben Tao', name_zh: '陶东斌' },
  { year: '2015', name: 'John Wang', name_zh: '王振榕' },
  { year: '2016', name: 'Tony Tian', name_zh: '田 田' },
  { year: '2017', name: 'Andy Li', name_zh: '李震宇' },
  { year: '2018', name: 'Victor Cao', name_zh: '曹江山' },
  { year: '2019', name: 'Harry Gao', name_zh: '高 弘' },
  { year: '2020', name: 'Connie Dai', name_zh: '戴晨方' },
  { year: '2021', name: 'Claire Jin', name_zh: '金世维' },
  { year: '2022', name: 'Scott Li', name_zh: '李思佳' },
  { year: '2023-2024', name: 'John Zhuang', name_zh: '庄辉壮' },
  { year: '2025-2026', name: 'Bing He', name_zh: '何 冰' }
];

export const LEADERSHIP_ROSTER: Leader[] = [
  {
    name: 'Bing He',
    name_zh: '何 冰',
    role: 'NECINA President (2025 - 2026)',
    role_zh: '现任会长 (2025 - 2026)',
    bio: 'Seasoned Silicon Valley engineering leader and enterprise consultant with 25+ years of experience guiding top-tier clients to high-ROI tech architectures. MS/BS in Computer Science from University of Toronto.',
    bio_zh: '拥有 25 年以上顶尖硅谷工程管理与企业咨询经验的技术领袖，擅长协助企业搭建兼具高回报率与高韧性的核心技术架构。毕业于多伦多大学计算机科学系。',
    category: 'executive',
    image: '/NECINA Leaders.jpg'
  },
  {
    name: 'Caroline Lu',
    name_zh: 'Caroline Lu',
    role: 'NECINA President-Elect',
    role_zh: 'NECINA 候任会长',
    bio: 'Senior community leader and executive active in driving organizational modernization, cross-generational outreach, and strategic educational partnerships.',
    bio_zh: '深耕科技社区与教育赋能的资深管理者，致力于推动 NECINA 组织现代化、青年跨代传承与全球教育资源合作。',
    category: 'executive'
  },
  {
    name: 'John Zhuang',
    name_zh: '庄辉壮',
    role: 'Immediate Past President (2023 - 2024)',
    role_zh: '前任会长 (2023 - 2024)',
    bio: 'Led NECINA through vital post-pandemic revitalization, inaugurating AI-focused technical tracks and strengthening volunteer engagement across New England.',
    bio_zh: '带领 NECINA 顺利完成疫后全面复兴，率先布局生成式 AI 专题系列，极大凝聚了新英格兰地区的志愿者与青年力量。',
    category: 'executive'
  },
  {
    name: 'Cheng Wu',
    name_zh: '吴锦城',
    role: 'Co-Founder & Honorable Chairman of the Board',
    role_zh: '联合创始人兼董事会荣誉董事长',
    bio: 'Legendary telecom entrepreneur, serial founder of ArrowPoint Communications (acquired by Cisco for $5.7B) and Acopia Networks. Seed investor and mentor to dozens of successful high-tech ventures.',
    bio_zh: '传奇电信与网络科技创业家，先后创立 ArrowPoint（被思科以 57 亿美元并购）与 Acopia Networks。知名天使投资人，悉心培育数十家前沿高科技企业。',
    category: 'board'
  },
  {
    name: 'Wufu Chen',
    name_zh: '陈五福',
    role: 'Co-Founder & Honorary Advisor',
    role_zh: '联合创始人兼荣誉顾问',
    bio: 'Pioneering Silicon Valley and Boston venture capitalist, founder of Cascade Communications and legendary networking architect recognized globally as "The Tech Pioneer".',
    bio_zh: '享誉硅谷与波士顿的电信网络先驱、风投大师，Cascade Communications 创始人，被业界誉为“科技创业常胜将军”。',
    category: 'founder'
  },
  {
    name: 'Ben Tao',
    name_zh: '陶东斌',
    role: 'Past President (2014) & Board Director',
    role_zh: '2014 届会长、董事会董事兼 YES 项目导师委员会主席',
    bio: 'Head of Corporate Strategy at Rockwell Automation. A cornerstone mentor of the YES program for over 15 years, inspiring hundreds of students toward engineering leadership.',
    bio_zh: '罗克韦尔自动化（Rockwell Automation）企业战略高级总监。深耕 YES 青年创业项目 15 年以上，指导了数百名走向名校与创业舞台的青年才俊。',
    category: 'board'
  }
];

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'm1',
    type: 'video',
    title: 'YES: 20 Years of Impact (by Ben Tao)',
    title_zh: 'YES 项目二十年影响回顾（陶东斌）',
    date: '2026',
    url: 'https://www.youtube.com/watch?v=pdIQUqs_YuM&t=3s',
    thumbnail: 'https://img.youtube.com/vi/pdIQUqs_YuM/hqdefault.jpg',
    description: 'A deep-dive video reflection on 20 consecutive years of the Youth Entrepreneurship Service program.',
    description_zh: '关于青年创业服务项目（YES）连续二十年培养创新与青年领导力的精彩纪录片。',
    category: 'Youth'
  },
  {
    id: 'm2',
    type: 'video',
    title: 'NECINA AI Agent Tech Conference Preview',
    title_zh: 'NECINA AI Agent 科技大会先导片',
    date: '2025',
    url: 'https://youtu.be/M5RB08XB5Fk',
    thumbnail: 'https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg',
    description: 'Previewing the landmark conference on intelligent agents, automation, and the new era of computing.',
    description_zh: '预览探讨自主智能体、自动化演进与计算新时代的里程碑盛会。',
    category: 'Tech'
  },
  {
    id: 'm3',
    type: 'photo',
    title: 'NECINA 30th Anniversary Ceremony & Leadership Assembly',
    title_zh: 'NECINA 30 周年庆典与领导者合影',
    date: '2026',
    url: '/30th Anniversary Ceremony.jpg',
    thumbnail: '/30th Anniversary Ceremony.jpg',
    description: 'Celebrating 30 years of excellence with founders, presidents, and corporate sponsors.',
    description_zh: '与创始人、历任会长及赞助商共同庆祝三十载辉煌成果。',
    category: 'Ceremony'
  },
  {
    id: 'm4',
    type: 'photo',
    title: 'YES 20th Cohort Youth Teams & Mentors',
    title_zh: 'YES 第 20 届青年创业战队与导师团',
    date: '2025',
    url: '/yes_group_photo.jpg',
    thumbnail: '/yes_group_photo.jpg',
    description: 'High school innovators gathered at the business plan competition pitch stage.',
    description_zh: '汇聚在商业计划书大赛路演现场的新英格兰青年创新团队。',
    category: 'Youth'
  },
  {
    id: 'm5',
    type: 'photo',
    title: 'NECINA Dedicated Volunteers Team',
    title_zh: 'NECINA 充满热忱的志愿者团队',
    date: '2024',
    url: '/volunteers_team.jpg',
    thumbnail: '/volunteers_team.jpg',
    description: 'The heartbeat of NECINA: dedicated professionals and student leaders.',
    description_zh: 'NECINA 的坚实支柱：奉献专业智慧与无限热情的各界志愿者团队。',
    category: 'Community'
  },
  {
    id: 'm6',
    type: 'photo',
    title: '30-Year Journey Retrospective Archive',
    title_zh: '三十年科技征程历史档案',
    date: '1996-2026',
    url: '/30 Years Journey.png',
    thumbnail: '/30 Years Journey.png',
    description: 'Tracking three decades from early telecommunications to cloud, data, and artificial intelligence.',
    description_zh: '记录从早期电信网络、互联网到移动互联、大数据与人工智能的三十年变迁。',
    category: 'Archive'
  }
];

export interface MembershipPlan {
  id: string;
  name: string;
  name_zh: string;
  price: string;
  price_zh?: string;
  duration: string;
  duration_zh: string;
  billing: string;
  billing_zh: string;
  description: string;
  description_zh: string;
  link: string;
}

export const MEMBERSHIP_TIERS: MembershipPlan[] = [
  {
    id: 'pro',
    name: 'Full Membership for Professional',
    name_zh: '专业人士正式会员',
    price: '$40.00',
    duration: 'Annual',
    duration_zh: '年度',
    billing: 'Optional Rebilling',
    billing_zh: '可选自动续费',
    description: 'Full access to NECINA events and resources.',
    description_zh: '全面畅享 NECINA 活动与资源。',
    link: 'https://app.joinit.com/o/necina-boston'
  },
  {
    id: 'student',
    name: 'Full Membership for Student',
    name_zh: '学生正式会员',
    price: '$20.00',
    duration: 'Annual',
    duration_zh: '年度',
    billing: 'Optional Rebilling',
    billing_zh: '可选自动续费',
    description: 'Full access to NECINA events and resources.',
    description_zh: '全面畅享 NECINA 活动与资源。',
    link: 'https://app.joinit.com/o/necina-boston'
  },
  {
    id: 'lifetime',
    name: 'Lifetime Membership',
    name_zh: '终身会员',
    price: '$300.00',
    duration: 'Lifetime',
    duration_zh: '终身',
    billing: 'One-time Billing',
    billing_zh: '一次性计费',
    description: 'Full access to NECINA events and resources.',
    description_zh: '全面畅享 NECINA 活动与资源。',
    link: 'https://app.joinit.com/o/necina-boston'
  },
  {
    id: 'associate',
    name: 'Associate Membership',
    name_zh: '准会员 (Associate Membership)',
    price: 'Free',
    price_zh: '免费',
    duration: '3 years',
    duration_zh: '3 年',
    billing: 'None',
    billing_zh: '无',
    description: 'NECINA community participants, subject to a surcharge for event.',
    description_zh: 'NECINA 社区参与者，参与活动须额外支付附加费。',
    link: 'https://app.joinit.com/o/necina-boston'
  }
];

export const SPONSOR_PACKAGES = [
  {
    tier: 'Bronze',
    tier_zh: '铜牌赞助',
    price: '$2,000',
    benefits: [
      'Corporate logo on website and marketing materials',
      '2 Complimentary tickets to the 30th Anniversary Gala',
      'Recognition in monthly newsletters sent to 5,000+ members'
    ],
    benefits_zh: [
      '在官方网站赞助商展示墙及活动宣传物料上刊登企业 Logo',
      '获赠 2 张 30 周年盛典晚宴入场券',
      '在触达 5,000+ 行业精英的每月电子邮件简报中获得品牌曝光'
    ]
  },
  {
    tier: 'Silver',
    tier_zh: '银牌赞助',
    price: '$5,000',
    benefits: [
      'All Bronze benefits included',
      '5 Complimentary tickets to the 30th Anniversary Gala',
      'Dedicated exhibition table space during tech conferences',
      'Direct talent recruitment post in community channels'
    ],
    benefits_zh: [
      '包含铜牌赞助全部权益',
      '获赠 5 张 30 周年盛典晚宴入场券',
      '在大型科技峰会与展区设立企业专属展台',
      '在官方社群与会员网络发布企业人才直聘信息'
    ]
  },
  {
    tier: 'Gold',
    tier_zh: '金牌赞助',
    price: '$10,000',
    featured: true,
    benefits: [
      'All Silver benefits included',
      '10 Complimentary tickets (Full VIP Table) to the Gala',
      'On-stage speaking opportunity or panel seat for company executive',
      'Premium headline branding across all annual conferences and YES showcase'
    ],
    benefits_zh: [
      '包含银牌赞助全部权益',
      '获赠 10 张盛典晚宴贵宾席入场券（整桌 VIP 席位）',
      '高管获邀担任大会主旨演讲嘉宾或圆桌论坛专题嘉宾',
      '在全年所有峰会及 YES 创业大赛中享受顶级黄金广告位展示'
    ]
  },
  {
    tier: 'Diamond / Title Partner',
    tier_zh: '钻石 / 战略冠名伙伴',
    price: 'Custom',
    price_zh: '定制方案',
    benefits: [
      'Exclusive event co-naming rights (e.g., "Presented by [Your Company]")',
      'Keynote opening remarks and customized VIP networking roundtables',
      '20+ Gala tickets and executive advisory board liaison',
      'Long-term strategic collaboration with YES incubator'
    ],
    benefits_zh: [
      '重大盛会专属联合冠名权（例如“由 [贵司] 联合呈现”）',
      '开幕重磅主题演讲与闭门高管商业圆桌定制',
      '20+ 盛典 VIP 贵宾入场券及董事会高管直通联络',
      '与 YES 青年孵化器建立长期战略创新伙伴关系'
    ]
  }
];
