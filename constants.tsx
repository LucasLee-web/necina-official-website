
import { NavItem, AgendaItem, SponsorTier, Locale, ContentPack, DesignStyle } from './types';

export const BRAND = {
  primary: '#29B0E9',
  primaryHover: '#218DBA',
  primaryDark: '#1B7297',
  bg1: '#EAF7FD',
  bg2: '#D4EFFB',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'mission', href: '#mission' },
  { label: 'program', href: '#program' },
  { label: 'join', href: '#join' },
];

export const NAV_TRANSLATIONS = {
  en: {
    mission: 'Mission',
    sponsorship: 'Sponsorship',
    program: 'Program',
    join: 'Join Us',
    support: 'Support Us',
    becomeSponsor: 'Become a Sponsor',
    styleTheme: 'Style Theme',
    language: 'Language'
  },
  zh: {
    mission: '我们的使命',
    sponsorship: '赞助合作',
    program: '活动日程',
    join: '加入我们',
    support: '支持我们',
    becomeSponsor: '成为赞助商',
    styleTheme: '风格主题',
    language: '语言'
  }
};

export const JOURNEY_HIGHLIGHTS = [
  {
    title: "Technology & Leadership",
    desc: "Hosted hundreds of conferences, seminars, and workshops on technology trends, entrepreneurship, and career development."
  },
  {
    title: "Professional Growth",
    desc: "Supported thousands of professionals and students to expand their skills, networks, and opportunities in New England."
  },
  {
    title: "Vibrant Community",
    desc: "Fostered a vibrant community connecting technology, business, and innovation across generations since 1996."
  }
];

