import { projects } from "../../lib/portfolio";
import ProjectCard from "./ProjectCard";

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
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
