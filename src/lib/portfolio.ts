// Unified portfolio data entry point
// Contains both Case Studies (deep-dive) and Projects (summary)

import { Project } from "../types";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  duration: string;
  teamSize: string;
  role: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  process: {
    phase: string;
    description: string;
    deliverables: string[];
  }[];
  features: string[];
  challenges: string[];
  learnings: string[];
  nextSteps: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

// Deep-dive Case Studies
export const caseStudies: CaseStudy[] = [
  {
    id: "clipkit-saas-platform",
    title: "ClipKit - SaaS Content Creation Platform",
    subtitle: "AI-Powered Video Content Creation & Management System",
    description:
      "A comprehensive full-stack SaaS platform that revolutionizes content creation through AI integration, automated workflows, and collaborative tools for content creators and marketing teams.",
    image: "/images/projects/clipkit-saas.png",
    category: "Web Application",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "OpenAI API",
      "Stripe",
    ],
    duration: "6 months",
    teamSize: "4 developers",
    role: "Lead Frontend Developer & UI/UX Designer",
    client: "ClipKit Inc.",
    challenge:
      "Content creators were struggling with fragmented tools, manual processes, and lack of AI integration for video content creation. The existing workflow was time-consuming and required multiple subscriptions to different services.",
    solution:
      "Developed a unified SaaS platform that combines AI-powered content generation, automated video editing, team collaboration, and analytics in a single interface. Implemented real-time collaboration features and integrated multiple AI services for content optimization.",
    results: [
      {
        metric: "User Engagement",
        value: "300%",
        description: "Increase in daily active users within 3 months",
      },
      {
        metric: "Content Production",
        value: "75%",
        description: "Faster content creation workflow",
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        description: "Average rating from 500+ users",
      },
      {
        metric: "Revenue Growth",
        value: "250%",
        description: "Monthly recurring revenue increase",
      },
    ],
    process: [
      {
        phase: "Discovery & Research",
        description:
          "Conducted user interviews and market analysis to understand pain points in content creation workflows.",
        deliverables: [
          "User personas",
          "Competitive analysis",
          "Feature requirements",
          "Technical architecture",
        ],
      },
      {
        phase: "Design & Prototyping",
        description:
          "Created wireframes and interactive prototypes focusing on intuitive user experience and AI integration.",
        deliverables: [
          "UI/UX designs",
          "Interactive prototypes",
          "Design system",
          "User flow diagrams",
        ],
      },
      {
        phase: "Development & Integration",
        description:
          "Built the platform using modern technologies with focus on performance, scalability, and real-time features.",
        deliverables: [
          "Frontend application",
          "API integration",
          "AI service integration",
          "Database design",
        ],
      },
      {
        phase: "Testing & Deployment",
        description:
          "Comprehensive testing including user acceptance testing and performance optimization before launch.",
        deliverables: [
          "Test cases",
          "Performance reports",
          "Deployment pipeline",
          "Documentation",
        ],
      },
    ],
    features: [
      "AI-powered content generation and suggestions",
      "Real-time collaborative editing",
      "Automated video processing and optimization",
      "Advanced analytics and reporting dashboard",
      "Team management and role-based access control",
      "Integration with popular social media platforms",
      "Custom branding and white-label options",
      "Mobile-responsive design for all devices",
    ],
    challenges: [
      "Integrating multiple AI services while maintaining performance",
      "Implementing real-time collaboration without conflicts",
      "Handling large video files efficiently",
      "Ensuring data security and compliance",
      "Scaling the platform for growing user base",
    ],
    learnings: [
      "AI integration requires careful API management and fallback strategies",
      "Real-time features need robust conflict resolution mechanisms",
      "User experience is crucial for AI-powered tools adoption",
      "Performance optimization is essential for media-heavy applications",
      "Team collaboration features significantly increase user engagement",
    ],
    nextSteps:
      "Planning to add advanced AI features like voice cloning, automated A/B testing for content, and integration with more social platforms. Also working on mobile app development.",
    links: {
      live: "https://clipkit-demo.com",
      github: "https://github.com/rajondey/clipkit-saas",
      demo: "https://demo.clipkit.com",
    },
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Performance Optimization",
    subtitle: "50% Faster Load Times & 40% Higher Conversion Rates",
    description:
      "Comprehensive performance optimization project for a high-traffic e-commerce platform, resulting in significant improvements in load times, user experience, and conversion rates.",
    image: "/images/projects/ecommerce-optimization.png",
    category: "Performance Optimization",
    technologies: [
      "React",
      "Next.js",
      "Webpack",
      "Redis",
      "CDN",
      "Image Optimization",
      "Lazy Loading",
      "Code Splitting",
    ],
    duration: "3 months",
    teamSize: "3 developers",
    role: "Senior Frontend Developer",
    client: "TechStore Solutions",
    challenge:
      "The e-commerce platform was experiencing slow load times (8+ seconds), high bounce rates (65%), and poor mobile performance, directly impacting sales and user experience.",
    solution:
      "Implemented comprehensive performance optimization including code splitting, image optimization, caching strategies, and mobile-first responsive design improvements.",
    results: [
      {
        metric: "Page Load Time",
        value: "50%",
        description: "Reduction in average page load time (8s → 4s)",
      },
      {
        metric: "Conversion Rate",
        value: "40%",
        description: "Increase in mobile conversion rates",
      },
      {
        metric: "Bounce Rate",
        value: "35%",
        description: "Decrease in bounce rate",
      },
      {
        metric: "Core Web Vitals",
        value: "95+",
        description: "Lighthouse performance score improvement",
      },
    ],
    process: [
      {
        phase: "Performance Audit",
        description:
          "Conducted comprehensive performance analysis using various tools to identify bottlenecks and optimization opportunities.",
        deliverables: [
          "Performance audit report",
          "Bottleneck identification",
          "Optimization roadmap",
          "Baseline metrics",
        ],
      },
      {
        phase: "Code Optimization",
        description:
          "Refactored codebase for better performance, implemented code splitting, and optimized bundle sizes.",
        deliverables: [
          "Optimized codebase",
          "Bundle analysis",
          "Code splitting implementation",
          "Performance monitoring",
        ],
      },
      {
        phase: "Asset Optimization",
        description:
          "Optimized images, implemented lazy loading, and set up efficient caching strategies.",
        deliverables: [
          "Image optimization",
          "Lazy loading implementation",
          "Caching strategy",
          "CDN configuration",
        ],
      },
      {
        phase: "Testing & Monitoring",
        description:
          "Comprehensive testing and continuous monitoring to ensure performance improvements are maintained.",
        deliverables: [
          "Performance tests",
          "Monitoring setup",
          "Documentation",
          "Best practices guide",
        ],
      },
    ],
    features: [
      "Advanced code splitting and lazy loading",
      "Optimized image delivery with WebP format",
      "Intelligent caching strategies",
      "Mobile-first responsive design",
      "Progressive Web App (PWA) features",
      "Real-time performance monitoring",
      "A/B testing framework",
      "Accessibility improvements",
    ],
    challenges: [
      "Maintaining functionality while optimizing performance",
      "Handling large product catalogs efficiently",
      "Ensuring cross-browser compatibility",
      "Managing third-party integrations",
      "Balancing SEO with performance",
    ],
    learnings: [
      "Performance optimization requires systematic approach",
      "Mobile performance is critical for e-commerce success",
      "User experience directly impacts business metrics",
      "Continuous monitoring is essential for maintaining performance",
      "Team collaboration is crucial for optimization projects",
    ],
    nextSteps:
      "Implementing advanced PWA features, exploring edge computing for better global performance, and developing automated performance testing pipeline.",
    links: {
      live: "https://techstore-optimized.com",
      github: "https://github.com/rajondey/ecommerce-optimization",
    },
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    subtitle: "Real-time Patient Data Visualization & Analytics",
    description:
      "A comprehensive healthcare analytics platform that provides real-time insights into patient data, treatment outcomes, and operational efficiency for healthcare providers.",
    image: "/images/projects/healthcare-dashboard.png",
    category: "Data Visualization",
    technologies: [
      "React",
      "D3.js",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "WebSocket",
      "JWT",
      "Docker",
    ],
    duration: "4 months",
    teamSize: "5 developers",
    role: "Frontend Developer & Data Visualization Specialist",
    client: "MedTech Solutions",
    challenge:
      "Healthcare providers needed a centralized platform to visualize patient data, track treatment outcomes, and identify trends for better decision-making and patient care.",
    solution:
      "Developed an interactive dashboard with real-time data visualization, customizable reports, and predictive analytics to help healthcare providers make data-driven decisions.",
    results: [
      {
        metric: "Decision Speed",
        value: "60%",
        description: "Faster decision-making process for healthcare providers",
      },
      {
        metric: "Data Accuracy",
        value: "95%",
        description: "Improvement in data accuracy and consistency",
      },
      {
        metric: "User Adoption",
        value: "85%",
        description: "Healthcare staff adoption rate within 2 months",
      },
      {
        metric: "Patient Outcomes",
        value: "25%",
        description: "Improvement in patient treatment outcomes",
      },
    ],
    process: [
      {
        phase: "Requirements Analysis",
        description:
          "Worked closely with healthcare professionals to understand data visualization needs and compliance requirements.",
        deliverables: [
          "Requirements document",
          "User stories",
          "Compliance checklist",
          "Data flow diagrams",
        ],
      },
      {
        phase: "Data Architecture",
        description:
          "Designed secure data architecture ensuring HIPAA compliance and real-time data processing capabilities.",
        deliverables: [
          "Data architecture",
          "Security protocols",
          "API design",
          "Database schema",
        ],
      },
      {
        phase: "Visualization Development",
        description:
          "Created interactive charts, graphs, and dashboards using advanced data visualization libraries.",
        deliverables: [
          "Interactive dashboards",
          "Custom charts",
          "Real-time updates",
          "Mobile responsiveness",
        ],
      },
      {
        phase: "Testing & Deployment",
        description:
          "Comprehensive testing including security audits and user acceptance testing with healthcare professionals.",
        deliverables: [
          "Security audit",
          "User testing reports",
          "Deployment guide",
          "Training materials",
        ],
      },
    ],
    features: [
      "Real-time patient data visualization",
      "Interactive charts and graphs",
      "Customizable dashboard layouts",
      "Predictive analytics and trend analysis",
      "HIPAA-compliant data handling",
      "Role-based access control",
      "Export functionality for reports",
      "Mobile-responsive design",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Handling large datasets in real-time",
      "Creating intuitive interfaces for non-technical users",
      "Integrating with existing healthcare systems",
      "Maintaining performance with complex visualizations",
    ],
    learnings: [
      "Healthcare data requires strict security measures",
      "User-friendly design is crucial for medical professionals",
      "Real-time data visualization needs efficient algorithms",
      "Compliance requirements significantly impact development",
      "User training is essential for complex dashboards",
    ],
    nextSteps:
      "Adding machine learning capabilities for predictive analytics, expanding integration with more healthcare systems, and developing mobile app for on-the-go access.",
    links: {
      live: "https://healthcare-dashboard-demo.com",
      github: "https://github.com/rajondey/healthcare-dashboard",
    },
  },
];

