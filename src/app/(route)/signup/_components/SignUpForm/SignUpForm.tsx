"use client";

import Link from "next/link";
import { Input, InputPassword, BaseButton } from "@/common";
import { useForm } from "@/hooks";
import { validateEmail, validateName, validatePassword, validatePasswordConfirm } from "@/utils";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUpForm = () => {
  const { register, errors, handleSubmit, meta } = useForm({
    initialValues: INITIAL_VALUES,
    validationRules: {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
      passwordConfirm: (value, formData) => validatePasswordConfirm(formData?.password ?? "", value),
    },
    onSubmit: async (values) => {
      // TODO(김원선): 회원가입 API 연동
    },
  });

  return (
    <form onSubmit={handleSubmit} className="min-w-[300px] w-full mt-8 mb-10 flex flex-col">
      <div className="flex-col-center gap-6">
        <Input label="이름" type="text" placeholder="이름을 입력해주세요." {...register("name")} error={errors.name} />
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
          error={errors.email}
        />
        <InputPassword
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          {...register("password")}
          error={errors.password}
        />
        <InputPassword
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          {...register("passwordConfirm")}
          error={errors.passwordConfirm}
        />
      </div>
      <Link href="/login" className="mt-3 text-brand-primary text-md-medium tablet:text-lg-medium text-right">
        이미 계정이 있으신가요?
      </Link>
      <div className="text-lg-semibold mt-10">
        <BaseButton variant="solid" size="large" type="submit" disabled={meta.isLoading || !meta.isValid}>
          회원가입
        </BaseButton>
      </div>
    </form>
  );
};

export default SignUpForm;
