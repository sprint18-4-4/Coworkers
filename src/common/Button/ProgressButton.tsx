import { Icon } from "@/types";
import { PROGRESS_BUTTON_BASE_STYLE } from "./BUTTON_STYLES";
import { cn } from "@/utils";

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
