import { EXCLUDED_LOCATION_PATTERNS, hasRelocationVisaSignal } from "./rules";

const KEEP_LOCATION =
  /\b(germany|deutschland|berlin|munich|m[uü]nchen|hamburg|netherlands|nederland|holland|amsterdam|rotterdam|canada|toronto|vancouver|montreal|remote|europe|singapore|bangladesh|dhaka|sylhet)\b/i;

const NL_LOCATION =
  /\b(netherlands|nederland|holland|amsterdam|rotterdam|utrecht|eindhoven|hague|den haag|remote[-\s]?nl)\b/i;

const PRIMARY_GEO =
  /\b(germany|deutschland|berlin|munich|m[uü]nchen|hamburg|netherlands|nederland|holland|amsterdam|rotterdam|canada|toronto|vancouver|montreal|europe|remote[-\s]?de|remote[-\s]?nl|remote[-\s]?ca)\b/i;

const OVERFLOW_GEO =
  /\b(singapore|bangladesh|dhaka|sylhet|chittagong|remote[-\s]?sg|remote[-\s]?bd)\b/i;

export function isNetherlandsJob(location: string, title = ""): boolean {
  return NL_LOCATION.test(`${location} ${title}`);
}

export function isOverflowGeoJob(location: string, title = ""): boolean {
  const text = `${location} ${title}`;
  if (!OVERFLOW_GEO.test(text)) {
    return false;
  }
  return !PRIMARY_GEO.test(text);
}

const OVERLAY_GEO =
  /\b(germany|deutschland|berlin|munich|m[uü]nchen|hamburg|netherlands|nederland|holland|amsterdam|rotterdam|utrecht|eindhoven|canada|toronto|vancouver|montreal|europe|\beu\b|\beea\b|remote[-\s]?de|remote[-\s]?nl|remote[-\s]?ca)\b/i;

/** Remotive / HN prefilter: overlay geo or visa language. Not Remote/Worldwide alone. */
export function overlayGeoOrVisaAllowed(
  location: string,
  description: string,
  title = ""
): boolean {
  const text = `${location} ${title} ${description}`;
  return OVERLAY_GEO.test(text) || hasRelocationVisaSignal(text);
}

export function discoveryLocationAllowed(
  location: string,
  remote: boolean,
  title = ""
): boolean {
  const text = `${location} ${title}`;
  if (EXCLUDED_LOCATION_PATTERNS.some((pattern) => pattern.test(text))) {
    return false;
  }
  if (remote) {
    return true;
  }
  if (!location.trim()) {
    return true;
  }
  return KEEP_LOCATION.test(location);
}
