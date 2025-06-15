/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any other domains you use
  },
  // Enable static exports for full static site generation
  output: 'export',
  // Optional: Add a trailing slash for better compatibility
  trailingSlash: true,
  // Optional: Disable image optimization if not using next/image
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
