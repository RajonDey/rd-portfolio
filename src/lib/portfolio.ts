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
  challenges: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

// Deep-dive Case Studies
export const caseStudies: CaseStudy[] = [
  {
    id: "racksub-b2b-platform",
    title: "Racksub - B2B Data Center Marketplace",
    subtitle:
      "Connecting Data Center Users with Capacity Providers Across Hybrid Infrastructure",
    description:
      "Led the development of a B2B platform connecting data center users with capacity providers across hybrid infrastructure models (cloud, enterprise on-premises, and third-party operator facilities). Delivered a scalable solution that helps businesses discover, compare, and request colocation and IT resources in underserved regions.",
    image: "/images/portfolios/Racksub.png",
    category: "Web Application",
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "RESTful API",
      "Authentication",
      "Responsive Design",
      "Team Leadership",
    ],
    duration: "3 months",
    teamSize: "Cross-functional team (Frontend + Backend)",
    role: "Project Lead (Frontend + Backend Collaboration)",
    client: "SJ Innovation LLC",
    challenge:
      "Create a B2B marketplace platform that bridges the gap between data center capacity providers and enterprise users seeking colocation and IT resources in regions where cloud or data centers are not readily available. The platform needed to handle complex search workflows, user roles, and seamless communication between providers and seekers.",
    solution:
      "Led a cross-functional team to architect and develop a full-stack platform with React.js frontend and Node.js/PostgreSQL backend. Designed a seamless, responsive user experience that simplifies complex search and request workflows. Implemented role-based dashboards for providers and seekers, integrated backend APIs for listing management and authentication, and coordinated deployment and QA for a stable production release.",
    results: [
      {
        metric: "Platform Launch",
        value: "3 months",
        description: "Delivered fully functional B2B marketplace on schedule",
      },
      {
        metric: "User Roles",
        value: "2 Types",
        description: "Providers and Seekers with tailored dashboards",
      },
      {
        metric: "Market Connection",
        value: "Two-Sided",
        description: "Connected data center providers with enterprise users",
      },
      {
        metric: "Infrastructure",
        value: "Hybrid",
        description: "Supports cloud, on-premises, and third-party facilities",
      },
    ],
    challenges: [
      "Designing intuitive UX for complex B2B marketplace workflows",
      "Coordinating cross-functional team across frontend and backend",
      "Implementing flexible search and matchmaking algorithms",
      "Managing dual user roles with different needs and permissions",
      "Ensuring scalable architecture for future feature expansion",
    ],
    links: {
      live: "https://racksub.com/",
      demo: "https://app.racksub.com/",
    },
  },
  {
    id: "dxp-neutrogena-migration",
    title: "DXP – Neutrogena Migration to Headless CMS",
    subtitle:
      "Enterprise Content Migration & Team Leadership for Kenvue's Global Digital Experience Program",
    description:
      "Led the migration of Neutrogena's website to Contentful headless CMS as part of Kenvue's global DXP initiative. Hired, trained, and managed a cross-functional development team to successfully migrate large volumes of content while coordinating with global teams and ensuring brand compliance, SEO integrity, and on-time delivery.",
    image: "/images/portfolios/Neutrogena.png",
    category: "Web Application",
    technologies: [
      "Contentful",
      "Headless CMS",
      "React",
      "Content Migration",
      "SEO",
      "Team Leadership",
      "Enterprise Integration",
      "Global Coordination",
    ],
    duration: "Several months",
    teamSize: "Cross-functional team (hired and trained)",
    role: "Lead Developer / Team Lead",
    client: "Kenvue (via SJ Innovation)",
    challenge:
      "Migrate Neutrogena's high-profile website to Contentful headless CMS as part of Kenvue's global digital experience program. Required migrating large volumes of content with accuracy, coordinating across global teams with complex dependencies, client calls, building and training a new development team from scratch, and ensuring brand compliance, SEO integrity, and scalable architecture.",
    solution:
      "Led the end-to-end migration by recruiting and training a specialized development team. Developed standardized workflows for content migration, QA, and deployment. Provided hands-on guidance for Contentful implementation and frontend framework integration. Acted as the bridge between SJI and global Kenvue teams, maintaining clear communication and alignment throughout the project. Conducted client calls to ensure the project is on track and to address any concerns.",
    results: [
      {
        metric: "Project Delivery",
        value: "On Schedule",
        description:
          "Successfully migrated Neutrogena website to Contentful on time",
      },
      {
        metric: "Team Building",
        value: "Full Team",
        description:
          "Hired, trained, and built skilled development team from scratch",
      },
      {
        metric: "Content Migration",
        value: "100%",
        description:
          "Complete content migration with integrity and SEO compliance",
      },
      {
        metric: "Process Efficiency",
        value: "Improved",
        description: "Reduced errors and rework through standardized workflows",
      },
    ],
    challenges: [
      "Building and training specialized team from scratch under tight timeline",
      "Managing large-scale content migration with zero data loss",
      "Coordinating across multiple global teams with complex dependencies",
      "Ensuring SEO and brand compliance during migration",
      "Maintaining project momentum while training new team members",
      "Conducting client calls to ensure the project is on track and to address any concerns",
    ],
    links: {
      live: "https://www.neutrogena.com/",
    },
  },
  {
    id: "rett-revealed-phase1",
    title: "Rett Revealed – Phase 1 Development",
    subtitle:
      "Full-Stack Platform Development with Next.js & Contentful Headless CMS",
    description:
      "Led the development of Phase 1 for Rett Revealed, a public-facing platform for an agency client. Managed a 2-developer team to build a modern, responsive website using Next.js and Contentful, delivering both frontend and backend functionality under strict timelines with a scalable foundation for future phases.",
    image: "/images/portfolios/Rett-Revealed.png",
    category: "Web Application",
    technologies: [
      "Next.js",
      "Contentful",
      "React",
      "Headless CMS",
      "Full-Stack Development",
      "API Routes",
      "Responsive Design",
      "Team Leadership",
    ],
    duration: "2 months",
    teamSize: "3 developers",
    role: "Project Lead / Full-Stack Developer",
    client: "Agency Client (via SJ Innovation)",
    challenge:
      "Develop both frontend and backend for Phase 1 of Rett Revealed platform with a small team of just 2-3 developers. Required ensuring performance, scalability, and responsiveness for all devices, integrating complex content management with dynamic pages, and delivering under strict timelines as the foundation for a multi-phase development program.",
    solution:
      "Led the 2-developer team by defining project architecture, technology stack, and development workflow. Built the frontend using Next.js with reusable components and responsive layouts. Developed backend with API routes and dynamic data handling for Contentful integration. Established code review practices and optimized workflows for small-team efficiency.",
    results: [
      {
        metric: "Phase 1 Delivery",
        value: "On Time",
        description: "Successfully delivered first phase within deadline",
      },
      {
        metric: "Architecture",
        value: "Scalable",
        description: "Created foundation for future phases of development",
      },
      {
        metric: "Team Efficiency",
        value: "High",
        description: "Delivered full-stack project with minimal resources",
      },
      {
        metric: "Code Quality",
        value: "Maintained",
        description: "Established review practices and quality standards",
      },
    ],
    challenges: [
      "Delivering full-stack project with minimal team resources (2 developers)",
      "Balancing frontend and backend development under strict timelines",
      "Ensuring scalability for future phases while meeting Phase 1 deadlines",
      "Maintaining code quality with small team and tight schedule",
      "Integrating complex content management with performance requirements",
    ],
    links: {
      live: "https://www.rettrevealed.com/",
    },
  },
  {
    id: "patient-experience-propel-health",
    title: "Patient Experience – Propel Health",
    subtitle:
      "Healthcare-Focused Platform for Enhanced Patient Resources & Feedback",
    description:
      "Led full-stack development of a responsive, user-friendly platform for Propel Health to enhance patient experience. Built with Next.js, the platform provides intuitive access to healthcare resources, services, and feedback mechanisms while maintaining enterprise-grade performance, accessibility, and secure data handling.",
    image: "/images/portfolios/Propel-Health-Patient-Experience.png",
    category: "Web Application",
    technologies: [
      "Next.js",
      "React",
      "Full-Stack Development",
      "Healthcare Platform",
      "API Integration",
      "Accessibility",
      "Mobile-First Design",
      "Performance Optimization",
    ],
    duration: "1 month",
    teamSize: "Small team",
    role: "Full-Stack Developer / Project Lead",
    client: "Propel Health (via SJ Innovation)",
    challenge:
      "Build a Next.js-based healthcare platform with integrated backend functionality to enhance patient experience. Required ensuring fast performance, responsiveness, and accessibility across all devices, implementing secure data handling for healthcare information, and delivering a production-ready solution under tight timelines while coordinating with healthcare stakeholders. Conducted client calls to ensure the project is on track and to address any concerns.",
    solution:
      "Led the full-stack development by designing project architecture, data flow, and frontend-backend integration. Developed a scalable frontend with Next.js using reusable components and optimized page rendering. Integrated backend APIs for dynamic content, patient resources, and feedback forms. Implemented mobile-first design with accessibility compliance and performance optimizations for quick load times.",
    results: [
      {
        metric: "Platform Delivery",
        value: "Production-Ready",
        description: "Delivered responsive, accessible healthcare platform",
      },
      {
        metric: "Performance",
        value: "Optimized",
        description: "Fast load times and smooth interactions across devices",
      },
      {
        metric: "Accessibility",
        value: "Compliant",
        description: "Healthcare-focused accessibility standards implemented",
      },
      {
        metric: "User Experience",
        value: "Enhanced",
        description: "Intuitive access to resources and feedback mechanisms",
      },
    ],
    challenges: [
      "Ensuring healthcare-specific accessibility and compliance requirements",
      "Balancing security with user-friendly interface design",
      "Optimizing performance for healthcare content delivery",
      "Coordinating with healthcare stakeholders for requirements",
      "Implementing secure data handling under tight timelines",
    ],
    links: {
      live: "https://patientexperience.propelhealth.com/",
    },
  },
  {
    id: "enterprise-email-development-jnj",
    title: "Enterprise Email Development - Johnson & Johnson",
    subtitle:
      "3,000+ Responsive Email Templates for Global Marketing Campaigns",
    description:
      "Contributed to the design and development of 3,000+ responsive email templates for Johnson & Johnson's global marketing campaigns over 2 years. Personally developed ~1,000 templates as part of SJI's dedicated email development service (Crafted.email), ensuring brand consistency, accessibility, and cross-client compatibility across 20+ email platforms.",
    image: "/images/portfolios/janssen.jpg",
    category: "Email Development",
    technologies: [
      "HTML",
      "CSS",
      "Inline Styles",
      "Litmus",
      "Email on Acid",
      "Eloqua",
      "Veeva",
    ],
    duration: "2 years",
    teamSize: "10+ developers",
    role: "Frontend Developer / Project Contributor",
    client: "Johnson & Johnson (via SJ Innovation)",
    challenge:
      "Deliver high-volume, pixel-perfect email templates for global marketing campaigns while ensuring brand consistency, cross-client compatibility across 20+ email platforms, accessibility standards, and maintaining workflow efficiency with a large team over a 2-year period.",
    solution:
      "Developed ~1,000 responsive email templates as part of a 3,000+ template production, applying best practices in HTML, CSS, and inline styles. Focused on lightweight, performant emails with cross-client rendering solutions for Outlook, Gmail, Apple Mail, and mobile devices. Maintained accessibility standards and collaborated with designers, QA, and project managers for smooth delivery and integration.",
    results: [
      {
        metric: "Templates Delivered",
        value: "1,000+",
        description: "Personally developed as part of 3,000+ total templates",
      },
      {
        metric: "Email Clients Supported",
        value: "20+",
        description: "Cross-client compatibility across all major platforms",
      },
      {
        metric: "Project Duration",
        value: "2 years",
        description: "Consistent high-quality delivery over extended period",
      },
      {
        metric: "Global Reach",
        value: "Enterprise",
        description: "Enabled worldwide marketing campaigns",
      },
    ],
    challenges: [
      "Maintaining consistency across 1,000+ templates with team of 10+ developers",
      "Solving complex rendering issues across diverse email clients",
      "Balancing design fidelity with performance and accessibility",
      "Managing high-volume production workflow over 2-year period",
      "Ensuring cross-platform compatibility for global audience",
    ],
    links: {
      live: "https://www.crafted.email/",
    },
  },
  {
    id: "calystapro-emr",
    title: "CalystaPro EMR - Electronic Medical Records Platform",
    subtitle:
      "Enterprise-Grade Healthcare Platform Revamp for Medical Spas & Aesthetic Clinics",
    description:
      "Led the complete frontend redesign and revamp of an existing electronic medical records platform designed for medical spas and aesthetic clinics. Transformed the outdated interface into a modern, secure, scalable, and user-friendly system for patient management, appointment scheduling, and medical data handling within a tight 3-month deadline.",
    image: "/images/portfolios/Calysta-EMR.png",
    category: "Web Application",
    technologies: [
      "JavaScript",
      "SASS",
      "HTML5",
      "Responsive Design",
      "Security & Compliance",
      "Performance Optimization",
      "Team Leadership",
      "Design System",
    ],
    duration: "3 months",
    teamSize: "4-5 frontend developers",
    role: "Frontend Lead Developer",
    client: "SJ Innovation LLC (for Medical Spa Client)",
    challenge:
      "Completely revamp and modernize the existing CalystaPro EMR platform's frontend within a tight 3-month deadline. The outdated design needed a complete overhaul while maintaining all existing functionality for sensitive medical data, role-based access, custom encounter forms, image annotation, and notifications. Required managing a team of 4-5 developers, ensuring zero downtime, and maintaining high performance and security standards throughout the redesign.",
    solution:
      "Led a frontend team of 4-5 developers to completely redesign and rebuild the frontend architecture using modern JavaScript and SASS practices. Developed a comprehensive design system with reusable UI components for custom forms, scheduling, and notifications. Refactored legacy code while ensuring backward compatibility and zero disruption to active users. Implemented responsive design for cross-browser and mobile compatibility with enhanced clinician usability. Coordinated closely with the backend team to optimize API integration and data structures while maintaining security standards.",
    results: [
      {
        metric: "Delivery Time",
        value: "3 months",
        description: "Complete frontend revamp delivered within tight deadline",
      },
      {
        metric: "Team Leadership",
        value: "4-5 developers",
        description:
          "Successfully led and coordinated frontend development team",
      },
      {
        metric: "Zero Downtime",
        value: "100%",
        description: "Seamless transition with no disruption to active users",
      },
      {
        metric: "User Experience",
        value: "Modernized",
        description:
          "Transformed outdated interface into modern, intuitive design",
      },
      {
        metric: "Client Satisfaction",
        value: "High",
        description:
          "Ongoing collaboration and feature enhancements post-launch",
      },
    ],
    challenges: [
      "Revamping large-scale enterprise platform within tight 3-month deadline",
      "Maintaining zero downtime while transitioning from old to new frontend",
      "Managing team of 4-5 developers with varying skill levels under pressure",
      "Ensuring backward compatibility while modernizing the entire codebase",
      "Refactoring legacy code without breaking existing functionality",
      "Coordinating progressive rollout strategy with backend team",
      "Maintaining security and HIPAA compliance throughout redesign process",
    ],
    links: {
      live: "https://calystaemr.com/",
      demo: "https://www.youtube.com/watch?v=Lx8DN0QhEgI",
    },
  },
];

