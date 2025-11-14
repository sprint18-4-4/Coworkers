import { Icon, Todo } from "@/common";
import { cn, getFrequencyLabel } from "@/utils";
import { ScheduleItem } from "../../_types";

interface ScheduleDayItemProps {
  item: ScheduleItem;
}

const ScheduleDayItem = ({ item }: ScheduleDayItemProps) => {
  return (
    <li className="px-[14px] py-3 flex flex-col items-start rounded-lg gap-[10px] bg-background-secondary">
      <div className="flex-center gap-3">
        <Todo title={item.name} id={item.id.toString()} completed={false} onChangeCompleted={() => {}} />
        {/* TODO(지권): 아이콘 변경 */}
        <div className="flex items-center gap-[2px] text-xs-regular">
          <Icon name="comment" className="!size-4" />
          <span>{item.commentCount}</span>
        </div>
      </div>
      <div className="h-[14px] flex items-center gap-2 text-xs-regular text-text-default">
        {/* TODO(지권): 아이콘 변경 */}
        <time dateTime={item.date} className="flex items-center gap-[6px]">
          <Icon name="calendar" className="!size-4" />
          <span>{item.date}</span>
        </time>
        <hr aria-hidden="true" className="w-[1px] h-full bg-slate-700" />
        <div className="flex items-center gap-[6px]">
          <Icon name="repeat" className="!size-4" />
          <span>{getFrequencyLabel(item.frequency)}</span>
        </div>
      </div>
    </li>
  );
};

const ScheduleDaySection = ({ items }: { items: ScheduleItem[] }) => {
  return (
    <>
      <div className="flex-center gap-5">
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
        <time dateTime={"2025-05-21"} className={cn("text-md-regular text-text-default", "tablet:text-lg-medium")}>
          2025년 5월 21일 (목)
        </time>
        <hr aria-hidden="true" className="flex-1 h-[1px] bg-border-primary" />
      </div>

      <section className="flex flex-col gap-[13px]">
        <h2 className="text-lg-bold text-text-primary">법인 등기</h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <ScheduleDayItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ScheduleDaySection;