// Summary Projects (minimum info)
export const projects: Project[] = [
  {
    name: "ClipKit - SaaS Platform",
    description:
      "A comprehensive full-stack SaaS platform for content creators, built with FastAPI, PostgreSQL, and AI integration. Features include content generation, project management, and team collaboration tools.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "AI Integration", color: "green-text-gradient" },
    ],
    image: "/images/clicks.png",
    source_code_link: "https://github.com/RajonDey/clipkit",
    liveDemoLink: "https://clipkit.rajondey.com",
    featured: true,
  },
  {
    name: "Online IELTS Test Platform",
    description:
      "A full-fledged platform for IELTS test preparation and practice with real-time scoring, analytics, and comprehensive test management. Serves 1000+ test takers with 99.9% completion rate.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
    ],
    image: "/images/life-commits.png",
    source_code_link: "https://github.com/RajonDey/ielts-platform",
    liveDemoLink: "https://ielts.rajondey.com",
    featured: true,
  },
  {
    name: "E-commerce Dashboard (SJI)",
    description:
      "Enterprise-level e-commerce management dashboard built for SJ Innovation clients. Features include inventory management, order processing, analytics, and multi-vendor support.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
    ],
    image: "/images/sj-innovation.png",
    source_code_link: "https://github.com/RajonDey/ecommerce-dashboard",
    liveDemoLink: "https://ecommerce.rajondey.com",
    featured: true,
  },
  {
    name: "LLM Security Research Platform",
    description:
      "Research platform for AI model vulnerability assessment and jailbreak detection. Includes automated testing tools and comprehensive security frameworks for LLM applications.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Security", color: "pink-text-gradient" },
      { name: "Research", color: "blue-text-gradient" },
    ],
    image: "/images/coinic.png",
    source_code_link: "https://github.com/RajonDey/llm-security-research",
    liveDemoLink: "https://llm-security.rajondey.com",
  },
  {
    name: "Corporate Website (SJI)",
    description:
      "Modern, responsive corporate website for SJ Innovation with CMS integration, blog system, and client portal. Optimized for performance with 40% improvement in Lighthouse scores.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Headless CMS", color: "pink-text-gradient" },
      { name: "Performance", color: "blue-text-gradient" },
    ],
    image: "/images/sj-innovation.png",
    source_code_link: "https://github.com/RajonDey/sji-corporate",
    liveDemoLink: "https://sjinnovation.com",
  },
  {
    name: "Email Template System",
    description:
      "Responsive HTML email template system with drag-and-drop builder, A/B testing capabilities, and analytics integration. Used by 50+ clients for marketing campaigns.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Email Marketing", color: "blue-text-gradient" },
    ],
    image: "/images/email-dev.png",
    source_code_link: "https://github.com/RajonDey/email-templates",
    liveDemoLink: "https://email-templates.rajondey.com",
  },
];

