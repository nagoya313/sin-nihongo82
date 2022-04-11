/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    serverComponents: true,
    runtime: 'nodejs',
  },
};

module.exports = nextConfig;
