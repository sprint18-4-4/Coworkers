// 프로필 컴포넌트
export const PROFILE_SIZE = {
  sm: "size-6 rounded-[6px]",
  md: "size-8 rounded-[8px]",
  lg: "size-10 rounded-[12px]",
} as const;

export const PROFILE_IMAGE_SIZE = {
  sm: 24,
  md: 32,
  lg: 40,
} as const;

export const PROFILE_ICON_SIZE = {
  sm: "size-5",
  md: "size-6 tablet:size-6",
  lg: "size-[33px] tablet:size-[33px]",
} as const;

export const DEFAULT_ICON_SIZE = {
  sm: 20,
  md: 24,
  lg: 33,
} as const;

// 프로필 이미지 수정 컴포넌트

export const SIZE_CLASSES = {
  md: "w-[77px] h-[78px] rounded-[20px]",
  lg: "w-[112px] h-[116px] rounded-[32px]",
} as const;

export const IMAGE_SIZE_VALUES = {
  md: 64,
  lg: 100,
} as const;

export const PROFILE_EDIT_ICON_SIZE = {
  md: "size-12 tablet:size-12",
  lg: "size-20 tablet:size-20",
};

export const ICON_SIZE_BY_TYPE = {
  user: {
    md: "size-12 tablet:size-12",
    lg: "size-20 tablet:size-20",
  },
  imgUpload: {
    md: "size-6 tablet:size-6",
    lg: "size-9 tablet:size-9",
  },
} as const;

export const EDIT_BUTTON_SIZE = {
  md: "size-[22px]",
  lg: "size-8",
} as const;

export const EDIT_ICON_SIZE = {
  md: "size-3 tablet:size-3",
  lg: "size-[18px] tablet:size-[18px]",
} as const;
