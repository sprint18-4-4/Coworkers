"use client";

import { InputHTMLAttributes, FocusEvent, useState } from "react";
import Input from "../Input";
import Icon from "@/common/Icon/Icon";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputPassword = ({ label, error, onBlur, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      label={label}
      type={showPassword ? "text" : "password"}
      addonAfter={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
        >
          <Icon name={showPassword ? "visible" : "invisible"} className="size-6 tablet:size-6" />
        </button>
      }
      error={error}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default InputPassword;
