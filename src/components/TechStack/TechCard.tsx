"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiFlutter,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiAmazon, // Changed from SiAmazonaws to SiAmazon
  SiJest,
  SiCypress,
  SiPhp,
} from "react-icons/si";

interface TechCardProps {
  name: string;
  icon: keyof typeof iconMap;
}

// Map icon strings to their corresponding components
export const iconMap = {
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  FaJsSquare,
  SiTypescript,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  SiMongodb,
  FaGitAlt,
  FaPython,
  FaDocker,
  SiVuedotjs,
  SiFlutter,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiAmazon, // Changed from SiAmazonaws to SiAmazon
  SiJest,
  SiCypress,
  SiPhp,
} as const;

export default function TechCard({ name, icon }: TechCardProps) {
  // Get the icon component from the map, default to FaReact if not found
  const Icon = iconMap[icon] || FaReact;

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-textDark font-medium">{name}</span>
    </motion.div>
  );
}
