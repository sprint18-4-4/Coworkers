import { Icon } from "@/common";

const SocialSignUp = () => {
  return (
    <div className="min-w-[300px] w-full flex flex-col gap-4">
      <div className="w-full flex items-center text-md-regular tablet:text-lg-regular">
        <hr className="w-full h-[1px] bg-border-primary" aria-hidden />
        <span className="mx-6 text-text-default">OR</span>
        <hr className="w-full h-[1px] bg-border-primary" aria-hidden />
      </div>
      <div className="text-md-medium tablet:text-lg-medium flex items-center">
        <p className="flex-grow text-text-default">간편 회원가입하기</p>
        <button type="button" className="size-[42px]">
          <Icon name="kakaotalk" className="size-[42px] tablet:size-[42px]" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignUp;
