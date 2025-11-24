"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ProfileEdit, Input, BaseButton } from "@/common";

const CreateTeamForm = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 430px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <form className="w-full flex-col-center gap-10">
      <div className="w-full flex-col-center gap-3 tablet:gap-6">
        <ProfileEdit src={null} onChange={() => {}} size={isMobile ? "md" : "lg"} />
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
