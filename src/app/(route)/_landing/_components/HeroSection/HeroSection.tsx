import Image from "next/image";
import { cn } from "@/utils";
import { DeviceImage } from "../_internal";
import { LinkButton } from "@/common";

interface HeroSectionProps {
  link?: string;
}

const HeroSection = ({ link = "/login" }: HeroSectionProps) => {
  return (
    <section className={cn("pc:min-h-screen overflow-hidden bg-background-secondary pc:pl-8")}>
      <div className={cn("relative flex flex-col justify-between", "pc:flex-row pc:gap-28")}>
        <div className="flex flex-col justify-between pc:pl-[44px] pc:mb-[228px]">
          <div className={cn("pl-[20px] pt-[34px]", "tablet:pl-[35px] tablet:pt-[89px]", "pc:pt-[208px] pc:pl-0")}>
            <Image
              src="/landing/land-1.svg"
              alt=""
              width={48}
              height={48}
              className="size-9 pc:size-12"
              draggable={false}
            />
            <div className="ml-[30px]">
              <p className="text-md-medium tablet:text-lg-medium pc:text-xl-medium text-state-400">
                함께 만들어가는 투두 리스트
              </p>
              <h1 className="text-2xl-brand-bold tablet:text-3xl-brand-bold pc:text-4xl-brand-bold text-brand-primary mt-1">
                Coworkers
              </h1>
            </div>
          </div>
          <LinkButton href={link} size="large" className="mobile:hidden tablet:hidden pc:flex ml-[30px] w-[160px]">
            지금 시작하기
          </LinkButton>
        </div>
        <div className="min-w-full pc:min-w-[1330px]">
          <DeviceImage
            ImageInfo={{ alt: "대시보드 이미지", width: 1330, height: 1080 }}
            Src={{
              mobileSrc: "/landing/img-1-2.png",
              tabletSrc: "/landing/img-1-1.png",
              desktopSrc: "/landing/img-1.png",
            }}
            ImageClassName="object-contain object-left w-full h-full"
          />
        </div>
        <LinkButton
          href={link}
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
