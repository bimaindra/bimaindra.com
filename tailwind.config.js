/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
        dots: "radial-gradient(#94a3b8 1px,transparent 0)",
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
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class",
};
