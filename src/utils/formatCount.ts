/**
 * @author jikwon
 * @description count가 99를 초과할 경우 "99+"로 표시합니다.
 * @param count
 * @returns string
 *
 * @example
 * ```tsx
 * formatCount(100);
 * // "99+"
 * ```
 */

export const formatCount = (count: number): string => {
  if (count > 99) return "99+";
  return String(count);
};
