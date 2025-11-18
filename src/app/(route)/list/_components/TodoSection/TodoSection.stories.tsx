import { Meta, StoryObj } from "@storybook/nextjs";
import TodoSection from "./TodoSection";

const meta: Meta<typeof TodoSection> = {
  title: "Page/List/TodoSection",
  parameters: {
    layout: "centered",
  },
  component: TodoSection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoSectionStory: Story = {
  render: () => <TodoSection />,
};
