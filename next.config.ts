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
    // const svgrRule: RuleSetRule = {
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,
    //   use: [
    //     {
    //       loader: "@svgr/webpack",
    //       options: {
    //         svgo: true,
    //         svgoConfig: {
    //           plugins: [
    //             { name: "removeViewBox", active: false }, // viewBox 유지
    //             { name: "removeDimensions", active: true }, // width/height 제거
    //           ],
    //         },
    //         ref: true,
    //         titleProp: true,
    //         prettier: false,
    //       },
    //     },
    //   ],
    // };

    // const fileLoaderRule = rules.find((rule) => rule.test?.test?.(".svg"));

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: [
    //     {
    //       loader: "@svgr/webpack",
    //     },
    //   ],
    // });

    //  SVGR 로더 추가 (svg -> React 컴포넌트 import)
    // - viewBox 유지 / width,height 제거 → Tailwind `size-*`가 적용되도록
    const svgrRule: RuleSetRule = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                { name: "removeDimensions", active: true },
              ],
            },
            ref: true,
            titleProp: true,
            prettier: false,
          },
        },
      ],
    };

    // Next 내부가 oneOf 체계면 그 "맨 앞"에, 아니면 최상위 rules 맨 앞에 꽂아 우선 매칭
    let inserted = false;
    for (const rule of rules) {
      if (typeof rule === "object" && rule !== null && "oneOf" in rule && Array.isArray((rule as RuleSetRule).oneOf)) {
        (rule as RuleSetRule).oneOf!.unshift(svgrRule);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      rules.unshift(svgrRule);
    }

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
