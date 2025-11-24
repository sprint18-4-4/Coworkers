import { Modal, Input, BaseButton } from "@/common";
import { useAuthForm } from "@/hooks";
import { validateEmail } from "@/utils";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPassword = ({ isOpen, onClose }: ResetPasswordModalProps) => {
  const isPending = false;

  const { register, errors, handleSubmit, meta } = useAuthForm({
    initialValues: { email: "" },
    validationRules: {
      email: (value) => validateEmail(value),
    },
    onSubmit: async (values) => {
      // TODO(김원선): 비밀번호 재설정 API 연동
      alert(`${values.email}로 재설정 링크를 보냈습니다.`);
      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full absolute bottom-0 tablet:relative tablet:max-w-[384px]">
      <Modal.Body className="flex-col-center gap-4">
        <div className="flex-col-center gap-2">
          <h2 className="text-lg-medium text-text-primary">비밀번호 재설정</h2>
          <p className="text-md-medium text-text-disabled">비밀번호 재설정 링크를 보내드립니다.</p>
        </div>
        <form id="reset-password-form" onSubmit={handleSubmit} className="w-full">
          <Input type="email" placeholder="이메일을 입력해주세요." {...register("email")} error={errors.email} />
        </form>
      </Modal.Body>
      <Modal.Footer className="flex gap-3">
        <BaseButton type="button" variant="outlinedPrimary" size="large" onClick={onClose} className="flex-1">
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
