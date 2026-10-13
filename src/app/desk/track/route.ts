import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { isManualBoardId } from "@/lib/desk/manual-boards";
import {
  addManualApply,
  clearManualApply,
  clearTrackedJob,
  isManualPeriod,
  isRejectionStage,
  isTrackerStatus,
  readTracker,
  upsertTrackedJob,
} from "@/lib/desk/tracker";
import { MANUAL_COUNT_MAX } from "@/lib/desk/tracker-types";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

function locked() {
  return new NextResponse(null, { status: 404 });
}

export async function GET() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }
  const tracker = await readTracker();
  return NextResponse.json(tracker);
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }

  const form = await request.formData();
  const kind = String(form.get("kind") ?? "job");
  if (kind === "manual") {
    const boardId = String(form.get("boardId") ?? "").trim();
    const status = String(form.get("status") ?? "");
    if (!isManualBoardId(boardId) && status !== "clear") {
      return locked();
    }
    try {
      if (status === "clear") {
        const id = String(form.get("id") ?? "").trim();
        if (!id) {
          return locked();
        }
        await clearManualApply(id);
      } else {
        const period = String(form.get("period") ?? "");
        const count = Number(form.get("count"));
        if (
          !isManualPeriod(period) ||
          !isManualBoardId(boardId) ||
          !Number.isInteger(count) ||
          count < 1 ||
          count > MANUAL_COUNT_MAX
        ) {
          return locked();
        }
        await addManualApply({ boardId, count, period });
      }
      return NextResponse.json(await readTracker());
    } catch {
      return NextResponse.json({ error: "Tracker write failed." }, { status: 503 });
    }
  }

  const url = String(form.get("url") ?? "").trim();
  const status = String(form.get("status") ?? "");
  if (!url) {
    return locked();
  }

  if (status === "clear") {
    try {
      const jobs = await clearTrackedJob(url);
      return NextResponse.json({ jobs });
    } catch {
      return NextResponse.json({ error: "Tracker write failed." }, { status: 503 });
    }
  }

  if (!isTrackerStatus(status)) {
    return locked();
  }

  try {
    const stageRaw = String(form.get("stage") ?? "");
    const jobs = await upsertTrackedJob({
      url,
      title: String(form.get("title") ?? ""),
      company: String(form.get("company") ?? ""),
      status,
      stage: isRejectionStage(stageRaw) ? stageRaw : undefined,
    });
    return NextResponse.json({ jobs });
  } catch {
    return NextResponse.json({ error: "Tracker write failed." }, { status: 503 });
  }
}
