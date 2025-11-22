import { Meta, StoryObj } from "@storybook/nextjs";
import TodoSection from "./TodoSection";
import { TASK_GROUP_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof TodoSection> = {
  title: "Page/List/TodoSection",
  component: TodoSection,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    teamId: { control: "text" },
    selectedDate: { control: "date" },
    onClickDateItem: { action: "dateSelected" },
  },
  args: {
    teamId: "1",
    selectedDate: new Date(),
    onClickDateItem: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TodoSection>;

export const Default: Story = {
  args: {
    data: TASK_GROUP_MOCK_DATA,
  },
};
