"use client";

import { Input, InputPassword, BaseButton } from "@/common";
import useSignUpForm from "../../_hooks/useSignUpForm";

const SignUpForm = () => {
  const { formData, errors, isSubmitting, isButtonEnabled, handleChange, handleSubmit, validateField } =
    useSignUpForm();

  return (
    <div className="min-w-[300px] w-full mt-8 mb-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex-col-center gap-6">
          <Input
            label="이름"
            type="text"
            name="name"
            placeholder="이름을 입력해주세요."
            value={formData.name}
            onChange={handleChange}
            onBlur={() => validateField("name")}
            error={errors.name}
          />
          <Input
            label="이메일"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={formData.email}
            onChange={handleChange}
            onBlur={() => validateField("email")}
            error={errors.email}
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
          <InputPassword
            label="비밀번호 확인"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            value={formData.passwordConfirm}
            onChange={handleChange}
            onBlur={() => validateField("passwordConfirm")}
            error={errors.passwordConfirm}
          />
        </div>
        <div className="text-lg-semibold">
          <BaseButton variant="solid" size="large" type="submit" disabled={!isButtonEnabled || isSubmitting}>
            회원가입
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
