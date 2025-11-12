import { Meta, StoryObj } from "@storybook/nextjs";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  title: "Common/Todo",
  component: Todo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Todo",
    completed: false,
  },
};
