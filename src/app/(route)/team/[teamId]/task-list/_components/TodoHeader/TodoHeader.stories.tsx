import { Meta, StoryObj } from "@storybook/nextjs";
import TodoHeader from "./TodoHeader";

const meta: Meta<typeof TodoHeader> = {
  title: "Page/List/TodoHeader",
  parameters: {
    layout: "centered",
  },
  component: TodoHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoHeaderStory: Story = {
  render: () => <TodoHeader />,
};
