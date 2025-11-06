import { Meta, StoryObj } from "@storybook/nextjs";
import LeftMobile from "./LeftMobile";

const meta: Meta<typeof LeftMobile> = {
  title: "Components/Sidebar/_internal/LeftMobile",
  component: LeftMobile,
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
