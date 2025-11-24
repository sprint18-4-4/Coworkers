import { cn } from "@/utils";
import LoginForm from "./_components/LoginForm/LoginForm";
import SocialLogin from "./_components/SocialLogin/SocialLogin";

const page = () => {
  return (
    <section className={cn("w-full h-[calc(100svh-52px)] bg-background-secondary flex-center", "tablet:h-svh")}>
      <div
        className={cn(
          "mx-4 px-[22px] rounded-[20px]",
          "w-full min-w-[343px] min-h-[614px] max-w-[550px] bg-background-primary flex-col-center",
          "tablet:mx-[61px] tablet:px-[45px] tablet:py-[70px]",
        )}
      >
        <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">로그인</h1>
        <LoginForm />
        <SocialLogin />
      </div>
    </section>
  );
};

export default page;
