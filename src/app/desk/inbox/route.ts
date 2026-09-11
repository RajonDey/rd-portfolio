import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { loadInboxCache } from "@/lib/desk/inbox-cache";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

function locked() {
  return new NextResponse(null, { status: 404 });
}

export async function GET() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }
  const cache = await loadInboxCache();
  if (!cache) {
    return NextResponse.json({ result: null });
  }
  return NextResponse.json({ result: cache });
}

export async function POST() {
  return locked();
}
