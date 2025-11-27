"use client";

import { useState } from "react";
import { useForm } from "@/hooks";
import { usePatchUserPassword } from "@/api/hooks";
import { Input, BaseButton, Modal } from "@/common";
import { validatePassword, validatePasswordConfirm } from "@/utils";

const PasswordInputSection = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const { mutate: changePassword, isPending } = usePatchUserPassword({
    onSuccess: () => {
      setChangePasswordOpen(false);
      reset();
    },
  });

  const { register, errors, handleSubmit, reset, meta } = useForm({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationRules: {
      password: validatePassword,
      passwordConfirmation: (value, formData) => validatePasswordConfirm(formData?.password ?? "", value),
    },
    onSubmit: async (values) => {
      const { password, passwordConfirmation } = values;
      changePassword({
        password: password as string,
        passwordConfirmation: passwordConfirmation as string,
      });
    },
  });

  const handleModalClose = () => {
    setChangePasswordOpen(false);
    reset();
  };

  return (
    <>
      <div className="w-full text-md-semibold">
        <Input
          label="비밀번호"
          type="password"
          defaultValue={"123123"}
          disabled
          addonAfter={
            <BaseButton
              type="button"
              variant="solid"
              size="small"
              className="px-3"
              onClick={() => setChangePasswordOpen(true)}
            >
              변경하기
            </BaseButton>
          }
        />
      </div>

      <Modal isOpen={changePasswordOpen} onClose={handleModalClose} className="max-w-[420px]">
        <Modal.Body className="flex flex-col items-center gap-6 py-4">
          <h2 className="text-lg-medium text-text-primary">비밀번호 변경</h2>

          <form id="passwordChangeForm" onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <Input
              label="새 비밀번호"
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              {...register("password")}
              error={errors.password}
            />
            <Input
              label="새 비밀번호 확인"
              type="password"
              placeholder="새 비밀번호를 다시 한 번 입력해주세요."
              {...register("passwordConfirmation")}
              error={errors.passwordConfirmation}
            />
          </form>
        </Modal.Body>

        <Modal.Footer className="flex gap-3">
          <BaseButton
            variant="outlinedSecondary"
            size="large"
            className="flex-1"
            onClick={() => setChangePasswordOpen(false)}
          >
            닫기
          </BaseButton>
          <BaseButton
            type="submit"
            form="passwordChangeForm"
            variant="solid"
            size="large"
            className="flex-1"
            disabled={!meta.isValid || isPending}
          >
            변경하기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PasswordInputSection;
