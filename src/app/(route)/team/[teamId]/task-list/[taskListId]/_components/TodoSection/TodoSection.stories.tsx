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
    taskListId: { control: "text" },
    selectedDate: { control: "date" },
    onClickDateItem: { action: "dateSelected" },
    sectionName: { control: "text" },
  },
  args: {
    teamId: "1",
    taskListId: "1",
    selectedDate: new Date(),
    sectionName: "할 일 목록",
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
