"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaDownload, FaEye } from "react-icons/fa";

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

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export default function CertificateCard({
  certificate,
  index,
}: CertificateCardProps) {
  const isPdf = certificate.image.toLowerCase().endsWith(".pdf");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Certificate Image/PDF Preview */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {isPdf ? (
          // PDF Preview using iframe
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <FaAward className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-sm text-gray-600 font-medium">
                PDF Certificate
              </p>
              <p className="text-xs text-gray-500 mt-1">Click to view</p>
            </div>
          </div>
        ) : (
          // Regular image
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {certificate.pdfUrl && (
              <button
                onClick={() => window.open(certificate.pdfUrl, "_blank")}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                title="View Full Certificate"
              >
                <FaEye className="h-4 w-4 text-gray-600" />
              </button>
            )}
            {certificate.pdfUrl && (
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = certificate.pdfUrl!;
                  link.download = `${certificate.title}.pdf`;
                  link.click();
                }}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                title="Download Certificate"
              >
                <FaDownload className="h-4 w-4 text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <FaAward className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-textDark text-sm leading-tight mb-1">
              {certificate.title}
            </h3>
            <p className="text-xs text-textLight mb-2">{certificate.issuer}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{certificate.date}</span>
              <span className="text-xs px-2 py-1 bg-primary bg-opacity-10 text-primary rounded-full">
                {certificate.category}
              </span>
            </div>
            {certificate.description && (
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {certificate.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
