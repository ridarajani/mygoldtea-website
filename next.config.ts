/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mygoldtea-website',
  assetPrefix: '/mygoldtea-website/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mygoldtea-website',
  },
}

module.exports = nextConfig
