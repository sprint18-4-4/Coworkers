const MyWorkHistoryItem = () => {
  return (
    <div className="px-5 h-[54px] flex items-center justify-between rounded-xl bg-background-primary">
      <button className="text-lg-semibold text-text-primary">법인 설립</button>
      <span className="text-lg-bold text-brand-primary">12개</span>
    </div>
  );
};

const MyWorkHistory = () => {
  return (
    <div aria-label="내가 한 일" className="hidden pc:block">
      <h2 className="text-xl-bold text-text-primary">내가 한 일</h2>
      <div className="mt-10 flex flex-col gap-4">
        <span className="text-lg-medium text-text-primary">2025년 5월</span>
        <div className="flex flex-col gap-1 w-[270px]">
          {Array.from({ length: 3 }, (_, i) => (
            <MyWorkHistoryItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkHistory;
