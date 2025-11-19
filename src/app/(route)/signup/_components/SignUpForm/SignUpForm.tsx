"use client";

import { Input, InputPassword, BaseButton } from "@/common";
import { useAuthForm } from "@/hooks/";
import { validateEmail, validateName, validatePassword, validatePasswordConfirm } from "@/utils";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
} satisfies Record<string, string>;

const SignUpForm = () => {
  const { formData, errors, isSubmitting, isButtonEnabled, handleChange, handleSubmit, validateField } = useAuthForm({
    initialValues: INITIAL_VALUES,
    validationRules: {
      name: (value) => validateName(value),
      email: (value) => validateEmail(value),
      password: (value) => validatePassword(value),
      passwordConfirm: (value, formData) => validatePasswordConfirm(formData?.password ?? "", value),
    },
    onSubmit: async (values) => {
      // TODO(김원선): 회원가입 API 연동
    },
  });

  return (
    <form onSubmit={handleSubmit} className="min-w-[300px] w-full mt-8 mb-10 gap-10 flex flex-col">
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
  );
};

export default SignUpForm;
