import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
    qualities: [75, 90], // Fix for image quality warning
  },
  // Ensure static files are served correctly
  output: 'standalone',
};

export default nextConfig;
