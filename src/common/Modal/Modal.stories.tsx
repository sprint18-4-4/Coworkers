import { StoryObj, Meta } from "@storybook/nextjs";
import Modal from "./Modal";
import { ComponentProps, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "common/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["large", "small"],
      description: "모달 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalTemplate = (args: ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>모달 열기</button>}
      <Modal {...args} isOpen={isOpen}>
        <Modal.CloseIcon onClose={() => setIsOpen(false)} />
        <Modal.Icon name="alertLg" />
        <Modal.Title>멤버 초대</Modal.Title>
        <Modal.Description>그룹에 참여할 수 있는 링크를 복사합니다.</Modal.Description>
        <Modal.Footer>
          <button className="w-full bg-blue-400">닫기</button>
          <button className="w-full bg-blue-400">생성하기</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    size: "large",
    isOpen: true,
  },
  render: (args) => <ModalTemplate {...args} />,
};
