"use client";

import { FormEvent } from "react";
import { useDevice } from "@/hooks";
import { ProfileEdit, Input } from "@/common";

interface MyProfileFormProps {
  userInfo: {
    nickname: string;
    email: string;
    imageUrl: string | null;
  };
  imagePreview: string;
  nicknameError?: string;
  handlers: {
    onNicknameChange: (value: string) => void;
    onImageChange: (file: File) => void;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  };
}

const MyProfileForm = ({
  userInfo: { nickname, email, imageUrl },
  imagePreview,
  nicknameError,
  handlers: { onNicknameChange, onImageChange, onSubmit },
}: MyProfileFormProps) => {
  const { isMobile } = useDevice();

  const profileSize = isMobile ? "md" : "lg";

  const displayImage = imagePreview || imageUrl || null;

  return (
    <form id="profileForm" className="w-full flex-col-center gap-6" onSubmit={onSubmit}>
      <ProfileEdit src={displayImage} onChange={onImageChange} size={profileSize} />
      <Input
        label="이름"
        type="text"
        value={nickname}
        onChange={(e) => onNicknameChange(e.target.value)}
        placeholder="이름을 입력해주세요."
        error={nicknameError}
      />
      <Input label="이메일" type="email" value={email} disabled />
    </form>
  );
};

export default MyProfileForm;
