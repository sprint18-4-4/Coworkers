import { cn } from "@/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface PageEmptyStateProps {
  title: ReactNode;
  children: ReactNode;
}

const PageEmptyState = ({ title, children }: PageEmptyStateProps) => {
  return (
    <div className="w-full max-w-[660px] flex-col-center gap-[47px]">
      <div
        className={cn(
          "flex-col-center gap-6 text-center text-md-medium text-text-default",
          "tablet:gap-8 pc:text-lg-medium",
        )}
      >
        <Image
          src="/not-found/not-found.svg"
          alt=""
          width={660}
          height={300}
          draggable={false}
          priority
          className={cn("h-auto w-full max-w-[300px]", "tablet:max-w-[528px]", "pc:max-w-[660px]")}
        />
        {title}
      </div>
      <div className={cn("w-full flex-col-center gap-2", "pc:gap-4")}>{children}</div>
    </div>
  );
};

export default PageEmptyState;
