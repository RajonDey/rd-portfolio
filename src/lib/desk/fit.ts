import { FRONTEND_CV_URL, IEEE_PAPER_TITLE, IEEE_URL, SITE_ORIGIN, SWE_CV_DOC_URL } from "../site";
import {
  getCaseStudyBySlug,
  getProjectDetailBySlug,
} from "../portfolio";
import { SELECTED_WORK_SLUGS } from "../selected-work";
import {
  CONTRACT_SKIP_PATTERNS,
  ENTRY_LEVEL_PATTERNS,
  EXCLUDED_LOCATION_PATTERNS,
  FRONTEND_TITLE_PATTERN,
  FULL_TIME_PATTERN,
  GERMAN_PLUS_PATTERNS,
  GERMAN_REQUIRED_PATTERNS,
  GERMAN_SKIP_PATTERNS,
  INDUSTRY_PATTERNS,
  PART_TIME_PATTERN,
  SHORT_CONTRACT_PATTERNS,
  STACK_PATTERNS,
  TARGET_TITLE_PATTERNS,
  TECH_LEAD_TITLE_PATTERN,
  CORE_STACK_LABELS,
  BRIDGE_STACK_LABELS,
  hasAlreadyInEuVeto,
  hasCsDegreePreferred,
  hasCsDegreeRequired,
  hasDsaInterviewBar,
  hasDsaSoftMention,
  hasMidSizeCompanySignal,
  hasRelocationVisaSignal,
  hasRemoteCountrySignal,
  hasUsWorkAuthorizationVeto,
  hasWrongRoleVeto,
} from "./rules";
import {
  DESK_DSA_NOTE,
  DESK_FLAG_ALREADY_EU,
  DESK_FLAG_CS_DEGREE,
  DESK_FLAG_DSA,
  DESK_FLAG_ENTRY,
  DESK_FLAG_SHORT_CONTRACT,
  DESK_FLAG_US_AUTH,
  DESK_FLAG_WRONG_ROLE,
  DESK_GERMAN_PLUS,
} from "./copy";

export type CvVariant = "swe" | "frontend";
export type FitDecision = "apply" | "skip";

export interface FitWorkLink {
  slug: string;
  href: string;
  title: string;
}

export interface FitResult {
  decision: FitDecision;
  applicationTitle: string;
  cvVariant: CvVariant;
  cvUrl: string;
  work: FitWorkLink[];
  includeIeee: boolean;
  ieeeHref: string;
  ieeeTitle: string;
  redFlags: string[];
  signals: string[];
  notes: string[];
  score: number;
}

function matchesAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(text));
}

function workTitleForSlug(slug: string): string {
  const study = getCaseStudyBySlug(slug);
  if (study) {
    return study.title;
  }
  const detail = getProjectDetailBySlug(slug);
  if (detail) {
    return detail.title;
  }
  return slug;
}

function resolveWork(slugs: string[]): FitWorkLink[] {
  const allowed = new Set<string>(SELECTED_WORK_SLUGS);
  const unique: string[] = [];
  for (const slug of slugs) {
    if (!allowed.has(slug) || unique.includes(slug)) {
      continue;
    }
    unique.push(slug);
    if (unique.length === 2) {
      break;
    }
  }
  return unique.map((slug) => ({
    slug,
    href: `${SITE_ORIGIN}/work/${slug}`,
    title: workTitleForSlug(slug),
  }));
}

