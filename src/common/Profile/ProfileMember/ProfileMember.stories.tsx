import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileMember from "./ProfileMember";

const meta: Meta<typeof ProfileMember> = {
  title: "Common/ProfileMember",
  component: ProfileMember,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: { type: "text" },
      description: "프로필 이미지 URL",
    },
    name: {
      control: { type: "text" },
      description: "사용자 이름",
    },
    email: {
      control: { type: "text" },
      description: "사용자 이메일",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 대체 텍스트",
    },
    onMenuClick: {
      action: "menu clicked",
      description: "메뉴 버튼 클릭 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileMember>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    name: "김원선",
    email: "wonseon@example.com",
    alt: "사용자 프로필",
  },
};

export const NoImage: Story = {
  args: {
    src: null,
    name: "이지은",
    email: "jieun@example.com",
  },
};
