/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "www.lifefitness.com"],
  },
  experimental: {
    appDir: true,
  },
};
const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig;
