import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.real-music.store",
        port: "",
        pathname: "**/**",
        search: "",
      },
    ],
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
