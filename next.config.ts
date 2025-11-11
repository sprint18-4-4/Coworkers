import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  reactCompiler: true,

  webpack: (config) => {
    // rules를 Webpack 타입으로 협소화
    const rules = (config.module?.rules ?? []) as RuleSetRule[];

    // 기존 svg 처리 룰 찾기
    const fileLoaderRule = rules.find(
      (rule) =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    );

    // 기존 파일 로더에서 .svg 제외 (충돌 방지)
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // SVGR 로더 추가 (svg -> React 컴포넌트 import)
    const svgrRule: RuleSetRule = {
      test: /\.svg$/i,

      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false }, // viewBox 유지
                { name: "removeDimensions", active: true }, // width/height 제거
              ],
            },
            ref: true,
            titleProp: true,
            prettier: false,
          },
        },
      ],
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    // 변경된 rules를 반영해서 반환
    return {
      ...config,
      module: {
        ...(config.module ?? {}),
        rules,
      },
    };
  },
};

export default nextConfig;
