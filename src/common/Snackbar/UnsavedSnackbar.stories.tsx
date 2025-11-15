import type { Meta, StoryObj } from "@storybook/nextjs";
import UnsavedSnackbar from "./UnsavedSnackbar";

const meta = {
  title: "Common/Snackbar",
  component: UnsavedSnackbar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "boolean",
      description: "스낵바 제목",
    },
    buttonText: {
      control: "text",
      description: "버튼 텍스트",
    },
    onSave: {
      action: "saved",
      description: "저장 버튼 클릭 핸들러",
    },
  },
} satisfies Meta<typeof UnsavedSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "저장하지 않은 변경사항이 있어요!",
    buttonText: "변경사항 저장하기",
    onSave: () => {},
  },
};
