"use client";

import { FormEvent } from "react";
import { useDevice } from "@/hooks";
import { ProfileEdit, Input, BaseButton } from "@/common";
import { useTeamCreation } from "../../_hooks";

const TeamCreateForm = () => {
  const { isMobile } = useDevice();
  const profileSize = isMobile ? "md" : "lg";
  const { name, errorMessage, preview, isValid, isSubmitting, handleNameChange, handleImageChange, handleSubmit } =
    useTeamCreation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex-col-center gap-10">
      <div className="w-full flex-col-center gap-3 tablet:gap-6">
        <ProfileEdit iconType="imgUpload" src={preview || null} onChange={handleImageChange} size={profileSize} />
        <Input
          label="팀 이름"
          type="text"
          placeholder="팀 이름을 입력해주세요."
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          error={errorMessage}
          minLength={2}
          maxLength={30}
        />
      </div>
      <div className="w-full flex-col-center gap-5">
        <BaseButton type="submit" variant="solid" size="large" className="w-full" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "생성 중..." : "생성하기"}
        </BaseButton>
        <p className="text-xs-regular text-text-default tablet:text-lg-regular text-center">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
      </div>
    </form>
  );
};

export default TeamCreateForm;
