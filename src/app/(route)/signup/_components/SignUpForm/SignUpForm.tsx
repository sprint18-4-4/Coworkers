"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Input, InputPassword, BaseButton } from "@/common";

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
          />
          <Input
            label="이메일"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={formData.email}
            onChange={handleChange}
          />
          <InputPassword
            label="비밀번호"
            name="password"
            placeholder="비밀번호을 입력해주세요."
            value={formData.password}
            onChange={handleChange}
          />
          <InputPassword
            label="비밀번호 확인"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <div className="text-lg-semibold">
          <BaseButton variant="solid" size="large" type="submit">
            회원가입
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
