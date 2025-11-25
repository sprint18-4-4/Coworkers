"use client";

import { useState } from "react";
import { Input, BaseButton, Modal } from "@/common";

const PasswordInputSection = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const handleChangePassword = () => {
    // TODO(김원선): 비밀번호 재설정 API 연동
    setChangePasswordOpen(false);
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

      <Modal isOpen={changePasswordOpen} onClose={() => setChangePasswordOpen(false)} className="max-w-[420px]">
        <Modal.Body className="flex flex-col items-center gap-6 py-4">
          <h2 className="text-lg-medium text-text-primary">비밀번호 변경</h2>

          <form id="resetPw" className="w-full flex flex-col gap-4">
            <Input label="새 비밀번호" type="password" placeholder="새 비밀번호를 입력해주세요." />
            <Input label="새 비밀번호 확인" type="password" placeholder="새 비밀번호를 다시 한 번 입력해주세요." />
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
            form="resetPw"
            variant="solid"
            size="large"
            className="flex-1"
            onClick={handleChangePassword}
          >
            변경하기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PasswordInputSection;
