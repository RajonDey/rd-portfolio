import type { Metadata } from "next";
import Footer from "@/components/Footer";
import {
  ABOUT_INTRO_P1,
  ABOUT_LOCATION,
  ABOUT_STACK,
  getAboutIntroP2,
} from "@/lib/about";
import { experiences } from "@/lib/data";
import {
  CONTACT_EMAIL,
  CV_URL,
  FRONTEND_CV_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_ROLE,
  getPageShareMetadata,
  getSiteDescription,
} from "@/lib/site";

export const metadata: Metadata = getPageShareMetadata(
  "/about",
  "About · Rajon Dey",
  getSiteDescription()
);

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
              About
            </h1>
            <p className="text-xl text-textLight mb-8">{SITE_ROLE}</p>
            <div className="max-w-3xl space-y-6 text-lg text-textLight">
              <p>{ABOUT_INTRO_P1}</p>
              <p>{getAboutIntroP2()}</p>
            </div>

            <div className="max-w-3xl mt-16">
              <h2 className="text-2xl font-bold text-textDark mb-6">
                Experience
              </h2>
              <ul className="divide-y divide-black/10 border-t border-black/10">
                {experiences.map((role) => (
                  <li key={`${role.company}-${role.title}`} className="py-8">
                    <p className="text-xl font-bold text-textDark">
                      {role.title}
                    </p>
                    <p className="text-textLight mt-2">
                      {role.company}. {role.date}.
                    </p>
                    <ul className="mt-4 space-y-2 text-textLight list-disc pl-5">
                      {role.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-3xl mt-16">
              <h2 className="text-2xl font-bold text-textDark mb-4">Stack</h2>
              <p className="text-lg text-textLight">{ABOUT_STACK}</p>
            </div>

            <div className="max-w-3xl mt-16">
              <h2 className="text-2xl font-bold text-textDark mb-4">
                Location
              </h2>
              <p className="text-lg text-textLight">{ABOUT_LOCATION}</p>
            </div>

            <div className="max-w-3xl mt-10">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors"
              >
                CV
              </a>
              <ul className="flex flex-wrap gap-6 mt-6 text-textDark">
                <li>
                  <a
                    href={FRONTEND_CV_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    Frontend CV
                  </a>
                </li>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
