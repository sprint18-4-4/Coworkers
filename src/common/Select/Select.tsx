"use client";

import { useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { cn } from "@/utils";
import { SelectOption } from "./_types/types";
import { useDropdownClose } from "@/hooks";

/**
 * @author sangin
 *
 * @example
 * ```tsx
 * const [order ,setOrder] = useState("recent")
 * const options = [
 *   { label: "최신순", value: "recent" },
 *   { label: "좋아요순", value: "like" },
 * ];
 *
 * <Select
 *   value={order}
 *   onChange={setOrder}
 *   options={options}
 * />
 * ```
 */

interface SelectProps<T> {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  className?: string;
  textAlign?: "left" | "center";
}

const Select = <T,>({ value, options, onChange, className, textAlign = "left" }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  const handleSelect = (option: SelectOption<T>) => {
    onChange(option.value);
    setIsOpen(false);
  };

  useDropdownClose(selectRef, () => setIsOpen(false), isOpen);

  return (
    <div className="relative inline-block" ref={selectRef}>
      <button
        aria-label="선택 버튼"
        className={cn(
          "flex justify-between items-center min-w-[110px] tablet:min-w-[120px] h-[44px] px-[10px] py-[14px] bg-background-primary border border-border-primary rounded-xl",
          className,
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-text-default text-md-medium">{selectedLabel}</span>
        <span>
          <Icon
            aria-label="화살표"
            name="downArrow"
            className={cn("text-icon-primary transition-transform duration-300", isOpen && "rotate-180")}
          />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full mt-1 w-full bg-background-primary border rounded-xl shadow-md z-10 overflow-hidden">
          {options.map((option) => (
            <li key={option.label}>
              <button
                aria-label="선택 메뉴"
                className={cn("w-full px-3 py-2 hover:bg-state-200 transition", `text-${textAlign}`)}
                onClick={() => handleSelect(option)}
              >
                <span className="text-md-regular text-text-primary">{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
