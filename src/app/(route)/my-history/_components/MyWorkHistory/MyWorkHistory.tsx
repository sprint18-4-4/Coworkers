type Item = {
  title: string;
  count: number;
};

interface MyWorkHistoryProps {
  title: string;
  Item: Item[];
}

const MyWorkHistoryItem = ({ title, count }: Item) => {
  return (
    <li className="px-5 h-[54px] flex items-center justify-between rounded-xl bg-background-primary">
      <button className="text-lg-semibold text-text-primary">{title}</button>
      <span className="text-lg-bold text-brand-primary">{count}개</span>
    </li>
  );
};

const MyWorkHistory = ({ title, Item }: MyWorkHistoryProps) => {
  return (
    <aside aria-label={title} className="hidden pc:block">
      <h2 className="text-xl-bold text-text-primary">{title}</h2>
      <section className="mt-10 flex flex-col gap-4">
        <time dateTime="2025-05" className="text-lg-medium text-text-primary">
          2025년 5월
        </time>
        <ul className="flex flex-col gap-1 w-[270px]">
          {Array.from({ length: 3 }, (_, i) => (
            <MyWorkHistoryItem key={i} title="법인 설립" count={12} />
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default MyWorkHistory;
