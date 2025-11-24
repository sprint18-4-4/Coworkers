"use client";

import { redirect } from "next/navigation";
import ImgEmptyTeam from "@/assets/images/empty-team.png";
import { BaseButton, PageLayout } from "@/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetUser } from "@/api/hooks";

const TeamPage = () => {
  const router = useRouter();
  const { data: userInfo, isPending } = useGetUser();

  const hasTeam = userInfo && userInfo.memberships.length > 0;

  if (hasTeam) {
    redirect(`/team/${userInfo.memberships[0].groupId}`);
  }

  if (isPending) {
    return <p>로딩중</p>; // TODO(상인): 추후 로딩 UI 처리
  }

  if (hasTeam) {
    return null;
  }

  return (
    <PageLayout ariaLabel="팀 페이지">
      <section className="flex-col-center gap-[80px] mx-auto py-[20px] max-w-[300px] tablet:max-w-[528px] pc:max-w-[660px] h-[566px]">
        <div className="flex-col-center gap-8">
          <Image src={ImgEmptyTeam} alt="그룹 없음 이미지" placeholder="empty" />
          <p className="flex-col-center gap-1 text-md-medium text-text-default">
            <span>아직 소속된 팀이 없습니다.</span>
            <span>팀을 생성하나 팀에 참여해보세요.</span>
          </p>
        </div>
        <div className="w-[186px] flex flex-col gap-2">
          <BaseButton onClick={() => router.push("/team-creation")} variant="solid" size="large">
            팀 생성하기
          </BaseButton>
          <BaseButton onClick={() => router.push("/team-join")} variant="outlinedPrimary" size="large">
            팀 참여하기
          </BaseButton>
        </div>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
