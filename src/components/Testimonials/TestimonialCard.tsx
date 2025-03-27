"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
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

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Testimonial Text with Quotation Marks */}
      <div className="testimonial-text">
        <p className="text-textDark text-sm italic">
          {testimonial.testimonial}
        </p>
      </div>

      {/* Client Info */}
      <div className="flex items-center mt-6">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-textDark">
            {testimonial.name}
          </h4>
          <p className="text-sm text-primary">
            {testimonial.designation}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
