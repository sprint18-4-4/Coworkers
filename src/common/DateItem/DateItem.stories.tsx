import { Meta, StoryObj } from "@storybook/nextjs";
import DateItem from "./DateItem";

const meta: Meta<typeof DateItem> = {
  title: "Common/DateItem",
  component: DateItem,
  tags: ["autodocs"],
  args: {
    day: "월",
    isToday: false,
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Today: Story = {
  args: {
    isToday: true,
  },
};
