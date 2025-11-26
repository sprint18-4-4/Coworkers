"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { usePostTeamJoin, useGetUser } from "@/api/hooks";
import { toastKit } from "@/utils";

type UseTeamJoinReturn = {
  token: string;
  isSubmitting: boolean;
  handleTokenChange: (value: string) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
};

const useTeamJoin = (): UseTeamJoinReturn => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const { error } = toastKit();

  const { data: user, isLoading: isLoadingUser } = useGetUser();

  const { mutateAsync, isPending } = usePostTeamJoin();

  const handleTokenChange = (value: string) => {
    setToken(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!token.trim()) {
      error("팀 링크를 입력해주세요.");
      return;
    }

    if (isLoadingUser) {
      error("사용자 정보를 불러오는 중입니다...");
    }

    if (!user || !user.email) {
      error("로그인이 필요합니다.");
      router.push("/login");
      return;
    }

    await mutateAsync({
      userEmail: user.email,
      token: token.trim(),
    });
  };

  return {
    token,
    isSubmitting: isPending || isLoadingUser,
    handleTokenChange,
    handleSubmit,
  };
};

export default useTeamJoin;
