"use client";

import { FormEvent, useRef, useState } from "react";
import { usePostTeamJoin, useGetUser } from "@/api/hooks";

type UseTeamJoinReturn = {
  token: string;
  isLoading: boolean;
  isValid: boolean;
  handleTokenChange: (value: string) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
};

const useTeamJoin = (): UseTeamJoinReturn => {
  const [token, setToken] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);

  const { data: user } = useGetUser();

  const { mutate, isPending } = usePostTeamJoin();

  const isLoading = isSubmitting || isPending;
  const isValid = token.trim().length >= 8;

  const handleTokenChange = (value: string) => {
    setToken(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || isPending || !isValid || !user) return;

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    mutate(
      {
        userEmail: user.email,
        token: token.trim(),
      },
      {
        onSuccess: () => {
          isSubmittingRef.current = true;
          setIsSubmitting(true);
        },
        onError: () => {
          isSubmittingRef.current = false;
          setIsSubmitting(false);
        },
      },
    );
  };

  return {
    token,
    isLoading,
    isValid,
    handleTokenChange,
    handleSubmit,
  };
};

export default useTeamJoin;
