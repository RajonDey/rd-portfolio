"use client";

import { motion } from "framer-motion";
import { Mail, PenTool, Code, Layout, LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  title: string;
  icon: string;
}

export default function ExpertiseCard({ title, icon }: ExpertiseCardProps) {
  // Map icon names to Lucide icons
  const iconMap: { [key: string]: LucideIcon } = {
    Mail,
    PenTool,
    Code,
    Layout,
  };

  const IconComponent = iconMap[icon];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hover: { color: "#333333", transition: { duration: 0.3 } }, // Use accent color on hover
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.div variants={iconVariants}>
        {IconComponent && (
          <IconComponent className="h-12 w-12 mx-auto mb-4 text-textDark" />
        )}
      </motion.div>
      <h4 className="text-lg font-semibold text-textDark">{title}</h4>
    </motion.div>
  );
}
