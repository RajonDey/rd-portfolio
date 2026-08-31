import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { CONTACT_EMAIL } from "../site";
import {
  DESK_FIND_ERRORS,
  DESK_FIND_SKIPPED,
  DESK_WEEKLY_EMPTY,
  DESK_WEEKLY_INTRO,
} from "./copy";
import { jobScoreText, runDiscovery, type DiscoverHit } from "./discover";
import { buildApplicationPack } from "./pack-data";
import { renderCvPdf, renderLetterPdf } from "./pdf/render";

export const WEEKLY_CAP = 8;
export const WEEKLY_OUT_DIR = ".desk-out";

export interface WeeklyAttachment {
  filename: string;
  content: Buffer;
}

export interface WeeklyMail {
  subject: string;
  html: string;
  attachments: WeeklyAttachment[];
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fileSlug(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug.slice(0, 40) || "job";
}

function jobFilename(hit: DiscoverHit, kind: "cv" | "letter"): string {
  const base = fileSlug(`${hit.job.company}-${hit.job.title}`);
  return kind === "cv" ? `${base}-cv.pdf` : `${base}-letter.pdf`;
}

function weeklySubject(count: number): string {
  return count === 0 ? "Desk: no jobs this week" : `Desk: ${count} jobs to review`;
}

function weeklyHtml(
  hits: DiscoverHit[],
  scanned: number,
  skipped: number,
  sourceErrors: string[]
): string {
  const rows =
    hits.length === 0
      ? `<p>${escapeHtml(DESK_WEEKLY_EMPTY)}</p>`
      : hits
          .map((hit) => {
            const title = escapeHtml(hit.job.title);
            const company = escapeHtml(hit.job.company);
            const location = escapeHtml(hit.job.location);
            const appTitle = escapeHtml(hit.fit.applicationTitle);
            const url = escapeHtml(hit.job.url);
            return `<section>
<h2>${title}</h2>
<p>${company}${location ? ` · ${location}` : ""}</p>
<p>${appTitle}</p>
<p><a href="${url}">${url}</a></p>
</section>`;
          })
          .join("\n");

  const errors =
    sourceErrors.length === 0
      ? ""
      : `<p>${escapeHtml(DESK_FIND_ERRORS)}: ${escapeHtml(sourceErrors.join(", "))}</p>`;

  return `<!DOCTYPE html>
<html lang="en">
<body>
<p>${escapeHtml(DESK_WEEKLY_INTRO)}</p>
${rows}
<p>${escapeHtml(DESK_FIND_SKIPPED)}: ${skipped}. Scanned ${scanned}.</p>
${errors}
</body>
</html>`;
}

async function attachmentsForHits(
  hits: DiscoverHit[]
): Promise<WeeklyAttachment[]> {
  const files: WeeklyAttachment[] = [];
  for (const hit of hits) {
    const pack = buildApplicationPack(hit.fit, jobScoreText(hit.job));
    const cv = await renderCvPdf(pack.cv);
    const letter = await renderLetterPdf(pack.letter);
    files.push({ filename: jobFilename(hit, "cv"), content: cv });
    files.push({ filename: jobFilename(hit, "letter"), content: letter });
  }
  return files;
}

export async function buildWeeklyMail(): Promise<WeeklyMail> {
  const discovery = await runDiscovery();
  const hits = discovery.apply.slice(0, WEEKLY_CAP);
  const attachments = await attachmentsForHits(hits);
  return {
    subject: weeklySubject(hits.length),
    html: weeklyHtml(
      hits,
      discovery.scanned,
      discovery.skipped,
      discovery.sourceErrors
    ),
    attachments,
  };
}

export async function writeWeeklyDryRun(mail: WeeklyMail): Promise<string> {
  const stamp = new Date().toISOString().slice(0, 10);
  const dir = path.join(WEEKLY_OUT_DIR, stamp);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "email.html"), mail.html, "utf8");
  await writeFile(path.join(dir, "subject.txt"), mail.subject, "utf8");
  for (const file of mail.attachments) {
    await writeFile(path.join(dir, file.filename), file.content);
  }
  return dir;
}

export function weeklyMailTo(): string {
  return process.env.DESK_MAIL_TO?.trim() || CONTACT_EMAIL;
}

export function weeklyMailFrom(): string | undefined {
  const from = process.env.DESK_MAIL_FROM?.trim();
  return from || undefined;
}

export async function sendWeeklyMail(mail: WeeklyMail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = weeklyMailFrom();
  if (!apiKey || !from) {
    throw new Error("Set RESEND_API_KEY and DESK_MAIL_FROM to send.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [weeklyMailTo()],
      subject: mail.subject,
      html: mail.html,
      attachments: mail.attachments.map((file) => ({
        filename: file.filename,
        content: file.content.toString("base64"),
      })),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend ${response.status}: ${detail.slice(0, 300)}`);
  }
}
