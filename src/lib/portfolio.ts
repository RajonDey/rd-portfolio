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
    id: "racksub-b2b-platform",
    title: "Racksub - B2B Data Center Marketplace",
    subtitle:
      "Connecting Data Center Users with Capacity Providers Across Hybrid Infrastructure",
    description:
      "Led the development of a B2B platform connecting data center users with capacity providers across hybrid infrastructure models (cloud, enterprise on-premises, and third-party operator facilities). Delivered a scalable solution that helps businesses discover, compare, and request colocation and IT resources in underserved regions.",
    image: "/images/projects/racksub-placeholder.png",
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
    process: [
      {
        phase: "Requirements & Architecture",
        description:
          "Analyzed B2B marketplace requirements, data center industry needs, and user workflows. Designed frontend architecture and coordinated with backend team for API structure.",
        deliverables: [
          "Platform architecture",
          "User flow diagrams",
          "API integration plan",
          "Database schema design",
        ],
      },
      {
        phase: "Team Leadership & Development",
        description:
          "Led cross-functional team across frontend and backend development, ensuring smooth collaboration and delivery. Implemented modular components for scalability.",
        deliverables: [
          "React.js frontend application",
          "Role-based dashboards",
          "Search and matchmaking system",
          "Request management workflow",
        ],
      },
      {
        phase: "Integration & Testing",
        description:
          "Coordinated frontend-backend integration for listing management, user authentication, and request handling. Conducted comprehensive QA testing.",
        deliverables: [
          "API integration",
          "Authentication system",
          "Listing management",
          "Request communication system",
        ],
      },
      {
        phase: "Deployment & Launch",
        description:
          "Oversaw deployment to AWS infrastructure and ensured stable production release with monitoring and performance optimization.",
        deliverables: [
          "Production deployment",
          "AWS infrastructure setup",
          "Monitoring and logging",
          "Documentation and training",
        ],
      },
    ],
    features: [
      "Capacity listings for data center providers (space, power, connectivity)",
      "Advanced search and matchmaking based on region and requirements",
      "Role-based dashboards for Providers vs. Seekers",
      "Streamlined request management and communication system",
      "User authentication and authorization",
      "Responsive design for desktop and mobile access",
      "Listing management with real-time availability updates",
      "Regional filtering for underserved markets",
      "Scalable modular architecture for future expansion",
      "Provider profile and capability showcase",
    ],
    challenges: [
      "Designing intuitive UX for complex B2B marketplace workflows",
      "Coordinating cross-functional team across frontend and backend",
      "Implementing flexible search and matchmaking algorithms",
      "Managing dual user roles with different needs and permissions",
      "Ensuring scalable architecture for future feature expansion",
    ],
    learnings: [
      "Enhanced leadership skills managing cross-functional teams",
      "Gained experience in B2B marketplace platform architecture",
      "Learned to balance complex user workflows with simple UX",
      "Improved coordination skills for frontend-backend integration",
      "Developed expertise in scalable modular component design",
    ],
    nextSteps:
      "Platform is live and connecting data center providers with enterprise users. Positioned as a solution for hybrid IT infrastructure challenges in underserved regions. Future expansions planned for additional features and market coverage.",
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
    image: "/images/projects/neutrogena-placeholder.png",
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
      "Migrate Neutrogena's high-profile website to Contentful headless CMS as part of Kenvue's global digital experience program. Required migrating large volumes of content with accuracy, coordinating across global teams with complex dependencies, building and training a new development team from scratch, and ensuring brand compliance, SEO integrity, and scalable architecture.",
    solution:
      "Led the end-to-end migration by recruiting and training a specialized development team. Developed standardized workflows for content migration, QA, and deployment. Provided hands-on guidance for Contentful implementation and frontend framework integration. Acted as the bridge between SJI and global Kenvue teams, maintaining clear communication and alignment throughout the project.",
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
    process: [
      {
        phase: "Team Building & Planning",
        description:
          "Recruited and trained developers for specialized headless CMS migration. Analyzed migration requirements and established standardized workflows for the project.",
        deliverables: [
          "Development team hiring",
          "Team training program",
          "Migration strategy",
          "Workflow documentation",
        ],
      },
      {
        phase: "Content Migration & Integration",
        description:
          "Executed content migration from existing platform to Contentful, ensuring accuracy, completeness, and brand compliance. Integrated headless CMS with frontend frameworks.",
        deliverables: [
          "Content migration execution",
          "Contentful implementation",
          "Frontend integration",
          "SEO preservation",
        ],
      },
      {
        phase: "Global Coordination & QA",
        description:
          "Coordinated with global Kenvue teams to manage dependencies and timelines. Conducted comprehensive QA to ensure content integrity and brand standards.",
        deliverables: [
          "Cross-team coordination",
          "Dependency management",
          "Quality assurance",
          "Brand compliance verification",
        ],
      },
      {
        phase: "Deployment & Knowledge Transfer",
        description:
          "Successfully launched migrated website and transferred knowledge to ensure ongoing maintenance capability. Documented processes for future migrations.",
        deliverables: [
          "Production deployment",
          "Knowledge transfer",
          "Process documentation",
          "Team capability building",
        ],
      },
    ],
    features: [
      "Headless CMS (Contentful) implementation for enterprise scalability",
      "Complete content migration with SEO preservation",
      "Frontend framework integration for seamless user experience",
      "Brand compliance and quality standards enforcement",
      "Standardized migration workflows for efficiency",
      "Cross-team coordination and dependency management",
      "Global team collaboration and communication",
      "Content management training and capability building",
      "Modern web infrastructure for future-proof digital presence",
      "Process documentation for scalable operations",
    ],
    challenges: [
      "Building and training specialized team from scratch under tight timeline",
      "Managing large-scale content migration with zero data loss",
      "Coordinating across multiple global teams with complex dependencies",
      "Ensuring SEO and brand compliance during migration",
      "Maintaining project momentum while training new team members",
    ],
    learnings: [
      "Gained deep experience in team hiring, training, and mentoring for specialized tasks",
      "Strengthened leadership skills in high-stakes enterprise projects",
      "Learned best practices for headless CMS migrations at scale",
      "Improved cross-team coordination and enterprise communication skills",
      "Enhanced expertise in enterprise-grade content handling and migration",
    ],
    nextSteps:
      "The successful migration enabled Kenvue to maintain a scalable, modern web platform across multiple brands. The trained team and documented processes positioned SJI for future enterprise migration projects with improved efficiency and reduced risk.",
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
    image: "/images/projects/rett-revealed-placeholder.png",
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
    duration: "Several months",
    teamSize: "2 developers",
    role: "Project Lead / Full-Stack Developer",
    client: "Agency Client (via SJ Innovation)",
    challenge:
      "Develop both frontend and backend for Phase 1 of Rett Revealed platform with a small team of just 2 developers. Required ensuring performance, scalability, and responsiveness for all devices, integrating complex content management with dynamic pages, and delivering under strict timelines as the foundation for a multi-phase development program.",
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
    process: [
      {
        phase: "Architecture & Planning",
        description:
          "Defined project architecture, selected technology stack (Next.js + Contentful), and established development workflow for the small team.",
        deliverables: [
          "Technical architecture",
          "Technology stack selection",
          "Development workflow",
          "Project roadmap",
        ],
      },
      {
        phase: "Frontend Development",
        description:
          "Built responsive frontend using Next.js, implementing reusable components, dynamic routing, and optimized layouts for desktop and mobile.",
        deliverables: [
          "Next.js application",
          "Reusable components",
          "Responsive layouts",
          "Dynamic page routing",
        ],
      },
      {
        phase: "Backend Development",
        description:
          "Developed backend with Next.js API routes, integrated Contentful CMS, and implemented dynamic data handling for content management.",
        deliverables: [
          "API routes implementation",
          "Contentful integration",
          "Dynamic data handling",
          "Content management system",
        ],
      },
      {
        phase: "Quality Assurance & Deployment",
        description:
          "Established code review practices, ensured quality standards, and successfully deployed Phase 1 as foundation for future development.",
        deliverables: [
          "Code review process",
          "Quality assurance",
          "Production deployment",
          "Documentation for Phase 2",
        ],
      },
    ],
    features: [
      "Modern, responsive website built with Next.js",
      "Contentful headless CMS integration for content management",
      "Dynamic page generation and routing",
      "Reusable component architecture for maintainability",
      "API routes for backend functionality",
      "Mobile-first responsive design",
      "Performance optimized for fast loading",
      "Scalable architecture for multi-phase development",
      "Clean code structure with review practices",
      "SEO-friendly implementation",
    ],
    challenges: [
      "Delivering full-stack project with minimal team resources (2 developers)",
      "Balancing frontend and backend development under strict timelines",
      "Ensuring scalability for future phases while meeting Phase 1 deadlines",
      "Maintaining code quality with small team and tight schedule",
      "Integrating complex content management with performance requirements",
    ],
    learnings: [
      "Strengthened leadership skills for small but critical teams",
      "Gained deep experience in full-stack Next.js development",
      "Learned to optimize workflows and prioritize features effectively",
      "Enhanced ability to deliver quality with minimal resources",
      "Improved skills in architectural planning for multi-phase projects",
    ],
    nextSteps:
      "Phase 1 created a scalable foundation for subsequent development phases. The established architecture, workflows, and code quality standards enabled efficient expansion of the platform with additional features and functionality.",
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
    image: "/images/projects/propel-health-placeholder.png",
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
    duration: "Several months",
    teamSize: "Small team",
    role: "Full-Stack Developer / Project Lead",
    client: "Propel Health (via SJ Innovation)",
    challenge:
      "Build a Next.js-based healthcare platform with integrated backend functionality to enhance patient experience. Required ensuring fast performance, responsiveness, and accessibility across all devices, implementing secure data handling for healthcare information, and delivering a production-ready solution under tight timelines while coordinating with healthcare stakeholders.",
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
    process: [
      {
        phase: "Architecture & Planning",
        description:
          "Designed project architecture for healthcare platform, defined data flow, and planned frontend-backend integration with security considerations.",
        deliverables: [
          "Technical architecture",
          "Data flow design",
          "Security planning",
          "Development roadmap",
        ],
      },
      {
        phase: "Frontend Development",
        description:
          "Built scalable Next.js frontend with reusable components, mobile-first responsive design, and accessibility compliance for healthcare users.",
        deliverables: [
          "Next.js application",
          "Reusable components",
          "Mobile-first layouts",
          "Accessibility implementation",
        ],
      },
      {
        phase: "Backend Integration",
        description:
          "Integrated backend APIs for dynamic content delivery, patient resources management, and secure feedback collection forms.",
        deliverables: [
          "API integration",
          "Dynamic content system",
          "Patient resources module",
          "Feedback forms",
        ],
      },
      {
        phase: "Optimization & Deployment",
        description:
          "Implemented performance optimizations, conducted cross-browser testing, and deployed production-ready healthcare platform.",
        deliverables: [
          "Performance optimization",
          "Cross-browser compatibility",
          "Production deployment",
          "Documentation",
        ],
      },
    ],
    features: [
      "Responsive, user-friendly healthcare platform",
      "Intuitive patient resources and service access",
      "Secure feedback collection mechanisms",
      "Mobile-first responsive design",
      "Accessibility compliance for healthcare users",
      "Performance-optimized for fast loading",
      "Dynamic content management",
      "Cross-browser compatibility",
      "Secure data handling for healthcare information",
      "Enterprise-grade scalability and reliability",
    ],
    challenges: [
      "Ensuring healthcare-specific accessibility and compliance requirements",
      "Balancing security with user-friendly interface design",
      "Optimizing performance for healthcare content delivery",
      "Coordinating with healthcare stakeholders for requirements",
      "Implementing secure data handling under tight timelines",
    ],
    learnings: [
      "Strengthened skills in Next.js architecture and full-stack integration",
      "Gained experience in healthcare-focused web platform development",
      "Enhanced understanding of accessibility and performance in healthcare",
      "Improved stakeholder coordination for specialized industry projects",
      "Developed expertise in secure data handling for sensitive information",
    ],
    nextSteps:
      "The platform enables healthcare providers to deliver structured resources and collect patient feedback effectively, enhancing the overall patient experience. The scalable architecture supports future feature additions and platform expansion.",
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
    image: "/images/projects/email-jnj-placeholder.png",
    category: "Email Development",
    technologies: [
      "HTML",
      "CSS",
      "Inline Styles",
      "Litmus",
      "Email on Acid",
      "Salesforce",
      "HubSpot",
      "Marketo",
    ],
    duration: "2 years",
    teamSize: "10+ developers",
    role: "Frontend Developer / Project Contributor",
    client: "Johnson & Johnson (via SJ Innovation)",
    challenge:
      "Deliver high-volume, pixel-perfect email templates for global marketing campaigns while ensuring brand consistency, cross-client compatibility across 20+ email platforms, accessibility standards, and maintaining workflow efficiency with a large team over a 2-year period.",
    solution:
      "Developed ~1,000 responsive email templates as part of a 3,000+ template production, applying best practices in HTML, CSS, and inline styles. Focused on lightweight, performant emails with cross-client rendering solutions for Outlook, Gmail, Apple Mail, and mobile devices. Maintained accessibility standards and collaborated with designers, backend developers, and marketing teams for smooth delivery and ESP integration.",
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
    process: [
      {
        phase: "Template Design & Development",
        description:
          "Developed high-volume, pixel-perfect email templates across multiple campaigns, ensuring brand consistency and design fidelity.",
        deliverables: [
          "Responsive email templates",
          "Brand-consistent designs",
          "Cross-campaign variations",
          "Mobile-optimized layouts",
        ],
      },
      {
        phase: "Cross-Client Testing & Optimization",
        description:
          "Ensured compatibility across 20+ email clients using Litmus and Email on Acid, solving complex rendering issues for Outlook, Gmail, and mobile devices.",
        deliverables: [
          "Cross-client compatibility",
          "Rendering issue solutions",
          "Mobile responsiveness",
          "Performance optimization",
        ],
      },
      {
        phase: "Accessibility & Standards",
        description:
          "Applied accessibility best practices for screen readers, semantic HTML structure, and WCAG compliance to ensure inclusive email communication.",
        deliverables: [
          "Accessible email markup",
          "Screen reader optimization",
          "Semantic structure",
          "Standards compliance",
        ],
      },
      {
        phase: "ESP Integration & Delivery",
        description:
          "Integrated templates with ESP platforms (Salesforce, HubSpot, Marketo) and collaborated with cross-functional teams for smooth campaign delivery.",
        deliverables: [
          "ESP platform integration",
          "Template deployment",
          "Cross-team collaboration",
          "Quality assurance",
        ],
      },
    ],
    features: [
      "3,000+ responsive email templates for global campaigns",
      "Cross-client compatibility across 20+ email platforms",
      "Pixel-perfect design implementation with brand consistency",
      "Mobile-first responsive design approach",
      "Accessibility standards and screen reader optimization",
      "ESP platform integration (Salesforce, HubSpot, Marketo)",
      "Lightweight, performant HTML/CSS with inline styles",
      "Complex layout solutions for Outlook and legacy clients",
      "Semantic HTML structure for better deliverability",
      "Version-controlled template library",
    ],
    challenges: [
      "Maintaining consistency across 1,000+ templates with team of 10+ developers",
      "Solving complex rendering issues across diverse email clients",
      "Balancing design fidelity with performance and accessibility",
      "Managing high-volume production workflow over 2-year period",
      "Ensuring cross-platform compatibility for global audience",
    ],
    learnings: [
      "Mastered large-scale email production and workflow management",
      "Gained deep expertise in cross-client email rendering solutions",
      "Developed systematic approach to accessibility and standards compliance",
      "Improved collaboration skills across design, dev, and marketing teams",
      "Enhanced understanding of ESP platforms and campaign deployment",
    ],
    nextSteps:
      "This work contributed to SJI's reputation as a reliable email development service provider (Crafted.email), enabling global marketing campaigns with consistent, high-quality email communication and improved engagement metrics.",
    links: {
      live: "https://www.crafted.email/",
    },
  },
  {
    id: "calystapro-emr",
    title: "CalystaPro EMR - Electronic Medical Records Platform",
    subtitle:
      "Enterprise-Grade Healthcare Platform for Medical Spas & Aesthetic Clinics",
    description:
      "Led the frontend development of an electronic medical records platform designed for medical spas and aesthetic clinics. Delivered a secure, scalable, and user-friendly system for patient management, appointment scheduling, and medical data handling in just 2 months.",
    image: "/images/projects/calystapro-emr-placeholder.png",
    category: "Web Application",
    technologies: [
      "JavaScript",
      "SASS",
      "HTML5",
      "RESTful API",
      "Responsive Design",
      "Security & Compliance",
      "Performance Optimization",
      "Team Leadership",
    ],
    duration: "2 months",
    teamSize: "4 frontend developers",
    role: "Frontend Lead Developer",
    client: "SJ Innovation LLC (for Medical Spa Client)",
    challenge:
      "Build a fully responsive, enterprise-grade frontend for an electronic medical records platform in just 2 months. The system needed to handle sensitive medical data with role-based access, custom encounter forms, image annotation, and notifications while maintaining high performance and security standards.",
    solution:
      "Led a frontend team of 4 developers to design and implement the complete frontend architecture using JavaScript and SASS. Developed reusable UI components for custom forms, scheduling, and notifications. Ensured cross-browser and mobile responsiveness with a focus on clinician usability. Implemented logging and performance optimizations for a smooth user experience. Coordinated closely with the backend team to align API endpoints and data structures.",
    results: [
      {
        metric: "Delivery Time",
        value: "2 months",
        description: "Production-ready platform delivered on time",
      },
      {
        metric: "Team Leadership",
        value: "4 developers",
        description: "Successfully led and mentored frontend team",
      },
      {
        metric: "Workflow Efficiency",
        value: "Significant",
        description: "Reduced manual processes for clinic operations",
      },
      {
        metric: "Client Satisfaction",
        value: "Continued",
        description: "Ongoing collaboration after successful launch",
      },
    ],
    process: [
      {
        phase: "Requirements & Planning",
        description:
          "Analyzed EMR requirements, healthcare compliance needs, and user workflows. Planned frontend architecture and component structure for rapid development.",
        deliverables: [
          "Frontend architecture design",
          "Component library structure",
          "Development timeline",
          "API integration plan",
        ],
      },
      {
        phase: "Team Leadership & Development",
        description:
          "Led team of 4 developers with task coordination, code reviews, and agile sprint planning. Mentored team members on best practices and healthcare application requirements.",
        deliverables: [
          "Reusable UI components",
          "Custom form system",
          "Scheduling interface",
          "Notification system",
        ],
      },
      {
        phase: "Integration & Optimization",
        description:
          "Coordinated with backend team for API integration. Implemented security features, role-based access, and performance optimizations for clinician usability.",
        deliverables: [
          "API integration",
          "Security implementation",
          "Performance optimization",
          "Cross-browser compatibility",
        ],
      },
      {
        phase: "Testing & Deployment",
        description:
          "Comprehensive testing for responsiveness, security, and usability. Successfully deployed production-ready platform within 2-month timeline.",
        deliverables: [
          "Production deployment",
          "Documentation",
          "User training materials",
          "Ongoing support plan",
        ],
      },
    ],
    features: [
      "Patient management and medical records system",
      "Custom encounter forms with dynamic fields",
      "Image annotation tools for medical documentation",
      "Appointment scheduling and calendar management",
      "Real-time notifications for staff and patients",
      "Role-based access control for data security",
      "Responsive design for desktop and mobile devices",
      "Performance-optimized for fast loading and smooth interactions",
      "Cross-browser compatibility",
      "HIPAA-compliant data handling",
    ],
    challenges: [
      "Delivering enterprise-grade frontend in aggressive 2-month timeline",
      "Managing team coordination and code quality under tight deadlines",
      "Ensuring security and compliance for sensitive medical data",
      "Building flexible custom form system for various medical scenarios",
      "Coordinating frontend-backend integration across teams",
    ],
    learnings: [
      "Strengthened leadership and team management skills under pressure",
      "Learned to rapidly architect frontend solutions for enterprise SaaS",
      "Gained experience in healthcare compliance and security requirements",
      "Improved coordination skills for frontend-backend integration",
      "Enhanced ability to deliver high-quality code under tight timelines",
    ],
    nextSteps:
      "The successful launch led to continued collaboration with the client for feature enhancements and additional modules. Platform is actively used by medical spas and aesthetic clinics for daily operations.",
    links: {
      live: "https://calystaemr.com/",
      demo: "https://sjinnovation.com/case-study/calystapro-emr",
    },
  },
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
];

