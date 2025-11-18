import type { Meta, StoryObj } from "@storybook/nextjs";
import WorkHistorySection from "./WorkHistorySection";

const meta: Meta<typeof WorkHistorySection> = {
  title: "Page/MyHistory/WorkHistorySection",
  component: WorkHistorySection,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof WorkHistorySection>;

export const Default: Story = {};
