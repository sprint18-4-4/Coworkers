import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

function hasProp<K extends string>(obj: unknown, prop: K): obj is Record<K, unknown> {
  return typeof obj === "object" && obj !== null && prop in obj;
}
function isRuleWithRegExpTest(rule: unknown): rule is RuleSetRule & { test: RegExp } {
  return hasProp(rule, "test") && rule.test instanceof RegExp;
}

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: unknown): rule is RuleSetRule & { test: RegExp } => isRuleWithRegExpTest(rule) && rule.test.test(".svg"),
    );
    if (!fileLoaderRule) return config;

    // *.svg?url → 기존처럼 URL로 (Next/Image 등)
    const urlSvgRule: RuleSetRule = { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ };

    // 나머지 *.svg → React 컴포넌트(@svgr/webpack)
    const svgrRule: RuleSetRule = {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [/url/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            ref: true,
            titleProp: true,
            dimensions: false, // width/height 제거 → Tailwind `size-*`로 제어
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "preset-default", params: { overrides: { removeViewBox: false } } },
                // 핵심: 내부 색/선 속성을 제거해서 currentColor만 따르게 만들기
                { name: "removeAttrs", params: { attrs: "(fill|stroke|color)" } },
              ],
            },
            // 루트에 기본값 주입: 모두 상속
            svgProps: {
              fill: "currentColor",
              stroke: "currentColor",
              color: "currentColor",
            },
          },
        },
      ],
    };

    config.module.rules.push(urlSvgRule, svgrRule);
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
