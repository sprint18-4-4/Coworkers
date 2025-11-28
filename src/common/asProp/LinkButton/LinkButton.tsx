import { ReactNode } from "react";
import { cn } from "@/utils";
import {
  BASE_BUTTON_BASE_STYLE,
  BASE_BUTTON_STYLE_BY_SIZE,
  BASE_BUTTON_STYLE_BY_VARIANT,
} from "@/common/Button/BUTTON_STYLES";
import Link, { LinkProps } from "next/link";

type ButtonSize = keyof typeof BASE_BUTTON_STYLE_BY_SIZE;
type ButtonVariant = keyof typeof BASE_BUTTON_STYLE_BY_VARIANT;

interface LinkButtonProps extends LinkProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

const LinkButton = ({ size = "medium", variant = "solid", className, children, ...resetProps }: LinkButtonProps) => {
  return (
    <Link
      className={cn(
        BASE_BUTTON_BASE_STYLE,
        BASE_BUTTON_STYLE_BY_SIZE[size],
        BASE_BUTTON_STYLE_BY_VARIANT[variant],
        className,
      )}
      {...resetProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
