import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { runDiscovery } from "@/lib/desk/discover";
import { saveInboxCache } from "@/lib/desk/inbox-cache";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET() {
  return new NextResponse(null, { status: 404 });
}

export async function POST() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return new NextResponse(null, { status: 404 });
  }

  const result = await runDiscovery();
  try {
    const cached = await saveInboxCache(result);
    return NextResponse.json({ ...result, savedAt: cached.savedAt });
  } catch {
    return NextResponse.json(result);
  }
}
