/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")([
//   "@fullcalendar/common",
//   "@fullcalendar/common",
//   "@fullcalendar/daygrid",
//   "@fullcalendar/timegrid",
//   "@fullcalendar/react",
// ]);

const nextConfig = {
  // transpilePackages: [
  //   "@fullcalendar/common",
  //   "@fullcalendar/common",
  //   "@fullcalendar/daygrid",
  //   "@fullcalendar/timegrid",
  //   "@fullcalendar/react",
  // ],
  env: {
    REVALIDATE_SECRET_KEY: process.env.REVALIDATE_SECRET_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: ["assets.example.com", "wp.gizmo.com.pl", "res.cloudinary.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
