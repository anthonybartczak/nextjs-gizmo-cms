/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
  "@fullcalendar/react",
]);

const nextConfig = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ["assets.example.com", "placeimg.com", "wp.gizmo.com.pl"],
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
