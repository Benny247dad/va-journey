// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ✅ Prevent ESLint errors from breaking the Vercel build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;