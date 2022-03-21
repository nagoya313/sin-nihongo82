/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponents: true,
    runtime: 'nodejs',
  },
};

module.exports = nextConfig;
