import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['dblseo-roofing.vercel.app'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    formats: ['image/webp'],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googleapis.com; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' data: *.google.com *.googleapis.com; font-src 'self' data: *.googleapis.com; frame-src *.google.com *.googleapis.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
