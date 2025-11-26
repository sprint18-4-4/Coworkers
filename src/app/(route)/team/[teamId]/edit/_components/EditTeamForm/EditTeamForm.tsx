"use client";

import { useDevice } from "@/hooks";
import { ProfileEdit, Input, BaseButton } from "@/common";
import { useGetGroups, usePatchGroup } from "@/api/hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const EditTeamForm = () => {
  const [formData, setFormData] = useState({
    image: null, // TODO(상인): 이미지 편집이 완료되면 구현 string | null
    name: "",
  });

  const { isMobile } = useDevice();
  const { teamId } = useParams();
  const id = Number(teamId);
  const { data: groups } = useGetGroups({ id });

  const { mutate: patchGroup } = usePatchGroup();

  const profileSize = isMobile ? "md" : "lg";

  // 이미지 수정에 따라 변경될 수도
  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patchGroup({ param: { id }, body: formData });
  };

  return (
    <form onSubmit={handleEditSubmit} className="w-full flex-col-center gap-10">
      <div className="w-full flex-col-center gap-3 tablet:gap-6">
        <ProfileEdit src={null} onChange={() => {}} size={profileSize} />
        <Input
          label="팀 이름"
          name="name"
          type="text"
          placeholder={groups?.name}
          value={formData.name}
          onChange={handleFormDataChange}
        />
      </div>
      <div className="w-full flex-col-center gap-2">
        <p className="text-xs-regular text-text-default tablet:text-lg-regular text-center pb-4">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </p>
        <BaseButton type="submit" variant="solid" size="large" className="w-full">
          수정하기
        </BaseButton>
        <Link href={`/team/${teamId}`} className="w-full">
          <BaseButton type="button" variant="outlinedSecondary" size="large" className="w-full">
            돌아가기
          </BaseButton>
        </Link>
      </div>
    </form>
  );
};

export default EditTeamForm;
