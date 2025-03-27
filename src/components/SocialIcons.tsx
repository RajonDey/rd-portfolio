"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    url: "https://github.com/RajonDey",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    url: "https://www.linkedin.com/in/rajondey",
  },
  {
    name: "Fiverr",
    icon: <ExternalLink className="h-6 w-6" />,
    url: "https://www.fiverr.com/rajjohin",
  },
];

export default function SocialIcons() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.2, color: "#333333", transition: { duration: 0.3 } },
  };

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-accent"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={index}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