export const ANNIVERSARY_AGENDA: AgendaItem[] = [
  {
    time: '8:00 AM - 8:50 AM',
    title: 'Check In, Registration, Networking',
    title_zh: '签到、注册与交流',
    location: '395'
  },
  {
    time: '9:00 AM - 9:10 AM',
    title: 'Welcome by NECINA President',
    title_zh: '现任会长致开场辞',
    location: '395'
  },
  {
    time: '9:10 AM - 9:20 AM',
    title: 'Welcome by co-host CSSA-HMS President',
    title_zh: '联合主办方 CSSA-HMS 会长致开场辞',
    location: '395'
  },
  {
    time: '9:20 AM - 9:50 AM',
    title: 'Morning Keynote',
    title_zh: '上午主题演讲',
    speaker: 'Uli Stilz, PhD, Senior Partner, Flagship Pioneering',
    speaker_zh: 'Uli Stilz 博士（Flagship Pioneering 资深合伙人）',
    location: '395'
  },
  {
    time: '9:50 AM - 10:20 AM',
    title: 'Emotional Intelligent Robots and AI',
    title_zh: '情绪智能机器人与人工智能',
    speaker: 'Ira Renfrew MBA, Co-founder and Chief People & Product Officer at Familiar Machines & Magic',
    speaker_zh: 'Ira Renfrew MBA（Familiar Machines & Magic 联合创始人、首席人力客与产品官）',
    location: '395'
  },
  {
    time: '10:20 AM - 10:50 AM',
    title: 'Physical AI: The Next Frontier',
    title_zh: '物理 AI：下一个前沿领域',
    speaker: 'Brian Klobucher MS, MBA, Sr. Manager, NVIDIA',
    speaker_zh: 'Brian Klobucher MS, MBA（NVIDIA 资深经理）',
    location: '395'
  },
  {
    time: '10:50 AM - 12:00 PM',
    title: 'Physical AI: Tools, Comparisons, and Replacements?',
    title_zh: '物理 AI：工具、对比与替代？',
    description: 'Speakers: Ira Renfrew MBA, Co-founder, CPO at Familiar Machines & Magic; Pei Qi MS, MBA, Founder and General Partner of AIRX Inno Venture; Javier Segovia MS, MBA, Co-Founder, Architechtures. Moderator: Tony Ho MS, MBA, VP of BD, Segway-ninebot',
    description_zh: '演讲嘉宾：Ira Renfrew MBA; 戚佩 MS, MBA（AIRX 创投创始人兼普通合伙人）; Javier Segovia MS, MBA. 主持人：何同祖 MS, MBA（Segway-ninebot 业务发展副总裁）',
    location: '395'
  },
  {
    time: '12:00 PM - 1:00 PM',
    title: 'Lunch',
    title_zh: '午餐',
    description: 'LaCava Cafe (1st Floor)',
    description_zh: 'LaCava 咖啡厅 (一层)',
    location: '395'
  },
  {
    time: '1:00 PM - 1:05 PM',
    title: 'Welcome Caroline Lu, NECINA President elect',
    title_zh: '欢迎 NECINA 候任会长 卢妤婧 致辞',
    location: '395'
  },
  {
    time: '1:05 PM - 1:40 PM',
    title: 'Afternoon Keynote',
    title_zh: '下午主题演讲',
    speaker: 'Prof. John Quackenbush, Harvard',
    speaker_zh: 'John Quackenbush 教授（哈佛大学）',
    location: '395'
  },
  {
    time: '1:40 PM - 2:20 PM',
    title: 'Fireside chat with Charles Qi, OpenAI',
    title_zh: '炉边对话：与 OpenAI 专家 Charles Qi',
    speaker: 'Moderated by Mingsheng Hong, PhD, Head/VP of AI, Ironclad',
    speaker_zh: '主持人：洪明盛 博士（Ironclad 副总裁/AI部门负责人）',
    location: '395'
  },
  {
    time: '2:20 PM - 3:30 PM',
    title: 'Biologic AI Forum',
    title_zh: '生物 AI 论坛',
    description: 'Speakers: Alan Jiang, PhD, Chief Strategy Officer, XtalPi Inc.; Shantanu Singh PhD, Principal, Broad Institute; Jennifer Joe, MD, Advisor, GLife; Jinfeng Zhang, PhD, Founder & CEO at Insilicom. Moderator: Prof Xiaobo Zhou, School of Medicine, University of Virginia',
    description_zh: '演讲嘉宾：姜航 博士（晶泰科技首席战略官）; Shantanu Singh 博士（Broad 研究所负责人）; Jennifer Joe 医学博士（GLife 顾问）; 张金锋 博士（Insilicom 创始人及 CEO）. 主持人：周小波 教授（弗造尼亚大学医学院）',
    location: '395',
    track2: {
      time: '2:30 PM - 3:30 PM',
      title: 'The YES Advantage: How Alumni Win in College and Careers',
      title_zh: 'YES 独特优势：校友如何在大学和职业中胜出',
      location: '325AB'
    },
    track3: {
      time: '2:30 PM - 3:30 PM',
      title: 'The YES Advantage: How Alumni Win in College and Careers',
      title_zh: 'YES 独特优势：校友如何在大学和职业中胜出',
      location: '325C'
    }
  },
  {
    time: '3:30 PM - 4:30 PM',
    title: 'Investment & Entrepreneurship Forum',
    title_zh: '投资与创业论坛',
    description: 'Speakers: Ben Tao MS MBA, Head of Strategy, Rockwell Automation; Shirley Liu PhD, Founder & CEO, GV20 Therapeutics; Prof. Song Han, MIT, Founder of OmniML and DeePhi Tech. Moderator: Cheng Wu, NECINA Chairman, Founder, Seed Investor',
    description_zh: '演讲嘉宾：陶波 MS MBA（罗克韦尔自动化战略负责人）; 刘小乐 博士（GV20 创始人兼 CEO）; 韩松 教授（麻省理工学院，OmniML 与深鉴科技创始人）. 主持人：吴承治（NECINA 董事长，创始人兼天使投资人）',
    location: '395',
    track2: {
      time: '3:30 PM - 4:30 PM',
      title: 'Roots of Success: The YES Alumni Parent Panel',
      title_zh: '成功之源：YES 校友家长座谈会',
      location: '325AB'
    },
    track3: {
      time: '3:30 PM - 4:30 PM',
      title: 'Roots of Success: The YES Alumni Parent Panel',
      title_zh: '成功之源：YES 校友家长座谈会',
      location: '325C'
    }
  },
  {
    time: '4:30 PM - 6:00 PM',
    title: 'VIP Receiption & Networking',
    title_zh: 'VIP 招待与沟通交流',
    location: '375'
  },
  {
    time: '6:00 PM - 10:30 PM',
    title: 'Dinner + Gala',
    title_zh: '晚宴与 30 周年庆典',
    location: '395'
  }
];

