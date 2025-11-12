import { Icon } from "@/types";
import { PROGRESS_BUTTON_BASE_STYLE } from "./BUTTON_STYLES";
import { cn } from "@/utils";

/**
 * @author sangin
 * @component
 * @example
 *
 * // 기본
 * <ProgressButton text="할 일"/>
 *
 * // 커스텀
 * <ProgressButton text="할 일" className={}/>
 *
 * // onClick
 * <ProgressButton text="할 일" className={} onClick={}/>
 */

interface ProgressButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const ProgressButton = ({ text, className, onClick }: ProgressButtonProps) => {
  return (
    <button type="button" aria-label="btn-progress" className={cn(PROGRESS_BUTTON_BASE_STYLE, className)}>
      <span>{text}</span>
      <Icon
        name="plusSm"
        onClick={onClick}
        className="bg-background-primary rounded-lg text-state-400 cursor-pointer"
      />
    </button>
  );
};

export default ProgressButton;
