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
      colors: {
        "wd-primary": "#219EBC",
        "wd-secondary": "#84A98C",
        "wd-error": "#AE2012",
        "wd-warning": "#EE9B00",
        "wd-success": "#0A9396",
        "wd-light": "#FFFFFF",
        "wd-dark": "#001219",
        "wd-black": "#000000",
        "wd-white": "#FFFFFF",
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