export const GALA_AGENDA: AgendaItem[] = [
  {
    time: '6:30 PM - 6:35 PM',
    title: 'Play the 5 min video',
    title_zh: '播放 5 分钟纪念视频'
  },
  {
    time: '6:35 PM - 6:40 PM',
    title: 'Wufu Chen poet',
    title_zh: '陈五福先生诗歌朗诵'
  },
  {
    time: '6:40 PM - 6:45 PM',
    title: 'Opening remarks',
    title_zh: '开幕致辞',
    speaker: 'Cheng Wu, NECINA Honorable Chairman',
    speaker_zh: '吴承治（NECINA 荣誉董事长）'
  },
  {
    time: '6:45 PM - 7:15 PM',
    title: 'From a Necina member to a successful entrepreneur',
    title_zh: '从普通会员到成功的创业大咖',
    speaker: 'Interview Dr. Mingsheng Hong by Ben Tao',
    speaker_zh: '专访 Mingsheng Hong 博士（主持人：Ben Tao）'
  },
  {
    time: '7:15 PM - 7:25 PM',
    title: 'Self-intro on the stage of gala dinner (plat, Gold, Silver): IDG Capital, IVY Talent, ElevAsian',
    title_zh: '赞助商舞台自我介绍（白金、金牌、银牌）：IDG Capital, IVY Talent, ElevAsian'
  },
  {
    time: '7:25 PM - 7:45 PM',
    title: 'Awards Ceremony',
    title_zh: '颁奖典礼'
  },
  {
    time: '8:00 PM - 9:30 PM',
    title: 'Cultural Gala',
    title_zh: '文艺晚会'
  }
];

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    name: 'Bronze',
    price: '$2,000',
    benefits: ['Logo on website', '2 Gala tickets'],
  },
  {
    name: 'Silver',
    price: '$5,000',
    benefits: ['Logo on materials', '5 Gala tickets', 'Exhibitor space'],
  },
  {
    name: 'Gold',
    price: '$10,000',
    benefits: ['10 Gala tickets', 'Speaking opportunity', 'Premium branding'],
    isFeatured: true,
  },
  {
    name: 'Diamond',
    price: 'Contact Us',
    benefits: ['Naming rights', '20 Gala tickets', 'Headline slot'],
  },
];

export const SPONSOR_WHY_BULLETS = [
  {
    title: "Community Outreach",
    desc: "Engage with a diverse network of over 5,000 technology professionals and students across New England."
  },
  {
    title: "Brand Leadership",
    desc: "Position your brand alongside a prestigious 30-year legacy of tech innovation and entrepreneurship."
  },
  {
    title: "Strategic Networking",
    desc: "Exclusive access to industry veterans, founding members, and the next generation of tech leaders."
  },
  {
    title: "Recruitment Pipeline",
    desc: "Direct access to high-caliber talent from top-tier universities and seasoned industry experts."
  }
];

export const NECINA_SYSTEM_PROMPT = `
You are the NECINA 30th Anniversary Assistant. Your goal is to help users learn about the 30th Anniversary Celebration.
NECINA was established in 1996 and 2026 marks our 30th year.
Mission: Empowering professionals, entrepreneurs, and students through technology, learning, and community.
Helpful hints:
- Redirect users to Join/Renew membership at joinit.org/o/necina
- Mention the official 30th anniversary site link in the banner.
- Highlight the 30-year legacy of conferences and workshops.
`;

