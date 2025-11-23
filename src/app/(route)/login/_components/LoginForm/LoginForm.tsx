"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Icon } from "@/common";
import { Input, InputPassword, BaseButton } from "@/common";
import { usePostLogin } from "@/api/hooks";
import { useAuthForm } from "@/hooks";
import { ValidationRules } from "@/types";
import { validateEmail, validatePasswordForLogin } from "@/utils";
import { useEmailStore } from "../../_hooks";
import ResetPassword from "../ResetPassword/ResetPassword";

const loginRules: ValidationRules = {
  email: (value) => validateEmail(value),
  password: (value) => {
    const result = validatePasswordForLogin(value);
    if (!result.isValid) return result;

    if (value.length < 8) {
      return { isValid: false, ErrorMessage: "" };
    }
    return { isValid: true };
  },
};

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isInitialized = useRef(false);

  const { mutate: postLogin } = usePostLogin();

  const { email, isRemembered, setEmail, toggleRemember } = useEmailStore();

  const { register, errors, handleSubmit, meta, setValue } = useAuthForm({
    initialValues: { email: "", password: "" },
    validationRules: loginRules,
    onSubmit: async (values) => {
      if (isRemembered) {
        setEmail(values.email);
      }
      postLogin(
        { email: values.email, password: values.password },
        {
          onSuccess: () => {
            toast.success("로그인되었습니다.");
          },
          onError: () => {
            toast.error("이메일 혹은 비밀번호를 확인해주세요.");
          },
        },
      );
    },
  });

  useEffect(() => {
    if (isInitialized.current || !isRemembered || !email) return;
    setValue("email", email);

    isInitialized.current = true;
  }, [email, isRemembered, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit} className="min-w-[300px] w-full mt-8 mb-10 gap-3 flex flex-col">
        <div className="flex-col-center gap-6">
          <Input
            label="이메일"
            type="email"
            {...register("email")}
            placeholder="이메일을 입력해주세요."
            error={errors.email}
          />
          <InputPassword
            label="비밀번호"
            {...register("password")}
            placeholder="비밀번호을 입력해주세요."
            error={errors.password}
          />
        </div>
        <div className="flex justify-between text-md-medium tablet:text-lg-medium">
          <button type="button" className="flex items-center gap-1" onClick={toggleRemember}>
            <Icon name={isRemembered ? "checkboxActive" : "checkboxDefault"} className="size-5 tablet:size-5" />
            <span>이메일 기억하기</span>
          </button>
          <button type="button" className="text-brand-primary" onClick={() => setIsOpen(true)}>
            비밀번호를 잊으셨나요?
          </button>
        </div>
        <div className="text-lg-semibold flex-col-center gap-6 mt-10">
          <BaseButton type="submit" variant="solid" size="large" disabled={!meta.isValid || meta.isLoading}>
            {meta.isLoading ? "로그인 중..." : "로그인"}
          </BaseButton>
          <div className="flex text-md-medium tablet:text-lg-medium">
            <span className="mr-3 text-text-primary">아직 계정이 없으신가요?</span>
            <Link href="/signup" className="text-brand-primary">
              가입하기
            </Link>
          </div>
        </div>
      </form>
      <ResetPassword isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LoginForm;
