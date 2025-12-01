"use client";

import Image from "next/image";
import { Input, InputBox, BaseButton, Icon, FloatingButton } from "@/common";
import { ChangeEvent, FormEvent, useState } from "react";
import { usePostArticle } from "@/api/hooks";
import { INPUT_AREA_STYLE, LABEL_STYLE } from "../_constants/STYLE";
import { toastKit } from "@/utils";
import useImageUpload from "@/hooks/useImageUpload";

interface FormStateType {
  title: string;
  content: string;
}

const ArticleForm = () => {
  const { mutate: postArticle, isPending } = usePostArticle();

  const [formState, setFormState] = useState<FormStateType>({
    title: "",
    content: "",
  });

  const { preview, file, handleImageChange, uploadImage, isUploading, clear } = useImageUpload();

  const { error } = toastKit();

  const isSubmitDisabled = isPending || isUploading || !formState.title.trim() || !formState.content.trim();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = () => {
    clear();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content } = formState;

    try {
      let imageUrl: string | null = null;

      if (file) {
        imageUrl = await uploadImage();
      }

      const newFormData = {
        title,
        content,
        ...(imageUrl && { image: imageUrl }),
      };

      postArticle(newFormData);
    } catch (err) {
      console.error(err);
      error("게시글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-10">
      <div className={INPUT_AREA_STYLE}>
        <label htmlFor="articleTitle" className={LABEL_STYLE}>
          제목 <span className="text-status-danger">*</span>
        </label>
        <Input
          name="title"
          id="articleTitle"
          placeholder="제목을 입력해주세요."
          value={formState.title}
          onChange={handleTextChange}
          required
          maxLength={40}
        />
      </div>

      <div className={INPUT_AREA_STYLE}>
        <label htmlFor="articleContent" className={LABEL_STYLE}>
          내용 <span className="text-status-danger">*</span>
        </label>
        <InputBox
          name="content"
          id="articleContent"
          placeholder="내용을 입력해주세요."
          size="lg"
          value={formState.content}
          onChange={handleTextChange}
        />
      </div>

      <div className={INPUT_AREA_STYLE}>
        <label className={LABEL_STYLE}>이미지</label>

        <input
          id="articleImg"
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
            htmlFor="articleImg"
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

      <BaseButton type="submit" variant="solid" size="large" disabled={isSubmitDisabled}>
        {isPending || isUploading ? "등록 중..." : "등록하기"}
      </BaseButton>
    </form>
  );
};

export default ArticleForm;
