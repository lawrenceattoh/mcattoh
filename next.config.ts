/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensure proper static image handling
  },
};

module.exports = nextConfig;
