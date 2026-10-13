"use client";

import { useEffect, useState } from "react";
import {
  DESK_MANUAL_ADD,
  DESK_MANUAL_ADDS,
  DESK_MANUAL_COUNT_LABEL,
  DESK_MANUAL_FAIL,
  DESK_MANUAL_FILTER,
  DESK_MANUAL_INTRO,
  DESK_MANUAL_PERIOD_DAY,
  DESK_MANUAL_PERIOD_LABEL,
  DESK_MANUAL_PERIOD_WEEK,
  DESK_MANUAL_TITLE,
  DESK_SAVED_MANUAL,
} from "@/lib/desk/copy";
import { MANUAL_BOARDS, type ManualBoard } from "@/lib/desk/manual-boards";
import {
  MANUAL_COUNT_MAX,
  notifyTrackerChanged,
  type ManualPeriod,
} from "@/lib/desk/tracker-types";

const MARK_FLASH_MS = 1_000;

export default function DeskManualBoards() {
  return (
    <div className="mt-10">
      <h2 className="text-base font-semibold text-textDark mb-2">
        {DESK_MANUAL_TITLE}
      </h2>
      <p className="text-sm text-textLight mb-2">{DESK_MANUAL_INTRO}</p>
      <p className="text-sm text-textLight mb-2">{DESK_MANUAL_FILTER}</p>
      <p className="text-sm text-textLight mb-4">{DESK_MANUAL_ADDS}</p>
      <ul>
        {MANUAL_BOARDS.map((board) => (
          <li
            key={board.id}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-2 py-4 border-b border-black/10 last:border-b-0"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center border border-black/10 font-mono text-xs text-textDark">
              {board.mark}
            </span>
            <p className="text-base font-semibold text-textDark">{board.name}</p>
            <p className="flex flex-wrap gap-x-4 gap-y-2">
              {board.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textDark underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </p>
            <p className="basis-full text-sm text-textLight">{board.note}</p>
            <ManualCountForm board={board} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManualCountForm({ board }: { board: ManualBoard }) {
  const [count, setCount] = useState("1");
  const [period, setPeriod] = useState<ManualPeriod>("day");
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [savedCount, setSavedCount] = useState<number | null>(null);

  useEffect(() => {
    if (savedCount === null) {
      return;
    }
    const timer = window.setTimeout(() => {
      setSavedCount(null);
    }, MARK_FLASH_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, [savedCount]);

  async function add() {
    const parsed = Number(count);
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > MANUAL_COUNT_MAX) {
      setFailed(true);
      return;
    }
    setPending(true);
    setFailed(false);
    try {
      const body = new FormData();
      body.set("kind", "manual");
      body.set("boardId", board.id);
      body.set("count", String(parsed));
      body.set("period", period);
      const response = await fetch("/desk/track", { method: "POST", body });
      if (!response.ok) {
        setFailed(true);
        return;
      }
      setCount("1");
      setSavedCount(parsed);
      notifyTrackerChanged();
    } catch {
      setFailed(true);
    } finally {
      setPending(false);
    }
  }

  if (savedCount !== null) {
    return (
      <p className="basis-full text-sm text-textLight">
        {DESK_SAVED_MANUAL} · {board.name} · {savedCount}
      </p>
    );
  }

  return (
    <div className="basis-full flex flex-wrap items-end gap-x-4 gap-y-2">
      <label className="block">
        <span className="text-sm font-medium text-textDark">
          {DESK_MANUAL_COUNT_LABEL}
        </span>
        <input
          type="number"
          min={1}
          max={MANUAL_COUNT_MAX}
          step={1}
          value={count}
          disabled={pending}
          onChange={(event) => setCount(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              void add();
            }
          }}
          className="mt-2 block w-24 bg-background border border-black/10 px-3 py-2 text-textDark disabled:opacity-50"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-textDark">
          {DESK_MANUAL_PERIOD_LABEL}
        </span>
        <select
          value={period}
          disabled={pending}
          onChange={(event) => {
            if (event.target.value === "day" || event.target.value === "week") {
              setPeriod(event.target.value);
            }
          }}
          className="mt-2 block bg-background border border-black/10 px-3 py-2 text-textDark disabled:opacity-50"
        >
          <option value="day">{DESK_MANUAL_PERIOD_DAY}</option>
          <option value="week">{DESK_MANUAL_PERIOD_WEEK}</option>
        </select>
      </label>
      <button
        type="button"
        disabled={pending}
        onClick={() => void add()}
        className="text-textDark hover:underline underline-offset-4 disabled:opacity-50 bg-transparent p-0 border-0 cursor-pointer font-sans"
      >
        {DESK_MANUAL_ADD}
      </button>
      {failed ? (
        <p className="basis-full text-sm text-textLight">{DESK_MANUAL_FAIL}</p>
      ) : null}
    </div>
  );
}
