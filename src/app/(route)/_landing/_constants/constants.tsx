import { ReactNode } from "react";

interface SectionContent {
  title: ReactNode;
  description: ReactNode;
  iconSrc: string;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
}

export const KANBAN_SECTION: SectionContent = {
  title: (
    <>
      칸반보드로 함께
      <br /> 할 일 목록을 관리해요
    </>
  ),
  description: (
    <>
      팀원과 함께 실시간으로 할 일을 추가하고
      <br /> 지금 무엇을 해야 하는지 한눈에 볼 수 있어요
    </>
  ),
  iconSrc: "/landing/land-2.svg",
  mobileSrc: "/landing/img-2-2.png",
  tabletSrc: "/landing/img-2-1.png",
  desktopSrc: "/landing/img-2.png",
};

export const DETAIL_SECTION: SectionContent = {
  title: (
    <>
      세부적으로 할 일들을
      <br /> 간편하게 체크해요
    </>
  ),
  description: (
    <>
      일정에 맞춰 해야 할 세부 항목을 정리하고,
      <br /> 하나씩 빠르게 완료해보세요
    </>
  ),
  iconSrc: "/landing/land-3.svg",
  mobileSrc: "/landing/img-3-2.png",
  tabletSrc: "/landing/img-3-1.png",
  desktopSrc: "/landing/img-3.png",
};

export const COOPERATION_SECTION: SectionContent = {
  title: (
    <>
      할 일 공유를 넘어
      <br /> 의견을 나누고 함께 결정해요
    </>
  ),
  description: (
    <>
      댓글로 진행상황을 기록하고 피드백을 주고받으며
      <br /> 함께 결정을 내릴 수 있어요.
    </>
  ),
  iconSrc: "/landing/land-4.svg",
  mobileSrc: "/landing/img-4-2.png",
  tabletSrc: "/landing/img-4-1.png",
  desktopSrc: "/landing/img-4.png",
};
