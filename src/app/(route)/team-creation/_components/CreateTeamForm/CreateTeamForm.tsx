import { ProfileEdit, Input, BaseButton } from "@/common";

const CreateTeamForm = () => {
  return (
    <form className="w-full flex-col-center gap-10">
      <div className="w-full flex-col-center gap-3 tablet:gap-6">
        <ProfileEdit src={null} onChange={() => {}} size="lg" />
        <Input label="팀 이름" type="text" placeholder="팀 이름을 입력해주세요." />
      </div>
      <div className="w-full flex-col-center gap-5">
        <BaseButton type="submit" variant="solid" size="large" className="w-full">
          생성하기
        </BaseButton>
        <p className="text-xs-regular text-text-default tablet:text-lg-regular text-center">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </form>
  );
};

export default CreateTeamForm;
