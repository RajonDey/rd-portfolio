"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CertificateCard from "./CertificateCard";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  pdfUrl?: string;
  description?: string;
}

interface AchievementsProps {
  certificates: Certificate[];
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  maxItems?: number;
}

export default function Achievements({
  certificates,
  title = "Recognition & Achievements",
  subtitle = "Professional certificates, awards, and recognition from my career",
  showAll = false,
  maxItems = 6,
}: AchievementsProps) {
  const displayCertificates = showAll
    ? certificates
    : certificates.slice(0, maxItems);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "award":
      case "recognition":
        return <FaTrophy className="h-5 w-5 text-yellow-500" />;
      case "certificate":
      case "training":
        return <FaCertificate className="h-5 w-5 text-blue-500" />;
      case "achievement":
      case "performance":
        return <FaMedal className="h-5 w-5 text-green-500" />;
      default:
        return <FaAward className="h-5 w-5 text-primary" />;
    }
  };

  const getCategoryStats = () => {
    const stats = certificates.reduce((acc, cert) => {
      acc[cert.category] = (acc[cert.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(stats).map(([category, count]) => ({
      category,
      count,
      icon: getCategoryIcon(category),
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            {title}
          </h2>
          <p className="text-lg text-textLight max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>

          {/* Stats */}
          {certificates.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-2xl mx-auto justify-center">
              {getCategoryStats().map((stat) => (
                <div
                  key={stat.category}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-textDark">
                    {stat.count}
                  </div>
                  <div className="text-sm text-textLight capitalize">
                    {stat.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Certificates Grid */}
        {displayCertificates.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <FaTrophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No achievements to display
            </h3>
            <p className="text-gray-500">
              Certificates and awards will appear here once added.
            </p>
          </motion.div>
        )}

        {/* View All Button */}
        {!showAll && certificates.length > maxItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              href="/achievements"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              View All Achievements
              <FaTrophy className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
