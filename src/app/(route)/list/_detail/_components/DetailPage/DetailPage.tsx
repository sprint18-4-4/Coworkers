"use client";

import { cn } from "@/utils";
import { BaseButton, Icon } from "@/common";
import { useRouter } from "next/navigation";
import { CommentSection, ContentSection, HeaderSection } from "../_internal";

interface DetailPageProps {
  id: string;
}

const DetailPage = ({ id }: DetailPageProps) => {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <>
      <article
        role="dialog"
        aria-modal="true"
        className={cn(
          "w-full min-h-[calc(100vh-52px)] flex flex-col px-4 py-3 space-y-6 bg-background-primary",
          "fixed inset-x-0 inset-y-10 z-[999] shadow-lg",
          "tablet:px-7 tablet:py-10 tablet:inset-x-[150px] tablet:inset-y-0",
          "pc:static pc:min-w-[200px] pc:p-10",
        )}
      >
        <button aria-label="닫기" onClick={onClickClose}>
          <Icon name="x" className="size-6 tablet-6" />
        </button>

        <HeaderSection />

        <hr />

        <ContentSection content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi qui cumque! Aperiam, architecto itaque!" />

        <CommentSection />
      </article>

      <BaseButton
        aria-label="완료 상태 취소하기"
        variant="outlinedPrimary"
        size="large"
        className="fixed bottom-4 right-4 z-[999] max-w-[132px] h-[40px] rounded-[40px] bg-background-inverse"
      >
        <Icon name="check" className="size-4 tablet:size-4" />
        완료 취소하기
      </BaseButton>
    </>
  );
};

export default DetailPage;
