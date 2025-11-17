import type { Meta, StoryObj } from "@storybook/react";
import InputPassword from "./InputPassword";

const meta: Meta<typeof InputPassword> = {
  title: "Common/InputPassword",
  component: InputPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    error: { control: "text" },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    label: "비밀번호",
    name: "password",
    placeholder: "비밀번호을 입력해주세요.",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "비밀번호는 8자 이상이어야 합니다.",
    value: "short",
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: "secure_password_123",
  },
};
