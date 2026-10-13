import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  isGistTrackerEnabled,
  readGistTrackerFile,
  writeGistTrackerFile,
} from "./gist-tracker";
import { pruneInboxCacheUrl } from "./inbox-cache";
import { isManualBoardId } from "./manual-boards";
import {
  isManualPeriod,
  isRejectionStage,
  isTrackerStatus,
  MANUAL_COUNT_MAX,
  type ManualApply,
  type ManualPeriod,
  type RejectionStage,
  type TrackerFile,
  type TrackerJob,
  type TrackerStatus,
} from "./tracker-types";
import { normalizeJobUrl } from "./urls";
import { deleteDeskOutPackPdfs } from "./pack-files";

export type {
  ManualApply,
  ManualPeriod,
  RejectionStage,
  TrackerJob,
  TrackerStatus,
} from "./tracker-types";
export {
  isManualPeriod,
  isRejectionStage,
  isTrackerStatus,
  TRACKER_STATUSES,
} from "./tracker-types";

const TRACKER_PATH = path.join(process.cwd(), ".desk-out", "tracker.json");

function sanitizeJob(job: TrackerJob): TrackerJob {
  const base: TrackerJob = {
    url: job.url,
    title: job.title,
    company: job.company,
    status: job.status,
    updatedAt: typeof job.updatedAt === "string" ? job.updatedAt : "",
  };
  if (job.status !== "rejected") {
    return base;
  }
  return {
    ...base,
    stage:
      job.stage && isRejectionStage(job.stage) ? job.stage : "screen",
  };
}

function parseManual(value: unknown): ManualApply[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(
    (entry): entry is ManualApply =>
      Boolean(entry) &&
      typeof entry.id === "string" &&
      typeof entry.boardId === "string" &&
      isManualBoardId(entry.boardId) &&
      typeof entry.count === "number" &&
      Number.isInteger(entry.count) &&
      entry.count >= 1 &&
      entry.count <= MANUAL_COUNT_MAX &&
      isManualPeriod(entry.period) &&
      typeof entry.recordedAt === "string"
  );
}

function parseTracker(file: TrackerFile): TrackerFile {
  const jobs = Array.isArray(file.jobs)
    ? file.jobs
        .filter(
          (job): job is TrackerJob =>
            Boolean(job) &&
            typeof job.url === "string" &&
            typeof job.title === "string" &&
            typeof job.company === "string" &&
            isTrackerStatus(job.status)
        )
        .map(sanitizeJob)
    : [];
  return { jobs, manual: parseManual(file.manual) };
}

async function readTrackerFile(): Promise<TrackerFile> {
  if (isGistTrackerEnabled()) {
    const remote = await readGistTrackerFile();
    return parseTracker(remote ?? { jobs: [] });
  }

  try {
    const raw = await readFile(TRACKER_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !("jobs" in parsed)) {
      return { jobs: [] };
    }
    return parseTracker(parsed as TrackerFile);
  } catch {
    return { jobs: [] };
  }
}

async function writeTrackerFile(file: TrackerFile): Promise<void> {
  const next = parseTracker(file);
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

export async function readTracker(): Promise<{
  jobs: TrackerJob[];
  manual: ManualApply[];
}> {
  const file = await readTrackerFile();
  return {
    jobs: [...file.jobs].sort((left, right) =>
      right.updatedAt.localeCompare(left.updatedAt)
    ),
    manual: [...(file.manual ?? [])].sort((left, right) =>
      right.recordedAt.localeCompare(left.recordedAt)
    ),
  };
}

export async function listTrackedJobs(): Promise<TrackerJob[]> {
  const file = await readTracker();
  return file.jobs;
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
  stage?: RejectionStage;
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
    ...(input.status === "rejected"
      ? { stage: input.stage && isRejectionStage(input.stage) ? input.stage : "screen" }
      : {}),
  };
  const jobs = file.jobs.filter((job) => normalizeJobUrl(job.url) !== url);
  jobs.push(next);
  await writeTrackerFile({ jobs, manual: file.manual });
  if (input.status === "applied") {
    try {
      await deleteDeskOutPackPdfs();
    } catch {
      // Leftover PDFs must not block the tracker.
    }
  }
  try {
    await pruneInboxCacheUrl(url);
  } catch {
    // Inbox prune must not block the tracker.
  }
  return listTrackedJobs();
}

export async function clearTrackedJob(url: string): Promise<TrackerJob[]> {
  const key = normalizeJobUrl(url);
  const file = await readTrackerFile();
  await writeTrackerFile({
    jobs: file.jobs.filter((job) => normalizeJobUrl(job.url) !== key),
    manual: file.manual,
  });
  return listTrackedJobs();
}

export async function addManualApply(input: {
  boardId: string;
  count: number;
  period: ManualPeriod;
}): Promise<ManualApply[]> {
  if (!isManualBoardId(input.boardId) || !isManualPeriod(input.period)) {
    return (await readTracker()).manual;
  }
  if (
    !Number.isInteger(input.count) ||
    input.count < 1 ||
    input.count > MANUAL_COUNT_MAX
  ) {
    throw new Error("Manual count out of range.");
  }
  const file = await readTrackerFile();
  const entry: ManualApply = {
    id: crypto.randomUUID(),
    boardId: input.boardId,
    count: input.count,
    period: input.period,
    recordedAt: new Date().toISOString(),
  };
  await writeTrackerFile({
    jobs: file.jobs,
    manual: [...(file.manual ?? []), entry],
  });
  return (await readTracker()).manual;
}

export async function clearManualApply(id: string): Promise<ManualApply[]> {
  const file = await readTrackerFile();
  await writeTrackerFile({
    jobs: file.jobs,
    manual: (file.manual ?? []).filter((entry) => entry.id !== id),
  });
  return (await readTracker()).manual;
}
