import { title } from "process";
import FloatingButton from "./FloatingButton";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof FloatingButton> = {
  title: "common/Button/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const FloatingPrimary: Story = {
  args: {},
};

export const FloatingSecondary: Story = {
  args: {},
};
