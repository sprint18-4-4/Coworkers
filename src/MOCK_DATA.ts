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
