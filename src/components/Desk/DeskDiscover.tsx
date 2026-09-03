"use client";

import { useState } from "react";
import {
  ApplyCvLink,
  DeskJobTitle,
  InboxStatusActions,
  PackDownload,
} from "@/components/Desk/DeskTracker";
import {
  DESK_ATS_CV,
  DESK_DOWNLOAD_LETTER,
  DESK_FIND_EMPTY,
  DESK_FIND_ERRORS,
  DESK_FIND_INTRO,
  DESK_FIND_LABEL,
  DESK_FIND_SKIPPED,
  DESK_INBOX_TITLE,
  DESK_OVERFLOW_INTRO,
  DESK_OVERFLOW_TITLE,
  DESK_SCORE_LABEL,
  deskSourceLabel,
} from "@/lib/desk/copy";
import type { DiscoverHit, DiscoverResult } from "@/lib/desk/discover";
import { normalizeJobUrl } from "@/lib/desk/urls";

export default function DeskDiscover() {
  const [result, setResult] = useState<DiscoverResult | null>(null);
  const [pending, setPending] = useState(false);

  async function onFind() {
    setPending(true);
    try {
      const response = await fetch("/desk/discover", { method: "POST" });
      if (!response.ok) {
        setResult(null);
        return;
      }
      const data = (await response.json()) as DiscoverResult;
      setResult(data);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="max-w-3xl border-t border-black/10 pt-8 pb-12">
      <h2 className="text-2xl font-bold text-textDark mb-4">{DESK_INBOX_TITLE}</h2>
      <p className="text-lg text-textLight mb-6">{DESK_FIND_INTRO}</p>
      <button
        type="button"
        onClick={onFind}
        disabled={pending}
        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors disabled:opacity-50"
      >
        {DESK_FIND_LABEL}
      </button>
      {result ? (
        <DiscoverResultView
          result={result}
          onHideUrl={(url) =>
            setResult((current) =>
              current
                ? {
                    ...current,
                    apply: current.apply.filter(
                      (hit) =>
                        normalizeJobUrl(hit.job.url) !== normalizeJobUrl(url)
                    ),
                    overflow: current.overflow.filter(
                      (hit) =>
                        normalizeJobUrl(hit.job.url) !== normalizeJobUrl(url)
                    ),
                  }
                : current
            )
          }
        />
      ) : null}
    </div>
  );
}

function DiscoverResultView({
  result,
  onHideUrl,
}: {
  result: DiscoverResult;
  onHideUrl: (url: string) => void;
}) {
  const empty = result.apply.length === 0 && result.overflow.length === 0;

  return (
    <div className="mt-8">
      {empty ? (
        <p className="text-lg text-textLight">{DESK_FIND_EMPTY}</p>
      ) : (
        <>
          <ApplyHitList hits={result.apply} onHideUrl={onHideUrl} />
          {result.overflow.length > 0 ? (
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-textDark mb-4">
                {DESK_OVERFLOW_TITLE}
              </h3>
              <p className="text-lg text-textLight mb-6">
                {DESK_OVERFLOW_INTRO}
              </p>
              <ApplyHitList hits={result.overflow} onHideUrl={onHideUrl} />
            </div>
          ) : null}
        </>
      )}
      <p className="text-sm text-textLight mt-6">
        {DESK_FIND_SKIPPED}: {result.skipped}. Scanned {result.scanned}.
      </p>
      {result.sourceErrors.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-sm uppercase tracking-wider text-textLight mb-2">
            {DESK_FIND_ERRORS}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-textLight">
            {result.sourceErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ApplyHitList({
  hits,
  onHideUrl,
}: {
  hits: DiscoverHit[];
  onHideUrl: (url: string) => void;
}) {
  if (hits.length === 0) {
    return null;
  }

  return (
    <ul>
      {hits.map((hit) => (
        <li
          key={hit.job.id}
          className="space-y-3 py-6 border-b border-black/10 last:border-b-0"
        >
          <DeskJobTitle title={hit.job.title} url={hit.job.url} />
          <p className="text-textLight">
            {hit.job.company}
            {hit.job.location ? ` · ${hit.job.location}` : ""}
            {` · ${deskSourceLabel(hit.job.source)}`}
          </p>
          <p className="text-textLight">
            {DESK_SCORE_LABEL}: {hit.fit.score}
          </p>
          <p className="text-textLight">{hit.fit.applicationTitle}</p>
          <ApplyCvLink variant={hit.fit.cvVariant} href={hit.fit.cvUrl} />
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <PackDownload
              kind="cv"
              label={DESK_ATS_CV}
              description={hit.job.description}
              url={hit.job.url}
            />
            <PackDownload
              kind="letter"
              label={DESK_DOWNLOAD_LETTER}
              description={hit.job.description}
              url={hit.job.url}
            />
          </div>
          <InboxStatusActions
            url={hit.job.url}
            title={hit.job.title}
            company={hit.job.company}
            onMarked={(status) => {
              if (status !== "clear") {
                onHideUrl(hit.job.url);
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
}
