/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
