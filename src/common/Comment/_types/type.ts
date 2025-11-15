import { CommentData } from "@/types";

export interface CommentProps {
  comment: CommentData;
  showKebab?: boolean;
  onEditClose?: () => void;
  className?: string;
}

export interface CommentEditProps {
  initialComment: string;
  onClose: () => void;
  className?: string;
}

export interface KebabMenuProps {
  commentId: number;
  onEdit: () => void;
}
