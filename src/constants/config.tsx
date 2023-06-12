import localFont from "@next/font/local";

export const isDev = process.env.NODE_ENV !== "production";

export const FontDefault = localFont({
  src: [
    {
      path: "./../static/fonts/wotfard-regular.woff2",
      weight: "400",
    },
    {
      path: "./../static/fonts/wotfard-medium.woff2",
      weight: "500",
    },
    {
      path: "./../static/fonts/wotfard-semibold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
});
