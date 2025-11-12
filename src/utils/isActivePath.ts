"use client";

import { usePathname } from "next/navigation";

/**
 * @author jikwon
 * 현재 경로가 전달된 href와 일치하는지 여부를 반환합니다.
 * @param href 비교할 경로
 * @returns boolean (일치 여부)
 *
 * @example
 * ```tsx
 * const isActive = useIsActivePath("/");
 * ```
 */
export const useIsActivePath = (href: string): boolean => {
  const pathname = usePathname();

  if (!pathname) return false;

  return pathname === href;
};
