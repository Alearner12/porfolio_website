/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes to URLs
  // Disable React's StrictMode in production if needed
  // (useful for some third-party libraries)
  reactStrictMode: process.env.NODE_ENV === 'development',
};

module.exports = nextConfig;
