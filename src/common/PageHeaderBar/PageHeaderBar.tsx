import { cn } from "@/utils";
import { ReactNode } from "react";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <PageHeaderBar title="경영관리팀" />
 */

interface PageHeaderBarProps {
  title: ReactNode;
}

const PageHeaderBar = ({ title }: PageHeaderBarProps) => {
  return (
    <div
      className={cn(
        "w-full flex items-center gap-2",
        "pc:px-[26px] pc:py-[18px] pc:justify-between pc:bg-background-primary pc:rounded-xl",
      )}
    >
      <h2 className={cn("text-lg-bold text-text-primary", "tablet:text-2xl-bold", "pc:text-2xl-bold")}>{title}</h2>
      {/* TODO(지권): 아이콘 추가 */}
      <div className="size-5 bg-black" />
    </div>
  );
};

export default PageHeaderBar;
