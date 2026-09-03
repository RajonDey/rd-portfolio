import {
  capJobDescription,
  fetchAllowedText,
  type DiscoveredJob,
} from "./ats";
import { overlayGeoOrVisaAllowed } from "./location";
import { matchesOverlayTitle } from "./rules";

const SKIP_JOB_TYPES = /^(contract|freelance|internship)$/i;
const REMOTIVE_URL =
  "https://remotive.com/api/remote-jobs?category=software-dev&limit=100";

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function parseRemotive(jsonText: string): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const rows = root && Array.isArray(root.jobs) ? root.jobs : [];
  const jobs: DiscoveredJob[] = [];
  for (const row of rows) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const jobType = asString(item.job_type).trim();
    if (jobType && SKIP_JOB_TYPES.test(jobType)) {
      continue;
    }
    const title = asString(item.title).trim();
    const url = asString(item.url).trim();
    if (!title || !url) {
      continue;
    }
    let host = "";
    try {
      host = new URL(url).hostname.toLowerCase();
    } catch {
      continue;
    }
    if (host !== "remotive.com" && host !== "www.remotive.com") {
      continue;
    }
    if (!matchesOverlayTitle(title)) {
      continue;
    }
    const location = asString(item.candidate_required_location).trim();
    const description = capJobDescription(asString(item.description));
    if (!overlayGeoOrVisaAllowed(location, description, title)) {
      continue;
    }
    jobs.push({
      id: `remotive:${String(item.id ?? url)}`,
      source: "remotive",
      title,
      company: asString(item.company_name).trim() || "Unknown",
      location,
      url,
      description,
      remote: true,
      createdAt: Date.parse(asString(item.publication_date)) || null,
    });
  }
  return jobs;
}

export async function fetchRemotive(): Promise<{
  jobs: DiscoveredJob[];
  error: string | null;
}> {
  const text = await fetchAllowedText(REMOTIVE_URL);
  if (!text) {
    return { jobs: [], error: "Remotive" };
  }
  try {
    return { jobs: parseRemotive(text), error: null };
  } catch {
    return { jobs: [], error: "Remotive" };
  }
}
