import { cn } from "@/utils";
import { SIZE_MAP } from "./SIZE_MAP";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className = "" }: LoadingSpinnerProps) => {
  return (
    <div role="status" aria-label="로딩 중" className={cn("inline-flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-solid border-brand-primary border-t-transparent",
          SIZE_MAP[size],
        )}
      />
      <span className="sr-only">로딩 중…</span>
    </div>
  );
};

export default LoadingSpinner;
