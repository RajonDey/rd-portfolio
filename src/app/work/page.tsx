import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import { getSelectedWorkEntries } from "@/lib/selected-work";
import { getPageShareMetadata } from "@/lib/site";

const workDescription =
  "Selected work. Healthcare, SaaS, and production web applications.";

export const metadata: Metadata = getPageShareMetadata(
  "/work",
  "Work · Rajon Dey",
  workDescription
);

function isInternalHref(href: string): boolean {
  return href.startsWith("/");
}

export default function WorkPage() {
  const entries = getSelectedWorkEntries();

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
              Work
            </h1>
            <p className="text-lg text-textLight mb-12">
              Production work in healthcare, SaaS, and the web.
            </p>
            <ul className="divide-y divide-black/10 border-t border-black/10">
              {entries.map((entry) => {
                const href = entry.href;
                const title = href ? (
                  isInternalHref(href) ? (
                    <Link
                      href={href}
                      className="text-xl font-bold text-textDark hover:underline underline-offset-4"
                    >
                      {entry.title}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-textDark hover:underline underline-offset-4"
                    >
                      {entry.title}
                    </a>
                  )
                ) : (
                  <span className="text-xl font-bold text-textDark">
                    {entry.title}
                  </span>
                );

                return (
                  <li key={entry.id} className="py-8">
                    {title}
                    <p className="text-textLight mt-2 max-w-3xl">
                      {entry.subtitle || entry.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
