import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarLink from "./SidebarLink";

const meta: Meta<typeof SidebarLink> = {
  title: "Components/Sidebar/_internal/SidebarLink",
  component: SidebarLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    title: "자유게시판",
    isOpen: true,
  },
};
