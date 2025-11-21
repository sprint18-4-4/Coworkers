"use client";

import { cn } from "@/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";
import {
  BASE_BUTTON_BASE_STYLE,
  BASE_BUTTON_DANGER_STYLE,
  BASE_BUTTON_STYLE_BY_SIZE,
  BASE_BUTTON_STYLE_BY_VARIANT,
} from "./BUTTON_STYLES";

type Variant = keyof typeof BASE_BUTTON_STYLE_BY_VARIANT;
type Size = keyof typeof BASE_BUTTON_STYLE_BY_SIZE;

/**
 * @author sangin
 * @component
 * @example
 * ```tsx
 * // 기본 사용
 * <Button variant="solid" size="large">
 *   생성하기
 * </Button>
 *
 * // 아이콘과 함께 사용
 * <Button variant="outlinedPrimary" size="medium">
 *   <CheckIcon />
 *   <span>확인</span>
 * </Button>
 *
 * // 위험 상태
 * <Button variant="solid" size="large" danger>
 *   삭제하기
 * </Button>
 *
 * // 비활성화 상태
 * <Button variant="solid" size="large" disabled>
 *   비활성화됨
 * </Button>
 * ```
 *
 * @param {ButtonProps}
 */

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant: Variant;
  size: Size;
  danger?: boolean;
  className?: string;
}

const BaseButton = ({ children, variant = "solid", size = "large", className, danger, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      type="button"
      className={cn(
        BASE_BUTTON_BASE_STYLE,
        BASE_BUTTON_STYLE_BY_SIZE[size],
        BASE_BUTTON_STYLE_BY_VARIANT[variant],
        variant.includes("outlined") && size === "medium" && "bg-background-inverse",
        danger && BASE_BUTTON_DANGER_STYLE,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default BaseButton;
