import { fetchAllowedText } from "./ats";

export const IND_SPONSOR_URL =
  "https://ind.nl/en/public-register-recognised-sponsors/public-register-work";

const MIN_REGISTER_SIZE = 1_000;
const LEGAL_SUFFIX =
  /\b(b\.?\s*v\.?|n\.?\s*v\.?|gmbh|inc\.?|ltd\.?|llc|s\.?a\.?|se|k\.?g\.?|co)\b/gi;

export function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function normalizeOrgName(name: string): string {
  return decodeEntities(name)
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(LEGAL_SUFFIX, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function parseIndSponsorHtml(html: string): string[] {
  const rows = html.match(/<th\s+scope="row">([\s\S]*?)<\/th>/gi) ?? [];
  const names: string[] = [];
  for (const row of rows) {
    const inner = row.replace(/^<th\s+scope="row">/i, "").replace(/<\/th>$/i, "");
    const name = decodeEntities(inner.replace(/<[^>]+>/g, " ")).replace(
      /\s+/g,
      " "
    ).trim();
    if (name) {
      names.push(name);
    }
  }
  return names;
}

export function companyMatchesSponsor(
  company: string,
  sponsors: Set<string>
): boolean {
  const needle = normalizeOrgName(company);
  if (needle.length < 2) {
    return false;
  }
  if (sponsors.has(needle)) {
    return true;
  }
  for (const sponsor of sponsors) {
    if (namesAlign(needle, sponsor)) {
      return true;
    }
  }
  return false;
}

function namesAlign(left: string, right: string): boolean {
  if (left === right) {
    return true;
  }
  const [shorter, longer] =
    left.length <= right.length ? [left, right] : [right, left];
  if (shorter.length < 4) {
    return false;
  }
  return longer === shorter || longer.startsWith(`${shorter} `);
}

export async function fetchRecognisedSponsors(): Promise<{
  names: Set<string> | null;
  error: string | null;
}> {
  const text = await fetchAllowedText(IND_SPONSOR_URL);
  if (!text) {
    return { names: null, error: "IND sponsor register" };
  }
  try {
    const parsed = parseIndSponsorHtml(text);
    if (parsed.length < MIN_REGISTER_SIZE) {
      return { names: null, error: "IND sponsor register" };
    }
    const names = new Set(
      parsed.map(normalizeOrgName).filter((name) => name.length >= 2)
    );
    if (names.size < MIN_REGISTER_SIZE) {
      return { names: null, error: "IND sponsor register" };
    }
    return { names, error: null };
  } catch {
    return { names: null, error: "IND sponsor register" };
  }
}
