import { cn } from "@/utils";
import { Input, Icon, BaseButton } from "@/common";

const page = () => {
  return (
    <div className={cn("w-full h-[calc(100vh-52px)] bg-background-secondary flex-center", "tablet:h-svh")}>
      <main
        className={cn(
          "mx-4 px-[22px] rounded-[20px]",
          "w-full min-w-[343px] min-h-[692px] max-h-[840px] max-w-[550px] bg-background-primary flex-col-center",
          "tablet:h-lvh tablet:mx-[61px] tablet:px-[45px]",
        )}
      >
        <h1 className="text-xl-bold text-text-primary tablet:text-2xl-bold">회원가입</h1>
        <section className="min-w-[300px] w-full mt-8 mb-10">
          <form action="submit" className="flex flex-col gap-10">
            <div className="flex-col-center gap-6">
              <Input label="이름" type="text" placeholder="이름을 입력해주세요." />
              <Input label="이메일" type="email" placeholder="이메일을 입력해주세요." />
              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호을 입력해주세요."
                addonAfter={<Icon name="invisible" className="size-6" />}
              />
              <Input
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요."
                addonAfter={<Icon name="invisible" className="size-6" />}
              />
            </div>
            <div className="text-lg-semibold">
              <BaseButton variant="solid" size="large">
                회원가입
              </BaseButton>
            </div>
          </form>
        </section>
        <div className="min-w-[300px] w-full flex flex-col gap-4">
          <div className="w-full flex items-center text-md-regular tablet:text-lg-regular">
            <div className="w-full h-[1px] bg-border-primary" />
            <span className="mx-6 text-text-default">OR</span>
            <div className="w-full h-[1px] bg-border-primary" />
          </div>
          <div className="text-md-medium tablet:text-lg-medium flex items-center">
            <p className="flex-grow text-text-default">간편 회원가입하기</p>
            <button type="button" className="size-[42px] rounded-full bg-yellow-200"></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
