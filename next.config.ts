import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'fyk2pgosecdw9j7w.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;