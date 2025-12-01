"use client";

import { usePatchArticle } from "@/api/hooks";
import { BaseButton, Input, InputBox, Modal, Icon, FloatingButton } from "@/common";
import { ArticleDetail } from "@/types/ArticleType";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import useImageUpload from "@/hooks/useImageUpload";

interface ArticleEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: ArticleDetail;
}

interface FormStateType {
  title: string;
  content: string;
  image: string | null;
}

const ArticleEditModal = ({ isOpen, onClose, article }: ArticleEditModalProps) => {
  const { mutate: patchArticle, isPending } = usePatchArticle();

  const [formState, setFormState] = useState<FormStateType>({
    title: article.title,
    content: article.content,
    image: article.image,
  });

  const { preview, file, handleImageChange, uploadImage, isUploading, clear } = useImageUpload(
    article.image ?? undefined,
  );

  const isDisabledEditButton = isPending || isUploading || !formState.title.trim() || !formState.content.trim();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveImage = () => {
    clear();
    setFormState((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleEditClick = async () => {
    const { title, content } = formState;

    let imageUrl: string | null = null;

    if (file) {
      imageUrl = await uploadImage();
    }
    const newForm = {
      title,
      content,
      image: imageUrl !== null ? imageUrl : formState.image === null ? null : formState.image,
    };
    patchArticle(
      {
        articleId: article.id,
        body: newForm,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body className="flex-col-center gap-4">
        <h3 className="text-text-primary text-lg-bold">게시글 수정하기</h3>

        <form className="w-full flex flex-col gap-4">
          <label htmlFor="articleTitle" className="text-text-primary text-lg-bold">
            제목
          </label>
          <Input id="articleTitle" name="title" value={formState.title} onChange={handleTextChange} />

          <InputBox
            name="content"
            label="내용"
            value={formState.content}
            onChange={handleTextChange}
            textareaClassName="h-[300px]"
          />

          <div className="flex flex-col gap-2">
            <label className="text-text-primary text-lg-bold">이미지</label>
            <input
              id="articleImgEdit"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) handleImageChange(selectedFile);
              }}
            />

            <div className="relative size-[120px]">
              <label
                htmlFor="articleImgEdit"
                className="w-full h-full rounded-xl border border-border-primary flex-center cursor-pointer overflow-hidden hover:border-state-400 transition relative"
              >
                {preview ? (
                  <Image src={preview} alt="미리보기" fill className="object-cover" />
                ) : (
                  <span className="flex flex-col items-center gap-2 text-text-300 text-sm">
                    <Icon name="imgUpload" />
                  </span>
                )}
              </label>

              {preview && (
                <FloatingButton
                  iconName="x"
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex-center"
                />
              )}
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <BaseButton onClick={onClose} variant="outlinedSecondary" size="large">
          닫기
        </BaseButton>

        <BaseButton
          type="button"
          onClick={handleEditClick}
          variant="solid"
          size="large"
          disabled={isDisabledEditButton}
        >
          {isPending || isUploading ? "수정 중..." : "수정하기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleEditModal;
