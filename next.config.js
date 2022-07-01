/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'cdn2.thecatapi.com', 'media.makeameme.org' ]

  }
}

module.exports = nextConfig
