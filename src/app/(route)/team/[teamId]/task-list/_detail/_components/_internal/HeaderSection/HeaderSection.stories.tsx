import { Meta, StoryObj } from "@storybook/nextjs";
import HeaderSection from "./HeaderSection";
import { TASK_DETAIL_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof HeaderSection> = {
  title: "Page/ListDetail/HeaderSection",
  component: HeaderSection,
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
