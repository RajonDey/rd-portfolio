import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import { getPageShareMetadata } from "@/lib/site";
import { getWritingItems, WRITING_INTRO } from "@/lib/writing";

export const metadata: Metadata = getPageShareMetadata(
  "/writing",
  "Writing · Rajon Dey",
  "IEEE research on LLM security. Writing by Rajon Dey."
);

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
              {items.map((item) => (
                <li key={item.href} className="py-8">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-textDark hover:underline underline-offset-4"
                  >
                    {item.title}
                  </a>
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
              ))}
            </ul>
          </div>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
