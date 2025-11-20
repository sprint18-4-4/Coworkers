import type { Meta, StoryObj } from "@storybook/react";
import KanbanSection from "./KanbanSection";

const meta: Meta<typeof KanbanSection> = {
  title: "Page/Landing/KanbanSection",
  component: KanbanSection,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
