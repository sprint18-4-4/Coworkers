import { FloatingButton } from "@/common";
import { cn } from "@/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  maxDots?: number;
}

const Pagination = ({ page, totalPages, onPrev, onNext, maxDots = 5 }: PaginationProps) => {
  const startPage = Math.max(1, page - Math.floor(maxDots / 2));
  const endPage = Math.min(totalPages, startPage + maxDots - 1);

  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="mt-8 grid grid-cols-[1fr_auto] items-center">
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          {visiblePages.map((p) => {
            const isActive = p === page;

            return (
              <span
                key={p}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  isActive ? "w-6 bg-state-600" : "w-2 bg-state-300",
                )}
              />
            );
          })}
        </div>
      </div>

      <div className="flex gap-2">
        <FloatingButton
          className="bg-background-primary border border-state-300 size-8"
          iconName="leftArrow"
          iconClassName="size-4 text-icon-primary"
          onClick={onPrev}
        />

        <FloatingButton
          className="bg-background-primary border border-state-300 size-8"
          iconName="rightArrow"
          iconClassName="size-4 text-icon-primary"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default Pagination;
