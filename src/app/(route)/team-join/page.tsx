import { CenteredCardLayout } from "../_components";
import { TeamJoinForm } from "./_components";

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
