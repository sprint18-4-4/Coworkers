import type { Meta, StoryObj } from "@storybook/nextjs";
import ProgressBadge from "./ProgressBadge";

const meta: Meta<typeof ProgressBadge> = {
  title: "common/ProgressBadge",
  component: ProgressBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    total: {
      control: { type: "number", min: 0, max: 5, step: 1 },
      description: "전체",
    },
    current: {
      control: { type: "number", min: 0, max: 5, step: 1 },
      description: "현재",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 5,
    current: 5,
  },
};

export const InProgress: Story = {
  args: {
    total: 5,
    current: 3,
  },
};

export const NotStarted: Story = {
  args: {
    total: 5,
    current: 0,
  },
};

export const Empty: Story = {
  args: {
    total: 0,
    current: 0,
  },
};
