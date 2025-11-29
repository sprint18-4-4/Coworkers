import { Frequency } from "@/types";

/**
 * @author jikwon
 * @description 주기별 라벨을 반환합니다.
 * @param frequency
 * @returns string
 *
 * @example
 * ```tsx
 * getFrequencyLabel("DAILY");
 * // "매일 반복"
 * ```
 */

export const getFrequencyLabel = (frequency: Frequency): string => {
  switch (frequency) {
    case "DAILY":
      return "매일 반복";
    case "WEEKLY":
      return "매주 반복";
    case "MONTHLY":
      return "매월 반복";
    case "ONCE":
      return "반복 없음";
    default:
      return "";
  }
};
