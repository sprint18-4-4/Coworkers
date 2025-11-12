import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarTablet from "./SidebarTablet";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof SidebarTablet> = {
  title: "Common/Sidebar/_internal/SidebarTablet",
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
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    user: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    user: USER_MOCK_DATA,
  },
};

export const NoUser: Story = {
  args: {
    isOpen: true,
    user: null,
  },
};
