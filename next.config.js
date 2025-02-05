/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbotrace: {
      enabled: true,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

module.exports = nextConfig 