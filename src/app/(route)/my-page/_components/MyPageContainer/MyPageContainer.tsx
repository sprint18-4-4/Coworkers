import { FormEvent } from "react";
import { SaveChangesSnackbar } from "@/common";
import { CenteredCardLayout } from "@/app/(route)/_components";
import MyProfileForm from "../MyProfileForm/MyProfileForm";
import DeleteAccountButton from "../DeleteAccountButton/DeleteAccountButton";
import PasswordInputSection from "../PasswordInputSection/PasswordInputSection";
import useMyProfileSettings from "../../_hook/useMyProfileSettings";
import { UserData } from "../../_types/type";

const MyPageContainer = ({ userData }: { userData: UserData }) => {
  const profile = useMyProfileSettings({
    nickname: userData?.nickname,
    email: userData?.email,
    image: userData?.image || null,
  });

  const { formData, imagePreview, hasChanges, isSaving, errors, handlers } = profile;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlers.onSave();
  };

  return (
    <CenteredCardLayout
      title="계정 설정"
      titleClassName="w-full text-left mb-[35px]"
      sectionClassName="flex-col gap-7 px-4 tablet:px-[60px]"
      className="min-w-[343px] max-w-[940px] max-h-[600px] tablet:max-h-[720px] gap-[35px] py-8"
      bottomContent={
        hasChanges && (
          <SaveChangesSnackbar
            title="저장하지 않은 변경사항이 있어요!"
            onSave={handlers.onSave}
            buttonText={isSaving ? "저장 중..." : "변경사항 저장하기"}
            formId="profileForm"
            disabled={isSaving}
          />
        )
      }
    >
      <MyProfileForm
        nickname={formData.nickname}
        email={userData.email}
        imageUrl={userData.image}
        onNicknameChange={handlers.onNicknameChange}
        onImageChange={handlers.onImageChange}
        imagePreview={imagePreview}
        nicknameError={errors.nickname}
        onSubmit={handleFormSubmit}
      />
      <PasswordInputSection />
      <DeleteAccountButton />
    </CenteredCardLayout>
  );
};

export default MyPageContainer;
