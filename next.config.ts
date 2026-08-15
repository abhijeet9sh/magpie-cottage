import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // All images are now local — no remote patterns needed
    remotePatterns: [],
  },
};

export default nextConfig;

