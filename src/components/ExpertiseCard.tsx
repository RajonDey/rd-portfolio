"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    rotateX: 10,
    rotateY: 10,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

// Animation variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

interface ExpertiseCardProps {
  title: string;
  image: string; // Use image instead of icon
}

export default function ExpertiseCard({ title, image }: ExpertiseCardProps) {
  return (
    <motion.div
      className="relative bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      style={{ perspective: 1000 }} // Enable 3D perspective for tilt effect
    >
      {/* Image */}
      <motion.div
        className="relative w-16 h-16 mx-auto mb-4"
        variants={imageVariants}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-textDark">{title}</h4>
    </motion.div>
  );
}
