import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  url = "",
  image = "/og-image.png",
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://portfolio.rajondey.com${url}`} />
      {/* Open Graph */}
      <meta
        property="og:url"
        content={`https://portfolio.rajondey.com${url}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Rajon Dey - Senior Software Engineer Portfolio"
      />
      <meta
        property="og:site_name"
        content="Rajon Dey - Senior Software Engineer Portfolio"
      />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
