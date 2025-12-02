import { Metadata } from "next";
import { CenteredCardLayout } from "../_components";
import { TeamCreateForm } from "./_components/";

export const metadata: Metadata = {
  title: "Coworkers | 팀 생성하기",
  description: "팀을 생성하여 팀을 꾸려보세요.",
};

const TeamCreatePage = () => {
  return (
    <CenteredCardLayout
      className="w-full min-w-[343px] max-w-[550px] h-[464px] justify-between tablet:h-[543px] gap-8 pt-[52.5px] pb-[72.5px] tablet:py-[62px]"
      title="팀 생성하기"
      titleClassName="w-full text-left text-xl-bold"
    >
      <TeamCreateForm />
    </CenteredCardLayout>
  );
};

export default TeamCreatePage;
