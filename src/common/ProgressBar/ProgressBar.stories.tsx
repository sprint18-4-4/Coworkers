import ProgressBar from "./ProgressBar";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof ProgressBar> = {
  title: "common/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "진행률 (0-100)",
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 100,
  },
};
export const Half: Story = {
  args: {
    percent: 50,
  },
};
export const Empty: Story = {
  args: {
    percent: 0,
  },
};
