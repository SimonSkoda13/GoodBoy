import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary.900": "#CD8A64",
      "primary.800": "#C4794F",
      greyText: "#9F9F9F",
    },
  },
  plugins: [],
};
export default config;
