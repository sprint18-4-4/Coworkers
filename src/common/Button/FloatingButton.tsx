import { IconName } from "@/types";
import Icon from "../Icon/Icon";
import { cn } from "@/utils";
import { FLOATING_BUTTON_BASE_STYLE, FLOATING_BUTTON_STYLE_BY_VARIANT } from "./BUTTON_STYLES";

type Variant = keyof typeof FLOATING_BUTTON_STYLE_BY_VARIANT;

/**
 * @author sangin
 * @component
 * @example
 *
 * // variant : primary
 * <FloatingButton variant="primary" iconName="plusSm"/>
 *
 * // variant : inverse
 * <FloatingButton variant="inverse" iconName="plusSm"/>
 */

interface FloatingButtonProps {
  variant: Variant;
  iconName: IconName;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const FloatingButton = ({ variant, iconName, className, type = "button", onClick }: FloatingButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={`${iconName} 버튼`}
      className={cn(FLOATING_BUTTON_BASE_STYLE, FLOATING_BUTTON_STYLE_BY_VARIANT[variant], className)}
    >
      <Icon name={iconName} className="text-icon-inverse" />
    </button>
  );
};

export default FloatingButton;
