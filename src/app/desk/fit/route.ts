import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { scoreJobFromForm } from "@/lib/desk/job-input";

export const dynamic = "force-dynamic";

export async function GET() {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return new NextResponse(null, { status: 404 });
  }

  const form = await request.formData();
  const { result } = await scoreJobFromForm(form);
  return NextResponse.json(result);
}
