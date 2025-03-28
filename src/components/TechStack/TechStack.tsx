import { techStack } from "../../lib/data";
import TechStackTabs from "./TechStackTabs";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Heading and Description - Left Aligned */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-textLight">
            Delivering impactful solutions with advanced technologies. My
            carefully selected tech stack ensures robust, scalable, and
            user-friendly applications.
          </p>
        </div>

        {/* Tabs and Tech Cards */}
        <TechStackTabs techStack={techStack} />
      </div>
    </section>
  );
}
