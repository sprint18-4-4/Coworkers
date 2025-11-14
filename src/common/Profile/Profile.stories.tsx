import { Meta, StoryObj } from "@storybook/nextjs";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "Common/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
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
      control: { type: "text" },
      options: ["sm", "md", "lg"],
      description: "프로필 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "사용자 프로필",
    size: "lg",
  },
};

export const NoImage: Story = {
  args: {
    src: null,
    alt: "프로필",
    size: "lg",
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Profile src="https://i.pravatar.cc/300" size="sm" />
      <Profile src="https://i.pravatar.cc/300" size="md" />
      <Profile src="https://i.pravatar.cc/300" size="lg" />
    </div>
  ),
};

export const SizeComparisonNoImage: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Profile src={null} size="sm" />
      <Profile src={null} size="md" />
      <Profile src={null} size="lg" />
    </div>
  ),
};
