/**
 * @author jikwon
 * @description 캘린더(DatePicker) 컴포넌트에서 사용하는 날짜 타입 정의입니다.
 */

export type ValuePiece = Date | null;

export type DateValue = ValuePiece | [ValuePiece, ValuePiece];
