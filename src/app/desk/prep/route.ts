import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { buildInterviewPrep } from "@/lib/desk/prep";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

function locked() {
  return new NextResponse(null, { status: 404 });
}

export async function GET() {
  return locked();
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }

  const form = await request.formData();
  const url = String(form.get("url") ?? "").trim();
  if (!url) {
    return locked();
  }

  const prep = await buildInterviewPrep({
    url,
    title: String(form.get("title") ?? ""),
    company: String(form.get("company") ?? ""),
  });
  return NextResponse.json(prep);
}
