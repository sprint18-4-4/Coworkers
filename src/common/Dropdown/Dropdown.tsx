"use client";

import { useDropdownClose } from "@/hooks";
import { MouseEvent, ReactNode, useRef, useState } from "react";
import { cn } from "@/utils";
import Icon, { IconKeys } from "../Icon/Icon";
import { DropdownOption } from "./_types/types";

/**
 * @author sangin
 *
 * @example
 * ```tsx
 * const options = [
 *   { label: "마이 히스토리", action: ()=>{} },
 *   { label: "로그아웃", action: ()=>{} },
 * ];
 *
 * <Dropdown
 *   iconName={kebab}
 *   options={options}
 *   iconClassName="tablet:size-9 text-red-200"
 * />
 * ```
 */

type DropdownPlacement = "bottom-left" | "bottom-right" | "top-left" | "top-right";

const PLACEMENT_BY_STYLE = {
  "bottom-left": "left-0 top-full",
  "bottom-right": "right-0 top-full",
  "top-left": "left-0 bottom-full",
  "top-right": "right-0 bottom-full",
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const placementStyle = PLACEMENT_BY_STYLE[placement];

  const handleDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: DropdownOption) => {
    option.action();
    setIsOpen(false);
  };

  useDropdownClose(dropdownRef, () => setIsOpen(false), isOpen);
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={handleDropdownClick}>
        <span>{iconName ? <Icon name={iconName} className={iconClassName} /> : image}</span>
      </button>

      {isOpen && (
        <ul
          className={cn(
            "absolute mt-1 min-w-[120px] bg-background-primary border rounded-xl shadow-md z-10",
            placementStyle,
          )}
        >
          {options.map((option) => (
            <li key={option.label}>
              <button className={cn("w-full px-3 py-2", `text-${textAlign}`)} onClick={() => handleOptionClick(option)}>
                <span className="text-md-regular text-text-primary">{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
