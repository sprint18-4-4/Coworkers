import { StoryObj, Meta } from "@storybook/nextjs";
import Modal from "./Modal";
import BaseButton from "../Button/BaseButton";
import { useState } from "react";
import { DateValue, HalfHour } from "@/types";

const meta: Meta<typeof Modal> = {
  title: "common/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Title: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Title title="멤버 초대" />
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const Description: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Description description="그룹에 참여할 수 있는 링크를 복사합니다." />
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const CloseIcon: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.CloseIcon onClose={() => setIsOpen(false)} />
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const Button: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Button>
            <BaseButton variant="solid" size="large">
              링크 복사하기
            </BaseButton>
          </Modal.Button>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const Buttons: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Button>
            <BaseButton variant="outlinedPrimary" size="large" onClick={() => setIsOpen(false)}>
              닫기
            </BaseButton>
            <BaseButton variant="solid" size="large">
              링크 복사하기
            </BaseButton>
          </Modal.Button>
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const Input: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Input placeholder="할 일을 입력해주세요" label="할 일 제목" />
        </Modal>
      );
    };
    return <Wrapper />;
  },
};

export const Time: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);
      const [selectedDate, setSelectedDate] = useState<DateValue>(new Date());
      const [timePeriod, setTimePeriod] = useState<"am" | "pm">("am");
      const [selectedTime, setSelectedTime] = useState<HalfHour>("12:00");

      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Time
            value={selectedDate}
            onChange={setSelectedDate}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </Modal>
      );
    };

    return <Wrapper />;
  },
};

export const Profile: Story = {
  render: () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.CloseIcon onClose={() => setIsOpen(false)} />
          <Modal.Profile src="https://i.pravatar.cc/300" name="우지은" email="jieunn@codeit.com" />
        </Modal>
      );
    };

    return <Wrapper />;
  },
};
