import { stripHtml } from "./fetch-jd";
import { discoveryLocationAllowed } from "./location";
import { matchesOverlayTitle } from "./rules";
import type { AtsBoard, AtsProvider } from "./sources";

export const DISCOVER_USER_AGENT = "rd-portfolio-desk/2.4 (personal)";
export const DISCOVER_TIMEOUT_MS = 8_000;
const MAX_BYTES = 3_000_000;
const DESCRIPTION_CAP = 80_000;
const GREENHOUSE_DETAIL_CAP = 15;

export type JobSource = "arbeitnow" | AtsProvider;

export interface DiscoveredJob {
  id: string;
  source: JobSource;
  title: string;
  company: string;
  location: string;
  url: string;
  description: string;
  remote: boolean;
  createdAt: number | null;
}

function isAllowedHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (host === "www.arbeitnow.com" || host === "arbeitnow.com") {
    return true;
  }
  if (host === "boards-api.greenhouse.io") {
    return true;
  }
  if (host === "api.lever.co") {
    return true;
  }
  if (host === "api.ashbyhq.com") {
    return true;
  }
  if (host.endsWith(".jobs.personio.de")) {
    return true;
  }
  return false;
}

export async function fetchAllowedText(urlString: string): Promise<string | null> {
  let url: URL;
  try {
    url = new URL(urlString);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") {
    return null;
  }
  if (!isAllowedHost(url.hostname)) {
    return null;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DISCOVER_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": DISCOVER_USER_AGENT,
        Accept: "application/json, application/xml, text/xml, text/plain;q=0.8",
      },
    });
    if (!response.ok) {
      return null;
    }
    const buf = await response.arrayBuffer();
    const slice = buf.byteLength > MAX_BYTES ? buf.slice(0, MAX_BYTES) : buf;
    const text = new TextDecoder("utf-8", { fatal: false }).decode(slice);
    return text.length > 0 ? text : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function capDescription(text: string): string {
  const stripped = stripHtml(text);
  return stripped.length > DESCRIPTION_CAP
    ? stripped.slice(0, DESCRIPTION_CAP)
    : stripped;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asBool(value: unknown): boolean {
  return value === true;
}

function decodeXml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");
}

export function parseArbeitnow(jsonText: string): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const rows = root && Array.isArray(root.data) ? root.data : [];
  const jobs: DiscoveredJob[] = [];
  for (const row of rows) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const title = asString(item.title).trim();
    const url = asString(item.url).trim();
    if (!title || !url) {
      continue;
    }
    const createdRaw = item.created_at;
    const createdAt =
      typeof createdRaw === "number"
        ? createdRaw * (createdRaw < 2_000_000_000 ? 1000 : 1)
        : typeof createdRaw === "string"
          ? Date.parse(createdRaw) || null
          : null;
    jobs.push({
      id: `arbeitnow:${asString(item.slug) || url}`,
      source: "arbeitnow",
      title,
      company: asString(item.company_name).trim() || "Unknown",
      location: asString(item.location).trim(),
      url,
      description: capDescription(asString(item.description)),
      remote: asBool(item.remote),
      createdAt,
    });
  }
  return jobs;
}

export function parseGreenhouse(
  jsonText: string,
  board: AtsBoard
): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const rows = root && Array.isArray(root.jobs) ? root.jobs : [];
  const jobs: DiscoveredJob[] = [];
  for (const row of rows) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const title = asString(item.title).trim();
    const url = asString(item.absolute_url).trim();
    if (!title || !url) {
      continue;
    }
    const locationObj = asRecord(item.location);
    const location = locationObj ? asString(locationObj.name).trim() : "";
    jobs.push({
      id: `greenhouse:${board.token}:${String(item.id ?? url)}`,
      source: "greenhouse",
      title,
      company: asString(item.company_name).trim() || board.company,
      location,
      url,
      description: capDescription(asString(item.content)),
      remote: /remote/i.test(location),
      createdAt: Date.parse(asString(item.first_published)) || null,
    });
  }
  return jobs;
}

export function parseLever(jsonText: string, board: AtsBoard): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const rows = Array.isArray(parsed) ? parsed : [];
  const jobs: DiscoveredJob[] = [];
  for (const row of rows) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const title = asString(item.text).trim();
    const url = asString(item.hostedUrl).trim() || asString(item.applyUrl).trim();
    if (!title || !url) {
      continue;
    }
    const categories = asRecord(item.categories);
    const location = categories ? asString(categories.location).trim() : "";
    const description =
      asString(item.descriptionPlain) || asString(item.description);
    jobs.push({
      id: `lever:${board.token}:${asString(item.id) || url}`,
      source: "lever",
      title,
      company: board.company,
      location,
      url,
      description: capDescription(description),
      remote: /remote/i.test(location) || asString(item.workplaceType) === "remote",
      createdAt: Date.parse(asString(item.createdAt)) || null,
    });
  }
  return jobs;
}

