import { Meta, StoryObj } from "@storybook/nextjs";
import HeaderSection from "./HeaderSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GetTaskDetailResponse } from "@/api/axios/task/_types";

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
  id: 27453,
  teamId: 3449,
  taskListId: 4871,
};

const TASK_DETAIL_MOCK_DATA: GetTaskDetailResponse = {
  id: 0,
  name: "회의록 정리하기",
  description: "팀 회의에서 나온 내용을 정리하는 작업입니다.",
  displayIndex: 0,
  commentCount: 2,

  frequency: "DAILY",
  recurringId: 0,

  date: "2025-11-21T20:27:10.529Z",
  doneAt: "2025-11-21T20:27:10.529Z",
  updatedAt: "2025-11-21T20:27:10.529Z",
  deletedAt: null,

  doneBy: {
    user: {
      id: 1,
      nickname: "짱구",
      image: "/TEST_IMG/image-1.jpg",
    },
  },

  writer: {
    id: 2,
    nickname: "철수",
    image: "/TEST_IMG/image-1.jpg",
  },

  recurring: {
    id: 0,
    name: "회의록 정리하기",
    description: "팀 회의에서 나온 내용을 정리하는 작업입니다.",
    createdAt: "2025-11-21T20:27:10.529Z",
    updatedAt: "2025-11-21T20:27:10.529Z",
    startDate: "2025-11-21T20:27:10.529Z",
    frequencyType: "DAILY",
    weekDays: [],
    monthDay: null,
    taskListId: 0,
    groupId: 0,
    writerId: 0,
  },
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
