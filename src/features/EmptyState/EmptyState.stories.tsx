import type { Meta, StoryObj } from "@storybook/nextjs";
import EmptyState from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "State/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};
