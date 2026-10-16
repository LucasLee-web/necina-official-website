// Authoritative data synchronized strictly with official NECINA pages:
// Source 1: https://necina.org/content/about-necina
// Source 2: https://necina.org/content/necina-leadership

export interface BoardMember {
  id: string;
  order: number;
  name: string;
  name_zh: string;
  title: string;
  title_zh: string;
  distinction: string;
  distinction_zh: string;
  photo: string;
  bio: string[];
  bio_zh: string[];
  links?: { label: string; url: string }[];
}

export interface TeamMember {
  name: string;
  name_zh?: string;
  role: string;
  role_zh?: string;
  bioUrl?: string;
  linkedin?: string;
  email?: string;
  photo?: string;
  bio?: string;
  bio_zh?: string;
}

export interface TeamGroup {
  name: string;
  name_zh: string;
  email?: string;
  members: TeamMember[];
}

export interface LeadershipTerm {
  term: string;
  term_zh: string;
  president: TeamMember;
  vicePresident?: TeamMember;
  immediatePastPresident?: TeamMember;
  programTeams: TeamGroup[];
  operationTeams: TeamGroup[];
}

export interface AboutNecinaContent {
  title: string;
  title_zh: string;
  subtitle: string;
  subtitle_zh: string;
  visionSlogan: string;
  visionSlogan_zh: string;
  foundingDescription: string;
  foundingDescription_zh: string;
  missions: {
    title: string;
    title_zh: string;
    description: string;
    description_zh: string;
  }[];
  programsIntro: string;
  programsIntro_zh: string;
  pillars: {
    number: string;
    title: string;
    title_zh: string;
    summary?: string;
    summary_zh?: string;
    items: {
      name: string;
      name_zh: string;
      tagline?: string;
      tagline_zh?: string;
      description: string;
      description_zh: string;
      links?: { label: string; url: string }[];
    }[];
  }[];
  officialLinks: { label: string; label_zh: string; url: string }[];
  officialVideos: { title: string; title_zh: string; url: string; videoId: string }[];
}

