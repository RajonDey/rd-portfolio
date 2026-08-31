import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import {
  SITE_KICKER,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_ROLE,
  SITE_TITLE,
} from "@/lib/site";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const PAPER = "#F4F1EA";
const INK = "#1C1917";
const MUTED = "#57534E";
const HAIRLINE = "rgba(28, 25, 23, 0.12)";

async function loadOgFonts() {
  const dir = join(process.cwd(), "src/app/og-fonts");
  const [serif, sans, mono] = await Promise.all([
    readFile(join(dir, "IBMPlexSerif-Bold.ttf")),
    readFile(join(dir, "IBMPlexSans-SemiBold.ttf")),
    readFile(join(dir, "IBMPlexMono-Medium.ttf")),
  ]);

  return [
    { name: "IBM Plex Serif", data: serif, weight: 700 as const, style: "normal" as const },
    { name: "IBM Plex Sans", data: sans, weight: 600 as const, style: "normal" as const },
    { name: "IBM Plex Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

export default async function Image() {
  const fonts = await loadOgFonts();
  const host = SITE_ORIGIN.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: PAPER,
          padding: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            border: `1px solid ${HAIRLINE}`,
            padding: "52px 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 56,
                height: 56,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: INK,
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: PAPER,
                  fontSize: 22,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                RD
              </div>
            </div>
            <div
              style={{
                display: "flex",
                color: MUTED,
                fontSize: 22,
                fontFamily: "IBM Plex Sans",
                fontWeight: 600,
              }}
            >
              {host}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 64,
            }}
          >
            <div
              style={{
                display: "flex",
                color: MUTED,
                fontSize: 20,
                fontFamily: "IBM Plex Mono",
                fontWeight: 500,
                letterSpacing: 4,
              }}
            >
              {SITE_KICKER}
            </div>
            <div
              style={{
                display: "flex",
                color: INK,
                fontSize: 84,
                fontFamily: "IBM Plex Serif",
                fontWeight: 700,
                letterSpacing: -1.5,
                marginTop: 14,
                lineHeight: 1.05,
              }}
            >
              {SITE_NAME}
            </div>
            <div
              style={{
                display: "flex",
                color: INK,
                fontSize: 34,
                fontFamily: "IBM Plex Sans",
                fontWeight: 600,
                marginTop: 10,
              }}
            >
              {SITE_ROLE}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 1,
                backgroundColor: HAIRLINE,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: INK,
                  color: PAPER,
                  borderRadius: 999,
                  padding: "14px 36px",
                  fontSize: 22,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 600,
                  marginRight: 16,
                }}
              >
                Work
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${INK}`,
                  color: INK,
                  borderRadius: 999,
                  padding: "12px 34px",
                  fontSize: 22,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 600,
                }}
              >
                Writing
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
