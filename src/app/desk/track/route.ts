import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import {
  clearTrackedJob,
  isTrackerStatus,
  listTrackedJobs,
  upsertTrackedJob,
} from "@/lib/desk/tracker";

export const dynamic = "force-dynamic";

function locked() {
  return new NextResponse(null, { status: 404 });
}

export async function GET() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }
  const jobs = await listTrackedJobs();
  return NextResponse.json({ jobs });
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }

  const form = await request.formData();
  const url = String(form.get("url") ?? "").trim();
  const status = String(form.get("status") ?? "");
  if (!url) {
    return locked();
  }

  if (status === "clear") {
    const jobs = await clearTrackedJob(url);
    return NextResponse.json({ jobs });
  }

  if (!isTrackerStatus(status)) {
    return locked();
  }

  const jobs = await upsertTrackedJob({
    url,
    title: String(form.get("title") ?? ""),
    company: String(form.get("company") ?? ""),
    status,
  });
  return NextResponse.json({ jobs });
}
