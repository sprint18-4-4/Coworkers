import { cn } from "@/utils";
import Image from "next/image";

/**
 * @author KimWonSeon
 * @description - 데스크탑, 태블릿, 모바일 디바이스별 반응형 이미지 적용 컴포넌트
 *
 * @param alt - 이미지 대체 텍스트
 * @param width - 원본 데스크탑 이미지 넓이
 * @param height - 원본 데스크탑 이미지 높이
 * @param mobileSrc - 모바일에서 사용될 이미지 경로
 * @param tabletSrc - 태블릿에서 사용될 이미지 경로
 * @param desktopSrc - 데스크탑에서 사용될 이미지 경로
 * @param className - picture 태그에 적용되는 클래스
 * @param ImageClassName - 실제 Image 요소에 적용할 클래스
 *
 * @example
 * ```tsx
 * <ResponsiveImage
 * alt="대시보드 이미지"
 * width={1330}
 * height={1080}
 * mobileSrc="/landing/img-1-2.png"
 * tabletSrc="/landing/img-1-1.png"
 * desktopSrc="/landing/img-1.png"
 *
 */

interface ResponsiveImageProps {
  alt: string;
  width: number;
  height: number;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  className?: string;
  ImageClassName?: string;
}

const ResponsiveImage = ({
  alt,
  width,
  height,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  className = "",
  ImageClassName = "",
}: ResponsiveImageProps) => {
  return (
    <picture className={cn("block w-full", className)}>
      <source media="(max-width: 430px)" srcSet={mobileSrc} />
      <source media="(min-width: 431px) and (max-width: 745px)" srcSet={tabletSrc} />
      <Image
        src={desktopSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full h-auto object-contain", ImageClassName)}
      />
    </picture>
  );
};

export default ResponsiveImage;
