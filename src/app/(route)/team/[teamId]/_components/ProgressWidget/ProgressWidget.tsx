"use client";

import { useGetGroups } from "@/api/hooks";
import { Dropdown, ProgressBar } from "@/common";
import { useParams, useRouter } from "next/navigation";
import { useCheckAdmin } from "@/hooks";

const ProgressWidget = () => {
  const { teamId } = useParams();
  const router = useRouter();
  const id = Number(teamId);
  const { data: groups } = useGetGroups({ id });

  const isAdmin = useCheckAdmin();

  const handleEditTeamClick = () => {
    router.push(`/team/${id}/edit`);
  };

  // 시안에 없는 것 같아서 조금 더 고민
  const handleDeleteTeamClick = () => {};

  const DropdownOptions = [
    { label: "수정하기", action: () => handleEditTeamClick() },
    { label: "삭제하기", action: () => handleDeleteTeamClick() },
  ];

  return (
    <section className="relative rounded-[20px] bg-background-primary px-[26px] py-[32px] -mx-[26px] -mt-[17px] tablet:mt-0 tablet:mx-0">
      <div className="w-full pc:w-[95%]">
        <h2 className="text-2xl-bold">{groups?.name}</h2>
        <dl className="flex justify-between mt-2 py-4">
          <div>
            <dt className="text-md-medium text-state-400">오늘의 진행 상황</dt>
            <dd className="text-[40px] font-bold text-brand-primary">25%</dd>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-center">
              <dt className="text-xs-medium text-state-400">오늘의 할 일</dt>
              <dd className="text-[32px] font-bold text-text-default">20</dd>
            </div>
            <hr className="border border-border-primary h-[80%]" />
            <div>
              <dt className="text-xs-medium text-state-400">완료</dt>
              <dd className="text-[32px] font-bold text-brand-primary">5</dd>
            </div>
          </div>
        </dl>
        <ProgressBar percent={25} />
      </div>

      {isAdmin && (
        <div className="absolute right-[26px] top-[32px] pc:bottom-[30px] pc:top-auto leading-none">
          <Dropdown iconName="setting" placement="bottom-right" options={DropdownOptions} />
        </div>
      )}
    </section>
  );
};

export default ProgressWidget;
