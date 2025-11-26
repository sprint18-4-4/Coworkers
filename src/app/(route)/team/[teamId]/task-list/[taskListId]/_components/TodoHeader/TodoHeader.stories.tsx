import { Meta, StoryObj } from "@storybook/nextjs";
import TodoHeader from "./TodoHeader";
import { TaskList } from "@/types/Group/GroupData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const meta: Meta<typeof TodoHeader> = {
  title: "Page/List/TodoHeader",
  parameters: {
    layout: "centered",
  },
  component: TodoHeader,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TASK_LIST_MOCK_DATA: TaskList[] = [
  {
    id: 1,
    name: "짱구의 할 일 목록",
    createdAt: "2025-11-24T06:05:47+09:00",
    updatedAt: "2025-11-24T20:14:05+09:00",
    groupId: 3449,
    displayIndex: 1,
    tasks: [],
  },
  {
    id: 2,
    name: "철수의 위클리 계획",
    createdAt: "2025-11-25T09:12:10+09:00",
    updatedAt: "2025-11-25T12:30:22+09:00",
    groupId: 3449,
    displayIndex: 2,
    tasks: [],
  },
  {
    id: 3,
    name: "유리의 데일리 체크리스트",
    createdAt: "2025-11-26T08:20:14+09:00",
    updatedAt: "2025-11-26T10:11:47+09:00",
    groupId: 3449,
    displayIndex: 3,
    tasks: [],
  },
  {
    id: 4,
    name: "맹구의 프로젝트 정리",
    createdAt: "2025-11-27T07:55:30+09:00",
    updatedAt: "2025-11-27T13:50:05+09:00",
    groupId: 3449,
    displayIndex: 4,
    tasks: [],
  },
];

export const TodoHeaderStory: Story = {
  args: {
    data: {
      createdAt: "",
      id: 0,
      image: "",
      members: [],
      name: "",
      taskLists: TASK_LIST_MOCK_DATA,
      teamId: "",
      updatedAt: "",
    },
    groupId: "3800",
    isLoading: false,
  },
};
