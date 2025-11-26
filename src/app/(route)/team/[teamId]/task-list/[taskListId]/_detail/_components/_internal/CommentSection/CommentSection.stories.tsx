import { Meta, StoryObj } from "@storybook/nextjs";
import CommentSection from "./CommentSection";
import { TASK_DETAIL_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof CommentSection> = {
  title: "Page/ListDetail/CommentSection",
  component: CommentSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: TASK_DETAIL_MOCK_DATA,
  },
};
