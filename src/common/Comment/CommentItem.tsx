import { cn } from "@/utils";
import Icon from "../Icon/Icon";
import { CommentProps } from "./_types/type";
import CommentEdit from "./_internal/CommentEdit/CommentEdit";
import { Profile } from "@/common";
import { formatTime } from "@/utils/formatTime";

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
 * @param isEditing - 수정 모드 활성화 여부
 * @param onEdit - 수정 버튼 클릭 시 호출되는 콜백 (드롭다운에서 사용 예정)
 * @param onDelete - 삭제 버튼 클릭 시 호출되는 콜백 (드롭다운에서 사용 예정)
 * @param onSave - 수정 저장 시 호출되는 콜백
 * @param onCancel - 수정 취소 시 호출되는 콜백
 * @param className - 컨테이너 추가 className
 *
 * @example
 * ```tsx
 * // 댓글
 * <CommentItem
 *   comment={commentData}
 *   showKebab={true}
 * />
 *
 * // 수정하기
 * <CommentItem
 *   comment={commentData}
 *   isEditing={true}
 *   onSave={(content) => handleSave(comment.id, content)}
 *   onCancel={() => setEditingId(null)}
 * />
 */

const CommentItem = ({
  comment,
  showKebab = false,
  isEditing = false,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  className,
}: CommentProps) => {
  const { user, content, createdAt } = comment;

  const handleSave = (newContent: string) => {
    if (!onSave) return;
    onSave(newContent);
  };

  const handleCancel = () => {
    if (!onCancel) return;
    onCancel();
  };

  if (isEditing) {
    return (
      <div className={cn("w-full py-2.5 px-5 flex gap-4 bg-icon-inverse", "tablet:px-7 pc:py-4 pc:px-10", className)}>
        <div className="flex-shrink-0">
          <Profile src={user.image} alt={`${user.nickname} 프로필`} size="md" />
        </div>
        <div className="flex-grow">
          <div className="mb-1">
            <span className="text-lg-bold text-text-primary">{user.nickname}</span>
          </div>
          <CommentEdit initialContent={content} onSave={handleSave} onCancel={handleCancel} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pt-2.5 mx-5 mt-[15px] flex items-start gap-4 border-t-2 border-border-primary",
        "tablet:mx-7 pc:pt-4 pc:mx-10",
        className,
      )}
    >
      <div className="flex-shrink-0 size-8">
        <Profile src={user.image} alt={`${user.nickname} 프로필`} size="md" />
      </div>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div>
          <span className="text-lg-bold text-text-primary">{user.nickname}</span>
        </div>
        <p className="text-md-regular text-text-primary whitespace-pre-wrap break-words">{content}</p>
        <span className="text-md-medium text-interaction-inactive">{formatTime(createdAt)}</span>
      </div>

      {showKebab && (
        <button type="button" className="mr-4" aria-label="댓글 옵션">
          <Icon name="kebabSm" size="sm" />
        </button>
      )}
    </div>
  );
};

CommentItem.displayName = "CommentItem";

export default CommentItem;
