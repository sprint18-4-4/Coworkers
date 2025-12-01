"use client";

import { Suspense } from "react";
import { useKakaoAuth } from "../../_components/SocialAuthSection/_hooks";
import { LoadingSpinner } from "@/features";
import { OverlayLoading } from "../../_components";

const LoginContent = () => {
  const { isLoading } = useKakaoAuth();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-background-primary">
      {isLoading ? (
        <>
          <OverlayLoading />
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
    <Suspense fallback={<LoadingSpinner className="h-full flex-center" size="lg" />}>
      <LoginContent />
    </Suspense>
  );
};

export default KakaoRedirectPage;
