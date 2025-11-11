import type { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentProps, useState } from "react";
import DatePicker from "./DatePicker";
import { DateValue } from "@/types";
import { fn } from "storybook/test";

const meta = {
  title: "Common/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div className="p-6 border border-gray-300 rounded-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const Controlled = (args: ComponentProps<typeof DatePicker>) => {
  const [value, setValue] = useState<DateValue>(args.value ?? new Date());
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(next) => {
        setValue(next);
        args.onChange?.(next);
      }}
    />
  );
};

export const Default: Story = {
  args: {
    value: new Date(),
    onChange: fn(),
  },
  render: (args) => <Controlled {...args} />,
};
