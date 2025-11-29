import { cn } from "@/utils";
import ICONS from "./CONST_ICON";
import { SVGProps } from "react";

export type IconKeys = keyof typeof ICONS;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconKeys;
  className?: string;
  label?: string;
}

/**
 * @author sangin
 * @example
 * <Icon name="alert"/>
 * <Icon name="alert" className="text-primary"/>
 * <Icon name="alert" className="text-primary" onClick={}/>
 */
const Icon = ({ name, className, label }: IconProps) => {
  const SvgIcon = ICONS[name];

  return (
    <SvgIcon
      className={cn("size-6 tablet:size-7", className)}
      {...(label ? { "aria-label": label } : { "aria-hidden": "true" })}
    />
  );
};

export default Icon;
