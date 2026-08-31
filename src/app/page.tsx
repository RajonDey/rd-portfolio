import Link from "next/link";
import Footer from "@/components/Footer";
import { experiences } from "@/lib/data";
import {
  getCurrentRoleDateRange,
  getYearsOfExperienceLabel,
} from "@/lib/experience";
import { getHomeEvidenceItems } from "@/lib/selected-work";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_KICKER,
  SITE_NAME,
  SITE_ROLE,
} from "@/lib/site";

export default function Home() {
  const evidence = getHomeEvidenceItems();
  const currentRole = experiences[0];
  const yearsLabel = getYearsOfExperienceLabel();

  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-wider text-textLight mb-4">
              {SITE_KICKER}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-4">
              {SITE_NAME}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-textDark mb-6">
              {SITE_ROLE}
            </p>
            <p className="text-lg text-textLight max-w-3xl mb-8">
              Full-stack. React, Next.js, TypeScript, Node.js, Python.{" "}
              {yearsLabel} in healthcare and SaaS. Also AI and LLM security
              research (IEEE).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors"
              >
                Work
              </Link>
              <Link
                href="/writing"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Writing
              </Link>
            </div>

            <h2 className="text-sm uppercase tracking-wider text-textLight mb-4">
              Selected
            </h2>
            <ul className="divide-y divide-black/10 border-t border-black/10 max-w-3xl mb-16">
              {evidence.map((item) => {
                const titleClass =
                  "text-xl font-bold text-textDark hover:underline underline-offset-4";
                const title = item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={titleClass}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.href} className={titleClass}>
                    {item.title}
                  </Link>
                );

                return (
                  <li key={item.href} className="py-8">
                    {title}
                    <p className="text-textLight mt-2">{item.description}</p>
                  </li>
                );
              })}
            </ul>

            <p className="text-textLight max-w-3xl mb-10">
              {currentRole.title}, {currentRole.company}.{" "}
              {getCurrentRoleDateRange()}.
            </p>

            <h2 className="text-sm uppercase tracking-wider text-textLight mb-4">
              Connect
            </h2>
            <ul className="flex flex-wrap gap-6 text-textDark">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:underline underline-offset-4"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
