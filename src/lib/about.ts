import { getYearsOfExperienceLabel } from "./experience";

export const ABOUT_INTRO_P1 =
  "I am a Senior Software Engineer at SJ Innovation. I build production web applications with React, Next.js, TypeScript, Node.js, and Python. I own frontend architecture and work on APIs, auth, and integrations.";

export const ABOUT_STACK =
  "React, Next.js, TypeScript, Node.js, Python, FastAPI. AWS, Docker, and CI/CD.";

export const ABOUT_LOCATION =
  "Based in Sylhet, Bangladesh. Open to Germany, Netherlands, and Canada.";

export function getAboutIntroP2(): string {
  return `Work includes healthcare and SaaS platforms and CI/CD with GitHub Actions. Secondary: a published IEEE paper on comment-based attacks against LLMs, for AI security and research-track readers. ${getYearsOfExperienceLabel()} of corporate experience since 2019.`;
}
