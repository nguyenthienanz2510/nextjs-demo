/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://localhost:8080'],
  },
};

module.exports = nextConfig;