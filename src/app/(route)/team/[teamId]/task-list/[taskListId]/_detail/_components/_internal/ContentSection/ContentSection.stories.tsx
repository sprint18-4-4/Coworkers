import { Meta, StoryObj } from "@storybook/nextjs";
import ContentSection from "./ContentSection";

const meta: Meta<typeof ContentSection> = {
  title: "Page/ListDetail/ContentSection",
  component: ContentSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi qui cumque! Aperiam, architecto itaque!",
  },
};
