import { Tech, Experience } from "../types";

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
