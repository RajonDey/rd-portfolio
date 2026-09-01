import { NextResponse } from "next/server";
import { getDeskPassword, hasDeskSession, isDeskEnabled } from "@/lib/desk/access";
import { scoreJobFromForm } from "@/lib/desk/job-input";
import { buildApplicationPack } from "@/lib/desk/pack-data";
import { renderCvPdf, renderLetterPdf } from "@/lib/desk/pdf/render";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PACK_HEADERS = {
  "Content-Type": "application/pdf",
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
};

function pdfResponse(buffer: Buffer, filename: string) {
  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      ...PACK_HEADERS,
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

export async function GET() {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request) {
  if (!isDeskEnabled() || !getDeskPassword() || !(await hasDeskSession())) {
    return new NextResponse(null, { status: 404 });
  }

  const form = await request.formData();
  const kind = String(form.get("kind") ?? "");
  if (kind !== "cv" && kind !== "letter") {
    return new NextResponse(null, { status: 404 });
  }

  const { result, jdText } = await scoreJobFromForm(form);
  if (result.decision !== "apply") {
    return new NextResponse(null, { status: 404 });
  }

  const pack = buildApplicationPack(result, jdText);
  if (kind === "cv") {
    const buffer = await renderCvPdf(pack.cv);
    return pdfResponse(buffer, "Rajon-Dey-CV.pdf");
  }

  const buffer = await renderLetterPdf(pack.letter);
  return pdfResponse(buffer, "Rajon-Dey-letter.pdf");
}