export const ABOUT_NECINA_DATA: AboutNecinaContent = {
  title: 'About NECINA',
  title_zh: '关于 NECINA',
  subtitle: 'New England Chinese Information and Networking Association',
  subtitle_zh: '纽英伦中华资讯网络协会',
  visionSlogan: 'NECINA is a place for you to Connect, Create and Grow.',
  visionSlogan_zh: '“一个你可以连接、创造和成长的地方。” (Connect, Create and Grow)',
  foundingDescription:
    'Founded in 1996, NECINA is a 501(c)(3) tax exempt non-profit organization that connects and empowers professionals of all age and all disciplines in New England and beyond, through learning and embracing new technology and latest innovation, facilitating entrepreneurship, and enhancing career and professional skills. NECINA also serves as a platform for our members, volunteers, sponsors and partners to networking and building long lasting professional and social relationships.',
  foundingDescription_zh:
    '纽英伦中华资讯网络协会（NECINA）成立于 1996 年，是一家经美国国税局批准的 501(c)(3) 免税非营利专业组织。协会致力于连接和赋能新英格兰及更大区域内所有年龄段与各学科领域的专业人士，通过学习和拥抱前沿科技与最新创新、助力创业实践，以及提升职场与专业技能。同时，NECINA 为会员、志愿者、赞助商和合作伙伴提供了一个建立长期职业与社交关系的卓越平台。',
  missions: [
    {
      title: 'Empowerment',
      title_zh: '赋能发展 (Empowerment)',
      description: 'Empowering individuals and businesses through technology, innovation, and entrepreneurship.',
      description_zh: '通过前沿科技、持续创新与创业实践，赋能个人与企业成长。'
    },
    {
      title: 'Leadership Development',
      title_zh: '领袖培育 (Leadership Development)',
      description: 'Nurturing leadership skills, fostering career advancement, and facilitating networking opportunities.',
      description_zh: '培育卓越领导力素养，推动职业阶梯进阶，并创造全方位的专业社交机遇。'
    },
    {
      title: 'Inclusive Communities',
      title_zh: '包容社区 (Inclusive Communities)',
      description: 'Cultivating inclusive, well-informed, and engaged communities.',
      description_zh: '构建兼具包容性、前瞻洞察力与深度参与感的高科技社区生态。'
    }
  ],
  programsIntro:
    'Our programs will primarily consist of Technology, Entrepreneurship and Leadership & Career Development. Read about our programs, find what fits you and join NECINA today.',
  programsIntro_zh:
    '我们的核心项目主要涵盖：科技创新、创业孵化以及领袖与职业发展。探索我们的项目矩阵，找到最契合您的舞台，即刻加入 NECINA。',
  pillars: [
    {
      number: '1',
      title: 'Promote technologies and Innovations',
      title_zh: '推广前沿科技与持续创新',
      items: [
        {
          name: 'Necina Technology Conference (NTC)',
          name_zh: 'NECINA 科技大会 (NTC)',
          tagline: 'Vision & Trend',
          tagline_zh: '行业远瞻与科技趋势',
          description:
            'We will host several technology conferences featured by leaders in academic and/or enterprises of a particular industry or a technology. It will offer you insights and analytics of the latest innovation trend, its application, and often times, topics centered interdisciplinary fields.',
          description_zh:
            '我们将举办多场高规格科技大会，特邀来自特定行业或技术领域的顶尖学术先锋与领军企业高管发表演讲。大会为您提供前沿创新趋势、技术落地应用的深度洞察与独家剖析，议题常跨越多个交叉学科前沿领域。',
          links: [
            {
              label: 'Learn about our past Technology Conferences here',
              url: 'https://www.necina.org/content/conferences'
            }
          ]
        },
        {
          name: 'ABC Transform Workshop (ABC)',
          name_zh: 'ABC 数字化转型工坊 (ABC)',
          tagline: 'Digital Transform',
          tagline_zh: '数字化全面转型',
          description:
            'with AI Bigdata Cloudcomputing digital transforming everything',
          description_zh:
            '聚焦 AI（人工智能）、Big Data（大数据）、Cloud Computing（云计算），全面赋能万物数字化转型。'
        },
        {
          name: 'SIG Disruptive Workshop (SIG)',
          name_zh: 'SIG 颠覆式技术研讨 (SIG)',
          tagline: 'New Disruptives',
          tagline_zh: '颠覆式突破创新',
          description:
            'with Special Interest Groups, something new and disruptive',
          description_zh:
            '由专业兴趣小组（Special Interest Groups）主导，探索前沿、颠覆性的全新技术浪潮。'
        }
      ]
    },
    {
      number: '2',
      title: 'Foster entrepreneurship and leadership',
      title_zh: '培养创业家精神与领袖才能',
      items: [
        {
          name: 'Necina Innovation Challenge (NIC)',
          name_zh: 'NECINA 创新挑战赛 (NIC)',
          tagline: 'Innovate',
          tagline_zh: '勇于突破与创新',
          description:
            'NECINA launched a revolutionary Necina Innovation Challenge competition since October of 2020. The challenge is open for individuals or a team of individuals of 16 and older. Our goal is to stimulate and encourage creative and innovative ideas to alleviate a pain or respond to a need in a product or process. You will have access to NECINA’s vast resources to help turn your idea to a feasible solution.',
          description_zh:
            'NECINA 于 2020 年 10 月发起了具有革新意义的创新挑战赛（NIC）。比赛面向 16 岁及以上的个人或战队开放。我们的目标是激发和鼓励创造性的突破思维，以解决痛点或回应产品与流程中的实际需求。参赛者将对接 NECINA 庞大的生态资源，将优秀构想转化为切实可行的落地方案。'
        },
        {
          name: 'Career & Leadership Development (CLD)',
          name_zh: '职业与领导力发展高峰论坛 (CLD)',
          tagline: 'Influence',
          tagline_zh: '拓展职场影响力',
          description:
            'NECINA’s Career & Leadership Development has been one of the well-attended career summits in New England region organized by professional nonprofits since 2014. Each year round 150 - 200 attendees of recent graduates, young professionals and mid-career advancers would exploit speaker sessions, industry panel discussions, mock interviews, resume critiques, and job fair. NECINA has realized early on that professional qualities particularly leadership skills are central to successful career and personal advancement. Our members have had the opportunities to hear from company executives and career coaches on tips and ways to improve these capabilities.',
          description_zh:
            '自 2014 年起，NECINA 的职业与领导力发展论坛（CLD）已成为新英格兰地区非营利专业组织中最受欢迎的年度职业峰会之一。每年有 150 至 200 名应届毕业生、青年职场新人与中高层进阶者参与演讲论坛、行业圆桌、模拟面试、简历精修及专场招聘会。NECINA 深刻认识到职业素养（尤其是领导力技能）是取得职业成功与个人进阶的核心动力。'
        },
        {
          name: 'Youth Entrepreneurship Service (YES)',
          name_zh: '青年创业服务项目 (YES)',
          tagline: 'Inspire',
          tagline_zh: '启迪下一代未来领袖',
          description:
            'One of our prominent Entrepreneurship programs is the Youth Entrepreneurship Services (YES). This term will mark the seventeen (18th) year for YES! It is specifically designed for high school students to learn and form a framework about how to start a business. Students will also develop essential skills and qualities needed to be a successful entrepreneur. IBM has been the proud sponsor and followed by Thermo Fisher Scientific etc.',
          description_zh:
            '作为 NECINA 最具标志性的创业项目之一，青年创业服务（YES）专为高中学子量身设计，系统学习并建立创办企业的完整框架。学生在此培养成为成功创业者所需的核心技能与坚韧品质。IBM 长期作为荣誉赞助商，赛默飞世尔（Thermo Fisher Scientific）等众多名企亦持续大力支持。',
          links: [
            {
              label: 'Learn about our past YES program here',
              url: 'https://www.necina.org/content/yes-yes-18'
            }
          ]
        }
      ]
    },
    {
      number: '3',
      title: 'Facilitate networking and connections',
      title_zh: '拓展专业社交与人脉连接',
      summary: 'Provide networking opportunities throughout all events and programs, chapters and clubs.',
      summary_zh: '通过全线大型活动、年度项目、各区域分会与专属俱乐部，提供全方位的高价值人脉社交网络。',
      items: [
        {
          name: 'Necina Entrepreneurs Club (eCLUB)',
          name_zh: 'NECINA 创业家俱乐部 (eCLUB)',
          tagline: 'Impact',
          tagline_zh: '赋能商业实战与扩张',
          description:
            'Since 2011, eCLUB has been a consortium of founders and executives of established companies. The mission of the eCLUB is to help member companies grow in scale and acquire business opportunities by connecting them to successful entrepreneurs, financing sources, service providers as well as suppliers and strategic partners. eCLUB has a track record as a social network platform for all interested parties to share and exchange knowledge and success stories.',
          description_zh:
            '自 2011 年创设以来，eCLUB 一直是成熟企业创始人与高管的精英联盟。eCLUB 的使命是通过连接成功创业家、风险融资渠道、专业服务机构、供应链及战略伙伴，帮助成员企业实现规模化扩张并斩获商业机遇。eCLUB 拥有扎实成熟的社交网络生态，供各方深度交流实战经验与商业成功案例。',
          links: [
            {
              label: 'Learn more about eCLUB here',
              url: 'https://www.necina.org/content/e-club'
            }
          ]
        },
        {
          name: 'Necina Innovators Club (iCLUB)',
          name_zh: 'NECINA 极客创新者俱乐部 (iCLUB)',
          tagline: 'Connect',
          tagline_zh: '硬核动手与实战连接',
          description:
            'For those of you that want to finetune your “geek” skills, iCLUB is for you. It is a special interest group where all participants will perform “hands on practices” of a particular technical task, sometimes to resolve a real-world solution. An expert with superior or advanced skill in this area will be the iCLUB’s facilitator.',
          description_zh:
            '专为希望精进硬核“极客”技能的技术专家打造。iCLUB 是一个专注于特定技术任务“动手实战”的兴趣群体，共同攻坚现实工程难题。每期均由该领域具备顶尖造诣的技术专家担任导师。'
        },
        {
          name: 'NECINA Local Chapters',
          name_zh: 'NECINA 区域分会网络 (Chapters)',
          description:
            'Also, various NECINA local chapters across the New England (NH-RI-CT-NY-NJ and beyond). Connecting regional hubs and university campuses across the Northeast.',
          description_zh:
            '此外，NECINA 在新英格兰及更大区域（包括新罕布什尔 NH、罗德岛 RI、康涅狄格 CT、纽约 NY、新泽西 NJ 及更多地区）建立了广泛的本地分会生态，紧密连接美东各区域高科技园区与高校枢纽。'
        }
      ]
    }
  ],
  officialLinks: [
    {
      label: 'Membership Information & Benefits',
      label_zh: '官方会员通道与权益介绍',
      url: 'https://www.necina.org/content/membership'
    },
    {
      label: 'Technology Conferences Archive',
      label_zh: '历届科技大会专题档案',
      url: 'https://www.necina.org/content/conferences'
    },
    {
      label: 'Youth Entrepreneurship Service (YES)',
      label_zh: 'YES 青年创业项目官方主页',
      url: 'https://www.necina.org/content/yes-yes-18'
    },
    {
      label: 'Entrepreneurs Club (eCLUB)',
      label_zh: '创业家俱乐部 (eCLUB) 官方介绍',
      url: 'https://www.necina.org/content/e-club'
    }
  ],
  officialVideos: [
    {
      title: 'NECINA Community Story & Mission Spotlight',
      title_zh: 'NECINA 社区发展历程与使命聚焦',
      url: 'https://www.youtube.com/watch?v=4Ov3ew2oOVk&t=12s',
      videoId: '4Ov3ew2oOVk'
    },
    {
      title: 'NECINA Leadership & Technology Insights',
      title_zh: 'NECINA 领导力发展与前沿科技洞见',
      url: 'https://www.youtube.com/watch?v=fWasFfVKjyk&t=5s',
      videoId: 'fWasFfVKjyk'
    },
    {
      title: 'NECINA 30-Year Legacy: Innovators Across Generations',
      title_zh: 'NECINA 三十载传承：跨代创新者同行',
      url: 'https://www.youtube.com/watch?v=Z0rkl-pUv3M&t=12s',
      videoId: 'Z0rkl-pUv3M'
    }
  ]
};

