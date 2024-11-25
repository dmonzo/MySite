/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '', // Replace 'your-repo-name' with your actual repository name
  images: {
    unoptimized: true, // Required for static export
  },
  // Add any other custom configurations here
  // Disable server-based features
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig

