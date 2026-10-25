import { Experience } from "../types";
import { getCurrentRoleDateRange } from "./experience";

/**
 * Newest first. Home treats [0] as the current role.
 * Titles and dates match the CV. Bullets were not split by role, so they stay on Module Lead.
 */
export const experiences: Experience[] = [
  {
    title: "Module Lead",
    company: "SJ Innovation LLC",
    date: getCurrentRoleDateRange(),
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
    title: "Senior Frontend Developer",
    company: "SJ Innovation LLC",
    date: "May 2022 – Jun 2023",
    description: [],
  },
  {
    title: "Frontend Developer",
    company: "SJ Innovation LLC",
    date: "May 2019 – May 2022",
    description: [],
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
