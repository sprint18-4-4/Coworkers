import { Meta, StoryObj } from "@storybook/nextjs";
import ErrorState from "./ErrorState";

const meta: Meta<typeof ErrorState> = {
  title: "State/ErrorState",
  component: ErrorState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
