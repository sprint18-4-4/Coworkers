import ImgEmptyTeam from "@/assets/images/empty-team.png";
import Image from "next/image";
import { BaseButton, PageLayout } from "@/common";
import Link from "next/link";

const EmptyTeamPage = async () => {
  return (
    <PageLayout ariaLabel="팀 페이지">
      <section className="flex-col-center gap-[80px] mx-auto py-[20px] max-w-[300px] tablet:max-w-[528px] pc:max-w-[660px] h-[566px]">
        <div className="flex-col-center gap-8">
          <Image src={ImgEmptyTeam} alt="그룹 없음 이미지" placeholder="empty" />
          <p className="flex-col-center gap-1 text-md-medium text-text-default">
            <span>아직 소속된 팀이 없습니다.</span>
            <span>팀을 생성하거나 팀에 참여해보세요.</span>
          </p>
        </div>

        <div className="w-[186px] flex flex-col gap-2">
          <Link href="/team-creation">
            <BaseButton variant="solid" size="large">
              팀 생성하기
            </BaseButton>
          </Link>
          <Link href="/team-join">
            <BaseButton variant="outlinedPrimary" size="large">
              팀 참여하기
            </BaseButton>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmptyTeamPage;
