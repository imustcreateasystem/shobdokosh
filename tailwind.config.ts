import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fff1f2",
          "100": "#ffe1e3",
          "200": "#ffc7cc",
          "300": "#ffa1a9",
          "400": "#ff6a76",
          "500": "#f73242",
          "600": "#e51d2d",
          "700": "#c11422",
          "800": "#9f1520",
          "900": "#841821",
          "950": "#48070c",
        },
      },
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
