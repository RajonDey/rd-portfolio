import { projects } from "@/lib/content/projects";
import MetricPill from "@/components/UI/MetricPill";
import Link from "next/link";

export const metadata = {
  title: "Projects | Rajon Dey",
  description: "Selected side, employer, and freelance project highlights.",
};

export default function ProjectsIndexPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p className="text-textLight mb-10 max-w-2xl">
        A concise selection spanning side initiatives, anonymized employer impact,
        and aggregate freelance deliveries. Real content & deeper case studies will
        replace these placeholders.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group border rounded-lg p-5 hover:shadow transition bg-white/60 backdrop-blur"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold group-hover:text-primary transition">{p.name}</h2>
              {p.category && (
                <span className="text-xs uppercase tracking-wide px-2 py-1 rounded bg-gray-100 text-gray-600">
                  {p.category}
                </span>
              )}
            </div>
            <p className="text-sm text-textLight mb-4 line-clamp-3">{p.description}</p>
            {p.metrics && (
              <div className="flex flex-wrap gap-2">
                {p.metrics.slice(0,3).map(m => (
                  <MetricPill key={m.label} label={m.label} value={m.value} />
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
