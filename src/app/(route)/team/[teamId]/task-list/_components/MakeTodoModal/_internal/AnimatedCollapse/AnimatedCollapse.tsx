import { cn } from "@/utils";
import { ReactNode } from "react";

interface AnimatedCollapseProps {
  isOpen: boolean;
  children: ReactNode;
}

const AnimatedCollapse = ({ isOpen, children }: AnimatedCollapseProps) => {
  return (
    <div
      className={cn(
        "origin-top overflow-hidden transition-all duration-200 ease-out flex-center",
        isOpen ? "mb-1 opacity-100 max-h-[400px] translate-y-0" : "opacity-0 max-h-0 -translate-y-2",
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCollapse;
