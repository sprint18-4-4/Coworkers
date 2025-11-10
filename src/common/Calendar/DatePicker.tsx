"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";

// TODO: 캘린더 타일 가로 값 수정
// TODO: 캘린더 타일 클릭 시 함수 추가

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DatePicker() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <section className="min-w-[282px] min-h-[258px] p-4 bg-white rounded-[16px]">
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        prevLabel={<div className="size-6 bg-black" />}
        nextLabel={<div className="size-6 bg-black" />}
        prev2Label={null}
        next2Label={null}
        formatDay={(_, date) => date.getDate().toString()}
      />
    </section>
  );
}

export default DatePicker;
