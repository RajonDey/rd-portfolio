import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { DiscoveredJob } from "./ats";
import type { DiscoverHit, DiscoverResult } from "./discover";
import type { FitResult } from "./fit";
import {
  GIST_INBOX_FILE,
  isGistTrackerEnabled,
  readGistTextFile,
  writeGistTextFile,
} from "./gist-tracker";
import { normalizeJobUrl } from "./urls";

const INBOX_PATH = path.join(process.cwd(), ".desk-out", "inbox.json");
const INBOX_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const DESCRIPTION_TRIM = 8_000;
const APPLY_CACHE_CAP = 40;
const OVERFLOW_CACHE_CAP = 2;

export interface InboxCacheFile {
  savedAt: string;
  apply: DiscoverHit[];
  overflow: DiscoverHit[];
  skipped: number;
  scanned: number;
  sourceErrors: string[];
}

function isFitResult(value: unknown): value is FitResult {
  if (!value || typeof value !== "object") {
    return false;
  }
  const fit = value as FitResult;
  return (
    (fit.decision === "apply" || fit.decision === "skip") &&
    typeof fit.applicationTitle === "string" &&
    (fit.cvVariant === "swe" || fit.cvVariant === "frontend") &&
    typeof fit.cvUrl === "string" &&
    Array.isArray(fit.work) &&
    typeof fit.includeIeee === "boolean" &&
    typeof fit.ieeeHref === "string" &&
    typeof fit.ieeeTitle === "string" &&
    Array.isArray(fit.redFlags) &&
    Array.isArray(fit.signals) &&
    Array.isArray(fit.notes) &&
    typeof fit.score === "number"
  );
}

function isDiscoveredJob(value: unknown): value is DiscoveredJob {
  if (!value || typeof value !== "object") {
    return false;
  }
  const job = value as DiscoveredJob;
  return (
    typeof job.id === "string" &&
    typeof job.source === "string" &&
    typeof job.title === "string" &&
    typeof job.company === "string" &&
    typeof job.location === "string" &&
    typeof job.url === "string" &&
    typeof job.description === "string" &&
    typeof job.remote === "boolean" &&
    (job.createdAt === null || typeof job.createdAt === "number")
  );
}

function isDiscoverHit(value: unknown): value is DiscoverHit {
  if (!value || typeof value !== "object") {
    return false;
  }
  const hit = value as DiscoverHit;
  return isDiscoveredJob(hit.job) && isFitResult(hit.fit);
}

function trimHit(hit: DiscoverHit): DiscoverHit {
  const description =
    hit.job.description.length > DESCRIPTION_TRIM
      ? hit.job.description.slice(0, DESCRIPTION_TRIM)
      : hit.job.description;
  return {
    ...hit,
    job: { ...hit.job, description },
  };
}

function parseInbox(file: InboxCacheFile): InboxCacheFile | null {
  if (
    typeof file.savedAt !== "string" ||
    !Array.isArray(file.apply) ||
    !Array.isArray(file.overflow) ||
    typeof file.skipped !== "number" ||
    typeof file.scanned !== "number" ||
    !Array.isArray(file.sourceErrors)
  ) {
    return null;
  }
  const apply = file.apply.filter(isDiscoverHit).map(trimHit).slice(0, APPLY_CACHE_CAP);
  const overflow = file.overflow
    .filter(isDiscoverHit)
    .map(trimHit)
    .slice(0, OVERFLOW_CACHE_CAP);
  return {
    savedAt: file.savedAt,
    apply,
    overflow,
    skipped: file.skipped,
    scanned: file.scanned,
    sourceErrors: file.sourceErrors.filter((item) => typeof item === "string"),
  };
}

function isFresh(savedAt: string): boolean {
  const at = Date.parse(savedAt);
  if (Number.isNaN(at)) {
    return false;
  }
  return Date.now() - at <= INBOX_TTL_MS;
}

async function readInboxFile(): Promise<InboxCacheFile | null> {
  if (isGistTrackerEnabled()) {
    const raw = await readGistTextFile(GIST_INBOX_FILE);
    if (!raw) {
      return null;
    }
    try {
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }
      return parseInbox(parsed as InboxCacheFile);
    } catch {
      return null;
    }
  }

  try {
    const raw = await readFile(INBOX_PATH, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return parseInbox(parsed as InboxCacheFile);
  } catch {
    return null;
  }
}

async function writeInboxFile(file: InboxCacheFile): Promise<void> {
  const next = parseInbox(file);
  if (!next) {
    throw new Error("Inbox write failed.");
  }
  const body = `${JSON.stringify(next, null, 2)}\n`;
  if (isGistTrackerEnabled()) {
    const ok = await writeGistTextFile(GIST_INBOX_FILE, body);
    if (!ok) {
      throw new Error("Inbox write failed.");
    }
    return;
  }
  await mkdir(path.dirname(INBOX_PATH), { recursive: true });
  await writeFile(INBOX_PATH, body, "utf8");
}

export async function saveInboxCache(result: DiscoverResult): Promise<InboxCacheFile> {
  const file: InboxCacheFile = {
    savedAt: new Date().toISOString(),
    apply: result.apply.map(trimHit).slice(0, APPLY_CACHE_CAP),
    overflow: result.overflow.map(trimHit).slice(0, OVERFLOW_CACHE_CAP),
    skipped: result.skipped,
    scanned: result.scanned,
    sourceErrors: result.sourceErrors,
  };
  await writeInboxFile(file);
  return file;
}

export async function loadInboxCache(): Promise<DiscoverResult | null> {
  const file = await readInboxFile();
  if (!file || !isFresh(file.savedAt)) {
    return null;
  }
  const { trackedUrlSet } = await import("./tracker");
  const tracked = await trackedUrlSet();
  const keep = (hit: DiscoverHit) =>
    !tracked.has(normalizeJobUrl(hit.job.url));
  return {
    scanned: file.scanned,
    skipped: file.skipped,
    sourceErrors: file.sourceErrors,
    apply: file.apply.filter(keep),
    overflow: file.overflow.filter(keep),
    savedAt: file.savedAt,
  };
}

export async function pruneInboxCacheUrl(url: string): Promise<void> {
  const key = normalizeJobUrl(url);
  if (!key) {
    return;
  }
  const file = await readInboxFile();
  if (!file) {
    return;
  }
  const next: InboxCacheFile = {
    ...file,
    apply: file.apply.filter((hit) => normalizeJobUrl(hit.job.url) !== key),
    overflow: file.overflow.filter(
      (hit) => normalizeJobUrl(hit.job.url) !== key
    ),
  };
  try {
    await writeInboxFile(next);
  } catch {
    // Tracker mark must not fail because inbox prune failed.
  }
}
