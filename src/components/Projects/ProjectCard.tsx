"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../../types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  detailSlug?: string;
  caseStudySlug?: string; // Added to support case study links
}

export default function ProjectCard({
  project,
  detailSlug,
  caseStudySlug,
}: ProjectCardProps) {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  // Determine the detail page link (case study takes priority over project detail)
  const detailLink = caseStudySlug
    ? `/case-studies/${caseStudySlug}`
    : detailSlug
    ? `/projects/${detailSlug}`
    : null;

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Project Image */}
      {detailLink ? (
        <Link href={detailLink} className="relative block w-full h-48">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority={project.featured}
          />
        </Link>
      ) : (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority={project.featured}
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {detailLink ? (
          <Link
            href={detailLink}
            className="text-xl font-bold text-textDark mb-3 inline-block hover:underline"
          >
            {project.name}
          </Link>
        ) : (
          <h3 className="text-xl font-bold text-textDark mb-3">
            {project.name}
          </h3>
        )}

        {/* Description with consistent height */}
        <div className="flex-grow mb-4">
          <p className="text-textLight text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag.name} className={`text-xs font-medium ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>

        {/* Buttons - positioned at bottom */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/80 transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            Source Code
          </a>
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
