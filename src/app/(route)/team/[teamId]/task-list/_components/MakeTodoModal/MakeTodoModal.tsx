"use client";

import { BaseButton, DatePicker, Input, InputBox, Modal, Select, Time } from "@/common";
import { useState } from "react";
import AnimatedCollapse from "./_internal/AnimatedCollapse";
import { cn } from "@/utils";

const STYLES = {
  baseDiv: "w-full flex flex-col gap-4",
} as const;

const options = [
  { label: "한 번", value: "once" },
  { label: "매일", value: "daily" },
  { label: "주 반복", value: "weekly" },
  { label: "월 반복", value: "monthly" },
];

type OpenPicker = "date" | "time" | null;

const MakeTodoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [order, setOrder] = useState("once");
  const [startTime, setStartTime] = useState(new Date());
  const [openPicker, setOpenPicker] = useState<OpenPicker>(null);
  const [value, setValue] = useState({
    title: "",
    startDate: new Date(),
    startTime: new Date(),
    order: "once",
    todoMemo: "",
  });

  const isFormValid =
    value.title.trim().length > 0 &&
    value.todoMemo.trim().length > 0 &&
    value.startDate !== null &&
    value.startTime !== null &&
    value.order !== "";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    onClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Body className="flex-col-center gap-4">
          <h2 className="text-text-primary text-lg-medium">할 일 만들기</h2>
          <p className="text-text-default text-md-medium text-center">
            할 일은 실제로 행동 가능한 작업 중심으로 <br /> 작성해주시면 좋습니다.
          </p>

          <Input
            value={value.title}
            label="할 일 제목"
            placeholder="할 일 제목을 입력해주세요."
            onChange={(e) => setValue((prev) => ({ ...prev, title: e.target.value }))}
          />
          <div className={cn(STYLES.baseDiv, "-mb-4")}>
            <p>시작 날짜 및 시간</p>
            <div className="w-full flex gap-2">
              <div className="flex-[2]">
                <Input
                  placeholder="2024년 7월 29일"
                  className={cn(
                    "w-full cursor-pointer focus:outline-none",
                    openPicker === "date" && "border-interaction-pressed",
                  )}
                  readOnly
                  onClick={() => setOpenPicker((prev) => (prev === "date" ? null : "date"))}
                />
              </div>
              <div className="flex-[1]">
                <Input
                  placeholder="오후 3:30"
                  className={cn(
                    "w-full cursor-pointer focus:outline-none",
                    openPicker === "time" && "border-interaction-pressed",
                  )}
                  readOnly
                  onClick={() => setOpenPicker((prev) => (prev === "time" ? null : "time"))}
                />
              </div>
            </div>
            <AnimatedCollapse isOpen={openPicker === "date"}>
              <DatePicker value={startTime} onChange={() => {}} />
            </AnimatedCollapse>
            <AnimatedCollapse isOpen={openPicker === "time"}>
              <Time timePeriod="am" setTimePeriod={() => {}} selectedTime="12:00" setSelectedTime={() => {}} />
            </AnimatedCollapse>
          </div>

          <div className={STYLES.baseDiv} onClick={(e) => e.preventDefault()}>
            <p>반복 설정</p>
            <Select value={order} options={options} onChange={setOrder} />
          </div>

          <InputBox
            value={value.todoMemo}
            onChange={(e) => setValue((prev) => ({ ...prev, todoMemo: e.target.value }))}
            size="md"
            label="할 일 메모"
            labelClassName="!text-lg-medium"
            placeholder="할 일 메모를 입력해주세요."
          />
        </Modal.Body>
        <Modal.Footer>
          <BaseButton type="submit" variant="solid" size="large" className="mt-4" disabled={!isFormValid}>
            만들기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default MakeTodoModal;
