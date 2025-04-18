import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    '@heroui/card',
    '@heroui/system',
    '@heroui/theme',
    '@heroui/react-utils',
  ],
};

export default nextConfig;
