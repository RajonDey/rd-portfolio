import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { addDeskNote, clearDeskNote, listDeskNotes } from "@/lib/desk/notes";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

function locked() {
  return new NextResponse(null, { status: 404 });
}

export async function GET() {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }
  const notes = await listDeskNotes();
  return NextResponse.json({ notes });
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return locked();
  }

  const form = await request.formData();
  const status = String(form.get("status") ?? "");
  const id = String(form.get("id") ?? "").trim();
  const text = String(form.get("text") ?? "");

  try {
    if (status === "clear") {
      if (!id) {
        return locked();
      }
      const notes = await clearDeskNote(id);
      return NextResponse.json({ notes });
    }
    const notes = await addDeskNote(text);
    return NextResponse.json({ notes });
  } catch {
    return locked();
  }
}
