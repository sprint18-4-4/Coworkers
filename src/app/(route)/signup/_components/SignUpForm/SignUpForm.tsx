"use client";

import Link from "next/link";
import { useForm } from "@/hooks";
import { usePostSignup } from "@/api/hooks";
import { Input, InputPassword, BaseButton } from "@/common";
import { validateEmail, validateName, validatePassword, validatePasswordConfirm } from "@/utils";

const INITIAL_VALUES = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirmation: "",
};

const SignUpForm = () => {
  const { mutate: postSignup } = usePostSignup();
  const { register, errors, handleSubmit, meta } = useForm({
    initialValues: INITIAL_VALUES,
    validationRules: {
      email: validateEmail,
      nickname: validateName,
      password: validatePassword,
      passwordConfirmation: (value, formData) => validatePasswordConfirm(formData?.password ?? "", value),
    },
    validationTriggers: {
      password: ["passwordConfirmation"],
    },
    onSubmit: async (values) => {
      const { email, nickname, password, passwordConfirmation } = values;
      postSignup({
        email,
        nickname,
        password,
        passwordConfirmation,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8 mb-10 flex flex-col">
      <div className="flex-col-center gap-6">
        <Input
          label="이름"
          type="text"
          placeholder="이름을 입력해주세요."
          {...register("nickname")}
          error={errors.nickname}
          minLength={2}
          maxLength={20}
        />
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
          error={errors.email}
          minLength={4}
          maxLength={30}
        />
        <InputPassword
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          {...register("password")}
          error={errors.password}
          minLength={8}
          maxLength={20}
        />
        <InputPassword
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation}
          minLength={8}
          maxLength={20}
        />
      </div>
      <Link href="/login" className="w-fit ml-auto mt-3 text-brand-primary text-md-medium tablet:text-lg-medium">
        이미 계정이 있으신가요?
      </Link>
      <div className="text-lg-semibold mt-10">
        <BaseButton variant="solid" size="large" type="submit" disabled={!meta.isValid || meta.isLoading}>
          회원가입
        </BaseButton>
      </div>
    </form>
  );
};

export default SignUpForm;
