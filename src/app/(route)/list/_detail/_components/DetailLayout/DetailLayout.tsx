"use client";

import { BaseButton, CommentItem, Icon, InputReply, Profile } from "@/common";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";

interface DetailLayoutProps {
  id: string;
}

const CommentData = {
  id: 1,
  content: "lorem ipsum dolor sit amet consectetur adipisicing elit",
  createdAt: "2024-07-29",
  updatedAt: "2024-07-29",
  user: { id: 1, nickname: "안해나", image: "" },
};

const DetailLayout = ({ id }: DetailLayoutProps) => {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <>
      <section
        className={cn(
          "w-full min-h-[calc(100vh-52px)] flex flex-col px-4 py-3 bg-background-primary",
          "fixed inset-x-0 inset-y-10 z-[999] shadow-lg",
          "tablet:px-7 tablet:py-10 tablet:inset-x-[150px] tablet:inset-y-0",
          "pc:static pc:min-w-[200px] pc:p-10",
        )}
      >
        <button aria-label="닫기" onClick={onClickClose}>
          <Icon name="x" className="size-6 tablet-6" />
        </button>

        <div className="flex flex-col gap-4 mt-5">
          <div className="flex items-center justify-between">
            <h4 className={cn("text-xl-bold", "tablet:text-2xl-bold")}>법인 설립 비용 안내 드리기</h4>
            <Icon name="kebab" className="size-6 tablet:size-6" />
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-black" />
              <span className="text-md-medium text-text-primary">안해나</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3">
                <Icon name="calendar" className="size-4 tablet:size-4" />
                <span className="text-xs-regular text-text-default">시작 날짜</span>
                <time dateTime="2024-07-29" className="text-xs-regular text-text-primary">
                  2024년 7월 29일 오후 3:30
                </time>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="repeat" className="size-4 tablet:size-4" />
                <span className="text-xs-regular text-text-default">반복 설정</span>
                <span className="text-xs-regular text-text-primary">매일 반복</span>
              </p>
            </div>
          </div>

          <hr className="my-1" />

          <p className="text-md-regular text-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit neque sequi labore cupiditate aliquam
            doloribus unde quidem ipsum excepturi.
          </p>

          <div className={cn("flex items-center gap-1 text-lg-bold text-text-primary mt-10", "tablet:text-2lg-bold")}>
            <h5>댓글</h5>
            <span className={cn("text-lg-bold text-brand-primary", "tablet:text-2lg-bold")}>3</span>
          </div>
          <div className="flex items-center gap-3 w-full">
            <Profile src={""} />
            <InputReply />
          </div>
        </div>

        <section aria-label="댓글 목록">
          <CommentItem comment={CommentData} />
          <CommentItem comment={CommentData} />
        </section>
      </section>

      <BaseButton
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

export default DetailLayout;
