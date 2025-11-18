"use client";

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
    <section className="w-full bg-background-secondary relative">
      <div className="flex flex-col pc:flex-row">
        <div className="ml-5 mt-[34px] tablet:mt-[90px] pc:mt-[208px] pc:ml-[160px]">
          <Image src="/landing/land-1.svg" alt="로고" width={48} height={48} className="size-9 pc:size-12" />
          <div className="max-w-[246px] ml-5">
            <p className="text-md-medium tablet:text-lg-medium pc:text-xl-medium pc:mb-1 text-text-disabled">
              함께 만들어가는 To do list
            </p>
            <h2 className="text-2xl-brand-bold tablet:text-3xl-brand-bold pc:text-4xl-brand-bold text-brand-primary">
              Coworkers
            </h2>
          </div>
        </div>
        <div className="pc:w-full flex justify-end">
          <div className="max-w-[1330px] w-full">
            <ResponsiveImage
              alt="대시보드 이미지"
              width={1330}
              height={1080}
              mobileSrc="/landing/img-1-2.png"
              tabletSrc="/landing/img-1-1.png"
              desktopSrc="/landing/img-1.png"
            />
          </div>
        </div>
      </div>
      <Link
        href="/login"
        className={cn(
          BASE_BUTTON_BASE_STYLE,
          BASE_BUTTON_STYLE_BY_SIZE.large,
          BASE_BUTTON_STYLE_BY_VARIANT.solid,
          "block w-[160px] absolute bottom-[53px] right-4 pc:bottom-[208px] pc:left-[180px] pc:right-0",
        )}
      >
        지금 시작하기
      </Link>
    </section>
  );
};
export default HeroSection;
