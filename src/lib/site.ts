import { getCareerStartYear } from "./experience";

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
