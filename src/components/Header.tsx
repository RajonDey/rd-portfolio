"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Github, Linkedin } from "lucide-react";
import DeveloperAnimation from "./DeveloperAnimation";
import { getYearsOfExperienceLabel } from "@/lib/experience";

export default function Header() {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-textDark"
            variants={childVariants}
          >
            Hi, I’m Rajon Dey
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
            variants={childVariants}
          >
            Module Lead (Frontend) | Senior Software Engineer
          </motion.h2>
          <motion.p
            className="text-lg text-textLight max-w-md mx-auto md:mx-0"
            variants={childVariants}
          >
            With {getYearsOfExperienceLabel()} of experience owning frontend architecture and
            building production-grade applications. I specialize in React, Next.js, TypeScript, and
            full-stack solutions that drive real business impact.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            variants={childVariants}
          >
            <a
              href="https://www.rajondey.com/cv.pdf"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              target="_blank"
            >
              Check Resume
              <FileText className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/8801737997143"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              target="_blank"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-4"
            variants={childVariants}
          >
            <a
              href="https://github.com/rajondey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textDark hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rajondey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textDark hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Dynamic Animation with Profile Image */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <DeveloperAnimation />
        </motion.div>
      </div>
    </section>
  );
}
