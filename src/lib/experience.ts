/**
 * Corporate career start (Frontend Developer, May 2019).
 * Years of experience, the copyright range, and "Building since" use this date.
 * The current title is Module Lead from Jun 2023. Do not use that date here.
 */
const CORPORATE_CAREER_START = new Date(2019, 4, 1); // May 1, 2019 (month is 0-indexed)

const CORPORATE_CAREER_START_LABEL = "May 2019";

/** End date for the current role. Set to a string (e.g. "Jan 2026") when you leave; null = "Present". */
export const CURRENT_ROLE_END_DATE: string | null = null;

/** Module Lead start. Not the corporate career start. */
const CURRENT_ROLE_START_LABEL = "Jun 2023";

/**
 * Returns full years of corporate experience from May 2019 to now.
 * Used for "X+ years" display across the site. As of October 2026 this is 7+.
 * Do not write "6+".
 */
export function getYearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - CORPORATE_CAREER_START.getFullYear();
  const months = now.getMonth() - CORPORATE_CAREER_START.getMonth();
  const fullYears = months < 0 ? years - 1 : years;
  return Math.max(0, fullYears);
}

/**
 * Returns "X+ years" string for display (e.g. "7+ years").
 */
export function getYearsOfExperienceLabel(): string {
  return `${getYearsOfExperience()}+ years`;
}

/** Career start year (e.g. 2019) for the copyright range. */
export function getCareerStartYear(): number {
  return CORPORATE_CAREER_START.getFullYear();
}

/** Human-readable corporate start (e.g. "May 2019") for "Building since May 2019". */
export function getCareerStartLabel(): string {
  return CORPORATE_CAREER_START_LABEL;
}

/** Date range for the current role: "Jun 2023 – Present", or a set end date. */
export function getCurrentRoleDateRange(): string {
  const end = CURRENT_ROLE_END_DATE ?? "Present";
  return `${CURRENT_ROLE_START_LABEL} – ${end}`;
}
