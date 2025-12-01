"use client";

import { useState } from "react";
import { toastKit } from "@/utils";
import { useForm } from "@/hooks";
import { validateEmail } from "@/utils";
import { usePostResetPassword } from "@/api/hooks";
import { Modal, Input, BaseButton } from "@/common";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPassword = ({ isOpen, onClose }: ResetPasswordModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { success } = toastKit();

  const { mutate, isPending } = usePostResetPassword({
    onSuccess: () => {
      reset();
      setErrorMessage("");
      onClose();
      success("이메일이 전송되었습니다.");
    },
    onError: (message) => {
      setErrorMessage(message);
    },
  });

  const { register, errors, handleSubmit, meta, reset } = useForm({
    initialValues: { email: "" },
    validationRules: {
      email: (value) => validateEmail(value),
    },
    onSubmit: async (values) => {
      setErrorMessage("");
      const redirectUrl = `${window.location.origin}`;

      mutate({
        email: values.email,
        redirectUrl,
      });
    },
  });

  const handleClose = () => {
    reset();
    setErrorMessage("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Body className="flex-col-center gap-4">
        <div className="flex-col-center gap-2">
          <h2 className="text-lg-medium text-text-primary">비밀번호 재설정</h2>
          <p className="text-md-medium text-text-disabled">비밀번호 재설정 링크를 보내드립니다.</p>
        </div>
        <form id="reset-password-form" onSubmit={handleSubmit} className="w-full">
          <Input
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email")}
            error={errors.email || errorMessage}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="flex gap-3">
        <BaseButton type="button" variant="outlinedPrimary" size="large" onClick={handleClose} className="flex-1">
          닫기
        </BaseButton>
        <BaseButton
          type="submit"
          form="reset-password-form"
          variant="solid"
          size="large"
          disabled={!meta.isValid || isPending}
          className="flex-1"
        >
          {isPending ? "전송 중..." : "링크 보내기"}
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPassword;
