"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../lib/testimonials";

// Animation variants for the header
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="bg-accent rounded-lg">
          {/* Header Area */}
          <div className="bg-background rounded-lg px-6 py-12 sm:px-12 sm:py-16 sm:pb-20 min-h-[200px]">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg text-textLight uppercase tracking-wider">
                What others say
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-textDark">
                Testimonials.
              </h2>
            </motion.div>
          </div>

          {/* Testimonial Cards */}
          <div className="-mt-20 px-6 pb-14 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {testimonials
                .filter((testimonial) => testimonial.featured)
                .slice(0, 3)
                .map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${index}`}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
            </div>

            {/* View All Testimonials Link */}
            <div className="text-center mt-8">
              <a
                href="/testimonials"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                View All Testimonials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
