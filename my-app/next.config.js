/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "www.lifefitness.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
