"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Icon } from "@/common";
import { Input, InputPassword, BaseButton } from "@/common";
import { useLogin } from "@/api/hooks";

const LoginForm = () => {
  // TODO(김원선): 회원가입 커스텀 훅 공통 훅으로 리팩토링 시 변경

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-[300px] w-full mt-8 mb-10 gap-3 flex flex-col">
      <div className="flex-col-center gap-6">
        <Input
          label="이메일"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이름을 입력해주세요."
        />
        <InputPassword
          label="비밀번호"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호을 입력해주세요."
        />
      </div>
      <div className="flex justify-between text-md-medium tablet:text-lg-medium">
        <button type="button" className="flex items-center gap-1">
          {/* TODO(김원선): 이메일 값 저장하는 훅 만들기 */}
          <Icon name="checkboxDefault" className="size-5 tablet:size-5" />
          <span>이메일 기억하기</span>
        </button>
        {/* TODO(김원선): 팝업 구현 후 연결 */}
        <button type="button" className="text-brand-primary" onClick={() => setIsOpen(false)}>
          비밀번호를 잊으셨나요?
        </button>
      </div>
      <div className="text-lg-semibold flex-col-center gap-6 mt-10">
        <BaseButton type="submit" variant="solid" size="large">
          {isPending ? "로그인 중..." : "로그인"}
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
