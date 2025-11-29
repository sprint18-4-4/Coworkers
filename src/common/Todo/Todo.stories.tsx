import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
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

const TodoWithState = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <Todo
      id={1}
      title="법인 설립 안내 드리기"
      completed={completed}
      onChangeCompleted={(_, next) => {
        setCompleted(next);
      }}
    />
  );
};

export const Default: Story = {
  render: TodoWithState,
};
