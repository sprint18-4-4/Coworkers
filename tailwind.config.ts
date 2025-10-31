import { flexCenter, flexColCenter } from "./src/utils/customPlugins";
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
        brand: {
          primary: "#10B981",
          secondary: "#34D399",
          tertiary: "#A3E635",
        },
        point: {
          purple: "#A855F7",
          cyan: "#06B6D4",
          pink: "#EC4899",
          rose: "#F43F5E",
          orange: "#F97316",
          yellow: "#EAB308",
        },
        background: {
          primary: "#0F172A",
          secondary: "#1E293B",
          tertiary: "#334155",
          inverse: "#FFFFFF",
        },
        interaction: {
          inactive: "#94A3B8",
          hover: "#059669",
          pressed: "#047857",
        },
        border: {
          primary: "#F8FAFC",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          tertiary: "#E2E8F0",
          default: "#64748B",
          inverse: "#FFFFFF",
          disabled: "#94A3B8",
        },
        status: {
          danger: "#DC2626",
        },
        icon: {
          primary: "#64748B",
          inverse: "#F8FAFC",
          brand: "#10B981",
        },
      },
    },
  },
  plugins: [flexCenter, flexColCenter],
};

export default config;
