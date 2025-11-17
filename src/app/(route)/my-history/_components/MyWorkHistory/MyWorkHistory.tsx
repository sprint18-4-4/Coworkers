import { TaskListItemType } from "@/types";

type Item = {
  item: TaskListItemType;
};

interface MyWorkHistoryProps {
  title: string;
  items: Item[];
}

const MyWorkHistoryItem = ({ item }: Item) => {
  return (
    <li className="px-5 h-[54px] flex items-center justify-between rounded-xl bg-background-primary">
      <button className="text-lg-semibold text-text-primary">{item.name}</button>
      {item.commentCount > 0 && <span className="text-lg-bold text-brand-primary">{item.commentCount}개</span>}
    </li>
  );
};

const MyWorkHistory = ({ title, items }: MyWorkHistoryProps) => {
  return (
    <aside aria-label={title} className="hidden pc:block">
      <h2 className="text-xl-bold text-text-primary">{title}</h2>
      <section className="mt-10 flex flex-col gap-4">
        <time dateTime="2025-05" className="text-lg-medium text-text-primary">
          2025년 5월
        </time>
        <ul className="flex flex-col gap-1 w-[270px]">
          {items.map((item, i) => (
            <MyWorkHistoryItem key={i} item={item.item} />
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default MyWorkHistory;
