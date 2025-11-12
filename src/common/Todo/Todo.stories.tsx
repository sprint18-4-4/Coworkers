import { Meta, StoryObj } from "@storybook/nextjs";
import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  title: "Common/Todo",
  component: Todo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    id: "todo-1",
    title: "법인 설립 안내 드리기",
    completed: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Completed: Story = {
  args: {
    completed: true,
  },
};