// Helpers
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === slug);
};

export const getAllCaseStudySlugs = (): string[] => {
  return caseStudies.map((study) => study.id);
};

// -----------------
// Unified View Model
// -----------------

export type PortfolioEntryType = "case-study" | "project";

export interface PortfolioEntryViewModel {
  id: string;
  type: PortfolioEntryType;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category?: string;
  tags: string[];
  primaryTags: string[];
  impactScore: number;
  featured: boolean;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
    source?: string;
  };
  href?: string;
  metricsPreview?: { metric: string; value: string }[];
  publishedAt?: string;
}

const toKebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const computeImpactScore = (
  entry: Partial<PortfolioEntryViewModel>
): number => {
  let score = 0;
  if (entry.featured) score += 30;
  if (entry.metricsPreview && entry.metricsPreview.length) score += 20;
  if (entry.tags) score += Math.min(10, entry.tags.length);
  if (entry.category && /performance|ai|data/i.test(entry.category)) score += 5;
  return score;
};

export const getAllPortfolioEntries = (): PortfolioEntryViewModel[] => {
  const caseStudyEntries: PortfolioEntryViewModel[] = caseStudies.map((s) => {
    const tags = s.technologies || [];
    const metricsPreview = (s.results || []).slice(0, 2).map((r) => ({
      metric: r.metric,
      value: r.value,
    }));
    const vm: PortfolioEntryViewModel = {
      id: s.id,
      type: "case-study",
      title: s.title,
      subtitle: s.subtitle,
      description: s.description,
      image: s.image,
      category: s.category,
      tags,
      primaryTags: tags.slice(0, 3),
      featured: false,
      links: s.links,
      href: `/case-studies/${s.id}`,
      metricsPreview,
      impactScore: 0,
    };
    vm.impactScore = computeImpactScore(vm);
    return vm;
  });

  const projectEntries: PortfolioEntryViewModel[] = projects.map((p) => {
    const tagNames = (p.tags || []).map((t) => t.name);
    const id = toKebab(p.name);
    const vm: PortfolioEntryViewModel = {
      id,
      type: "project",
      title: p.name,
      description: p.description,
      image: p.image,
      category: undefined,
      tags: tagNames,
      primaryTags: tagNames.slice(0, 3),
      featured: Boolean(p.featured),
      links: {
        live: p.liveDemoLink,
        source: p.source_code_link,
      },
      href: p.liveDemoLink || p.source_code_link,
      metricsPreview: undefined,
      impactScore: 0,
    };
    vm.impactScore = computeImpactScore(vm);
    return vm;
  });

  return [...caseStudyEntries, ...projectEntries];
};

