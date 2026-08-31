import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import { getPageShareMetadata } from "@/lib/site";
import {
  getWritingItems,
  WRITING_INTRO,
  WRITING_NEWSLETTER_NAME,
  WRITING_NEWSLETTER_PREFIX,
  WRITING_NEWSLETTER_URL,
} from "@/lib/writing";

export const metadata: Metadata = getPageShareMetadata(
  "/writing",
  "Writing · Rajon Dey",
  "IEEE research on LLM security, and one manuscript under review. Writing by Rajon Dey."
);

const titleClass = "text-xl font-bold text-textDark";

export default function WritingPage() {
  const items = getWritingItems();

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
              Writing
            </h1>
            <p className="text-lg text-textLight mb-12">{WRITING_INTRO}</p>
            <ul className="divide-y divide-black/10 border-t border-black/10 max-w-3xl">
              {items.map((item) => {
                const title = item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${titleClass} hover:underline underline-offset-4`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <p className={titleClass}>{item.title}</p>
                );

                return (
                  <li key={item.href ?? item.title} className="py-8">
                    {title}
                    <p className="text-textLight mt-2">{item.venue}</p>
                    <p className="text-textLight mt-2">{item.summary}</p>
                    {item.extraLinks.length > 0 && (
                      <ul className="flex flex-wrap gap-6 mt-4 text-textDark">
                        {item.extraLinks.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline underline-offset-4"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="text-textLight max-w-3xl mt-12">
              {WRITING_NEWSLETTER_PREFIX}{" "}
              <a
                href={WRITING_NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textDark hover:underline underline-offset-4"
              >
                {WRITING_NEWSLETTER_NAME}
              </a>
              .
            </p>
          </div>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
