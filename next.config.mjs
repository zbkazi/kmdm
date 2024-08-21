/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  experimental: {
    // Add experimental features here if needed
  },
  output: 'export', // Correct configuration for static HTML export
};

export default nextConfig;
