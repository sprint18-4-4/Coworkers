"use client";

import { cn } from "@/utils";
import { useState } from "react";

interface TodoProps {
  title: string;
  completed: boolean;
}

const Todo = ({ title, completed }: TodoProps) => {
  const [checked, setChecked] = useState(completed);

  return (
    <label htmlFor={title} className="flex items-center cursor-pointer select-none">
      <input
        id={title}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className={cn(
          "appearance-none size-3 rounded-[4px] bg-transparent",
          "tablet:size-4 tablet:rounded-md",
          "border border-icon-primary checked:bg-brand-primary checked:border-none",
        )}
      />
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
