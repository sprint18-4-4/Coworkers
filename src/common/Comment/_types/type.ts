import { CommentData } from "@/types";

export interface CommentProps {
  comment: CommentData;
  showKebab?: boolean;
  isEditing?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSave?: (content: string) => void;
  onCancel?: () => void;
  className?: string;
}

export interface CommentEditProps {
  initialContent: string;
  onSave: (content: string) => void;
  onCancel: () => void;
  className?: string;
}
