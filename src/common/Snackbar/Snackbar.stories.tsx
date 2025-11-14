import type { Meta, StoryObj } from "@storybook/nextjs";
import Snackbar from "./Snackbar";

const meta = {
  title: "Common/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    show: {
      control: "boolean",
      description: "스낵바 표시 여부",
    },
    message: {
      control: "text",
      description: "스낵바 메시지",
    },
    onSave: {
      action: "saved",
      description: "저장 버튼 클릭 핸들러",
    },
  },
} satisfies Meta<typeof Snackbar>;

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
