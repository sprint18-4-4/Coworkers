"use client";

import { cn } from "@/utils";
import { ChangeEvent } from "react";
import Icon from "../Icon/Icon";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * const [completed, setCompleted] = useState(false);
 *
 * <Todo
 *   id={1}
 *   title="법인 설립 안내 드리기"
 *   completed={completed}
 *   onChangeCompleted={(_, next) => setCompleted(next)}
 * />
 */

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  onChangeCompleted: (id: number, next: boolean) => void;
  type?: "team" | "task";
}

const Todo = ({ id, title, completed, onChangeCompleted, type = "team" }: TodoProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCompleted(id, e.target.checked);
  };

  return (
    <label
      htmlFor={String(id)}
      aria-label={`${title} ${completed ? "완료" : "미완료"}`}
      className="flex items-center cursor-pointer select-none"
    >
      <span className="relative inline-flex items-center justify-center">
        <input
          id={String(id)}
          type="checkbox"
          checked={completed}
          onChange={handleChange}
          className={cn(
            "appearance-none size-3 rounded-[4px] bg-transparent",
            "border border-icon-primary checked:bg-brand-primary checked:border-none",
            "tablet:size-4 tablet:rounded-md",
          )}
        />
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center text-text-inverse transition-opacity",
            completed ? "opacity-100" : "opacity-0",
          )}
        >
          <Icon name="checkInverse" />
        </span>
      </span>
      <span
        className={cn(
          "ml-[7px] text-xs-regular truncate",
          "tablet:ml-2 tablet:text-md-regular",
          completed ? "text-slate-400 line-through" : "text-text-primary",
          type === "team"
            ? "max-w-[300px] tablet:max-w-[580px] pc:max-w-[234px]"
            : "max-w-[220px] tablet:max-w-[400px] pc:max-w-[550px]",
        )}
      >
        {title}
      </span>
    </label>
  );
};

export default Todo;
