
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Tech' | 'Entrepreneurship' | 'Networking' | 'Youth';
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum MessageRole {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  role: MessageRole;
  content: string;
  timestamp: number;
}

export interface AgendaItem {
  time: string;
  title: string;
  title_zh?: string;
  speaker?: string;
  speaker_zh?: string;
  description?: string;
  description_zh?: string;
  location?: string;
  track2?: {
    time?: string;
    title: string;
    title_zh?: string;
    speaker?: string;
    speaker_zh?: string;
    description?: string;
    description_zh?: string;
    location?: string;
  };
  track3?: {
    time?: string;
    title: string;
    title_zh?: string;
    speaker?: string;
    speaker_zh?: string;
    description?: string;
    description_zh?: string;
    location?: string;
  };
}

export interface SponsorTier {
  name: string;
  price: string;
  benefits: string[];
  isFeatured?: boolean;
}
// types.ts
export type Locale = 'en' | 'zh';

export type DesignStyle = 'modern';

export type JourneyItem = {
  id: string;
  badge: string; // "1" "2" "3"
  title: string;
  detail: string;
};

export type ProgramItem = {
  time?: string;
  title: string;
  description?: string;
};

export type SponsorshipTier = {
  name: string;
  price?: string;
  highlights: string[];
};

export type ContentPack = {
  nav: {
    mission: string;
    journey: string;
    sponsorship: string;
    program: string;
    join: string;
  };
  ctas: {
    becomeSponsor: string;
    joinRenew: string;
    sponsorInterest: string;
    rsvp: string;
    volunteer: string;
  };
  mission: {
    heading: string;
    quote: string;
    journeyHeading: string;
    journeyItems: JourneyItem[];
  };
  join: {
    heading: string;
    body: string;
    joinButton: string;
    renewButton: string;
    joinUrl?: string;
    renewUrl?: string;
  };
  follow: {
    heading: string;
    body: string;
  };
  sponsorship: {
    heading: string;
    intro: string;
    tiers: SponsorshipTier[];
  };
};
