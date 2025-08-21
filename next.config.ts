import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if necessary, but 'https' is recommended
        hostname: "**", // Wildcard to match any hostname
      },
    ],
  },
};

export default nextConfig;
