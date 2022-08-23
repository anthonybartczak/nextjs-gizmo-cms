/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ["assets.example.com", "placeimg.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
