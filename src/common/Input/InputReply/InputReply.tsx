"use client";

import { useEffect } from "react";
import { cn } from "@/utils";
import { useAutoHeight } from "./_hooks";
import Icon from "@/common/Icon/Icon";
import InputBox from "../InputBox/InputBox";

/**
 * @author KimWonSeon
 *
 * @param value - 입력창 현재 값
 * @param onChange - 입력값이 변경될 때 실행되는 핸드러
 * @param isSubmitting - 데이터 전송 중인지 여부
 * @param className - 최상위 div 적용될 스타일
 *
 * @example
 * ```tsx
 * <InputReply
 *  value={text}
 *  onChange={setText}
 *  isSubmitting={isLoading}
 */

interface InputReplyProps {
  value: string;
  onChange: (newValue: string) => void;
  isSubmitting: boolean;
  className?: string;
}

const InputReply = ({ value, onChange, isSubmitting, className }: InputReplyProps) => {
  const { ref: textareaRef, resetHeight } = useAutoHeight(48, 200);

  useEffect(() => {
    if (value === "") {
      resetHeight();
    }
  }, [value, resetHeight]);

  return (
    <div className={cn("w-full border border-background-tertiary border-x-0 flex items-end gap-4", className)}>
      <InputBox
        id="reply"
        ref={textareaRef}
        placeholder="댓글을 달아주세요."
        size="sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        textareaClassName="border-none"
        containerClassName="flex-1"
      />
      <button
        type="submit"
        disabled={!value.trim || isSubmitting}
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
