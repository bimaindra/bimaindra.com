/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontWeight: {
      body: 400,
      medium: 500,
      title: 600,
    },
    extend: {
      backgroundImage: {
        "dots-light": "radial-gradient(#94a3b8 1px,transparent 0)",
        "dots-dark": "radial-gradient(#1e293b 1px,transparent 0)",
        "grid-slate-light": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='1' height='1' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V60'/%3e%3c/svg%3e")`,
        "grid-slate-dark": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='1' height='1' fill='none' stroke='%23475569'%3e%3cpath d='M0 .5H31.5V60'/%3e%3c/svg%3e")`,
      },
      colors: {
        "wd-dark": "#001219",
        "wd-light": "#FFFFFF",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    nextui(),
  ],
  darkMode: "class",
};
