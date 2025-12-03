/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // IMPORTANT: set basePath/assetPrefix to match repo name for GitHub Pages
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  // static export compatibility
  trailingSlash: true
}

module.exports = nextConfig
