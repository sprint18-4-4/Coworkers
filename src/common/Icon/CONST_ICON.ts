import AlertLg from "@/assets/icon/ic_alert_lg.svg";
import AlertSm from "@/assets/icon/ic_alert_sm.svg";
import ArrowDownLg from "@/assets/icon/ic_arrow_down_lg.svg";
import ArrowDownSm from "@/assets/icon/ic_arrow_down_sm.svg";
import Best from "@/assets/icon/ic_best.svg";
import BoardLg from "@/assets/icon/ic_board_lg.svg";
import BoardSm from "@/assets/icon/ic_board_sm.svg";
import Calendar from "@/assets/icon/ic_calendar.svg";
import CalendarLg from "@/assets/icon/ic_calendar_lg.svg";
import CalendarSm from "@/assets/icon/ic_calendar_sm.svg";
import Check from "@/assets/icon/ic_check.svg";
import CheckBlue from "@/assets/icon/ic_check_blue.svg";
import CheckboxActive from "@/assets/icon/ic_checkbox_active.svg";
import CheckboxDefault from "@/assets/icon/ic_checkbox_default.svg";
import ChessLg from "@/assets/icon/ic_chess_lg.svg";
import ChessSm from "@/assets/icon/ic_chess_sm.svg";
import Comment from "@/assets/icon/ic_comment.svg";
import FilledHeartLg from "@/assets/icon/ic_filled_heart_lg.svg";
import FilledHeartSm from "@/assets/icon/ic_filled_heart_sm.svg";
import HumanLg from "@/assets/icon/ic_human_lg.svg";
import HumanSm from "@/assets/icon/ic_human_sm.svg";
import Img from "@/assets/icon/ic_img.svg";
import KebabLg from "@/assets/icon/ic_kebab_lg.svg";
import KebabSm from "@/assets/icon/ic_kebab_sm.svg";
import LeftArrowLg from "@/assets/icon/ic_left_arrow_lg.svg";
import LeftArrowSm from "@/assets/icon/ic_left_arrow_sm.svg";
import LeftFoldLg from "@/assets/icon/ic_left_fold_lg.svg";
import LeftFoldSm from "@/assets/icon/ic_left_fold_sm.svg";
import Menu from "@/assets/icon/ic_menu.svg";
import Pencil from "@/assets/icon/ic_pencil.svg";
import PlusLg from "@/assets/icon/ic_plus_lg.svg";
import PlusSm from "@/assets/icon/ic_plus_sm.svg";
import ProgressDone from "@/assets/icon/ic_progress_done.svg";
import ProgressOngoing from "@/assets/icon/ic_progress_ongoing.svg";
import RepeatLg from "@/assets/icon/ic_repeat_lg.svg";
import RepeatSm from "@/assets/icon/ic_repeat_sm.svg";
import RightArrowLg from "@/assets/icon/ic_right_arrow_lg.svg";
import RightArrowSm from "@/assets/icon/ic_right_arrow_sm.svg";
import RightFoldLg from "@/assets/icon/ic_right_fold_lg.svg";
import SearchLg from "@/assets/icon/ic_search_lg.svg";
import SearchSm from "@/assets/icon/ic_search_sm.svg";
import Secession from "@/assets/icon/ic_secession.svg";
import SetLg from "@/assets/icon/ic_set_lg.svg";
import SetSm from "@/assets/icon/ic_set_sm.svg";
import TimeLg from "@/assets/icon/ic_time_lg.svg";
import TimeSm from "@/assets/icon/ic_time_sm.svg";
import UnfilledHeartLg from "@/assets/icon/ic_unfilled_heart_lg.svg";
import UnfilledHeartSm from "@/assets/icon/ic_unfilled_heart_sm.svg";
import VisibilityFalse from "@/assets/icon/ic_visibility_false.svg";
import VisibilityTrue from "@/assets/icon/ic_visibility_true.svg";
import X from "@/assets/icon/ic_x.svg";
import XLg from "@/assets/icon/ic_x_lg.svg";
import XMd from "@/assets/icon/ic_x_md.svg";

