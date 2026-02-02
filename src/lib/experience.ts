/**
 * Corporate career start date (May 2019).
 * Used to compute years of experience for dynamic display.
 */
const CORPORATE_CAREER_START = new Date(2019, 4, 1); // May 1, 2019 (month is 0-indexed)

/** End date for current role. Set to a string (e.g. "Jan 2026") when you leave; null = "Present". */
export const CURRENT_ROLE_END_DATE: string | null = null;

const CURRENT_ROLE_START_LABEL = "May 2019";

/**
 * Returns full years of corporate experience from May 2019 to now.
 * Used for "X+ years" display across the site.
 */
export function getYearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - CORPORATE_CAREER_START.getFullYear();
  const months = now.getMonth() - CORPORATE_CAREER_START.getMonth();
  const fullYears = months < 0 ? years - 1 : years;
  return Math.max(0, fullYears);
}

/**
 * Returns "X+ years" string for display (e.g. "6+ years").
 */
export function getYearsOfExperienceLabel(): string {
  return `${getYearsOfExperience()}+ years`;
}

/** Career start year (e.g. 2019) for copyright range and "Since …" text. */
export function getCareerStartYear(): number {
  return CORPORATE_CAREER_START.getFullYear();
}

/** Human-readable career start (e.g. "May 2019") for "Since May 2019" text. */
export function getCareerStartLabel(): string {
  return CURRENT_ROLE_START_LABEL;
}

/** Date range for current role: "May 2019 - Present" or "May 2019 - Jan 2026" when CURRENT_ROLE_END_DATE is set. */
export function getCurrentRoleDateRange(): string {
  return CURRENT_ROLE_END_DATE
    ? `${CURRENT_ROLE_START_LABEL} - ${CURRENT_ROLE_END_DATE}`
    : `${CURRENT_ROLE_START_LABEL} - Present`;
}
