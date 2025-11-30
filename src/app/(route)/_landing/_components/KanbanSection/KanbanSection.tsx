"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DeviceImage, FeatureBlock } from "../_internal";
import { KANBAN_SECTION } from "../../_constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const KanbanSection = () => {
  const container = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-block", {
        scrollTrigger: {
          trigger: ".feature-block",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".feature-image", {
        scrollTrigger: {
          trigger: ".feature-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.7)",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="w-full py-[45px] tablet:py-[80px] pc:py-[100px] bg-icon-inverse">
      <div className="w-full pc:max-w-[1920px] pc:mx-auto">
        <div className="mx-auto flex flex-col tablet:gap-6 pc:gap-[100px] pc:flex-row pc:justify-center">
          <div className="feature-block">
            <FeatureBlock
              iconSrc={KANBAN_SECTION.iconSrc}
              iconAlt=""
              title={KANBAN_SECTION.title}
              description={KANBAN_SECTION.title}
              titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
              descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
              className="pc:mt-[78px] pc:ml-[76px]"
            />
          </div>
          <div className="feature-image relative h-fit ml-[35px] tablet:ml-[30px]">
            <DeviceImage
              ImageInfo={{ alt: "대시보드 이미지", width: 1024, height: 600 }}
              Src={{
                mobileSrc: KANBAN_SECTION.mobileSrc,
                tabletSrc: KANBAN_SECTION.tabletSrc,
                desktopSrc: KANBAN_SECTION.desktopSrc,
              }}
              ImageClassName="object-cover object-left w-full h-ull pc:w-[1024px] pc:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanSection;
