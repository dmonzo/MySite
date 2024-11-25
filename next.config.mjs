/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will prevent ESLint errors from failing the build
  },
  typescript: {
    ignoreBuildErrors: true, // This will prevent TypeScript errors from failing the build
  },
  // Add any other custom configurations here
};

export default nextConfig;

