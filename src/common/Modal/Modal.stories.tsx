import { StoryObj, Meta } from "@storybook/nextjs";
import Modal from "./Modal";

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

export const Default: Story = {
  args: {
    size: "large",
    isOpen: true,
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Title>테스트</Modal.Title>
    </Modal>
  ),
};
