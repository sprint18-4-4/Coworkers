import { PageLayout } from "@/common";
import { MemberWidget, ProgressWidget, TaskSection } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 팀 페이지",
  description: "할 일들을 생성하고, 효율적인 업무 관리를 시작해보세요.",
};

const TeamDetailPage = async () => {
  return (
    <PageLayout ariaLabel="팀 페이지">
      <div className="w-full max-w-[1120px] relative">
        <ProgressWidget />
        <hr className="hidden pc:block border border-border-primary mt-8" />
        <TaskSection />
        <MemberWidget />
      </div>
    </PageLayout>
  );
};

export default TeamDetailPage;
