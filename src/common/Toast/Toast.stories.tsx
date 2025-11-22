import Toaster from "@/lib/toaster";
import { toastKit } from "@/utils";
import type { Meta, StoryObj } from "@storybook/react";

const BUTTON_STYLE = "px-4 py-2 rounded-md border border-gray-300";

const ToastDemo = () => {
  const { success, error, loading, showToast } = toastKit();

  const handleLoadingToast = async () => {
    const id = loading("처리 중이에요.");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    success("완료됐어요.", { id }); // 같은 id로 교체
    // 실패 케이스라면
    // error("실패했어요.", { id });
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
      <button onClick={() => showToast({ variant: "success", message: "커스텀 호출이에요." })} className={BUTTON_STYLE}>
        showToast 직접 호출
      </button>
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: "Hooks/useToast",
  component: ToastDemo,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {},
};
