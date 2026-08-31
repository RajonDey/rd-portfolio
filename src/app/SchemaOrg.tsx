import Script from "next/script";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  IEEE_PAPER_TITLE,
  IEEE_URL,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_ROLE,
  getSiteDescription,
} from "@/lib/site";

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: SITE_ROLE,
        url: SITE_ORIGIN,
        email: CONTACT_EMAIL,
        sameAs: [GITHUB_URL, LINKEDIN_URL],
        description: getSiteDescription(),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sylhet",
          addressCountry: "Bangladesh",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: SITE_ROLE,
          description:
            "Builds production web applications with React, Next.js, TypeScript, Node.js, and Python.",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "FastAPI",
            "AWS",
            "Docker",
            "CI/CD",
          ],
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": SITE_ORIGIN,
        },
      },
      {
        "@type": "ScholarlyArticle",
        name: IEEE_PAPER_TITLE,
        url: IEEE_URL,
        author: {
          "@type": "Person",
          name: SITE_NAME,
        },
      },
    ],
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
