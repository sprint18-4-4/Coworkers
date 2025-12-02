import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import SidebarMobile from "./SidebarMobile";

const meta: Meta<typeof SidebarMobile> = {
  title: "Common/Sidebar/_internal/SidebarMobile",
  component: SidebarMobile,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full max-w-[420px] mx-auto border">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "사이드바 열림/닫힘 상태",
    },
    handleOpenDropdown: {
      action: "handleOpenDropdown",
      description: "사이드바 토글 핸들러",
    },
    user: {
      control: "object",
      description: "사용자 정보",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const USER_MOCK_DATA = {
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

const InteractiveTemplate: Story = {
  args: {
    isOpen: false,
    user: USER_MOCK_DATA,
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <div className="relative w-full h-full">
          <SidebarMobile
            {...args}
            isOpen={isOpen}
            handleOpenDropdown={() => {
              setIsOpen(!isOpen);
              args.handleOpenDropdown?.(!isOpen);
            }}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">메인 컨텐츠 영역</h2>
            <p>이곳은 모바일 뷰에서 보이는 메인 컨텐츠입니다.</p>
            <button onClick={() => setIsOpen(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              사이드바 열기 <br />
              (화면을 모바일 사이즈로 변경해야 합니다.)
            </button>
          </div>
        </div>
      </>
    );
  },
};

export const Default: Story = {
  ...InteractiveTemplate,
  args: {
    ...InteractiveTemplate.args,
    isOpen: true,
    user: USER_MOCK_DATA,
  },
};

export const NoUser: Story = {
  ...InteractiveTemplate,
  args: {
    ...InteractiveTemplate.args,
    isOpen: true,
    user: null,
  },
};
