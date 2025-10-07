import ExpertiseCard from "./ExpertiseCard";
import { FaCode } from "react-icons/fa";

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
      image: "/images/sj-innovation.png",
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
            As a Software Developer and Module Lead with 5+ years of experience,
            I specialize in building scalable web applications using React,
            Next.js, and full-stack technologies. I lead a team of 8+ developers
            at SJ Innovation, where we&apos;ve delivered 100+ websites and SaaS
            platforms serving 100K+ monthly users.
          </p>
          <p className="text-lg text-textLight mb-4">
            My expertise spans performance optimization (30% faster load times,
            40% higher Lighthouse scores), team leadership, and mentoring.
            I&apos;ve architected 15+ MERN-stack applications handling 5K+ daily
            active users and introduced CI/CD pipelines that cut deployment time
            by 60%.
          </p>
          <p className="text-lg text-textLight mb-6">
            Beyond client work, I actively build products like ClipKit (SaaS
            platform) and contribute to AI security research. I&apos;m
            passionate about creating solutions that balance technical
            excellence with real business impact.
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