// Summary Projects (minimum info)
// NOTE: Do NOT add projects that already exist as case studies!
// Case studies will automatically appear in the unified portfolio view.
export const projects: Project[] = [
  {
    name: "Email Development for Grafted Growth Clients",
    description:
      "Led development of responsive email templates for 7-10 client brands of Grafted Growth, a marketing agency. Managed a team of 3-5 developers to deliver initial template series, ensuring brand consistency, cross-client compatibility, and smooth client onboarding for ongoing campaigns.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Email Development", color: "pink-text-gradient" },
      { name: "Team Leadership", color: "blue-text-gradient" },
      { name: "Litmus", color: "green-text-gradient" },
    ],
    image: "/images/portfolios/Grafted-Growth.png",
    liveDemoLink: "https://grafted.com/",
  },
  {
    name: "Online IELTS Test Platform",
    description:
      "A full-stack platform for Online IELTS test practice with real-time scoring, analytics, and comprehensive test management serving 1000+ test takers.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
    ],
    image: "/images/portfolios/IELTS-Test-Platform-Test.png",
    source_code_link: "https://github.com/RajonDey/ieltsready",
    liveDemoLink: "https://www.ieltsready.org/",
    featured: true,
  },
  {
    name: "Year In Review",
    description:
      "A full-stack planning and reflection platform for building yearly goals, tracking progress, and reviewing personal milestones.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Full-Stack", color: "pink-text-gradient" },
      { name: "Productivity", color: "blue-text-gradient" },
    ],
    image: "/images/portfolios/year-in-review.png",
    source_code_link: "https://github.com/RajonDey/newyear-blueprint-builder",
    liveDemoLink: "https://www.yearinreview.online/",
    featured: true,
  },
  {
    name: "Clicks",
    description:
      "A lightweight web app for capturing and sharing quick visual snapshots with a clean, responsive experience.",
    tags: [
      { name: "Web App", color: "blue-text-gradient" },
      { name: "Frontend", color: "green-text-gradient" },
      { name: "Responsive UI", color: "pink-text-gradient" },
    ],
    image: "/images/clicks.png",
    source_code_link: "https://github.com/RajonDey/clicks-project",
    liveDemoLink: "https://rdc-clicks.netlify.app/",
  },
  {
    name: "PPIXI – Patient & HCP Websites",
    description:
      "Contributed to development of two complementary healthcare websites for PPIXI - one for patients (ppixiswhy.com) and one for healthcare professionals (ppixiswhyhcp.com). Delivered responsive, accessible web pages with consistent branding and user experience for dual audiences under tight timelines.",
    tags: [
      { name: "Web Development", color: "blue-text-gradient" },
      { name: "Healthcare", color: "green-text-gradient" },
      { name: "Responsive Design", color: "pink-text-gradient" },
      { name: "Team Project", color: "blue-text-gradient" },
      { name: "Accessibility", color: "green-text-gradient" },
    ],
    image: "/images/portfolios/PPIX.png",
    liveDemoLink: "https://www.ppixiswhyhcp.com/",
  },
  {
    name: "DTS – Dealer Transport Service Website",
    description:
      "Independently developed a custom WordPress theme from scratch for DTS with highly interactive animations and modern UI. Handled full-stack development solo including theme architecture, backend integration, custom post types, and plugin configurations while ensuring performance, SEO optimization, and cross-browser compatibility.",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Custom Theme", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Animations", color: "blue-text-gradient" },
      { name: "Full-Stack", color: "green-text-gradient" },
    ],
    image: "/images/portfolios/DTS.png",
    liveDemoLink: "https://dealertransportservice.com/",
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
      href: `/work/${s.id}`,
      metricsPreview,
    };
    return vm;
  });

  const projectEntries: PortfolioEntryViewModel[] = projects.map((p) => {
    const tagNames = (p.tags || []).map((t) => t.name);
    const id = toKebab(p.name);

    // Check if this project has a corresponding case study
    const caseStudySlug = getCaseStudySlugForProjectTitle(p.name);

    // Check if this project has a detail page
    const projectDetailSlug = getProjectDetailSlugForTitle(p.name);

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
      // Priority: case study > project detail > live demo > source
      href: caseStudySlug
        ? `/work/${caseStudySlug}`
        : projectDetailSlug
        ? `/work/${projectDetailSlug}`
        : p.liveDemoLink || p.source_code_link,
      metricsPreview: undefined,
    };
    return vm;
  });

  return [...caseStudyEntries, ...projectEntries];
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

