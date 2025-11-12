"use client";

import { ReactNode } from "react";
import {
  MODAL_BASE_STYLE,
  MODAL_OVERLAY_STYLE,
  MODAL_CLOSE_ICON_STYLE,
  MODAL_TITLE_STYLE,
  MODAL_DESCRIPTION_STYLE,
  MODAL_BUTTON_STYLE,
  MODAL_ICON_STYLE,
} from "./MODAL_STYLE";
import { cn } from "@/utils";
import { Icon } from "@/types";
import { IconName } from "@/constants/icon";
import Input from "../Input/Input"; // TODO(상인): Input이 배럴패턴으로 등록되면 바꾸기
import { RefObject } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

interface ModalTitleProps {
  title: string;
  className?: string;
}

interface ModalDescriptionProps {
  description: string;
  className?: string;
}

interface ModalButtonProps {
  children: ReactNode;
  className?: string;
}

interface ModalIconProps {
  name: IconName;
  className?: string;
}

interface ModalFormProps {
  children: ReactNode;
  onSubmit: () => void;
}

interface ModalInputProps {
  placeholder: string;
  label?: string;
  error?: string;
  containerClassName?: string;
  ref?: RefObject<HTMLInputElement | null>;
}

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

const ModalCloseIcon = ({ className, onClose }: { className?: string; onClose: (prev: boolean) => void }) => {
  return <Icon name="x" className={cn(MODAL_CLOSE_ICON_STYLE, className)} onClick={(prev) => onClose(!prev)} />;
};

const ModalForm = ({ children, onSubmit }: ModalFormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const ModalInput = ({ placeholder, label, error, containerClassName, ref }: ModalInputProps) => {
  return (
    <Input placeholder={placeholder} label={label} error={error} containerClassName={containerClassName} ref={ref} />
  );
};

Modal.Title = ModalTitle;
Modal.Button = ModalButton;
Modal.Form = ModalForm;
Modal.Input = ModalInput;
Modal.Description = ModalDescription;
Modal.Icon = ModalIcon;
Modal.CloseIcon = ModalCloseIcon;

export default Modal;
