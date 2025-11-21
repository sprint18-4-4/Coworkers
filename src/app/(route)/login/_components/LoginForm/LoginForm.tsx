"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/common";
import { Input, InputPassword, BaseButton } from "@/common";
import useSignUpForm from "@/app/(route)/signup/_hooks/useSignUpForm";
const LoginForm = () => {
  // TODO(김원선): 회원가입 커스텀 훅 리팩토링 시 변경
  const { formData, errors, isSubmitting, isButtonEnabled, handleChange, handleSubmit, validateField } =
    useSignUpForm();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="min-w-[300px] w-full mt-8 mb-10 gap-3 flex flex-col">
      <div className="flex-col-center gap-6">
        <Input
          label="이메일"
          type="email"
          name="email"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={handleChange}
          onBlur={() => validateField("email")}
          error={errors.name}
        />
        <InputPassword
          label="비밀번호"
          name="password"
          placeholder="비밀번호을 입력해주세요."
          value={formData.password}
          onChange={handleChange}
          onBlur={() => validateField("password")}
          error={errors.password}
        />
      </div>
      <div className="flex justify-between text-md-medium tablet:text-lg-medium">
        <div className="flex items-center gap-1">
          <Icon name="checkboxDefault" className="size-5 tablet:size-5" />
          <span>이메일 기억하기</span>
        </div>
        <button className="text-brand-primary" onClick={() => setIsOpen(false)}>
          비밀번호를 잊으셨나요?
        </button>
      </div>
      <div className="text-lg-semibold flex-col-center gap-6 mt-10">
        <BaseButton variant="solid" size="large" type="submit" disabled={!isButtonEnabled || isSubmitting}>
          로그인
        </BaseButton>
        <div className="flex text-md-medium tablet:text-lg-medium">
          <span className="mr-3 text-text-primary">아직 계정이 없으신가요?</span>
          <Link href="/signup" className="text-brand-primary">
            가입하기
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
