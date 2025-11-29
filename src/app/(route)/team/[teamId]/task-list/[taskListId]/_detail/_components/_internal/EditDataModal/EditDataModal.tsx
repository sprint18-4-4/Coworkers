import { BaseButton, Input, Modal } from "@/common";
import { FormEvent } from "react";

interface EditDataModalProps {
  isEditModal: boolean;
  setIsEditModal: (isOpen: boolean) => void;
  form: {
    name: string;
    description: string;
  };
  setForm: (form: { name: string; description: string }) => void;
  handleEdit: (e: FormEvent<HTMLFormElement>) => void;
}

const EditDataModal = ({ isEditModal, setIsEditModal, form, setForm, handleEdit }: EditDataModalProps) => {
  return (
    <Modal isOpen={isEditModal} onClose={() => setIsEditModal(false)}>
      <h3 className="text-lg-bold mb-4">할 일 수정</h3>
      <form onSubmit={handleEdit} className="w-full">
        <div className="w-full flex-col-center gap-2">
          <Input
            autoFocus
            maxLength={30}
            placeholder="제목을 입력하세요"
            defaultValue={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            maxLength={30}
            placeholder="설명을 입력하세요"
            defaultValue={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="w-full flex gap-2 mt-6">
          <BaseButton variant="outlinedSecondary" size="large" onClick={() => setIsEditModal(false)}>
            취소
          </BaseButton>
          <BaseButton
            type="submit"
            variant="solid"
            size="large"
            disabled={!form.name.trim() || !form.description.trim()}
          >
            저장
          </BaseButton>
        </div>
      </form>
    </Modal>
  );
};

export default EditDataModal;
