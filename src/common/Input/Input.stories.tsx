import { Meta, StoryObj } from "@storybook/nextjs";
import Input from "./Input";
import BaseButton from "../Button/BaseButton";
import Icon from "../Icon/Icon";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    error: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel"],
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    placeholder: "목록 명을 입력해주세요.",
  },
};

export const WithLabel: Story = {
  args: {
    label: "팀 이름",
    placeholder: "팀 이름을 입력해주세요.",
  },
};

export const Email: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
  },
};

export const emailError: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    error: "유효한 이메일이 아닙니다.",
    defaultValue: "example@email.com",
  },
};

export const Password: Story = {
  render: () => (
    <div>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        addonAfter={<Icon name="visible" className="size-6" />}
      />
    </div>
  ),
};

export const PasswordError: Story = {
  render: () => (
    <div>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        defaultValue="12312"
        error="비밀번호를 8자리 이상 입력해주세요"
        addonAfter={<Icon name="invisible" className="size-6" />}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요.",
    defaultValue: "example@email.com",
    disabled: true,
  },
};

export const DisabledButton: Story = {
  render: () => (
    <div>
      <Input
        label="비밀번호"
        type="password"
        placeholder="수정 불가"
        value="123123123"
        disabled
        addonAfter={
          <BaseButton variant="solid" size="small" className="text-text-inverse px-3">
            <span className="text-md-semibold">변경하기</span>
          </BaseButton>
        }
      />
    </div>
  ),
};
