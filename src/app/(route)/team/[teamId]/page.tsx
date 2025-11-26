import { PageLayout } from "@/common";
import { MemberWidget, ProgressWidget, TaskSection } from "./_components";

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
