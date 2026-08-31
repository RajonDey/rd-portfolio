import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { runDiscovery } from "@/lib/desk/discover";

export const dynamic = "force-dynamic";

export async function GET() {
  return new NextResponse(null, { status: 404 });
}

export async function POST() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return new NextResponse(null, { status: 404 });
  }

  const result = await runDiscovery();
  return NextResponse.json(result);
}
