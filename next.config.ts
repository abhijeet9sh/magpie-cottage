import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are now local — no remote patterns needed
    remotePatterns: [],
  },
};

export default nextConfig;
