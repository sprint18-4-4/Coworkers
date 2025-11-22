import { BaseButton } from "@/common";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="w-full h-[calc(100dvh-52px)] flex-col-center">
      <div className="w-[300px] flex-col-center gap-[47px]">
        <div className="flex-col-center gap-6">
          <Image src="/not-found/not-found.svg" alt="not-found" width={660} height={300} />
          <p className="text-center text-md-medium text-text-default">
            아직 소속된 팀이 없습니다 <br />
            팀을 생성하거나 팀에 참여해보세요.
          </p>
        </div>
        <div className="w-full flex-col-center gap-2">
          <BaseButton variant="solid" size="large">
            메인 페이지 이동
          </BaseButton>
          <BaseButton variant="outlinedPrimary" size="large">
            팀 생성
          </BaseButton>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
