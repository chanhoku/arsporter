import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0b6fda" },
        gray: { value: "#a9b0be" },
        textgray: { value: "#7a8292" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
