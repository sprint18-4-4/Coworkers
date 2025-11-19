import type { Meta, StoryObj } from "@storybook/react";
import DetailSection from "./DetailSection";

const meta: Meta<typeof DetailSection> = {
  title: "Page/Landing/DetailSection",
  component: DetailSection,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