export function scoreJobText(raw: string): FitResult {
  const text = raw.trim();
  const redFlags: string[] = [];
  const signals: string[] = [];
  const notes: string[] = [];

  if (!text) {
    return {
      decision: "skip",
      applicationTitle: "Senior Software Engineer",
      cvVariant: "swe",
      cvUrl: SWE_CV_DOC_URL,
      work: [],
      includeIeee: false,
      ieeeHref: IEEE_URL,
      ieeeTitle: IEEE_PAPER_TITLE,
      redFlags: ["A job description is required."],
      signals: [],
      notes: [],
      score: 0,
    };
  }

  const germanPlus = matchesAny(text, GERMAN_PLUS_PATTERNS);
  if (matchesAny(text, GERMAN_SKIP_PATTERNS)) {
    redFlags.push("Fluent German is required.");
  } else if (!germanPlus && matchesAny(text, GERMAN_REQUIRED_PATTERNS)) {
    redFlags.push("German is required.");
  } else if (germanPlus) {
    notes.push(DESK_GERMAN_PLUS);
  }

  if (hasUsWorkAuthorizationVeto(text)) {
    redFlags.push(DESK_FLAG_US_AUTH);
  }

  if (hasAlreadyInEuVeto(text)) {
    redFlags.push(DESK_FLAG_ALREADY_EU);
  }

  if (matchesAny(text, ENTRY_LEVEL_PATTERNS)) {
    redFlags.push(DESK_FLAG_ENTRY);
  }

  if (matchesAny(text, SHORT_CONTRACT_PATTERNS)) {
    redFlags.push(DESK_FLAG_SHORT_CONTRACT);
  }

  if (matchesAny(text, CONTRACT_SKIP_PATTERNS)) {
    redFlags.push("Contract, freelance, intern, junior, or student role.");
  }

  if (PART_TIME_PATTERN.test(text) && !FULL_TIME_PATTERN.test(text)) {
    redFlags.push("Not full-time.");
  }

  if (matchesAny(text, EXCLUDED_LOCATION_PATTERNS)) {
    redFlags.push("Location is Portugal, Estonia, or the US.");
  }

  if (hasWrongRoleVeto(text)) {
    redFlags.push(DESK_FLAG_WRONG_ROLE);
  }

  if (hasDsaInterviewBar(text)) {
    redFlags.push(DESK_FLAG_DSA);
    notes.push(DESK_DSA_NOTE);
  }

  if (hasCsDegreeRequired(text)) {
    redFlags.push(DESK_FLAG_CS_DEGREE);
  }

  const titleHits = TARGET_TITLE_PATTERNS.filter((item) =>
    item.pattern.test(text)
  );
  for (const hit of titleHits) {
    signals.push(hit.label);
  }

  const stackHits = STACK_PATTERNS.filter((item) => item.pattern.test(text));
  for (const hit of stackHits) {
    signals.push(hit.label);
  }

  const industryHits = INDUSTRY_PATTERNS.filter((item) =>
    item.pattern.test(text)
  );
  for (const hit of industryHits) {
    signals.push(hit.label);
  }

  const includeIeee = industryHits.some((item) => item.ieee);
  const workSlugs = industryHits.flatMap((item) => item.slugs);
  if (TECH_LEAD_TITLE_PATTERN.test(text)) {
    workSlugs.unshift("dxp-neutrogena-migration");
  }

  const isFrontend =
    FRONTEND_TITLE_PATTERN.test(text) &&
    !/full[-\s]?stack/i.test(text) &&
    !TECH_LEAD_TITLE_PATTERN.test(text);
  const cvVariant: CvVariant = isFrontend ? "frontend" : "swe";
  const applicationTitle = TECH_LEAD_TITLE_PATTERN.test(text)
    ? "Tech Lead / Module Lead (Frontend)"
    : isFrontend
      ? "Senior Frontend Engineer"
      : "Senior Software Engineer";

  const hasPositive =
    titleHits.length > 0 ||
    (stackHits.length > 0 && industryHits.length > 0);

  if (redFlags.length === 0 && !hasPositive) {
    redFlags.push("No senior SWE / full-stack / frontend / Tech Lead signal.");
  }

  const decision: FitDecision =
    redFlags.length === 0 && hasPositive ? "apply" : "skip";

  const score =
    decision === "apply"
      ? computeApplyScore(text, stackHits, titleHits, industryHits)
      : 0;

  return {
    decision,
    applicationTitle,
    cvVariant,
    cvUrl: cvVariant === "frontend" ? FRONTEND_CV_URL : SWE_CV_DOC_URL,
    work: decision === "apply" ? resolveWork(workSlugs) : [],
    includeIeee: decision === "apply" && includeIeee,
    ieeeHref: IEEE_URL,
    ieeeTitle: IEEE_PAPER_TITLE,
    redFlags,
    signals,
    notes,
    score,
  };
}

function computeApplyScore(
  text: string,
  stackHits: Array<{ label: string }>,
  titleHits: Array<{ label: string }>,
  industryHits: Array<{ label: string }>
): number {
  const stackLabels = new Set(stackHits.map((item) => item.label));
  const coreCount = CORE_STACK_LABELS.filter((label) =>
    stackLabels.has(label)
  ).length;
  let total = Math.min(30, coreCount * 10);
  if (hasRelocationVisaSignal(text)) {
    total += 25;
  }
  if (BRIDGE_STACK_LABELS.some((label) => stackLabels.has(label))) {
    total += 20;
  }
  if (titleHits.length > 0 || TECH_LEAD_TITLE_PATTERN.test(text)) {
    total += 15;
  }
  if (industryHits.length > 0) {
    total += 10;
  }
  if (hasRemoteCountrySignal(text)) {
    total += 10;
  }
  if (hasMidSizeCompanySignal(text)) {
    total += 5;
  }
  if (hasDsaSoftMention(text)) {
    total -= 15;
  }
  if (hasCsDegreePreferred(text)) {
    total -= 10;
  }
  return Math.max(0, Math.min(100, total));
}
