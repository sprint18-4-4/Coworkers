"use client";

import { useRouter } from "next/navigation";
import { BaseButton } from "@/common";

const ConversionSection = () => {
  const router = useRouter();

  return (
    <footer className="py-[60px] tablet:py-[70px] pc:py-[90px]">
      <div className="flex-col-center gap-7">
        <div className="flex-col-center gap-2 tablet:gap-3">
          <h2 className="text-2lg-bold tablet:text-2xl-bold text-brand-primary">지금 바로 시작해보세요</h2>
          <p className="text-xs-regular tablet:text-lg-regular text-text-default">
            팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
          </p>
        </div>
        <BaseButton variant="solid" size="large" onClick={() => router.push("/login")} className="w-[160px]">
          지금 시작하기
        </BaseButton>
      </div>
    </footer>
  );
};

export default ConversionSection;
