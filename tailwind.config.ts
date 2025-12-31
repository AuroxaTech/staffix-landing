import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'staffix-blue': '#22479b',
        'staffix-blue-light': '#3a5fb8',
        'staffix-blue-dark': '#1a3578',
      },
    },
  },
  plugins: [],
};

export default config;

