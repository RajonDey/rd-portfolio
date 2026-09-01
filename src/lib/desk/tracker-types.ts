export const TRACKER_STATUSES = [
  "applied",
  "interview",
  "skip",
  "silence",
] as const;

export type TrackerStatus = (typeof TRACKER_STATUSES)[number];

export interface TrackerJob {
  url: string;
  title: string;
  company: string;
  status: TrackerStatus;
  updatedAt: string;
}

export interface TrackerFile {
  jobs: TrackerJob[];
}

export const DESK_TRACKER_CHANGED = "desk-tracker-changed";

export function isTrackerStatus(value: string): value is TrackerStatus {
  return (TRACKER_STATUSES as readonly string[]).includes(value);
}

export function notifyTrackerChanged() {
  window.dispatchEvent(new Event(DESK_TRACKER_CHANGED));
}
