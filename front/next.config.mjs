/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.telegram.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.telegram.org",
        pathname: "/file/bot**/**",
      },
    ],
  },
};

export default nextConfig;
