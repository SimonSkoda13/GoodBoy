import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-900": "#CD8A64",
      "primary-800": "#C4794F",
      "primary-500": "#F3E2D9",
      "primary-300": "#FAF9F9",
      dark: "#585757",
      greyText: "#9F9F9F",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
export default config;
