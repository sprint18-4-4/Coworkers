"use client";

import { ReactNode } from "react";
import {
  MODAL_BASE_STYLE,
  MODAL_OVERLAY_STYLE,
  MODAL_STYLE_BY_SIZE,
  MODAL_CLOSE_ICON_STYLE,
  MODAL_TITLE_STYLE,
} from "./MODAL_STYLE";
import { cn } from "@/utils";
import { Icon } from "@/types";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  size?: keyof typeof MODAL_STYLE_BY_SIZE;
}

interface ModalSubProps {
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, children, size = "large", className }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn(MODAL_BASE_STYLE, MODAL_OVERLAY_STYLE, MODAL_STYLE_BY_SIZE[size], className)}>{children}</div>
  );
};

const ModalTitle = ({ children, className }: ModalSubProps) => {
  return <h2 className={cn(MODAL_TITLE_STYLE, className)}>{children}</h2>;
};

const ModalDescription = ({ children, className }: ModalSubProps) => {
  return <p className={className}>{children}</p>;
};

const ModalFooter = ({ children, className }: ModalSubProps) => {
  return <footer className={className}>{children}</footer>;
};

const ModalIcon = ({ children, className }: ModalSubProps) => {
  return <span className={className}>{children}</span>;
};

const ModalCloseIcon = ({ className, onClose }: { className?: string; onClose: (prev: boolean) => void }) => {
  return <Icon name="x" className={cn(MODAL_CLOSE_ICON_STYLE, className)} onClick={(prev) => onClose(!prev)} />;
};

const ModalBody = ({ children, className }: ModalSubProps) => {
  return <div>{children}</div>;
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.Description = ModalDescription;
Modal.Icon = ModalIcon;
Modal.CloseIcon = ModalCloseIcon;

export default Modal;
