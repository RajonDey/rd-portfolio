import { SEO } from "../../../components/SEO";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectDetailBySlug,
  getAllProjectDetailSlugs,
} from "../../../lib/portfolio";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const detail = getProjectDetailBySlug(slug);
  if (!detail) notFound();

  return (
    <>
      <SEO
        title={`${detail.title} | Project Detail`}
        description={detail.overview || "Project detail"}
        url={`/projects/${detail.slug}`}
      />
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/projects" className="text-primary hover:text-accent">
              ← Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-textDark mt-4">
              {detail.title}
            </h1>
            <p className="text-textLight mt-2 max-w-3xl">{detail.overview}</p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {detail.role && (
                <div>
                  <div className="text-sm text-gray-500">Role</div>
                  <div className="font-medium">{detail.role}</div>
                </div>
              )}
              {detail.team && (
                <div>
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-medium">{detail.team}</div>
                </div>
              )}
              {detail.duration && (
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">{detail.duration}</div>
                </div>
              )}
              {detail.company && (
                <div>
                  <div className="text-sm text-gray-500">Company</div>
                  <div className="font-medium">{detail.company}</div>
                </div>
              )}
            </div>

            {detail.contributions && detail.contributions.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-textDark mb-3">
                  My Contribution
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {detail.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail.highlights && detail.highlights.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-textDark mb-3">
                  Key Highlights
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {detail.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail.impact && detail.impact.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-textDark mb-3">
                  Impact
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {detail.impact.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail.techStack && detail.techStack.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-textDark mb-3">
                  Tech Stack / Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {detail.links && detail.links.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-textDark mb-3">
                  References
                </h2>
                <div className="flex flex-wrap gap-3">
                  {detail.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllProjectDetailSlugs();
  return slugs.map((slug) => ({ slug }));
}
