"use client";

import { useEffect, useState } from "react";
import {
  DESK_OPEN_POSTING,
  DESK_TRACK_APPLIED,
  DESK_TRACK_CLEAR,
  DESK_TRACK_EMPTY,
  DESK_TRACK_INTERVIEW,
  DESK_TRACK_INTRO,
  DESK_TRACK_SILENCE,
  DESK_TRACK_SKIP,
  DESK_TRACK_TITLE,
} from "@/lib/desk/copy";
import {
  DESK_TRACKER_CHANGED,
  TRACKER_STATUSES,
  notifyTrackerChanged,
  type TrackerJob,
  type TrackerStatus,
} from "@/lib/desk/tracker-types";

const outlineButtonClass =
  "inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors disabled:opacity-50";

const STATUS_LABEL: Record<TrackerStatus, string> = {
  applied: DESK_TRACK_APPLIED,
  interview: DESK_TRACK_INTERVIEW,
  skip: DESK_TRACK_SKIP,
  silence: DESK_TRACK_SILENCE,
};

export async function postTrackStatus(input: {
  url: string;
  title: string;
  company: string;
  status: TrackerStatus | "clear";
}): Promise<boolean> {
  const body = new FormData();
  body.set("url", input.url);
  body.set("title", input.title);
  body.set("company", input.company);
  body.set("status", input.status);
  const response = await fetch("/desk/track", { method: "POST", body });
  if (!response.ok) {
    return false;
  }
  notifyTrackerChanged();
  return true;
}

export function TrackStatusButtons({
  url,
  title,
  company,
  current,
  onMarked,
}: {
  url: string;
  title: string;
  company: string;
  current?: TrackerStatus;
  onMarked?: (status: TrackerStatus | "clear") => void;
}) {
  const [pending, setPending] = useState<string | null>(null);

  if (!url.trim()) {
    return null;
  }

  async function mark(status: TrackerStatus | "clear") {
    setPending(status);
    try {
      const ok = await postTrackStatus({ url, title, company, status });
      if (ok) {
        onMarked?.(status);
      }
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {TRACKER_STATUSES.map((status) => (
        <button
          key={status}
          type="button"
          disabled={pending !== null}
          onClick={() => mark(status)}
          aria-pressed={current === status}
          className={outlineButtonClass}
        >
          {STATUS_LABEL[status]}
        </button>
      ))}
      <button
        type="button"
        disabled={pending !== null}
        onClick={() => mark("clear")}
        className={outlineButtonClass}
      >
        {DESK_TRACK_CLEAR}
      </button>
    </div>
  );
}

export default function DeskTracker() {
  const [jobs, setJobs] = useState<TrackerJob[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const response = await fetch("/desk/track", { cache: "no-store" });
      if (!response.ok) {
        if (!cancelled) {
          setJobs([]);
        }
        return;
      }
      const data = (await response.json()) as { jobs: TrackerJob[] };
      if (!cancelled) {
        setJobs(data.jobs);
      }
    }

    void load();
    window.addEventListener(DESK_TRACKER_CHANGED, load);
    return () => {
      cancelled = true;
      window.removeEventListener(DESK_TRACKER_CHANGED, load);
    };
  }, []);

  const list = jobs ?? [];

  return (
    <div className="max-w-3xl mb-16">
      <h2 className="text-2xl font-bold text-textDark mb-4">{DESK_TRACK_TITLE}</h2>
      <p className="text-lg text-textLight mb-6">{DESK_TRACK_INTRO}</p>
      {list.length === 0 ? (
        <p className="text-lg text-textLight">{DESK_TRACK_EMPTY}</p>
      ) : (
        <ul className="space-y-8">
          {list.map((job) => (
            <li key={job.url} className="space-y-3">
              <p className="text-xl font-bold text-textDark">{job.title}</p>
              <p className="text-textLight">
                {job.company ? `${job.company} · ` : ""}
                {STATUS_LABEL[job.status]}
              </p>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:underline underline-offset-4"
              >
                {DESK_OPEN_POSTING}
              </a>
              <TrackStatusButtons
                url={job.url}
                title={job.title}
                company={job.company}
                current={job.status}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
