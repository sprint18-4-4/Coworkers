import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarTablet from "./SidebarTablet";

const meta: Meta<typeof SidebarTablet> = {
  title: "Components/Sidebar/_internal/SidebarTablet",
  component: SidebarTablet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[100svh] shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
