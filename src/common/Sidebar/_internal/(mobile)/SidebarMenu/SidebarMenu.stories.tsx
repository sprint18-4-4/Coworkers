import type { Meta, StoryObj } from "@storybook/nextjs";
import SidebarMenu from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Common/Sidebar/_internal/SidebarMobile/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[238px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menu: "메뉴",
    href: "/",
    isOpen: false,
  },
};

export const Opened: Story = {
  args: {
    menu: "메뉴",
    href: "/",
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[52px]">
        <Story />
      </div>
    ),
  ],
};
