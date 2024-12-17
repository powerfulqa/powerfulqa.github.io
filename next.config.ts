import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})({
  output: 'export',
  basePath: '/mecster09.github.io',
  images: {
    unoptimized: true,
  }
});

export default nextConfig;
