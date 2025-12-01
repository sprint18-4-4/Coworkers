"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LinkButton } from "@/common";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ConversionSectionProps {
  link?: string;
}

const ConversionSection = ({ link = "login" }: ConversionSectionProps) => {
  const container = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      gsap.from(".feature-block", {
        scrollTrigger: {
          trigger: ".feature-block",
          start: "top bottom",
          invalidateOnRefresh: true,
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(2.5)",
      });
    },
    { scope: container },
  );

  return (
    <footer ref={container} className="bg-background-inverse py-[60px] tablet:py-[70px] pc:py-[90px]">
      <div className="feature-block flex-col-center gap-7">
        <div className="flex-col-center gap-2 tablet:gap-3">
          <h2 className="text-2lg-bold tablet:text-2xl-bold text-brand-primary">지금 바로 시작해보세요</h2>
          <p className="text-xs-regular tablet:text-lg-regular text-text-default">
            팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
          </p>
        </div>
        <LinkButton href={link} size="large" className="w-[160px]">
          지금 시작하기
        </LinkButton>
      </div>
    </footer>
  );
};

export default ConversionSection;
