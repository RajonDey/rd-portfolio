export const TRACKER_STATUSES = [
  "applied",
  "interview",
  "rejected",
  "skip",
  "silence",
] as const;

export type TrackerStatus = (typeof TRACKER_STATUSES)[number];

export const REJECTION_STAGES = ["screen", "assessment", "interview"] as const;

export type RejectionStage = (typeof REJECTION_STAGES)[number];

export const MANUAL_PERIODS = ["day", "week"] as const;

export type ManualPeriod = (typeof MANUAL_PERIODS)[number];

export const MANUAL_COUNT_MAX = 20;

export interface TrackerJob {
  url: string;
  title: string;
  company: string;
  status: TrackerStatus;
  updatedAt: string;
  stage?: RejectionStage;
}

export interface ManualApply {
  id: string;
  boardId: string;
  count: number;
  period: ManualPeriod;
  recordedAt: string;
}

export interface TrackerFile {
  jobs: TrackerJob[];
  manual?: ManualApply[];
}

export const DESK_TRACKER_CHANGED = "desk-tracker-changed";

export function isTrackerStatus(value: string): value is TrackerStatus {
  return (TRACKER_STATUSES as readonly string[]).includes(value);
}

export function isRejectionStage(value: string): value is RejectionStage {
  return (REJECTION_STAGES as readonly string[]).includes(value);
}

export function isManualPeriod(value: string): value is ManualPeriod {
  return (MANUAL_PERIODS as readonly string[]).includes(value);
}

export function appliedTotal(
  jobs: TrackerJob[],
  manual: ManualApply[]
): number {
  const fromJobs = jobs.filter((job) => job.status === "applied").length;
  const fromManual = manual.reduce((sum, entry) => sum + entry.count, 0);
  return fromJobs + fromManual;
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;

export function appliedPeriodCounts(
  jobs: TrackerJob[],
  manual: ManualApply[],
  now = Date.now()
): { week: number; month: number } {
  const weekStart = now - WEEK_MS;
  const monthStart = now - MONTH_MS;
  let week = 0;
  let month = 0;

  for (const job of jobs) {
    if (job.status !== "applied") {
      continue;
    }
    const at = Date.parse(job.updatedAt);
    if (Number.isNaN(at)) {
      continue;
    }
    if (at >= weekStart) {
      week += 1;
    }
    if (at >= monthStart) {
      month += 1;
    }
  }

  for (const entry of manual) {
    const at = Date.parse(entry.recordedAt);
    if (Number.isNaN(at)) {
      continue;
    }
    if (at >= weekStart) {
      week += entry.count;
    }
    if (at >= monthStart) {
      month += entry.count;
    }
  }

  return { week, month };
}

export function notifyTrackerChanged() {
  window.dispatchEvent(new Event(DESK_TRACKER_CHANGED));
}
