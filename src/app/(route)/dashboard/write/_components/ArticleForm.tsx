"use client";

import Image from "next/image";
import { Input, InputBox, BaseButton, Icon } from "@/common";
import { ChangeEvent, useState } from "react";

const LABEL_STYLE = "text-text-primary text-lg-bold";
const INPUT_AREA_STYLE = "flex flex-col gap-4";

const ArticleForm = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-10">
      <div className={INPUT_AREA_STYLE}>
        <label htmlFor="articleTitle" className={LABEL_STYLE}>
          제목 <span className="text-status-danger">*</span>
        </label>
        <Input id="articleTitle" placeholder="제목을 입력해주세요." />
      </div>

      <div className={INPUT_AREA_STYLE}>
        <label htmlFor="articleContent" className={LABEL_STYLE}>
          내용 <span className="text-status-danger">*</span>
        </label>
        <InputBox id="articleContent" placeholder="내용을 입력해주세요." size="lg" />
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
      <BaseButton type="submit" variant="solid" size="large">
        등록하기
      </BaseButton>
    </form>
  );
};

export default ArticleForm;
