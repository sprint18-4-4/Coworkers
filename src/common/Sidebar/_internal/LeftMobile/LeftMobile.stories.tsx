import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import LeftMobile from "./LeftMobile";

const meta: Meta<typeof LeftMobile> = {
  title: "Common/Sidebar/_internal/LeftMobile",
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
    handleOpenDropdown: {
      action: "handleOpenDropdown",
      description: "사이드바 토글 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveTemplate: Story = {
  args: {
    isOpen: false,
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-blue-500 text-white rounded absolute top-4 right-4 z-10"
        >
          모바일 전용 사이드바 열기 <br /> (화면을 모바일 사이즈로 변경해야 합니다.)
        </button>
        <LeftMobile {...args} isOpen={isOpen} handleOpenDropdown={() => setIsOpen(false)} />
      </>
    );
  },
};

export const Default: Story = {
  ...InteractiveTemplate,
  args: {
    isOpen: true,
    handleOpenDropdown: () => {},
  },
};
