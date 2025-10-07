"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Testimonial } from "../../types";
import { getAvatarUrl } from "../../lib/avatarUtils";

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.25,
      delay: Math.min(i * 0.06, 0.3),
    },
  }),
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const avatarUrl = getAvatarUrl(
    testimonial.name,
    testimonial.designation,
    testimonial.image
  );

  const [expanded, setExpanded] = useState(false);

  const maxChars = 220;
  const text = testimonial.testimonial?.trim() ?? "";
  const isLong = text.length > maxChars;
  const displayText = useMemo(() => {
    if (expanded || !isLong) return text;
    // Trim at last space before limit for nicer cutoff
    const slice = text.slice(0, maxChars);
    const lastSpace = slice.lastIndexOf(" ");
    const truncated = lastSpace > 160 ? slice.slice(0, lastSpace) : slice;
    return `${truncated}…`;
  }, [expanded, isLong, text]);

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
        <div className="text-textDark tracking-wider text-[18px] leading-7 min-h-[84px]">
          {displayText}
        </div>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-primary text-sm font-medium hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

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
              src={avatarUrl}
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
