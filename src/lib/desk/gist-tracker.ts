import type { TrackerFile } from "./tracker-types";

export const GIST_TRACKER_FILE = "tracker.json";
export const GIST_FEEDBACK_FILE = "feedback.json";
const GIST_TIMEOUT_MS = 8_000;

function gistId(): string | undefined {
  const value = process.env.DESK_GIST_ID?.trim();
  return value || undefined;
}

function gistToken(): string | undefined {
  const value = process.env.DESK_GIST_TOKEN?.trim();
  return value || undefined;
}

export function isGistTrackerEnabled(): boolean {
  return Boolean(gistId() && gistToken());
}

async function gistRequest(
  method: "GET" | "PATCH",
  body?: Record<string, unknown>
): Promise<unknown> {
  const id = gistId();
  const token = gistToken();
  if (!id || !token) {
    return null;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GIST_TIMEOUT_MS);
  try {
    const response = await fetch(`https://api.github.com/gists/${id}`, {
      method,
      signal: controller.signal,
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "rd-portfolio-desk",
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) {
      return null;
    }
    return response.json() as Promise<unknown>;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function contentFromGist(payload: unknown, filename: string): string | null {
  if (!payload || typeof payload !== "object" || !("files" in payload)) {
    return null;
  }
  const files = (payload as { files?: Record<string, { content?: string } | null> })
    .files;
  const file = files?.[filename];
  if (!file || typeof file.content !== "string") {
    return null;
  }
  return file.content;
}

export async function readGistTextFile(filename: string): Promise<string | null> {
  const payload = await gistRequest("GET");
  if (!payload) {
    return null;
  }
  return contentFromGist(payload, filename);
}

export async function writeGistTextFile(
  filename: string,
  content: string
): Promise<boolean> {
  const payload = await gistRequest("PATCH", {
    files: {
      [filename]: { content },
    },
  });
  return payload !== null;
}

export async function readGistTrackerFile(): Promise<TrackerFile | null> {
  const raw = await readGistTextFile(GIST_TRACKER_FILE);
  if (raw === null) {
    return isGistTrackerEnabled() ? { jobs: [] } : null;
  }
  if (!raw) {
    return { jobs: [] };
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !("jobs" in parsed)) {
      return { jobs: [] };
    }
    return parsed as TrackerFile;
  } catch {
    return { jobs: [] };
  }
}

export async function writeGistTrackerFile(file: TrackerFile): Promise<boolean> {
  return writeGistTextFile(
    GIST_TRACKER_FILE,
    `${JSON.stringify(file, null, 2)}\n`
  );
}
