export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  pdfUrl?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  // ==================== Performer of the Month Awards ====================
  {
    id: "pom-sep-2021",
    title: "Performer of the Month - September 2021",
    issuer: "SJ Innovation LLC",
    date: "September 2021",
    category: "Award",
    image: "/images/achievements/POM/pom-sept-2021.jpg",
    description:
      "Recognized for exceptional performance and dedication in September 2021",
  },
  {
    id: "pom-dec-2022",
    title: "Performer of the Month - December 2022",
    issuer: "SJ Innovation LLC",
    date: "December 2022",
    category: "Award",
    image: "/images/achievements/POM/pom-dec-2022.jpg",
    description:
      "Awarded for outstanding contribution and exceptional performance in December 2022",
  },
  {
    id: "pom-jun-2024",
    title: "Performer of the Month - June 2024",
    issuer: "SJ Innovation LLC",
    date: "June 2024",
    category: "Award",
    image: "/images/achievements/POM/pom-jun-2024.jpg",
    pdfUrl: "/images/achievements/POM/PDF/pom-jun-2024.pdf",
    description:
      "Recognized for exceptional leadership and technical excellence in June 2024",
  },
  {
    id: "pom-oct-2024",
    title: "Performer of the Month - October 2024",
    issuer: "SJ Innovation LLC",
    date: "October 2024",
    category: "Award",
    image: "/images/achievements/POM/pom-oct-2024.jpg",
    pdfUrl: "/images/achievements/POM/PDF/pom-oct-2024.pdf",
    description:
      "Awarded for outstanding project delivery and team contribution in October 2024",
  },

  // ==================== Professional Certificates ====================
  {
    id: "5th-year-completion",
    title: "5th Year Completion Certificate",
    issuer: "SJ Innovation LLC",
    date: "2025",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/5th-year-complition-certificate_page.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/5th-year-complition-certificate.pdf",
    description:
      "Celebrating 5 years of dedication and excellence at SJ Innovation",
  },
  {
    id: "contentful-certified-professional",
    title: "Contentful Certified Professional",
    issuer: "Contentful",
    date: "2024",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/Contentful Certified Professional.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/Contentful Certified Professional.pdf",
    description:
      "Certified professional in Contentful CMS development and implementation",
  },
  {
    id: "mentoring-team-management",
    title: "Mentoring to Team Management Certificate",
    issuer: "Professional Development",
    date: "2024",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/Mentoring to Team Management Certificate.png",
    description:
      "Completed comprehensive training in team management and mentorship",
  },
  {
    id: "javascript-basics",
    title: "JavaScript Basics Certificate",
    issuer: "Online Learning Platform",
    date: "2023",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/certificate-of-completion-for-javascript-basics.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/certificate-of-completion-for-javascript-basics.pdf",
    description:
      "Successfully completed JavaScript fundamentals and best practices course",
  },
  {
    id: "mastering-react",
    title: "Mastering React Certificate",
    issuer: "Online Learning Platform",
    date: "2023",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/certificate-of-completion-for-mastering-react.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/certificate-of-completion-for-mastering-react.pdf",
    description:
      "Completed advanced React development and modern practices certification",
  },
  {
    id: "kanvue-code-of-conduct",
    title: "Code of Conduct - Kanvue",
    issuer: "Kanvue",
    date: "2024",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/code-of-conduct-kanvue.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/code-of-conduct-kanvue.pdf",
    description:
      "Successfully completed Kanvue code of conduct and compliance training",
  },
  {
    id: "kanvue-communication",
    title: "Kanvue Communication Certificate",
    issuer: "Kanvue",
    date: "2024",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/kanvue-communication.jpg",
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/kanvue-communication.pdf",
    description:
      "Completed professional communication and collaboration training for Kanvue projects",
  },
  {
    id: "finance-a2z",
    title: "A2Z of Finance Certificate",
    issuer: "Finance Training Institute",
    date: "2023",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/Certificate-A2Z-Of-Finance-Rajon.jpg", // Placeholder
    pdfUrl:
      "/images/achievements/professional-certificates/PDF/Certificate-A2Z Of Finance -Rajon.pdf",
    description:
      "Comprehensive understanding of finance principles and business acumen",
  },
  {
    id: "veeva-email-technical",
    title: "Veeva Email Technical Certificate",
    issuer: "Veeva Systems",
    date: "2024",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/veeva-email-technical-certificate.jpg",
    description:
      "Technical certification in Veeva email development and implementation",
  },
  {
    id: "web-development",
    title: "Web Development Certificate",
    issuer: "Web Development Institute",
    date: "2022",
    category: "Achievement",
    image:
      "/images/achievements/professional-certificates/web-development-certificate.jpg",
    description:
      "Comprehensive web development training covering modern technologies and best practices",
  },

  // ==================== Recognition & Praises ====================
  {
    id: "praise-1",
    title: "Client Appreciation - Excellence in Delivery",
    issuer: "Client Recognition",
    date: "2024",
    category: "Recognition",
    image: "/images/achievements/praises/praise-1.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-1.pdf",
    description:
      "Recognized for exceptional project delivery and client satisfaction",
  },
  {
    id: "praise-2",
    title: "Team Recognition - Outstanding Collaboration",
    issuer: "SJ Innovation LLC",
    date: "2024",
    category: "Recognition",
    image: "/images/achievements/praises/praise-2.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-2.pdf",
    description:
      "Acknowledged for exceptional teamwork and collaborative spirit",
  },
  {
    id: "praise-3",
    title: "Technical Excellence Recognition",
    issuer: "SJ Innovation LLC",
    date: "2024",
    category: "Recognition",
    image: "/images/achievements/praises/praise-3.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-3.pdf",
    description:
      "Praised for technical expertise and innovative problem-solving",
  },
  {
    id: "praise-4",
    title: "Leadership Acknowledgment",
    issuer: "SJ Innovation LLC",
    date: "2024",
    category: "Recognition",
    image: "/images/achievements/praises/praise-4.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-4.pdf",
    description: "Recognized for demonstrating strong leadership qualities",
  },
  {
    id: "praise-5",
    title: "Client Feedback - Exceptional Service",
    issuer: "Client Recognition",
    date: "2024",
    category: "Recognition",
    image: "/images/achievements/praises/praise-5.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-5.pdf",
    description: "Commended for going above and beyond client expectations",
  },
  {
    id: "praise-6",
    title: "Innovation Award Recognition",
    issuer: "SJ Innovation LLC",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-6.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-6.pdf",
    description:
      "Honored for innovative solutions and creative problem-solving",
  },
  {
    id: "praise-7",
    title: "Mentorship Excellence",
    issuer: "SJ Innovation LLC",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-7.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-7.pdf",
    description: "Recognized for outstanding mentorship and knowledge sharing",
  },
  {
    id: "praise-8",
    title: "Quality Assurance Excellence",
    issuer: "SJ Innovation LLC",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-8.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-8.pdf",
    description: "Acknowledged for maintaining high quality standards",
  },
  {
    id: "praise-9",
    title: "Team Spirit Recognition",
    issuer: "SJ Innovation LLC",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-9.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-9.pdf",
    description: "Praised for fostering positive team culture and morale",
  },
  {
    id: "praise-10",
    title: "Client Success Story",
    issuer: "Client Recognition",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-10.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-10.pdf",
    description:
      "Featured in client success story for exceptional contribution",
  },
  {
    id: "praise-11",
    title: "Performance Excellence",
    issuer: "SJ Innovation LLC",
    date: "2023",
    category: "Recognition",
    image: "/images/achievements/praises/praise-11.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-11.pdf",
    description:
      "Recognized for consistently exceeding performance expectations",
  },
  {
    id: "praise-12",
    title: "Dedication Award",
    issuer: "SJ Innovation LLC",
    date: "2022",
    category: "Recognition",
    image: "/images/achievements/praises/praise-12.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-12.pdf",
    description: "Honored for unwavering dedication and commitment",
  },
  {
    id: "praise-13",
    title: "Initiative Recognition",
    issuer: "SJ Innovation LLC",
    date: "2022",
    category: "Recognition",
    image: "/images/achievements/praises/praise-13.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-13.pdf",
    description:
      "Acknowledged for taking initiative and driving positive change",
  },
  {
    id: "praise-14",
    title: "Customer Satisfaction Award",
    issuer: "Client Recognition",
    date: "2022",
    category: "Recognition",
    image: "/images/achievements/praises/praise-14.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-14.pdf",
    description:
      "Praised for achieving outstanding customer satisfaction ratings",
  },
  {
    id: "praise-15",
    title: "Professional Growth Recognition",
    issuer: "SJ Innovation LLC",
    date: "2022",
    category: "Recognition",
    image: "/images/achievements/praises/praise-15.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-15.pdf",
    description:
      "Recognized for remarkable professional growth and development",
  },
  {
    id: "praise-16",
    title: "Code Quality Excellence",
    issuer: "SJ Innovation LLC",
    date: "2022",
    category: "Recognition",
    image: "/images/achievements/praises/praise-16.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-16.pdf",
    description: "Commended for maintaining excellent code quality standards",
  },
  {
    id: "praise-17",
    title: "Continuous Improvement Award",
    issuer: "SJ Innovation LLC",
    date: "2021",
    category: "Recognition",
    image: "/images/achievements/praises/praise-17.jpg",
    pdfUrl: "/images/achievements/praises/PDF/praise-17.pdf",
    description:
      "Honored for commitment to continuous improvement and learning",
  },
];

// Helper function to get certificates by category
export const getCertificatesByCategory = (category: string): Certificate[] => {
  return certificates.filter(
    (cert) => cert.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get recent certificates
export const getRecentCertificates = (limit: number = 6): Certificate[] => {
  return certificates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get featured certificates
export const getFeaturedCertificates = (): Certificate[] => {
  return certificates
    .filter(
      (cert) => cert.category === "Award" || cert.category === "Recognition"
    )
    .slice(0, 4);
};
