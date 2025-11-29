import dayjs from "dayjs";

/**
 * @author jikwon
 * @description ISO 문자열을 한국어로 변환
 * @param isoString ISO 문자열
 * @returns 'YYYY년 M월 D일' 형식의 문자열
 *
 * @example
 * ```tsx
 * formatToKoreanDate("2025-11-14T12:58:00Z")
 * // "2025년 11월 14일"
 * ```
 */

export const formatToKoreanDate = (isoString: string | Date) => {
  if (!isoString) return "";
  return dayjs(isoString).format("YYYY년 M월 D일");
};
