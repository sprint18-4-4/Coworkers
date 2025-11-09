"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";

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
        prev2Label={null}
        next2Label={null}
        formatDay={(_, date) => date.getDate().toString()}
      />
    </section>
  );
}

export default DatePicker;
