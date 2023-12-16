const { prototype } = require("events");
const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "tsx", "ts", "jsx", "js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kimyoonduk.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
