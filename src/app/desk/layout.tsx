import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { DESK_TITLE } from "@/lib/desk/copy";
import { getDeskPassword, isDeskEnabled } from "@/lib/desk/access";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: DESK_TITLE,
  robots: { index: false, follow: false },
};

export default function DeskLayout({ children }: { children: ReactNode }) {
  if (!isDeskEnabled() || !getDeskPassword()) {
    notFound();
  }

  return children;
}
