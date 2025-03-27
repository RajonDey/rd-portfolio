import "./globals.css";
import { Roboto } from "next/font/google";

// Define Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Rajon Dey - Software Developer Portfolio",
  description:
    "Portfolio of Rajon Dey, a software developer specializing in modern web development, music, and more.",
  openGraph: {
    url: "https://portfolio.rajondey.com",
    title: "Rajon Dey - Software Developer Portfolio",
    description:
      "Portfolio of Rajon Dey, a software developer specializing in modern web development, music, and more.",
    images: [
      {
        url: "https://portfolio.rajondey.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajon Dey Portfolio",
      },
    ],
    siteName: "Rajon Dey Portfolio",
  },
  twitter: {
    handle: "@rajondey",
    site: "@rajondey",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
