import type { Meta, StoryObj } from "@storybook/nextjs";
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
  args: {
    text: "할 일",
    className: "w-[270px] h-[38px]",
  },
};
