import { techStack } from "../../lib/data";
import TechStackTabs from "./TechStackTabs";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-textLight max-w-2xl mx-auto">
            Crafting elegant solutions with cutting-edge technologies. My
            toolkit is carefully curated to build performant, scalable, and
            maintainable applications.
          </p>
        </div>

        {/* Tabs and Tech Cards */}
        <TechStackTabs techStack={techStack} />
      </div>
    </section>
  );
}
