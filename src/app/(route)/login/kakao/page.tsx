"use client";

import { useKakaoAuth } from "../../_components/SocialAuthSection/_hooks";

const KakaoRedirectPage = () => {
  const { isLoading } = useKakaoAuth();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-background-primary">
      {/* 로딩 스피너 구현시 변경 */}
      {isLoading ? (
        <>
          <div className="animate-spin size-10 border-4 border-blue-500 border-t-transparent rounded-full" />
          <p className="text-text-default text-lg-medium animate-pulse">카카오 로그인 중입니다...</p>
        </>
      ) : (
        <p className="text-text-weak">잠시만 기다려주세요...</p>
      )}
    </div>
  );
};

export default KakaoRedirectPage;
