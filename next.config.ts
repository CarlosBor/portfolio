import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/portfolio', // Replace with your actual repo name (if applicable)
  images: { unoptimized: true }, // Disable Next.js image optimization (GitHub Pages doesn't support it)
};

export default nextConfig;
