import { cn } from "@/utils";
import { BaseButton, Dropdown, Icon, ProgressBadge } from "@/common";

const TodoItem = () => {
  const options = [
    { label: "수정하기", action: () => {} },
    { label: "삭제하기", action: () => {} },
  ];

  return (
    <li
      className={cn(
        "flex items-center gap-[25px] max-w-[180px] h-[44px] pl-4 pr-3 rounded-xl",
        "bg-background-primary border border-border-primary",
        "pc:w-full pc:max-w-full pc:h-[54px] pc:justify-between",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm-semibold text-text-primary text-nowrap">법인 등기</span>
        <ProgressBadge current={3} total={5} />
      </div>
      <Dropdown iconName="kebab" options={options} iconClassName="tablet:size-6 text-slate-300" />
    </li>
  );
};

const TodoHeader = () => {
  return (
    <aside className={cn("flex flex-col items-start gap-2", "pc:w-[270px] pc:gap-6")}>
      <h2 className={cn("text-xs-semibold text-text-default", "pc:text-xl-bold pc:text-text-primary")}>할 일</h2>

      <section className={cn("flex items-center justify-between gap-12 w-full", "pc:flex-col pc:gap-11")}>
        <ul className="pc:w-full pc:flex pc:flex-col pc:gap-1">
          <TodoItem />
        </ul>

        <BaseButton
          size="large"
          variant="outlinedPrimary"
          aria-label="할 일 추가"
          className="w-[112px] h-10 px-4 text-nowrap rounded-[40px] bg-background-primary"
        >
          <Icon name="plus" className="size-5 tablet:size-5" />
          <span className="text-lg-semibold">할 일 추가</span>
        </BaseButton>
      </section>
    </aside>
  );
};

export default TodoHeader;
