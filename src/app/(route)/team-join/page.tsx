import { CenteredCardLayout } from "../_components";
import { TeamJoinForm } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 팀 참여하기",
  description: "공유받은 팀 링크를 입력해 참여할 수 있어요.",
};

const TeamJoinPage = () => {
  return (
    <CenteredCardLayout
      className="min-w-[343px] max-w-[550px] min-h-[353px] max-h-[400px] gap-10"
      title="팀 참여하기"
      titleClassName="w-full text-left"
    >
      <TeamJoinForm />
    </CenteredCardLayout>
  );
};

export default TeamJoinPage;