// ============================================================================
// BOARD MEMBERS: ABSOLUTE ORDER PRESERVATION (1 to 11 strictly preserved)
// Verbatim from https://necina.org/content/necina-leadership
// ============================================================================

export const BOARD_MEMBERS_DATA: BoardMember[] = [
  {
    id: 'cheng-wu',
    order: 1,
    name: 'Cheng Wu',
    name_zh: '吴锦城',
    title: 'Honorary Chairman / Founder and Chairman of the Board of Acopia Networks.',
    title_zh: '荣誉董事长 / Acopia Networks 创始人兼董事长',
    distinction: 'Honorary Chairman',
    distinction_zh: '荣誉董事长',
    photo: '/images/board/cheng_wu.jpg',
    bio: [
      'Mr. Wu also held various executive positions at Cisco including VP of Strategy and Group VP and General Manager for Cisco’s Content and Multiservice Edge Group. Mr. Wu joined Cisco in June 2000 through Cisco’s $5.7B acquisition of ArrowPoint Communications where he was the Founder, Chairman of the Board, and CEO. Before ArrowPoint, he co-founded Arris Networks, a Massachusetts based company that developed high-density Internet access products. Seven months later Arris was sold to Cascade Communications for $150M.',
      'The highlight of his 20-year career was being named to InteractiveWeek magazine’s “Top 25 Unsung Heroes of the Internet” list in 2000. His better half is Shalin Wu. Boards and Achievements: Key Industry Player award by Massachusetts Telecom Council in 2002; Second largest corporate merger in Massachusetts history; Board member: Massachusetts Telecom Council, Data Power Corporation – www.datapower.com , and Ammasso – www.ammasso.com . Chairman of the Board: Acopia Networks – www.acopia.com . Honorary Chairman of the Board: NECINA.'
    ],
    bio_zh: [
      '吴锦城先生曾担任思科（Cisco）多项高管职位，包括战略副总裁以及内容与多业务边缘事业部集团副总裁兼总经理。2000 年 6 月，思科以 57 亿美元巨资并购由他创办并担任董事长兼首席执行官的 ArrowPoint Communications，吴先生随之加入思科。在创立 ArrowPoint 之前，他在马萨诸塞州共同创立了开发高密度互联网接入产品的 Arris Networks；仅七个月后，Arris 便以 1.5 亿美元出售给 Cascade Communications。',
      '在他 20 年的职业生涯中，最瞩目的亮点之一是在 2000 年被《InteractiveWeek》杂志评选为“互联网 25 位幕后英雄”之一。其夫人为 Shalin Wu。董事会职务与杰出成就包括：2002 年荣获麻省电信委员会“关键行业领袖奖”；主导了麻省历史上第二大企业并购案；曾担任麻省电信委员会、Data Power Corporation 及 Ammasso 董事会董事；曾任 Acopia Networks 董事长；现任 NECINA 董事会荣誉董事长。'
    ],
    links: [
      { label: 'Acopia Networks', url: 'http://www.acopia.com' },
      { label: 'Data Power', url: 'http://www.datapower.com' }
    ]
  },
  {
    id: 'wufu-chen',
    order: 2,
    name: 'Wufu Chen',
    name_zh: '陈五福',
    title: 'An established entrepreneur. He has started more than a dozen companies',
    title_zh: '资深科技创业家与投资人，创立了十余家高科技企业',
    distinction: 'Co-Founder & Board Member',
    distinction_zh: '联合创始人兼董事会董事',
    photo: '/images/board/wufu_chen.jpg',
    bio: [
      'Mr. Chen is an established entrepreneur. He has started more than a dozen companies, including Cascade Communications (IPO in Nasdaq, $10B), Cameo Communications (IPO in Taiwan), GaoHong (IPO in China), Xinwei Telecom (IPO in China, near $30B), Arris Networks (acquired by Cascade), Ardent Communications, Navini Networks (acquired by Cisco) and Shasta Networks (acquired by Nortel). The industry has recognized Mr. Chen’s operational and entrepreneurial excellence with numerous awards; such as quoted as “The Germinator” on the front page of the Wall Street Journal, the top ten entrepreneurs of 2000 by Red Herring magazine, Life Time achievement award by Optix, and Heavy Weights in Optical Networks by Light Reading.',
      'Mr. Chen is also an established investor as co-founder of Acorn Campus, Genesis Campus, & iD SoftCapital. Forbes Magazine ranked him as one of the top 100 venture investors in the U.S in 2002.',
      'Mr. Chen enrolled in CS PhD program at UC Berkeley, received MSEE from the University of Florida at Gainesville, and BSEE degree from National Taiwan University.'
    ],
    bio_zh: [
      '陈五福先生是享誉业界的资深科技创业家，先后创办了十余家知名高科技企业，包括 Cascade Communications（纳斯达克上市，市值最高达 100 亿美元）、Cameo Communications（台湾上市）、高鸿股份（中国上市）、信威通信（中国上市，市值近 300 亿美元）、Arris Networks（被 Cascade 并购）、Ardent Communications、Navini Networks（被思科并购）以及 Shasta Networks（被北电网络并购）。业界以众多殊荣肯定了陈先生卓越的运营与创业造诣：他曾登上《华尔街日报》头版被誉为“创业孵化大师”（The Germinator），被《Red Herring》评为 2000 年度十大创业家，荣获 Optix 终身成就奖，并入选 Light Reading 光网络重量级风云人物。',
      '陈先生也是知名创投家，共同创立了橡子园创投（Acorn Campus）、创源（Genesis Campus）及智融（iD SoftCapital）。《福布斯》杂志在 2002 年将他评选为全美前 100 名顶尖风险投资人之一。',
      '陈先生曾就读于加州大学伯克利分校计算机博士项目，获佛罗里达大学电气工程硕士学位，以及台湾大学电气工程学士学位。'
    ]
  },
  {
    id: 'robert-yung',
    order: 3,
    name: 'Robert Yung',
    name_zh: '容兆麟',
    title: 'Chairman/Vice President of Corporate Development and Chief Strategy Officer for Analog Devices Inc.',
    title_zh: '董事长 / Analog Devices 企业发展副总裁兼首席战略官',
    distinction: 'Chairman',
    distinction_zh: '董事会主席 / 董事',
    photo: '/images/board/robert_yung.jpg',
    bio: [
      'Robert Yung, Ph.D. is Vice President of Corporate Development and Chief Strategy Officer for Analog Devices. In this position, Dr. Yung plays a key role in widening the reach of ADI’s existing technology, exploring new areas of signal processing technology, and uncovering new markets and applications where the Company can apply these technologies to accelerate its overall growth rate.',
      'Dr. Yung has an extensive background in technology and emerging market development, having served as the chief technology officer (CTO) of Tessera Technologies and of PMC Sierra. Prior to this, he was CTO for Intel in China, the Intel Communication Group, and the Intel Enterprise Processor Group. Dr. Yung has also served as CTO for Sun Microsystems and was a lead architect in Sun’s UltraSPARC microprocessor program. He was a co-founder and partner of GSR Ventures, which specializes in providing equity funding of early-stage technology in semiconductors, wireless, and Internet services. Dr. Yung was named to the National Committee on United States-China Relations as a Fellow during the inaugural Young Leader Forum in 2002. In 2000, he was named to the World Economic Forum’s “Top 100 Global Leaders for Tomorrow,” in Davos, Switzerland. Dr. Yung earned Ph.D., MS, and BA degrees in Electrical Engineering from the University of California at Berkeley.'
    ],
    bio_zh: [
      '容兆麟博士现任 Analog Devices（亚德诺半导体）企业发展副总裁兼首席战略官。在该职位上，容博士在拓展 ADI 现有技术影响力、探索信号处理新兴前沿领域，以及挖掘可应用这些技术加速公司整体增长率的新市场与应用方面发挥着关键作用。',
      '容博士在技术研发与新兴市场拓展方面拥有深厚背景，曾任 Tessera Technologies 和 PMC Sierra 首席技术官（CTO）。在此之前，他曾担任英特尔（Intel）中国区 CTO、英特尔通信事业部 CTO 及英特尔企业级处理器事业部 CTO。容博士还曾担任 Sun Microsystems 首席技术官，并且是 Sun 传奇 UltraSPARC 微处理器项目的核心首席架构师。他是金沙江创投（GSR Ventures）的联合创始人兼合伙人，专注于半导体、无线与互联网服务早期投资。2002 年美中关系全国委员会首届青年领袖论坛上，他被任命为理事 Fellow；2000 年在瑞士达沃斯世界经济论坛上被评为“全球明日领袖百强”（Top 100 Global Leaders for Tomorrow）。容博士在加州大学伯克利分校获得电气工程博士、硕士和学士学位。'
    ]
  },
  {
    id: 'joan-ni',
    order: 4,
    name: 'Joan Ni',
    name_zh: '倪继红',
    title: 'President of Suzhou-Chem Inc.',
    title_zh: '苏州化学 (Suzhou-Chem Inc.) 总裁',
    distinction: 'Board Member',
    distinction_zh: '董事会董事',
    photo: '/images/board/joan_ni.jpg',
    bio: [
      'With a chemical engineering background, Joan established a successful importing and distribution business in 2001 serving the North America food, beverage, supplement industries.',
      'Joan served as board member of Newton Chinese Language School and currently serves as the President of Boston Zhejiang University Alumni Association and as the Director of the American Zhu Kezhen Education foundation. Joan was NECINA’s General Manager and Vice President for 6 years.'
    ],
    bio_zh: [
      '凭借深厚的化学工程专业背景，倪继红女士于 2001 年创立了极具影响力的进出口与分销企业，为北美食品、饮料及膳食补充剂行业提供专业服务。',
      '倪继红曾任牛顿中文学校董事会董事，目前担任波士顿浙江大学校友会会长以及美国竺可桢教育基金会理事。她曾连续 6 年担任 NECINA 总经理（General Manager）与副总裁（Vice President）。'
    ]
  },
  {
    id: 'tony-ho',
    order: 5,
    name: 'Tony Ho',
    name_zh: '贺通',
    title: 'Vice President, Business Development, Segway-Ninebot Group',
    title_zh: '九号公司 (Segway-Ninebot Group) 业务拓展副总裁',
    distinction: 'Board Member',
    distinction_zh: '董事会董事',
    photo: '/images/board/tony_ho.jpg',
    bio: [
      'Segway is the inventor of the namesake Segway self-balancing vehicle. The company is currently publicly traded on Shanghai Exchange (689009). Tony is leading Segway’s effort in developing mid to long term growth opportunities, and building strategic partnership with key players in the micromobility and robotics ecosystem.',
      'Tony was a serial entrepreneur and an advisor to a number of early stage technology companies. He was formerly board member and Chief Operating Officer for Fangjia.com, a home valuation website based on big data and vertical search technology. Prior to that he was VP of Product and Director of Business Development for Myvu/MicroOptical, as well as other roles in technology early stage companies. Tony also worked for Procter & Gamble as a Manager in a variety of functions. Tony attended Harvard Business School where he earned his MBA, the University of Toronto, where he earned a Engineering Degree (M.Sc.) in Robotics, and the University of Manitoba where he earned a B.Sc. Degree in Mechanical & Industrial Engineering. Tony was a long time NECINA alumni, and former VP before returning to China. He led the effort in successful launch of the first NECINA Business Plan Competition in 2005.'
    ],
    bio_zh: [
      'Segway 是享誉全球的同名自平衡车发明者。该公司目前在上海证券交易所上市（证券代码：689009）。贺通先生统领 Segway 中长期业务增长机会开发，并与微出行和机器人产业生态中的核心领军企业建立战略合作伙伴关系。',
      '贺通先生是一位连环创业家，并担任多家早期高科技公司的顾问。他曾担任基于大数据和垂直搜索技术的房产评估网站房价网（Fangjia.com）的董事会董事兼首席运营官。在此之前，他曾任 Myvu/MicroOptical 产品副总裁兼业务发展总监，并在多家早期科技企业历任核心职务。贺先生还曾在宝洁公司（Procter & Gamble）担任多职能部门经理。贺先生拥有哈佛商学院工商管理硕士（MBA）学位、多伦多大学机器人工程硕士（M.Sc.）学位，以及曼尼托巴大学机械与工业工程理学学士学位。贺先生是 NECINA 资深理事校友，在归国前曾担任 NECINA 副会长，并主导成功创办了 2005 年首届 NECINA 商业计划书大赛。'
    ]
  },
  {
    id: 'chi-kong-shue',
    order: 6,
    name: 'Chi Kong Shue',
    name_zh: '许基康',
    title: 'Chairman and President of SDSC Global Foundation and CentriHall, Inc.',
    title_zh: 'SDSC 全球基金会与 CentriHall, Inc. 董事长兼总裁',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2000) 兼董事会董事',
    photo: '/images/board/chi_kong_shue.jpg',
    bio: [
      'He has also been involved in the hi-tech venture and private equity investments in Taiwan, China and U.S. since 2002. He had been the Executive Vice President at Sycamore Networks (1998-2003) responsible for the R&D of intelligent optical transport & switching systems and Asia market development. Prior to Sycamore, he was the VP at Ascend Communications and a Co-Founder of Cascade, and the Vice President of Engineering. Both Sycamore and Cascade had very successful IPO’s (SCMR and CSCC on NASDAQ) in 1999 and 1994 respectively. Mr. Shue had served at Open Software Foundation and Wang Laboratories, Inc. from 1978 to 1989.',
      'Mr. Shue was born in Taiwan. He received a B.S.E.E. from ChiaoTung University in Taiwan in 1974, and an MS Degrees in both Computer Sciences and Operations Research from the Pennsylvania State University in 1978. He also studied in Sloan Graduate School of Management at M.I.T. in 1979. Mr. Shue received the Asian-American Achievement Award from the University of Massachusetts in 1998 for his contributions to the economic and social development of the Commonwealth of Massachusetts. He served as the President of NECINA in 2000 and as a Board Director since 1998. Mr. Shue currently holds three U.S. data communication patents and is a member of IEEE and OSA.'
    ],
    bio_zh: [
      '自 2002 年以来，许基康先生深度参与台湾、中国大陆与美国的高科技风投及私募股权投资。他曾任 Sycamore Networks 执行副总裁（1998-2003），统领智能光传输与交换系统研发及亚洲市场拓展。在加入 Sycamore 之前，他曾任 Ascend Communications 副总裁、Cascade 联合创始人兼工程副总裁。Sycamore 和 Cascade 分别于 1999 年和 1994 年在纳斯达克成功挂牌上市（代码 SCMR 与 CSCC）。1978 年至 1989 年，许先生先后供职于开放软件基金会（OSF）和王安电脑公司（Wang Laboratories）。',
      '许先生出生于台湾，1974 年获台湾交通大学电机工程学士学位，1978 年获宾夕法尼亚州立大学计算机科学与运筹学双硕士学位，1979 年进修于麻省理工学院（MIT）斯隆管理学院。1998 年因对马萨诸塞州经济与社会发展的卓越贡献，荣获麻省大学“亚裔美国人杰出成就奖”。他于 2000 年出任 NECINA 会长，并自 1998 年起历任董事会董事。许先生目前持有三项美国数据通信专利，系 IEEE 和 OSA 资深会员。'
    ]
  },
  {
    id: 'ben-tao',
    order: 7,
    name: 'Ben Tao',
    name_zh: '陶东斌',
    title: 'Vice President Corporate Development at PTC',
    title_zh: 'PTC 企业发展副总裁',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2014-2015) 兼董事会董事',
    photo: '/images/board/ben_tao.jpg',
    bio: [
      'Ben Tao is currently Vice President Corporate Development at PTC. In that role, he works closely with Corporate and Segment business leadership teams in formulating acquisition strategies. He worked on a significant number of M&A transactions, especially in the field of Internet of Things, Augmented Reality, and Big Data Analytics, helping transform PTC’s business.',
      'Prior to PTC, he worked as a management consultant for six years, advising clients on a broad range of strategic and management challenges across multiple industries such as high tech, retail, chemical, and private equity. Before starting his career as a management consultant, he worked as a technologist for several leading technology companies including Oracle, Microsoft, and Ericsson.',
      'Ben served as NECINA’s president during the 2014-2015 operating year. He is serving NECINA as one of its board members. Ben received a BS degree in Computer Sciences from Beijing University and an MS degree in Computer Sciences from University of Wisconsin at Madison. He also holds an MBA degree from Babson College.'
    ],
    bio_zh: [
      '陶东斌先生现任工业互联网先锋企业 PTC（参数技术公司）企业发展副总裁。在该职位上，他与公司及各事业部核心高管紧密协作制定战略并购规划。他主导了大量重大收并购交易，特别是在物联网（IoT）、增强现实（AR）以及大数据分析领域，有力推动了 PTC 业务的技术演进与全面转型。',
      '在加入 PTC 之前，他曾担任管理咨询顾问达六年之久，为高科技、零售、化工及私募股权等多元行业的顶尖客户就战略与管理挑战提供咨询。在开启管理咨询生涯之前，他曾在 Oracle、微软（Microsoft）及爱立信（Ericsson）等多家领军科技企业担任资深工程师。',
      '陶东斌先生曾于 2014-2015 年度担任 NECINA 会长，目前作为董事会董事服务于协会。陶先生在北京大学获得计算机科学学士学位，在威斯康星大学麦迪逊分校获得计算机科学硕士学位，并拥有巴布森商学院（Babson College）工商管理硕士（MBA）学位。'
    ]
  },
  {
    id: 'john-wang',
    order: 8,
    name: 'John Wang',
    name_zh: '王振榕',
    title: 'China Program Senior Advisor',
    title_zh: '中国项目资深顾问',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2015-2016) 兼董事会董事',
    photo: '/images/board/john_wang.jpg',
    bio: [
      'John Wang is an automotive product design expert and entrepreneur. He has diverse experience in engineering as well as business management.',
      'Since 2008, John has started several companies. He founded Dreamech developing connected car product/service for car owner and service providers. He was the co-founder/CTO of Wiselink Technology, where he built a team of 30 engineers and technicians developing pioneered telematics product in China for customers including China Mobile, Volkswagen China Joint Venture.',
      'Before 2008, John worked for General Motors and Johnson Controls, and his designs and patents have been widely applied to GM, Ford and Chrysler automobiles. Recently, John joined a startup company developing cutting-edge products for high-end and autonomous vehicles.',
      'John also served as 2015-2016 President of NECINA and has been a NECINA board member since 2016. His education includes MBA (Michigan), MSME and BSME.'
    ],
    bio_zh: [
      '王振榕先生是汽车产品设计专家与连环创业家，在工程研发与企业管理领域拥有广博深厚的实战积淀。',
      '自 2008 年以来，王先生创立了多家科技企业。他创办了 Dreamech，为车主和服务商开发前沿的车联网产品与增值服务。他曾任智车科技（Wiselink Technology）联合创始人兼首席技术官，带领 30 余名工程师团队在中国开发车联网开创性产品，客户涵盖中国移动以及大众汽车中国合资公司。',
      '2008 年之前，王先生先后就职于通用汽车（General Motors）与江森自控（Johnson Controls），其工业设计与专利技术被广泛应用于通用、福特及克莱斯勒等多款量产车型。近期，王先生加入了一家为高端汽车及自动驾驶汽车开发尖端软硬件产品的创新企业。',
      '王先生曾于 2015-2016 年度出任 NECINA 会长，并自 2016 年起连任董事会董事。其教育背景包括密歇根大学工商管理硕士（MBA）、机械工程硕士（MSME）及机械工程学士（BSME）。'
    ]
  },
  {
    id: 'mingsheng-hong',
    order: 9,
    name: 'Mingsheng Hong',
    name_zh: '洪銘胜',
    title: 'AI & Big Data Expert, Google',
    title_zh: 'Google AI 与大数据专家',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2012-2013) 兼董事会董事',
    photo: '/images/board/mingsheng_hong.jpg',
    bio: [
      'Dr. Mingsheng Hong leads the engineering work of Google\'s TensorFlow runtime, the AI infrastructure. Prior to this role, Mingsheng worked in Big Data engineering leadership roles at Google, Hadapt and HP Vertica. During his five years at Massachusetts in 2008-2013, Mingsheng was fortunate to volunteer at NECINA and served as its 17th President during the 2012-2013 term.',
      'Mingsheng obtained his Computer Science Ph.D. degree at Cornell University, and co-founded the Microsoft CEDR research project, commercialized as SQL Server StreamInsight. Mingsheng has given talks, lectures and demos at industry and academic forums such as TensorFlow Developer Summit, Hadoop World, and Harvard Business School.'
    ],
    bio_zh: [
      '洪銘胜博士领导 Google TensorFlow 运行时（TensorFlow runtime）即核心人工智能基础设施的工程研发工作。在担任该职位之前，洪博士曾先后在 Google、Hadapt 以及 HP Vertica 担任大数据工程领袖职务。2008 至 2013 年在马萨诸塞州的五年间，洪博士热心服务于 NECINA 志愿者事业，并在 2012-2013 年度出任协会第 17 届会长。',
      '洪博士在康奈尔大学（Cornell University）获得计算机科学博士学位，曾共同发起微软 CEDR 研究项目（后商业化为著名流计算引擎 SQL Server StreamInsight）。洪博士曾多次受邀在 TensorFlow 开发者峰会、Hadoop World 以及哈佛商学院等顶尖行业与学术论坛发表演讲与技术展示。'
    ]
  },
  {
    id: 'connie-dai',
    order: 10,
    name: 'Connie Dai',
    name_zh: '戴晨方',
    title: 'founding and managing partner of Lion’s Law',
    title_zh: 'Lion’s Law 创始兼管理合伙人',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2020-2021) 兼董事会董事',
    photo: '/images/board/connie_dai.jpg',
    bio: [
      'Connie Dai is a founding and managing partner of Lion’s Law based in Newton, Massachusetts and Princeton, New Jersey. She practices law in corporate, employment, dispute resolution and litigation. Connie has been a volunteer with NECINA since 2012 and was the President from 2020 to 2021. She is now a member of the Board of Directors of NECINA.',
      'She is also a board member of two local civic engagement nonprofit - Civic Education Alliance and New England Chinese American Alliance. Connie received M.B.A. from University of Calgary in Canada and J. D. from Suffolk Law School.'
    ],
    bio_zh: [
      '戴晨方律师是设立于马萨诸塞州牛顿市和新泽西州普林斯顿的 Lion’s Law 律师事务所创始兼管理合伙人。她专注于公司法、劳动就业法、商业争议解决以及商务诉讼业务。戴律师自 2012 年起作为核心志愿者服务于 NECINA，并于 2020 至 2021 年度担任协会会长。目前担任 NECINA 董事会董事。',
      '她同时兼任两家马州非营利公民参与组织的董事会董事：公民教育联盟（Civic Education Alliance）以及新英格兰华人联盟（New England Chinese American Alliance）。戴律师在加拿大卡尔加里大学获得工商管理硕士（MBA）学位，并在萨福克大学法学院（Suffolk Law School）获得法学博士（J.D.）学位。'
    ]
  },
  {
    id: 'sean-shen',
    order: 11,
    name: 'Sean Shen',
    name_zh: '沈心焯',
    title: 'Principal Engineer at MagnaCorp',
    title_zh: 'MagnaCorp 首席工程师',
    distinction: 'Past President & Board Member',
    distinction_zh: '前任会长 (2011-2012) 兼董事会董事',
    photo: '/images/board/sean_shen.jpg',
    bio: [
      'Sean Shen is a Principal Engineer at MagnaCorp. which develops state-of-the-art software, hardware and systems for active safety, autonomous driving, occupant protection and brake control. Prior to that, Sean was a Lead System Engineer in a federal funded research and developing center, applying revolutionary system engineering technologies to large government acquisition programs, providing system integration, validation and verification software systems.',
      'Sean has years of working experience in developing software for both enterprise and start-up companies throughout his career. Sean joined NECINA in 1997. He is currently serving in the board of director of NECINA. He served as the President of NECINA in 2011-2012 as well as a board member from 2012-2015. During his terms, he started the NECINA Entrepreneur Club, offered NECINA Entrepreneur Workshop and NECINA Lab programs. He believes that NECINA leaders must not only lead its engineering and business community with a vision, but also provide tangible support and guidance to its members.'
    ],
    bio_zh: [
      '沈心焯先生现任 MagnaCorp 首席工程师，该公司专注于开发主动安全、自动驾驶、乘员保护与制动控制领域的尖端软硬件及系统集成。此前，沈先生曾在一家联邦资助的研发中心担任首席系统工程师，将突破性系统工程技术应用于大型政府采购项目，提供系统集成、验证与确认软件系统。',
      '沈先生在企业级与初创公司的全生命周期软件开发方面拥有深厚造诣。沈先生早在 1997 年就加入了 NECINA，目前担任协会董事会董事。他曾于 2011-2012 年度担任 NECINA 会长，并在 2012-2015 年连任董事。在其任期内，他创立了著名的 NECINA 创业俱乐部（eCLUB），并开设了 NECINA 创业工作坊及 NECINA 实验室项目。他坚信 NECINA 的领袖不仅要以远见引领工程与商业社区，更必须为会员提供切实的赋能支持与指引。'
    ]
  }
];

