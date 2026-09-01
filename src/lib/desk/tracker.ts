import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  isGistTrackerEnabled,
  readGistTrackerFile,
  writeGistTrackerFile,
} from "./gist-tracker";
import {
  isTrackerStatus,
  type TrackerFile,
  type TrackerJob,
  type TrackerStatus,
} from "./tracker-types";
import { normalizeJobUrl } from "./urls";
import { deleteDeskOutPackPdfs } from "./pack-files";

export type { TrackerJob, TrackerStatus } from "./tracker-types";
export { isTrackerStatus, TRACKER_STATUSES } from "./tracker-types";

const TRACKER_PATH = path.join(process.cwd(), ".desk-out", "tracker.json");

function parseJobs(file: TrackerFile): TrackerFile {
  if (!Array.isArray(file.jobs)) {
    return { jobs: [] };
  }
  return {
    jobs: file.jobs.filter(
      (job): job is TrackerJob =>
        Boolean(job) &&
        typeof job.url === "string" &&
        typeof job.title === "string" &&
        typeof job.company === "string" &&
        isTrackerStatus(job.status)
    ),
  };
}

async function readTrackerFile(): Promise<TrackerFile> {
  if (isGistTrackerEnabled()) {
    const remote = await readGistTrackerFile();
    return parseJobs(remote ?? { jobs: [] });
  }

  try {
    const raw = await readFile(TRACKER_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !("jobs" in parsed)) {
      return { jobs: [] };
    }
    return parseJobs(parsed as TrackerFile);
  } catch {
    return { jobs: [] };
  }
}

async function writeTrackerFile(file: TrackerFile): Promise<void> {
  const next = parseJobs(file);
  if (isGistTrackerEnabled()) {
    const ok = await writeGistTrackerFile(next);
    if (!ok) {
      throw new Error("Tracker write failed.");
    }
    return;
  }
  await mkdir(path.dirname(TRACKER_PATH), { recursive: true });
  await writeFile(TRACKER_PATH, `${JSON.stringify(next, null, 2)}\n`, "utf8");
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
  if (input.status === "applied") {
    try {
      await deleteDeskOutPackPdfs();
    } catch {
      // Leftover PDFs must not block the tracker.
    }
  }
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
