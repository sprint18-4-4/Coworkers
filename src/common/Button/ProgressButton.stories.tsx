import type { Meta, StoryObj } from "@storybook/react";
import ProgressButton from "./ProgressButton";

const meta: Meta<typeof ProgressButton> = {
  title: "common/Button/ProgressButton",
  component: ProgressButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ProgressButton>;

export const ProgressPrimary: Story = {
  args: {},
};
