import { BaseButton, Icon } from "@/common";
import { cn } from "@/utils";

const TodoSectionItem = () => {
  return (
    <div
      className={cn(
        "flex items-center gap-[25px] max-w-[180px] h-[44px] pl-4 pr-3 rounded-xl",
        "bg-background-primary border border-border-primary",
        "pc:w-full pc:max-w-full",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm-semibold text-text-primary text-nowrap">법인 등기</span>
        <div className="w-[58px] h-[25px] bg-black" />
      </div>
      <div className="min-w-[82px] flex items-center">
        <div className={cn("hidden w-[58px] h-[25px] bg-black", "pc:block")} />
        <div className="size-5 bg-black" />
      </div>
    </div>
  );
};

const TodoSectionHeader = () => {
  return (
    <div className={cn("flex flex-col items-start gap-2", "pc:w-[270px] pc:gap-6")}>
      <h2 className={cn("text-xs-semibold text-text-default", "pc:text-xl-bold pc:text-text-primary")}>할 일</h2>
      <div className={cn("flex items-center justify-between gap-12 w-full", "pc:flex-col pc:gap-11")}>
        <TodoSectionItem />

        <BaseButton
          size="large"
          variant="outlinedPrimary"
          aria-label="할 일 추가"
          className="w-[112px] px-4 text-nowrap rounded-[40px] "
        >
          <Icon name="plus" className="size-5 tablet:size-5" />
          <span className="text-lg-semibold">할 일 추가</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default TodoSectionHeader;
