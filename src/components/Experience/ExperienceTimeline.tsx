"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../../types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  // Animation variants for each timeline element
  const elementVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Calculate x based on index
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Map companies to logos with animation
  const companyIcons: { [key: string]: React.ReactNode } = {
    "SJ Innovation LLC": (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Image
          src="/images/sj-innovation.png"
          alt="SJ Innovation LLC"
          width={24}
          height={24}
          className="object-contain"
        />
      </motion.div>
    ),
    "Fiverr & PPH": (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Image
          src="/images/fiverr-pph.png"
          alt="Fiverr & PPH"
          width={24}
          height={24}
          className="object-contain"
        />
      </motion.div>
    ),
  };

  return (
    <VerticalTimeline lineColor="#E2E8F0">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index} // Pass the index to the variants
        >
          <VerticalTimelineElement
            contentStyle={{
              background: "white",
              color: "#1A202C",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date={exp.date}
            dateClassName="text-textDark font-medium text-lg"
            iconStyle={{
              background: index === 0 ? "#61b134" : "#5873b7",
              color: "#fff",
              boxShadow:
                "0 0 0 4px #E2E8F0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-20px",
            }}
            icon={companyIcons[exp.company]}
            position={index % 2 === 0 ? "right" : "left"}
          >
            <h3 className="text-xl font-bold text-textDark">{exp.title}</h3>
            <h4 className="text-lg font-semibold text-primary">
              {exp.company}
            </h4>
            <ul className="mt-4 space-y-2 list-disc list-inside text-textLight">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </motion.div>
      ))}
    </VerticalTimeline>
  );
}
