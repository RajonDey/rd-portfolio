import { projects, getProjectBySlug } from "@/lib/content/projects";
import MetricPill from "@/components/UI/MetricPill";
import Script from 'next/script';
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Rajon Dey`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: `https://portfolio.rajondey.com/projects/${project.slug}`,
    image: project.image ? `https://portfolio.rajondey.com${project.image}` : undefined,
    about: project.tags?.map(t => t.name),
    genre: project.category,
    identifier: project.slug,
  };

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <Script
        id="project-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/projects" className="text-sm text-primary hover:underline">← Back to Projects</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">{project.name}</h1>
      {project.category && (
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-100 text-gray-600 px-2 py-1 rounded mb-4">
          {project.category}
        </span>
      )}
      <p className="text-textLight mb-6">{project.longDescription || project.description}</p>
      {project.metrics && (
        <section className="mb-8">
          <h2 className="font-semibold mb-2">Key Metrics</h2>
          <div className="flex flex-wrap gap-3">
            {project.metrics.map(m => (
              <MetricPill key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </section>
      )}
      {project.tags?.length ? (
        <section className="mb-8">
          <h2 className="font-semibold mb-2">Stack & Focus</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {project.tags.map(t => (
              <li key={t.name} className="bg-gray-100 px-2 py-1 rounded">{t.name}</li>
            ))}
          </ul>
        </section>
      ) : null}
      <div className="flex gap-4 mt-6">
        {project.liveDemoLink && (
          <a href={project.liveDemoLink} target="_blank" className="text-sm font-medium text-white bg-primary px-4 py-2 rounded hover:bg-accent transition">Live Demo</a>
        )}
        {project.source_code_link && (
          <a href={project.source_code_link} target="_blank" className="text-sm font-medium text-primary border border-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition">Source Code</a>
        )}
      </div>
      {project.confidentiality === 'anonymized' && (
        <p className="mt-10 text-xs text-gray-500">Details intentionally anonymized; metrics and impact summarized without disclosing internal or proprietary information.</p>
      )}
    </main>
  );
}
