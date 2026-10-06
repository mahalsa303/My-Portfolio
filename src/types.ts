export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'all' | 'ai-llm' | 'ml' | 'fullstack';
  categoryLabel: string;
  year: string;
  image: string;
  summary: string;
  techStack: string[];
  features: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: {
    problem: string;
    solution: string;
    architecture: string[];
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  highlight?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialCode?: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  skills: string[];
  bullets: string[];
}
