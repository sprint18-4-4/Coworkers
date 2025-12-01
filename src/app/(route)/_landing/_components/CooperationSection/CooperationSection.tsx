"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DeviceImage, FeatureBlock } from "../_internal";
import { COOPERATION_SECTION } from "../../_constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CooperationSection = () => {
  const container = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-block", {
        scrollTrigger: {
          trigger: ".feature-block",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".feature-image", {
        scrollTrigger: {
          trigger: ".feature-image",
          start: "top 95%",
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
    <section ref={container} className="pt-[44px] tablet:pt-[77px] pc:pt-[100px] bg-background-secondary">
      <div className="flex flex-col gap-[24px] pc:gap-[108px] pc:flex-row pc:justify-center">
        <div className="feature-block">
          <FeatureBlock
            iconSrc={COOPERATION_SECTION.iconSrc}
            iconAlt=""
            title={COOPERATION_SECTION.title}
            description={COOPERATION_SECTION.description}
            titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
            descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
            className="pc:mt-[180px] pc:ml-[76px]"
          />
        </div>
        <div className="feature-image relative h-fit mx-5 tablet:mx-[66px] pc:mx-0">
          <DeviceImage
            ImageInfo={{ alt: "대시보드 이미지", width: 940, height: 800 }}
            Src={{
              mobileSrc: COOPERATION_SECTION.mobileSrc,
              tabletSrc: COOPERATION_SECTION.tabletSrc,
              desktopSrc: COOPERATION_SECTION.desktopSrc,
            }}
            ImageClassName="object-cover object-left pc:w-[940px] pc:h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