export const HIGHLIGHT_CATEGORIES = {
  en: [
    {
      id: 'journey',
      title: '30 Years Journey',
      description: 'Explore the legacy of NECINA since 1996, empowering the New England tech community.',
      image: '/30 Years Journey.png',
      path: '/highlights/journey'
    },
    {
      id: 'ceremony',
      title: '30th Anniversary Ceremony',
      description: 'A grand celebration marking three decades of innovation, connection, and excellence.',
      image: '/30th Anniversary Ceremony.jpg',
      path: '/highlights/ceremony'
    },
    {
      id: 'yes20',
      title: 'YES 20th Anniversary',
      description: 'Celebrating 20 years of the Youth Entrepreneurship Service program.',
      image: '/yes_group_photo.jpg',
      path: '/highlights/yes20'
    },
    {
      id: 'events',
      title: 'Conferences and Events',
      description: 'Relive the most impactful technological and professional conferences in our history.',
      image: 'https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg',
      path: '/highlights/events'
    },
    {
      id: 'volunteers',
      title: 'Volunteers Team',
      description: 'Dedicated to the passionate individuals who are the heartbeat of our organization.',
      image: '/volunteers_team.jpg',
      path: '/highlights/volunteers'
    },
    {
      id: 'leaders',
      title: 'NECINA Leaders',
      description: 'Meet the visionary leaders who steered NECINA through three decades of growth.',
      image: '/NECINA Leaders.jpg',
      path: '/highlights/leaders'
    }
  ],
  zh: [
    {
      id: 'journey',
      title: '三十载征程',
      description: '回顾 NECINA 自 1996 年以来，赋能新英格兰科技社区的传奇历程。',
      image: '/30 Years Journey.png',
      path: '/highlights/journey'
    },
    {
      id: 'ceremony',
      title: '三十周年庆典',
      description: '隆重庆祝三十年来的创新、连接与卓越成就。',
      image: '/30th Anniversary Ceremony.jpg',
      path: '/highlights/ceremony'
    },
    {
      id: 'yes20',
      title: 'YES 二十周年',
      description: '庆祝青年创业服务 (YES) 项目成立二十周年。',
      image: '/yes_group_photo.jpg',
      path: '/highlights/yes20'
    },
    {
      id: 'events',
      title: '会议与活动',
      description: '重温我们历史上最具影响力的科技与职业发展会议。',
      image: 'https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg',
      path: '/highlights/events'
    },
    {
      id: 'volunteers',
      title: '志愿者团队',
      description: '致敬所有作为组织核心力量的热情个人。',
      image: '/volunteers_team.jpg',
      path: '/highlights/volunteers'
    },
    {
      id: 'leaders',
      title: 'NECINA 领导者',
      description: '结识在三十年成长历程中引领 NECINA 的远见卓识的领导者。',
      image: '/NECINA Leaders.jpg',
      path: '/highlights/leaders'
    }
  ]
};

