import { Meta, StoryObj } from "@storybook/nextjs";
import Time from "./Time";

const meta: Meta<typeof Time> = {
  title: "Common/Time",
  component: Time,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="border border-gray-200 rounded-[12px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
