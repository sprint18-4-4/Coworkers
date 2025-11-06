import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarMobile from "./SidebarMobile";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

const meta = {
  title: "Components/Sidebar/_internal/SidebarMobile",
  component: SidebarMobile,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    user: USER_MOCK_DATA,
  },
};
