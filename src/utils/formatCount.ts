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

export const formatClampedCount = (count: number, maxCount: number = 99): string => {
  const safeCount = Math.max(0, count);
  if (safeCount > maxCount) return `${maxCount}+`;
  return String(safeCount);
};
