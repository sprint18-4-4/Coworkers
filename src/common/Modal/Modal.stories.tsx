import { StoryObj, Meta } from "@storybook/nextjs";
import Modal from "./Modal";
import { useState } from "react";
import { DateValue, HalfHour } from "@/types";

const meta: Meta<typeof Modal> = {
  title: "common/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => {
    const Wrapper = () => {
      const [selectedDate, setSelectedDate] = useState<DateValue>(new Date());
      const [timePeriod, setTimePeriod] = useState<"am" | "pm">("am");
      const [selectedTime, setSelectedTime] = useState<HalfHour>("12:00");
      const handleDateChange = (next: DateValue) => {
        setSelectedDate(next);
      };
      return (
        <Modal {...args}>
          <Modal.Time
            value={selectedDate}
            onChange={handleDateChange}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
          <Modal.Input placeholder="할 일을 입력해주세요" label="할 일 제목" />
        </Modal>
      );
    };

    return <Wrapper />;
  },
};
