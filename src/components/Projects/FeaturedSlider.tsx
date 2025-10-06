"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { PortfolioEntryViewModel } from "../../lib/portfolio";

interface FeaturedSliderProps {
  items: PortfolioEntryViewModel[];
}

export default function FeaturedSlider({ items }: FeaturedSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const clampedIndex = useMemo(
    () => Math.min(Math.max(index, 0), Math.max(items.length - 1, 0)),
    [index, items.length]
  );

  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const move = (delta: number) => {
    const next = Math.min(Math.max(clampedIndex + delta, 0), items.length - 1);
    setIndex(next);
    scrollToIndex(next);
  };

  if (items.length === 0) return null;

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-textDark">Featured Work</h2>
        <div className="flex gap-2" aria-label="Featured carousel controls">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous"
            className="p-2 rounded-md border border-gray-200 text-textDark hover:bg-gray-50 disabled:opacity-50"
            disabled={clampedIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next"
            className="p-2 rounded-md border border-gray-200 text-textDark hover:bg-gray-50 disabled:opacity-50"
            disabled={clampedIndex === items.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
        role="listbox"
        aria-label="Featured items"
      >
        {items.map((item, i) => (
          <article
            key={item.id}
            className="min-w-[320px] md:min-w-[520px] lg:min-w-[640px] snap-center rounded-xl border border-gray-200 overflow-hidden bg-white"
            role="option"
            aria-selected={i === clampedIndex}
          >
            {(() => {
              const href = item.type === "case-study" ? item.href : item.href;
              const media = (
                <div className="relative w-full aspect-video">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white">
                      {item.type === "case-study" ? "Case Study" : "Project"}
                    </span>
                  </div>
                </div>
              );
              return href ? <Link href={href}>{media}</Link> : media;
            })()}
            <div className="p-6">
              {(() => {
                const href = item.type === "case-study" ? item.href : item.href;
                const titleNode = (
                  <span className="text-xl font-bold text-textDark hover:underline">
                    {item.title}
                  </span>
                );
                return href ? (
                  <Link href={href}>{titleNode}</Link>
                ) : (
                  <h3 className="text-xl font-bold text-textDark">
                    {item.title}
                  </h3>
                );
              })()}
              {item.subtitle && (
                <p className="text-sm text-textLight mt-1">{item.subtitle}</p>
              )}
              <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.primaryTags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded bg-gray-100 text-xs text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                {item.type === "case-study" && item.href && (
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-accent"
                  >
                    Read Case Study
                  </Link>
                )}
                {item.links?.source && (
                  <a
                    href={item.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                )}
                {item.links?.live && (
                  <a
                    href={item.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-textDark text-sm font-semibold rounded-md hover:bg-gray-50"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
