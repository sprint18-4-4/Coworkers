"use client";

import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

const BASE_STYLE = "w-full flex-center gap-1";
const DANGER_STYLE =
  "bg-status-danger text-text-inverse hover:bg-status-danger active:bg-status-danger disabled:bg-status-danger disabled:text-text-inverse";

const styleBySize = {
  large: "h-12 rounded-xl text-lg-semibold",
  medium: "h-10 rounded-full text-md-semibold",
  small: "h-[33px] rounded-lg text-md-semibold",
};

const styleByVariant = {
  solid:
    "bg-brand-primary text-text-inverse hover:bg-interaction-hover active:bg-interaction-inactive disabled:bg-interaction-inactive",
  outlinedPrimary:
    "text-brand-primary border border-brand-primary hover:text-interaction-hover active:text-interaction-pressed disabled:text-interaction-inactive disabled:border-interaction-inactive",
  outlinedSecondary: "text-text-default border border-border-secondary",
};

type Variant = keyof typeof styleByVariant;
type Size = keyof typeof styleBySize;

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant: Variant;
  size: Size;
  danger?: boolean;
  className?: string;
}

const Button = ({ children, variant, size, className, danger, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      type="button"
      className={cn(
        BASE_STYLE,
        styleBySize[size],
        styleByVariant[variant],
        variant.includes("outlined") && size === "medium" && "bg-background-inverse",
        danger && DANGER_STYLE,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
