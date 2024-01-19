/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/homepage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/homepage",
        destination: "/es",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
