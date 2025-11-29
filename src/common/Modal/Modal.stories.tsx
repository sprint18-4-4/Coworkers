import { StoryObj, Meta } from "@storybook/nextjs";
import Modal from "./Modal";
import BaseButton from "../Button/BaseButton";
import { useState } from "react";
import Input from "../Input/Input";

const meta: Meta<typeof Modal> = {
  title: "common/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.CloseIcon onClose={() => setIsOpen(false)} />
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const InviteMember: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.CloseIcon onClose={() => setIsOpen(false)} />
          <Modal.Body className="flex-col-center">
            <h2 className="text-text-primary text-lg-medium mb-2">멤버 초대</h2>
            <p className="text-md-medium">그룹에 참여할 수 있는 링크를 복사합니다.</p>
          </Modal.Body>
          <Modal.Footer>
            <BaseButton variant="solid" size="large" onClick={() => {}}>
              링크 복사하기
            </BaseButton>
          </Modal.Footer>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const TaskList: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Body className="flex-col-center gap-4">
            <h2 className="text-text-primary text-lg-medium mb-2">할 일 목록</h2>
            <Input className="" placeholder="목록 명을 입력해주세요." />
          </Modal.Body>
          <Modal.Footer>
            <BaseButton variant="solid" size="large" onClick={() => {}}>
              만들기
            </BaseButton>
          </Modal.Footer>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const PasswordReset: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Body className="flex-col-center gap-4">
            <h2 className="text-text-primary text-lg-medium">비밀번호 재설정</h2>
            <p className="text-md-medium text-state-400">비밀번호 재설정 링크를 보내드립니다.</p>
            <Input className="" placeholder="이메일을 입력하세요." />
          </Modal.Body>
          <Modal.Footer>
            <BaseButton variant="outlinedPrimary" size="large" onClick={() => {}}>
              닫기
            </BaseButton>
            <BaseButton variant="solid" size="large" onClick={() => {}}>
              링크 보내기
            </BaseButton>
          </Modal.Footer>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const PasswordChange: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.CloseIcon onClose={() => setIsOpen(false)} />
          <Modal.Body className="flex-col-center gap-4">
            <h2 className="text-text-primary text-lg-medium">비밀번호 변경하기</h2>
            <Input label="새 비밀번호" placeholder="새 비밀번호를 입력해주세요." />
            <Input label="새 비밀번호 확인" placeholder="새 비밀번호를 다시 한 번 입력해주세요." />
          </Modal.Body>
          <Modal.Footer className="py-4">
            <BaseButton variant="outlinedPrimary" size="large" onClick={() => {}}>
              닫기
            </BaseButton>
            <BaseButton variant="solid" size="large" onClick={() => {}}>
              변경하기
            </BaseButton>
          </Modal.Footer>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};
