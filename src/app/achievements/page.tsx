import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { getAchievementItems } from "@/lib/certificates";
import { getPageShareMetadata } from "@/lib/site";

export const metadata: Metadata = getPageShareMetadata(
  "/achievements",
  "Achievements · Rajon Dey",
  "Awards and certificates. Rajon Dey."
);

export default function AchievementsPage() {
  const items = getAchievementItems();

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
              Achievements
            </h1>
            <p className="text-lg text-textLight mb-12">
              Awards and certificates.
            </p>
            <ul className="divide-y divide-black/10 border-t border-black/10 max-w-3xl">
              {items.map((item) => {
                const href = item.pdfUrl || item.image;
                return (
                  <li key={item.id} className="py-8">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-textDark hover:underline underline-offset-4"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <p className="text-xl font-bold text-textDark">
                        {item.title}
                      </p>
                    )}
                    <p className="text-textLight mt-2">
                      {item.issuer}. {item.date}.
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
