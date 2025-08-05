/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pump.fun'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig