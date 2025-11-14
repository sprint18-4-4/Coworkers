import type { Meta, StoryObj } from "@storybook/react";
import UnsavedChangesToast from "./Toast";

const meta = {
  title: "Common/Toast",
  component: UnsavedChangesToast,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    show: {
      control: "boolean",
      description: "토스트 표시 여부",
    },
    message: {
      control: "text",
      description: "토스트 메시지",
    },
    onSave: {
      action: "saved",
      description: "저장 버튼 클릭 핸들러",
    },
  },
} satisfies Meta<typeof UnsavedChangesToast>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태
export const Default: Story = {
  args: {
    show: true,
    message: "저장하지 않은 변경사항이 있어요!",
    onSave: () => {},
  },
};
