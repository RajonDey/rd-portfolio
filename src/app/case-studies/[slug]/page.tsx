import { SEO } from "../../../components/SEO";
import Footer from "../../../components/Footer";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "../../../lib/portfolio";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaCalendarAlt,
  FaUsers,
  FaCode,
  FaTrophy,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <SEO
        title={`${caseStudy.title} - Case Study | Rajon Dey`}
        description={caseStudy.description}
        url={`/case-studies/${caseStudy.id}`}
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-textLight mb-6">
                  {caseStudy.subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  {caseStudy.description}
                </p>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <FaCalendarAlt className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">{caseStudy.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-medium">{caseStudy.teamSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCode className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Role</div>
                      <div className="font-medium">{caseStudy.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaTrophy className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Client</div>
                      <div className="font-medium">{caseStudy.client}</div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {caseStudy.links.live && (
                    <a
                      href={caseStudy.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  )}
                  {caseStudy.links.github && (
                    <a
                      href={caseStudy.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  )}
                  {caseStudy.links.demo && (
                    <a
                      href={caseStudy.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaPlay className="mr-2 h-4 w-4" />
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">
                  The Challenge
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6">
                  The Solution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-textDark text-center mb-12">
              Key Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-textDark mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-600">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-textDark text-center mb-12">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-textDark text-center mb-12">
              Development Process
            </h2>
            <div className="space-y-8">
              {caseStudy.process.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-textDark mb-3">
                        {phase.phase}
                      </h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div>
                        <h4 className="font-semibold text-textDark mb-2">
                          Deliverables:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-textDark text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6 flex items-center">
                  <FaLightbulb className="mr-3 h-8 w-8 text-primary" />
                  Challenges
                </h2>
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mr-4 mt-3"></div>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-textDark mb-6 flex items-center">
                  <FaRocket className="mr-3 h-8 w-8 text-primary" />
                  Key Learnings
                </h2>
                <ul className="space-y-4">
                  {caseStudy.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mr-4 mt-3"></div>
                      <span className="text-gray-600">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-textDark text-center mb-8">
              Next Steps
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.nextSteps}
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
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
                href="mailto:rajon.dey.dev@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                Get In Touch
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
