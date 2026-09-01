"use client";

import { useEffect, useState } from "react";
import {
  DESK_APPLY_CV_LABEL,
  DESK_ATS_CV,
  DESK_DOWNLOAD_LETTER,
  DESK_FLAGS_LABEL,
  DESK_IEEE_LABEL,
  DESK_NOTES_LABEL,
  DESK_PREP_FACTS,
  DESK_PREP_FETCH_FAIL,
  DESK_PREP_INTRO,
  DESK_PREP_LABEL,
  DESK_PREP_LOGISTICS,
  DESK_SIGNALS_LABEL,
  DESK_STATUS_LABEL,
  DESK_TRACK_APPLIED,
  DESK_TRACK_CLEAR,
  DESK_TRACK_EMPTY,
  DESK_TRACK_INTERVIEW,
  DESK_TRACK_INTRO,
  DESK_TRACK_SILENCE,
  DESK_TRACK_SKIP,
  DESK_TRACK_TITLE,
  DESK_WORK_LABEL,
  applyCvDocLabel,
} from "@/lib/desk/copy";
import type { CvVariant, FitResult } from "@/lib/desk/fit";
import type { InterviewPrep } from "@/lib/desk/prep";
import {
  DESK_TRACKER_CHANGED,
  TRACKER_STATUSES,
  isTrackerStatus,
  notifyTrackerChanged,
  type TrackerJob,
  type TrackerStatus,
} from "@/lib/desk/tracker-types";

export const deskTextActionClass =
  "text-textDark hover:underline underline-offset-4 disabled:opacity-50 bg-transparent p-0 border-0 cursor-pointer font-sans";

export const STATUS_LABEL: Record<TrackerStatus, string> = {
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

export function DeskJobTitle({ title, url }: { title: string; url?: string }) {
  const href = url?.trim();
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-textDark underline underline-offset-4"
      >
        {title}
      </a>
    );
  }

  return <p className="text-xl font-bold text-textDark">{title}</p>;
}

export function ApplyCvLink({
  variant,
  href,
}: {
  variant: CvVariant;
  href: string;
}) {
  return (
    <p>
      <span className="text-sm uppercase tracking-wider text-textLight mr-2">
        {DESK_APPLY_CV_LABEL}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-textDark underline underline-offset-4"
      >
        {applyCvDocLabel(variant)}
      </a>
    </p>
  );
}

export function PackDownload({
  kind,
  label,
  description,
  url,
}: {
  kind: "cv" | "letter";
  label: string;
  description: string;
  url: string;
}) {
  return (
    <form action="/desk/pack" method="post">
      <input type="hidden" name="description" value={description} />
      <input type="hidden" name="url" value={url} />
      <input type="hidden" name="kind" value={kind} />
      <button type="submit" className={deskTextActionClass}>
        {label}
      </button>
    </form>
  );
}

export function InboxStatusActions({
  url,
  title,
  company,
  statuses = ["applied", "skip"],
  onMarked,
}: {
  url: string;
  title: string;
  company: string;
  statuses?: Array<"applied" | "skip">;
  onMarked?: (status: TrackerStatus | "clear") => void;
}) {
  const [pending, setPending] = useState<string | null>(null);

  if (!url.trim()) {
    return null;
  }

  async function mark(status: "applied" | "skip") {
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
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {statuses.map((status) => (
        <button
          key={status}
          type="button"
          disabled={pending !== null}
          onClick={() => mark(status)}
          className={deskTextActionClass}
        >
          {STATUS_LABEL[status]}
        </button>
      ))}
    </div>
  );
}