// ============================================================================
// LEADERSHIP TEAM: 2026-2027 TEAM (Preserves Program Teams & Operation Teams)
// ============================================================================

export const LEADERSHIP_2026_2027_DATA: LeadershipTerm = {
  term: '2026-2027 Team',
  term_zh: '2026-2027 领导团队',
  president: {
    name: 'Caroline (Yujing) Lu',
    name_zh: '吕妤婧',
    role: 'President (2026 - 2027)',
    role_zh: '现任会长 (2026 - 2027)',
    bioUrl: 'https://necina.org/content/necina-president',
    linkedin: 'https://www.linkedin.com/in/caroline-yujing-lu-cfa-1a08b018/',
    photo: '/images/board/caroline_lu.jpg',
    bio: 'Accomplished education entrepreneur, executive director and cross-generational leadership advocate. Leading NECINA’s digital modernizations, youth-to-founder pipelines, and global industry partnerships.',
    bio_zh: '深耕科技社区与教育赋能的资深管理者，致力于推动 NECINA 组织现代化、青年跨代传承与全球教育资源合作。'
  },
  vicePresident: {
    name: 'Bing He',
    name_zh: '何 冰',
    role: 'Immediate Past President (2025 - 2026)',
    role_zh: '前任会长 (2025 - 2026)',
    bioUrl: 'https://necina.org/content/necina-president',
    linkedin: 'https://www.linkedin.com/in/binghe/',
    photo: '/images/board/bing_he.jpg',
    bio: 'Seasoned Silicon Valley engineering leader and enterprise consultant with 25+ years of experience guiding top-tier clients to high-ROI tech architectures. MS/BS in Computer Science from University of Toronto.',
    bio_zh: '拥有 25 年以上顶尖硅谷工程管理与企业咨询经验的技术领袖，擅长协助企业搭建兼具高回报率与高韧性的核心技术架构。毕业于多伦多大学计算机科学系。'
  },
  immediatePastPresident: {
    name: 'John (Huizhuang) Zhuang',
    name_zh: '庄辉壮',
    role: 'Past President (2023 - 2024)',
    role_zh: '前任会长 (2023 - 2024)',
    bioUrl: 'https://necina.org/content/necina-president',
    linkedin: 'https://www.linkedin.com/in/huizhuang-john-zhuang/',
    bio: 'Led NECINA through vital post-pandemic revitalization, inaugurating AI-focused technical tracks and strengthening volunteer engagement across New England.',
    bio_zh: '带领 NECINA 顺利完成疫后全面复兴，率先布局生成式 AI 专题系列，极大凝聚了新英格兰地区的志愿者与青年力量。'
  },
  programTeams: [
    {
      name: 'Technology & Innovations Club',
      name_zh: '科技与创新俱乐部',
      members: [
        {
          name: 'Tony Zhang',
          name_zh: '张 涛',
          role: 'Chair',
          role_zh: '主席',
          linkedin: 'https://www.linkedin.com/in/tony-zhang-17521013/'
        },
        {
          name: 'Ryan Yuan',
          name_zh: '袁 锐',
          role: 'Officer',
          role_zh: '理事'
        }
      ]
    },
    {
      name: 'Career & Leadership Development Club',
      name_zh: '职业与领导力发展俱乐部',
      members: [
        {
          name: 'Darren Deng',
          name_zh: '邓一章',
          role: 'Chair',
          role_zh: '主席',
          linkedin: 'https://www.linkedin.com/in/yizhangdeng/'
        },
        {
          name: 'Mint Guo',
          name_zh: '郭 敏',
          role: 'Officer',
          role_zh: '理事'
        },
        {
          name: 'Yinan Li',
          name_zh: '李依南',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/yinan-li-brandeis/'
        },
        {
          name: 'Alan Yan',
          name_zh: '颜亚元',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/yayuan-yan/'
        },
        {
          name: 'Sarah Wang',
          name_zh: '王怡晴',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/yiqingwang-sarah/'
        },
        {
          name: 'Sharon Wu',
          name_zh: '吴雪旸',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/xueyangwu1998/'
        },
        {
          name: 'Beichen Yu',
          name_zh: '余北晨',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/beichenyu0511/'
        },
        {
          name: 'Roxy Su',
          name_zh: '苏日新',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/rixin-su/'
        }
      ]
    },
    {
      name: 'Entrepreneurship Club (E-Club)',
      name_zh: '创业家俱乐部 (E-Club)',
      members: [
        {
          name: 'Caroline (Yujing) Lu',
          name_zh: '吕妤婧',
          role: 'Director',
          role_zh: '负责人 / 总监',
          linkedin: 'https://www.linkedin.com/in/caroline-yujing-lu-cfa-1a08b018/'
        },
        {
          name: 'Peter Chen',
          name_zh: '陈栋梁',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/dongliang-chen-54b186141/'
        },
        {
          name: 'Guang Yang',
          name_zh: '杨 光',
          role: 'Officer',
          role_zh: '理事'
        }
      ]
    },
    {
      name: 'YES (Youth Entrepreneurship Service)',
      name_zh: 'YES 青年创业服务项目',
      email: 'yes@necina.org',
      members: [
        {
          name: 'Jamie Li',
          name_zh: '李 洁',
          role: 'Director',
          role_zh: '总监',
          email: 'yes@necina.org'
        }
      ]
    },
    {
      name: 'Partnerships',
      name_zh: '战略伙伴合作部',
      members: [
        {
          name: 'Joseph (Joe) Perry',
          name_zh: 'Joseph Perry',
          role: 'Director',
          role_zh: '总监',
          linkedin: 'https://www.linkedin.com/in/jperry/'
        }
      ]
    },
    {
      name: 'Sponsorship and Public Relationship',
      name_zh: '赞助与公共关系部',
      members: [
        {
          name: 'Grant Zhang',
          name_zh: '张永熙',
          role: 'Director',
          role_zh: '总监',
          linkedin: 'https://www.linkedin.com/in/grant-zhang/'
        },
        {
          name: 'Kaihao (Adm) Fu',
          name_zh: '傅恺浩',
          role: 'Co-Director',
          role_zh: '联席总监',
          linkedin: 'https://www.linkedin.com/in/kaihao-fu-45356216/'
        }
      ]
    }
  ],
  operationTeams: [
    {
      name: 'General Manager (GM) Office',
      name_zh: '总经理 (GM) 办公室',
      members: [
        {
          name: 'Nina Liu',
          name_zh: '刘 娜',
          role: 'GM',
          role_zh: '总经理',
          linkedin: 'https://www.linkedin.com/in/nina-liu-515580187/'
        },
        {
          name: 'Alice Jiang',
          name_zh: '蒋 欣',
          role: 'Program Manager',
          role_zh: '项目经理',
          linkedin: 'https://www.linkedin.com/in/alicejiang1/'
        },
        {
          name: 'David Mai',
          name_zh: '麦 伟',
          role: 'Program Manager',
          role_zh: '项目经理',
          linkedin: 'https://www.linkedin.com/in/dmai99/'
        },
        {
          name: 'Andy Yang',
          name_zh: '杨 帆',
          role: 'Program Manager',
          role_zh: '项目经理'
        },
        {
          name: 'Lingzhi Zhao',
          name_zh: '赵灵芝',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/lingzhi-zhao-7341137/'
        }
      ]
    },
    {
      name: 'Marketing',
      name_zh: '市场宣传与品牌推广部',
      email: 'marketing@necina.org',
      members: [
        {
          name: 'Yifeng Yuan',
          name_zh: '袁一峰',
          role: 'Director',
          role_zh: '总监',
          linkedin: 'https://www.linkedin.com/in/yifengy/'
        },
        {
          name: 'Yiqin Zhang',
          name_zh: '张以勤',
          role: 'Co-Director',
          role_zh: '联席总监',
          linkedin: 'https://www.linkedin.com/in/yiqinz17/'
        },
        {
          name: 'Laura Wang',
          name_zh: '王 岚',
          role: 'Officer (WeChat)',
          role_zh: '微信运营理事',
          linkedin: 'https://www.linkedin.com/in/laura-lan-wang-5742b668/'
        },
        {
          name: 'Jiaxuan Qian',
          name_zh: '钱佳宣',
          role: 'Officer (New Media)',
          role_zh: '新媒体理事',
          linkedin: 'https://www.linkedin.com/in/jxqian/'
        },
        {
          name: 'Emily Chen',
          name_zh: '陈 怡',
          role: 'Officer (Art Design)',
          role_zh: '视觉设计理事',
          linkedin: 'https://www.linkedin.com/in/emily-c-56369b20a/'
        }
      ]
    },
    {
      name: 'Membership',
      name_zh: '会员服务部',
      members: [
        {
          name: 'Yanxia Liu',
          name_zh: '刘艳霞',
          role: 'Director',
          role_zh: '总监',
          linkedin: 'https://www.linkedin.com/in/yanxialiu/'
        },
        {
          name: 'Katy Jiang',
          name_zh: '蒋 婷',
          role: 'Co-Director',
          role_zh: '联席总监'
        },
        {
          name: 'Pamela Jia',
          name_zh: '贾 佩',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/pamelajia/'
        },
        {
          name: 'Gina Yuan',
          name_zh: '袁诗琪',
          role: 'Officer',
          role_zh: '理事',
          linkedin: 'https://www.linkedin.com/in/gina-shiqi-yuan/'
        }
      ]
    },
    {
      name: 'Tech Supports',
      name_zh: '技术支持与网站运维部',
      email: 'info@necina.org',
      members: [
        {
          name: 'Jiannan Tu',
          name_zh: '屠建南',
          role: 'Lead',
          role_zh: '负责人',
          linkedin: 'https://www.linkedin.com/in/tu-jiannan-84831040/'
        }
      ]
    },
    {
      name: 'Treasurer',
      name_zh: '财务部',
      members: [
        {
          name: 'Melissa Qian',
          name_zh: '钱 敏',
          role: 'Officer',
          role_zh: '财务主管 / 理事',
          linkedin: 'https://www.linkedin.com/in/melissa-qian-mba-cpa-2b72461/'
        }
      ]
    }
  ]
};

export const LEADERSHIP_2024_2025_DATA = LEADERSHIP_2026_2027_DATA;
export const CURRENT_LEADERSHIP_DATA = LEADERSHIP_2026_2027_DATA;
