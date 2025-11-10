import {
  ICONS,
  ICON_SIZES,
  ICON_RESPONSIVE_SIZES,
  type IconName,
  type IconSize,
  type IconResponsiveSize,
} from "@/constants/icon";
import { cn } from "@/utils";

/** Icon 컴포넌트 Props */
export type IconProps = {
  /** 아이콘 키 (`ICONS` 맵에서 관리) */
  name: IconName;
  /** 기본 크기 토큰(`size-*` 매핑). @defaultValue "md" */
  size?: IconSize;
  /** 반응형 크기 토큰(태블릿/PC 구간에서만 적용) */
  responsiveSize?: IconResponsiveSize;
  /** 추가 클래스(색상: `text-*`, 효과 등) */
  className?: string;
} & React.SVGProps<SVGSVGElement>;

/**
 * 공용 아이콘 컴포넌트.
 * - 크기: `size`(모바일 기본) + `responsiveSize`(tablet/pc).
 * - 색상: `currentColor` 기반 → `text-*`로 제어.
 * - 접근성: 의미 있으면 `aria-label`, 아니면 생략(자동 `aria-hidden`).
 */
const Icon = ({ name, size = "md", responsiveSize, className, ...svgProps }: IconProps) => {
  const Svg = ICONS[name];

  return (
    <Svg
      className={cn(ICON_SIZES[size], responsiveSize && ICON_RESPONSIVE_SIZES[responsiveSize], className)}
      aria-hidden={svgProps["aria-label"] ? undefined : true}
      focusable="false"
      {...svgProps}
    />
  );
};

export default Icon;
