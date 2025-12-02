import { CenteredCardLayout } from "@/app/(route)/_components";
import EditTeamForm from "./_components/EditTeamForm/EditTeamForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 팀 수정하기",
  description: "팀 이름과 이미지를 수정해보세요.",
};

const TeamEditPage = () => {
  return (
    <CenteredCardLayout
      title="팀 수정하기"
      titleClassName="w-full text-left"
      className="min-w-[343px] max-w-[550px] min-h-[464px] max-h-[543px] gap-8"
    >
      <EditTeamForm />
    </CenteredCardLayout>
  );
};

export default TeamEditPage;
