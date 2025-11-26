import { Suspense } from "react";
import { cn } from "@/utils";
import NewPasswordForm from "./_components/NewPasswordForm/NewPasswordForm";

const ResetPasswordPage = () => {
  return (
    <section className={cn("w-full h-[calc(100svh-52px)] bg-background-secondary flex-center", "tablet:h-svh")}>
      <div
        className={cn(
          "mx-4 px-[22px] rounded-[20px]",
          "bg-background-primary flex-col-center",
          "w-full min-w-[343px] max-w-[550px] min-h-[473px]",
          "tablet:mx-[61px] tablet:px-[45px]",
        )}
      >
        <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">비밀번호 재설정</h1>
        <Suspense
          fallback={
            <div className="w-full flex-center">
              <span className="text-md-medium text-text-disabled">로딩 중...</span>
            </div>
          }
        >
          <NewPasswordForm />
        </Suspense>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
