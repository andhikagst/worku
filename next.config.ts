import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'worku-staging-cdn.syafahadyan.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'worku-static-asset-cdn.syafahadyan.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
