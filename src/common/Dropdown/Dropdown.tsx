"use client";

import { useDropdownClose } from "@/hooks";
import { useRef, useState } from "react";
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

interface DropdownProps {
  iconName: IconKeys;
  iconClassName?: string;
  options: DropdownOption[];
  textAlign?: "left" | "center";
}

const Dropdown = ({ iconName, iconClassName, options, textAlign = "center" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (option: DropdownOption) => {
    option.action();
    setIsOpen(false);
  };

  useDropdownClose(dropdownRef, () => setIsOpen(false), isOpen);
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <span>
          <Icon name={iconName} className={iconClassName} />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full mt-1 min-w-[120px] bg-background-primary border rounded-xl shadow-md z-10">
          {options.map((option) => (
            <li key={option.label}>
              <button className={cn("w-full px-3 py-2", `text-${textAlign}`)} onClick={() => handleClick(option)}>
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
