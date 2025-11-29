import { Meta, StoryObj } from "@storybook/nextjs";
import EditModal from "./EditModal";

const meta: Meta<typeof EditModal> = {
  title: "Features/TaskListItem/EditModal",
  component: EditModal,
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
