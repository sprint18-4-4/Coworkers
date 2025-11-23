"use client";

import { Icon } from "@/common";

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_LOGIN_URI;

const SocialLogin = () => {
  const kakaoLoginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const hadnleKakaoLogin = () => {
    window.location.href = kakaoLoginLink;
  };
  return (
    <div className="min-w-[300px] w-full flex flex-col gap-4">
      <div className="w-full flex items-center text-md-regular tablet:text-lg-regular">
        <hr className="w-full h-[1px] bg-border-primary" aria-hidden />
        <span className="mx-6 text-text-default">OR</span>
        <hr className="w-full h-[1px] bg-border-primary" aria-hidden />
      </div>
      <div className="text-md-medium tablet:text-lg-medium flex items-center">
        <p className="flex-grow text-text-default">간편 로그인하기</p>
        <button type="button" className="size-[42px]" onClick={hadnleKakaoLogin}>
          <Icon name="kakaotalk" className="size-[42px] tablet:size-[42px]" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
