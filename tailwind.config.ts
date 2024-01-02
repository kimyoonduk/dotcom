import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "main-content": "54rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business", "bumblebee", "corporate"],
    darkTheme: "business",
    // lightTheme: "bumblebee",
  },
  darkMode: "class",
};
export default config;
