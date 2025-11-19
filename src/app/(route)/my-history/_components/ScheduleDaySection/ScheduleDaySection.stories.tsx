import type { Meta, StoryObj } from "@storybook/nextjs";
import ScheduleDaySection from "./ScheduleDaySection";
import { MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof ScheduleDaySection> = {
  title: "Page/MyHistory/ScheduleDaySection",
  component: ScheduleDaySection,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof ScheduleDaySection>;

export const Default: Story = {
  args: {
    items: MY_HISTORY_ITEM_MOCK_DATA,
  },
};
