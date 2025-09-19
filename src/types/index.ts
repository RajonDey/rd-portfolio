export interface Tech {
  name: string;
  icon: keyof typeof import("../components/TechStack/TechCard").iconMap;
  category: "Frontend" | "Backend" | "Languages" | "DevOps" | "Testing";
}


export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface Project {
  /** Human readable project title */
  name: string;
  /** Short unique slug for routing (e.g. "clipkit") */
  slug: string;
  /** One‑sentence summary for cards */
  description: string;
  /** Optional longer summary for detail page */
  longDescription?: string;
  /** Tag objects used for filtering / display */
  tags: { name: string; color?: string }[]; 
  /** Image path (public/) or remote URL */
  image: string; 
  /** GitHub or repository link (can be anonymized) */
  source_code_link?: string;
  /** Live demo or production URL */
  liveDemoLink?: string; 
  /** If true show in "Featured" list */
  featured?: boolean; 
  /** Classification: side | employer | freelance */
  category?: 'side' | 'employer' | 'freelance';
  /** Key outcome metrics (simple MVP form) */
  metrics?: { label: string; value: string }[];
  /** If certain sensitive details are omitted */
  confidentiality?: 'public' | 'anonymized' | 'internal';
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}