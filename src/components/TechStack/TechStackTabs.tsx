"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechCard from "./TechCard";
import { Tech } from "../../types/index";

interface TechStackTabsProps {
  techStack: Tech[];
}

const categories = [
  "Frontend",
  "Backend",
  "Languages",
  "DevOps",
  "Testing",
] as const;

export default function TechStackTabs({ techStack }: TechStackTabsProps) {
  const [activeTab, setActiveTab] =
    useState<(typeof categories)[number]>("Frontend");

  // Filter tech stack based on the active tab
  const filteredTech = techStack.filter((tech) => tech.category === activeTab);

  // Animation variants for the tab underline
  const underlineVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 overflow-x-auto">
        {categories.map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors ${
                activeTab === category
                  ? "text-primary"
                  : "text-textDark hover:text-primary"
              }`}
            >
              {category}
            </button>
            {activeTab === category && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                variants={underlineVariants}
                initial="initial"
                animate="animate"
                layoutId="underline"
              />
            )}
          </div>
        ))}
      </div>

      {/* Tech Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredTech.map((tech) => (
            <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