export const getFeaturedPortfolioEntries = (
  max = 4
): PortfolioEntryViewModel[] => {
  return getAllPortfolioEntries()
    .sort((a, b) => b.impactScore - a.impactScore)
    .slice(0, max);
};

export const getPortfolioFilterOptions = () => {
  const all = getAllPortfolioEntries();
  const types = Array.from(new Set(all.map((e) => e.type)));
  const categories = Array.from(
    new Set(all.map((e) => e.category).filter(Boolean) as string[])
  );
  const tags = Array.from(
    new Set(all.flatMap((e) => e.tags.map((t) => t.toLowerCase())))
  ).sort();
  return { types, categories, tags };
};

// -----------------
// Project details (optional, lightweight)
// -----------------

export interface ProjectDetail {
  slug: string; // derived from project name kebab-case
  title: string;
  role?: string;
  team?: string;
  duration?: string;
  company?: string;
  overview?: string;
  contributions?: string[];
  highlights?: string[];
  impact?: string[];
  techStack?: string[];
  links?: { label: string; url: string }[];
}

// Seed with provided sample (slug: email-development-grafted-growth)
export const projectDetails: ProjectDetail[] = [
  {
    slug: "email-development-grafted-growth",
    title: "Email Development for Grafted Growth Clients",
    role: "Project Lead",
    team: "5–10 developers",
    duration: "X months",
    company: "SJI",
    overview:
      "Led the development of responsive email templates for multiple clients of Grafted Growth, onboarding 7–10 brands and ensuring brand consistency across campaigns.",
    contributions: [
      "Managed and coordinated a team to deliver high-quality email templates",
      "Developed initial template series for 7–10 brands",
      "Ensured responsiveness and compatibility across major email clients",
      "Maintained brand consistency and visual quality",
    ],
    highlights: [
      "Efficient onboarding of multiple clients",
      "Cross-functional leadership and delivery ownership",
      "Focus on responsive design, accessibility, and rendering consistency",
    ],
    impact: [
      "Enabled multiple client brands to launch campaigns effectively",
      "Strengthened SJI’s reputation as a reliable email development partner",
      "Demonstrated ability to lead onboarding and delivery",
    ],
    techStack: [
      "HTML",
      "CSS",
      "Inline Styles",
      "Litmus",
      "Email on Acid",
      "Git",
    ],
    links: [{ label: "grafted.com", url: "https://grafted.com/" }],
  },
];

export const getProjectDetailBySlug = (
  slug: string
): ProjectDetail | undefined => {
  return projectDetails.find((d) => d.slug === slug);
};

export const getAllProjectDetailSlugs = (): string[] => {
  return projectDetails.map((d) => d.slug);
};

export const getProjectDetailSlugForTitle = (
  title: string
): string | undefined => {
  // Explicit mappings for titles that don't match slug directly
  const titleMap: Record<string, string> = {
    "Email Template System": "email-development-grafted-growth",
  };
  if (titleMap[title]) return titleMap[title];
  // Try exact title match first
  const byTitle = projectDetails.find(
    (d) => d.title.toLowerCase() === title.toLowerCase()
  );
  if (byTitle) return byTitle.slug;
  // Fallback: kebab of title equals slug
  const kebab = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
  const byKebab = projectDetails.find((d) => d.slug === kebab);
  return byKebab?.slug;
};
