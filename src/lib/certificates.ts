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
  {
    id: "pom-sep-2021",
    title: "Performer of the Month - September 2021",
    issuer: "SJ Innovation LLC",
    date: "September 2021",
    category: "Award",
    image: "/images/achievements/POM/Rajon%20Dey.png", // Using PDF as image for now
    pdfUrl: "/images/achievements/POM/Rajon%20Dey.png", // URL encoded spaces
    description:
      "Recognized for exceptional performance and dedication in September 2021",
  },
  {
    id: "pom-apr-2021",
    title: "Performer of the Month - April 2021",
    issuer: "SJ Innovation LLC",
    date: "April 2021",
    category: "Award",
    image: "/images/certificates/pom-apr-2021.jpg",
    pdfUrl: "/certificates/pom-apr-2021.pdf",
    description:
      "Awarded for outstanding contribution to client projects and team leadership",
  },
  {
    id: "javascript-goal-2021",
    title: "JavaScript Mastery Goal - Q3 2021",
    issuer: "SJ Innovation LLC",
    date: "September 2021",
    category: "Achievement",
    image: "/images/certificates/javascript-goal-2021.jpg",
    pdfUrl: "/certificates/javascript-goal-2021.pdf",
    description:
      "Successfully completed advanced JavaScript learning objectives and implementation",
  },
  {
    id: "eos-book-reading",
    title: "EOS Book Reading Goal - Q2 2021",
    issuer: "SJ Innovation LLC",
    date: "June 2021",
    category: "Achievement",
    image: "/images/certificates/eos-book-reading.jpg",
    pdfUrl: "/certificates/eos-book-reading.pdf",
    description:
      "Completed EOS (Entrepreneurial Operating System) book reading and presentation",
  },
  {
    id: "leadership-recognition",
    title: "Leadership Excellence - 2021",
    issuer: "SJ Innovation LLC",
    date: "December 2021",
    category: "Recognition",
    image: "/images/certificates/leadership-recognition.jpg",
    pdfUrl: "/certificates/leadership-recognition.pdf",
    description:
      "Recognized for exceptional leadership qualities and team mentorship",
  },
  {
    id: "technical-excellence",
    title: "Technical Excellence Award - 2022",
    issuer: "SJ Innovation LLC",
    date: "March 2022",
    category: "Award",
    image: "/images/certificates/technical-excellence.jpg",
    pdfUrl: "/certificates/technical-excellence.pdf",
    description:
      "Awarded for outstanding technical contributions and innovative solutions",
  },
  {
    id: "mentorship-badge",
    title: "Mentorship Excellence - 2022",
    issuer: "SJ Innovation LLC",
    date: "June 2022",
    category: "Recognition",
    image: "/images/certificates/mentorship-badge.jpg",
    pdfUrl: "/certificates/mentorship-badge.pdf",
    description:
      "Recognized for exceptional mentoring and knowledge sharing with team members",
  },
  {
    id: "project-delivery",
    title: "Project Delivery Excellence - 2022",
    issuer: "SJ Innovation LLC",
    date: "August 2022",
    category: "Achievement",
    image: "/images/certificates/project-delivery.jpg",
    pdfUrl: "/certificates/project-delivery.pdf",
    description:
      "Awarded for consistently delivering high-quality projects on time and within budget",
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
