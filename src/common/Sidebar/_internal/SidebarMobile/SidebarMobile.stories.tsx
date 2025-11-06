import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarMobile from "./SidebarMobile";

const meta: Meta<typeof SidebarMobile> = {
  title: "Components/Sidebar/_internal/SidebarMobile",
  component: SidebarMobile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-[100svh] shadow-lg">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    onClose: {
      control: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
};
