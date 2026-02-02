import ExpertiseCard from "./ExpertiseCard";
import { FaCode } from "react-icons/fa";
import { getYearsOfExperienceLabel } from "@/lib/experience";

export default function Introduction() {
  const expertiseAreas = [
    {
      title: "Full-Stack Development",
      icon: "Code",
      image: "/images/react-dev.png",
    },
    {
      title: "Team Leadership",
      icon: "Users",
      image: "/images/team-building.png",
    },
    {
      title: "Performance Optimization",
      icon: "Zap",
      image: "/images/ui-ux-dev.png",
    },
    {
      title: "SaaS & Web Applications",
      icon: "Globe",
      image: "/images/cms-dev.png",
    },
  ];

  return (
    <section id="introduction" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading - Left Aligned */}
        <div className="text-left mb-12">
          <h3 className="text-lg font-semibold text-textLight uppercase tracking-wide">
            Introduction
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-6">
            At a Glance.
          </h2>
          <p className="text-lg text-textLight mb-4">
            As a Module Lead (Frontend) and Senior Software Engineer with {getYearsOfExperienceLabel()} of experience,
            I build and maintain production-grade web applications for global clients using React,
            Next.js, and TypeScript. I own frontend architecture, mentor developers, and contribute
            to backend APIs and integrations with Node.js and Python (FastAPI), working in agile,
            cross-functional teams on enterprise and regulated platforms.
          </p>
          <p className="text-lg text-textLight mb-4">
            My work includes performance optimization (~30% load-time reduction on production systems),
            CI/CD with GitHub Actions, technical discovery and estimation, and mentoring through
            code reviews and sprint execution. I&apos;m experienced in API design, authentication,
            and feature integration across frontend and full-stack delivery.
          </p>
          <p className="text-lg text-textLight mb-6">
            Beyond client work, I build products like Online IELTS Exam Platform, also contribute to
            AI security research. I&apos;m passionate about solutions that balance technical
            excellence with real business impact. Seeking remote-first or relocation-ready roles
            where strong frontend ownership and growing full-stack capability are valued.
          </p>
          <p className="text-lg font-semibold text-textDark mb-6">
            Ready to discuss how I can contribute to your team&apos;s success!
          </p>
          {/* CTA Button */}
          <a
            href="https://www.rajondey.com/cv.pdf"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="h-5 w-5" />
            <span>Download My CV</span>
          </a>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area) => (
            <ExpertiseCard
              key={area.title}
              title={area.title}
              image={area.image} // Pass the image instead of icon
            />
          ))}
        </div>
      </div>
    </section>
  );
}
