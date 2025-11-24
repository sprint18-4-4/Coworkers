import { CenteredCardLayout } from "../_components";
import { CreateTeamForm } from "./_components/";

const TeamCreatePage = () => {
  return (
    <CenteredCardLayout className="min-w-[343px] max-w-[550px] min-h-[464px] max-h-[543px] gap-8">
      <h2 className="w-full text-left text-xl-bold tablet:text-2xl-bold">팀 생성하기</h2>
      <CreateTeamForm />
    </CenteredCardLayout>
  );
};

export default TeamCreatePage;
