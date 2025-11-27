"use client";

import { useState } from "react";
import { useTodoForm } from "./_hooks";
import { cn, formatToKoreanDate } from "@/utils";
import { BaseButton, DatePicker, Input, InputBox, Modal, Select, Time } from "@/common";
import { AnimatedCollapse } from "./_internal";
import { MODAL_STYLES, REPEAT_OPTIONS, DATE_OPTIONS } from "./_constants";
import { Frequency } from "@/types";

const RepeatOptionItem = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 py-3 rounded-xl text-md-medium border transition-colors",
        selected
          ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-primary/80"
          : "border-border-primary bg-background-primary text-text-default hover:bg-gray-200",
      )}
    >
      {label}
    </button>
  );
};

type OpenPicker = "date" | "time" | null;

interface MakeTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
  taskListId: string;
}

const MakeTodoModal = ({ isOpen, onClose, groupId, taskListId }: MakeTodoModalProps) => {
  const [order, setOrder] = useState<Frequency>("ONCE");
  const [openPicker, setOpenPicker] = useState<OpenPicker>(null);
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [monthDay, setMonthDay] = useState<number | null>(null);

  const { formData, setFormData, isFormValid, onSubmit, onChangeDate, onChangeTime } = useTodoForm({
    onClose,
    groupId,
    taskListId,
    order,
    weekDays,
    monthDay,
  });

  return (
    <form onSubmit={onSubmit}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Body className="flex-col-center gap-4">
          <h2 className="text-text-primary text-lg-medium">할 일 만들기</h2>
          <p className="text-text-default text-md-medium text-center">
            할 일은 실제로 행동 가능한 작업 중심으로 <br /> 작성해주시면 좋습니다.
          </p>
          <div className="w-full overflow-y-auto max-h-[60vh] flex flex-col gap-4 hide-scrollbar">
            <Input
              value={formData.title}
              label="할 일 제목"
              placeholder="할 일 제목을 입력해주세요."
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
            />
            <div className={cn(MODAL_STYLES.baseDiv, "-mb-4")}>
              <p>시작 날짜 및 시간</p>
              <div className="w-full flex gap-2">
                <div className="flex-[2]">
                  <Input
                    readOnly
                    maxLength={30}
                    className={cn(MODAL_STYLES.periodDiv, openPicker === "date" && MODAL_STYLES.periodDivPressed)}
                    value={formatToKoreanDate(formData.startDate)}
                    onClick={() => setOpenPicker((prev) => (prev === "date" ? null : "date"))}
                  />
                </div>
                <div className="flex-[1.5]">
                  <Input
                    readOnly
                    maxLength={200}
                    className={cn(MODAL_STYLES.periodDiv, openPicker === "time" && MODAL_STYLES.periodDivPressed)}
                    value={`${formData.startTime.period === "am" ? "오전" : "오후"} ${formData.startTime.value}`}
                    onClick={() => setOpenPicker((prev) => (prev === "time" ? null : "time"))}
                  />
                </div>
              </div>
              <AnimatedCollapse isOpen={openPicker === "date"}>
                <DatePicker value={formData.startDate} onChange={onChangeDate} />
              </AnimatedCollapse>
              <AnimatedCollapse isOpen={openPicker === "time"}>
                <Time
                  timePeriod={formData.startTime.period}
                  setTimePeriod={(period) => onChangeTime(period, formData.startTime.value)}
                  selectedTime={formData.startTime.value}
                  setSelectedTime={(timeValue) => onChangeTime(formData.startTime.period, timeValue)}
                />
              </AnimatedCollapse>
            </div>

            <div className={MODAL_STYLES.baseDiv} onClick={(e) => e.preventDefault()}>
              <p>반복 설정</p>
              <Select
                value={order}
                options={REPEAT_OPTIONS}
                onChange={(value) => {
                  setOrder(value);
                  if (value !== "WEEKLY") {
                    setWeekDays([]);
                  }
                }}
              />
              {order === "WEEKLY" && (
                <div className="flex gap-1 mt-2">
                  {DATE_OPTIONS.map((option) => (
                    <RepeatOptionItem
                      key={option.value}
                      label={option.label}
                      selected={weekDays.includes(option.value)}
                      onClick={() =>
                        setWeekDays((prev) =>
                          prev.includes(option.value)
                            ? prev.filter((d) => d !== option.value)
                            : [...prev, option.value].sort((a, b) => a - b),
                        )
                      }
                    />
                  ))}
                </div>
              )}
              {order === "MONTHLY" && (
                <Input
                  placeholder="1~31 사이 날짜를 입력해주세요."
                  value={monthDay ? String(monthDay) : ""}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (Number.isNaN(value)) {
                      setMonthDay(null);
                      return;
                    }
                    if (value < 1 || value > 31) return;
                    setMonthDay(value);
                  }}
                />
              )}
            </div>

            <InputBox
              value={formData.todoMemo}
              onChange={(e) => setFormData((prev) => ({ ...prev, todoMemo: e.target.value }))}
              size="md"
              label="할 일 메모"
              labelClassName="!text-lg-medium"
              placeholder="할 일 메모를 입력해주세요."
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* TODO(지권): Disabled 상태 추가 필요 */}
          <BaseButton type="submit" variant="solid" size="large" className="mt-4" disabled={!isFormValid}>
            만들기
          </BaseButton>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default MakeTodoModal;
