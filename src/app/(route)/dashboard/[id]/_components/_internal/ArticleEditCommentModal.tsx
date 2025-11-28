import { ArticleCommentType } from "@/types";
import { usePatchArticleComment } from "@/api/hooks";
import { BaseButton, Input, Modal } from "@/common";
import { ChangeEvent, FormEvent, useState } from "react";

interface ArticleEditCommentModalProps {
  comment: ArticleCommentType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleEditCommentModal = ({ comment, isOpen, onClose }: ArticleEditCommentModalProps) => {
  const { mutate: patchArticleComment, isPending } = usePatchArticleComment();
  const [value, setValue] = useState("");

  if (!comment) {
    return null;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patchArticleComment(
      { commentId: comment?.id, body: { content: value } },
      {
        onSuccess: () => handleClose(),
      },
    );
  };

  const handleClose = () => {
    onClose();
    setValue("");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.CloseIcon onClose={handleClose} />
      <Modal.Body>
        <h3 className="text-center text-text-primary text-lg-bold">댓글 수정</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 py-6">
          <Input value={value} onChange={handleChange} placeholder={comment.content} />
          <BaseButton variant="solid" size="large" type="submit" disabled={isPending}>
            {isPending ? "등록 중..." : "수정하기"}
          </BaseButton>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ArticleEditCommentModal;
