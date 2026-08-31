import { ABOUT_INTRO_P1, ABOUT_LOCATION, ABOUT_STACK } from "../about";
import { experiences } from "../data";
import { getYearsOfExperienceLabel } from "../experience";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  IEEE_PAPER_TITLE,
  IEEE_URL,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_ORIGIN,
} from "../site";
import {
  getSelectedWorkEntries,
  SELECTED_WORK_SLUGS,
  type SelectedWorkSlug,
} from "../selected-work";
import { IEEE_VENUE } from "../writing";
import type { FitResult } from "./fit";

const PUBLIC_TITLE = "Senior Software Engineer";
const LETTER_NOTICE = "Currently employed, 4-week notice.";
const LETTER_IEEE =
  "IEEE ICCIT 2025 paper on comment-based attacks against LLMs.";
const LETTER_FALLBACK_WORK = "Work includes healthcare and SaaS platforms.";
const LETTER_RELEVANT_PREFIX = "Relevant work:";

export interface PackExperience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface PackWorkItem {
  slug: string;
  title: string;
  sentence: string;
  href: string;
}

export interface PackWriting {
  title: string;
  venue: string;
  href: string;
}

export interface PackCv {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  site: string;
  summary: string;
  stack: string;
  experience: PackExperience[];
  work: PackWorkItem[];
  writing: PackWriting;
}

export interface PackLetter {
  title: string;
  paragraphs: string[];
  signOff: string;
}

export interface ApplicationPack {
  cv: PackCv;
  letter: PackLetter;
}

function firstSentence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : trimmed;
}

function tokenize(text: string): Set<string> {
  return new Set(text.toLowerCase().match(/[a-z]{4,}/g) ?? []);
}

function bulletScore(bullet: string, tokens: Set<string>): number {
  const words = bullet.toLowerCase().match(/[a-z]{4,}/g) ?? [];
  return words.reduce((sum, word) => (tokens.has(word) ? sum + 1 : sum), 0);
}

function rankBullets(bullets: string[], jdText: string): string[] {
  const tokens = tokenize(jdText);
  return [...bullets].sort(
    (left, right) => bulletScore(right, tokens) - bulletScore(left, tokens)
  );
}

export function summaryForTitle(applicationTitle: string): string {
  return ABOUT_INTRO_P1.replace(PUBLIC_TITLE, applicationTitle);
}

function packWorkItems(fit: FitResult): PackWorkItem[] {
  const entries = getSelectedWorkEntries();
  const bySlug = new Map(
    SELECTED_WORK_SLUGS.map((slug, index) => [slug, entries[index]])
  );
  const order = [
    ...fit.work.map((item) => item.slug),
    ...SELECTED_WORK_SLUGS,
  ];
  const seen = new Set<string>();
  const items: PackWorkItem[] = [];
  for (const slug of order) {
    if (seen.has(slug)) {
      continue;
    }
    seen.add(slug);
    const entry = bySlug.get(slug as SelectedWorkSlug);
    if (!entry) {
      continue;
    }
    items.push({
      slug,
      title: entry.title,
      sentence: firstSentence(entry.description),
      href: `${SITE_ORIGIN}/work/${slug}`,
    });
  }
  return items;
}

function letterParagraphs(fit: FitResult): string[] {
  const years = getYearsOfExperienceLabel();
  const intro = `${fit.applicationTitle}. ${summaryForTitle(fit.applicationTitle)} ${years} of corporate experience since 2019.`;

  const middleParts: string[] = [];
  if (fit.work.length > 0) {
    const workLine = fit.work
      .map((item) => `${item.title} (${item.href})`)
      .join(". ");
    middleParts.push(`${LETTER_RELEVANT_PREFIX} ${workLine}.`);
  }
  if (fit.includeIeee) {
    middleParts.push(`${LETTER_IEEE} ${IEEE_URL}`);
  }
  if (middleParts.length === 0) {
    middleParts.push(LETTER_FALLBACK_WORK);
  }

  const close = `${ABOUT_LOCATION} ${LETTER_NOTICE} Portfolio: ${SITE_ORIGIN}`;
  return [intro, middleParts.join(" "), close];
}

export function buildApplicationPack(
  fit: FitResult,
  jdText: string
): ApplicationPack {
  return {
    cv: {
      name: SITE_NAME,
      title: fit.applicationTitle,
      email: CONTACT_EMAIL,
      location: ABOUT_LOCATION,
      linkedin: LINKEDIN_URL,
      github: GITHUB_URL,
      site: SITE_ORIGIN,
      summary: summaryForTitle(fit.applicationTitle),
      stack: ABOUT_STACK,
      experience: experiences.map((role) => ({
        title: role.title,
        company: role.company,
        date: role.date,
        bullets: rankBullets(role.description, jdText),
      })),
      work: packWorkItems(fit),
      writing: {
        title: IEEE_PAPER_TITLE,
        venue: IEEE_VENUE,
        href: IEEE_URL,
      },
    },
    letter: {
      title: fit.applicationTitle,
      paragraphs: letterParagraphs(fit),
      signOff: SITE_NAME,
    },
  };
}
