import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";
import { DateValue } from "@/types";
import Icon from "@/common/Icon/Icon";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * const [selectedDate, setSelectedDate] = useState<DateValue>(new Date());
 *
 * const handleDateChange = (next: DateValue) => {
 *   setSelectedDate(next);
 *   console.log("선택된 날짜:", next);
 * };
 *
 * <DatePicker value={selectedDate} onChange={handleDateChange} />
 * ```
 */

interface DatePickerProps {
  value: DateValue;
  onChange: (next: DateValue) => void;
}

function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <div
      aria-label="날짜 선택"
      className="w-full min-h-[258px] flex-center p-4 bg-white rounded-2xl border border-interaction-hover"
    >
      <Calendar
        locale="ko-KR"
        value={value}
        onChange={onChange}
        calendarType="gregory"
        prevLabel={<Icon name="leftArrow" className="size-6 tablet:size-6" />}
        nextLabel={<Icon name="rightArrow" className="size-6 tablet:size-6" />}
        prev2Label={null}
        next2Label={null}
        formatDay={(_, date) => date.getDate().toString()}
      />
    </div>
  );
}

export default DatePicker;
