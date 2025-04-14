import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'i.ytimg.com', 
      'substack.com',
      'substackcdn.com', 
      'cdn.substack.com', 
      'varyant.substack.com', 
      'miro.medium.com',
      'cdn-images-1.medium.com',
      'cdn.prod.website-files.com',
      'uploads-ssl.webflow.com',
      'static.substack.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.substack.com',
        pathname: '/api/v1/posts/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.medium.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
