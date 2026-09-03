import {
  capJobDescription,
  fetchAllowedText,
  type DiscoveredJob,
} from "./ats";
import { overlayGeoOrVisaAllowed } from "./location";
import {
  FRONTEND_TITLE_PATTERN,
  TARGET_TITLE_PATTERNS,
  matchesOverlayTitle,
} from "./rules";

const HN_STORY_SEARCH =
  "https://hn.algolia.com/api/v1/search?query=" +
  encodeURIComponent("Ask HN: Who is Hiring?") +
  "&tags=story&hitsPerPage=20";
const WHO_IS_HIRING = /^ask hn:\s*who is hiring\?/i;

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && /^\d+$/.test(value)) {
    return Number(value);
  }
  return null;
}

function overlayTitleFromBlob(blob: string, guessed: string): string | null {
  if (matchesOverlayTitle(guessed)) {
    return guessed;
  }
  for (const item of TARGET_TITLE_PATTERNS) {
    if (item.pattern.test(blob)) {
      return item.label;
    }
  }
  if (FRONTEND_TITLE_PATTERN.test(blob)) {
    return "Senior Frontend Engineer";
  }
  return null;
}

export function pickLatestWhoIsHiringId(jsonText: string): string | null {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const hits = root && Array.isArray(root.hits) ? root.hits : [];
  for (const row of hits) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const title = asString(item.title).trim();
    if (!WHO_IS_HIRING.test(title)) {
      continue;
    }
    const id = asString(item.objectID).trim();
    if (id) {
      return id;
    }
  }
  return null;
}

function firstVisibleLine(html: string): string {
  const withBreaks = html
    .replace(/<p[^>]*>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  const match = withBreaks.match(/[^\n]+/);
  return (match ? match[0] : withBreaks).replace(/\s+/g, " ").trim();
}

function guessFromFirstLine(blob: string): {
  title: string;
  company: string;
  location: string;
} {
  const line = firstVisibleLine(blob);
  const parts = line
    .split(/\s*[|·•—]\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const head = parts[0] ?? line;
  const locationMatch = head.match(/\(([^)]+)\)/);
  const location = locationMatch ? locationMatch[1].trim() : "";
  const company =
    head.replace(/\s*\([^)]*\)\s*/g, " ").trim().slice(0, 80) || "Unknown";
  const titled = parts.find((part) => matchesOverlayTitle(part));
  return {
    title: titled || line.slice(0, 160),
    company,
    location,
  };
}

export function parseHnHiringComments(
  jsonText: string,
  storyId: string
): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const hits = root && Array.isArray(root.hits) ? root.hits : [];
  const storyNum = Number(storyId);
  const jobs: DiscoveredJob[] = [];
  for (const row of hits) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const parentId = asNumber(item.parent_id);
    if (parentId !== storyNum) {
      continue;
    }
    const commentId = asString(item.objectID).trim();
    const raw = asString(item.comment_text);
    if (!commentId || !raw || /^\[(deleted|dead|flagged)\]$/i.test(raw.trim())) {
      continue;
    }
    const description = capJobDescription(raw);
    const guessed = guessFromFirstLine(raw);
    const title = overlayTitleFromBlob(description, guessed.title);
    if (!title) {
      continue;
    }
    const location = guessed.location;
    if (!overlayGeoOrVisaAllowed(location, description, title)) {
      continue;
    }
    const created = asNumber(item.created_at_i);
    jobs.push({
      id: `hn:${commentId}`,
      source: "hn",
      title,
      company: guessed.company || asString(item.author).trim() || "Unknown",
      location,
      url: `https://news.ycombinator.com/item?id=${commentId}`,
      description,
      remote: /remote/i.test(`${location} ${description}`),
      createdAt: created !== null ? created * 1000 : null,
    });
  }
  return jobs;
}

function commentsUrl(storyId: string): string {
  return (
    "https://hn.algolia.com/api/v1/search_by_date?tags=" +
    encodeURIComponent(`comment,story_${storyId}`) +
    "&hitsPerPage=200"
  );
}

export async function fetchHnHiring(): Promise<{
  jobs: DiscoveredJob[];
  error: string | null;
}> {
  const storyText = await fetchAllowedText(HN_STORY_SEARCH);
  if (!storyText) {
    return { jobs: [], error: "HN Who is Hiring" };
  }
  let storyId: string | null;
  try {
    storyId = pickLatestWhoIsHiringId(storyText);
  } catch {
    return { jobs: [], error: "HN Who is Hiring" };
  }
  if (!storyId) {
    return { jobs: [], error: "HN Who is Hiring" };
  }
  const commentsText = await fetchAllowedText(commentsUrl(storyId));
  if (!commentsText) {
    return { jobs: [], error: "HN Who is Hiring" };
  }
  try {
    return { jobs: parseHnHiringComments(commentsText, storyId), error: null };
  } catch {
    return { jobs: [], error: "HN Who is Hiring" };
  }
}