/**
 * 아이콘 레지스트리와 사이즈 토큰 모음
 * - `ICONS`: SVGR로 변환된 SVG 컴포넌트 매핑(아이콘 키 → React 컴포넌트)
 * - `ICON_SIZES`: 기본 크기 토큰(Tailwind `size-*`; 예외적으로 `x-sm`는 `w/h` 쌍)
 * - `ICON_RESPONSIVE_SIZES`: tablet/pc 구간에서만 크기 오버라이드
 * - 색상은 `currentColor` 기반 → `text-*` 클래스로 제어
 * - 타입(`IconName`)으로 컴파일 타임에 오타를 방지
 * @author shincheon
 *
 * @example
 * // 1) 기본 24px(장식용)
 * <Icon name="searchSm" />
 *
 * // 2) 32px로 고정 + 브랜드 컬러
 * <Icon name="calendarLg" size="lg" className="text-icon-brand" />
 *
 * // 3) 모바일 24px → tablet/pc 32px
 * <Icon name="alertSm" size="md" responsiveSize="mdUp" />
 *
 * // 4) 모바일 16px → tablet 20px, pc 24px
 * <Icon name="searchSm" size="sm" responsiveSize="growSm" />
 */

// 아이콘 컴포넌트 맵
export const ICONS = {
  alertLg: AlertLg,
  alertSm: AlertSm,
  arrowDownLg: ArrowDownLg,
  arrowDownSm: ArrowDownSm,
  best: Best,
  boardLg: BoardLg,
  boardSm: BoardSm,
  calendar: Calendar,
  calendarLg: CalendarLg,
  calendarSm: CalendarSm,
  check: Check,
  checkBlue: CheckBlue,
  checkboxActive: CheckboxActive,
  checkboxDefault: CheckboxDefault,
  chessLg: ChessLg,
  chessSm: ChessSm,
  comment: Comment,
  filledHeartLg: FilledHeartLg,
  filledHeartSm: FilledHeartSm,
  humanLg: HumanLg,
  humanSm: HumanSm,
  img: Img,
  kebabLg: KebabLg,
  kebabSm: KebabSm,
  leftArrowLg: LeftArrowLg,
  leftArrowSm: LeftArrowSm,
  leftFoldLg: LeftFoldLg,
  leftFoldSm: LeftFoldSm,
  menu: Menu,
  pencil: Pencil,
  plusLg: PlusLg,
  plusSm: PlusSm,
  progressDone: ProgressDone,
  progressOngoing: ProgressOngoing,
  repeatLg: RepeatLg,
  repeatSm: RepeatSm,
  rightArrowLg: RightArrowLg,
  rightArrowSm: RightArrowSm,
  rightFoldLg: RightFoldLg,
  searchLg: SearchLg,
  searchSm: SearchSm,
  secession: Secession,
  setLg: SetLg,
  setSm: SetSm,
  timeLg: TimeLg,
  timeSm: TimeSm,
  unfilledHeartLg: UnfilledHeartLg,
  unfilledHeartSm: UnfilledHeartSm,
  visibilityFalse: VisibilityFalse,
  visibilityTrue: VisibilityTrue,
  x: X,
  xLg: XLg,
  xMd: XMd,
} as const;

export const ICON_SIZES = {
  "x-sm": "w-2.5 h-2.5",
  sm: "size-4",
  rg: "size-5",
  md: "size-6",
  lg: "size-8",
} as const;

export const ICON_RESPONSIVE_SIZES = {
  /** 모바일 기본(md=24px) → 태블릿/PC 32px */
  mdUp: "tablet:size-8 pc:size-8",

  /** 모바일 기본(sm=16px) → 태블릿 20px, PC 24px */
  growSm: "tablet:size-5 pc:size-6",
} as const;
