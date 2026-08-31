import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import {
  DESK_COOKIE_NAME,
  expectedDeskToken,
  getDeskPassword,
  isDeskEnabled,
  isValidDeskPassword,
} from "@/lib/desk/access";

export const dynamic = "force-dynamic";

function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/desk",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function GET() {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword()) {
    return new NextResponse(null, { status: 404 });
  }

  const form = await request.formData();
  const action = String(form.get("_action") ?? "");
  const jar = await cookies();

  if (action === "signout") {
    jar.delete({ name: DESK_COOKIE_NAME, path: "/desk" });
    redirect("/desk");
  }

  const password = String(form.get("password") ?? "");
  if (!isValidDeskPassword(password)) {
    return new NextResponse(null, { status: 404 });
  }

  jar.set(DESK_COOKIE_NAME, expectedDeskToken(password), cookieOptions());
  redirect("/desk");
}
