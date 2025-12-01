export type DropdownPlacement = "bottom-left" | "bottom-right" | "top-left" | "top-right";

export const getPositionByPlacement = (rect: DOMRect, placement: DropdownPlacement) => {
  const x = window.scrollX;
  const y = window.scrollY;

  switch (placement) {
    case "bottom-left":
      return { top: rect.bottom + y, left: rect.left + x };
    case "bottom-right":
      return { top: rect.bottom + y, left: rect.right + x };
    case "top-left":
      return { top: rect.top + y, left: rect.left + x };
    case "top-right":
      return { top: rect.top + y, left: rect.right + x };
  }
};
