"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaQuoteLeft,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Navigation links
const navLinks = [
  { name: "Introduction", href: "#introduction", icon: FaUser },
  { name: "Tech Stack", href: "#tech-stack", icon: FaCode },
  { name: "Experience", href: "#experience", icon: FaBriefcase },
  { name: "Projects", href: "#projects", icon: FaProjectDiagram },
  { name: "Testimonials", href: "#testimonials", icon: FaQuoteLeft },
  { name: "Contact", href: "#contact", icon: FaEnvelope },
  {
    name: "Development Services",
    href: "https://development.rajondey.com",
    icon: FaExternalLinkAlt,
    external: true,
  },
];

// Animation variants for the tooltip
const tooltipVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// Animation variants for the icon
const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function SidebarNav() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Smooth scroll handler
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = navLinks
      .filter((link) => !link.external)
      .map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-transparent">
      <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl shadow-lg p-4 flex flex-col items-center space-y-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href && !link.external;
          return (
            <div
              key={link.name}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* Icon Link */}
              <a
                href={link.href}
                onClick={(e) => {
                  if (!link.external) {
                    e.preventDefault();
                    handleScroll(link.href);
                  }
                }}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`transition-colors ${
                  isActive ? "text-primary" : "text-textLight hover:text-primary"
                }`}
              >
                <motion.div whileHover="hover" variants={iconVariants}>
                  <Icon className="h-4 w-4" />
                </motion.div>
              </a>

              {/* Tooltip (Section Name) */}
              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.div
                    className="absolute left-12 bg-primary text-white px-4 py-2 rounded-r-lg shadow-md"
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {link.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
