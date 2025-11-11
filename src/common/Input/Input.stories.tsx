import { Meta, StoryObj } from "@storybook/nextjs";
import Input from "./Input";
import { Button } from "@/stories/Button";

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
        // TODO(김원선): 아이콘 생성시 변경
        addonAfter={<div className="w-6 h-6 bg-gray-400 rounded-full" />}
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
        // TODO(김원선): 아이콘 생성시 변경
        addonAfter={<div className="w-6 h-6 bg-gray-400 rounded-full" />}
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
        // TODO(김원선): 공용 컴포넌트 버튼 생성시 교체
        addonAfter={<Button label="변경하기" size="small" primary />}
      />
    </div>
  ),
};
