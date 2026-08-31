import Image from "next/image";
import Link from "next/link";
import { WorkArticle } from "@/lib/work-article";

export default function WorkArticleView({ article }: { article: WorkArticle }) {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="text-textDark hover:underline underline-offset-4 inline-block mb-8"
          >
            Work
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-textDark mb-6">
            {article.title}
          </h1>
          {article.image && (
            <div className="relative w-full aspect-video mb-10 overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          {article.intro && (
            <p className="text-lg text-textLight mb-10">{article.intro}</p>
          )}
          {article.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-textDark mb-3">
                {section.heading}
              </h2>
              {section.body && (
                <p className="text-textLight leading-relaxed">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-textLight mt-3">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {article.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {article.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
