import Image from "next/image";
import Link from "next/link";
import { ResponsiveImage } from "../_internal";
import { cn } from "@/utils";
import {
  BASE_BUTTON_BASE_STYLE,
  BASE_BUTTON_STYLE_BY_SIZE,
  BASE_BUTTON_STYLE_BY_VARIANT,
} from "@/common/Button/BUTTON_STYLES";

const HeroSection = () => {
  return (
    <section className="w-full h-fit tablet:h-screen bg-background-secondary">
      <div className="relative h-svh tablet:h-full flex flex-col justify-between pc:flex-row">
        <div
          className={cn(
            "flex flex-col justify-between",
            "mt-[34px] ml-5 pb-[20px]",
            "tablet:mt-[90px] tablet:ml-[40px]",
            "pc:my-[218px] pc:ml-[76px]",
          )}
        >
          <div className="pc:mr-[167px]">
            <Image src="/landing/land-1.svg" alt="로고" width={48} height={48} className="size-9 pc:size-12"></Image>
            <div className="mt-[6px] ml-[23px] pc:ml-[30px]">
              <p className="text-md-medium tablet:text-lg-medium pc:text-xl-medium text-state-400">
                함께 만들어가는 To Do list
              </p>
              <h1 className="text-2xl-brand-bold tablet:text-3xl-brand-bold pc:text-4xl-brand-bold text-brand-primary mt-1">
                Coworkers
              </h1>
            </div>
          </div>
          <Link
            href="/login"
            className={cn(
              BASE_BUTTON_BASE_STYLE,
              BASE_BUTTON_STYLE_BY_SIZE.large,
              BASE_BUTTON_STYLE_BY_VARIANT.solid,
              "mobile:hidden tablet:hidden pc:flex ml-[30px] w-[160px]",
            )}
          >
            지금 시작하기
          </Link>
        </div>
        <div className="relative flex-1 w-full pc:min-w-[1330px] min-h-0 tablet:h-screen">
          <ResponsiveImage
            ImageInfo={{ alt: "대시보드 이미지", width: 1330, height: 1080 }}
            Src={{
              mobileSrc: "/landing/img-1-2.png",
              tabletSrc: "/landing/img-1-1.png",
              desktopSrc: "/landing/img-1.png",
            }}
            ImageClassName="object-fill tablet:object-cover object-left w-full h-full"
          />
        </div>
        <Link
          href="/login"
          className={cn(
            BASE_BUTTON_BASE_STYLE,
            BASE_BUTTON_STYLE_BY_SIZE.large,
            BASE_BUTTON_STYLE_BY_VARIANT.solid,
            "pc:hidden flex w-[160px] absolute bottom-[52px] right-4 tablet:right-8",
          )}
        >
          지금 시작하기
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
