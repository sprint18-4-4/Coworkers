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
  Panel,
} from "./_types/ModalProps";
import { cn } from "@/utils";
import { Icon } from "@/types";
import Input from "../Input/Input";
import Time from "../Calendar/Time/Time";
import DatePicker from "../Calendar/DatePicker/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

/**
 *  @author sangin
 *  @component
 *  @example
 *
 * @param onClose onClose는 setIsOpen만 전달해주면 Modal에서 처리하도록 했습니다.
 * <Modal isOpen={isOpen} onClose={setIsOpen} className="">
 *   <Modal.Title title="제목" />
 *   <Modal.Description description="설명" />
 * </Modal>
 */

const Modal = ({ isOpen, children, className, onClose }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    isOpen && (
      <div className={MODAL_OVERLAY_STYLE} onClick={handleOverlayClick}>
        <div className={cn(MODAL_BASE_STYLE, className)}>{children}</div>
      </div>
    )
  );
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
  const [activePanel, setActivePanel] = useState<Panel | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const panel = e.currentTarget.name as Panel;
    if (activePanel === panel && isPanelOpen) {
      setIsPanelOpen(false);
      setActivePanel(null);
      return;
    }
    setActivePanel(panel);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setActivePanel(null);
  };

  const formatDate = () => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      return `${start ? dayjs(start).format("YYYY년 MM월 DD일") : ""}${
        end ? ` ~ ${dayjs(end).format("YYYY년 MM월 DD일")}` : ""
      }`;
    }
    return value ? dayjs(value).format("YYYY년 MM월 DD일") : "";
  };

  const formatTime = (timePeriod: "am" | "pm", selectedTime: `${number}:00` | `${number}:30`) => {
    if (timePeriod === "am") return `오전 ${selectedTime}`;
    return `오후 ${selectedTime}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg-medium">시작 날짜 및 시간</label>
      <div className="flex gap-2">
        <Input
          name="DatePicker"
          readOnly
          onClick={handleInputClick}
          value={formatDate()}
          containerClassName="flex-[3]"
          className="cursor-pointer caret-transparent"
        />
        <Input
          name="Time"
          readOnly
          onClick={handleInputClick}
          value={formatTime(timePeriod, selectedTime)}
          containerClassName="flex-[2]"
          className="cursor-pointer caret-transparent"
        />
      </div>

      {isPanelOpen && activePanel === "DatePicker" && (
        <DatePicker
          value={value}
          onChange={(v) => {
            onChange(v);
            closePanel();
          }}
        />
      )}

      {isPanelOpen && activePanel === "Time" && (
        <Time
          timePeriod={timePeriod}
          setTimePeriod={(v) => {
            setTimePeriod(v);
            closePanel();
          }}
          selectedTime={selectedTime}
          setSelectedTime={(v) => {
            setSelectedTime(v);
            closePanel();
          }}
        />
      )}
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
