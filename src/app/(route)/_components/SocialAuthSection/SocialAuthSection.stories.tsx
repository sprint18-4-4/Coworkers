import type { Meta, StoryObj } from "@storybook/react";
import SocialAuthSection from "./SocialAuthSection";

const meta: Meta<typeof SocialAuthSection> = {
  title: "Page/SocialAuthSection",
  component: SocialAuthSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialAuthSection>;

export const Default: Story = {
  args: {},
};