export const HIGHLIGHT_DETAILS = {
  en: {
    journey: {
      hero: {
        title: "30 Years Journey",
        description: "From the Internet era to the AI era - three decades of growth and evolution.",
        image: "/30 Years Journey.png"
      },
      content: {
        heading: "A Legacy of Innovation",
        body: "For 30 years, we have co-created and witnessed the history of NECINA while growing together within the NECINA community platform. Our journey tracks the rapid evolution of technology in New England and beyond.",
        items: [
          { title: "20th Anniversary", desc: "A milestone celebration featuring a community fashion show and legacy talk." },
          { title: "Annual Conference 2024", desc: "Setting the stage for the next decade of digital transformation." },
          { title: "AI Conference 2023", desc: "Exploring the immediate impact of Generative AI on professional workflows." }
        ]
      }
    },
    ceremony: {
      hero: {
        title: "30th Anniversary Ceremony",
        description: "Converge AI to Transform Quality of Life - Physical AI & Biological AI.",
        image: "/30th Anniversary Ceremony.jpg"
      },
      event: {
        date: "June 13, 2026",
        venue: "The Conference Center, Bentley University, Waltham, MA",
        theme: "Physical AI & Biological AI",
        logoTitle: "New Anniversary Logo",
        logoDesc: "The 'NECINA 30 Years - from Internet to AI' logo retains the iconic lighthouse, symbolizing our role as an information navigator for the Chinese community in New England while embracing the AI wave.",
        image: "/30th Anniversary Ceremony.jpg"
      }
    },
    yes20: {
      hero: {
        title: "20 Years of NECINA Youth Entrepreneurship Service (YES)",
        description: "Inspiring the Next Generation of Innovators Since 2006",
        image: "/yes_group_photo.jpg"
      },
      about: {
        title: "NECINA YES Program",
        content: "For two decades, NECINA Youth Entrepreneurship Service (YES) has been at the heart of NECINA’s mission to empower the next generation of leaders, innovators, and changemakers. Founded in 2006, YES was created to provide hands-on entrepreneurship education for high school and college students in the Greater Boston and New England region. What began as a small mentorship initiative has evolved into a flagship NECINA program — a vibrant ecosystem that bridges young minds with real-world innovation and professional guidance.",
        curriculum: [
          "Ideation",
          "Market Validation",
          "Sales and Marketing",
          "Accounting & Finance",
          "Mentorship Session 1/2/3",
          "Mock Competition",
          "Final Competition"
        ],
        gridTitle: "YES Curriculum",
        gridDescription: "A comprehensive program designed to spark innovation and entrepreneurial spirit."
      },
      videos: [
        {
          title: "YES - 20 Years of Impact (by Ben Tao)",
          desc: "Reflections on two decades of fostering innovation and leadership in the NECINA community.",
          url: "https://www.youtube.com/watch?v=pdIQUqs_YuM&t=3s"
        }
      ]
    },
    events: {
      hero: {
        title: "NECINA Conferences and Events",
        description: "Thirty years of embracing technological waves and fostering community innovation.",
        image: "https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg"
      },
      summaryHeading: "NECINA Conferences and Events",
      summaryBody: "NECINA has actively embraced technological waves: from early communication networks to IoT, e-commerce, cloud computing, big data, blockchain, 3D printing, mobile apps, 5G networks, FinTech, electric vehicles, and the recent focus on AI.",
      videoUrl: "https://youtu.be/M5RB08XB5Fk",
      videoCaption: "NECINA AI Agent Tech Conference 2025 Preview",
      techLegacy: {
        title: "30 Years of Tech Leadership",
        content: "Looking back at the path NECINA has traveled over the past 30 years, we have always stood at the forefront of innovation, helping the community understand and apply every generation of disruptive technology.",
        featured: "AI Agent Tech Conference 2025"
      },
      conferenceFeature: {
        title: "NECINA AI Agent Tech Conference 2025",
        intro: "Celebrating 30 Years of Innovation, Leadership and Community",
        description: "A landmark event focusing on the next frontier of intelligent automation and the 20-year legacy of the YES program.",
        details: {
          date: "December 13, 2025",
          venue: "Newton City Hall Auditorium, Newton, MA",
          theme: "Celebrating 30 Years of Innovation, Leadership and Community"
        }
      },
      agenda: {
        title: "Conference Agenda",
        sessions: [
          {
            timeSlot: "Morning Session: Milestones",
            items: [
              { title: "Registration & Community Coffee", desc: "Check-in and early morning networking." },
              { title: "Opening Ceremony", desc: "30th Anniversary welcome address and visionary remarks." },
              { title: "YES 20th Anniversary", desc: "Special showcase marking two decades of youth entrepreneurship and innovation." },
              { title: "The Next Frontier", desc: "Technology keynote focusing on the evolution of AI Agents." }
            ]
          },
          {
            timeSlot: "Afternoon Session: Innovation",
            items: [
              { title: "AI Agent Startup Bootcamp", desc: "Practical sessions on building and deploying agentic workflows." },
              { title: "Tech Expo & Innovation Showcase", desc: "Live demonstrations of cutting-edge AI solutions." },
              { title: "Future Horizons Panel", desc: "Expert discussion on the societal and industrial impact of AI." },
              { title: "Networking Mixer", desc: "Conclusion with community engagement and partnership building." }
            ]
          }
        ]
      }
    },
    volunteers: {
      hero: {
        title: "NECINA Volunteers Team",
        description: "At the core of NECINA’s success is a passionate and dedicated Volunteers Team — professionals and students who contribute their time, expertise, and creativity to help our community thrive.",
        image: "/volunteers_team.jpg"
      },
      summaryHeading: "NECINA Volunteers Team",
      summaryBody: "At the core of NECINA’s success is a passionate and dedicated Volunteers Team — professionals and students who contribute their time, expertise, and creativity to help our community thrive. \n\n Since its founding in 1996, NECINA has relied on the spirit of volunteerism to drive its mission of connecting, empowering, and inspiring professionals across technology, business, and innovation.",
      values: {
        title: "NECINA 愿景, 使命, 价值观",
        vision: "A place where you can Connect, Create and Grow.",
        mission: "To facilitate professional networking, To promote cutting edge technologies, To foster entrepreneurship and leadership.",
        coreValues: ["Passionate attitude", "Dependable relationships", "Talent excellence"],
        gridTitle: "NECINA Value",
        gridDescription: "Passionate attitude, Dependable relationships, Talent excellence."
      },
      spotlight: {
        name: "NECINA Team 2023-24",
        bio: "The dedicated individuals leading our volunteer initiatives and community engagement.",
        image: "/volunteers_team.jpg"
      }
    },
    leaders: {
      hero: {
        title: "NECINA Leaders",
        description: "Celebrating three decades of visionary leadership and community excellence.",
        image: "/NECINA Leaders.jpg"
      },
      founders: {
        title: "Our Founders",
        content: "NECINA was founded in 1996 by a group of visionary Chinese-American professionals in the Greater Boston area who shared a common goal: “To build a platform for knowledge sharing, professional growth, and community contribution through technology and networking.”",
      },
      presidents: {
        title: "Our Presidents",
        content: "Over the past three decades, NECINA has been led by a succession of talented and dedicated Presidents and Executive Teams, each bringing their own vision and energy to advance the organization’s mission.",
        list: [
          { year: "1996", name: "Wufu Chen" }, { year: "1997", name: "Cheng Wu" }, { year: "1998", name: "Ed Song" },
          { year: "1999", name: "Chi Shue" }, { year: "2000", name: "Hong Yu" }, { year: "2001", name: "Dick Chiu" },
          { year: "2002", name: "Nanying Yin" }, { year: "2003", name: "Alex Wang" }, { year: "2004", name: "Jimmy Wang" },
          { year: "2005", name: "Daryl Luk" }, { year: "2006", name: "Jun Wang" }, { year: "2007", name: "Jipeng Li" },
          { year: "2008", name: "Nick Ning" }, { year: "2009", name: "Daryl Luk" }, { year: "2010", name: "Jenny Chen" },
          { year: "2011", name: "Sean Shen" }, { year: "2012", name: "Mingsheng Hong" }, { year: "2013", name: "Ru Zheng" },
          { year: "2014", name: "Ben Tao" }, { year: "2015", name: "John Wang" }, { year: "2016", name: "Tony Tian" },
          { year: "2017", name: "Andy Li" }, { year: "2018", name: "Victor Cao" }, { year: "2019", name: "Harry Gao" },
          { year: "2020", name: "Connie Dai" }, { year: "2021", name: "Claire Jin" }, { year: "2022", name: "Scott Li" },
          { year: "2023-24", name: "John Zhuang" }, { year: "2025-26", name: "Bing He" }, { year: "2026-27", name: "Caroline Lu" },
        ]
      },
      spotlight: {
        title: "Current President",
        name: "Caroline Lu",
        term: "2026-2027",
        image: "/NECINA Leaders.jpg",
        bio: "Senior community leader and executive active in driving organizational modernization, cross-generational outreach, and strategic educational partnerships.",
      }
    }
  },
  zh: {
    journey: {
      hero: {
        title: "三十载征程",
        description: "从互联网时代 to AI 时代——三十年的成长与进化。",
        image: "/30 Years Journey.png"
      },
      content: {
        heading: "创新的传承",
        body: "30年来，我们一起创造和见证了NECINA的历史，也在NECINA社区平台成长。我们的旅程记录了新英格兰乃至全球技术的快速演进。",
        items: [
          { title: "20周年庆典", desc: "标志性的庆祝活动，包括社区时装秀和传承对话。" },
          { title: "2024年度会议", desc: "为下一个十年的数字化转型奠定基础。" },
          { title: "2023 AI大会", desc: "探讨生成式 AI 对专业工作流程的即时影响。" }
        ]
      }
    },
    ceremony: {
      hero: {
        title: "三十周年庆典",
        description: "汇聚 AI，转化生活品质 —— 物理 AI 与生物 AI。",
        image: "/30th Anniversary Ceremony.jpg"
      },
      event: {
        date: "2026年6月13日",
        venue: "本特利大学会议中心, Waltham, MA",
        theme: "物理 AI 与生物 AI",
        logoTitle: "全新周年标识",
        logoDesc: "“NECINA 30年 —— 从互联网到AI”标识保留了标志性的灯塔，象征着我们在拥抱 AI 浪潮的同时，继续履行新英格兰华人社区信息导航者的角色。",
        image: "/30th Anniversary Ceremony.jpg"
      }
    },
    yes20: {
      hero: {
        title: "YES 二十周年 (Youth Entrepreneurship Service)",
        description: "自 2006 年起激励下一代创新者",
        image: "/yes_group_photo.jpg"
      },
      about: {
        title: "赋能未来领袖",
        content: "青年创业服务 (YES) 项目成立于 2006 年，致力于为大波士顿及新英格兰地区的中学生和大学生提供实战性的创业教育。从最初的小型导师计划发展至今，YES 已成为 NECINA 的旗舰项目——一个连接年轻人与现实世界创新、专业指导并助力下一代领袖成长活力生态系统。",
        curriculum: [
          "创意构建 (Ideation)",
          "市场验证 (Market Validation)",
          "销售与营销 (Sales and Marketing)",
          "财务与会计 (Accounting & Finance)",
          "导师分场 (Mentorship Sessions)",
          "创业大赛 (Competition)"
        ],
        gridTitle: "YES 课程大纲",
        gridDescription: "我们的创业培训计划旨在激发创新和企业家精神。"
      },
      videos: [
        {
          title: "YES - 20 年的影响 (陶东斌 Ben Tao)",
          desc: "关于 NECINA 社区二十年培养创新与领导力的回顾。",
          url: "https://www.youtube.com/watch?v=pdIQUqs_YuM&t=3s"
        }
      ]
    },
    events: {
      hero: {
        title: "NECINA 会议与活动",
        description: "三十年紧跟技术浪潮，赋能社区创新。",
        image: "https://img.youtube.com/vi/M5RB08XB5Fk/maxresdefault.jpg"
      },
      summaryHeading: "NECINA 会议与活动",
      summaryBody: "NECINA 积极拥抱科技浪潮：从早期的通信网络，到物联网，电子商务，云计算，大数据，区块链，3D打印，移动APP，5G网络，FinTech，电车，以及近年大众瞩目的AI。",
      videoUrl: "https://youtu.be/M5RB08XB5Fk",
      videoCaption: "NECINA AI Agent 科技大会 2025 预告",
      techLegacy: {
        title: "技术进阶之路",
        content: "回顾 NECINA 过往三十年共同走过的路，NECINA 始终站在创新的最前沿，助力社区成员理解并应用每一代颠覆性技术。",
        featured: "2025 AI Agent 科技大会"
      },
      conferenceFeature: {
        title: "NECINA AI Agent 科技大会 2025",
        intro: "庆祝创新、领导力和社区三十周年",
        description: "这一里程碑式的活动重点关注智能自动化的下一个前沿，以及 YES 项目 20 年的辉煌历程。",
        details: {
          date: "2025年12月13日",
          venue: "牛顿市政厅礼堂 (Newton City Hall Auditorium)",
          theme: "庆祝创新、领导力和社区三十周年"
        }
      },
      agenda: {
        title: "活动议程",
        sessions: [
          {
            timeSlot: "上午阶段：里程碑",
            items: [
              { title: "签到与社区交流", desc: "签到及早间专业社交。" },
              { title: "开幕仪式", desc: "三十周年欢迎致辞及愿景演讲。" },
              { title: "YES 二十周年特辑", desc: "特别展示，纪念青年创业服务项目二十年来的创新成果。" },
              { title: "科技前沿：AI Agent 的演进", desc: "技术主题演讲，探讨智能体技术的未来发展。" }
            ]
          },
          {
            timeSlot: "下午阶段：创新实践",
            items: [
              { title: "AI Agent 创业训练营", desc: "深入探讨如何构建和部署智能体工作流。" },
              { title: "科技博览与创新展示", desc: "前沿 AI 解决方案的现场演示。" },
              { title: "未来视野专题讨论", desc: "专家共同探讨 AI 对社会和行业的深远影响。" },
              { title: "社交酒会", desc: "与社区成员及合作伙伴深度交流。" }
            ]
          }
        ]
      }
    },
    volunteers: {
      hero: {
        title: "志愿者团队 (Volunteers Team)",
        description: "NECINA 成功的核心是充满热情的专业志愿者团队。",
        image: "/volunteers_team.jpg"
      },
      summaryHeading: "NECINA 志愿者团队",
      summaryBody: "NECINA 成功的核心是充满热情的专业志愿者团队——包括贡献时间、专业知识和创造力以助力社区繁荣的专业人士和学生。 \n\n 自 1996 年成立以来，NECINA 一直依靠志愿者精神驱动其连接、赋能和激励科技、商业与创新领域专业人士的使命。",
      values: {
        title: "NECINA 愿景, 使命, 价值观",
        vision: "一个你可以连接、创造和成长的地方。",
        mission: "促进职业社交, 推广前沿科技, 培养创业家精神和领导力。",
        coreValues: ["热情的态度", "可靠的关系", "卓越的人才"],
        gridTitle: "NECINA 价值观",
        gridDescription: "热情的态度, 可靠的关系, 卓越的人才。"
      },
      spotlight: {
        name: "NECINA 2023-24 团队",
        bio: "这些致力于引领我们志愿者倡议和社区参与的敬业个人。",
        image: "/volunteers_team.jpg"
      }
    },
    leaders: {
      hero: {
        title: "NECINA 领导者",
        description: "庆祝三十年来远见卓识的领导力和卓越的社区贡献。",
        image: "/NECINA Leaders.jpg"
      },
      founders: {
        title: "我们的创始人",
        content: "NECINA 由一群大波士顿地区富有远见的华裔专业人士于 1996 年创立。他们的共同目标是：“通过技术和社交建立一个知识共享、职业成长和社区贡献的平台”。",
      },
      presidents: {
        title: "历任会长",
        content: "在过去的三十年里，NECINA 由历任才华横溢、敬业负责的会长和执行团队领导，每一位都为推进组织的使命带来了自己的愿景和精力。",
        list: [
          { year: "1996", name: "陈五福 Wufu Chen" }, { year: "1997", name: "吴锦城 Cheng Wu" }, { year: "1998", name: "宋利伟 Ed Song" },
          { year: "1999", name: "许基康 Chi Shue" }, { year: "2000", name: "余 鸿 Hong Yu" }, { year: "2001", name: "邱瑞贤 Dick Chiu" },
          { year: "2002", name: "尹南鹰 Nanying Yin" }, { year: "2003", name: "王 雷 Alex Wang" }, { year: "2004", name: "王义明 Jimmy Wang" },
          { year: "2005", name: "陆德礼 Daryl Luk" }, { year: "2006", name: "王 军 Jun Wang" }, { year: "2007", name: "李纪鹏 Jipeng Li" },
          { year: "2008", name: "宁 可 Nick Ning" }, { year: "2009", name: "陆德礼 Daryl Luk" }, { year: "2010", name: "陈君瑶 Jenny Chen" },
          { year: "2011", name: "沈心焯 Sean Shen" }, { year: "2012", name: "洪銘胜 Mingsheng Hong" }, { year: "2013", name: "郑 茹 Ru Zheng" },
          { year: "2014", name: "陶东斌 Ben Tao" }, { year: "2015", name: "王振榕 John Wang" }, { year: "2016", name: "田 田 Tony Tian" },
          { year: "2017", name: "李震宇 Andy Li" }, { year: "2018", name: "曹江山 Victor Cao" }, { year: "2019", name: "高 弘 Harry Gao" },
          { year: "2020", name: "戴晨方 Connie Dai" }, { year: "2021", name: "金世维 Claire Jin" }, { year: "2022", name: "李思佳 Scott Li" },
          { year: "2023-24", name: "庄辉壮 John Zhuang" }, { year: "2025-26", name: "何 冰 Bing He" }, { year: "2026-27", name: "卢妤婧 Caroline Lu" },
        ]
      },
      spotlight: {
        title: "现任会长",
        name: "卢妤婧",
        term: "2026-2027",
        image: "/NECINA Leaders.jpg",
        bio: "深耕科技社区与教育赋能的资深管理者，致力于推动 NECINA 组织现代化、青年跨代传承与全球教育资源合作。",
      }
    }
  }
};

export const STYLE_TOKENS: Record<DesignStyle, Record<string, string>> = {
  modern: {
    '--surface': '#FFFFFF',
    '--surface2': '#F5FBFF',
    '--border': 'rgba(41, 176, 233, 0.25)',
    '--text': '#0b1220',
    '--muted': '#42566b',
    '--radius': '28px',
    '--shadow': '0 16px 50px rgba(41, 176, 233, 0.18)',
    '--hero': 'radial-gradient(1200px 600px at 20% 0%, #D4EFFB 0%, #FFFFFF 60%)',

    // Hero
    '--heroBg': '#070B14',
    '--heroGlow1': 'rgba(41,176,233,0.55)',
    '--heroGlow2': 'rgba(212,239,251,0.35)',
    '--heroText': '#FFFFFF',
  },
};
