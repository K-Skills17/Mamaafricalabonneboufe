import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A45C40", // Terracota
        secondary: "#D4AF37", // Ouro
        background: "#1A1A1A", // Carvão Profundo
      },
    },
  },
  plugins: [],
};
export default config;
