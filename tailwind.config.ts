
// tailwind.config.ts
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        textDark: "#1A1A1A",
        textLight: "#4A4A4A",
        accent: "#333333",
        background: "#F5F5F5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px", 
          lg: "960px", 
          xl: "1152px", 
        },
      },
    },
  },
  plugins: [],
};

export default config;
