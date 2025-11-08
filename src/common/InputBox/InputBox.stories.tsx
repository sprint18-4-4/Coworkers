import { Meta, StoryObj } from "@storybook/nextjs";
import InputBox from "./InputBox";

const meta: Meta<typeof InputBox> = {
  title: "Common/InputBox",
  component: InputBox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    size: { control: { type: "text" } },
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

export const LargeDefault: Story = {
  args: {
    placeholder: "내용을 입력해주세요.",
    size: "lg",
  },
};

export const Small_label: Story = {
  args: {
    label: "할 일 메모",
    placeholder: "메모을 입력해주세요.",
    size: "sm",
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
