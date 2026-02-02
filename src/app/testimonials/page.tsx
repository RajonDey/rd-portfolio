"use client";

import { SEO } from "../../components/SEO";
import TestimonialCard from "../../components/Testimonials/TestimonialCard";
import Footer from "../../components/Footer";
import { testimonials } from "../../lib/testimonials";
import {
  FaQuoteLeft,
  FaStar,
  FaSearch,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState, useMemo, useEffect } from "react";

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Animated counters
  const totalTarget = testimonials.length;
  const positiveTarget = 95; // fixed as requested
  const yearsTarget = 5;
  const [totalAnim, setTotalAnim] = useState(0);
  const [positiveAnim, setPositiveAnim] = useState(0);
  const [yearsAnim, setYearsAnim] = useState(0);

  useEffect(() => {
    let rafId: number;
    const duration = 900; // ms
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setTotalAnim(Math.round(ease * totalTarget));
      setPositiveAnim(Math.round(ease * positiveTarget));
      setYearsAnim(Math.round(ease * yearsTarget));
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [totalTarget]);

  // Categories for filtering
  const categories = [
    "All",
    "Leadership",
    "Technical Excellence",
    "Project Delivery",
    "Mentorship",
    "Innovation",
    "Team Collaboration",
    "Client Satisfaction",
  ];

  // Sort options
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "rating", label: "Highest Rated" },
    { value: "length", label: "Longest First" },
  ];

  // Filter and search testimonials
  const filteredTestimonials = useMemo(() => {
    let filtered = testimonials;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (testimonial) =>
          testimonial.testimonial
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          testimonial.designation
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          testimonial.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (testimonial) => testimonial.category === selectedCategory
      );
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(b.year || "2024").getTime() -
            new Date(a.year || "2024").getTime()
        );
        break;
      case "oldest":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(a.year || "2019").getTime() -
            new Date(b.year || "2019").getTime()
        );
        break;
      case "rating":
        filtered = [...filtered].sort(
          (a, b) => (b.rating || 5) - (a.rating || 5)
        );
        break;
      case "length":
        filtered = [...filtered].sort(
          (a, b) => b.testimonial.length - a.testimonial.length
        );
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = filteredTestimonials.slice(startIndex, endIndex);

  // Statistics
  // keep count via totalTarget; totalTestimonials no longer needed for UI

  return (
    <>
      <SEO
        title="Testimonials - Rajon Dey | Senior Software Engineer Portfolio"
        description="Read 167+ testimonials and feedback from colleagues, managers, and clients about Rajon Dey's software development work at SJ Innovation."
        url="/testimonials"
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaQuoteLeft className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
                What People Say
              </h1>
              <p className="text-xl text-textLight max-w-3xl mx-auto mb-8">
                Feedback from colleagues, managers, and clients who have worked
                with me. These testimonials reflect my professional approach,
                technical expertise, and collaborative spirit.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {totalAnim}+
                  </div>
                  <div className="text-textLight">Total Testimonials</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {positiveAnim}%
                  </div>
                  <div className="text-textLight">Positive Rating</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {yearsAnim}+
                  </div>
                  <div className="text-textLight">Years at SJ Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <FaFilter className="h-4 w-4" />
                Filters
                {showFilters ? (
                  <FaChevronUp className="h-4 w-4" />
                ) : (
                  <FaChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-end">
                  <div className="text-sm text-gray-600">
                    Showing {currentTestimonials.length} of{" "}
                    {filteredTestimonials.length} testimonials
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentTestimonials.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={`${testimonial.designation}-${testimonial.company}-${index}`}
                      testimonial={testimonial}
                      index={index}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        First
                      </button>
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>

                      {/* Page Numbers */}
                      {Array.from(
                        { length: Math.min(5, totalPages) },
                        (_, i) => {
                          const pageNum =
                            Math.max(
                              1,
                              Math.min(totalPages - 4, currentPage - 2)
                            ) + i;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-3 py-2 text-sm font-medium rounded-md ${
                                currentPage === pageNum
                                  ? "bg-primary text-white"
                                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        }
                      )}

                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Last
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No testimonials found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Professional Recognition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textDark mb-4">
                Professional Recognition
              </h2>
              <p className="text-lg text-textLight">
                Key achievements and recognition from my professional journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaStar className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-textDark">
                    Employee of the Month
                  </h3>
                </div>
                <p className="text-textLight">
                  November 2020 - SJ Innovation LLC
                </p>
                <p className="text-sm text-textLight mt-2">
                  Recognized for exceptional performance and leadership in
                  delivering complex projects.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaStar className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-textDark">
                    Performer of the Month
                  </h3>
                </div>
                <p className="text-textLight">
                  10+ times since 2019 - SJ Innovation LLC
                </p>
                <p className="text-sm text-textLight mt-2">
                  Consistent recognition for outstanding work and team
                  collaboration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaStar className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-textDark">
                    Team Leadership
                  </h3>
                </div>
                <p className="text-textLight">
                  Leading 8+ developers - SJ Innovation LLC
                </p>
                <p className="text-sm text-textLight mt-2">
                  Successfully managing and mentoring a team of developers while
                  delivering quality projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-textDark mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-textLight mb-8">
              I&apos;m passionate about creating high-quality software solutions
              and working with great teams. Let&apos;s discuss how I can
              contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.rajondey.com/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                Download My CV
              </a>
              <a
                href="mailto:contact@rajondey.com"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
