import { Meta, StoryObj } from "@storybook/nextjs";
import PageEmptyState from "./PageEmptyState";

const meta: Meta<typeof PageEmptyState> = {
  title: "Features/PageEmptyState",
  component: PageEmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "404 페이지",
    children: <p>요청하신 페이지를 찾을 수 없습니다.</p>,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageEmptyStateStory: Story = {
  args: {
    title: (
      <p>
        요청하신 페이지를 찾을 수 없습니다. <br />
        경로가 변경되었거나 존재하지 않는 주소입니다.
      </p>
    ),
    children: (
      <button className="px-8 py-3 text-text-inverse bg-brand-primary rounded-xl hover:bg-brand-tertiary transition-colors">
        메인 페이지 이동
      </button>
    ),
  },
};
