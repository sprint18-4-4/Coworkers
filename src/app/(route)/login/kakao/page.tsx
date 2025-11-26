"use client";

import { Suspense } from "react";
import { useKakaoAuth } from "../../_components/SocialAuthSection/_hooks";

// TODO(김원선): 로딩 스피너 구현시 변경
const LoginContent = () => {
  const { isLoading } = useKakaoAuth();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-background-primary">
      {isLoading ? (
        <>
          <div className="animate-spin size-10 border-4 border-brand-primary border-t-transparent rounded-full" />
          <p className="text-text-default text-lg-medium animate-pulse">카카오 로그인 중입니다...</p>
        </>
      ) : (
        <p className="text-text-weak">잠시만 기다려주세요...</p>
      )}
    </div>
  );
};

const KakaoRedirectPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
};

export default KakaoRedirectPage;
