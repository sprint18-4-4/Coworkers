"use client";

import { cn } from "@/utils";
import { MyProfileForm, SecessionButton } from "./_components";
// import { SaveChangesSnackbar } from "@/common";

const MyPage = () => {
  return (
    <section className={cn("w-full h-[calc(100svh-52px)] flex-center", "tablet:h-svh")}>
      <div
        className={cn(
          "w-full h-full mx-4 tablet:mx-[60px] flex-col-center gap-7",
          "min-w-[343px] max-w-[940px] max-h-[600px] tablet:max-h-[720px]",
        )}
      >
        <div
          className={cn(
            "w-full h-full bg-background-primary rounded-[20px]  flex-col-center gap-[35px]",
            "px-5 tablet:px-[45px]",
          )}
        >
          <h2 className="w-full text-left text-xl-bold text-text-primary tablet:text-2xl-bold">계정 설정</h2>
          <MyProfileForm />
          <SecessionButton />
        </div>
        {/* TODO(김원선): 기능과 API 연결시 구현 */}
        {/* <SaveChangesSnackbar
          title="저장하지 않은 변경사항이 있어요!"
          onSave={() => {}}
          buttonText="변경사항 저장하기"
          formId="profileForm"
        /> */}
      </div>
    </section>
  );
};

export default MyPage;
