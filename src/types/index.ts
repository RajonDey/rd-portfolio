export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  category?: string;
  year?: string;
  rating?: number;
  featured?: boolean;
}

export interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link?: string;
  liveDemoLink?: string;
  featured?: boolean;
}
