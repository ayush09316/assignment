import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "collection":
          "linear-gradient(180deg, #18282A 0%, #221A2C 100%)",
        "collection-light":"linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)",
          

      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
