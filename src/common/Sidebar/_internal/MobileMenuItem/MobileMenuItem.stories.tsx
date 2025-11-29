import type { Meta, StoryObj } from "@storybook/nextjs";
import type { Membership } from "@/types";
import MobileMenuItem from "./MobileMenuItem";

const meta: Meta<typeof MobileMenuItem> = {
  title: "Common/Sidebar/_internal/Mobile/MobileMenuItem",
  component: MobileMenuItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockMembership = {
  groupId: "1239",
  group: {
    teamId: "1",
    updatedAt: "2025-11-01T12:00:00Z",
    createdAt: "2025-05-01T09:30:00Z",
    image: "/TEST_IMG/image-1.jpg",
    name: "CodeIt",
    id: 101,
  },
} as unknown as Membership;

export const Open: Story = {
  args: {
    membership: mockMembership,
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[238px]">
        <Story />
      </div>
    ),
  ],
};

export const Close: Story = {
  args: {
    membership: mockMembership,
    isOpen: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[52px]">
        <Story />
      </div>
    ),
  ],
};
