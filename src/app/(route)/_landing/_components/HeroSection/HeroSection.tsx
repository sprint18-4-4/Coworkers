import Image from "next/image";
import { cn } from "@/utils";
import { DeviceImage } from "../_internal";
import { LinkButton } from "@/common";

const HeroSection = () => {
  return (
    <section className="w-full h-fit tablet:h-screen bg-background-secondary">
      <div className="relative h-svh flex flex-col justify-between tablet:h-full pc:flex-row">
        <div
          className={cn(
            "flex flex-col justify-between",
            "mt-[34px] ml-5 pb-[20px]",
            "tablet:mt-[90px] tablet:ml-[40px]",
            "pc:my-[218px] pc:ml-[76px]",
          )}
        >
          <div className="pc:mr-[167px]">
            <Image
              src="/landing/land-1.svg"
              alt=""
              width={48}
              height={48}
              className="size-9 pc:size-12"
              draggable={false}
            />
            <div className="mt-[6px] ml-[23px] pc:ml-[30px]">
              <p className="text-md-medium tablet:text-lg-medium pc:text-xl-medium text-state-400">
                함께 만들어가는 To Do list
              </p>
              <h1 className="text-2xl-brand-bold tablet:text-3xl-brand-bold pc:text-4xl-brand-bold text-brand-primary mt-1">
                Coworkers
              </h1>
            </div>
          </div>
          {/* TODO(김원선): 버튼 컴포넌트 as prop이 따로 구현되면 변경 예정 */}
          <LinkButton href="/login" size="large" className="mobile:hidden tablet:hidden pc:flex ml-[30px] w-[160px]">
            지금 시작하기
          </LinkButton>
        </div>
        <div className="relative flex-1 w-full min-h-0 tablet:h-screen pc:min-w-[1330px]">
          <DeviceImage
            ImageInfo={{ alt: "대시보드 이미지", width: 1330, height: 1080 }}
            Src={{
              mobileSrc: "/landing/img-1-2.png",
              tabletSrc: "/landing/img-1-1.png",
              desktopSrc: "/landing/img-1.png",
            }}
            ImageClassName="object-fill object-left w-full h-full tablet:object-cover"
          />
        </div>
        <LinkButton
          href="/login"
          size="large"
          className="flex w-[160px] absolute bottom-[52px] right-4 tablet:right-8 pc:hidden"
        >
          지금 시작하기
        </LinkButton>
      </div>
    </section>
  );
};

export default HeroSection;
