import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const DESK_COOKIE_NAME = "desk_session";

const DESK_HMAC_MESSAGE = "rd-desk";

export function isDeskEnabled(): boolean {
  return process.env.NODE_ENV === "development";
}

export function getDeskPassword(): string | undefined {
  const password = process.env.DESK_PASSWORD;
  if (!password) {
    return undefined;
  }
  return password;
}

export function expectedDeskToken(password: string): string {
  return createHmac("sha256", password).update(DESK_HMAC_MESSAGE).digest("hex");
}

export function tokensMatch(left: string, right: string): boolean {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(a, b);
}

export function isValidDeskPassword(candidate: string): boolean {
  const password = getDeskPassword();
  if (!password) {
    return false;
  }
  return tokensMatch(expectedDeskToken(candidate), expectedDeskToken(password));
}

export async function hasDeskSession(): Promise<boolean> {
  const password = getDeskPassword();
  if (!password) {
    return false;
  }
  const jar = await cookies();
  const token = jar.get(DESK_COOKIE_NAME)?.value;
  if (!token) {
    return false;
  }
  return tokensMatch(token, expectedDeskToken(password));
}
