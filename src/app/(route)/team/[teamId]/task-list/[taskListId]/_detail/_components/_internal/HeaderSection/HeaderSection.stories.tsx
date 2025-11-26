import { Meta, StoryObj } from "@storybook/nextjs";
import HeaderSection from "./HeaderSection";
import { TASK_DETAIL_MOCK_DATA } from "@/MOCK_DATA";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof HeaderSection> = {
  title: "Page/ListDetail/HeaderSection",
  component: HeaderSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="w-[600px]">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_PATH = {
  id: "27453",
  teamId: "3449",
  taskListId: "4871",
};

export const Default: Story = {
  args: {
    data: TASK_DETAIL_MOCK_DATA,
    isDone: false,
    taskPath: MOCK_PATH,
  },
};

export const Done: Story = {
  args: {
    data: TASK_DETAIL_MOCK_DATA,
    isDone: true,
    taskPath: MOCK_PATH,
  },
};
