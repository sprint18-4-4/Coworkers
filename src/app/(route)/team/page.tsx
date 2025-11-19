import { PageLayout } from "@/common";
import { MemberWidget, ProgressWidget, TaskList } from "./_components";

// 1. 팀이 있는지 없는지 검사 (비어있는 컴포넌트 ㅍㄴ 팀 컴포넌트)
// 2. 관리자인지 멤버인지 검사
// 3. 렌더링
const page = () => {
  return (
    <PageLayout ariaLabel="팀 페이지">
      <div className="w-full max-w-[1120px]">
        <ProgressWidget />
        <TaskList />
        <MemberWidget />
      </div>
    </PageLayout>
  );
};

export default page;
