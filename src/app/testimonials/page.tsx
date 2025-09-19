import { testimonials } from "@/lib/content/testimonials";

export const metadata = {
  title: "Testimonials | Rajon Dey",
  description: "Feedback from managers and clients (placeholder content).",
};

export default function TestimonialsPage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
      <p className="text-textLight mb-10 max-w-2xl">
        Real testimonials will be added here with proper attribution and tags.
        The following items are placeholder examples.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map(t => (
          <div key={t.testimonial.slice(0,20)} className="border rounded-lg p-5 bg-white/60 backdrop-blur">
            <p className="text-sm mb-4 italic">“{t.testimonial}”</p>
            <div className="text-xs font-medium text-gray-600">
              {t.name} · {t.designation} {t.company && `· ${t.company}`}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
