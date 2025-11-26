"use client";

import KakaoAuthAction from "@/api/actions/kakaoAuth";
import { toastKit } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useKakaoAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { error, success } = toastKit();

  const mutation = useMutation({
    mutationFn: (authCode: string) => KakaoAuthAction(authCode),
    onSuccess: (data) => {
      if (data.success) {
        router.replace("/team");
        success("로그인 성공!");
      } else {
        error("로그인에 실패했습니다. 다시 시도해주세요.");
        router.replace("/login");
      }
    },
    onError: (err) => {
      error("서버 오류가 발생했습니다.");
      router.replace("/login");
    },
  });

  useEffect(() => {
    if (code && !mutation.isPending && !mutation.isSuccess) {
      mutation.mutate(code);
    }
  }, [code]);

  return {
    isLoading: mutation.isPending,
  };
};

export default useKakaoAuth;
