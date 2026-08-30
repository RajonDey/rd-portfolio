import { getCareerStartYear, getYearsOfExperienceLabel } from "./experience";

export const SITE_NAME = "Rajon Dey";
export const SITE_ROLE = "Senior Software Engineer";
export const SITE_TITLE = `${SITE_NAME} · ${SITE_ROLE}`;
export const SITE_KICKER = "FULL-STACK · LLM SECURITY";
export const SITE_ORIGIN = "https://portfolio.rajondey.com";
export const CV_URL = "https://www.rajondey.com/cv.pdf";
export const FRONTEND_CV_URL =
  "https://docs.google.com/document/d/1FTe6VOEeQ-6YLV0rboZaTrOGnCkynpp_3k8BKYNKu7M";
export const GITHUB_URL = "https://github.com/RajonDey";
export const LINKEDIN_URL = "https://linkedin.com/in/rajondey";
export const CONTACT_EMAIL = "contact@rajondey.com";
export const IEEE_URL = "https://ieeexplore.ieee.org/document/11491067";
export const IEEE_PAPER_TITLE =
  "Code Poisoning Through Misleading Comments: Jailbreaking Large Language Models via Contextual Deception";
export const SITE_DESCRIPTION_STATIC =
  "Senior Software Engineer. Full-stack work with React, Next.js, TypeScript, Node.js, and Python.";

export function getSiteDescription(): string {
  return `${SITE_DESCRIPTION_STATIC} ${getYearsOfExperienceLabel()} at SJ Innovation. Secondary: published IEEE research on LLM security.`;
}

export function getCanonicalUrl(pathname: string): string {
  if (pathname === "/") {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${pathname}`;
}

export function getPageShareMetadata(
  pathname: string,
  title: string,
  description: string
) {
  const url = getCanonicalUrl(pathname);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: SITE_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

/**
 * Returns copyright year range (e.g. "2019–2025") using career start year.
 * Use in footer so it updates automatically each year.
 */
export function getCopyrightYearRange(): string {
  const start = getCareerStartYear();
  const end = new Date().getFullYear();
  return start === end ? String(start) : `${start}–${end}`;
}

/**
 * Returns formatted build/deploy date for display, or null if not set.
 * Set NEXT_PUBLIC_BUILD_TIME at build time (e.g. in CI: BUILD_TIME=$(date -u +%Y-%m-%d) next build).
 * Only shows "Site updated: …" in footer when this is defined.
 */
export function getBuildDate(): string | null {
  if (typeof process === "undefined" || !process.env.NEXT_PUBLIC_BUILD_TIME) {
    return null;
  }
  const raw = process.env.NEXT_PUBLIC_BUILD_TIME;
  try {
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return raw;
  }
}
