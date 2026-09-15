export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'enterprise' | 'cloud';
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  imageUrl?: string;
  imageGradient: string;
  architectureHighlight: string;
  completionYear: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'cloud' | 'database';
  icon: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  keyOutputs: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectScope: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
}

export interface TechBenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ClientItem {
  id: string;
  name: string;
  industry: string;
  logoLetter: string;
  projectType: string;
  tagline: string;
  bgGradient: string;
}
