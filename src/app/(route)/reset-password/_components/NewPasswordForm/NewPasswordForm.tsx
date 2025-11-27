"use client";

import { useSearchParams } from "next/navigation";
import { InputPassword, BaseButton } from "@/common";
import { toastKit, validatePassword, validatePasswordConfirm } from "@/utils";
import { usePatchResetPassword } from "@/api/hooks";
import { useForm } from "@/hooks";

const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { error } = toastKit();

  const { mutate } = usePatchResetPassword();

  const { register, errors, handleSubmit, meta } = useForm({
    initialValues: { password: "", passwordConfirm: "" },
    validationRules: {
      password: validatePassword,
      passwordConfirm: (value, formData) => validatePasswordConfirm(formData?.password ?? "", value),
    },
    onSubmit: async (values) => {
      if (!token) {
        error("유효하지 않은 접근입니다.");
        return;
      }

      mutate({
        password: values.password,
        passwordConfirmation: values.passwordConfirm,
        token,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8 gap-3 flex flex-col">
      <div className="flex-col-center gap-6">
        <InputPassword
          label="새 비밀번호"
          {...register("password")}
          placeholder="비밀번호 (영문, 숫자, 특수문자 포함)를 입력해주세요."
          error={errors.password}
        />
        <InputPassword
          label="비밀번호 확인"
          {...register("passwordConfirm")}
          placeholder="새 비밀번호를 다시 한번 입력해주세요."
          error={errors.passwordConfirm}
        />
      </div>
      <div className="text-lg-semibold flex-col-center gap-6 mt-10">
        <BaseButton type="submit" variant="solid" size="large" disabled={!meta.isValid || meta.isLoading}>
          {meta.isLoading ? "재설정 중..." : "재설정"}
        </BaseButton>
      </div>
    </form>
  );
};

export default NewPasswordForm;
