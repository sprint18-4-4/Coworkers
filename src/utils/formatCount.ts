/**
 * 지정된 `maxCount`를 초과한 숫자를 `"maxCount+"` 형태로 포맷합니다.
 * UI에서 배지 숫자, 알림 개수 등을 표시할 때 사용합니다.
 *
 * @author jikwon
 *
 * @param count 실제 숫자 값입니다.
 * @param maxCount 최대 표시 가능한 값입니다. 이 값을 초과하면 `"maxCount+"` 형태로 반환됩니다.
 * @returns 포맷된 문자열을 반환합니다.
 *
 * @example
 * ```tsx
 * formatCount(120, 99);
 * // "99+"
 *
 * formatCount(450, 999);
 * // "999+"
 *
 * formatCount(45, 99);
 * // "45"
 * ```
 */

export const formatClampedCount = (count: number, maxCount: number = 99): string => {
  const safeCount = Math.max(0, count);
  if (safeCount > maxCount) return `${maxCount}+`;
  return String(safeCount);
};
