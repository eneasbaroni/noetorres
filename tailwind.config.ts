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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dm: ["var(--font-dm)"],
        cormorant: ["var(--font-cormorant)"],
      },
      minHeight: {
        section: "calc(100vh - 50px - 16px)",
      }
    },
  },
  plugins: [],
};
export default config;
