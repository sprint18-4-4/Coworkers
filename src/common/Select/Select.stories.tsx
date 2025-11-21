import Select from "./Select";
import { SelectOption } from "./_types/types";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "common/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-36">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Select>;

export const SortSelect: Story = {
  render: () => {
    const Wrapper = () => {
      // "recent" | "like" : 실제 api사용시에는 OrderByType으로 만들어서 사용
      const SORT_OPTIONS: SelectOption<"recent" | "like">[] = [
        { label: "최신순", value: "recent" },
        { label: "좋아요 많은 순", value: "like" },
      ];
      const [sort, setSort] = useState<"recent" | "like">("recent");
      return <Select value={sort} onChange={setSort} options={SORT_OPTIONS} />;
    };

    return <Wrapper />;
  },
};

export const RepeatSelect: Story = {
  render: () => {
    const Wrapper = () => {
      // "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY" : 실제 api사용시에는 FrequencyType 만들어서 사용
      const REPEAT_OPTIONS: SelectOption<"ONCE" | "DAILY" | "WEEKLY" | "MONTHLY">[] = [
        { label: "한 번", value: "ONCE" },
        { label: "매일", value: "DAILY" },
        { label: "주 반복", value: "WEEKLY" },
        { label: "월 반복", value: "MONTHLY" },
      ];
      const [repeat, setRepeat] = useState<"ONCE" | "DAILY" | "WEEKLY" | "MONTHLY">("ONCE");
      return <Select value={repeat} onChange={setRepeat} options={REPEAT_OPTIONS} />;
    };

    return <Wrapper />;
  },
};
