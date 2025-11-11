import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";
import { DateValue } from "@/types";

interface DatePickerProps {
  value: DateValue;
  onChange: (next: DateValue) => void;
}

function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <div
      aria-label="날짜 선택"
      className="w-full min-h-[258px] p-4 bg-white rounded-2xl border border-interaction-hover"
    >
      <Calendar
        locale="ko-KR"
        value={value}
        onChange={onChange}
        calendarType="gregory"
        // TODO(지권): 좌우 화살표 아이콘 추가
        prevLabel={<div className="size-6 bg-black" />}
        nextLabel={<div className="size-6 bg-black" />}
        prev2Label={null}
        next2Label={null}
        formatDay={(_, date) => date.getDate().toString()}
      />
    </div>
  );
}

export default DatePicker;
