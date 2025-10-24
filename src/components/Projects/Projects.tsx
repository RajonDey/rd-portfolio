import {
  projects,
  getCaseStudySlugForProjectTitle,
  getProjectDetailSlugForTitle,
} from "../../lib/portfolio";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-textDark max-w-2xl mx-auto">
            A selection of my most impactful projects, demonstrating technical
            expertise, leadership, and real-world business value.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Projects - IELTS Platform */}
          {projects
            .filter((project) => project.name === "Online IELTS Test Platform")
            .map((project) => {
              const caseStudySlug = getCaseStudySlugForProjectTitle(
                project.name
              );
              const detailSlug = getProjectDetailSlugForTitle(project.name);
              return (
                <ProjectCard
                  key={project.name}
                  project={project}
                  caseStudySlug={caseStudySlug}
                  detailSlug={detailSlug}
                />
              );
            })}

          {/* Featured Projects - ClipKit */}
          {projects
            .filter(
              (project) =>
                project.name === "ClipKit - SaaS Content Creation Platform"
            )
            .map((project) => {
              const caseStudySlug = getCaseStudySlugForProjectTitle(
                project.name
              );
              const detailSlug = getProjectDetailSlugForTitle(project.name);
              return (
                <ProjectCard
                  key={project.name}
                  project={project}
                  caseStudySlug={caseStudySlug}
                  detailSlug={detailSlug}
                />
              );
            })}

          {/* Featured Case Study - DXP Neutrogena */}
          <ProjectCard
            key="dxp-neutrogena-migration"
            project={{
              name: "DXP – Neutrogena Migration to Headless CMS",
              description:
                "Led the migration of Neutrogena's website to Contentful headless CMS as part of Kenvue's global DXP initiative, managing a cross-functional team and ensuring brand compliance.",
              tags: [
                { name: "Contentful", color: "blue-text-gradient" },
                { name: "Headless CMS", color: "green-text-gradient" },
                { name: "Team Leadership", color: "pink-text-gradient" },
                { name: "Enterprise Integration", color: "blue-text-gradient" },
              ],
              image: "/images/portfolios/Neutrogena.png",
              source_code_link: "#",
              liveDemoLink: "https://www.neutrogena.com/",
              featured: true,
            }}
            caseStudySlug="dxp-neutrogena-migration"
            detailSlug={undefined}
          />
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
