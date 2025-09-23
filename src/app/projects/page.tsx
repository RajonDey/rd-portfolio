import { SEO } from "../../components/SEO";
import ProjectCard from "../../components/Projects/ProjectCard";
import Footer from "../../components/Footer";
import { projects } from "../../lib/data";
import { FaCode, FaGlobe, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const projectCategories = [
  {
    name: "Web Applications",
    icon: FaLaptopCode,
    description: "Full-stack applications and SaaS platforms",
    projects: projects.filter((p) =>
      p.tags.some((tag) =>
        ["react", "nextjs", "node", "mongodb", "postgresql"].includes(
          tag.name.toLowerCase()
        )
      )
    ),
  },
  {
    name: "Landing Pages",
    icon: FaGlobe,
    description: "High-converting marketing and product pages",
    projects: projects.filter((p) =>
      p.tags.some((tag) =>
        ["html", "css", "tailwind", "wordpress"].includes(
          tag.name.toLowerCase()
        )
      )
    ),
  },
  {
    name: "Email Templates",
    icon: FaEnvelope,
    description: "Responsive HTML email designs",
    projects: projects.filter((p) =>
      p.tags.some((tag) =>
        ["html", "css", "email"].includes(tag.name.toLowerCase())
      )
    ),
  },
  {
    name: "All Projects",
    icon: FaCode,
    description: "Complete portfolio showcase",
    projects: projects,
  },
];

export default function ProjectsPage() {
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

        {/* Project Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projectCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-textDark">
                          {category.name}
                        </h2>
                        <p className="text-textLight">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {category.projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-textLight">
                        No projects in this category yet.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
