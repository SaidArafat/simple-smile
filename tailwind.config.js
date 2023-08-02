/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#2C95DB",
      secondary: "#B0B0B0",
      heading: "#070709",
      "blue-light": "#F8FCFF",
      gray: "#D9D9D9",
      white: "#fff",
      black: "#070709",
      blue: "#2C95DB",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
    extend: {},
  },
  plugins: [],
};
