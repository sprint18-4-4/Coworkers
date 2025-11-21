import { DateNumber, Day, DetailDataItem, TaskListItemType } from "./types";

export const USER_MOCK_DATA = {
  teamId: "1",
  image: "/TEST_IMG/image-1.jpg",
  nickname: "안해나",
  updatedAt: "2025-11-07T03:00:00Z",
  createdAt: "2025-05-01T10:00:00Z",
  email: "asdf@example.com",
  id: 1,
  memberships: [
    {
      group: {
        teamId: "1",
        updatedAt: "2025-11-01T12:00:00Z",
        createdAt: "2025-05-01T09:30:00Z",
        image: "/TEST_IMG/image-1.jpg",
        name: "CodeIt",
        id: 101,
      },
      role: "admin",
      userImage: "/TEST_IMG/image-1.jpg",
      userEmail: "asdf@example.com",
      userName: "안해나",
      groupId: 101,
      userId: 1,
    },
    {
      group: {
        teamId: "1",
        updatedAt: "2025-10-28T08:00:00Z",
        createdAt: "2025-04-15T09:00:00Z",
        image: "/TEST_IMG/image-1.jpg",
        name: "CodeIt",
        id: 102,
      },
      role: "member",
      userImage: "/TEST_IMG/image-1.jpg",
      userEmail: "asdf@example.com",
      userName: "안해나",
      groupId: 102,
      userId: 1,
    },
  ],
};

export const SIDEBAR_MOCK_DATA = [
  {
    title: "경영관리팀",
  },
  {
    title: "프로덕트팀",
  },
  {
    title: "마케팅팀",
  },
  {
    title: "콘텐츠팀",
  },
];

export const MOBILE_SIDEBAR_MENU_MOCK_DATA = [
  {
    menu: "경영관리팀",
    href: "/",
  },
  {
    menu: "프로덕트팀",
    href: "/test",
  },
  {
    menu: "마케팅팀",
    href: "/test2",
  },
  {
    menu: "콘텐츠팀",
    href: "/test3",
  },
];

export const MY_HISTORY_ITEM_MOCK_DATA: TaskListItemType[] = [
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

export const LIST_DATE_MOCK_DATA: { day: Day; date: DateNumber }[] = [
  { day: "월", date: 1 },
  { day: "화", date: 2 },
  { day: "수", date: 3 },
  { day: "목", date: 4 },
  { day: "금", date: 5 },
  { day: "토", date: 6 },
  { day: "일", date: 7 },
];

export const COMMENT_MOCK_DATA = {
  id: 1,
  content: "lorem ipsum dolor sit amet consectetur adipisicing elit",
  createdAt: "2024-07-29",
  updatedAt: "2024-07-29",
  user: { id: 1, nickname: "안해나", image: "" },
};

export const TASK_DETAIL_MOCK_DATA: DetailDataItem = {
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
};
