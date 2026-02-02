import { Tech, Experience } from "../types";

export const techStack: Tech[] = [
  // ... (existing tech stack data)
  { name: "React", icon: "FaReact", category: "Frontend" },
  { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  { name: "Vue.js", icon: "SiVuedotjs", category: "Frontend" },
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
  { name: "PHP", icon: "SiPhp", category: "Languages" },
  { name: "Docker", icon: "FaDocker", category: "DevOps" },
  { name: "Git", icon: "FaGitAlt", category: "DevOps" },
  { name: "AWS", icon: "SiAmazon", category: "DevOps" },
  { name: "Jest", icon: "SiJest", category: "Testing" },
  { name: "Cypress", icon: "SiCypress", category: "Testing" },
];

export const experiences: Experience[] = [
  {
    title: "Module Lead (Frontend)",
    company: "SJ Innovation LLC",
    date: "May 2019 - Present",
    description: [
      "Designed and delivered scalable web applications, owning frontend architecture while collaborating on end-to-end system design.",
      "Built and maintained production systems using React, Next.js, TypeScript, and modern frontend tooling.",
      "Worked with backend teams on API design, data contracts, authentication, and feature integration.",
      "Contributed to backend services and integrations using Node.js and Python where required.",
      "Worked on CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows.",
      "Led technical discovery, estimation, and architectural discussions across frontend and full-stack features.",
      "Mentored engineers through code reviews and sprint execution; participated in technical interviews.",
      "Improved application performance and reliability, achieving ~30% load-time reduction on production systems.",
    ],
  },
  {
    title: "Software Developer (Freelance / Contract)",
    company: "Freelance",
    date: "2015 – 2018",
    description: [
      "Built and delivered client-facing web applications for international clients.",
      "Worked across frontend development, backend integrations, and production deployments.",
    ],
  },
];
