import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import LeftMobile from "./LeftMobile";

const meta: Meta<typeof LeftMobile> = {
  title: "Components/Sidebar/_internal/LeftMobile",
  component: LeftMobile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[100svh] w-screen max-w-[320px] shadow-lg relative">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "사이드바 열림/닫힘",
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveTemplate: Story = {
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-blue-500 text-white rounded absolute top-4 right-4 z-10"
        >
          모바일 전용 사이드바 열기
        </button>
        <LeftMobile
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose?.();
          }}
        />
      </>
    );
  },
};

export const Default: Story = {
  ...InteractiveTemplate,
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
