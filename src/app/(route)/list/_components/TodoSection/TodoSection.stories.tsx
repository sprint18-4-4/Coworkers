import { Meta, StoryObj } from "@storybook/nextjs";
import TodoSection from "./TodoSection";

const meta: Meta<typeof TodoSection> = {
  title: "Page/List/TodoSection",
  component: TodoSection,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoSectionStory: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: "/list?taskId=1",
      },
    },
  },
};
