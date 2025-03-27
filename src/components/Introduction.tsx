import ExpertiseCard from "./ExpertiseCard";

export default function Introduction() {
  const expertiseAreas = [
    {
      title: "HTML Email Developer",
      icon: "Mail",
    },
    {
      title: "UI/UX Developer",
      icon: "PenTool",
    },
    {
      title: "React & NextJs Developer",
      icon: "Code",
    },
    {
      title: "CMS Web Developer",
      icon: "Layout",
    },
  ];

  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-textLight uppercase tracking-wide">
            Introduction
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-6">
            At a Glance.
          </h2>
          <p className="text-lg text-textLight max-w-3xl mx-auto mb-4">
            As a software developer, I gain a range of experience in TypeScript
            and JavaScript, with a particular focus on React, NextJs, Node.js,
            and Three.js frameworks. My ability to rapidly acquire new skills,
            coupled with my commitment to collaborative problem-solving, allows
            me to create efficient, scalable, and user-friendly software
            solutions that address real-world challenges.
          </p>
          <p className="text-lg text-textLight max-w-3xl mx-auto mb-6">
            In addition to my technical skills, I have a passion for creating
            websites using both Headless CMS and popular platforms such as
            WordPress, Wix, Squarespace, and Shopify. My goal is to transform
            your ideas into reality, crafting digital experiences that are not
            only functional but also engaging and easy to navigate.
          </p>
          <p className="text-lg font-semibold text-textDark">
            Let’s collaborate to bring your vision to life!
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area) => (
            <ExpertiseCard
              key={area.title}
              title={area.title}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
