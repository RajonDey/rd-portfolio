import { SEO } from "../../components/SEO";
import ProjectCard from "../../components/Projects/ProjectCard";
import Footer from "../../components/Footer";
import {
  projects,
  getFeaturedPortfolioEntries,
  getPortfolioFilterOptions,
  getAllPortfolioEntries,
  PortfolioEntryViewModel,
  getProjectDetailSlugForTitle,
  getCaseStudySlugForProjectTitle,
} from "../../lib/portfolio";
import FeaturedSlider from "../../components/Projects/FeaturedSlider";
import FiltersBar from "../../components/Projects/FiltersBar";

// Removed legacy category blocks; using unified filtering below

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const q = (params?.q as string) || "";
  const type = (params?.type as string) || ""; // "case-study" | "project"
  const category = (params?.category as string) || ""; // curated
  const sort = (params?.sort as string) || "impact";

  // Map curated categories to predicate
  const matchesCategory = (entry: PortfolioEntryViewModel): boolean => {
    if (!category) return true;
    const tags = entry.tags.map((t) => t.toLowerCase());
    const title = entry.title.toLowerCase();
    const desc = entry.description.toLowerCase();

    if (category === "email-templates") {
      return (
        tags.includes("email") ||
        tags.includes("email marketing") ||
        title.includes("email") ||
        desc.includes("email")
      );
    }
    if (category === "landing-page") {
      return title.includes("landing") || desc.includes("landing");
    }
    if (category === "websites") {
      return (
        tags.includes("wordpress") ||
        tags.includes("headless cms") ||
        title.includes("website")
      );
    }
    if (category === "web-applications") {
      // Default bucket for app-like work
      return !(
        // exclude other categories
        (
          tags.includes("email") ||
          tags.includes("email marketing") ||
          title.includes("email") ||
          title.includes("website")
        )
      );
    }
    return true;
  };

  const matchesType = (entry: PortfolioEntryViewModel): boolean => {
    if (!type) return true;
    return entry.type === type;
  };

  const matchesQuery = (entry: PortfolioEntryViewModel): boolean => {
    if (!q) return true;
    const hay = (
      entry.title +
      " " +
      (entry.subtitle || "") +
      " " +
      entry.description +
      " " +
      entry.tags.join(" ")
    ).toLowerCase();
    return hay.includes(q.toLowerCase());
  };

  const sortEntries = (
    a: PortfolioEntryViewModel,
    b: PortfolioEntryViewModel
  ) => {
    if (sort === "impact") return b.impactScore - a.impactScore;
    if (sort === "title") return a.title.localeCompare(b.title);
    // newest fallback: not having date, keep stable by impact then title
    return b.impactScore - a.impactScore || a.title.localeCompare(b.title);
  };

  const filteredEntries = getAllPortfolioEntries()
    .filter(matchesType)
    .filter(matchesCategory)
    .filter(matchesQuery)
    .sort(sortEntries);
  return (
    <>
      <SEO
        title="Projects - Rajon Dey | Software Developer Portfolio"
        description="Explore Rajon Dey's software development projects including web applications, landing pages, and full-stack solutions."
        url="/projects"
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
                My Projects
              </h1>
              <p className="text-xl text-textLight max-w-3xl mx-auto">
                A showcase of my work across different domains - from full-stack
                web applications to responsive landing pages and email
                templates. Each project demonstrates my technical expertise and
                problem-solving approach.
              </p>
            </div>
          </div>
        </section>

        {/* Hero + Featured */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-textDark">
                Projects & Case Studies
              </h2>
              <p className="text-lg text-textLight max-w-3xl mx-auto mt-2">
                Outcome-driven work across web apps, performance, AI, and UX.
                Filter, sort, and explore.
              </p>
            </div>
            <FeaturedSlider items={getFeaturedPortfolioEntries(4)} />
          </div>
        </section>

        {/* Filters and All Work */}
        <section id="case-studies" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FiltersBar {...getPortfolioFilterOptions()} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredEntries.map((entry) => {
                if (entry.type === "project") {
                  const p = projects.find((x) => entry.title === x.name);
                  const slug = getProjectDetailSlugForTitle(entry.title);
                  const caseStudySlug = getCaseStudySlugForProjectTitle(
                    entry.title
                  );
                  return p ? (
                    <ProjectCard
                      key={entry.id}
                      project={p}
                      detailSlug={slug}
                      caseStudySlug={caseStudySlug}
                    />
                  ) : null;
                }
                return (
                  <a
                    key={entry.id}
                    href={entry.href}
                    className="block rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="text-xs text-primary font-semibold mb-2">
                      Case Study
                    </div>
                    <div className="text-lg font-bold text-textDark">
                      {entry.title}
                    </div>
                    {entry.subtitle && (
                      <div className="text-sm text-textLight mt-1">
                        {entry.subtitle}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {entry.primaryTags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded bg-gray-100 text-xs text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mt-3 line-clamp-3">
                      {entry.description}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-textDark mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-textLight mb-8">
              I&apos;m always excited to take on new challenges and create
              innovative solutions. Let&apos;s discuss how I can help bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.rajondey.com/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                Download My CV
              </a>
              <a
                href="mailto:contact@rajondey.com"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
