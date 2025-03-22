/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Enables standalone mode
  distDir: 'out', // Ensures Next.js outputs to the correct directory
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true, // Improves build performance
};

module.exports = nextConfig;