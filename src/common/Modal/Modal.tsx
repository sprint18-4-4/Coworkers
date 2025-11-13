"use client";

import {
  MODAL_BASE_STYLE,
  MODAL_OVERLAY_STYLE,
  MODAL_CLOSE_ICON_STYLE,
  MODAL_TITLE_STYLE,
  MODAL_DESCRIPTION_STYLE,
  MODAL_BUTTON_STYLE,
  MODAL_ICON_STYLE,
} from "./MODAL_STYLE";
import {
  ModalProps,
  ModalTitleProps,
  ModalDescriptionProps,
  ModalButtonProps,
  ModalIconProps,
  ModalFormProps,
  ModalInputProps,
  ModalCloseIconProps,
  ModalTimeProps,
} from "./_types/ModalProps";
import { cn } from "@/utils";
import { Icon } from "@/types";
import Input from "../Input/Input";
import Time from "../Calendar/Time/Time";
import DatePicker from "../Calendar/DatePicker/DatePicker";
import dayjs from "dayjs";

/**
 *  @author sangin
 *  @component
 *  @example
 * <Modal isOpen={isOpen} className="">
 *   <Modal.Title title="제목" />
 *   <Modal.Description description="설명" />
 * </Modal>
 */

const Modal = ({ isOpen, children, className }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return <div className={cn(MODAL_BASE_STYLE, MODAL_OVERLAY_STYLE, className)}>{children}</div>;
};

const ModalTitle = ({ title, className }: ModalTitleProps) => {
  return <h2 className={cn(MODAL_TITLE_STYLE, className)}>{title}</h2>;
};

const ModalDescription = ({ description, className }: ModalDescriptionProps) => {
  return <p className={cn(MODAL_DESCRIPTION_STYLE, className)}>{description}</p>;
};

const ModalButton = ({ children, className }: ModalButtonProps) => {
  return <div className={cn(MODAL_BUTTON_STYLE, className)}>{children}</div>;
};

const ModalIcon = ({ name, className }: ModalIconProps) => {
  return <Icon name={name} className={cn(MODAL_ICON_STYLE, className)} />;
};

const ModalCloseIcon = ({ className, onClose }: ModalCloseIconProps) => {
  return <Icon name="x" className={cn(MODAL_CLOSE_ICON_STYLE, className)} onClick={(prev) => onClose(!prev)} />;
};

const ModalForm = ({ children, onSubmit }: ModalFormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const ModalInput = ({ placeholder, label, error, containerClassName, ref, ...rest }: ModalInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      label={label}
      error={error}
      containerClassName={containerClassName}
      ref={ref}
      {...rest}
    />
  );
};

// TODO(상인): Profile이 구현되면 수정
const ModalProfile = ({}) => {
  // return <Profile/>
};

// TODO(상인): Dropdown이 구현되면 수정
const ModalRepeat = ({}) => {
  // return <Dropdown/>
};

const ModalTime = ({ value, onChange, timePeriod, setTimePeriod, selectedTime, setSelectedTime }: ModalTimeProps) => {
  let date = "";

  // DateValue 타입을 맞추기 위한 조건
  if (Array.isArray(value)) {
    const [start, end] = value;
    date = `${start ? dayjs(start).format("YYYY년 MM월 DD일") : ""}${
      end ? ` ~ ${dayjs(end).format("YYYY년 MM월 DD일")}` : ""
    }`;
  } else if (value) {
    date = dayjs(value).format("YYYY년 MM월 DD일");
  }

  const getTimeValue = (timePeriod: "am" | "pm", selectedTime: `${number}:00` | `${number}:30`) => {
    if (timePeriod === "am") return `오전 ${selectedTime}`;
    return `오후 ${selectedTime}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg-medium">시작 날짜 및 시간</label>
      <div className="flex gap-2">
        <Input readOnly value={date} containerClassName="flex-[3]" className="cursor-pointer caret-transparent" />
        <Input
          readOnly
          value={getTimeValue(timePeriod, selectedTime)}
          containerClassName="flex-[2]"
          className="cursor-pointer caret-transparent"
        />
      </div>
      <DatePicker value={value} onChange={onChange} />
      <Time
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};

Modal.Title = ModalTitle;
Modal.Button = ModalButton;
Modal.Form = ModalForm;
Modal.Input = ModalInput;
Modal.Description = ModalDescription;
Modal.Icon = ModalIcon;
Modal.CloseIcon = ModalCloseIcon;
Modal.Profile = ModalProfile;
Modal.Repeat = ModalRepeat;
Modal.Time = ModalTime;

export default Modal;
