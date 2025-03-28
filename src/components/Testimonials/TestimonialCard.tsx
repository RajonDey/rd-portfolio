"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "../../types";

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.5 },
  }),
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-5 rounded-3xl xs:w-[320px] w-full shadow-md"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      custom={index}
      viewport={{ once: true }}
    >
      {/* Quotation Mark */}
      <p className="text-textDark font-black text-[48px]">&quot;</p>

      {/* Testimonial Text */}
      <div className="mt-1">
        <p className="text-textDark tracking-wider text-[18px]">
          {testimonial.testimonial}
        </p>

        {/* Client Info */}
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-textDark font-medium text-[16px]">
              <span className="text-primary">@</span> {testimonial.name}
            </p>
            <p className="mt-1 text-textLight text-[12px]">
              {testimonial.designation}, {testimonial.company}
            </p>
          </div>

          <div className="relative w-10 h-10">
            <Image
              src={testimonial.image}
              alt={`feedback_by-${testimonial.name}`}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
