import { Meta, StoryObj } from "@storybook/nextjs";
import TodoSectionHeader from "./TodoSectionHeader";

const meta: Meta<typeof TodoSectionHeader> = {
  title: "Page/List/TodoSectionHeader",
  parameters: {
    layout: "centered",
  },
  component: TodoSectionHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TodoSectionHeaderStory: Story = {};
