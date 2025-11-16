import Icon, { IconKeys } from "../Icon/Icon";
import { cn } from "@/utils";
import { FLOATING_BUTTON_BASE_STYLE } from "./BUTTON_STYLES";

/**
 * @author sangin
 * @component
 * @example
 *
 * <FloatingButton iconName="plus" className={} iconClassName={}/>
 *
 */

interface FloatingButtonProps {
  iconName: IconKeys;
  className?: string;
  iconClassName?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const FloatingButton = ({ iconName, iconClassName, className, type = "button", onClick }: FloatingButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={`${iconName} 버튼`}
      className={cn(FLOATING_BUTTON_BASE_STYLE, className)}
    >
      <Icon name={iconName} className={cn("text-text-inverse", iconClassName)} />
    </button>
  );
};

export default FloatingButton;