export function parseAshby(jsonText: string, board: AtsBoard): DiscoveredJob[] {
  const parsed: unknown = JSON.parse(jsonText);
  const root = asRecord(parsed);
  const rows = root && Array.isArray(root.jobs) ? root.jobs : [];
  const jobs: DiscoveredJob[] = [];
  for (const row of rows) {
    const item = asRecord(row);
    if (!item) {
      continue;
    }
    const title = asString(item.title).trim();
    const url = asString(item.jobUrl).trim();
    if (!title || !url) {
      continue;
    }
    jobs.push({
      id: `ashby:${board.token}:${asString(item.id) || url}`,
      source: "ashby",
      title,
      company: board.company,
      location: asString(item.location).trim(),
      url,
      description: capDescription(
        asString(item.descriptionPlain) || asString(item.descriptionHtml)
      ),
      remote: asBool(item.isRemote),
      createdAt: Date.parse(asString(item.publishedAt)) || null,
    });
  }
  return jobs;
}

export function parsePersonioXml(xml: string, board: AtsBoard): DiscoveredJob[] {
  const blocks = xml.match(/<position>[\s\S]*?<\/position>/g) ?? [];
  const jobs: DiscoveredJob[] = [];
  for (const block of blocks) {
    const id = block.match(/<id>(\d+)<\/id>/)?.[1] ?? "";
    const titleRaw = block.match(/<name>([\s\S]*?)<\/name>/)?.[1] ?? "";
    const title = decodeXml(titleRaw).trim();
    if (!title || !id) {
      continue;
    }
    const office = decodeXml(
      block.match(/<office>([\s\S]*?)<\/office>/)?.[1] ?? ""
    ).trim();
    const company = decodeXml(
      block.match(/<subcompany>([\s\S]*?)<\/subcompany>/)?.[1] ?? board.company
    ).trim();
    const values = [...block.matchAll(/<value>([\s\S]*?)<\/value>/g)].map(
      (match) => decodeXml(match[1])
    );
    const url = `https://${board.token}.jobs.personio.de/job/${id}`;
    jobs.push({
      id: `personio:${board.token}:${id}`,
      source: "personio",
      title,
      company: company || board.company,
      location: office,
      url,
      description: capDescription(values.join(" ")),
      remote: /remote/i.test(office),
      createdAt: Date.parse(
        decodeXml(block.match(/<createdAt>([\s\S]*?)<\/createdAt>/)?.[1] ?? "")
      ) || null,
    });
  }
  return jobs;
}

export function boardUrl(board: AtsBoard): string {
  switch (board.provider) {
    case "greenhouse":
      return `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(board.token)}/jobs`;
    case "lever":
      return `https://api.lever.co/v0/postings/${encodeURIComponent(board.token)}?mode=json`;
    case "ashby":
      return `https://api.ashbyhq.com/posting-api/job-board/${encodeURIComponent(board.token)}`;
    case "personio":
      return `https://${board.token}.jobs.personio.de/xml?language=en`;
  }
}

function titleWorthDetail(title: string): boolean {
  return matchesOverlayTitle(title);
}

async function fillGreenhouseContent(
  board: AtsBoard,
  jobs: DiscoveredJob[]
): Promise<DiscoveredJob[]> {
  const candidates = jobs
    .filter(
      (job) =>
        discoveryLocationAllowed(job.location, job.remote, job.title) &&
        titleWorthDetail(job.title)
    )
    .slice(0, GREENHOUSE_DETAIL_CAP);

  const filled = await Promise.all(
    candidates.map(async (job) => {
      const id = job.id.split(":").pop();
      if (!id) {
        return job;
      }
      const text = await fetchAllowedText(
        `https://boards-api.greenhouse.io/v1/boards/${encodeURIComponent(board.token)}/jobs/${encodeURIComponent(id)}`
      );
      if (!text) {
        return job;
      }
      try {
        const parsed: unknown = JSON.parse(text);
        const item = asRecord(parsed);
        if (!item) {
          return job;
        }
        return {
          ...job,
          description: capDescription(asString(item.content)),
        };
      } catch {
        return job;
      }
    })
  );

  return filled;
}

export function parseBoardPayload(
  board: AtsBoard,
  text: string
): DiscoveredJob[] {
  switch (board.provider) {
    case "greenhouse":
      return parseGreenhouse(text, board);
    case "lever":
      return parseLever(text, board);
    case "ashby":
      return parseAshby(text, board);
    case "personio":
      return parsePersonioXml(text, board);
  }
}

export async function fetchBoard(
  board: AtsBoard
): Promise<{ jobs: DiscoveredJob[]; error: string | null }> {
  const text = await fetchAllowedText(boardUrl(board));
  if (!text) {
    return { jobs: [], error: `${board.company} (${board.provider})` };
  }
  try {
    const parsed = parseBoardPayload(board, text);
    const jobs =
      board.provider === "greenhouse"
        ? await fillGreenhouseContent(board, parsed)
        : parsed;
    return { jobs, error: null };
  } catch {
    return { jobs: [], error: `${board.company} (${board.provider})` };
  }
}

export async function fetchArbeitnow(): Promise<{
  jobs: DiscoveredJob[];
  error: string | null;
}> {
  const text = await fetchAllowedText(
    "https://www.arbeitnow.com/api/job-board-api?page=1"
  );
  if (!text) {
    return { jobs: [], error: "Arbeitnow" };
  }
  try {
    return { jobs: parseArbeitnow(text), error: null };
  } catch {
    return { jobs: [], error: "Arbeitnow" };
  }
}
