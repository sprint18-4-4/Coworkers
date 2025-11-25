import { cn } from "@/utils";
import { SignUpForm, SocialSignUp } from "./_components";

const SignUpPage = () => {
  return (
    <div className={cn("w-full h-[calc(100vh-52px)] bg-background-secondary flex-center", "tablet:h-svh")}>
      <div
        className={cn(
          "mx-4 px-[22px] py-[40px] rounded-[20px]",
          "w-full min-w-[343px] min-h-[692px] max-w-[550px] bg-background-primary flex-col-center",
          "tablet:mx-[61px] tablet:px-[45px] tablet:py-[70px]",
        )}
      >
        <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">회원가입</h1>
        <SignUpForm />
        <SocialSignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
