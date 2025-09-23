import { Tech, Experience, Project } from "../types";

export const techStack: Tech[] = [
  // ... (existing tech stack data)
  { name: "React", icon: "FaReact", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  { name: "Vue.js", icon: "SiVuedotjs", category: "Frontend" },
  { name: "Flutter", icon: "SiFlutter", category: "Frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "Redux", icon: "SiRedux", category: "Frontend" },
  { name: "HTML5", icon: "FaHtml5", category: "Frontend" },
  { name: "CSS3", icon: "FaCss3Alt", category: "Frontend" },
  { name: "Node.js", icon: "FaNodeJs", category: "Backend" },
  { name: "MongoDB", icon: "SiMongodb", category: "Backend" },
  { name: "Express", icon: "SiExpress", category: "Backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "Backend" },
  { name: "MySQL", icon: "SiMysql", category: "Backend" },
  { name: "JavaScript", icon: "FaJsSquare", category: "Languages" },
  { name: "TypeScript", icon: "SiTypescript", category: "Languages" },
  { name: "Python", icon: "FaPython", category: "Languages" },
  { name: "Docker", icon: "FaDocker", category: "DevOps" },
  { name: "Git", icon: "FaGitAlt", category: "DevOps" },
  { name: "AWS", icon: "SiAmazon", category: "DevOps" },
  { name: "Jest", icon: "SiJest", category: "Testing" },
  { name: "Cypress", icon: "SiCypress", category: "Testing" },
];

export const experiences: Experience[] = [
  {
    title: "Module Lead - Frontend",
    company: "SJ Innovation LLC",
    date: "May 2019 - Present",
    description: [
      "Lead a team of 8+ developers, delivering 100+ websites and SaaS platforms serving 100K+ monthly users.",
      "Architected and deployed 15+ MERN-stack applications handling 5K+ daily active users.",
      "Improved React/Next.js app performance, reducing load times by 30% and boosting Lighthouse scores by 40%.",
      "Introduced CI/CD pipelines that cut deployment time by 60% and improved team productivity by 25%.",
      "Mentored junior engineers and conducted code reviews to maintain high code quality standards.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Fiverr & PPH",
    date: "January 2015 - December 2019",
    description: [
      "Completed 200+ client projects (e-commerce, blogs, SaaS apps) with consistent 5-star ratings.",
      "Developed websites using WordPress, Shopify, Wix, Squarespace, and custom HTML/CSS/JS solutions.",
      "Managed client relationships and project delivery from requirements gathering to deployment.",
      "Specialized in responsive design and performance optimization for various business needs.",
    ],
  },
];

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
