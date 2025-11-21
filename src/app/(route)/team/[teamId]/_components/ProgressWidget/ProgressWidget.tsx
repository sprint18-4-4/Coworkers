import { Icon, ProgressBar } from "@/common";

// 팀 데이터 받아오기
// MemberWidget의 open state를 받아야 할 지도
const ProgressWidget = () => {
  return (
    <section className="relative rounded-[20px] bg-background-primary px-[26px] py-[32px] -mx-[26px] -mt-[17px] tablet:mt-0 tablet:mx-0">
      <div className="w-full pc:w-[95%]">
        <h2 className="text-2xl-bold">경영관리팀</h2>
        <dl className="flex justify-between mt-2 py-4">
          <div>
            <dt className="text-md-medium text-state-400">오늘의 진행 상황</dt>
            <dd className="text-[40px] font-bold text-brand-primary">25%</dd>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-center">
              <dt className="text-xs-medium text-state-400">오늘의 할 일</dt>
              <dd className="text-[32px] font-bold text-text-default">20</dd>
            </div>
            <hr className="border border-border-primary h-[80%]" />
            <div>
              <dt className="text-xs-medium text-state-400">완료</dt>
              <dd className="text-[32px] font-bold text-brand-primary">5</dd>
            </div>
          </div>
        </dl>
        <ProgressBar percent={25} />
      </div>
      {/* TODO(상인): 드랍다운 머지시 변경 */}
      <Icon name="setting" className="absolute right-[26px] top-[32px] pc:bottom-[32px] pc:top-auto" />
    </section>
  );
};

export default ProgressWidget;
