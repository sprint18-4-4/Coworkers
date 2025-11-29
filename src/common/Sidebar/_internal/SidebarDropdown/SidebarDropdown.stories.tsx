import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarDropdown from "./SidebarDropdown";

const meta: Meta<typeof SidebarDropdown> = {
  title: "Common/Sidebar/_internal/Tablet/SidebarDropdown",
  component: SidebarDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockMemberships = [
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
];

export const Default: Story = {
  args: {
    isOpen: true,
    membership: mockMemberships,
  },
};
