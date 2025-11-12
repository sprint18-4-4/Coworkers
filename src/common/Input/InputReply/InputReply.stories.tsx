import { Meta, StoryObj } from "@storybook/nextjs";
import InputReply from "./InputReply";

const meta: Meta<typeof InputReply> = {
  title: "Common/InputReply",
  component: InputReply,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-full p-4">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
