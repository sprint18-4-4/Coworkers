import { cn } from "@/utils";
import { ReactNode } from "react";
import Dropdown from "../Dropdown/Dropdown";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <PageHeaderBar title="경영관리팀" />
 */

interface PageHeaderBarProps {
  title: ReactNode;
  isDropdown?: boolean;
}

const PageHeaderBar = ({ title, isDropdown = true }: PageHeaderBarProps) => {
  const options = [
    { label: "수정하기", action: () => {} },
    { label: "삭제하기", action: () => {} },
  ];

  return (
    <div
      className={cn(
        "w-full max-w-[1120px] flex items-center gap-2",
        "pc:px-[26px] pc:py-[18px] pc:justify-between pc:bg-background-primary pc:rounded-xl",
      )}
    >
      <h2 className={cn("text-lg-bold text-text-primary", "tablet:text-2xl-bold", "pc:text-2xl-bold")}>{title}</h2>
      {isDropdown && (
        <Dropdown iconName="setting" options={options} iconClassName="size-5 tablet:size-6 text-slate-400" />
      )}
    </div>
  );
};

export default PageHeaderBar;
