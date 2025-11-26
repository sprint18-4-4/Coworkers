import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import CommentItem from "./CommentItem";
import { CommentData } from "@/types";
import Profile from "../Profile/Profile";
import { CommentEdit } from "./_internal";

const meta: Meta<typeof CommentItem> = {
  title: "Common/Comment",
  component: CommentItem,
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
  render: () => {
    const CommentWithEdit = () => {
      const [isEditing, setIsEditing] = useState(true);
      return (
        <div className="max-w-2xl">
          {isEditing ? (
            <div className="w-full py-2.5 px-5 flex gap-4 bg-icon-inverse tablet:px-7 pc:py-4 pc:px-10">
              <div className="flex-shrink-0">
                <Profile src={mockComment.user.image} alt={`${mockComment.user.nickname} 프로필`} size="md" />
              </div>
              <div className="flex-grow">
                <div className="mb-1">
                  <span className="text-lg-bold text-text-primary">{mockComment.user.nickname}</span>
                </div>
                <CommentEdit initialComment={mockComment.content} onClose={() => setIsEditing(false)} />
              </div>
            </div>
          ) : (
            <CommentItem comment={mockComment} showKebab={true} onDelete={() => {}} />
          )}
        </div>
      );
    };

    return <CommentWithEdit />;
  },
};

export const ListComments: Story = {
  render: () => (
    <div>
      <CommentItem comment={mockComment} showKebab={true} onDelete={() => {}} />
      <CommentItem comment={longComment} showKebab={true} onDelete={() => {}} />
    </div>
  ),
};
