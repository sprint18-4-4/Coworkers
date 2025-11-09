import { cn } from "@/utils";
import { ReactNode } from "react";

export const FLOATING_BUTTON_BASE_STYLE = "size-14 rounded-full py-[14px] px-[21px] flex-center";
export const FLOATING_BUTTON_STYLE_BY_VARIANT = {
  primary: "bg-brand-primary",
  inverse: "bg-background-inverse border border-border-primary shadow-xl",
};

type Variant = keyof typeof FLOATING_BUTTON_STYLE_BY_VARIANT;

interface FloatingButtonProps {
  variant: Variant;
  icon: ReactNode;
}

const FloatingButton = ({ variant, icon }: FloatingButtonProps) => {
  return <button className={cn(FLOATING_BUTTON_BASE_STYLE, FLOATING_BUTTON_STYLE_BY_VARIANT[variant])}>d</button>;
};

export default FloatingButton;
