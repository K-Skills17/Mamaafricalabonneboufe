/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
