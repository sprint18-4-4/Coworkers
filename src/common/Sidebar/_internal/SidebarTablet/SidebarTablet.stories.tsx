import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarTablet from "./SidebarTablet";

const meta: Meta<typeof SidebarTablet> = {
  title: "Common/Sidebar/_internal/SidebarTablet",
  component: SidebarTablet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[100svh] shadow-lg">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    user: {
      control: "object",
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

export const Default: Story = {
  args: {
    isOpen: true,
    user: USER_MOCK_DATA,
  },
};

export const NoUser: Story = {
  args: {
    isOpen: true,
    user: null,
  },
};
