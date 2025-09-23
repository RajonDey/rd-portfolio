"use client";

import { SEO } from "../../components/SEO";
import Achievements from "../../components/Achievements/Achievements";
import Footer from "../../components/Footer";
import { certificates } from "../../lib/certificates";
import { FaTrophy, FaDownload, FaEnvelope } from "react-icons/fa";
import { useState, useMemo } from "react";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "All") {
      return certificates;
    }
    return certificates.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { name: "All", count: certificates.length },
    {
      name: "Award",
      count: certificates.filter((cert) => cert.category === "Award").length,
    },
    {
      name: "Achievement",
      count: certificates.filter((cert) => cert.category === "Achievement")
        .length,
    },
    {
      name: "Recognition",
      count: certificates.filter((cert) => cert.category === "Recognition")
        .length,
    },
  ];

  return (
    <>
      <SEO
        title="Achievements & Recognition | Rajon Dey - Software Developer"
        description="View all professional certificates, awards, and recognition from Rajon Dey's career at SJ Innovation. Performer of the Month awards, technical achievements, and leadership recognition."
        url="/achievements"
      />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <FaTrophy className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-textDark">
                  Achievements & Recognition
                </h1>
              </div>
              <p className="text-xl text-textLight max-w-3xl mx-auto mb-8">
                Professional certificates, performance awards, and recognition
                from my career at SJ Innovation. These achievements reflect my
                commitment to excellence, continuous learning, and leadership in
                software development.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {certificates.length}
                  </div>
                  <div className="text-textLight">Total Achievements</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {
                      certificates.filter((cert) => cert.category === "Award")
                        .length
                    }
                  </div>
                  <div className="text-textLight">Awards Received</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {
                      certificates.filter(
                        (cert) => cert.category === "Achievement"
                      ).length
                    }
                  </div>
                  <div className="text-textLight">Goal Achievements</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {
                      certificates.filter(
                        (cert) => cert.category === "Recognition"
                      ).length
                    }
                  </div>
                  <div className="text-textLight">Recognition Awards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    selectedCategory === category.name
                      ? "bg-primary text-white"
                      : "bg-white text-textLight hover:bg-primary hover:text-white border border-gray-300"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Achievements Section */}
        <Achievements
          certificates={filteredCertificates}
          title="All Achievements"
          subtitle="Complete collection of professional certificates, awards, and recognition from my career"
          showAll={true}
        />

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-textDark mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-textLight mb-8">
              These achievements demonstrate my commitment to excellence and
              continuous improvement. I&apos;m ready to bring this same
              dedication to your team and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.rajondey.com/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download My CV
              </a>
              <a
                href="mailto:contact@rajondey.com"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
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
