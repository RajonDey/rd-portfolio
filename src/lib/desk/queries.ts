export const SEARCH_LOCATION_CLAUSE =
  '(Germany OR Netherlands OR Canada OR Berlin OR Amsterdam OR relocation OR visa OR "Blue Card" OR kennismigrant)';

/** About 70% SWE / full-stack / Tech Lead, 30% Senior Frontend. No quota drop in this unit. */
export const SEARCH_MIX = {
  fullStackAndLead: 70,
  frontend: 30,
} as const;

export type SearchQueryId = "primary" | "lead" | "frontend";

export interface SearchQuery {
  id: SearchQueryId;
  search: string;
}

export const SEARCH_QUERIES: SearchQuery[] = [
  {
    id: "primary",
    search: `("Senior Software Engineer" OR "Full Stack Engineer" OR "Full-Stack Engineer") AND (React OR "Next.js") AND ${SEARCH_LOCATION_CLAUSE}`,
  },
  {
    id: "lead",
    search: `("Tech Lead" OR "Lead Frontend Engineer" OR "Module Lead") AND TypeScript AND ${SEARCH_LOCATION_CLAUSE}`,
  },
  {
    id: "frontend",
    search: `"Senior Frontend Engineer" AND (React OR "Next.js") AND TypeScript AND ${SEARCH_LOCATION_CLAUSE}`,
  },
];

export const LEAD_FRONTEND_TITLE_PATTERN =
  /\blead\s+front[-\s]?end\b/i;
