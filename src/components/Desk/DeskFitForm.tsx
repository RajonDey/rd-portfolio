"use client";

import { FormEvent, useState } from "react";
import { TrackStatusButtons } from "@/components/Desk/DeskTracker";
import type { FitResult } from "@/lib/desk/fit";
import {
  DESK_CV_LABEL,
  DESK_DECISION_APPLY,
  DESK_DECISION_SKIP,
  DESK_DOWNLOAD_CV,
  DESK_DOWNLOAD_LETTER,
  DESK_EVALUATE_LABEL,
  DESK_FLAGS_LABEL,
  DESK_FORM_INTRO,
  DESK_IEEE_LABEL,
  DESK_JD_LABEL,
  DESK_NOTES_LABEL,
  DESK_SIGNALS_LABEL,
  DESK_URL_LABEL,
  DESK_WORK_LABEL,
} from "@/lib/desk/copy";

const fieldClass =
  "mt-2 block w-full bg-background border border-black/10 px-3 py-2 text-textDark";

const outlineButtonClass =
  "inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors";

export default function DeskFitForm() {
  const [result, setResult] = useState<FitResult | null>(null);
  const [pending, setPending] = useState(false);
  const [packInput, setPackInput] = useState({ description: "", url: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setResult(null);
    try {
      const body = new FormData(event.currentTarget);
      setPackInput({
        description: String(body.get("description") ?? ""),
        url: String(body.get("url") ?? ""),
      });
      const response = await fetch("/desk/fit", {
        method: "POST",
        body,
      });
      if (!response.ok) {
        setResult(null);
        return;
      }
      const data = (await response.json()) as FitResult;
      setResult(data);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="max-w-3xl">
      <p className="text-lg text-textLight mb-8">{DESK_FORM_INTRO}</p>
      <form onSubmit={onSubmit} className="space-y-6 mb-12">
        <label className="block">
          <span className="text-sm font-medium text-textDark">
            {DESK_JD_LABEL}
          </span>
          <textarea
            name="description"
            rows={12}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-textDark">
            {DESK_URL_LABEL}
          </span>
          <input type="url" name="url" className={`${fieldClass} max-w-xl`} />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors disabled:opacity-50"
        >
          {DESK_EVALUATE_LABEL}
        </button>
      </form>
      {result ? <FitResultView result={result} packInput={packInput} /> : null}
    </div>
  );
}

function FitResultView({
  result,
  packInput,
}: {
  result: FitResult;
  packInput: { description: string; url: string };
}) {
  const decisionLabel =
    result.decision === "apply" ? DESK_DECISION_APPLY : DESK_DECISION_SKIP;

  return (
    <div className="border-t border-black/10 pt-8 space-y-6">
      <p className="text-xl font-bold text-textDark">{decisionLabel}</p>
      {result.decision === "apply" ? (
        <>
          <p className="text-lg text-textLight">{result.applicationTitle}</p>
          <div>
            <h2 className="text-sm uppercase tracking-wider text-textLight mb-2">
              {DESK_CV_LABEL}
            </h2>
            <a
              href={result.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textDark hover:underline underline-offset-4"
            >
              {result.cvVariant === "frontend"
                ? "Senior Frontend Engineer"
                : "Senior Software Engineer"}
            </a>
          </div>
          {result.work.length > 0 ? (
            <div>
              <h2 className="text-sm uppercase tracking-wider text-textLight mb-2">
                {DESK_WORK_LABEL}
              </h2>
              <ul className="space-y-2">
                {result.work.map((item) => (
                  <li key={item.slug}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textDark hover:underline underline-offset-4"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {result.includeIeee ? (
            <div>
              <h2 className="text-sm uppercase tracking-wider text-textLight mb-2">
                {DESK_IEEE_LABEL}
              </h2>
              <a
                href={result.ieeeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:underline underline-offset-4"
              >
                {result.ieeeTitle}
              </a>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <PackDownloadForm
              kind="cv"
              label={DESK_DOWNLOAD_CV}
              packInput={packInput}
            />
            <PackDownloadForm
              kind="letter"
              label={DESK_DOWNLOAD_LETTER}
              packInput={packInput}
            />
          </div>
          {packInput.url.trim() ? (
            <TrackStatusButtons
              url={packInput.url}
              title={result.applicationTitle}
              company={companyFromUrl(packInput.url)}
            />
          ) : null}
        </>
      ) : null}
      {result.redFlags.length > 0 ? (
        <FlagList heading={DESK_FLAGS_LABEL} items={result.redFlags} />
      ) : null}
      {result.signals.length > 0 ? (
        <FlagList heading={DESK_SIGNALS_LABEL} items={result.signals} />
      ) : null}
      {result.notes.length > 0 ? (
        <FlagList heading={DESK_NOTES_LABEL} items={result.notes} />
      ) : null}
    </div>
  );
}

function PackDownloadForm({
  kind,
  label,
  packInput,
}: {
  kind: "cv" | "letter";
  label: string;
  packInput: { description: string; url: string };
}) {
  return (
    <form action="/desk/pack" method="post">
      <input type="hidden" name="description" value={packInput.description} />
      <input type="hidden" name="url" value={packInput.url} />
      <input type="hidden" name="kind" value={kind} />
      <button type="submit" className={outlineButtonClass}>
        {label}
      </button>
    </form>
  );
}

function companyFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function FlagList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm uppercase tracking-wider text-textLight mb-2">
        {heading}
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-textLight">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
