import { CenteredCardLayout } from "../_components";
import { TeamCreateForm } from "./_components/";

const TeamCreatePage = () => {
  return (
    <CenteredCardLayout
      className="justify-between w-full min-w-[343px] max-w-[550px] h-[464px] tablet:h-[543px] gap-8 pt-[52.5px] pb-[72.5px] tablet:py-[62px]"
      title="팀 생성하기"
      titleClassName="w-full text-left text-xl-bold"
    >
      <TeamCreateForm />
    </CenteredCardLayout>
  );
};

export default TeamCreatePage;
