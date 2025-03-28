import "./globals.css";
import SchemaOrg from "./SchemaOrg";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

// Define Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Rajon Dey - Software Developer Portfolio | React, Next.js, Full-Stack Projects",
  description:
    "Explore Rajon Dey's software development portfolio, showcasing expertise in React, Next.js, and full-stack development. Discover projects, skills, and experience.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://portfolio.rajondey.com"), // Added metadataBase
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.rajondey.com",
    siteName: "Rajon Dey - Software Developer Portfolio",
    title:
      "Rajon Dey - Software Developer Portfolio | React, Next.js, Full-Stack Projects",
    description:
      "Explore Rajon Dey's software development portfolio, showcasing expertise in React, Next.js, and full-stack development. Discover projects, skills, and experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajon Dey - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajon Dey - Software Developer Portfolio | React, Next.js, Full-Stack Projects",
    description:
      "Explore Rajon Dey's software development portfolio, showcasing expertise in React, Next.js, and full-stack development. Discover projects, skills, and experience.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192x192.png" },
      { url: "/icon-512x512.png", sizes: "512x512" },
    ],
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
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
