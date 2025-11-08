import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import SidebarMobile from "./SidebarMobile";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

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
  },
};
