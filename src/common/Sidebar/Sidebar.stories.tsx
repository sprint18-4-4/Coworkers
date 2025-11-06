import { StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta = {
  title: "Common/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};
