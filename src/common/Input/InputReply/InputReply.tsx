"use client";

import InputBox from "../InputBox/InputBox";
import { useAutoHeight } from "./_hooks";
import { useState } from "react";

const InputReply = () => {
  const [value, setValue] = useState("");
  const { ref: textareaRef, resetHeight } = useAutoHeight(48, 200);

  const handleSubmit = () => {
    if (!value.trim()) return;
    setValue("");
    resetHeight();
  };

  return (
    <div className="border border-background-tertiary border-x-0 flex items-end gap-4">
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
      {/* TODO(김원선): 버튼 구현시 변경 */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!value}
        className={`
          size-6 rounded-full text-text-inverse mb-3 mr-2
          ${value ? "bg-brand-primary" : "bg-icon-primary"}`}
        aria-label={value ? "댓글 작성" : "입력 필요"}
      >
        ↑
      </button>
    </div>
  );
};

InputReply.displayName = "InputReply";

export default InputReply;
