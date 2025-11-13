// BaseButton

export const BASE_BUTTON_BASE_STYLE = "w-full flex-center gap-1";

export const BASE_BUTTON_DANGER_STYLE =
  "bg-status-danger text-text-inverse hover:bg-status-danger active:bg-status-danger disabled:bg-status-danger disabled:text-text-inverse";

export const BASE_BUTTON_STYLE_BY_SIZE: Record<"large" | "medium" | "small", string> = {
  large: "h-12 rounded-xl text-lg-semibold",
  medium: "h-10 rounded-full text-md-semibold",
  small: "h-[33px] rounded-lg text-md-semibold",
};

export const BASE_BUTTON_STYLE_BY_VARIANT: Record<"solid" | "outlinedPrimary" | "outlinedSecondary", string> = {
  solid:
    "bg-brand-primary text-text-inverse hover:bg-interaction-hover active:bg-interaction-inactive disabled:bg-interaction-inactive",
  outlinedPrimary:
    "text-brand-primary border border-brand-primary hover:text-interaction-hover active:text-interaction-pressed disabled:text-interaction-inactive disabled:border-interaction-inactive",
  outlinedSecondary: "text-text-default border border-border-secondary",
};
