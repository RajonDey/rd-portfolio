"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaQuoteLeft,
  FaTrophy,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navigation = [
  { name: "Projects", href: "/projects", icon: FaCode },
  { name: "Testimonials", href: "/testimonials", icon: FaQuoteLeft },
  { name: "Achievements", href: "/achievements", icon: FaTrophy }
];

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RD</span>
            </div>
            <span className="text-xl font-bold text-textDark">Rajon Dey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-textLight hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* CV Download Button */}
            <a
              href="https://www.rajondey.com/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              <FaDownload className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textLight hover:text-primary focus:outline-none focus:text-primary"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-textLight hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                {/* Mobile CV Download Button */}
                <a
                  href="https://www.rajondey.com/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-accent transition-colors mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FaDownload className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
