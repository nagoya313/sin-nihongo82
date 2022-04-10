/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    serverComponents: true,
    runtime: 'edge',
  },
  swcMinify: true,
};

module.exports = nextConfig;
