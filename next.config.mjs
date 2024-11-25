/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will prevent ESLint errors from failing the build
  },
  // Add any other custom configurations here
};

module.exports = nextConfig;

