import { IEEE_PAPER_TITLE, IEEE_URL } from "./site";
import {
  getAllPortfolioEntries,
  getCaseStudyBySlug,
  getProjectDetailBySlug,
  PortfolioEntryViewModel,
} from "./portfolio";

export const SELECTED_WORK_SLUGS = [
  "calystapro-emr",
  "dxp-neutrogena-migration",
  "racksub-b2b-platform",
  "patient-experience-propel-health",
  "online-ielts-test-platform",
  "year-in-review",
] as const;

export type SelectedWorkSlug = (typeof SELECTED_WORK_SLUGS)[number];

type HomeEvidenceWork = {
  kind: "work";
  slug: string;
  title?: string;
  description?: string;
};

type HomeEvidenceWriting = {
  kind: "writing";
  href: string;
  title: string;
};

export const HOME_EVIDENCE: Array<HomeEvidenceWork | HomeEvidenceWriting> = [
  {
    kind: "work",
    slug: "online-ielts-test-platform",
    title: "IELTS Ready - Online IELTS Test Platform",
  },
  {
    kind: "work",
    slug: "year-in-review",
    title: "YearInReview",
    description: "A year planning platform.",
  },
  {
    kind: "writing",
    href: IEEE_URL,
    title: IEEE_PAPER_TITLE,
  },
];

function resolveSelectedEntry(
  slug: string,
  all: PortfolioEntryViewModel[]
): PortfolioEntryViewModel | undefined {
  const study = getCaseStudyBySlug(slug);
  if (study) {
    return all.find((entry) => entry.href === `/work/${study.id}`);
  }

  const detail = getProjectDetailBySlug(slug);
  if (detail) {
    return (
      all.find((entry) => entry.href === `/work/${detail.slug}`) ||
      all.find((entry) => entry.title === detail.title)
    );
  }

  return all.find((entry) => entry.id === slug);
}

export function getSelectedWorkEntries(): PortfolioEntryViewModel[] {
  const all = getAllPortfolioEntries();
  return SELECTED_WORK_SLUGS.map((slug) => {
    const entry = resolveSelectedEntry(slug, all);
    if (!entry) {
      throw new Error(
        `Selected work slug is missing from portfolio data: ${slug}`
      );
    }
    return entry;
  });
}

export interface HomeEvidenceItem {
  title: string;
  description: string;
  href: string;
  external: boolean;
}

export function getHomeEvidenceItems(): HomeEvidenceItem[] {
  return HOME_EVIDENCE.map((item) => {
    if (item.kind === "writing") {
      return {
        title: item.title,
        description: "IEEE ICCIT 2025",
        href: item.href,
        external: true,
      };
    }

    const study = getCaseStudyBySlug(item.slug);
    if (study) {
      return {
        title: item.title ?? study.title,
        description: item.description ?? study.description,
        href: `/work/${study.id}`,
        external: false,
      };
    }

    const detail = getProjectDetailBySlug(item.slug);
    if (detail) {
      return {
        title: item.title ?? detail.title,
        description: item.description ?? detail.overview ?? "",
        href: `/work/${detail.slug}`,
        external: false,
      };
    }

    throw new Error(`Home evidence slug is missing from portfolio data: ${item.slug}`);
  });
}
