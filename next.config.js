const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you're using remark-math, you can add it here
    // remarkPlugins: [require('remark-math')],
    // rehypePlugins: [require('rehype-katex')],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React StrictMode is enabled in development by default
  reactStrictMode: process.env.NODE_ENV === 'development',
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  
  // Enable static exports
  output: 'export',
  
  // Add trailing slashes to URLs
  trailingSlash: true,
  
  // Configure page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Handle MDX files
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            // Add any MDX options here
          },
        },
      ],
    });
    
    return config;
  },
  
  // Enable source maps in production
  productionBrowserSourceMaps: false,
  
  // TypeScript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
