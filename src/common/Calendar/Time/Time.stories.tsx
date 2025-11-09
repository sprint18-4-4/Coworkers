import { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs";
import Time from "./Time";
import type { HalfHour } from "@/types";

const meta: Meta<typeof Time> = {
  title: "Common/Time",
  component: Time,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <StatefulTimeStory />,
};

function StatefulTimeStory() {
  const [period, setPeriod] = useState<"am" | "pm">("am");
  const [time, setTime] = useState<HalfHour>("12:00");

  return <Time timePeriod={period} setTimePeriod={setPeriod} selectedTime={time} setSelectedTime={setTime} />;
}
