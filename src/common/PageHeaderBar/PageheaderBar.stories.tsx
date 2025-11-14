import { Meta, StoryObj } from "@storybook/nextjs";
import PageHeaderBar from "./PageHeaderBar";

const meta: Meta<typeof PageHeaderBar> = {
  component: PageHeaderBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "경영관리팀",
  },
};
