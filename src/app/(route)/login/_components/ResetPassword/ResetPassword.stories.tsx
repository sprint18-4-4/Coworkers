import type { Meta, StoryObj } from "@storybook/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResetPassword from "./ResetPassword";

const queryClient = new QueryClient();

const meta: Meta<typeof ResetPassword> = {
  title: "Page/Login/ResetPassword",
  component: ResetPassword,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "모달 열림/닫힘 상태",
    },
    onClose: {
      action: "onClose",
      description: "모달 닫기 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResetPassword>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
