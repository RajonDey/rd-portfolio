import { CONTACT_EMAIL, CV_URL } from "@/lib/site";

export default function ContactCta() {
  return (
    <section className="py-16 bg-background border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-textDark mb-4">Contact</h2>
        <p className="text-lg text-textLight mb-8">{CONTACT_EMAIL}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors"
          >
            CV
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
