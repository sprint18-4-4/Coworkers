import { CenteredCardLayout } from "@/app/(route)/_components";
import EditTeamForm from "./_components/EditTeamForm/EditTeamForm";

const page = () => {
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

export default page;
