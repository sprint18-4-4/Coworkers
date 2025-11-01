import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";

/**
 * @fileoverview
 * Tailwind CSS 커스텀 유틸리티 플러그인 모음
 * - 프로젝트 내 반복되는 스타일 패턴을 재사용 가능하도록 정의
 * - IntelliSense 자동완성 인식용
 *
 * 등록 위치:
 *   tailwind.config.ts → plugins: [flexCenter, flexColCenter]
 */

/**
 * flex-center
 * display: flex + align-items/justify-content center 정렬 유틸리티
 * 사용 예시: <div className="flex-center">...</div>
 */
export const flexCenter = plugin(function ({ addUtilities }) {
  const utilities: Record<string, CSSRuleObject> = {
    ".flex-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  addUtilities(utilities);
});

/**
 * flex-col-center
 * 세로 방향 플렉스 + 중앙 정렬
 * 사용 예시: <div className="flex-col-center">...</div>
 */
export const flexColCenter = plugin(function ({ addUtilities }) {
  const utilities: Record<string, CSSRuleObject> = {
    ".flex-col-center": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  addUtilities(utilities);
});
