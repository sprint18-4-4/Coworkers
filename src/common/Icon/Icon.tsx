import { cn } from "@/utils";
import { IconName, IconResponsiveSize, IconSize } from "@/types";
import { ICON_RESPONSIVE_SIZES, ICON_SIZES, ICONS } from "./CONST_ICON";

// TODO(신천): 아이콘 에러 수정
// TODO(신천): 로그인 페이지(임시)에서 아이콘 렌더링, text-* 형식으로 작성 되는지 테스트 후 삭제

// TODO(신천): 아이콘 스토리북 추가 / PR 따로 생성 (작업 대기중인게 많아서 먼저 이슈 해결 후 스토리북 추가)

/**
 * 공용 아이콘 컴포넌트.
 * - 크기: `size`(모바일 기본) + `responsiveSize`(tablet/pc).
 * - 색상: `currentColor` 기반 → `text-*`로 제어.
 * - 접근성: 의미 있으면 `aria-label`, 아니면 생략(자동 `aria-hidden`).
 
 * @example
 * // 1) 기본 사용 (24px) — 장식용
 * <Icon name="searchSm" />
 *
 * @example
 * // 2) 크기 토큰 지정 (32px)
 * <Icon name="calendarLg" size="lg" />
 *
 * @example
 * // 3) 반응형 크기: 모바일 24px, tablet/pc 32px
 * <Icon name="alertSm" size="md" responsiveSize="mdUp" />
 *
 * @example
 * // 4) 색상은 텍스트 색으로 제어 (currentColor)
 * <Icon name="warning" className="text-red-500" />
 *
 * @example
 * // 5) 접근성: 의미 있는 아이콘이면 레이블 제공
 * <Icon name="notificationOn" aria-label="알림 켜짐" />
 */

type IconProps = {
  name: IconName;
  size?: IconSize;
  responsiveSize?: IconResponsiveSize;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

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
