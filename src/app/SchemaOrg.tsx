import Script from "next/script";

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Rajon Dey",
    jobTitle: "Software Developer",
    url: "https://portfolio.rajondey.com", // Updated URL
    sameAs: [
      "https://github.com/RajonDey",
      "https://www.linkedin.com/in/rajondey/",
      "https://codepen.io/Rajon",
      "https://www.threads.net/@rajjon.dey",
      "https://x.com/rajjon_dey",
      "https://www.instagram.com/rajjon.dey/",
      "https://www.facebook.com/rajjon.dey",
      "https://medium.com/@rajondeyofficial",
      "https://dev.to/rajondey",
      "https://hashnode.com/@rajondey",
      "https://www.youtube.com/@rajon_dey",
    ],
    description:
      "Rajon Dey is a software developer specializing in React, Next.js, and full-stack development. Explore his portfolio to see projects, skills, and experience.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sylhet",
      addressCountry: "Bangladesh",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      description:
        "Specializes in building modern web applications using React, Next.js, Node.js, and Three.js.",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Three.js",
        "TypeScript",
        "JavaScript",
        "Headless CMS",
        "WordPress",
        "Shopify",
        "Wix",
        "Squarespace",
        "Full-Stack Development",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://portfolio.rajondey.com", // Updated URL
    },
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(schemaOrgJSONLD)}
    </Script>
  );
};

export default SchemaOrg;
