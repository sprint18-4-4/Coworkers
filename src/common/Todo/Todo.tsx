"use client";

import { cn } from "@/utils";
import { ChangeEvent, useState } from "react";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * // 기본 사용
 * <Todo id="todo-1" title="할 일" completed={false} />
 */

interface TodoProps {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = ({ id, title, completed }: TodoProps) => {
  const [checked, setChecked] = useState(completed);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    // TODO(지권): 완료/미완료 상태 변경 API 호출
  };

  return (
    <label
      htmlFor={id}
      aria-label={`${title} ${checked ? "완료" : "미완료"}`}
      className="flex items-center cursor-pointer select-none"
    >
      <span className="relative inline-flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChecked}
          className={cn(
            "appearance-none size-3 rounded-[4px] bg-transparent",
            "border border-icon-primary checked:bg-brand-primary checked:border-none",
            "tablet:size-4 tablet:rounded-md",
          )}
        />
        {/* TODO(지권): 추후 아이콘 변경 필요 */}
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center text-[6px] text-text-inverse transition-opacity",
            "tablet:text-[8px]",
            checked ? "opacity-100" : "opacity-0",
          )}
        >
          ✓
        </span>
      </span>
      <span
        className={cn(
          "ml-[7px] text-xs-regular",
          "tablet:ml-2 tablet:text-md-regular",
          checked ? "text-slate-400 line-through" : "text-text-primary",
        )}
      >
        {title}
      </span>
    </label>
  );
};

export default Todo;
