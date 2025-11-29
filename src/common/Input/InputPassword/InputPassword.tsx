"use client";

import { InputHTMLAttributes, useState } from "react";
import Input from "../Input";
import Icon from "@/common/Icon/Icon";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

const InputPassword = ({ label, error, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      label={label}
      type={showPassword ? "text" : "password"}
      addonAfter={
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
          className="h-full flex items-center justify-center"
        >
          <Icon name={showPassword ? "visible" : "invisible"} className="size-6 tablet:size-6" />
        </button>
      }
      error={error}
      {...props}
    />
  );
};

export default InputPassword;
