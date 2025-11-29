import { Meta, StoryObj } from "@storybook/nextjs";
import InputBox from "./InputBox";

const meta: Meta<typeof InputBox> = {
  title: "Common/Input/InputBox",
  component: InputBox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    label: { control: { type: "text" } },
    textareaClassName: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    size: { control: "select", options: ["sm", "md", "lg"], description: "박스 사이즈" },
    required: { control: { type: "boolean" } },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const SmallDefault: Story = {
  args: {
    placeholder: "내용을 입력해주세요.",
    size: "sm",
  },
};

export const MediumDefault: Story = {
  args: {
    placeholder: "내용을 입력해주세요.",
    size: "md",
  },
};

export const LargeDefault: Story = {
  args: {
    placeholder: "내용을 입력해주세요.",
    size: "lg",
  },
};

export const Reply: Story = {
  args: {
    placeholder: "댓글을 달아주세요.",
    textareaClassName: "border-x-0 rounded-none",
    size: "sm",
  },
};

export const Medium_label: Story = {
  args: {
    label: "할 일 메모",
    placeholder: "메모을 입력해주세요.",
    size: "md",
  },
};

export const Large_label: Story = {
  args: {
    label: "내용",
    required: true,
    placeholder: "내용를 입력해주세요.",
    size: "lg",
  },
};
