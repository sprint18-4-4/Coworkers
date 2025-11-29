import { Meta, StoryObj } from "@storybook/nextjs";
import DateItem from "./DateItem";
import { format } from "date-fns";

const meta: Meta<typeof DateItem> = {
  title: "Common/DateItem",
  component: DateItem,
  tags: ["autodocs"],
  args: {
    selectedDate: new Date(),
    onClick: (date: Date) => {
      console.warn(format(date, "yyyy-MM-dd"));
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomDate: Story = {
  args: {
    selectedDate: new Date(2025, 10, 22),
  },
};
