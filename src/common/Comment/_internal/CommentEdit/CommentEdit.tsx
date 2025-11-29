import { useState } from "react";
import { cn } from "@/utils";
import { useAutoHeight } from "@/common/Input/InputReply/_hooks";
import InputBox from "@/common/Input/InputBox/InputBox";
import BaseButton from "@/common/Button/BaseButton";
import { CommentEditProps } from "../../_types";

/**
 * @author KimWonSeon
 * @description 댓글 수정 컴포넌트
 *
 * @param initialComment - 수정할 원본 댓글 내용
 * @param onClose - 취소 버튼 클릭 시 호출되는 콜백
 * @param className - 컨테이너 추가 className
 */

const CommentEdit = ({ initialComment, onClose, className, onSubmit }: CommentEditProps) => {
  const [comment, setComment] = useState(initialComment);
  const { ref: textareaRef } = useAutoHeight(48, 200);

  const handleSave = () => {
    const trimmedContent = comment.trim();
    if (!trimmedContent) return;

    onSubmit(trimmedContent);

    onClose();
  };

  const handleCancel = () => {
    setComment(initialComment);
    onClose();
  };

  return (
    <div className={cn("w-full flex flex-col items-end bg-icon-inverse", className)}>
      <InputBox
        ref={textareaRef}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력해주세요."
        size="sm"
        maxLength={250}
        textareaClassName="border-none p-0 bg-icon-inverse rounded-none tablet:text-md-regular pc:text-md-regular"
      />
      <div className="flex justify-end gap-2 mt-2">
        <BaseButton variant="outlinedSecondary" size="small" onClick={handleCancel} className="w-[48px] h-[32px]">
          <span className="text-md-semibold">취소</span>
        </BaseButton>
        <BaseButton
          variant="outlinedPrimary"
          size="small"
          onClick={handleSave}
          disabled={!comment.trim()}
          className="w-[73px] h-[33px]"
        >
          <span className="text-md-semibold">수정하기</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default CommentEdit;
