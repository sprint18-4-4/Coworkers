import { IconName } from "@/types";
import { DateValue, HalfHour } from "@/types";
import { ComponentPropsWithRef, RefObject } from "react";
import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onClose: (prev: boolean) => void;
}

export interface ModalTitleProps {
  title: string;
  className?: string;
}

export interface ModalDescriptionProps {
  description: string;
  className?: string;
}

export interface ModalButtonProps {
  children: ReactNode;
  className?: string;
}

export interface ModalIconProps {
  name: IconName;
  className?: string;
}

export interface ModalFormProps {
  children: ReactNode;
  onSubmit: () => void;
}

export interface ModalInputProps extends ComponentPropsWithRef<"input"> {
  placeholder: string;
  label?: string;
  error?: string;
  containerClassName?: string;
  ref?: RefObject<HTMLInputElement | null>;
}

export interface ModalCloseIconProps {
  className?: string;
  onClose: (prev: boolean) => void;
}

export interface ModalTimeProps {
  value: DateValue;
  onChange: (next: DateValue) => void;
  timePeriod: "am" | "pm";
  setTimePeriod: (period: "am" | "pm") => void;
  selectedTime: HalfHour;
  setSelectedTime: (time: HalfHour) => void;
}

export type Panel = "DatePicker" | "Time";
