// src/components/Icon.tsx
import {
  ICONS,
  ICON_SIZES,
  ICON_RESPONSIVE_SIZES,
  type IconName,
  type IconSize,
  type IconResponsiveSize,
} from "@/constants/icon";
import { cn } from "@/utils/cn";

type IconProps = {
  /** 사용할 아이콘 이름 */
  name: IconName;
  /** 기본 크기 (팀 공통 규격) */
  size?: IconSize;
  /** 반응형 크기(선택): tablet/pc 구간에서 크기 재정의 프리셋 */
  responsiveSize?: IconResponsiveSize;
  /** 추가 Tailwind 클래스 (예: text-icon-brand, text-text-default 등) */
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ name, size = "md", responsiveSize, className, ...svgProps }: IconProps) => {
  const Svg = ICONS[name];

  return (
    <Svg
      className={cn(ICON_SIZES[size], responsiveSize && ICON_RESPONSIVE_SIZES[responsiveSize], className)}
      // 접근성: aria-label 없으면 장식용 처리(스크린리더 무소음)
      aria-hidden={svgProps["aria-label"] ? undefined : true}
      focusable="false"
      {...svgProps}
    />
  );
};
export default Icon;
