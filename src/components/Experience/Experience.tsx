import { experiences } from "../../lib/data";
import { getCurrentRoleDateRange } from "../../lib/experience";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-2">
            What I Have Done So Far
          </h2>
          <p className="text-lg text-textDark">Work Experience.</p>
        </div>

        {/* Timeline */}
        <ExperienceTimeline
          experiences={experiences}
          currentRoleDateRange={getCurrentRoleDateRange()}
        />
      </div>
    </section>
  );
}
