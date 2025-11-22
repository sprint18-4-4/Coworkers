import { toastKit } from "@/utils";
import Toaster from "@/lib/toaster";
import type { Meta, StoryObj } from "@storybook/react";

const BUTTON_STYLE = "px-4 py-2 rounded-md border border-gray-300";

const ToastDemo = () => {
  const { success, error, loading } = toastKit();

  const handleLoadingToast = async () => {
    const id = loading("처리 중이에요.");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    success("완료됐어요.", { id });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button onClick={() => success("성공적으로 저장되었어요.")} className={BUTTON_STYLE}>
        성공 토스트
      </button>
      <button onClick={() => error("에러가 발생했어요.")} className={BUTTON_STYLE}>
        에러 토스트
      </button>
      <button onClick={handleLoadingToast} className={BUTTON_STYLE}>
        로딩 토스트
      </button>
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "Utils/toastKit",
  component: ToastDemo,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[50vh]">
        <Story />
        <Toaster />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {},
};
