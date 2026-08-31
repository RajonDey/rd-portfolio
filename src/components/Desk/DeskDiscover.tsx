"use client";

import { useState } from "react";
import { TrackStatusButtons } from "@/components/Desk/DeskTracker";
import type { DiscoverResult } from "@/lib/desk/discover";
import { normalizeJobUrl } from "@/lib/desk/urls";
import {
  DESK_DOWNLOAD_CV,
  DESK_DOWNLOAD_LETTER,
  DESK_FIND_EMPTY,
  DESK_FIND_ERRORS,
  DESK_FIND_INTRO,
  DESK_FIND_LABEL,
  DESK_FIND_SKIPPED,
  DESK_OPEN_POSTING,
} from "@/lib/desk/copy";

const outlineButtonClass =
  "inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors";

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
    <div className="max-w-3xl mb-16">
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
                      (hit) => normalizeJobUrl(hit.job.url) !== normalizeJobUrl(url)
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
  return (
    <div className="border-t border-black/10 mt-10 pt-8 space-y-6">
      {result.apply.length === 0 ? (
        <p className="text-lg text-textLight">{DESK_FIND_EMPTY}</p>
      ) : (
        <ul className="space-y-8">
          {result.apply.map((hit) => (
            <li key={hit.job.id} className="space-y-3">
              <p className="text-xl font-bold text-textDark">{hit.job.title}</p>
              <p className="text-textLight">
                {hit.job.company}
                {hit.job.location ? ` · ${hit.job.location}` : ""}
                {` · ${hit.job.source}`}
              </p>
              <p className="text-textLight">{hit.fit.applicationTitle}</p>
              <a
                href={hit.job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:underline underline-offset-4"
              >
                {DESK_OPEN_POSTING}
              </a>
              <div className="flex flex-wrap gap-3">
                <PackDownload
                  kind="cv"
                  label={DESK_DOWNLOAD_CV}
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
              <TrackStatusButtons
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
      )}
      <p className="text-sm text-textLight">
        {DESK_FIND_SKIPPED}: {result.skipped}. Scanned {result.scanned}.
      </p>
      {result.sourceErrors.length > 0 ? (
        <div>
          <h2 className="text-sm uppercase tracking-wider text-textLight mb-2">
            {DESK_FIND_ERRORS}
          </h2>
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

function PackDownload({
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
      <button type="submit" className={outlineButtonClass}>
        {label}
      </button>
    </form>
  );
}
