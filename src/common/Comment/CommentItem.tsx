"use client";

import { useState } from "react";
import { cn, formatTime } from "@/utils";
import Dropdown from "../Dropdown/Dropdown";
import { CommentProps } from "./_types/type";
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

const CommentItem = ({ comment, showKebab = false, className, onDelete, onUpdate }: CommentProps) => {
  const { user, content, createdAt } = comment;
  const [isEditing, setIsEditing] = useState(false);

  const dropdownOptions = [
    {
      label: "수정하기",
      action: () => {
        setIsEditing(true);
      },
    },
    {
      label: "삭제하기",
      action: () => {
        onDelete(comment.id);
      },
    },
  ];

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
          <CommentEdit
            initialComment={content}
            onSubmit={(newContent) => {
              onUpdate(comment.id, newContent);
              setIsEditing(false);
            }}
            onClose={() => setIsEditing(false)}
          />
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
        <div className="flex items-start">
          <span className="text-lg-bold text-text-primary flex-grow">{user.nickname}</span>
          {showKebab && (
            <Dropdown
              iconName="kebab"
              options={dropdownOptions}
              placement="bottom-right"
              iconClassName="size-4 tablet:size-4"
            />
          )}
        </div>
        <p className="text-md-regular text-text-primary whitespace-pre-wrap break-words">{content}</p>
        <span className="text-md-medium text-interaction-inactive">{formatTime(createdAt)}</span>
      </div>
    </div>
  );
};

export default CommentItem;
