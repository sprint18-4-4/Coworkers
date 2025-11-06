import { Meta, StoryObj } from "@storybook/nextjs";
import AddTeamButton from "./AddTeamButton";

const meta: Meta<typeof AddTeamButton> = {
  title: "Components/Sidebar/_internal/AddTeamButton",
  component: AddTeamButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};
