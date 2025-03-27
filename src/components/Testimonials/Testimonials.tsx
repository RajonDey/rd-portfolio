import { testimonials } from "../../lib/data";
import TestimonialCard from "./TestimonialCard";
import { ExternalLink } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-white to-secondary"
    >
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-2">
            What My Clients Say
          </h2>
          <p className="text-lg text-textDark max-w-2xl mx-auto">
            Here’s what some of my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* Link to Fiverr Reviews */}
        <div className="text-center">
          <a
            href="https://www.fiverr.com/rajjohin#Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/80 transition-colors"
          >
            See More Reviews on Fiverr
            <ExternalLink className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
