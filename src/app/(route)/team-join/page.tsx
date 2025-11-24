import { CenteredCardLayout } from "../_components";
import { TeamJoinForm } from "./_components";

const TeamJoinPage = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] max-w-[550px] min-h-[353px] max-h-[400px] gap-10">
      <h2 className="w-full text-left text-xl-bold tablet:text-2xl-bold">팀 참여하기</h2>
      <TeamJoinForm />
    </CenteredCardLayout>
  );
};

export default TeamJoinPage;
