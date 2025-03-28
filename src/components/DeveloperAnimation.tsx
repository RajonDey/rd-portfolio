"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Terminal, Braces } from "lucide-react"; // Icons to represent tech elements

// Animation variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Animation variants for floating tech elements
const techElementVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.3,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  }),
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

export default function DeveloperAnimation() {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
      initial="hidden"
      animate="visible"
    >
      {/* Profile Image */}
      <motion.div
        className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg z-10"
        variants={imageVariants}
      >
        <Image
          src="/images/rajon-dey.png"
          alt="Rajon Dey"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-0 left-0"
        variants={techElementVariants}
        custom={0}
        whileHover="hover"
      >
        <Code className="h-8 w-8 text-textDark" />
      </motion.div>
      <motion.div
        className="absolute top-0 right-0"
        variants={techElementVariants}
        custom={1}
        whileHover="hover"
      >
        <Terminal className="h-8 w-8 text-textDark" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0"
        variants={techElementVariants}
        custom={2}
        whileHover="hover"
      >
        <Braces className="h-8 w-8 text-textDark" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0"
        variants={techElementVariants}
        custom={3}
        whileHover="hover"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1A1A1A" />
          <path d="M2 17L12 22L22 17" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="#1A1A1A" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-10 left-10"
        variants={techElementVariants}
        custom={4}
        whileHover="hover"
      >
        <span className="text-sm text-textDark font-roboto">{"{ code }"}</span>
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10"
        variants={techElementVariants}
        custom={5}
        whileHover="hover"
      >
        <span className="text-sm text-textDark font-roboto">{"</>"}</span>
      </motion.div>
    </motion.div>
  );
}
