import { CenteredCardLayout } from "../_components";
import { TeamCreateForm } from "./_components/";

const TeamCreatePage = () => {
  return (
    <CenteredCardLayout
      className="min-w-[343px] max-w-[550px] min-h-[464px] max-h-[543px] gap-8"
      title="팀 생성하기"
      titleClassName="w-full text-left"
    >
      <TeamCreateForm />
    </CenteredCardLayout>
  );
};

export default TeamCreatePage;
