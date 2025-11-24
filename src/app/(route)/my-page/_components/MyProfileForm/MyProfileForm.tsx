"use client";

import { ProfileEdit, Input } from "@/common";
import { PwInputSection } from "..";

const MyProfileForm = () => {
  return (
    <form id="profileForm" className="w-full flex-col-center gap-6">
      <ProfileEdit src={null} onChange={() => {}} size="lg" />
      <Input label="이름" type="text" defaultValue="아무개" placeholder="이름을 입력해주세요." />
      <Input label="이메일" type="email" defaultValue={"text@example.com"} disabled />
      <PwInputSection />
    </form>
  );
};

export default MyProfileForm;
