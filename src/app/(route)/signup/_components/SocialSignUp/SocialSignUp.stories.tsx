import type { Meta, StoryObj } from "@storybook/react";
import SocialSignUp from "./SocialSignUp";

const meta: Meta<typeof SocialSignUp> = {
  title: "Page/SignUp/SocialSignUp",
  component: SocialSignUp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialSignUp>;

export const Default: Story = {
  args: {},
};
