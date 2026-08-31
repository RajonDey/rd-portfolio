import { EXCLUDED_LOCATION_PATTERNS } from "./rules";

const KEEP_LOCATION =
  /\b(germany|deutschland|berlin|munich|m[uü]nchen|hamburg|netherlands|nederland|holland|amsterdam|rotterdam|canada|toronto|vancouver|montreal|remote|europe)\b/i;

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
