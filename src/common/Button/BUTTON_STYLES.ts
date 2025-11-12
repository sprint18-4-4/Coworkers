// BaseButton

export const BASE_BUTTON_BASE_STYLE = "w-full flex-center gap-1";

export const BASE_BUTTON_DANGER_STYLE =
  "bg-status-danger text-text-inverse hover:bg-status-danger active:bg-status-danger disabled:bg-status-danger disabled:text-text-inverse";

export const BASE_BUTTON_STYLE_BY_SIZE = {
  large: "h-12 rounded-xl text-lg-semibold",
  medium: "h-10 rounded-full text-md-semibold",
  small: "h-[33px] rounded-lg text-md-semibold",
} as const;

export const BASE_BUTTON_STYLE_BY_VARIANT = {
  solid:
    "bg-brand-primary text-text-inverse hover:bg-interaction-hover active:bg-interaction-inactive disabled:bg-interaction-inactive",
  outlinedPrimary:
    "text-brand-primary border border-brand-primary hover:text-interaction-hover active:text-interaction-pressed disabled:text-interaction-inactive disabled:border-interaction-inactive",
  outlinedSecondary: "text-text-default border border-border-secondary",
} as const;

// FloatingButton

export const FLOATING_BUTTON_BASE_STYLE = "size-14 rounded-full py-[14px] px-[21px] flex-center";
export const FLOATING_BUTTON_STYLE_BY_VARIANT = {
  primary: "bg-brand-primary",
  inverse: "bg-background-inverse border border-border-primary shadow-xl",
} as const;

// ProgressButton

export const PROGRESS_BUTTON_BASE_STYLE =
  "w-full cursor-default flex justify-between items-center rounded-xl pl-5 pr-2 bg-state-200 text-md-medium";
