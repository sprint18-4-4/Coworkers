import FloatingButton from "./FloatingButton";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof FloatingButton> = {
  title: "common/Button/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "inverse"],
      description: "버튼 스타일",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const FloatingPrimary: Story = {
  args: {
    variant: "primary",
    iconName: "plusLg",
  },
};

export const FloatingInverse: Story = {
  args: {
    variant: "inverse",
    iconName: "unfilledHeartLg",
  },
};
