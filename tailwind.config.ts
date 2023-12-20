import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      screens: {
        tablet: "640px",
        largeTablet: "840px",
      },
      colors: {
        lightYellow: "#ffe580",
        darkYellow: "#ffc400",
        mm_primary: "#a428bc",
        mm_secondary: "#ffc400",
        text_color: "#FFF9ED",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  corePlugins: {
    textOpacity: true,
  },
};
export default config;
