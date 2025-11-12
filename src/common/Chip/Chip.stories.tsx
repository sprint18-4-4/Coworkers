import { Meta, StoryObj } from "@storybook/nextjs";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Common/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "법인 등기",
    count: 3,
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    title: "법인 등기",
    count: 3,
    isActive: true,
  },
};

export const CountOver99WithDefault: Story = {
  args: {
    title: "법인 등기",
    count: 100,
    isActive: false,
  },
};

export const CountOver99WithActive: Story = {
  args: {
    title: "법인 등기",
    count: 100,
    isActive: true,
  },
};
