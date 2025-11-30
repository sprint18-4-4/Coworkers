"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DeviceImage, FeatureBlock } from "../_internal";
import { DETAIL_SECTION } from "../../_constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DetailSection = () => {
  const container = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-block", {
        scrollTrigger: {
          trigger: ".feature-block",
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".feature-image", {
        scrollTrigger: {
          trigger: ".feature-image",
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="pt-[45px] pc:pt-[83px] bg-brand-primary">
      <div className="flex flex-col gap-[30px] pc:gap-[108px] pc:flex-row-reverse pc:justify-center">
        <div className="feature-block">
          <FeatureBlock
            iconSrc={DETAIL_SECTION.iconSrc}
            iconAlt=""
            title={DETAIL_SECTION.title}
            description={DETAIL_SECTION.description}
            titleClassName="text-lg-bold tablet:text-2xl-bold text-text-inverse"
            descriptionClassName="text-xs-regular tablet:text-md-regular text-point-blue"
            className="pc:mt-[180px] pc:ml-[0] pc:mr-[35px]"
          />
        </div>
        <div className="feature-image relative min-h-0 tablet:ml-[45px] pc:ml-0">
          <DeviceImage
            ImageInfo={{ alt: "대시보드 이미지", width: 982, height: 667 }}
            Src={{
              mobileSrc: DETAIL_SECTION.mobileSrc,
              tabletSrc: DETAIL_SECTION.tabletSrc,
              desktopSrc: DETAIL_SECTION.desktopSrc,
            }}
            ImageClassName="object-cover object-right w-full h-full pc:w-[982px] pc:h-[667px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
