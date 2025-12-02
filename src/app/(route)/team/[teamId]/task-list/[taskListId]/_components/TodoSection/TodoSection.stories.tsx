import { Meta, StoryObj } from "@storybook/nextjs";
import TodoSection from "./TodoSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskGroupItem } from "@/api/axios/task/_types";

const queryClient = new QueryClient();

const meta: Meta<typeof TodoSection> = {
  title: "Page/List/TodoSection",
  component: TodoSection,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    teamId: { control: "text" },
    taskListId: { control: "text" },
    selectedDate: { control: "date" },
    onClickDateItem: { action: "dateSelected" },
    sectionName: { control: "text" },
    taskStatus: { control: "object" },
  },
  args: {
    teamId: 1,
    taskListId: 1,
    selectedDate: new Date(),
    sectionName: "할 일 목록",
    onClickDateItem: () => {},
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TodoSection>;

const TASK_GROUP_MOCK_DATA: TaskGroupItem[] = [
  {
    doneBy: {
      user: {
        image: "/TEST_IMG/image-1.jpg",
        nickname: "string",
        id: 1,
      },
    },
    writer: {
      image: "/TEST_IMG/image-1.jpg",
      nickname: "짱구",
      id: 1,
    },
    displayIndex: 0,
    commentCount: 0,
    deletedAt: "2025-11-21T22:50:39.165Z",
    recurringId: 0,
    frequency: "DAILY",
    updatedAt: "2025-11-21T22:50:39.165Z",
    doneAt: "2025-11-21T22:50:39.165Z",
    date: "2025-11-21T22:50:39.165Z",
    description: "법인 설립 비용 안내 드리기",
    name: "법인 설립 비용 안내 드리기",
    id: 1,
  },
  {
    doneBy: {
      user: {
        image: "/TEST_IMG/image-1.jpg",
        nickname: "string",
        id: 2,
      },
    },
    writer: {
      image: "/TEST_IMG/image-1.jpg",
      nickname: "맹구",
      id: 2,
    },
    displayIndex: 1,
    commentCount: 1,
    deletedAt: "2025-11-21T22:50:39.165Z",
    recurringId: 0,
    frequency: "WEEKLY",
    updatedAt: "2025-11-21T22:50:39.165Z",
    doneAt: "2025-11-21T22:50:39.165Z",
    date: "2025-11-22T22:50:39.165Z",
    description: "법인 설립 비용 혹은 등기 비용 안내 드리기",
    name: "법인 설립 비용 혹은 등기 비용 안내 드리기",
    id: 2,
  },
  {
    doneBy: {
      user: {
        image: "/TEST_IMG/image-1.jpg",
        nickname: "string",
        id: 3,
      },
    },
    writer: {
      image: "/TEST_IMG/image-1.jpg",
      nickname: "철수",
      id: 3,
    },
    displayIndex: 2,
    commentCount: 2,
    deletedAt: "2025-11-21T22:50:39.165Z",
    recurringId: 0,
    frequency: "MONTHLY",
    updatedAt: "2025-11-21T22:50:39.165Z",
    doneAt: "2025-11-21T22:50:39.165Z",
    date: "2025-11-23T22:50:39.165Z",
    description: "법인 설립 비용 혹은 등기 비용 혹은 기타 비용 안내 드리기",
    name: "법인 설립 비용 혹은 등기 비용 혹은 기타 비용 안내 드리기법인 설립 비용 혹은 등기 비용 혹은 기타 비용 안내 드리기법인 설립 비용 혹은 등기 비용 혹은 기타 비용 안내 드리기법인 설립 비용 혹은 등기 비용 혹은 기타 비용 안내 드리기",
    id: 3,
  },
  {
    doneBy: {
      user: {
        image: "/TEST_IMG/image-1.jpg",
        nickname: "string",
        id: 4,
      },
    },
    writer: {
      image: "/TEST_IMG/image-1.jpg",
      nickname: "유리",
      id: 4,
    },
    displayIndex: 3,
    commentCount: 2,
    deletedAt: "2025-11-21T22:50:39.165Z",
    recurringId: 0,
    frequency: "ONCE",
    updatedAt: "2025-11-21T22:50:39.165Z",
    doneAt: "2025-11-21T22:50:39.165Z",
    date: "2025-11-24T22:50:39.165Z",
    description: "법인 설립 비용 혹은 등기 비용 혹은 기타 비용 혹은 기타 비용 안내 드리기",
    name: "법인 설립 비용 혹은 등기 비용 혹은 기타 비용 혹은 기타 비용 안내 드리기",
    id: 4,
  },
];

export const Default: Story = {
  args: {
    data: TASK_GROUP_MOCK_DATA,
    taskStatus: {
      isPending: false,
      isError: false,
    },
  },
};