function TrackerStatusControl({
  url,
  title,
  company,
  current,
}: {
  url: string;
  title: string;
  company: string;
  current: TrackerStatus;
}) {
  const [pending, setPending] = useState(false);

  async function mark(status: TrackerStatus | "clear") {
    setPending(true);
    try {
      await postTrackStatus({ url, title, company, status });
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <label className="block">
        <span className="text-sm font-medium text-textDark">
          {DESK_STATUS_LABEL}
        </span>
        <select
          value={current}
          disabled={pending}
          onChange={(event) => {
            if (isTrackerStatus(event.target.value)) {
              void mark(event.target.value);
            }
          }}
          className="mt-2 block bg-background border border-black/10 px-3 py-2 text-textDark disabled:opacity-50"
        >
          {TRACKER_STATUSES.map((status) => (
            <option key={status} value={status}>
              {STATUS_LABEL[status]}
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        disabled={pending}
        onClick={() => mark("clear")}
        className={deskTextActionClass}
      >
        {DESK_TRACK_CLEAR}
      </button>
    </div>
  );
}

function PrepFlagList({ heading, items }: { heading: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-textLight mb-2">
        {heading}
      </h3>
      <ul className="list-disc pl-5 space-y-1 text-textLight">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PrepFit({ fit }: { fit: FitResult }) {
  return (
    <div className="space-y-4">
      <p className="text-textLight">{fit.applicationTitle}</p>
      <ApplyCvLink variant={fit.cvVariant} href={fit.cvUrl} />
      {fit.work.length > 0 ? (
        <div>
          <h3 className="text-sm uppercase tracking-wider text-textLight mb-2">
            {DESK_WORK_LABEL}
          </h3>
          <ul className="space-y-2">
            {fit.work.map((item) => (
              <li key={item.slug}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textDark underline underline-offset-4"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {fit.includeIeee ? (
        <div>
          <h3 className="text-sm uppercase tracking-wider text-textLight mb-2">
            {DESK_IEEE_LABEL}
          </h3>
          <a
            href={fit.ieeeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textDark underline underline-offset-4"
          >
            {fit.ieeeTitle}
          </a>
        </div>
      ) : null}
      <PrepFlagList heading={DESK_FLAGS_LABEL} items={fit.redFlags} />
      <PrepFlagList heading={DESK_SIGNALS_LABEL} items={fit.signals} />
      <PrepFlagList heading={DESK_NOTES_LABEL} items={fit.notes} />
    </div>
  );
}

function InterviewPrepBlock({
  url,
  title,
  company,
}: {
  url: string;
  title: string;
  company: string;
}) {
  const [prep, setPrep] = useState<InterviewPrep | null>(null);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function load() {
    if (prep || pending) {
      return;
    }
    setPending(true);
    setFailed(false);
    try {
      const body = new FormData();
      body.set("url", url);
      body.set("title", title);
      body.set("company", company);
      const response = await fetch("/desk/prep", { method: "POST", body });
      if (!response.ok) {
        setFailed(true);
        return;
      }
      setPrep((await response.json()) as InterviewPrep);
    } finally {
      setPending(false);
    }
  }

  return (
    <details
      className="pt-2"
      onToggle={(event) => {
        if (event.currentTarget.open) {
          void load();
        }
      }}
    >
      <summary className="cursor-pointer text-textDark">{DESK_PREP_LABEL}</summary>
      <div className="mt-4 space-y-4">
        <p className="text-textLight">{DESK_PREP_INTRO}</p>
        {pending && !prep ? (
          <p className="text-textLight">{DESK_PREP_LABEL}…</p>
        ) : null}
        {failed && !prep ? (
          <p className="text-textLight">{DESK_PREP_FETCH_FAIL}</p>
        ) : null}
        {prep ? (
          <>
            {prep.fetched ? null : (
              <p className="text-textLight">{DESK_PREP_FETCH_FAIL}</p>
            )}
            <PrepFit fit={prep.fit} />
            {prep.fetched && prep.jdText ? (
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <PackDownload
                  kind="cv"
                  label={DESK_ATS_CV}
                  description={prep.jdText}
                  url={url}
                />
                <PackDownload
                  kind="letter"
                  label={DESK_DOWNLOAD_LETTER}
                  description={prep.jdText}
                  url={url}
                />
              </div>
            ) : null}
            <PrepFlagList heading={DESK_PREP_LOGISTICS} items={prep.logistics} />
            <PrepFlagList heading={DESK_PREP_FACTS} items={prep.experience} />
          </>
        ) : null}
      </div>
    </details>
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
    <div className="max-w-3xl border-t border-black/10 pt-8 pb-12">
      <h2 className="text-2xl font-bold text-textDark mb-4">{DESK_TRACK_TITLE}</h2>
      <p className="text-lg text-textLight mb-6">{DESK_TRACK_INTRO}</p>
      {list.length === 0 ? (
        <p className="text-lg text-textLight">{DESK_TRACK_EMPTY}</p>
      ) : (
        <ul>
          {list.map((job) => (
            <li
              key={job.url}
              className="space-y-3 py-6 border-b border-black/10 last:border-b-0"
            >
              <DeskJobTitle title={job.title} url={job.url} />
              <p className="text-textLight">
                {job.company ? `${job.company} · ` : ""}
                {STATUS_LABEL[job.status]}
              </p>
              <TrackerStatusControl
                url={job.url}
                title={job.title}
                company={job.company}
                current={job.status}
              />
              {job.status === "interview" ? (
                <InterviewPrepBlock
                  url={job.url}
                  title={job.title}
                  company={job.company}
                />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
