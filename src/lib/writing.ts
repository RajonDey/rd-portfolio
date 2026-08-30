import { IEEE_PAPER_TITLE, IEEE_URL } from "./site";
import { getProjectDetailBySlug } from "./portfolio";

export const WRITING_INTRO =
  "IEEE research on LLM security. This is not a blog.";

export const IEEE_VENUE = "IEEE ICCIT 2025";

export const IEEE_SUMMARY =
  "A published IEEE paper on comment-based attacks against LLMs.";

export interface WritingLink {
  label: string;
  href: string;
}

export interface WritingItem {
  title: string;
  venue: string;
  summary: string;
  href: string;
  extraLinks: WritingLink[];
}

export function getWritingItems(): WritingItem[] {
  const related = getProjectDetailBySlug("llm-security-research-platform");
  const extraLinks: WritingLink[] = (related?.links || []).map((link) => ({
    label: link.label,
    href: link.url,
  }));

  return [
    {
      title: IEEE_PAPER_TITLE,
      venue: IEEE_VENUE,
      summary: IEEE_SUMMARY,
      href: IEEE_URL,
      extraLinks,
    },
  ];
}
