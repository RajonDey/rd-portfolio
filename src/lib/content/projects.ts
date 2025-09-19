import { Project } from "@/types";

// Minimal MVP placeholder project data. Replace with real content later.
export const projects: Project[] = [
  {
    name: "ClipKit SaaS Platform",
    slug: "clipkit",
    description: "Content creation SaaS – improved performance & author workflow.",
    longDescription:
      "Flagship side project demonstrating full-stack architecture, performance optimization, and product thinking.",
    tags: [
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "Performance" }
    ],
    image: "/images/cms-dev.png",
    liveDemoLink: "#", // placeholder
    source_code_link: "#",
    featured: true,
    category: "side",
    metrics: [
      { label: "Perf Score", value: "90" },
      { label: "Load Time", value: "1.8s" }
    ],
    confidentiality: "public"
  },
  {
    name: "Pipeline Acceleration Initiative",
    slug: "pipeline-acceleration",
    description: "Reduced CI/CD pipeline time and increased deploy frequency.",
    longDescription:
      "Employer project (anonymized). Focus on developer experience, build caching, and parallelization.",
    tags: [
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "Docker" }
    ],
    image: "/images/life-commits.png",
    featured: true,
    category: "employer",
    metrics: [
      { label: "Pipeline Time", value: "-61%" },
      { label: "Deploys", value: "3x" }
    ],
    confidentiality: "anonymized"
  },
  {
    name: "Freelance Portfolio Aggregate",
    slug: "freelance-aggregate",
    description: "100+ client deliveries (ecommerce, SaaS, content).",
    longDescription:
      "Representative summary of freelance career focusing on reliability, breadth, and client satisfaction.",
    tags: [
      { name: "Ecommerce" },
      { name: "SaaS" },
      { name: "Frontend" }
    ],
    image: "/images/fiverr-pph.png",
    category: "freelance",
    metrics: [
      { label: "Projects", value: "100+" },
      { label: "Avg Rating", value: "5★" }
    ],
    confidentiality: "public"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}
