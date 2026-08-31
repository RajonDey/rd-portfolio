import "./globals.css";
import SchemaOrg from "./SchemaOrg";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { Metadata } from "next";
import MainNavigation from "../components/MainNavigation";
import {
  SITE_ORIGIN,
  SITE_TITLE,
  getPageShareMetadata,
  getSiteDescription,
} from "@/lib/site";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const siteDescription = getSiteDescription();

export const metadata: Metadata = {
  ...getPageShareMetadata("/", SITE_TITLE, siteDescription),
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_ORIGIN),
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} ${plexSans.className} flex flex-col min-h-screen`}
      >
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
