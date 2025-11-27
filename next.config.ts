import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: ESLint errors will not fail production builds
    ignoreDuringBuilds: true,
  },

};

module.exports = {
  images: {
    // either this:
    domains: ["lh3.googleusercontent.com", "lh5.googleusercontent.com", "lh6.googleusercontent.com"],
    // or the newer, more precise form:
    // remotePatterns: [
    //   { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
    //   { protocol: "https", hostname: "lh5.googleusercontent.com", pathname: "/**" },
    //   { protocol: "https", hostname: "lh6.googleusercontent.com", pathname: "/**" },
    // ],
  },
};

export default nextConfig;

