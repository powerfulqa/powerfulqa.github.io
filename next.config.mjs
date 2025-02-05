import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})({
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
});

export default nextConfig; 