import { CommentData } from "@/types";

export interface CommentProps {
  comment: CommentData;
  onUpdate: (commentId: number, newContent: string) => void;
  onDelete: (commentId: number) => void;
  showKebab?: boolean;
  onEditClose?: () => void;
  className?: string;
}

export interface CommentEditProps {
  initialComment: string;
  onClose: () => void;
  onSubmit: (content: string) => void;
  className?: string;
}

export interface KebabMenuProps {
  commentId: number;
  onEdit: () => void;
}
