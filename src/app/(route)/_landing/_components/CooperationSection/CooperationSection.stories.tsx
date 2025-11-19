import type { Meta, StoryObj } from "@storybook/react";
import CooperationSection from "./CooperationSection";

const meta: Meta<typeof CooperationSection> = {
  title: "Page/Landing/CooperationSection",
  component: CooperationSection,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
