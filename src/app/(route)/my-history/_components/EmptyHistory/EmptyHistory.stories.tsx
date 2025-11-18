import type { Meta, StoryObj } from "@storybook/nextjs";
import EmptyHistory from "./EmptyHistory";

const meta: Meta<typeof EmptyHistory> = {
  title: "Page/MyHistory/EmptyHistory",
  component: EmptyHistory,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof EmptyHistory>;

export const Default: Story = {};
