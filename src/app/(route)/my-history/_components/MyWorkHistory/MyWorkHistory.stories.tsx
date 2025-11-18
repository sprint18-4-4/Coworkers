import type { Meta, StoryObj } from "@storybook/nextjs";
import MyWorkHistory from "./MyWorkHistory";
import { MY_HISTORY_ITEM_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof MyWorkHistory> = {
  title: "Page/MyHistory/MyWorkHistory",
  component: MyWorkHistory,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof MyWorkHistory>;

export const Default: Story = {
  args: {
    title: "내가 한 일",
    items: MY_HISTORY_ITEM_MOCK_DATA.map((item) => ({ item })),
  },
};
