import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // Ensures ESLint errors break the build
  },
  env: {
    devlopementDomain: "http://localhost:5000",
    productionDomian: "https://dev-api.	clarksonlinematerialgallery.com"
  }
};

export default nextConfig;
