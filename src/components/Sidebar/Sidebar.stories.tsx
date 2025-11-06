import { Meta, StoryObj } from "@storybook/nextjs";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
