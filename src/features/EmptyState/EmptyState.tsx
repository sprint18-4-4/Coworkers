import { cn } from "@/utils";
import { ReactNode } from "react";

interface EmptyStateProps {
  ariaLabel: string;
  text: ReactNode;
}

const EmptyState = ({ ariaLabel, text }: EmptyStateProps) => {
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={cn(
        "w-full h-[426px] flex-col-center text-center text-md-regular text-text-default",
        "tablet:h-[571px]",
        "pc:h-[328px]",
      )}
    >
      {text}
    </div>
  );
};

export default EmptyState;
