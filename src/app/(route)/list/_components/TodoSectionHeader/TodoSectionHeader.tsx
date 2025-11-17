import { BaseButton, Icon } from "@/common";
import { cn } from "@/utils";

const TodoSectionHeader = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h2 className="text-xs-semibold text-text-default">할 일</h2>
      <div className="flex items-center justify-between gap-12">
        <div
          className={cn(
            "flex items-center gap-[25px] max-w-[180px] h-[44px] pl-4 pr-3 rounded-xl",
            "bg-background-primary border border-border-primary",
          )}
        >
          <div className="flex items-center">
            <span className="text-sm-semibold text-text-primary text-nowrap">법인 등기</span>
            <div className="min-w-[58px] bg-black"></div>
          </div>
          <div className="size-5 bg-black"></div>
        </div>
        <BaseButton
          size="large"
          variant="outlinedPrimary"
          aria-label="할 일 추가"
          className="px-4 text-nowrap rounded-[40px] bg-background-primary"
        >
          <Icon name="plus" className="size-5 tablet:size-5" />
          <span>할 일 추가</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default TodoSectionHeader;
