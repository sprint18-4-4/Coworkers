import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarDropdown from "./SidebarDropdown";

const meta: Meta<typeof SidebarDropdown> = {
  title: "Components/Sidebar/_internal/SidebarDropdown",
  component: SidebarDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] shadow-lg">
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
  },
};
