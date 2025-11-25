import type { Meta, StoryObj } from "@storybook/nextjs";
import SocialLogin from "./SocialLogin";

const meta: Meta<typeof SocialLogin> = {
  title: "Page/Login/SocialLogin",
  component: SocialLogin,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SocialLogin>;

export const Default: Story = {
  render: () => <SocialLogin />,
};
