import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        soft: "#f6f6f4",
        accent: "#e85d3f"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
};
export default config;