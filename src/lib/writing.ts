import { IEEE_PAPER_TITLE, IEEE_URL } from "./site";

export const WRITING_INTRO =
  "IEEE research on LLM security, and one manuscript under review. This is not a blog.";

export const IEEE_VENUE = "IEEE ICCIT 2025";

export const IEEE_SUMMARY =
  "A published IEEE paper on comment-based attacks against LLMs.";

export const AGENTIC_SURVEY_TITLE =
  "Agentic Artificial Intelligence: A Survey of Architectures, Evolutionary Dynamics, and Governance";

export const AGENTIC_SURVEY_VENUE =
  "Under review, 2026. Information Processing & Management (Elsevier).";

export const AGENTIC_SURVEY_SUMMARY =
  "Survey of agentic architectures, how those systems evolve in practice, and the governance questions that follow from deploying them. Co-authored with EARL collaborators.";

export const WRITING_NEWSLETTER_URL = "https://developer-data.beehiiv.com/";

export const WRITING_NEWSLETTER_NAME = "Developer Data";

export const WRITING_NEWSLETTER_PREFIX = "I also write at";

export interface WritingLink {
  label: string;
  href: string;
}

export interface WritingItem {
  title: string;
  venue: string;
  summary: string;
  href?: string;
  extraLinks: WritingLink[];
}

const IEEE_EXTRA_LINKS: WritingLink[] = [
  {
    label: "Research Site",
    href: "https://llm-vulnerability-site.vercel.app/",
  },
  {
    label: "Dataset (Zenodo)",
    href: "https://doi.org/10.5281/zenodo.15786008",
  },
  {
    label: "GitHub",
    href: "https://github.com/RajonDey/llm-vulnerability-site",
  },
];

export function getWritingItems(): WritingItem[] {
  return [
    {
      title: IEEE_PAPER_TITLE,
      venue: IEEE_VENUE,
      summary: IEEE_SUMMARY,
      href: IEEE_URL,
      extraLinks: IEEE_EXTRA_LINKS,
    },
    {
      title: AGENTIC_SURVEY_TITLE,
      venue: AGENTIC_SURVEY_VENUE,
      summary: AGENTIC_SURVEY_SUMMARY,
      extraLinks: [],
    },
  ];
}
