import { Meta } from "@storybook/nextjs";
import { StoryObj } from "@storybook/nextjs";
import Sidebar from "./Sidebar";
import { USER_MOCK_DATA } from "@/MOCK_DATA";

const meta: Meta<typeof Sidebar> = {
  title: "Common/Sidebar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
  args: {
    user: USER_MOCK_DATA,
  },
  argTypes: {
    user: {
      control: "object",
      description: "사용자 정보",
    },
  },
};

export default meta;

export const Default = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};
