import { cn } from "@/utils";
import { DateItem, Icon } from "@/common";
import { TaskListItem } from "@/features";
import { LIST_DATE_MOCK_DATA, MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";

const TodoSectionHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2lg-bold text-text-primary">법인 등기</h3>

      <div className="flex items-center gap-2">
        <span className="text-sm-medium text-text-primary">2025년 5월</span>
        <div className="flex items-center gap-1">
          <button className="size-4 rounded-full border border-slate-200 flex-center">
            <Icon name="leftArrow" className="size-3 tablet:size-3" />
          </button>
          <button className="size-4 rounded-full border border-slate-200 flex-center">
            <Icon name="rightArrow" className="size-3 tablet:size-3" />
          </button>
        </div>
        <button className="size-6 rounded-full bg-background-secondary flex-center">
          <Icon name="calendar" className="size-3 tablet:size-3" />
        </button>
      </div>
    </div>
  );
};

const TodoSection = () => {
  return (
    <div
      className={cn(
        "bg-background-primary px-[17px] py-[38px] mt-[22px] rounded-[20px]",
        "pc:px-[42px] pc:max-w-[819px] pc:flex-1",
      )}
    >
      <TodoSectionHeader />

      <div className={cn("flex items-center gap-1 mt-6", "tablet:justify-center tablet:gap-3")}>
        {LIST_DATE_MOCK_DATA.map((day) => {
          return <DateItem key={day.day} day={day.day} date={day.date} />;
        })}
      </div>

      <div className="mt-[37px] flex flex-col gap-3">
        {MY_HISTORY_ITEM_MOCK_DATA.map((item) => (
          <TaskListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoSection;
