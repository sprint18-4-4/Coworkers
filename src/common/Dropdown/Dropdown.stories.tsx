import type { Meta, StoryObj } from "@storybook/nextjs";
import Dropdown from "./Dropdown";
import { DropdownOption } from "./_types/types";

const meta: Meta<typeof Dropdown> = {
  title: "common/Dropdown",
  component: Dropdown,
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

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    const Wrapper = () => {
      const DROPDOWN_OPTIONS: DropdownOption[] = [
        { label: "마이 히스토리", action: () => {} },
        { label: "로그아웃", action: () => {} },
      ];
      return <Dropdown iconName="kebab" options={DROPDOWN_OPTIONS} />;
    };
    return <Wrapper />;
  },
};
