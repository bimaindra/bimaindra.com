import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      new URL('https://ap-southeast-2.graphassets.com/**'),
      new URL('https://media.graphassets.com/**'),
      new URL('https://picsum.photos/**'),
      new URL('https://placehold.co/**'),
    ],
  },
};

export default nextConfig;
