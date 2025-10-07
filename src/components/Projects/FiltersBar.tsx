"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FiltersBarProps {
  tags: string[]; // kept for compatibility but not shown
  categories: string[]; // not used; using curated list per requirement
  types: ("case-study" | "project")[];
}

export default function FiltersBar({ types }: FiltersBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = useState<string>(searchParams.get("q") || "");
  const [type, setType] = useState<string>(searchParams.get("type") || "");
  // New curated category filter (Web Applications, Websites, Landing Page, Email Templates)
  const [category, setCategory] = useState<string>(
    searchParams.get("category") || ""
  );
  const [sort, setSort] = useState<string>(
    searchParams.get("sort") || "impact"
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (q) params.set("q", q);
    else params.delete("q");
    if (type) params.set("type", type);
    else params.delete("type");
    if (category) params.set("category", category);
    else params.delete("category");
    if (sort) params.set("sort", sort);
    else params.delete("sort");
    router.replace(`${pathname}?${params.toString()}`);
  }, [q, type, category, sort, pathname, router, searchParams]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects and case studies..."
          className="w-full md:max-w-sm px-4 py-2 border border-gray-200 rounded-md"
          aria-label="Search"
        />
        <div className="flex gap-2">
          <select
            className="px-3 py-2 border border-gray-200 rounded-md"
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Filter by type"
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t === "case-study" ? "Case Studies" : "Projects"}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 border border-gray-200 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            <option value="web-applications">Web Applications</option>
            <option value="websites">Websites</option>
            <option value="landing-page">Landing Page</option>
            <option value="email-templates">Email Templates</option>
          </select>
          <select
            className="px-3 py-2 border border-gray-200 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort"
          >
            <option value="impact">Sort: Impact</option>
            <option value="newest">Sort: Newest</option>
            <option value="title">Sort: Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}
