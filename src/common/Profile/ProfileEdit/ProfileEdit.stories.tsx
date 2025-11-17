import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileEdit from "./ProfileEdit";
import { fn } from "storybook/test";

const meta: Meta<typeof ProfileEdit> = {
  title: "Common/ProfileEdit",
  component: ProfileEdit,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: { type: "text" },
      description: "프로필 이미지 URL",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 대체 텍스트",
    },
    size: {
      control: { type: "select" },
      options: ["md", "lg"],
      description: "프로필 크기",
    },
    onChange: {
      action: "image selected",
      description: "이미지 선택 핸들러",
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ProfileEdit>;

// 기본 프로필 (이미지 있음)
export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "프로필",
    size: "lg",
  },
};

// 이미지 없는 프로필
export const NoImage: Story = {
  args: {
    src: null,
    alt: "프로필",
    size: "md",
  },
};
