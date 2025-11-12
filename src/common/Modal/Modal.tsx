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
} from "./_types/ModalProps";
import { cn } from "@/utils";
import { Icon } from "@/types";
import Input from "../Input/Input";

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

Modal.Title = ModalTitle;
Modal.Button = ModalButton;
Modal.Form = ModalForm;
Modal.Input = ModalInput;
Modal.Description = ModalDescription;
Modal.Icon = ModalIcon;
Modal.CloseIcon = ModalCloseIcon;
Modal.Profile = ModalProfile;
Modal.Repeat = ModalRepeat;

export default Modal;
