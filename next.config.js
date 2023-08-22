/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["media.graphassets.com", "picsum.photos", "placehold.co"],
    unoptimized: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION", //your next configs goes here
  },
});
