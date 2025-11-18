"use client";

import { useState } from "react";
import { cn } from "@/utils";
import { useAutoHeight } from "./_hooks";
import Icon from "@/common/Icon/Icon";
import InputBox from "../InputBox/InputBox";

const InputReply = () => {
  const [value, setValue] = useState("");
  const { ref: textareaRef, resetHeight } = useAutoHeight(48, 200);

  const handleSubmit = () => {
    if (!value.trim()) return;
    setValue("");
    resetHeight();
  };

  return (
    <div className="w-full border border-background-tertiary border-x-0 flex items-end gap-4">
      <InputBox
        id="reply"
        ref={textareaRef}
        placeholder="댓글을 달아주세요."
        size="sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        textareaClassName="border-none"
        containerClassName="flex-1"
      />
      {/* TODO(김원선): 써클 버튼 컴포넌트 구현시 변경 */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!value}
        className={cn(
          "size-6 rounded-full text-text-inverse mb-3 mr-2 flex-center",
          value ? "bg-brand-primary" : "bg-icon-primary",
        )}
        aria-label={value ? "댓글 작성" : "입력 필요"}
      >
        <Icon name="upArrow" className="size-4 tablet:size-4" />
      </button>
    </div>
  );
};

InputReply.displayName = "InputReply";

export default InputReply;
