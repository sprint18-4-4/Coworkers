import { flexCenter, flexColCenter, customShadow } from "./src/utils/customPlugins";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "430px" }, // 0–430px
      tablet: { min: "431px" }, // 431–744px
      pc: { min: "745px" }, // 745px 이상
    },

    extend: {
      colors: {
        brand: {
          primary: "#5189FA",
          secondary: "#EEF3FF",
          tertiary: "#315296",
        },
        point: {
          purple: "#A855F7",
          cyan: "#06B6D4",
          blue: "#C9DAFD",
          pink: "#EC4899",
          rose: "#DBBAC0",
          orange: "#F97316",
          yellow: "#EAB308",
        },
        background: {
          primary: "#FFFFFF",
          secondary: "#F1F5F9",
          tertiary: "#E2E8F0",
          inverse: "#FFFFFF",
        },
        interaction: {
          inactive: "#94A3B8",
          hover: "#416EC8",
          pressed: "#3B63B5",
          focus: "#416EC8",
        },
        border: {
          primary: "#E2E8F0",
          secondary: "#CBD5E1",
        },
        text: {
          primary: "#1E293B",
          secondary: "#334155",
          tertiary: "#0F172A",
          default: "#64748B",
          inverse: "#FFFFFF",
          disabled: "#94A3B8",
        },
        status: {
          danger: "#FC4B4B",
        },
        icon: {
          primary: "#64748B",
          inverse: "#F8FAFC",
          brand: "#74A1FB",
        },
        state: {
          200: "#e2e8f0",
          400: "#94A3B8",
        },
      },

      fontFamily: {
        pretendard: ["Pretendard"],
      },

      fontSize: {
        "4xl-brand-bold": ["48px", { lineHeight: "57px", fontWeight: "700" }],
        "4xl": ["40px", { lineHeight: "48px", fontWeight: "500" }],
        "3xl-brand-bold": ["36px", { lineHeight: "43px", fontWeight: "700" }],
        "3xl-bold": ["32px", { lineHeight: "38px", fontWeight: "700" }],
        "3xl-semibold": ["32px", { lineHeight: "38px", fontWeight: "600" }],
        "2xl-brand-bold": ["28px", { lineHeight: "38px", fontWeight: "700" }],
        "2xl-bold": ["24px", { lineHeight: "28px", fontWeight: "700" }],
        "2xl-semibold": ["24px", { lineHeight: "28px", fontWeight: "600" }],
        "2xl-medium": ["24px", { lineHeight: "28px", fontWeight: "500" }],
        "2xl-regular": ["24px", { lineHeight: "28px", fontWeight: "400" }],
        "xl-bold": ["20px", { lineHeight: "24px", fontWeight: "700" }],
        "xl-semibold": ["20px", { lineHeight: "24px", fontWeight: "600" }],
        "xl-medium": ["20px", { lineHeight: "24px", fontWeight: "500" }],
        "xl-regular": ["20px", { lineHeight: "24px", fontWeight: "400" }],
        "2lg-bold": ["18px", { lineHeight: "21px", fontWeight: "700" }],
        "2lg-semibold": ["18px", { lineHeight: "21px", fontWeight: "600" }],
        "2lg-medium": ["18px", { lineHeight: "21px", fontWeight: "500" }],
        "2lg-regular": ["18px", { lineHeight: "21px", fontWeight: "400" }],
        "lg-bold": ["16px", { lineHeight: "19px", fontWeight: "700" }],
        "lg-semibold": ["16px", { lineHeight: "19px", fontWeight: "600" }],
        "lg-medium": ["16px", { lineHeight: "19px", fontWeight: "500" }],
        "lg-regular": ["16px", { lineHeight: "19px", fontWeight: "400" }],
        "md-bold": ["14px", { lineHeight: "17px", fontWeight: "700" }],
        "md-semibold": ["14px", { lineHeight: "17px", fontWeight: "600" }],
        "md-medium": ["14px", { lineHeight: "17px", fontWeight: "500" }],
        "md-regular": ["14px", { lineHeight: "17px", fontWeight: "400" }],
        "sm-semibold": ["13px", { lineHeight: "16px", fontWeight: "600" }],
        "sm-medium": ["13px", { lineHeight: "16px", fontWeight: "500" }],
        "xs-semibold": ["12px", { lineHeight: "14px", fontWeight: "600" }],
        "xs-medium": ["12px", { lineHeight: "14px", fontWeight: "500" }],
        "xs-regular": ["12px", { lineHeight: "14px", fontWeight: "400" }],
      },
    },
  },
  plugins: [flexCenter, flexColCenter, customShadow],
};

export default config;