// Summary Projects (minimum info)
// NOTE: Do NOT add projects that already exist as case studies!
// Case studies will automatically appear in the unified portfolio view.
export const projects: Project[] = [
  {
    name: "Email Development for Grafted Growth Clients",
    description:
      "Led development of responsive email templates for 7-10 client brands of Grafted Growth, a marketing agency. Managed a team of 5-10 developers to deliver initial template series, ensuring brand consistency, cross-client compatibility, and smooth client onboarding for ongoing campaigns.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Email Development", color: "pink-text-gradient" },
      { name: "Team Leadership", color: "blue-text-gradient" },
      { name: "Litmus", color: "green-text-gradient" },
    ],
    image: "/images/projects/grafted-growth-placeholder.png",
    source_code_link: "https://grafted.com/",
    liveDemoLink: "https://grafted.com/",
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
    image: "/images/projects/ppixi-placeholder.png",
    source_code_link: "https://www.ppixiswhy.com/",
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
    image: "/images/projects/dts-placeholder.png",
    source_code_link: "https://dealertransportservice.com/",
    liveDemoLink: "https://dealertransportservice.com/",
  },
  {
    name: "Franchisor AI Labs – WordPress Website",
    description:
      "Independently developed WordPress site using Elementor to showcase Franchisor AI Labs' AI services. Created clean, responsive, and visually engaging experience to clearly communicate complex AI offerings with optimized performance, SEO readiness, and professional design for marketing purposes.",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Elementor", color: "green-text-gradient" },
      { name: "AI Services", color: "pink-text-gradient" },
      { name: "Responsive Design", color: "blue-text-gradient" },
      { name: "SEO", color: "green-text-gradient" },
    ],
    image: "/images/projects/franchisor-ai-placeholder.png",
    source_code_link: "https://franchisorailabs.com/",
    liveDemoLink: "https://franchisorailabs.com/",
  },
  {
    name: "Advanced GI Care – WordPress Website",
    description:
      "Independently developed WordPress website for Dr. Mukul Arya's Advanced GI Care clinic. Created clean, professional, and responsive site with patient-friendly navigation, appointment forms, and service pages. Focused on accessibility, cross-device compatibility, and optimized performance for healthcare patient engagement.",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Healthcare", color: "green-text-gradient" },
      { name: "Responsive Design", color: "pink-text-gradient" },
      { name: "Patient Engagement", color: "blue-text-gradient" },
      { name: "SEO", color: "green-text-gradient" },
    ],
    image: "/images/projects/advanced-gi-care-placeholder.png",
    source_code_link: "https://advancedgicare.com/",
    liveDemoLink: "https://advancedgicare.com/",
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
        ? `/case-studies/${caseStudySlug}`
        : projectDetailSlug
        ? `/projects/${projectDetailSlug}`
        : p.liveDemoLink || p.source_code_link,
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
    team: "Solo project",
    duration: "4 months",
    company: "Personal Project",
    overview:
      "A full-fledged platform for IELTS test preparation and practice with real-time scoring, analytics, and comprehensive test management. Serves 1000+ test takers with 99.9% completion rate.",
    contributions: [
      "Designed and developed complete platform architecture from scratch",
      "Implemented real-time scoring system for all IELTS modules",
      "Built comprehensive analytics dashboard for test-takers",
      "Integrated payment processing and subscription management",
      "Created admin panel for test management and user monitoring",
    ],
    highlights: [
      "Serves 1000+ active test takers with high engagement",
      "99.9% test completion rate demonstrating excellent UX",
      "Real-time scoring and instant feedback system",
      "Comprehensive analytics for performance tracking",
    ],
    impact: [
      "Helped 1000+ students prepare effectively for IELTS exams",
      "Reduced preparation costs compared to traditional coaching",
      "Provided accessible test practice platform for global users",
      "Demonstrated full-stack development and product management skills",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Stripe",
      "Chart.js",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live Platform", url: "https://ielts.rajondey.com" },
      { label: "GitHub", url: "https://github.com/RajonDey/ielts-platform" },
    ],
  },
  {
    slug: "llm-security-research-platform",
    title: "LLM Security Research Platform",
    role: "Research Developer",
    team: "Solo research project",
    duration: "Ongoing",
    company: "Personal Research",
    overview:
      "Research platform for AI model vulnerability assessment and jailbreak detection. Includes automated testing tools and comprehensive security frameworks for LLM applications.",
    contributions: [
      "Developed automated testing framework for LLM vulnerabilities",
      "Created comprehensive jailbreak detection system",
      "Implemented security assessment tools for AI applications",
      "Built research documentation and methodology framework",
      "Contributed to AI security research community",
    ],
    highlights: [
      "Novel approach to LLM security testing",
      "Automated vulnerability detection framework",
      "Comprehensive security assessment tools",
      "Active contribution to AI safety research",
    ],
    impact: [
      "Advanced understanding of LLM security vulnerabilities",
      "Contributed tools to AI security research community",
      "Demonstrated research and development capabilities",
      "Raised awareness about AI model safety concerns",
    ],
    techStack: [
      "Python",
      "Machine Learning",
      "PyTorch",
      "OpenAI API",
      "Security Testing",
      "Research Methodology",
    ],
    links: [
      {
        label: "Research Platform",
        url: "https://llm-security.rajondey.com",
      },
      {
        label: "GitHub",
        url: "https://github.com/RajonDey/llm-security-research",
      },
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
  {
    slug: "franchisor-ai-labs-wordpress",
    title: "Franchisor AI Labs – WordPress Website",
    role: "Full-Stack WordPress Developer",
    team: "Solo project",
    duration: "Several months",
    company: "Independent / Freelance",
    overview:
      "Developed a WordPress site using Elementor to showcase Franchisor AI Labs' AI services. Focused on creating a clean, responsive, and visually engaging experience to clearly communicate complex AI offerings.",
    contributions: [
      "Designed and implemented the entire website using WordPress and Elementor",
      "Developed custom layouts, responsive design, and interactive sections",
      "Ensured cross-device and cross-browser compatibility for smooth user experience",
      "Optimized site performance, SEO readiness, and visual clarity for marketing purposes",
      "Translated complex AI services into clear, user-friendly website content and design",
    ],
    highlights: [
      "Solo project execution demonstrating end-to-end WordPress and Elementor skills",
      "Clean, professional design for complex AI service offerings",
      "Responsive and optimized for performance across all devices",
      "Successfully communicated technical AI concepts in accessible format",
    ],
    impact: [
      "Delivered polished, professional website ready for client launch",
      "Enhanced online presence for Franchisor AI Labs",
      "Demonstrated ability to translate technical concepts into user-friendly design",
      "Showcased versatility in WordPress development tools (Elementor)",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "Responsive Design",
      "SEO Optimization",
      "Custom Layouts",
      "Performance Optimization",
    ],
    links: [
      { label: "Franchisor AI Labs", url: "https://franchisorailabs.com/" },
    ],
  },
  {
    slug: "advanced-gi-care-wordpress",
    title: "Advanced GI Care – WordPress Website",
    role: "Full-Stack WordPress Developer",
    team: "Solo project",
    duration: "Several months",
    company: "SJ Innovation",
    overview:
      "Developed the WordPress website for Dr. Mukul Arya's Advanced GI Care, focusing on delivering a clean, professional, and responsive site tailored to patient engagement and clarity of medical information.",
    contributions: [
      "Designed and developed the entire website, including custom layouts and responsive design",
      "Implemented patient-friendly navigation, appointment forms, and service pages",
      "Ensured cross-device and cross-browser compatibility for seamless user experience",
      "Optimized site performance, loading speed, and visual aesthetics",
      "Translated medical services into clear and accessible online presence",
    ],
    highlights: [
      "Solo execution demonstrating end-to-end WordPress development skills",
      "Patient-focused design with clear information architecture",
      "Professional healthcare website with optimized user experience",
      "Responsive design ensuring accessibility across all devices",
    ],
    impact: [
      "Advanced GI Care now has a polished digital presence for patient engagement",
      "Improved online accessibility for patients seeking gastrointestinal care",
      "Demonstrated ability to create healthcare websites that balance professionalism with clarity",
      "Supported clinic's digital presence and patient acquisition efforts",
    ],
    techStack: [
      "WordPress",
      "Custom Development",
      "Responsive Design",
      "Healthcare UI/UX",
      "SEO Optimization",
      "Performance Optimization",
    ],
    links: [{ label: "Advanced GI Care", url: "https://advancedgicare.com/" }],
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
    "LLM Security Research Platform": "llm-security-research-platform",
    "PPIXI – Patient & HCP Websites": "ppixi-patient-hcp-websites",
    "DTS – Dealer Transport Service Website": "dts-dealer-transport-service",
    "Franchisor AI Labs – WordPress Website": "franchisor-ai-labs-wordpress",
    "Advanced GI Care – WordPress Website": "advanced-gi-care-wordpress",
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
