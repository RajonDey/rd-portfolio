import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { getPageShareMetadata } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = getPageShareMetadata(
  "/testimonials",
  "Testimonials · Rajon Dey",
  "Notes from colleagues. Rajon Dey."
);

export default function TestimonialsPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-4">
              Testimonials
            </h1>
            <p className="text-lg text-textLight mb-12">Notes from colleagues.</p>
            <ul className="divide-y divide-black/10 border-t border-black/10 max-w-3xl">
              {testimonials.map((item) => (
                <li
                  key={`${item.name}-${item.year}-${item.testimonial.slice(0, 32)}`}
                  className="py-8"
                >
                  <p className="text-lg text-textDark">{item.testimonial}</p>
                  <p className="text-textLight mt-3">
                    {item.name}
                    {item.designation ? `, ${item.designation}` : ""}
                    {item.company ? `, ${item.company}` : ""}
                    {item.year ? `. ${item.year}.` : "."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
