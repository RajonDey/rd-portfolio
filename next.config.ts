/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["portfolio.rajondey.com"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/showcase",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/showcase/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
