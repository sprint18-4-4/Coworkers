import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileItem from "./ProfileItem";
import { fn } from "storybook/test";

const meta: Meta<typeof ProfileItem> = {
  title: "Common/ProfileItem",
  component: ProfileItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["myProfile", "memberItem"],
      description: "프로필 아이템 타입",
    },
    src: {
      control: { type: "text" },
      description: "프로필 이미지 URL",
    },
    name: {
      control: { type: "text" },
      description: "사용자 이름",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 대체 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "클릭 핸들러",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ProfileItem>;

export const MyProfileDefault: Story = {
  args: {
    type: "myProfile",
    src: "https://i.pravatar.cc/300",
    name: "누군가",
    groupName: "경영관리팀",
  },
};

export const MyProfileNoImage: Story = {
  args: {
    type: "myProfile",
    src: null,
    name: "논프로필",
    groupName: "보안정책팀",
  },
};

export const MemberItemDefault: Story = {
  args: {
    type: "memberItem",
    src: "https://i.pravatar.cc/300",
    name: "박철수",
    email: "chulsoo@example.com",
  },
};

export const MemberItemNoImage: Story = {
  args: {
    type: "memberItem",
    src: null,
    name: "최영희",
    email: "younghee@example.com",
  },
};
