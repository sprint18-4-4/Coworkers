import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileCard from "./ProfileCard";
import { fn } from "storybook/test";

const meta: Meta<typeof ProfileCard> = {
  title: "Common/ProfileCard",
  component: ProfileCard,
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
    groupName: {
      control: { type: "text" },
      description: "사용자 소속 그룹",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 대체 텍스트",
    },
    onClick: {
      action: "profile clicked",
      description: "프로필 클릭 핸들러",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    name: "김근수",
    groupName: "프론트엔드팀",
  },
};

export const NoImage: Story = {
  args: {
    src: null,
    name: "이지명",
    groupName: "백엔드팀",
  },
};
