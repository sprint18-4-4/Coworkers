"use client";

import { useState } from "react";
import { cn, formatTime } from "@/utils";
import { CommentProps } from "./_types/type";
import KebabMenu from "./_internal/KebabMenu/KebabMenu";
import CommentEdit from "./_internal/CommentEdit/CommentEdit";
import Profile from "@/common/Profile/Profile";

/**
 * @author KimWonSeon
 * @description 댓글 아이템 컴포넌트
 *
 * @remarks
 * - 일반: 프로필, 닉네임, 내용, 날짜 표시
 * - 수정: CommentEdit 컴포넌트로 전환
 * - 케밥 메뉴: showKebab이 true일 때 표시 (드롭다운 구현 필요)
 *
 * @param comment - 댓글 데이터
 * @param showKebab - 케밥 메뉴 표시 여부
 * @param className - 컨테이너 추가 className
 *
 * @example
 * ```tsx
 * // 기본 댓글
 * <CommentItem comment={commentData} />
 *
 * // 케밥 메뉴 포함
 * <CommentItem
 *   comment={commentData}
 *   showKebab={true}
 * />
 */

const CommentItem = ({ comment, showKebab = false, className }: CommentProps) => {
  const { user, content, createdAt } = comment;
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <li className={cn("w-full py-2.5 px-5 flex gap-4 bg-icon-inverse", "tablet:px-7 pc:py-4 pc:px-10", className)}>
        <div className="flex-shrink-0">
          <Profile src={user.image} alt={`${user.nickname} 프로필`} size="md" />
        </div>
        <div className="flex-grow">
          <div className="mb-1">
            <span className="text-lg-bold text-text-primary">{user.nickname}</span>
          </div>
          <CommentEdit initialComment={content} onClose={() => setIsEditing(false)} />
        </div>
      </li>
    );
  }

  return (
    <div className={cn("pt-2.5 mt-[15px] flex items-start gap-4 pb-[15px] border-b border-border-primary", className)}>
      <div className="flex-shrink-0 size-8">
        <Profile src={user.image} alt={`${user.nickname} 프로필`} size="md" />
      </div>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-center">
          <span className="text-lg-bold text-text-primary flex-grow">{user.nickname}</span>
          {showKebab && <KebabMenu commentId={comment.id} onEdit={() => setIsEditing(true)} />}
        </div>
        <p className="text-md-regular text-text-primary whitespace-pre-wrap break-words">{content}</p>
        <span className="text-md-medium text-interaction-inactive">{formatTime(createdAt)}</span>
      </div>
    </div>
  );
};

export default CommentItem;
