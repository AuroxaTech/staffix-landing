import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Ensure static files are served correctly
  output: 'standalone',
};

export default nextConfig;
