// BaseButton

export const BASE_BUTTON_BASE_STYLE = "w-full flex-center gap-1";

export const BASE_BUTTON_DANGER_STYLE =
  "bg-status-danger text-text-inverse hover:text-none hover:bg-status-danger active:text-none active:bg-status-danger disabled:bg-status-danger disabled:text-text-inverse disabled:bg-text-disabled";

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

export const FLOATING_BUTTON_BASE_STYLE = "size-14 bg-brand-primary rounded-full flex-center";

// ProgressButton

export const PROGRESS_BUTTON_BASE_STYLE =
  "w-full cursor-default flex justify-between items-center rounded-xl pl-5 pr-2 bg-state-200 text-md-medium";
