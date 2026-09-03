import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { CONTACT_EMAIL, SITE_ORIGIN } from "../site";
import {
  DESK_APPLY_CV_LABEL,
  DESK_FIND_ERRORS,
  DESK_FIND_SKIPPED,
  DESK_IEEE_LABEL,
  DESK_OVERFLOW_INTRO,
  DESK_OVERFLOW_TITLE,
  DESK_SCORE_LABEL,
  DESK_WEEKLY_EMPTY,
  DESK_WEEKLY_INTRO,
  DESK_WEEKLY_OPEN_DESK,
  DESK_WORK_LABEL,
  applyCvDocLabel,
  deskSourceLabel,
} from "./copy";
import { OVERFLOW_CAP, runDiscovery, type DiscoverHit } from "./discover";
import { DESK_OUT_DIR, deleteDeskOutPackPdfs } from "./pack-files";

export const WEEKLY_CAP = 8;
export const WEEKLY_OVERFLOW_CAP = OVERFLOW_CAP;
export const WEEKLY_OUT_DIR = DESK_OUT_DIR;
export const WEEKLY_DESK_HREF = `${SITE_ORIGIN}/desk`;

export interface WeeklyMail {
  subject: string;
  html: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function weeklySubject(count: number): string {
  return count === 0 ? "Desk: no jobs this week" : `Desk: ${count} jobs to review`;
}

function workLines(hit: DiscoverHit): string {
  if (hit.fit.work.length === 0) {
    return "";
  }
  const links = hit.fit.work
    .map((item) => {
      const href = escapeHtml(item.href);
      const title = escapeHtml(item.title);
      return `<a href="${href}">${title}</a>`;
    })
    .join(", ");
  return `<p>${escapeHtml(DESK_WORK_LABEL)}: ${links}</p>`;
}

function ieeeLine(hit: DiscoverHit): string {
  if (!hit.fit.includeIeee) {
    return "";
  }
  const href = escapeHtml(hit.fit.ieeeHref);
  const title = escapeHtml(hit.fit.ieeeTitle);
  return `<p>${escapeHtml(DESK_IEEE_LABEL)}: <a href="${href}">${title}</a></p>`;
}

function applyCvLine(hit: DiscoverHit): string {
  const href = escapeHtml(hit.fit.cvUrl);
  const label = escapeHtml(applyCvDocLabel(hit.fit.cvVariant));
  return `<p>${escapeHtml(DESK_APPLY_CV_LABEL)}: <a href="${href}">${label}</a></p>`;
}

function hitSection(hit: DiscoverHit): string {
  const title = escapeHtml(hit.job.title);
  const company = escapeHtml(hit.job.company);
  const location = escapeHtml(hit.job.location);
  const appTitle = escapeHtml(hit.fit.applicationTitle);
  const url = escapeHtml(hit.job.url);
  const score = escapeHtml(String(hit.fit.score));
  return `<section>
<h2><a href="${url}">${title}</a></h2>
<p>${company}${location ? ` · ${location}` : ""} · ${escapeHtml(deskSourceLabel(hit.job.source))}</p>
<p>${escapeHtml(DESK_SCORE_LABEL)}: ${score}</p>
<p>${appTitle}</p>
${applyCvLine(hit)}
${workLines(hit)}
${ieeeLine(hit)}
</section>`;
}

function weeklyHtml(
  primary: DiscoverHit[],
  overflow: DiscoverHit[],
  scanned: number,
  skipped: number,
  sourceErrors: string[]
): string {
  const rows =
    primary.length === 0 && overflow.length === 0
      ? `<p>${escapeHtml(DESK_WEEKLY_EMPTY)}</p>`
      : `${primary.map(hitSection).join("\n")}
${
  overflow.length === 0
    ? ""
    : `<h2>${escapeHtml(DESK_OVERFLOW_TITLE)}</h2>
<p>${escapeHtml(DESK_OVERFLOW_INTRO)}</p>
${overflow.map(hitSection).join("\n")}`
}`;

  const errors =
    sourceErrors.length === 0
      ? ""
      : `<p>${escapeHtml(DESK_FIND_ERRORS)}: ${escapeHtml(sourceErrors.join(", "))}</p>`;

  const deskHref = escapeHtml(WEEKLY_DESK_HREF);

  return `<!DOCTYPE html>
<html lang="en">
<body>
<p>${escapeHtml(DESK_WEEKLY_INTRO)}</p>
<p><a href="${deskHref}">${escapeHtml(DESK_WEEKLY_OPEN_DESK)}</a></p>
${rows}
<p>${escapeHtml(DESK_FIND_SKIPPED)}: ${skipped}. Scanned ${scanned}.</p>
${errors}
</body>
</html>`;
}

export async function buildWeeklyMail(): Promise<WeeklyMail> {
  try {
    await deleteDeskOutPackPdfs();
  } catch {
    // Leftover PDFs must not block the weekly run.
  }
  const discovery = await runDiscovery();
  const primary = discovery.apply.slice(0, WEEKLY_CAP);
  const overflow = discovery.overflow.slice(0, WEEKLY_OVERFLOW_CAP);
  const hits = [...primary, ...overflow];
  return {
    subject: weeklySubject(hits.length),
    html: weeklyHtml(
      primary,
      overflow,
      discovery.scanned,
      discovery.skipped,
      discovery.sourceErrors
    ),
  };
}

export async function writeWeeklyDryRun(mail: WeeklyMail): Promise<string> {
  const stamp = new Date().toISOString().slice(0, 10);
  const dir = path.join(WEEKLY_OUT_DIR, stamp);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "email.html"), mail.html, "utf8");
  await writeFile(path.join(dir, "subject.txt"), mail.subject, "utf8");
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
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend ${response.status}: ${detail.slice(0, 300)}`);
  }
}
