import { Meta, StoryObj } from "@storybook/nextjs";
import { useArgs } from "storybook/internal/preview-api";
import InputReply from "./InputReply";

const meta: Meta<typeof InputReply> = {
  title: "Common/Input/InputReply",
  component: InputReply,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-full p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    value: "",
    isSubmitting: false,
    onChange: () => {},
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (newValue: string) => {
      updateArgs({ value: newValue });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`전송 시도: ${value}`);
          updateArgs({ value: "", isSubmitting: false });
        }}
      >
        <InputReply {...args} value={value} onChange={handleChange} />
      </form>
    );
  },
};
