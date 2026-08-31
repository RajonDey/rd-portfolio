import { scoreJobText, type FitResult } from "./fit";
import { discoveryLocationAllowed } from "./location";
import { matchesOverlayTitle } from "./rules";
import { ATS_BOARDS } from "./sources";
import {
  fetchArbeitnow,
  fetchBoard,
  type DiscoveredJob,
} from "./ats";
import { trackedUrlSet } from "./tracker";
import { normalizeJobUrl } from "./urls";

const APPLY_CAP = 20;

export interface DiscoverHit {
  job: DiscoveredJob;
  fit: FitResult;
}

export interface DiscoverResult {
  scanned: number;
  apply: DiscoverHit[];
  skipped: number;
  sourceErrors: string[];
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

export async function runDiscovery(): Promise<DiscoverResult> {
  const [arbeitnow, ...boards] = await Promise.all([
    fetchArbeitnow(),
    ...ATS_BOARDS.map((board) => fetchBoard(board)),
  ]);

  const sourceErrors = [arbeitnow, ...boards]
    .map((item) => item.error)
    .filter((item): item is string => Boolean(item));

  const merged = dedupe(
    [arbeitnow, ...boards]
      .flatMap((item) => item.jobs)
      .filter(
        (job) =>
          discoveryLocationAllowed(job.location, job.remote, job.title) &&
          matchesOverlayTitle(job.title)
      )
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

  apply.sort((left, right) => {
    const a = left.job.createdAt ?? 0;
    const b = right.job.createdAt ?? 0;
    return b - a;
  });

  const hidden = await trackedUrlSet();
  const visible = apply.filter((hit) => !hidden.has(normalizeJobUrl(hit.job.url)));

  return {
    scanned: merged.length,
    apply: visible.slice(0, APPLY_CAP),
    skipped: skipped + (apply.length - visible.length),
    sourceErrors,
  };
}
