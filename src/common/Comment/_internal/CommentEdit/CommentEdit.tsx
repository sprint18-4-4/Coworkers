import { useState } from "react";
import { cn } from "@/utils";
import { useAutoHeight } from "@/common/Input/InputReply/_hooks";
import { InputBox } from "@/common";
import { BaseButton } from "@/common";
import { CommentEditProps } from "../../_types";

const CommentEdit = ({ initialContent, onSave, onCancel, className }: CommentEditProps) => {
  const [content, setContent] = useState(initialContent);
  const { ref: textareaRef } = useAutoHeight(48, 200);

  const handleSave = () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    onSave(trimmedContent);
  };

  const handleCancel = () => {
    setContent(initialContent);
    onCancel();
  };

  return (
    <div className={cn("w-full flex flex-col items-end bg-icon-inverse", className)}>
      <InputBox
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글을 입력해주세요."
        size="sm"
        textareaClassName="border-none p-0 bg-icon-inverse rounded-none tablet:text-md-regular pc:text-md-regular"
      />
      <div className="flex justify-end gap-2 mt-2">
        <BaseButton variant="outlinedSecondary" size="small" onClick={handleCancel} className="w-[48px] h-[32px]">
          <span className="text-md-semibold">취소</span>
        </BaseButton>
        <BaseButton variant="outlinedPrimary" size="small" onClick={handleSave} className="w-[73px] h-[33px]">
          <span className="text-md-semibold">수정하기</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default CommentEdit;
