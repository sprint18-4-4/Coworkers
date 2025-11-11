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

    const svgrRule: RuleSetRule = {
      test: /\.svg$/i,
      // issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
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
