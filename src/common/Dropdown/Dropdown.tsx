"use client";

import { useDropdownClose } from "@/hooks";
import { MouseEvent, ReactNode, useRef, useState } from "react";
import { cn } from "@/utils";
import Icon, { IconKeys } from "../Icon/Icon";
import { DropdownOption } from "./_types/types";
import Portal from "../Portal/Portal";
import { DropdownPlacement, getPositionByPlacement } from "@/utils/getPositionByPlacement";

const PLACEMENT_TRANSFORM: Record<DropdownPlacement, string> = {
  "bottom-left": "translate-x-0 translate-y-0",
  "top-left": "translate-x-0 -translate-y-full",
  "bottom-right": "-translate-x-full translate-y-0",
  "top-right": "-translate-x-full -translate-y-full",
};

interface DropdownProps {
  iconName?: IconKeys;
  image?: ReactNode;
  iconClassName?: string;
  options: DropdownOption[];
  textAlign?: "left" | "center";
  placement?: DropdownPlacement;
}

const Dropdown = ({
  iconName,
  iconClassName,
  options,
  textAlign = "center",
  image,
  placement = "bottom-left",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const handleDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const pos = getPositionByPlacement(rect, placement);

    setPosition(pos);
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: DropdownOption) => {
    option.action();
    setIsOpen(false);
  };

  useDropdownClose(dropdownRef, () => setIsOpen(false), isOpen);

  return (
    <>
      <button ref={triggerRef} aria-label="드롭다운 버튼" onClick={handleDropdownClick}>
        {iconName ? <Icon name={iconName} className={iconClassName} /> : image}
      </button>

      {isOpen && (
        <Portal>
          <ul
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
            className={cn(
              "min-w-[120px] bg-background-primary border rounded-xl shadow-md z-[999]",
              PLACEMENT_TRANSFORM[placement],
            )}
          >
            {options.map((option) => (
              <li key={option.label}>
                <button
                  className={cn("w-full px-3 py-2 hover:bg-state-200 transition", `text-${textAlign}`)}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-md-regular text-text-primary">{option.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </>
  );
};

export default Dropdown;
