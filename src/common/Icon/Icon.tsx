import { cn } from "@/utils";
import ICONS from "./CONST_ICON";

type IconKeys = keyof typeof ICONS;

interface IconProps {
  name: IconKeys;
  className?: string;
}

/**
 * @author sangin
 * @example
 * <Icon name="alert"/>
 * <Icon name="alert" className="text-primary"/>
 */
const Icon = ({ name, className }: IconProps) => {
  const SvgIcon = ICONS[name];

  return <SvgIcon className={cn("size-6 tablet:size-7", className)} aria-hidden="true" />;
};

export default Icon;
