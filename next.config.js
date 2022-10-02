/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'lh3.googleusercontent.com', 'cdn.discordapp.com', 'i.scdn.co'],
  },
}

module.exports = nextConfig
