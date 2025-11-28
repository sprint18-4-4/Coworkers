import { Meta, StoryObj } from "@storybook/nextjs";
import LoadingSpinner from "./LoadingSpinner";

const meta: Meta<typeof LoadingSpinner> = {
  title: "State/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SizeSm: Story = {
  args: {
    size: "sm",
    className: "",
  },
};

export const SizeMd: Story = {
  args: {
    size: "md",
    className: "",
  },
};

export const SizeLg: Story = {
  args: {
    size: "lg",
    className: "",
  },
};
