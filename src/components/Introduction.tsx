import ExpertiseCard from "./ExpertiseCard";
import Link from "next/link";
import { FaCode } from "react-icons/fa";


export default function Introduction() {
  const expertiseAreas = [
    {
      title: "HTML Email Developer",
      icon: "Mail",
      image: "/images/email-dev.png", // Add image path
    },
    {
      title: "UI/UX Developer",
      icon: "PenTool",
      image: "/images/ui-ux-dev.png", // Add image path
    },
    {
      title: "React & NextJs Developer",
      icon: "Code",
      image: "/images/react-dev.png", // Add image path
    },
    {
      title: "CMS Web Developer",
      icon: "Layout",
      image: "/images/cms-dev.png", // Add image path
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
            As a software developer, I gain a range of experience in TypeScript
            and JavaScript, with a particular focus on React, NextJs, Node.js,
            and Three.js frameworks. My ability to rapidly acquire new skills,
            coupled with my commitment to collaborative problem-solving, allows
            me to create efficient, scalable, and user-friendly software
            solutions that address real-world challenges.
          </p>
          <p className="text-lg text-textLight mb-6">
            In addition to my technical skills, I have a passion for creating
            websites using both Headless CMS and popular platforms such as
            WordPress, Wix, Squarespace, and Shopify. My goal is to transform
            your ideas into reality, crafting digital experiences that are not
            only functional but also engaging and easy to navigate.
          </p>
          <p className="text-lg font-semibold text-textDark mb-6">
            Let’s collaborate to bring your vision to life!
          </p>
          {/* CTA Button */}
          <Link
            href="https://development.rajondey.com"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="h-5 w-5" />
            <span>Check My Development Services</span>
          </Link>
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
