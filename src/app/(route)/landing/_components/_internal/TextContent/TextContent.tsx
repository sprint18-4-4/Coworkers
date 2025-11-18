import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils";

/**
 * @author KimWonSeon
 * @description 텍스트 컨텐츠 영역 컴포넌트 입니다.
 *
 * @param iconSrc - 아이콘 이미지 주소
 * @param iconAlt - 아이콘의 대체 텍스트
 * @param title - 제목
 * @param description - 설명
 * @param className - wrapper div의 추가 클래스
 * @param titleClassName - 제목에 적용할 클래스
 * @param descriptionClassName - 설명에 적용할 클래스
 *
 * @example
 * ```tsx
 * <LandingHeader
 *   iconSrc="/landing/land-2.svg"
 *   iconAlt="아이콘 설명"
 *   title={
 *     <>
 *       칸반보드로 함께
 *       <br /> 할 일 목록을 관리해요
 *     </>
 *   }
 *   description={
 *     <>
 *       팀원과 함께 실시간으로 할 일을 추가하고
 *       <br /> 지금 무엇을 해야 하는지 한눈에 볼 수 있어요
 *     </>
 *   }
 *   titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
 *   descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
 * />
 */

interface LandingHeaderProps {
  iconSrc: string;
  iconAlt: string;
  title: ReactNode;
  description: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const LandingHeader = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: LandingHeaderProps) => {
  return (
    <div className={cn("max-w-[278px] ml-[35px] tablet:ml-[62px]", className)}>
      <Image src={iconSrc} alt={iconAlt} width={48} height={48} className="size-7 tablet:size-10 pc:size-12" />
      <div className="mt-1 flex flex-col gap-[12px]">
        <h2 className={titleClassName}>{title}</h2>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
};

export default LandingHeader;
