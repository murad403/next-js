import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image hostname"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
  },
  /* config options here */
  reactCompiler: true, //react compiler support
};

// export default nextConfig;

module.exports = nextConfig;
