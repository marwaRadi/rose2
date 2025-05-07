import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* config options here */

  images: {
    domains: ["i.pravatar.cc"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "flower.elevateegy.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        search: "",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
