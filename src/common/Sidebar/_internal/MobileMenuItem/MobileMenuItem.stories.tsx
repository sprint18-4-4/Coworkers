import type { Meta, StoryObj } from "@storybook/nextjs";
import MobileMenuItem from "./MobileMenuItem";

const meta: Meta<typeof MobileMenuItem> = {
  title: "Common/Sidebar/_internal/Mobile/MobileMenuItem",
  component: MobileMenuItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menu: "메뉴",
    href: "/test1",
    isOpen: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[238px]">
        <Story />
      </div>
    ),
  ],
};

export const Opened: Story = {
  args: {
    menu: "메뉴",
    href: "/test2",
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
