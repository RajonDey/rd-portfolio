import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  isTrackerStatus,
  type TrackerJob,
  type TrackerStatus,
} from "./tracker-types";
import { normalizeJobUrl } from "./urls";

export type { TrackerJob, TrackerStatus } from "./tracker-types";
export { isTrackerStatus, TRACKER_STATUSES } from "./tracker-types";

interface TrackerFile {
  jobs: TrackerJob[];
}

const TRACKER_PATH = path.join(process.cwd(), ".desk-out", "tracker.json");

async function readTrackerFile(): Promise<TrackerFile> {
  try {
    const raw = await readFile(TRACKER_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !("jobs" in parsed)) {
      return { jobs: [] };
    }
    const jobs = (parsed as TrackerFile).jobs;
    if (!Array.isArray(jobs)) {
      return { jobs: [] };
    }
    return {
      jobs: jobs.filter(
        (job): job is TrackerJob =>
          Boolean(job) &&
          typeof job.url === "string" &&
          typeof job.title === "string" &&
          typeof job.company === "string" &&
          isTrackerStatus(job.status)
      ),
    };
  } catch {
    return { jobs: [] };
  }
}

async function writeTrackerFile(file: TrackerFile): Promise<void> {
  await mkdir(path.dirname(TRACKER_PATH), { recursive: true });
  await writeFile(TRACKER_PATH, `${JSON.stringify(file, null, 2)}\n`, "utf8");
}

export async function listTrackedJobs(): Promise<TrackerJob[]> {
  const file = await readTrackerFile();
  return [...file.jobs].sort((left, right) =>
    right.updatedAt.localeCompare(left.updatedAt)
  );
}

export async function trackedUrlSet(): Promise<Set<string>> {
  const jobs = await listTrackedJobs();
  return new Set(jobs.map((job) => normalizeJobUrl(job.url)));
}

export async function upsertTrackedJob(input: {
  url: string;
  title: string;
  company: string;
  status: TrackerStatus;
}): Promise<TrackerJob[]> {
  const url = normalizeJobUrl(input.url);
  if (!url) {
    return listTrackedJobs();
  }
  const file = await readTrackerFile();
  const next: TrackerJob = {
    url,
    title: input.title.trim() || url,
    company: input.company.trim(),
    status: input.status,
    updatedAt: new Date().toISOString(),
  };
  const jobs = file.jobs.filter((job) => normalizeJobUrl(job.url) !== url);
  jobs.push(next);
  await writeTrackerFile({ jobs });
  return listTrackedJobs();
}

export async function clearTrackedJob(url: string): Promise<TrackerJob[]> {
  const key = normalizeJobUrl(url);
  const file = await readTrackerFile();
  await writeTrackerFile({
    jobs: file.jobs.filter((job) => normalizeJobUrl(job.url) !== key),
  });
  return listTrackedJobs();
}
