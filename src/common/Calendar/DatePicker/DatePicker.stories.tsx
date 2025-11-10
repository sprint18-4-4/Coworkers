import { Meta, StoryObj } from "@storybook/nextjs";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Common/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="p-6 border border-gray-300">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
