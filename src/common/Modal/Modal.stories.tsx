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
    isOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => <Modal {...args}>dddd</Modal>,
};
