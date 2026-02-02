import { SEO } from "../../components/SEO";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import { redirect } from "next/navigation";
import { caseStudies } from "../../lib/portfolio";
import {
  FaArrowRight,
  FaCode,
  FaUsers,
  FaRocket,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function CaseStudiesPage() {
  // Redirect list page to unified Projects page
  redirect("/projects");
  return (
    <>
      <SEO
        title="Case Studies | Rajon Dey - Senior Software Engineer"
        description="Explore detailed case studies of my software development projects, including web applications, performance optimizations, and data visualization solutions."
        url="/case-studies"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-textLight max-w-3xl mx-auto mb-8">
                Detailed exploration of my software development projects,
                showcasing problem-solving approaches, technical
                implementations, and measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/2">
                      <div className="aspect-video md:h-full">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {study.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-textDark mb-3">
                        {study.title}
                      </h2>
                      <p className="text-lg text-textLight mb-4">
                        {study.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6">{study.description}</p>

                      {/* Project Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                          <FaCalendarAlt className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm text-gray-600">
                            {study.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FaUsers className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm text-gray-600">
                            {study.teamSize}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FaCode className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm text-gray-600">
                            {study.role}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FaRocket className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm text-gray-600">
                            {study.client}
                          </span>
                        </div>
                      </div>

                      {/* Key Results */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-textDark mb-2">
                          Key Results:
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {study.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="text-sm">
                              <span className="font-semibold text-primary">
                                {result.value}
                              </span>
                              <span className="text-gray-600 ml-1">
                                {result.metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-textDark mb-2">
                          Technologies:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.slice(0, 4).map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {study.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{study.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/case-studies/${study.id}`}
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
                        >
                          Read Case Study
                          <FaArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        {study.links.live && (
                          <a
                            href={study.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                            View Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              I&apos;m passionate about creating impactful solutions and would
              love to discuss how I can help with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@rajondey.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://www.rajondey.com/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Download My CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
