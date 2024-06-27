import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    boxShadow: {
      myShadow1: "4.1px -5px 0 0  rgb(241 245 249)",
      myShadow2: "-4.1px -5px 0 0  rgb(241 245 249)",
    },
  },
  darkMode: "class",
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
