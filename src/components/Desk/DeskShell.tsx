"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import DeskApplyDocs from "@/components/Desk/DeskApplyDocs";
import DeskDiscover from "@/components/Desk/DeskDiscover";
import DeskFitForm from "@/components/Desk/DeskFitForm";
import DeskManualBoards from "@/components/Desk/DeskManualBoards";
import DeskNotes from "@/components/Desk/DeskNotes";
import DeskTracker, { deskTextActionClass } from "@/components/Desk/DeskTracker";
import {
  DESK_APPLIED_COUNT_PREFIX,
  DESK_APPLIED_MONTH_PREFIX,
  DESK_APPLIED_WEEK_PREFIX,
  DESK_PASTE_TITLE,
  DESK_SIGN_OUT_LABEL,
  DESK_TAB_APPLY,
  DESK_TAB_INBOX,
  DESK_TAB_TRACKER,
} from "@/lib/desk/copy";
import {
  DESK_TRACKER_CHANGED,
  appliedPeriodCounts,
  appliedTotal,
  type ManualApply,
  type TrackerJob,
} from "@/lib/desk/tracker-types";

const PANELS = ["inbox", "apply", "tracker"] as const;
type DeskPanel = (typeof PANELS)[number];

const PANEL_KEY = "desk-panel";

const TAB_LABEL: Record<DeskPanel, string> = {
  inbox: DESK_TAB_INBOX,
  apply: DESK_TAB_APPLY,
  tracker: DESK_TAB_TRACKER,
};

function isDeskPanel(value: string | null): value is DeskPanel {
  return value === "inbox" || value === "apply" || value === "tracker";
}

const panelListeners = new Set<() => void>();

function readStoredPanel(): DeskPanel {
  const stored = window.sessionStorage.getItem(PANEL_KEY);
  return isDeskPanel(stored) ? stored : "inbox";
}

function subscribePanel(listener: () => void) {
  panelListeners.add(listener);
  return () => {
    panelListeners.delete(listener);
  };
}

function getPanelSnapshot(): DeskPanel {
  return readStoredPanel();
}

function getServerPanel(): DeskPanel {
  return "inbox";
}

function selectPanel(next: DeskPanel) {
  window.sessionStorage.setItem(PANEL_KEY, next);
  panelListeners.forEach((listener) => listener());
}

export default function DeskShell() {
  const panel = useSyncExternalStore(
    subscribePanel,
    getPanelSnapshot,
    getServerPanel
  );
  const [applied, setApplied] = useState<{
    total: number;
    week: number;
    month: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const response = await fetch("/desk/track", { cache: "no-store" });
      if (!response.ok) {
        if (!cancelled) {
          setApplied({ total: 0, week: 0, month: 0 });
        }
        return;
      }
      const data = (await response.json()) as {
        jobs?: TrackerJob[];
        manual?: ManualApply[];
      };
      if (!cancelled) {
        const jobs = data.jobs ?? [];
        const manual = data.manual ?? [];
        const period = appliedPeriodCounts(jobs, manual);
        setApplied({
          total: appliedTotal(jobs, manual),
          week: period.week,
          month: period.month,
        });
      }
    }

    void load();
    window.addEventListener(DESK_TRACKER_CHANGED, load);
    return () => {
      cancelled = true;
      window.removeEventListener(DESK_TRACKER_CHANGED, load);
    };
  }, []);

  return (
    <div>
      {applied !== null ? (
        <p className="text-sm text-textLight mb-4">
          {DESK_APPLIED_COUNT_PREFIX} {applied.total}
          {" · "}
          {DESK_APPLIED_WEEK_PREFIX} {applied.week}
          {" · "}
          {DESK_APPLIED_MONTH_PREFIX} {applied.month}
        </p>
      ) : null}
      <div
        role="tablist"
        className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-6"
      >
        {PANELS.map((item) => {
          const selected = panel === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              id={`desk-tab-${item}`}
              aria-selected={selected}
              aria-controls={`desk-panel-${item}`}
              onClick={() => selectPanel(item)}
              className={
                selected
                  ? "text-textDark font-semibold underline underline-offset-4 bg-transparent p-0 border-0 cursor-pointer font-sans"
                  : "text-textLight bg-transparent p-0 border-0 cursor-pointer font-sans"
              }
            >
              {TAB_LABEL[item]}
            </button>
          );
        })}
        <form action="/desk/session" method="post" className="sm:ml-auto">
          <input type="hidden" name="_action" value="signout" />
          <button type="submit" className={deskTextActionClass}>
            {DESK_SIGN_OUT_LABEL}
          </button>
        </form>
      </div>
      <div
        role="tabpanel"
        id="desk-panel-inbox"
        aria-labelledby="desk-tab-inbox"
        hidden={panel !== "inbox"}
      >
        <DeskDiscover />
      </div>
      <div
        role="tabpanel"
        id="desk-panel-apply"
        aria-labelledby="desk-tab-apply"
        hidden={panel !== "apply"}
      >
        <DeskApplyDocs />
        <DeskManualBoards />
        <h2 className="text-base font-semibold text-textDark mt-10 mb-4">
          {DESK_PASTE_TITLE}
        </h2>
        <DeskFitForm />
      </div>
      <div
        role="tabpanel"
        id="desk-panel-tracker"
        aria-labelledby="desk-tab-tracker"
        hidden={panel !== "tracker"}
      >
        <DeskTracker />
      </div>
      <div className="mt-10">
        <DeskNotes />
      </div>
    </div>
  );
}
