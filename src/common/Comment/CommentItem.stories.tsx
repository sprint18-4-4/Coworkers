import { Meta, StoryObj } from "@storybook/nextjs";
import Comment from "./CommentItem";
import { CommentData } from "@/types";

const meta: Meta<typeof Comment> = {
  title: "Common/Comment",
  component: Comment,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-4 bg-background-primary">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export default meta;

const mockComment: CommentData = {
  id: 1,
  content: "지금 발주가 내일이라 에셉 해주셔야 될 거 같아요",
  createdAt: "2025-11-14T00:12:00.000Z",
  updatedAt: "2025-11-14T00:12:00.000Z",
  user: {
    id: 1,
    nickname: "우지은",
    image: "/TEST_IMG/image-1.jpg",
  },
};

const longComment: CommentData = {
  ...mockComment,
  id: 2,
  user: {
    id: 2,
    nickname: "김댓글",
    image: "",
  },
  content:
    "이것은 매우 긴 댓글입니다. 실제 서비스에서는 이렇게 긴 댓글이 작성될 수 있으며, 이 경우 텍스트가 여러 줄로 표시되어야 합니다. 또한 URL이나 특수문자도 포함될 수 있습니다. https://example.com 이런 식으로요.",
};

export const Default: Story = {
  args: {
    comment: mockComment,
    showKebab: false,
  },
};

export const WithKebab: Story = {
  args: {
    comment: mockComment,
    showKebab: true,
  },
};

export const EditMode: Story = {
  args: {
    comment: mockComment,
    isEditing: true,
  },
};

export const ListComments: Story = {
  render: () => (
    <div>
      <Comment comment={mockComment} showKebab={true} />
      <Comment comment={longComment} showKebab={true} />
    </div>
  ),
};
