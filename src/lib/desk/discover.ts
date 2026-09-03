import { scoreJobText, type FitResult } from "./fit";
import {
  discoveryLocationAllowed,
  isNetherlandsJob,
  isOverflowGeoJob,
} from "./location";
import {
  companyMatchesSponsor,
  fetchRecognisedSponsors,
} from "./nl-sponsors";
import { matchesOverlayTitle } from "./rules";
import { ATS_BOARDS } from "./sources";
import {
  fetchArbeitnow,
  fetchBoard,
  type DiscoveredJob,
} from "./ats";
import { fetchHnHiring } from "./hn-hiring";
import { fetchRemotive } from "./remotive";
import { trackedUrlSet } from "./tracker";
import { normalizeJobUrl } from "./urls";

const APPLY_CAP = 20;
export const OVERFLOW_CAP = 2;

export interface DiscoverHit {
  job: DiscoveredJob;
  fit: FitResult;
}

export interface DiscoverResult {
  scanned: number;
  apply: DiscoverHit[];
  overflow: DiscoverHit[];
  skipped: number;
  sourceErrors: string[];
}

function compareHits(left: DiscoverHit, right: DiscoverHit): number {
  const scoreDiff = right.fit.score - left.fit.score;
  if (scoreDiff !== 0) {
    return scoreDiff;
  }
  const a = left.job.createdAt ?? 0;
  const b = right.job.createdAt ?? 0;
  return b - a;
}

function dedupe(jobs: DiscoveredJob[]): DiscoveredJob[] {
  const byUrl = new Set<string>();
  const byTitle = new Set<string>();
  const unique: DiscoveredJob[] = [];
  for (const job of jobs) {
    const urlKey = normalizeJobUrl(job.url);
    const titleKey = `${job.company.trim().toLowerCase()}|${job.title.trim().toLowerCase()}`;
    if (byUrl.has(urlKey) || byTitle.has(titleKey)) {
      continue;
    }
    byUrl.add(urlKey);
    byTitle.add(titleKey);
    unique.push(job);
  }
  return unique;
}

export function jobScoreText(job: DiscoveredJob): string {
  return [job.title, job.company, job.location, job.description]
    .filter(Boolean)
    .join("\n\n");
}

function keepDiscoveredJob(
  job: DiscoveredJob,
  sponsors: Set<string> | null
): boolean {
  if (
    !discoveryLocationAllowed(job.location, job.remote, job.title) ||
    !matchesOverlayTitle(job.title)
  ) {
    return false;
  }
  if (
    job.source === "arbeitnow" &&
    isNetherlandsJob(job.location, job.title) &&
    sponsors
  ) {
    return companyMatchesSponsor(job.company, sponsors);
  }
  return true;
}

export async function runDiscovery(): Promise<DiscoverResult> {
  const [arbeitnow, sponsors, remotive, hn, ...boards] = await Promise.all([
    fetchArbeitnow(),
    fetchRecognisedSponsors(),
    fetchRemotive(),
    fetchHnHiring(),
    ...ATS_BOARDS.map((board) => fetchBoard(board)),
  ]);

  const sourceErrors = [arbeitnow, sponsors, remotive, hn, ...boards]
    .map((item) => item.error)
    .filter((item): item is string => Boolean(item));

  const merged = dedupe(
    [arbeitnow, remotive, hn, ...boards]
      .flatMap((item) => item.jobs)
      .filter((job) => keepDiscoveredJob(job, sponsors.names))
  );

  const apply: DiscoverHit[] = [];
  let skipped = 0;
  for (const job of merged) {
    const fit = scoreJobText(jobScoreText(job));
    if (fit.decision === "apply") {
      apply.push({ job, fit });
    } else {
      skipped += 1;
    }
  }

  apply.sort(compareHits);

  const hidden = await trackedUrlSet();
  const visible = apply.filter((hit) => !hidden.has(normalizeJobUrl(hit.job.url)));
  const primary = visible.filter(
    (hit) => !isOverflowGeoJob(hit.job.location, hit.job.title)
  );
  const overflow = visible.filter((hit) =>
    isOverflowGeoJob(hit.job.location, hit.job.title)
  );
  primary.sort(compareHits);
  overflow.sort(compareHits);

  return {
    scanned: merged.length,
    apply: primary.slice(0, APPLY_CAP),
    overflow: overflow.slice(0, OVERFLOW_CAP),
    skipped: skipped + (apply.length - visible.length),
    sourceErrors,
  };
}