// Project details for lightweight info pages
export const projectDetails: ProjectDetail[] = [
  {
    slug: "email-development-grafted-growth",
    title: "Email Development for Grafted Growth Clients",
    role: "Project Lead",
    team: "5–10 developers",
    duration: "Several months",
    company: "SJ Innovation",
    overview:
      "Led the development of responsive email templates for multiple clients of Grafted Growth, a marketing agency. Successfully onboarded 7–10 client brands by delivering initial templates and ensuring brand consistency across all campaigns.",
    contributions: [
      "Managed and coordinated a team of developers and designers to deliver high-quality email templates",
      "Developed initial series of templates for 7–10 client brands, setting the foundation for ongoing campaigns",
      "Ensured all templates were responsive and compatible across major email clients (Gmail, Outlook, Apple Mail, mobile devices)",
      "Maintained brand consistency and visual quality across campaigns",
    ],
    highlights: [
      "Onboarded multiple clients efficiently, ensuring smooth template adoption",
      "Led the project delivery, demonstrating leadership in a cross-functional team",
      "Focused on responsive design, accessibility, and cross-client rendering",
    ],
    impact: [
      "Enabled multiple client brands to launch email marketing campaigns effectively",
      "Strengthened SJI's reputation as a reliable email development partner for marketing agencies",
      "Demonstrated ability to lead projects that combine design, development, and client onboarding",
    ],
    techStack: [
      "HTML",
      "CSS",
      "Inline Styles",
      "Litmus",
      "Email on Acid",
      "Version Control",
      "Team Collaboration",
    ],
    links: [{ label: "grafted.com", url: "https://grafted.com/" }],
  },
  {
    slug: "online-ielts-test-platform",
    title: "Online IELTS Test Platform",
    role: "Full-Stack Developer",
    team: "Team project",
    duration: "4 months",
    company: "Local IELTS Center",
    overview:
      "A full-fledged platform for IELTS test practice with real-time scoring, analytics, and comprehensive test management. Serves 1000+ test takers with 99.9% completion rate.",
    contributions: [
      "Designed and developed complete platform architecture from scratch",
      "Implemented real-time scoring system for all IELTS modules",
      "Created admin panel for test management and user monitoring",
    ],
    highlights: [
      "Serves 1000+ active test takers with high engagement",
      "100% test completion rate demonstrating excellent UX",
      "Real-time scoring and instant feedback system",
    ],
    impact: [
      "Helped 1000+ students prepare effectively for IELTS exams",
      "Reduced preparation costs compared to traditional coaching",
      "Provided accessible test practice platform for global users",
      "Demonstrated full-stack development and product management skills",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
    links: [
      {
        label: "Live Platform",
        url: "https://www.ieltsready.org/",
      },
      { label: "GitHub", url: "https://github.com/RajonDey/ieltsready" },
    ],
  },
  {
    slug: "year-in-review",
    title: "Year In Review",
    role: "Full-Stack Developer",
    team: "Solo project",
    duration: "Ongoing",
    company: "Personal Project",
    overview:
      "A guided yearly planning and reflection platform that helps users define priorities, set SMART goals, break them into actions, and build sustainable habits. Includes a custom PDF report, Notion template, and supporting resources.",
    contributions: [
      "Designed and built the end-to-end planning flow from assessment to goal planning",
      "Implemented a structured multi-step experience using proven frameworks",
      "Created export-ready summaries and user-friendly outputs",
      "Integrated an unlock flow for premium resources",
    ],
    highlights: [
      "10-minute guided planning flow for clarity and focus",
      "Framework-driven structure (Wheel of Life, SMART goals, OKRs, habits)",
      "Personalized outputs with downloadable resources",
    ],
    impact: [
      "Helps users turn vague goals into structured, actionable plans",
      "Provides a repeatable planning system for year-long execution",
      "Demonstrates end-to-end full-stack product execution",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Full-Stack Development",
      "Product Design",
    ],
    links: [
      { label: "Live Platform", url: "https://www.yearinreview.online/" },
      {
        label: "GitHub",
        url: "https://github.com/RajonDey/newyear-blueprint-builder",
      },
    ],
  },
  {
    slug: "clicks",
    title: "Clicks",
    role: "Frontend Developer",
    team: "Solo project",
    duration: "Ongoing",
    company: "Personal Project",
    overview:
      "A lightweight web app for capturing and sharing quick visual snapshots with a clean, responsive experience.",
    contributions: [
      "Designed and built the responsive UI for fast sharing",
      "Implemented a simple upload-to-preview flow for quick use",
      "Optimized the layout for mobile-first interactions",
    ],
    highlights: [
      "Minimal, fast UI for quick captures",
      "Responsive layout optimized for mobile",
      "Simple sharing flow with clean visuals",
    ],
    impact: [
      "Demonstrates rapid product design and frontend execution",
      "Showcases clean UI/UX for lightweight tools",
    ],
    techStack: ["Frontend Development", "Responsive UI", "Web App"],
    links: [
      { label: "Live Platform", url: "https://rdc-clicks.netlify.app/" },
      { label: "GitHub", url: "https://github.com/RajonDey/clicks-project" },
    ],
  },
  {
    slug: "ppixi-patient-hcp-websites",
    title: "PPIXI – Patient & HCP Websites",
    role: "Frontend/Full-Stack Developer",
    team: "Cross-functional team",
    duration: "Several months",
    company: "SJ Innovation",
    overview:
      "Contributed to the development of two complementary websites for PPIXI: one targeting patients (ppixiswhy.com) and the other targeting healthcare professionals (ppixiswhyhcp.com). The goal was to provide educational resources and structured content for two distinct audiences while maintaining a consistent brand experience.",
    contributions: [
      "Developed responsive, interactive web pages for both patient and HCP audiences",
      "Ensured accessibility and cross-device compatibility for healthcare users",
      "Implemented consistent UI/UX design elements to maintain brand coherence across both platforms",
      "Worked collaboratively to accelerate development timelines, enabling fast delivery",
      "Assisted in rapid development and problem-solving to meet tight deadlines",
    ],
    highlights: [
      "Successfully launched both websites on schedule",
      "Delivered distinct yet cohesive experiences for two different audiences",
      "Demonstrated effective teamwork on enterprise-level healthcare project",
      "Maintained high code quality and consistency across dual platforms",
    ],
    impact: [
      "Enabled PPIXI to provide educational resources to patients and healthcare professionals",
      "Created accessible, user-friendly healthcare information platforms",
      "Showcased ability to work effectively in team environment on complex projects",
      "Contributed to SJI's healthcare portfolio with dual-audience solution",
    ],
    techStack: [
      "Modern Web Technologies",
      "Responsive Design",
      "Accessibility Standards",
      "Healthcare Compliance",
      "Team Collaboration Tools",
    ],
    links: [
      { label: "Patient Site", url: "https://www.ppixiswhy.com/" },
      { label: "HCP Site", url: "https://www.ppixiswhyhcp.com/" },
    ],
  },
  {
    slug: "dts-dealer-transport-service",
    title: "DTS – Dealer Transport Service Website",
    role: "Full-Stack WordPress Developer",
    team: "Solo project",
    duration: "Several months",
    company: "SJ Innovation",
    overview:
      "DTS required a modern, visually appealing website to showcase their transport services. The goal was to provide a highly interactive, animated experience for visitors while maintaining fast performance and easy content management through WordPress.",
    contributions: [
      "Developed a fully custom WordPress theme from scratch, optimized for speed and SEO",
      "Implemented advanced animations and interactive features using modern JavaScript and CSS",
      "Integrated backend functionalities including WordPress hooks, custom post types, and plugin configurations",
      "Ensured the site was fully responsive across all devices and browsers",
      "Managed all aspects of the project independently from design to deployment",
    ],
    highlights: [
      "Built custom WordPress theme with clean, scalable code",
      "Implemented smooth animations without compromising performance",
      "Handled complete full-stack development solo",
      "Delivered highly interactive and visually appealing website",
    ],
    impact: [
      "DTS now has a scalable, maintainable platform for presenting services to clients",
      "Improved online presence with modern, professional website design",
      "Demonstrated strong full-stack WordPress development skills",
      "Enabled easy content management for the client through WordPress admin",
    ],
    techStack: [
      "WordPress",
      "Custom Theme Development",
      "PHP",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Animations",
      "SEO Optimization",
    ],
    links: [
      { label: "DTS Website", url: "https://dealertransportservice.com/" },
    ],
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
    "Email Development for Grafted Growth Clients":
      "email-development-grafted-growth",
    "Online IELTS Test Platform": "online-ielts-test-platform",
    "Year In Review": "year-in-review",
    Clicks: "clicks",
    "PPIXI – Patient & HCP Websites": "ppixi-patient-hcp-websites",
    "DTS – Dealer Transport Service Website": "dts-dealer-transport-service",
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

// Helper to find if a project title has a corresponding case study
export const getCaseStudySlugForProjectTitle = (
  title: string
): string | undefined => {
  // Normalize title for matching
  const normalizedTitle = title.toLowerCase();

  // Check if there's a case study with matching title
  const caseStudy = caseStudies.find(
    (cs) =>
      cs.title.toLowerCase().includes(normalizedTitle.split("-")[0]) ||
      normalizedTitle.includes(cs.title.toLowerCase().split("-")[0])
  );

  return caseStudy?.id;
};
