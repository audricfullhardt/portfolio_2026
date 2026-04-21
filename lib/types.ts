/* lib/types.ts */
export interface Project {
  id: number;
  title: string;
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  technologies: string[];
  image?: string;
  pictures?: string[];
  github?: string;
  demo?: string;
  category: string;
  year: string;
  featured?: boolean;
  features?: { fr: string[]; en: string[] };
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
  current?: boolean;
  tag: string;
}
