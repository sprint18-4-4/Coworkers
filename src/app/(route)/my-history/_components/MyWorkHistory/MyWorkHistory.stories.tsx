import type { Meta, StoryObj } from "@storybook/nextjs";
import MyWorkHistory from "./MyWorkHistory";
import { TaskListItemType } from "@/types";

const meta: Meta<typeof MyWorkHistory> = {
  title: "Page/MyHistory/MyWorkHistory",
  component: MyWorkHistory,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MyWorkHistory>;

const MY_HISTORY_ITEM_MOCK_DATA: TaskListItemType[] = [
  {
    id: 1,
    name: "아침 운동하기",
    description: "30분 러닝 또는 스트레칭",
    date: "2025-11-14T09:00:00.000Z",
    doneAt: "2025-11-14T09:30:00.000Z",
    updatedAt: "2025-11-14T09:30:00.000Z",
    deletedAt: null,
    displayIndex: 0,
    commentCount: 2,
    recurringId: 101,
    frequency: "DAILY",
    writer: {
      image: "/images/user1.png",
      nickname: "지권",
      id: 11,
    },
    doneBy: {
      user: {
        image: "/images/user1.png",
        nickname: "지권",
        id: 11,
      },
    },
  },
  {
    id: 2,
    name: "주간 회고 작성",
    description: "이번 주 목표 대비 진행 상황 점검",
    date: "2025-11-15T20:00:00.000Z",
    doneAt: "2025-11-15T20:15:00.000Z",
    updatedAt: "2025-11-15T20:15:00.000Z",
    deletedAt: null,
    displayIndex: 1,
    commentCount: 0,
    recurringId: 202,
    frequency: "WEEKLY",
    writer: {
      image: "/images/user2.png",
      nickname: "홍길동",
      id: 12,
    },
    doneBy: {
      user: {
        image: "/images/user2.png",
        nickname: "홍길동",
        id: 12,
      },
    },
  },
];

export const Default: Story = {
  args: {
    title: "내가 한 일",
    items: MY_HISTORY_ITEM_MOCK_DATA.map((item) => ({ item })),
  },
};
