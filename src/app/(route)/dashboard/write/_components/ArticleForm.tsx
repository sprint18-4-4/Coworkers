"use client";

import Image from "next/image";
import { Input, InputBox, BaseButton, Icon } from "@/common";
import { ChangeEvent, FormEvent, useState } from "react";
import { postImageUpload } from "@/api/axios";
import { usePostArticle } from "@/api/hooks";
import { INPUT_AREA_STYLE, LABEL_STYLE } from "./STYLE";

interface FormStateType {
  title: string;
  content: string;
  image: File | null;
}

const ArticleForm = () => {
  const { mutate: postArticle, isPending } = usePostArticle();
  const [preview, setPreview] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormStateType>({
    title: "",
    content: "",
    image: null,
  });

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setFormState((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content, image } = formState;

    try {
      const imageURL = image && (await postImageUpload(image));
      const newFormData = {
        title: title,
        content: content,
        ...(imageURL && { image: imageURL }),
      };
      postArticle(newFormData);
    } catch (error) {
      console.error(error);
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
        <input id="articleImg" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />

        <label
          htmlFor="articleImg"
          className="size-[120px] rounded-xl border border-border-primary flex-center cursor-pointer overflow-hidden hover:border-state-400 transition relative"
        >
          {preview ? (
            <Image src={preview} alt="미리보기" fill className="w-full h-full object-cover" />
          ) : (
            <span className="flex-cols-center gap-2">
              <Icon name="imgUpload" />
            </span>
          )}
        </label>
      </div>
      <BaseButton type="submit" variant="solid" size="large" disabled={isPending}>
        {isPending ? "등록 중..." : "등록하기"}
      </BaseButton>
    </form>
  );
};

export default ArticleForm;
