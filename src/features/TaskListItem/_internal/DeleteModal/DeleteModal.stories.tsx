import { Meta, StoryObj } from "@storybook/nextjs";
import DeleteModal from "./DeleteModal";

const meta: Meta<typeof DeleteModal> = {
  title: "Features/TaskListItem/DeleteModal",
  component: DeleteModal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [
    (Story) => (
      <div className="h-[50vh]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageEmptyStateStory: Story = {};
